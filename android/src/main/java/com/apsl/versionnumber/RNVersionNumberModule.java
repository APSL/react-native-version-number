
package com.apsl.versionnumber;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager.NameNotFoundException;
import android.content.pm.PackageManager;

import java.util.HashMap;
import java.util.Map;

public class RNVersionNumberModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  private static final String APP_VERSION = "appVersion";
  private static final String APP_BUILD = "buildVersion";
  private static final String APP_ID = "bundleIdentifier";

  public RNVersionNumberModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNVersionNumber";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    final PackageManager packageManager = this.reactContext.getPackageManager();
    final String packageName = this.reactContext.getPackageName();
    try {
      constants.put(APP_VERSION, packageManager.getPackageInfo(packageName, 0).versionName);
      constants.put(APP_BUILD, packageManager.getPackageInfo(packageName, 0).versionCode);
      constants.put(APP_ID, packageName);
    } catch (NameNotFoundException e) {
      e.printStackTrace();
    }
    return constants;
  }
}
