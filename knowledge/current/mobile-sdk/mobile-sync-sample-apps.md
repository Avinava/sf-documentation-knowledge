---
title: "Mobile Sync Sample
  Apps"
domain: mobile-sdk
topic: mobile-sync-sample-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.397Z
estimatedTokens: 279
keywords: [Mobile, Sync, Sample, Apps, Salesforce, SDK, demonstrate, how, hybrid, Account, Editor, full-featured, samples, switch, simpler]
---

# Mobile Sync Sample
  Apps

> Salesforce Mobile SDK provides sample apps that demonstrate
 how  to use Mobile Sync in hybrid apps. Account Editor is the most full-featured
of these samples. You can switch to one of the simpler samples by
changing the startPage property
in the bootconfig.json file.

# Mobile Sync Sample Apps

Salesforce Mobile SDK provides sample apps that demonstrate how to use Mobile Sync in hybrid apps. Account Editor is the most full-featured of these samples. You can switch to one of the simpler samples by changing the startPage property in the bootconfig.json file.

## Running the Samples in iOS

In your Salesforce Mobile SDK for iOS installation directory, double-click the SalesforceMobileSDK.xcworkspace to open it in Xcode. In Xcode Project Navigator, select the Hybrid SDK/AccountEditor project and click **Run**.

## Running the Samples in Android

To run the sample in Android Studio, you first add references to basic libraries from your clone of the SalesforceMobileSDK-Android repository. Add the following dependencies to your sample module, setting **Scope** to “Compile” for each one:

-   libs/SalesforceSDK
-   libs/SmartStore
-   hybrid/SampleApps/AccountEditor

After Android Studio finishes building, click **Run ‘<*sample\_name*\>’** in the toolbar or menu.

-   **[Account Editor Sample](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_account_editor.htm)**

## Related Topics

- Account Editor Sample (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_account_editor.htm)
