# Intégration avec Educentre

### Activités pédagogiques

Intégrez vos jeux et vos applications pour apprenants avec Educentre 

```html
<script src="https://cdn.jsdelivr.net/gh/educentre-integration/libraries@latest/activity/script.min.js"></script>
```

```js
const edac = new EducentreActivity();

/* ===================================================
Espace APPRENANT : vous pouvez lire et enregistrer des données pour un groupe entier.
Les réponses respectent l'interface suivante :
interface EducentreStorageResponse {
    token: string;
    student: {
        fullname?: string;
    };
    certificationStorage?: any;
}
*/
edac.getStorage((response) => {
    console.log(response);
});

const storage = ...;
edac.saveStorage(storage, (response) => {
    console.log(response);
});

// Espace APPRENANT : vous pouvez soumettre une note à une évaluation sur Educentre. La note doit être comprise entre 0 et 1.
const score = 0.8; // Equivalent de 16 sur 20
edac.sendScore(score);

/* ===================================================
Espace CONTRIBUTEUR : dans la console de l'activité pédagogique, vous pouvez enregistrer des paramètres généraux grâce à la configuration
*/
edac.getConfiguration((response) => {
    console.log(response);
});
edac.saveConfiguration(configuration, (response) => {
    console.log(response);
});
```
