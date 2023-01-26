'use client'

import Image from 'next/image'

import ms from 'ms'
import { X } from 'phosphor-react'

import { User } from '~/@types/user'

interface HeaderProps {
  user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <div className="mb-[26px] flex flex-row justify-between gap-4 mobile:mb-[14px]">
        <Image
          src={user.imageUrl}
          alt="icon"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex w-full flex-col justify-center">
          <h1 className="text-base font-bold leading-[19px]">{user.name}</h1>
          <div className="flex flex-row items-center gap-1 pt-1">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-online" />
            <p className="text-xs leading-[14px] text-online">Online</p>
          </div>
        </div>

        <X
          size={32}
          className="flex h-full cursor-pointer"
          onClick={() => window.location.reload()}
        />
      </div>

      <p className="text-center text-xs leading-[14px]">
        {ms(Date.now() - user.message.timestamp, { long: true })}
      </p>
    </div>
  )
}
