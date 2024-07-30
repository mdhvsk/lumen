let flashcard_format = `
Take the transcript of this educational video given and provide back a list of flashcards based on the transcript 
as a list of dictionaries in json. The output should follow the following pattern: 
{
    flashcards: 
    [
        {
            title: main idea as a one sentence summary,
            details: one paragraph explaining the idea in detail
        }
    ]

}
Do not return back any text besides the json output
`

export {flashcard_format}

