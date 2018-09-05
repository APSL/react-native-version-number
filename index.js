/* @flow */

import { NativeModules } from 'react-native';

const { RNVersionNumber } = NativeModules;

type VersionObject = {
  appVersion: ?string,
  buildVersion: ?string,
  installationSource: ?string,
  bundleIdentifier: ?string
};

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber && RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber && RNVersionNumber.buildVersion,
  installationSource: RNVersionNumber && RNVersionNumber.installationSource,
  bundleIdentifier: RNVersionNumber && RNVersionNumber.bundleIdentifier
};

export default VersionNumber;
