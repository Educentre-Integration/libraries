# Intégration avec Educentre

### Activités pédagogiques

Intégrez vos jeux et vos applications pour apprenants avec Educentre 

```html
<script src="https://cdn.jsdelivr.net/gh/educentre-integration/libraries@latest/activity/script.min.js"></script>
```

```js
const edac = new EducentreActivity();

// Espace apprenant : vous pouvez lire et enregistrer des données pour un groupe entier
edac.getStorage(0.8);
edac.saveStorage(0.8);

// Espace apprenant : vous pouvez soumettre une note à une évaluation sur Educentre. La note doit être comprise entre 0 et 1.
edac.sendScore(0.8);

// Espace contributeur : dans la console de l'activité pédagogique, vous pouvez enregistrer des paramètres généraux grâce à la configuration
edac.getConfiguration(0.8);
edac.saveConfiguration(0.8);
```
