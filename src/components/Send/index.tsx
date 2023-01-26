'use client'

import { FormEvent, MouseEventHandler, useState } from 'react'

import { PaperPlaneRight } from 'phosphor-react'

interface SendProps {
  handleAddMessage: (text: string) => void
}

export const Send: React.FC<SendProps> = ({ handleAddMessage }) => {
  const [message, setMessage] = useState('')

  const handleSendClick = (e: FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    handleAddMessage(message)

    setMessage('')
  }

  return (
    <form onSubmit={handleSendClick} className="mt-6 w-full">
      <div className="flex h-[52px] justify-between gap-[10px] rounded-full bg-input py-[14px] px-6">
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full bg-transparent text-xs leading-[14px] outline-none "
        />
        <button type="submit">
          <PaperPlaneRight
            size={22}
            className="animate-pulse cursor-pointer rounded-full transition duration-500 ease-out hover:blur-sm hover:ease-in"
          />
        </button>
      </div>
    </form>
  )
}
