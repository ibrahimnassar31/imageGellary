import express from "express";
import {
   createShortUrl,
   getUrls,
   getUrl,
   deleteUrl,
   redirectToUrl,
} from "../controllers/urlController.js";
import { protect } from "../middlewares/auth.js";
import { asyncHandler } from "../services/asyncHandler.js";

const router = express.Router();

// Public route for redirecting
router.get("/:shortCode", asyncHandler(redirectToUrl));

// TODO: move it down to protecte group, when the AUTH is done
router.post("/", asyncHandler(createShortUrl));

router.get("/", protect, asyncHandler(getUrls));
router.get("/:id", protect, asyncHandler(getUrl));
router.delete("/:id", protect, asyncHandler(deleteUrl));

export default router;
