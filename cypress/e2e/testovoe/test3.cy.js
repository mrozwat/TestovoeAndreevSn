

const email = 'pocemail@mail.ru';
const psw = 'SS21%aaW';
const google = 'https://www.google.ru/';


describe('Assert',()=>{

    it('Assert web tesr',()=>{
        cy.viewport(1920,1080);
        cy.visit(google);
        cy.location('protocol').should('eq','https:');
        cy.get('.gLFyf').type('Byndyusoft{enter}');
        cy.xpath('/html/body/div[7]/div/div[11]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div[1]/a').invoke('attr', 'href').should('eq', 'https://byndyusoft.com/');
        

    })
})


