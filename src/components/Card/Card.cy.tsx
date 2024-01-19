import { BrowserRouter } from 'react-router-dom'

import Card from './'

const item = {
  data: [
    {
      nasa_id: 'some-id',
      title: 'Title',
      location: 'Location',
      photographer: 'Photographer',
      description: 'Some description',
      keywords: ['keyword 1', 'keyword 2'],
      date_created: 'string',
    },
  ],
  href: 'some-href.png',
  links: [{ href: 'some-href.png' }],
}

describe('Card Component', () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <Card item={item} />
      </BrowserRouter>,
    )
  })

  it('renders card', () => {
    cy.get('[data-cy="card"]').should('exist')
  })

  it('renders card with the correct thumbnail', () => {
    cy.get('[data-cy="thumbnail"]')
      .should('have.css', 'background-image')
      .and('include', 'some-href.png')
  })

  it('renders card with all the text', () => {
    cy.get('[data-cy="card"]').contains('Title')
    cy.get('[data-cy="card"]').contains('Location: Location')
    cy.get('[data-cy="card"]').contains('Photographer: Photographer')
  })

  it('renders card action button', () => {
    cy.get('[data-cy="button"]').should('exist')
  })
})
