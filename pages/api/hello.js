// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchGasPrice } from "../libs/functions"

export default async function handler(req, res) {
  res.status(200).json({ message: "Hello World!" })
}