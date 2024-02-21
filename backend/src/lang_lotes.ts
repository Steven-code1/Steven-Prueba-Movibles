import {OpenAI} from "langchain";
import {RetrievalQAChain} from "langchain/chains";
import {PDFLoader} from "langchain/document_loaders/fs/pdf";
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {MemoryVectorStore} from "langchain/vectorstores/memory";
import * as dotenv from 'dotenv';
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"


dotenv.config()
export const process_doc = async (filename: string | undefined, question: string) => {
    const millave = process.env["OPENAI_API_KEY"];
    const model = new OpenAI({
        openAIApiKey: millave,
        modelName: 'davinci-002'
    });
    const loader = new PDFLoader(`/Users/steve/OneDrive/Escritorio/D.M/mobil-2-main/backend/uploads/${filename}`, {
        splitPages: false
    })
    const doc = await loader.load()

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    })
    const lote = await splitter.splitDocuments(doc);

    const vectorStore = await MemoryVectorStore.fromDocuments(lote, new OpenAIEmbeddings())
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
