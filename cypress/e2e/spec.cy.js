describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qacertificacion.webescuela.cl/sistema/webclass/');
    cy.get('#inputUsuario').type('18365158');
    cy.get('#inputPass').type('12345');
    cy.get('#button').click();
    cy.get(':nth-child(12) > a').click();
    cy.get('#colegiocombobox').select('')
  })
})