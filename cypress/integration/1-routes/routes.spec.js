describe('Testing api routes are accessible', () => {

    it('should be able to visit home page', function () {
        cy.request('GET', Cypress.env('baseURL')).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});
