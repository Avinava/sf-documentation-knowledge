---
title: "Android Application Structure"
domain: mobile-sdk
topic: android-application-structure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.420Z
estimatedTokens: 546
keywords: [Android, Application, Structure, Native, apps, Mobile, SDK, typically, require, Authentication, App, Lifecycle, Classes, Resources, Activities]
---

# Android Application Structure

> Native Android apps that use Mobile SDK typically
      require:

# Android Application Structure

Native Android apps that use Mobile SDK typically require:

-   An application entry point class that extends android.app.Application.
-   At least one activity that extends android.app.Activity.

With Mobile SDK, the Android template apps:

-   Create a stub application class that extends android.app.Application. In this class, the onCreate() method
    -   Calls SalesforceSDKManager.initNative().
    -   (Optional) Enables IDP login services.
    -   (Optional) Enables push notifications.
-   Create an activity class that extends SalesforceActivity, SalesforceListActivity, or SalesforceExpandableListActivity. These Salesforce classes are optional but recommended choices for extending android.app.Activity.

## Authentication and App Lifecycle Classes

The top-level SalesforceSDKManager class sets the stage for login, cleans up after logout, and provides a special event watcher that informs your app when a system-level account is deleted. OAuth protocols are handled automatically with internal classes.

The SalesforceActivity, SalesforceListActivity, and SalesforceExpandableListActivity classes offer Mobile SDK implementations of standard Android UI protocols.

We recommend that you extend one of these classes for all activities in your app—not just the main activity. If you use a different base class for an activity, you’re responsible for replicating the onResume() protocol found in SalesforceActivity.

## Using Resources in Activities

Within your activities, you interact with Salesforce objects by calling Salesforce REST APIs. The Mobile SDK provides the com.salesforce.androidsdk.rest package to simplify the REST request and response flow.

You define and customize user interface layouts, image sizes, strings, and other resources in XML files. Internally, the SDK uses an R class instance to retrieve and manipulate your resources. However, the Mobile SDK makes its resources directly accessible to client apps, so you don’t need to write code to manage these features.

![Android application flow](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FApplicationFlow.png&folder=mobile_sdk)
