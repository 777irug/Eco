import type { NextApiRequest, NextApiResponse } from 'next';

// fake data for internal singal pages
import products from '../../../utils/data/products';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req

  const product = products.find(x => x.id === pid);
  res.status(200).json(product);
}

