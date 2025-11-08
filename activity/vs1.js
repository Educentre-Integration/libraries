(function (global) {
    function EducentreActivity() {
        this.listeners = {};

        this.generateId = function () {
            return 'xxxxxx'.replace(/[x]/g, function () {
                return ((Math.random() * 16) | 0).toString(16);
            });
        };

        window.addEventListener("message", (event) => {
            if (!event || !event.data) return;
            const message = event.data;
            if (message.requestId && this.listeners[message.requestId]) {
                this.listeners[message.requestId](message.payload);
                delete this.listeners[message.requestId];
            }
        });
    }

    /**
     * Envoie un message au parent et attend une réponse.
     * @param {string} action - Action ou type de message.
     * @param {object} data - Données à envoyer.
     * @param {function} callback - Fonction appelée avec la réponse.
     */
    EducentreActivity.prototype.request = function (action, data, callback) {
        const requestId = this.generateId();
        const message = { requestId, action, data };
        this.listeners[requestId] = callback;
        window.parent.postMessage(message, '*');
    };

    /**
     * Envoie un message au parent sans attendre de réponse.
     * @param {string} action - Action ou type de message.
     * @param {object} data - Données à envoyer.
     */
    EducentreActivity.prototype.send = function (action, data) {
        const message = { action, data };
        window.parent.postMessage(message, '*');
    };

    EducentreActivity.prototype.sendScore = function (score, callback) {
        this.request('score', { score }, response => callback(response));
    };

    EducentreActivity.prototype.getConfiguration = function (callback) {
        this.request('get-configuration', {}, response => callback(response));
    };

    EducentreActivity.prototype.saveConfiguration = function (configuration, callback) {
        this.request('save-configuration', { configuration }, response => callback(response));
    };

    EducentreActivity.prototype.getStorage = function (callback) {
        this.request('list', {}, response => callback(response));
    };

    EducentreActivity.prototype.saveStorage = function (storage, callback) {
        this.request('save-storage', { storage }, response => callback(response));
    };

    global.EducentreActivity = EducentreActivity;
})(window);
