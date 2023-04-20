import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import Login from './Login.vue'

describe('<Login />', () => {
  it('Loing functinality works when supplied with correct username and password', () => {
    // see: https://on.cypress.io/mounting-vue

    mount(Login, {
      global: {
        plugins: [createTestingPinia({  createSpy: sinon.spy})],
      },
    })

    cy.intercept("POST", "**/login").as('login');
    cy.mount(Login)
    cy.get('[data-cy=username]').type('marcynyaata@gmail.com');
    cy.get('[data-cy=password]').type('Kenya+123');
    cy.get('[data-cy=loginButton]').click();
    cy.wait("@login").its('response.statusCode').should("equal", 200);
  })
})