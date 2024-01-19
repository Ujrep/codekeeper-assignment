import Loading from './'

describe('Loading Component', () => {
  beforeEach(() => {
    cy.mount(<Loading />)
  })

  it('renders loading', () => {
    cy.get('.animate-spin').should('exist')
  })
})
