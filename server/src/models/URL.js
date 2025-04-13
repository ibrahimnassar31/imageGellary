import mongoose from 'mongoose';
import crypto from 'crypto';

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, 'Original URL is required'],
    trim: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Optional, for guest users
  },
  clicks: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  expiresAt: {
    type: Date,
    default: null // Optional expiration date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Generate short code before saving
urlSchema.pre('save', function(next) {
  if (!this.isModified('shortCode')) {
    // Generate a random 6-character code
    this.shortCode = crypto.randomBytes(3).toString('hex');
    // Set the short URL based on the code
    this.shortUrl = `${process.env.BASE_URL || 'http://localhost:5000'}/${this.shortCode}`;
  }
  next();
});

const URL = mongoose.model('URL', urlSchema);

export default URL; 