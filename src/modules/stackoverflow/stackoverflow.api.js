class StackOverflowAPI {
    url = 'https://api.stackexchange.com/2.3';

    getQuestions(query) {
        return fetch(`${this.url}/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`)
            .then(this.handleErrors)
            .then((resp) => resp.json())
            .then((data) => data.items);
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        return resp;
    }
}

export default StackOverflowAPI;