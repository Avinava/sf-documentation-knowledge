---
title: "Import SDK into Android Studio"
domain: loyalty
topic: import-sdk-into-android-studio
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.534Z
estimatedTokens: 468
keywords: [Import, SDK, Android, Studio, clone, mobile, repository, Loyalty, Management, automatically, download, manage, external, dependencies]
---

# Import SDK into Android Studio

> After you clone the mobile SDK for Android repository, import Loyalty Management Mobile
    SDK in Android Studio to automatically download and manage external dependencies.

# Import SDK into Android Studio

After you clone the mobile SDK for Android repository, import Loyalty Management Mobile SDK in Android Studio to automatically download and manage external dependencies.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Unzip the LoyaltyMobileSDK-Android package that you downloaded.
2.  Open Android Studio.
3.  Go to **File** | **New** | **Import Project**, and then select the LoyaltyMobileSDK-Android folder.
4.  Click **Open**.
5.  Open the SampleApps/MyNTORewards/build.gradle file and under Dependencies block, to the first line of Dependencies, add:

    {implementation fileTree(dir: 'libs', include: \['\*.jar'\]) implementation project(path: ':Sources') }

6.  Open the SampleApps/MyNTORewards/connectedapp.properties.sample file and modify the properties of the connected app as per your org.
7.  Rename the connectedapp.properties.sample file to connectedapp.properties.
8.  Click **Sync Now**.

    Android Studio automatically downloads and manages external dependencies for the Mobile SDK and the Sample App.

9.  Open the SDK files and ensure that the files include the appropriate SDK packages.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

    #### Note

    If the sync fails, disconnect the VPN to ensure there’s no blocker when downloading the dependencies, and then resync.

10.  Add the code snippet to add the appropriate SDK package:

     import com.salesforce.loyalty.mobile.sources.forceUtils.\* import com.salesforce.loyalty.mobile.sources.loyaltyAPI.\* import com.salesforce.loyalty.mobile.sources.loyaltyModels.\* import com.salesforce.loyalty.mobile.sources.loyaltyExtensions.\*


You can now use the classes and structures in the LoyaltyMobileSDK-Android module and API references to manage the features in your application.
