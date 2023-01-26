import { v4 as uuid } from 'uuid'

import { User } from '~/@types/user'

const user1 = uuid()
const user2 = uuid()

export const users = Array.from(
  new Set<User>([
    {
      id: user1,
      name: 'OsFlash',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: 'Tive uma ideia incrível para um projeto! 😍',
        timestamp: Date.now()
      }
    },
    {
      id: user1,
      name: 'OsFlash',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
        timestamp: Date.now() + 1e3 * 10
      }
    },
    {
      id: user2,
      name: 'me',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: 'Sério? Me conta mais.',
        timestamp: Date.now() + 1e3 * 5
      }
    },
    {
      id: user2,
      name: 'me',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: '#boraCodar! 🚀',
        timestamp: Date.now() + 1e3 * 15
      }
    },

    {
      id: user2,
      name: 'me',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: '#boraCodar! 🚀',
        timestamp: Date.now() + 1e3 * 15
      }
    },
    {
      id: user2,
      name: 'me',
      imageUrl: '/loid.jpg',
      message: {
        uuid: uuid(),
        text: '#boraCodar! 🚀',
        timestamp: Date.now() + 1e3 * 15
      }
    }
  ])
)
