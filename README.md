
# react-native-version-number
<img src="https://travis-ci.org/APSL/react-native-version-number.svg?branch=master" />

Returns the `CFBundleShortVersionString` and the `CFBundleVersion` and `bundleIdentifier` on IOS. For Android, returns the `versionName`, `versionCode` and `applicationId`.


|  | iOS | Android | Example |
| --- | --- | --- | --- |
| appVersion | `CFBundleShortVersionString` | `versionName` | `1.0.2` |
| buildVersion | `CFBundleVersion` | `versionCode` | `42` |
| bundleIdentifier | `bundleIdentifier` | `applicationId` | `com.foo.bar.MyApp`|


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
console.log(VersionNumber.bundleIdentifier);

```

## License
MIT.
