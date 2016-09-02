
# react-native-version-number
<img src="https://travis-ci.org/APSL/react-native-version-number.svg?branch=master" />

Returns the `CFBundleShortVersionString` and the `CFBundleVersion`. For Android, returns the `versionCode` and `versionName`.

## Getting started

`$ npm install react-native-version-number --save`

### Mostly automatic installation

`$ react-native link react-native-version-number`

## Usage
```javascript
import VersionNumber from 'react-native-version-number';

console.log(VersionNumber.appVersion);
console.log(VersionNumber.buildVersion);
```

## License
MIT.
