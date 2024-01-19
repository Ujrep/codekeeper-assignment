import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Button from 'src/components/Button'
import { useMediaItemStore } from 'src/store/mediaItem'

const Show = () => {
  const { id } = useParams()
  const [mainImageUrl, setMainImageUrl] = useState<string>()
  const navigate = useNavigate()

  const { activeItem } = useMediaItemStore(
    (state) => ({
      activeItem: state.activeItem,
    }),
    shallow,
  )

  const { title, location, photographer, description, keywords, createdAt } = activeItem

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get(`https://images-api.nasa.gov/asset/${id}`)) as {
        data: {
          collection: {
            items: {
              href: string
            }[]
          }
        }
      }
      const items = response?.data?.collection?.items

      for (let item in items) {
        if (items[item].href.includes('~orig') || items[item].href.includes('~large')) {
          setMainImageUrl(items[item].href)
          return false
        }
      }
    }

    fetchData()
  }, [id])

  const data = [
    {
      type: 'Location',
      value: location,
    },
    {
      type: 'Photographer',
      value: photographer,
    },
    {
      type: 'Description',
      value: description,
    },
    {
      type: 'Keywords',
      value: keywords,
    },
    {
      type: 'Created at',
      value: createdAt,
    },
  ]

  return (
    <div className="flex flex-col gap-4 p-4 lg:px-20">
      <Button name="Go back" type="secondary" onClick={() => navigate(-1)} className="self-start" />

      <div className="flex flex-col gap-4 rounded-lg bg-navy-blue p-4">
        <div
          className="relative h-96 w-full rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url("${mainImageUrl}")` }}></div>
        <span className="grid gap-1">
          <h3 className="font-mulish text-white">{title}</h3>
          {data.map(({ type, value }, key) => (
            <p key={key} className="text-sm font-normal text-white">
              <span className="font-bold">{type}</span>: {value}
            </p>
          ))}
        </span>
      </div>
    </div>
  )
}

export default Show
