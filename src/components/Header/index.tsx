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
    <div className="flex flex-col w-full mx-auto">
      <div className="flex flex-row justify-between mb-[26px] mobile:mb-[14px] gap-4">
        <Image
          src={user.imageUrl}
          alt="icon"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex flex-col w-full justify-center">
          <h1 className="font-bold text-base leading-[19px]">{user.name}</h1>
          <div className="flex flex-row items-center pt-1 gap-1">
            <span className="w-2 h-2 rounded-full bg-online inline-block animate-pulse" />
            <p className="text-online text-xs leading-[14px]">Online</p>
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
