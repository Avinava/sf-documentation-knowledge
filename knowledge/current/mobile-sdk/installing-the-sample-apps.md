---
title: "Installing the Sample Apps"
domain: mobile-sdk
topic: installing-the-sample-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.525Z
estimatedTokens: 536
keywords: [Installing, Sample, Apps, GitHub, live, Mobile, SDK, repository, target, platform, hybrid, samples, option, Cordova, command, line, source, code, SalesforceMobileSDK-Shared, Accessing, Repositories, Building]
---

> In GitHub, sample apps live in the Mobile SDK repository for the
      target platform. For hybrid samples, you have the option of using the Cordova command line
      with source code from the SalesforceMobileSDK-Shared repository.

# Installing the Sample Apps

In GitHub, sample apps live in the Mobile SDK repository for the target platform. For hybrid samples, you have the option of using the Cordova command line with source code from the SalesforceMobileSDK-Shared repository.

## Accessing Sample Apps From the GitHub Repositories

**For Android:**

-   Clone or refresh the SalesforceMobileSDK-Android GitHub repo ([https://github.com/forcedotcom/SalesforceMobileSDK-Android](https://github.com/forcedotcom/SalesforceMobileSDK-Android "HTML (New Window)")).
-   In the repo root folder, run the install script:
    -   **Windows:** cscript install.vbs
    -   **Mac OS X:** ./install.sh
-   In Android Studio, import the folder that contains your local SalesforceMobileSDK-Android clone.
-   Look for sample apps in the hybrid/HybridSampleApps and native/NativeSampleApps project folders.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

On Windows, be sure to run Android Studio as administrator.

**For iOS:**

-   Clone or refresh the SalesforceMobileSDK-iOS GitHub repo ([https://github.com/forcedotcom/SalesforceMobileSDK-iOS](https://github.com/forcedotcom/SalesforceMobileSDK-iOS "HTML (New Window)")).
-   Run ./install.sh in the repository root folder.
-   In Xcode, open the SalesforceMobileSDK-iOS/SalesforceMobileSDK.xcworkspace file.
-   Look for the sample apps in the NativeSamples and HybridSamples workspace folders.

## Building Hybrid Sample Apps With Cordova

To build hybrid sample apps using the Cordova command line, see [Build Hybrid Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_samples_build.htm).

-   **[Android Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_android.htm)**

-   **[iOS Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_ios.htm)**

-   **[Hybrid Sample Apps (Source Only)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_hybrid_sourceonly.htm)**

-   **[React Native Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_react_native.htm)**

## Related Topics

- Build Hybrid Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_samples_build.htm)
- Android Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_android.htm)
- iOS Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_ios.htm)
- Hybrid Sample Apps (Source Only) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_hybrid_sourceonly.htm)
- React Native Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/sample_apps_react_native.htm)
