'use client'

import clsx from 'clsx'
import ms from 'ms'

import { User } from '~/@types/user'

interface MessagesProps {
  userId: string
  users: User[]
}

export const Messages: React.FC<MessagesProps> = ({ userId, users }) => {
  return (
    <div className="w-full overflow-y-auto ">
      {users.map(user => {
        const isUser = user.id === userId

        return (
          <div
            key={user.message.uuid}
            ref={element => element?.scrollIntoView()}
            className={clsx('flex flex-col my-[30px]', {
              'items-start ': isUser,
              'items-end': !isUser
            })}
          >
            <h2 className="text-xs leading-[14px] mb-[10px]">
              {isUser ? user.name : 'Você '} -{' '}
              {ms(Date.now() - user.message.timestamp, { long: true })}
            </h2>
            <p
              className={clsx('p-[14px] text-xs leading-[14px ', {
                'bg-user rounded-r-lg rounded-bl-lg': isUser,
                'bg-me rounded-l-lg rounded-br-lg': !isUser
              })}
            >
              {user.message.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
