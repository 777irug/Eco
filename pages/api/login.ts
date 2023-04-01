import type { NextApiRequest, NextApiResponse } from 'next';


export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const email = request.email;
  const password = request.password;

  if(email === 'Admin@mail.com' && password === '123') {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
}
