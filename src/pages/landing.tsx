import { ArrowRight, Mic, SquarePlay } from 'lucide-react';
import React from 'react'

type Props = {}

const landing = (props: Props) => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
          <header className="p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Lumen</div>
            <div className="text-sm">mdhvsk</div>
          </header>
          
          <main className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl mb-8 text-red-500">Convert your youtube lectures to flashcards</h1>
            
            <div className="w-full max-w-2xl">
              <div className="bg-gray-800 rounded-full flex items-center p-2 mb-8">
                <SquarePlay className="text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Paste youtube link"
                  className="bg-transparent flex-grow mx-4 focus:outline-none"
                />
                <button className="bg-gray-700 rounded-full p-2">
                  <ArrowRight className="text-white" />
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['What is AI inference', 'What is generative AI', 'Why fast inference matters'].map((text, index) => (
                  <button key={index} className="bg-gray-800 px-4 py-2 rounded-md">
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      );
}

export default landing