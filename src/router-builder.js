import express from "express";
import { generateAIResponse } from "./ai-generator.js";

export function buildAIMockRouter() {
  const router = express.Router();

  router.get("/generate", async (req, res) => {
    try {
      const prompt = req.query.prompt || "Generate mock data";
      const response = await generateAIResponse(prompt);
      res.json({ prompt, response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}
