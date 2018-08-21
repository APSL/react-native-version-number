
# react-native-version-number

<p>
<img src="https://travis-ci.org/APSL/react-native-version-number.svg?branch=master" />
<img src="https://img.shields.io/npm/dm/react-native-version-number.svg" />
<img src="https://img.shields.io/npm/dt/react-native-version-number.svg" />
</p>

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

`$ react-native link react-native-version-number`

#### Manual installation  

**Android:**

1. In your android/settings.gradle file, make the following additions:
```java
include ':react-native-version-number'   
project(':react-native-version-number').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-version-number/android')
```

2. In your android/app/build.gradle file, add the `:react-native-version-number` project as a compile-time dependency:

```java
...
dependencies {
    ...
    compile project(':react-native-version-number')
}
```

3. Update the MainApplication.java file to use `react-native-version-number` via the following changes:   

```java
import com.apsl.versionnumber.RNVersionNumberPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        ...
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNVersionNumberPackage(), // here
            );
        }
    };
    ...
}
```

**iOS**

In XCode, in the project navigator:

    Right click Libraries
    Add Files to [your project's name]
    Go to `node_modules/react-native-version-number`
    Add the .xcodeproj file

In XCode, in the project navigator, select your project.

    Add the `libRNVersionNumber.a` from the deviceinfo project to your project's Build Phases ➜ Link Binary With Libraries
    Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure All is toggled on (instead of Basic).
    Add header search path: `$(SRCROOT)/../node_modules/react-native-version-number/ios`

## Usage
```javascript
import VersionNumber from 'react-native-version-number';

console.log(VersionNumber.appVersion);
console.log(VersionNumber.buildVersion);
console.log(VersionNumber.bundleIdentifier);

```

## License
MIT.
