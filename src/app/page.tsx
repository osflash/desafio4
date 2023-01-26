'use client'

import { useState } from 'react'

import { v4 as uuid } from 'uuid'

import { Header } from '~/components/Header'
import { Messages } from '~/components/Messages'
import { Send } from '~/components/Send'

const data = [
  {
    id: '8a8defc3-f6b6-4216-986f-f1f2b8d3dd00',
    name: 'OsFlash',
    imageUrl: '/loid.jpg',
    message: {
      uuid: 'f6c5a323-2eb1-46d3-bc29-8c9e7c317a05',
      text: 'Tive uma ideia incrível para um projeto! 😍',
      timestamp: 1674740381672
    }
  },
  {
    id: '8a8defc3-f6b6-4216-986f-f1f2b8d3dd00',
    name: 'OsFlash',
    imageUrl: '/loid.jpg',
    message: {
      uuid: 'd0a55426-606f-4ce9-b4ef-63b27135a63a',
      text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
      timestamp: 1674740391672
    }
  },
  {
    id: 'f0496db8-b96b-4ea5-9f55-70b1192170d7',
    name: 'me',
    imageUrl: '/loid.jpg',
    message: {
      uuid: '04c705bf-b457-4e35-a859-e8fc3432280c',
      text: 'Sério? Me conta mais.',
      timestamp: 1674740386672
    }
  },
  {
    id: 'f0496db8-b96b-4ea5-9f55-70b1192170d7',
    name: 'me',
    imageUrl: '/loid.jpg',
    message: {
      uuid: '5c9f28d8-19e3-4039-a958-63dfda76ced3',
      text: '#boraCodar! 🚀',
      timestamp: 1674740396672
    }
  },
  {
    id: 'f0496db8-b96b-4ea5-9f55-70b1192170d7',
    name: 'me',
    imageUrl: '/loid.jpg',
    message: {
      uuid: 'cff31b9c-d533-4fed-ad38-0e1905cb7a21',
      text: '#boraCodar! 🚀',
      timestamp: 1674740396672
    }
  },
  {
    id: 'f0496db8-b96b-4ea5-9f55-70b1192170d7',
    name: 'me',
    imageUrl: '/loid.jpg',
    message: {
      uuid: '4e90f4b1-8b88-4540-9235-c323c42ffd7e',
      text: '#boraCodar! 🚀',
      timestamp: 1674740396672
    }
  }
]

const Home = () => {
  const [users, setUsers] = useState(data)

  const user = users.find(({ name }) => name === 'OsFlash')

  if (!user) return null

  const handleAddMessage = (text: string) => {
    setUsers(prevUsers => [
      ...prevUsers,
      {
        id: 'f0496db8-b96b-4ea5-9f55-70b1192170d7',
        name: 'me',
        imageUrl: 'loid.jpg',
        message: {
          text,
          uuid: uuid(),
          timestamp: Date.now()
        }
      }
    ])
  }

  return (
    <div className="flex w-full flex-col items-center justify-between mobile:mx-[72px] mobile:my-8 mx-8 my-6">
      <Header user={user} />

      <Messages userId={user.id} users={users} />

      <Send handleAddMessage={handleAddMessage} />
    </div>
  )
}

export default Home
