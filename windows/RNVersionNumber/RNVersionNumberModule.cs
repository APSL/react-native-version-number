using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Apsl.VersionNumber
{
    class RNVersionNumberModule : ReactContextNativeModuleBase
    {
        private readonly String APP_VERSION = "appVersion";
        private readonly String APP_BUILD = "buildVersion";
        private readonly String APP_ID = "bundleIdentifier";

        public RNVersionNumberModule(ReactContext reactContext) : base(reactContext)
        {
        }

        public override string Name
        {
            get
            {
                return "RNVersionNumber";

            }
        }

        
        public override IReadOnlyDictionary<string, object> Constants
        {
            get
            {
                PackageId appInfo = Package.Current.Id;
                PackageVersion versionInfo = appInfo.Version;

                String appVersion = versionInfo.Major.ToString() + 
                                    versionInfo.Minor.ToString() + 
                                    versionInfo.Build.ToString();
                
                String appBuild = versionInfo.Revision.ToString();

                return new Dictionary<string, object>
                {
                    {APP_VERSION, appVersion},
                    {APP_BUILD, appBuild},
                    {APP_ID, appInfo.Name}
                };
            }
        }

    }
}
