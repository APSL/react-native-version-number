/* @flow */

import { NativeModules } from 'react-native';

const { RNVersionNumber } = NativeModules;

type VersionObject = {
  appVersion: string,
  buildVersion: string,
  bundleIdentifier: string,
};

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber.buildVersion,
  bundleIdentifier: RNVersionNumber.bundleIdentifier,
};

export default VersionNumber;
