### Demo
Check <b>[demo](https://hashtagman.netlify.com/)</b> from Netlify

### Data

Data.json is the source for the data. As default it will be used from local memory to populate all categories. Raw GitHub url of Data.json ([this](https://raw.githubusercontent.com/elnoor/hashtag-aze/master/src/Data.json)) will also be used to simulate "fake" API. Meaning build production app will be able to be used just fine without requiring extra changes, but changing Data.json file in GitHub will allow the app to have updated data.

`Note:` Updating Data.json in GitHub will have a propagation time. Do not expect the app have the updated data right away.

### Android App

To build a WebView based Android app that works offline (without fetching from url) but uses local html/css/js files from Android memory  create an empty WebView Android app and move all the built files to 'assets' folder and load url to webview like `webView.loadUrl("file:///android_asset/index.html)`.
If there is no `assets` folder in Android Studio project add it by right clicking on project and `New > Folder > Assets Folder`. It is also explained [here](https://abhiandroid.com/androidstudio/create-assets-folder-android-studio-html-files.html).

`Note:` To create WebView app refer to this [link](https://medium.com/@bydlocoder228/react-app-in-android-webview-678ae6e30b92) or use the source code of the app that is build for caps-az.

`Note: ` If you are building React app to make Android app make sure you change `package.json` and add 
  `"homepage": "file:///android_asset/"` after name of project.

### Building Production App

`npm run build` builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`Note: ` If you are building app to build Android app make sure you change `package.json` and add 
  `"homepage": "file:///android_asset/"` after name of project.
  
### Font Awesome Icons in App

Only [Solid & Free icons}(https://fontawesome.com/icons?d=gallery&s=solid&m=free) is being used currently in app
