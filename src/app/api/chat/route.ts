import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { message } = await req.json();

    // 🔥 MOCK DATA (sənin FAQ)
    const faq = [
        {
            question: "Axtardığım məhsulu necə sifariş edə bilərəm?",
            answer: "info@universal-az.com vasitəsilə müraciət edə bilərsiniz."
        },
        {
            question: "Hansı brendlərlə işləyirsiniz?",
            answer: "Partnyorlar bölməsinə baxın."
        }
    ];

    // 🔍 sadə search (RAG-in sadə versiyası)
    const context = faq
        .map(f => `Q: ${f.question}\nA: ${f.answer}`)
        .join("\n");

    const prompt = `
You are a professional assistant for Universal Group.

ROLE:
- You help users by answering questions based on company information.

STRICT RULES:
- ALWAYS reply in English
- NEVER use Azerbaijani or Turkish
- Even if the user writes in another language, reply ONLY in English

- Use ONLY the provided context
- DO NOT invent, assume, or guess any information
- DO NOT repeat the question
- DO NOT list Q/A pairs
- DO NOT add greetings or extra text

- If the answer is NOT found in the context:
  reply EXACTLY with:
  "I couldn't find that information."

FORMAT:
- Give a short, clear, natural sentence
- Be direct and professional

CONTEXT:
${context}

USER QUESTION:
${message}

FINAL ANSWER (ENGLISH ONLY):
`;

    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            model: "phi3",
            prompt,
            stream: false
        })
    });

    const data = await res.json();

    return NextResponse.json({
        reply: data.response
    });
}