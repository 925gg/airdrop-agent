import { ChatOpenAI } from "@langchain/openai";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { TopicEnum } from "../frames/constants";


export const generateQiuqianLot = async (
  birthYear: number,
  topic: TopicEnum
) => {
  // - Current Relationship Metrics with the Oracle: ${dialog.metrics}
  const prompt = `
    Create a Chinese Astrology fortune-telling experience based on Qiuqian (求籤) combined with the Chinese Zodiac. 
I. Input: User will provide the following information
  1. Topic Selection: The user chooses from Love, Money, or Health. 
  2. Chinese Zodiac Sign Input: The user provides their birth year or directly states their Chinese Zodiac sign.
  3. Current year: 2024 (Year of Dragon) by default.

II. Output: Generate a Qiuqian lot (represented by a numbered bamboo stick)  and return following information in JSON format
  1. zodiac: User's zodiac sign based on user's birth year.
  2. lot_number: the lot number
  3. lot_type: 上籤, 中籤 or下籤
  4. lot_content: Provide full original traditional content in Chinese corresponding to the lot number.
  5. Interpretation (in English): The system interprets the Qiuqian message based on the user's Chinese Zodiac sign, incorporating the Five Elements and Yin-Yang theory, and also the current date based on the Chinese calendar. The interpretation should include insights relevant to the selected topic.
  6. Luck Score: Assign a Luck score from 1 to 10, based on how well the fortune aligns with the user’s Zodiac sign and the current year’s energy. This distribution of Luck Score should ensure that higher Luck Scores (8-10) are more likely to come from 上籤 that represent success, positivity, or favorable outcomes, while lower Luck Scores (1-3) are tied to 下籤 that traditionally indicate challenges or obstacles, with probabilities that reflect a real life experience with qiuqian.
  7. Lucky Tokens: If a 上籤 is drawn, the user receives a random number of Lucky tokens (from 10 to 100), otherwise 0
  8. Dall-e_prompt: Generate a detailed prompt as input for Dall-E to generate an illustration for this lot (with number & user's zodiac sign)`;
  const llm = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    modelKwargs: { response_format: { type: "json_object" } },
    temperature: 1,
  });

  const parser = StructuredOutputParser.fromNamesAndDescriptions({
    zodiac: "User's zodiac sign",
    lotNumber: "Lot number",
    lotType: "The type (上籤, 中籤 or下籤) corresponding to the lot number",
    lotContent:
      "full original traditional content in Chinese corresponding to the lot number",
    interpretation:
      "The system interprets (in English) the Qiuqian message based on the user's Chinese Zodiac sign, incorporating the Five Elements and Yin-Yang theory, and also the current date based on the Chinese calendar. The interpretation should include insights relevant to the selected topic.",
    luckScore:
      "Assign a Luck score from 1 to 10, based on how well the fortune aligns with the user’s Zodiac sign and the current year’s energy. This distribution of Luck Score should ensure that higher Luck Scores (8-10) are more likely to come from 上籤 that represent success, positivity, or favorable outcomes, while lower Luck Scores (1-3) are tied to 下籤 that traditionally indicate challenges or obstacles, with probabilities that reflect a real life experience with qiuqian",
    luckyTokens:
      "If lot type is 上籤, the user receives a random number of Lucky tokens (from 10 to 100), otherwise 0",
    prompt:
      "Generate a detailed prompt as input for Dall-E to generate an illustration for this lot (the image must include lot number & user's zodiac sign)",
  });

  const prompts = ChatPromptTemplate.fromMessages([
    {
      role: "system",
      content: `${prompt}. \n{format_instructions}`,
    },
    {
      role: "human",
      content: `Topic: ${topic}. Birth year: ${birthYear}.`,
    },
  ]);
  const chain = RunnableSequence.from([prompts, llm, parser]);

  const response = await chain.invoke({
    format_instructions: parser.getFormatInstructions(),
  });
  console.log(response);
  return response;
};
