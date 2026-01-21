export interface QuestionAnswers {
    id: number, 
    definition: string, 
    correct: string, 
    wrong: string [],
}

export type Category = | "javascript" | "react" | "htmlcss" | "sql" | "acronymes" | "fullpack";