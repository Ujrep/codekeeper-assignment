import { objectToQueryString, formatDate } from './utils'

describe('Utils', () => {
  it('should format the object to the query string', () => {
    const object = {
      type: 'some-type',
      size: 3,
      count: 4,
    }

    const queryString = objectToQueryString(object)

    cy.wrap(queryString).should('eq', 'type=some-type&size=3&count=4')
  })

  it('should format date correctly', () => {
    const testDate = '2024-01-19T12:34:56.789Z'

    const formattedDate = formatDate(testDate)

    cy.wrap(formattedDate).should('eq', '19/01/2024')
  })
})
