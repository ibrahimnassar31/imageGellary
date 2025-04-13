import URL from '../models/URL.js';

// @desc    Create a new short URL
// @route   POST /api/urls
// @access  Private
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // Check if URL already exists for this user
    const existingUrl = await URL.findOne({ 
      originalUrl, 
      user: req.user.id 
    });

    if (existingUrl) {
      return res.json(existingUrl);
    }

    // Create new URL
    const url = await URL.create({
      originalUrl,
      user: req.user.id
    });

    res.status(201).json(url);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all URLs for a user
// @route   GET /api/urls
// @access  Private
export const getUrls = async (req, res) => {
  try {
    const urls = await URL.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get a single URL
// @route   GET /api/urls/:id
// @access  Private
export const getUrl = async (req, res) => {
  try {
    const url = await URL.findById(req.params.id);
    
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    // Check if user owns the URL
    if (url.user && url.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(url);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a URL
// @route   DELETE /api/urls/:id
// @access  Private
export const deleteUrl = async (req, res) => {
  try {
    const url = await URL.findById(req.params.id);
    
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    // Check if user owns the URL
    if (url.user && url.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await url.deleteOne();
    res.json({ message: 'URL removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Redirect to original URL
// @route   GET /:shortCode
// @access  Public
export const redirectToUrl = async (req, res) => {
  try {
    const url = await URL.findOne({ shortCode: req.params.shortCode });
    
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    // Increment clicks
    url.clicks += 1;
    await url.save();

    // Redirect to original URL
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}; 