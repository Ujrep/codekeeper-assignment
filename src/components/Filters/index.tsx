import { useForm } from 'react-hook-form'

import WrappedInput from 'src/components/Input/Wrapped'
import Button from 'src/components/Button'

export interface IFiltersData {
  search: string
  startYear: number
  endYear: number
}

interface IFilters {
  onSubmit: (data: IFiltersData) => void
}

const Filters = ({ onSubmit }: IFilters) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const handleSearch = async ({ search, startYear, endYear }: IFiltersData) => {
    onSubmit({
      search,
      startYear,
      endYear,
    })
  }

  return (
    <div
      className="flex h-full flex-col justify-between gap-4 rounded-xl bg-navy-blue p-4"
      data-cy="filters">
      <h3 className="text-white">Filter by</h3>
      <form
        className="grid gap-2"
        onSubmit={handleSubmit((data) => handleSearch(data as IFiltersData))}>
        <div className="grid gap-4 md:grid-flow-col">
          <WrappedInput
            placeholder="Search input"
            label="Search"
            error={errors.email}
            {...register('search', {
              required: 'Required field',
            })}
          />
          <WrappedInput
            placeholder="2004"
            label="Start year"
            error={errors.startYear}
            type="number"
            {...register('startYear', {
              pattern: { value: /^\d{4}$/, message: 'Incorrect year format' },
            })}
          />
          <WrappedInput
            placeholder="2023"
            label="End year"
            error={errors.endYear}
            type="number"
            {...register('endYear', {
              pattern: { value: /^\d{4}$/, message: 'Incorrect year format' },
            })}
          />
        </div>
        <Button name="Search" disabled={!isValid} className="self-center" />
      </form>
    </div>
  )
}

export default Filters
