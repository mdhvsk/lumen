import type { NextApiRequest, NextApiResponse } from 'next'
import { getGroqInstance } from '@/utils/groq/GroqSingleton';
import { flashcard_format } from '@/utils/prompts/flashcard_prompts';
import { llama3 } from '@/utils/groq/models';

type RequestBody = {
  transcript: String
}

type ResponseData = {
  flashcards: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const body = req.body as RequestBody

      if (!body.transcript) {
        return res.status(400).json({ error: 'Transcript is required in the request body' })
      }

      // Simple URL validation
      const isTranscriptValid = isValidTranscript(body.transcript)

      if (isTranscriptValid == false){
        return res.status(400).json({ error: 'Invalid string, full transcript required' })
      }

      
      let groq_client = getGroqInstance();
      
      let flashcards = await groq_client.getChatCompletion(flashcard_format,llama3, body.transcript)

      res.status(200).json({
        flashcards: flashcards
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }
}



function isValidTranscript(transcript: String): boolean {
  try {
    if (transcript == "") return false
    return true
  } catch {
    return false
  }
}