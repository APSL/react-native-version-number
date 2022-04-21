
#import "RNVersionNumber.h"

@implementation RNVersionNumber

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
    NSString* receipt = [[[NSBundle mainBundle] appStoreReceiptURL] path];
    #if TARGET_IPHONE_SIMULATOR
        NSLog(@"Running on the Device, installationSource might not be able to be detected. Should only happen on Xcode versions running the app with Rosetta");
        receipt = receipt != nil ? receipt : @"file:///private/var/mobile/Containers/Data/CoreSimulator/Application/FAKE_M1_Rosetta_Fallback/StoreKit/sandboxReceipt";
    #endif
    return @{@"appVersion"  : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"],
             @"buildVersion": [[NSBundle mainBundle] objectForInfoDictionaryKey:(NSString *)kCFBundleVersionKey],
             @"installationSource"  : receipt,
             @"bundleIdentifier"  : [[NSBundle mainBundle] bundleIdentifier]
            };
           
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

@end
