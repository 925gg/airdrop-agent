import { DallEAPIWrapper } from "@langchain/openai";

export const generateDallEImage = async (prompt: string) => {
  // const prompt =
  //   'Illustration of Qiuqian lot number 7 featuring the Pig zodiac sign, highlighting themes of financial luck and prosperity, with symbolic elements representing fortune and success.';
  // `Create a drawing of a traditional Chinese Qiuqian lot drawing ceremony. In the center, depict bamboo lots numbered up to 100, and a hand reaching into the jar and pulling out Lot 23. To reflect the lot's message, include symbolic elements like a mix of clear and murky water representing confusion and clarity, and a Pig (the user's Chinese Zodiac sign) watching the scene with curiosity and openness. Also, incorporate Yin-Yang symbol subtly into the imagery to represent balance and duality.`;

  const tool = new DallEAPIWrapper({
    n: 1, // Default
    // size: '512x512',
    // modelName: "dall-e-3",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const imageURL = await tool.invoke(prompt);

  console.log(imageURL);
  return imageURL;
};
