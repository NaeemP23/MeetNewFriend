describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it('opens up email sign in', () => {
    cy.visit ('/');
    cy.contains('Sign in with email')
  });

  it('Google sign in', () => {
    cy.visit ('/restaurant');
    cy.get('[data-cy=cuisines]').should('contain', 'American');
  });

});
