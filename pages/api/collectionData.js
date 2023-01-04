// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require('../../data/collectionData')
export default function handler(req, res) {
  res.status(200).json(data)
}
