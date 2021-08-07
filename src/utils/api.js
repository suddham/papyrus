import Duolingo from './duo-api-client';

const duo = new Duolingo({});

export const initDuoLogIn = () => duo.logIn()
    .then((result) => {
        console.log('Log in success: ', result);
        duo.getData()
            .then((data) => {
                // use returned data or use userData on duo instance
                console.log('Fetch success: ', data);
                console.log(duo.userData);
                console.log(duo.getUserData());
                console.log(duo.userData);
                return duo;
            })
            .catch((e) => {
                // handle error
            });
    })
    .catch();
