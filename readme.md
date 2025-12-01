# Welcome to Educentre Integration!

### 🎓 Educational Activities

Ready to bring your educational games and apps to life? Integrate them seamlessly with Educentre!

```html
<script src="https://cdn.jsdelivr.net/gh/educentre-integration/libraries@v1.0/activity/bridge.min.js"></script>
```

```js
// Start the magic!
const eda = new EducentreActivityBridge();

/* ===================================================
LEARNER Space: Unlock the power of group data!
You can read and save data for an entire group.
The responses follow this awesome interface:

interface Database {
    token: string;
    school: {
        id: string;
        name: string;
    };
    certification: {
        id: string;
        name: string;
    };
    promotion: {
        id: string;
        name: string;
    };
    configuration: any;
    storage: any;
    student: {
        email: string;
        firstname: string;
        lastname: string;
        fullname: string;
    };
}
*/
eda.getDatabase((response) => {
    // response is of type Database
    console.log("Database loaded!", response);
});

const storage = { ... };
eda.saveStorage(storage, (response) => {
    console.log("Storage saved!", response);
});

// LEARNER Space: Celebrate success!
// You can submit a score for an evaluation on Educentre. The score must be between 0 and 1.
const score = 0.8; // Equivalent to 16 out of 20 (Great job!)
eda.sendScore(score, (response) => {
    console.log("Score submitted! 🚀", response);
});

/* ===================================================
CONTRIBUTOR Space: Customize your experience!
In the educational activity console, you can save general settings via configuration.
Perfect for tailoring the activity for each training session.
*/
eda.getConfiguration((response) => {
    console.log("Configuration loaded!", response);
});
eda.saveConfiguration(configuration, (response) => {
    console.log("Configuration saved!", response);
});

/* ===================================================
UTILITIES: Keep it secret, keep it safe!
You can obfuscate and deobfuscate data, super useful for protecting sensitive info if you use localStorage.
*/
const data = { foo: 'bar' };
const secret = eda.obfuscate(data);
console.log("Shhh... it's a secret:", secret); // Obfuscated string

const original = eda.deobfuscate(secret);
console.log("And we're back!", original); // { foo: 'bar' }
```

Happy Integrating!
