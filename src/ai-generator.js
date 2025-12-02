import OpenAI from "openai";

export async function generateAIResponse(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  const client = new OpenAI({ apiKey });

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return completion.choices[0].message.content;
}
