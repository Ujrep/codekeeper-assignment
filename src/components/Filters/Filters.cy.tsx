import Filters from './'

describe('Filters Component', () => {
  beforeEach(() => {
    cy.mount(<Filters onSubmit={() => {}} />)
  })

  it('renders filters', () => {
    cy.get('[data-cy="filters"]').should('exist')
  })

  it('renders filters form', () => {
    cy.get('form').should('exist')
  })

  it('renders filters form', () => {
    cy.get('[data-cy="input"]').should('have.length', 3)
  })

  it('renders filters action button', () => {
    cy.get('[data-cy="button"]').should('exist')
  })
})
