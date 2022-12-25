// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../model/Product'
import connectDB from '../../middleware/mongoose'
type Data = {
  name: string
}

const handler = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    let products = await Product.find();
    res.status(200).json({Product});
}
export default connectDB(handler);