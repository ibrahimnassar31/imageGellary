import URL from "../models/URL.js";
import crypto from "crypto";
import { asyncHandler } from "../services/asyncHandler.js";

// @desc    Create a new short URL
// @route   POST /api/urls
// @access  Private
export const createShortUrl = async (req, res) => {
   const { originalUrl } = req.body;

   // Check if URL already exists for this user
   const existingUrl = await URL.findOne({
      originalUrl,
      user: req?.user?.id ?? null,
   });

   if (existingUrl) {
      return res.json(existingUrl);
   }

   // Generate a random 6-character code
   const shortCode = crypto.randomBytes(3).toString("hex");
   // Set the short URL based on the code
   const shortUrl = `${process.env.BASE_URL || "http://localhost:5000"}/${shortCode}`;

   // Create new URL
   const url = await URL.create({
      originalUrl,
      user: req?.user?.id ?? null,
      shortCode,
      shortUrl,
   });

   res.status(201).json(url);
};

// @desc    Get all URLs for a user
// @route   GET /api/urls
// @access  Private
export const getUrls = async (req, res) => {
   const urls = await URL.find({ user: req.user.id }).sort({ createdAt: -1 });
   res.json(urls);
};

// @desc    Get a single URL
// @route   GET /api/urls/:id
// @access  Private
export const getUrl = async (req, res) => {
   const url = await URL.findById(req.params.id);

   if (!url) {
      return res.status(404).json({ message: "URL not found" });
   }

   // Check if user owns the URL
   if (url.user && url.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
   }

   res.json(url);
};

// @desc    Delete a URL
// @route   DELETE /api/urls/:id
// @access  Private
export const deleteUrl = async (req, res) => {
   const url = await URL.findById(req.params.id);

   if (!url) {
      return res.status(404).json({ message: "URL not found" });
   }

   // Check if user owns the URL
   if (url.user && url.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
   }

   await url.deleteOne();
   res.json({ message: "URL removed" });
};

// @desc    Redirect to original URL
// @route   GET /:shortCode
// @access  Public
export const redirectToUrl = async (req, res) => {
   const url = await URL.findOne({ shortCode: req.params.shortCode });

   if (!url) {
      return res.status(404).json({ message: "URL not found" });
   }

   // Increment clicks
   url.clicks += 1;
   await url.save();

   // Redirect to original URL
   res.redirect(url.originalUrl);
};
