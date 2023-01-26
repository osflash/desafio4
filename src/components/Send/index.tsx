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
    <form onSubmit={handleSendClick} className="w-full mt-6">
      <div className="flex h-[52px] rounded-full py-[14px] px-6 bg-input justify-between gap-[10px]">
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="bg-transparent outline-none text-xs leading-[14px] w-full "
        />
        <button type="submit">
          <PaperPlaneRight
            size={22}
            className="rounded-full cursor-pointer transition duration-500 ease-out hover:ease-in animate-pulse hover:blur-sm"
          />
        </button>
      </div>
    </form>
  )
}
