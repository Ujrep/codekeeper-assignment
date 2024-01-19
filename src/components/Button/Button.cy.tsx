import Button from './'

describe('Button Component', () => {
  it('renders button with correct text', () => {
    cy.mount(<Button name="Click" />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.bg-main-blue').contains('Click')
  })

  it('renders button with default type', () => {
    cy.mount(<Button name="Click" />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.bg-main-blue').should('exist')
  })

  it('renders button with secondary type', () => {
    cy.mount(<Button name="Click" type="secondary" />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.border-main-blue').should('exist')
  })

  it('renders button with small size', () => {
    cy.mount(<Button name="Click" size="S" />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.text-xxs').should('exist')
  })

  it('renders button as disabled', () => {
    cy.mount(<Button name="Click" disabled />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.pointer-events-none').should('exist')
  })

  it('renders button extra class names', () => {
    cy.mount(<Button name="Click" className="some-class-name" />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.some-class-name').should('exist')
  })

  it('renders button with loading', () => {
    cy.mount(<Button name="Click" loading />)

    cy.get('[data-cy="button"]').should('exist')
    cy.get('.animate-spin').should('exist')
  })
})
