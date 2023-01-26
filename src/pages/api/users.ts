import type { NextApiHandler } from 'next'

import { users } from '~/utils'

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(users)
}

export default handler
