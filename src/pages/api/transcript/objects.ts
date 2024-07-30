import type { NextApiRequest, NextApiResponse } from 'next'
import { YoutubeTranscript } from 'youtube-transcript';
import React, { useState } from 'react';

type RequestBody = {
  url: string
}

type ResponseData = {
  transcript: object[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | { error: string }>
) {
  if (req.method === 'POST') {
    try {
      const body = req.body as RequestBody

      if (!body.url) {
        return res.status(400).json({ error: 'URL is required in the request body' })
      }

      // Simple URL validation
      const isValidUrl = isValidURL(body.url)

      if (isValidUrl == false){
        return res.status(400).json({ error: 'Invalid URL, youtube video URL required' })
      }
      
      let response = await YoutubeTranscript.fetchTranscript(body.url, { lang:'en'});

      res.status(200).json({
        transcript: response
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }
}



function isValidURL(url: string): boolean {
  try {
    if (url.startsWith("https://www.youtube.com/watch?v=")){
        return true
    } else {
        return false
    }
  } catch {
    return false
  }
}