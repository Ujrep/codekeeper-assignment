import Input from './Wrapped'

describe('Input Component', () => {
  beforeEach(() => {
    cy.mount(<Input label="Search" name="search" placeholder="Search" />)
  })

  it('renders input', () => {
    cy.get('[data-cy="input"]').should('exist')
  })

  it('renders label', () => {
    cy.get('label').contains('Search')
  })

  it('renders error', () => {
    cy.mount(<Input label="Search" name="search" placeholder="Search" error="Some error" />)

    cy.get('.border-red').should('exist')
  })
})
