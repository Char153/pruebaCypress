describe('Search test cases',function(){
    it('Search with results',function(){
        cy.visit('https://www.automationpractice.pl/');
        cy.get('#search_query_top').type('Hola que tal tagarnas?');
        cy.get('[placeholder="Search"]').clear().type('Hola forro').clear().type('Ya paren de boludear');      
    })

})