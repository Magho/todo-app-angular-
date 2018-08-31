// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyD9zBjYPZ1yJ906hVlUkj00Fpb5xWS0pSg",
    authDomain: "todoapp-b0c36.firebaseapp.com",
    databaseURL: "https://todoapp-b0c36.firebaseio.com",
    projectId: "todoapp-b0c36",
    storageBucket: "todoapp-b0c36.appspot.com",
    messagingSenderId: "25058429486"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
