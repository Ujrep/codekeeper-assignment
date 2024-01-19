import Header from './'

describe('Header Component', () => {
  beforeEach(() => {
    cy.mount(<Header />)
  })

  it('renders header', () => {
    cy.get('header').should('exist')
    cy.get('header').contains('Hello Codekeeper, this is my assignment')
  })
})
