
# react-native-version-number
<img src="https://travis-ci.org/APSL/react-native-version-number.svg?branch=master" />

Returns the `CFBundleShortVersionString` and the `CFBundleVersion`. For Android, returns the `versionName` and `versionCode`.


|  | iOS | Android | Example |
| --- | --- | --- | --- |
| appVersion | `CFBundleShortVersionString` | `versionName` | `1.0.2` |
| buildVersion | `CFBundleVersion` | `versionCode` | `42` |


## Getting started

Install the package

`$ yarn add react-native-version-number`

Link

`$ react-native link`

## Usage
```javascript
import VersionNumber from 'react-native-version-number';

console.log(VersionNumber.appVersion);
console.log(VersionNumber.buildVersion);
```

## License
MIT.
