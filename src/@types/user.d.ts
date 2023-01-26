interface Message {
  uuid: string
  text: string
  timestamp: number
}

export interface User {
  id: string
  name: string
  imageUrl: string
  message: Message
}
