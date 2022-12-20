import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body),
    temperature: 0.6,
    max_tokens: 1000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
  // res.status(200)
}

function generatePrompt(input) {
  return `Suggest a diet plan  containing Indian food in winter for a ${input.gender} whose age is ${input.age} and ${input.lifestyle} lifestyle and profession as ${input.proffesion} and aiming for ${input.aim} for a day for breakfast ,lunch and dinner and may include some specilas as well and make it in a tabular form and return it in array form`;
}
