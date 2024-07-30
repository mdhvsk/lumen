import Groq from "groq-sdk";


class GroqSingleton {
    private static instance: GroqSingleton;
    private groq: Groq;
  
    private constructor() {
      this.groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    }
  
    public static getInstance(): GroqSingleton {
      if (!GroqSingleton.instance) {
        GroqSingleton.instance = new GroqSingleton();
      }
      return GroqSingleton.instance;
    }

    public async getChatCompletion(prompt: string, model: string, content: String) {
        const chatCompletion = await this.groq.chat.completions.create({
          messages: [
            {
                role: "user",
                content: prompt + content
            }
          ],
          model: model,
        });
        return chatCompletion.choices[0].message.content

      }

}

export const getGroqInstance = GroqSingleton.getInstance;
