

const email = 'pocemail@mail.ru';
const psw = 'SS21%aaW';
const google = 'https://www.google.ru/';


describe('test site',()=>{

    it('test google find',()=>{
        cy.viewport(1920,1080);
        cy.visit(google);
        cy.location('protocol').should('eq','https:');
        cy.get('.gLFyf').type('Byndyusoft{enter}');
        cy.xpath('/html/body/div[7]/div/div[11]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div[1]/a').invoke('attr', 'href').should('eq', 'https://byndyusoft.com/');
        

    })

    it('site contact',()=>{
        cy.viewport(1920,1080);
        cy.visit('https://byndyusoft.com/');
        
        cy.scrollTo(0,4500);
        cy.get('.know-more__container > .btn').should('have.text','\n            Заказать презентацию\n        ').click();
        cy.xpath('/html/body/div[8]/div[2]/div[2]/div/a').should('have.text','sales@byndyusoft.com')
        //телефон просто отсутствует поэтому я немогу проверить его наличие (тк даже не предстовляю где он находится)
    })

})


