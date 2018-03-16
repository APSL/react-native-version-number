/* @flow */

import { NativeModules } from 'react-native';

const { RNVersionNumber } = NativeModules;

type VersionObject = {
  appVersion: ?string,
  buildVersion: ?string,
  bundleIdentifier: ?string
};

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber && RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber && RNVersionNumber.buildVersion,
  bundleIdentifier: RNVersionNumber && RNVersionNumber.bundleIdentifier
};

export default VersionNumber;
