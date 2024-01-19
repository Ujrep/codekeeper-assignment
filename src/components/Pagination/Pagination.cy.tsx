import Pagination from './'

describe('Pagination Component', () => {
  it('renders hidden pagination if totalCount < itemsPerPage', () => {
    cy.mount(
      <Pagination
        currentPage={1}
        totalCount={12}
        itemsPerPage={20}
        nextPage={() => {}}
        prevPage={() => {}}
      />,
    )

    cy.get('[data-cy="pagination"]').should('not.exist')
  })

  it('renders pagination', () => {
    cy.mount(
      <Pagination
        currentPage={1}
        totalCount={42}
        itemsPerPage={20}
        nextPage={() => {}}
        prevPage={() => {}}
      />,
    )

    cy.get('[data-cy="pagination"]').should('exist')
  })

  it('renders pagination buttons', () => {
    cy.mount(
      <Pagination
        currentPage={1}
        totalCount={42}
        itemsPerPage={20}
        nextPage={() => {}}
        prevPage={() => {}}
      />,
    )

    cy.get('span').eq(0).contains('Previous')
    cy.get('span').eq(1).contains('1-20 of 42')
    cy.get('span').eq(2).contains('Next')
  })

  it('renders pagination disable previous button when on the first page', () => {
    cy.mount(
      <Pagination
        currentPage={1}
        totalCount={42}
        itemsPerPage={20}
        nextPage={() => {}}
        prevPage={() => {}}
      />,
    )

    cy.get('span').eq(0).should('have.class', 'pointer-events-none')
  })

  it('renders pagination disable next button when on the last page', () => {
    cy.mount(
      <Pagination
        currentPage={3}
        totalCount={42}
        itemsPerPage={20}
        nextPage={() => {}}
        prevPage={() => {}}
      />,
    )

    cy.get('span').eq(2).should('have.class', 'pointer-events-none')
  })
})
