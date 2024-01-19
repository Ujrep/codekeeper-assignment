import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import Button from 'src/components/Button'
import { useMediaItemStore } from 'src/store/mediaItem'

export interface IItem {
  data: {
    nasa_id: string
    title: string
    location: string
    photographer: string
    description: string
    keywords: string[]
    date_created: string
  }[]
  href: string
  links: { href: string }[]
}

const Card = ({ item }: { item: IItem }) => {
  const navigate = useNavigate()
  const { setActiveItem } = useMediaItemStore(
    (state) => ({
      setActiveItem: state.setActiveItem,
    }),
    shallow,
  )

  const thumbnail = item?.links ? item?.links[0]?.href : ''
  const { title, location, photographer, nasa_id } = item?.data[0] || {}

  const data = [
    {
      type: 'Location',
      value: location,
    },
    {
      type: 'Photographer',
      value: photographer,
    },
  ]

  const navigateToItem = () => {
    setActiveItem(item.data[0])

    navigate(`/${nasa_id}`)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-navy-blue p-4" data-cy="card">
      <div
        className="relative h-40 w-full rounded-lg bg-cover bg-center"
        data-cy="thumbnail"
        style={{ backgroundImage: `url("${thumbnail}")` }}></div>

      <span className="grid gap-1">
        <h3 className="mt-2 truncate font-mulish text-white md:mt-4">{title}</h3>
        {data.map(({ type, value }, key) => (
          <p key={key} className="text-sm font-normal text-white">
            <span className="font-bold">{type}</span>: {value}
          </p>
        ))}
      </span>
      <span className="grid grid-flow-row justify-end gap-1">
        <Button name="View" onClick={() => navigateToItem()} />
      </span>
    </div>
  )
}

export default Card
