/**
* @jest-environment jsdom
*/
 
const fs = require('fs');
const path = require('path');
 
describe('Test du DOM', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;
 
    // On charge le script manuellement
    require('../main.js');
  });
 
  test('Clique sur le bouton met à jour le texte', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
 
    // Simule le clic
button.click();
 
    // Vérifie que le texte a été modifié
    expect(output.textContent).toBe('Tu as cliqué !');
  });
});