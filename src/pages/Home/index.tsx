import { useEffect, useReducer } from 'react'
import axios from 'axios'

import Filters, { IFiltersData } from 'src/components/Filters'
import Pagination from 'src/components/Pagination'
import Loading from 'src/components/Loading'
import Card, { IItem } from 'src/components/Card'
import { objectToQueryString } from 'src/utils'

const itemsPerPage = 20

interface IMediaState {
  items: IItem[] | []
  loading: boolean
  currentPage: number
  totalCount: number
  search: string
  startYear?: number
  endYear?: number
}

type IMediaAction =
  | { type: 'UPDATE_PAGE'; value: number }
  | { type: 'SET_LOADING'; value: boolean }
  | {
      type: 'SET_ITEMS'
      items: IItem[]
      count: number
      loading: boolean
    }
  | { type: 'SET_FILTERS'; value: IFiltersData }

const mediaReducer = (state: IMediaState, action: IMediaAction): IMediaState => {
  if (action.type === 'UPDATE_PAGE') {
    return {
      ...state,
      currentPage: action.value,
    }
  } else if (action.type === 'SET_ITEMS') {
    return {
      ...state,
      items: action.items,
      totalCount: action.count,
      loading: action.loading,
    }
  } else if (action.type === 'SET_FILTERS') {
    return {
      ...state,
      search: action.value.search,
      startYear: action.value.startYear,
      endYear: action.value.endYear,
    }
  } else if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
      items: [],
    }
  }

  return state
}

const Home = () => {
  const [state, dispatch] = useReducer(mediaReducer, {
    items: [],
    currentPage: 1,
    totalCount: 0,
    search: '',
    loading: false,
  })

  useEffect(() => {
    const fetchItems = async () => {
      dispatch({
        type: 'SET_LOADING',
        value: true,
      })

      const searchParams = objectToQueryString({
        media_type: 'image',
        page: state.currentPage,
        page_size: itemsPerPage,
        q: state.search,
        year_start: state.startYear,
        year_end: state.endYear,
      })

      const response = (await axios.get(`https://images-api.nasa.gov/search?${searchParams}`)) as {
        data: {
          collection: {
            items: IItem[]
            metadata: {
              total_hits: number
            }
          }
        }
      }
      const collection = response?.data?.collection

      dispatch({
        type: 'SET_ITEMS',
        items: collection.items,
        count: collection.metadata.total_hits,
        loading: false,
      })
    }

    fetchItems()
  }, [state.currentPage, state.search, state.startYear, state.endYear])

  const searchItems = async (data: IFiltersData) => {
    dispatch({
      type: 'SET_FILTERS',
      value: data,
    })
  }

  const nextPage = async () => {
    if (state.currentPage < Math.ceil(state.totalCount / itemsPerPage)) {
      dispatch({
        type: 'UPDATE_PAGE',
        value: state.currentPage + 1,
      })
    }
  }

  const prevPage = async () => {
    if (state.currentPage > 1) {
      dispatch({
        type: 'UPDATE_PAGE',
        value: state.currentPage - 1,
      })
    }
  }

  return (
    <div className="grid gap-6 p-4 lg:px-20">
      <Filters onSubmit={(data: IFiltersData) => searchItems(data)} />
      {state.loading && <Loading />}
      {state.items.length ? (
        <div className="flex flex-col gap-2">
          <div className="grid gap-4 rounded-xl md:grid-cols-2 lg:grid-cols-4">
            {state.items.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
          <Pagination
            currentPage={state.currentPage}
            totalCount={state.totalCount}
            itemsPerPage={itemsPerPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      ) : null}
      {!state.items.length && !state.loading && (
        <h2 className="flex flex-col gap-4 rounded-lg bg-navy-blue p-4 text-center text-white">
          No items found
        </h2>
      )}
    </div>
  )
}

export default Home
