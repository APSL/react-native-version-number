/* @flow */

import { NativeModules } from 'react-native';

const { RNVersionNumber } = NativeModules;

type VersionObject = {
  appVersion: string,
  buildVersion: string
}

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber.buildVersion,
}

export default VersionNumber;
