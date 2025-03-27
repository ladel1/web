# Test d'une App Frontend avec Jest + jsdom
 
Ce projet montre comment tester une simple application HTML/JS côté client avec [Jest](https://jestjs.io/) et [jsdom](https://github.com/jsdom/jsdom).
 
## Structure du projet
 
```
.
├── index.html
├── main.js
├── test/
│   └── main.test.js
├── package.json
└── README.md
```
 
## Étapes pour lancer les tests
 
### 1. Initialiser un projet Node.js
 
```bash
npm init -y
```
 
### 2. Installer les dépendances nécessaires
 
```bash
npm install --save-dev jest
npm install --save-dev jsdom
npm install --save-dev jest-environment-jsdom
```
 
### 3. Ajouter le script de test dans `package.json`
 
```json
"scripts": {
  "test": "jest"
}
```
 
### 4. Créer les fichiers de l'application
 
#### index.html
 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Test App</title>
</head>
<body>
  <button id="myButton">Clique</button>
  <p id="output"></p>
  <script src="main.js"></script>
</body>
</html>
```
 
#### main.js
 
```js
document.getElementById('myButton').addEventListener('click', () => {
  document.getElementById('output').textContent = 'Tu as cliqué !';
});
```
 
### 5. Écrire le test
 
Créer le fichier `test/main.test.js` :
 
```js
const fs = require('fs');
const path = require('path');
 
describe('Test du DOM', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;
 
    // Charger le script
    require('../main.js');
  });
 
  test('Clique sur le bouton met à jour le texte', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
 
button.click();
 
    expect(output.textContent).toBe('Tu as cliqué !');
  });
});
```
 
### 6. Lancer les tests
 
```bash
npm run test
```