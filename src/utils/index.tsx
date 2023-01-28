import { v4 as uuid } from 'uuid'

import { User } from '~/@types/user'

const user1 = 'uuid()1'
const user2 = 'uuid()2'

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

// https://dev.to/builderio/fast-and-light-relative-time-strings-in-js-khg
export function getRelativeTimeString(date: Date | number): string {
  // Allow dates or times to be passed
  const timeMs = typeof date === 'number' ? date : date.getTime()

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity
  ]

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year'
  ]

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}
