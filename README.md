
# react-native-version-number
<img src="https://travis-ci.org/APSL/react-native-version-number.svg?branch=master" />

Returns the `CFBundleShortVersionString` and the `CFBundleVersion`. Android version is under development.

## Getting started

`$ npm install react-native-version-number --save`

### Mostly automatic installation

`$ react-native link react-native-version-number`

### Manual installation

#### iOS

1. In Xcode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-version-number` and add `RNVersionNumber.xcodeproj`
3. In Xcode, in the project navigator, select your project. Add `libRNVersionNumber.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<


## Usage
```javascript
import VersionNumber from 'react-native-version-number';

console.log(VersionNumber.appVersion);
console.log(VersionNumber.buildVersion);
```

## License
MIT.
