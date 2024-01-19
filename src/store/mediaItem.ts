import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'

import { formatDate } from 'src/utils'

interface IItem {
  title: string
  location: string
  photographer: string
  description: string
  keywords: string[]
  date_created: string
}

interface IActiveItem {
  title: string
  location: string
  photographer: string
  description: string
  keywords: string
  createdAt: string
}

interface IMediaItem {
  activeItem: IActiveItem
  setActiveItem: (item: IItem) => void
}

export const useMediaItemStore = createWithEqualityFn<IMediaItem>()(
  persist(
    (set) => ({
      activeItem: {
        title: '',
        location: '',
        photographer: '',
        description: '',
        keywords: '',
        createdAt: '',
      },
      setActiveItem: (item) =>
        set(() => ({
          activeItem: {
            title: item.title,
            location: item.location,
            photographer: item.photographer,
            description: item.description,
            keywords: item.keywords?.join(', '),
            createdAt: formatDate(item.date_created),
          },
        })),
    }),
    {
      name: 'media-item-storage',
    },
  ),
  Object.is,
)
