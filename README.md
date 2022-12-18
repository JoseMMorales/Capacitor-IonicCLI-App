 <div align="center">

 <img src="https://user-images.githubusercontent.com/43299285/208293345-1249a30d-6a00-4c28-b66b-4a4a4de5009a.PNG" width="450px"/>

 </div>

 </br>

This is an Android Native project with [Ionic 6](https://ionicframework.com/), [Capacitor 2](https://capacitorjs.com/) and [Angular 15](https://angular.io/guide/update-to-version-15). Built with Ionic CLI for a Capacitor Development of the App with npx commands. We have added Device, Modal, and Browser offical plugins on this project. It has been rendered in [Android Studio Emulator](https://developer.android.com/studio/run/emulator) using external livereload for seeing any change applied in our editor (VSCode) when developing the App.

### Capacitor API Plugins...

[Device](https://capacitorjs.com/docs/apis/device) to get internal information about the device.

[Browser](https://capacitorjs.com/docs/apis/browser) to open an in-app browser and subscribe to browser events.

[Modal](https://capacitorjs.com/docs/v2/apis/modals) for triggering native modal windows for alerts, confirmations, and input prompts, as well as Action Sheets.

### Ionic components used...

ion-content, ion-toolbar, ion-title, ion-card, ion-item, ion-list, ion-card-content, ion-button.

## Commands used...

### Set the App up...

- `ionic start capacitorIonicCLI blank --type=angular`

### Installing capacitor 2...

- `npm install @capacitor/cli@2 @capacitor/core@2`

- `npm install @capacitor/android@2`

- `npx cap init`

### To get WWW folder for compiling the App...

- `ionic build`

### Adding android project...

- `npx cap add android`

### Run App in browser or livereload...

- `ionic serve`

- `ionic cap run android --livereload --external`

### Technology...

"@capacitor/cli": "2.5.0"
<br>

"@ionic/angular": "^6.1.9"
<br>

"@angular/cli": "^15.0.0"

### Author

JOSEMMORALES
