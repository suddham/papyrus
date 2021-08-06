import Duolingo from '@/utils/duo-api-client';
import { createStore } from './createStore';

const duo = new Duolingo({
    userName: 'SuddhaM',
    password: 'bqz1KPQ7hyc1eyk.gkw'
});

export const user = createStore({
    userLoginResponse: null,
    user: null,

    login(userName, password) {
        duo.logIn().then((result) => {
            console.log('Log in success: ', result);
            this.userLoginResponse = result;
            duo.getData()
                .then((data) => {
                    // use returned data or use userData on duo instance
                    console.log('Fetch success: ', data);
                    this.user = data;
                })
                .catch((e) => {
                    // handle error
                });
        })
            .catch();
    },

    async getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const users = await response.json();
            return users;
        }
    }
});
