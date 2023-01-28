'use client'

import clsx from 'clsx'

import { User } from '~/@types/user'
import { getRelativeTimeString } from '~/utils'

interface MessagesProps {
  userId: string
  users: User[]
}

const dtf = new Intl.DateTimeFormat('pt-BR', {
  timeStyle: 'full'
})

export const Messages: React.FC<MessagesProps> = ({ userId, users }) => {
  const messages = users.sort(
    (a, b) => a.message.timestamp - b.message.timestamp
  )

  return (
    <div className="w-full overflow-y-auto ">
      {messages.map(user => {
        const isUser = user.id === userId

        return (
          <div
            key={user.message.uuid}
            ref={element => element?.scrollIntoView()}
            className={clsx('my-[30px] flex flex-col', {
              'items-start ': isUser,
              'items-end': !isUser
            })}
          >
            <h2 className="mb-[10px] text-xs leading-[14px]">
              {`${isUser ? user.name : 'Você'} - ${getRelativeTimeString(
                user.message.timestamp
              )}`}
            </h2>
            <p
              className={clsx('leading-[14px p-[14px] text-xs ', {
                'rounded-r-lg rounded-bl-lg bg-user': isUser,
                'rounded-l-lg rounded-br-lg bg-me': !isUser
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
