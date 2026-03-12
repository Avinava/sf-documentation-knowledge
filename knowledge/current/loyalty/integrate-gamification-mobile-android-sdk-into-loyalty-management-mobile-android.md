---
title: "Integrate Gamification Mobile Android SDK into Loyalty Management Mobile Android
    SDK"
domain: loyalty
topic: integrate-gamification-mobile-android-sdk-into-loyalty-management-mobile-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.801Z
estimatedTokens: 465
keywords: [Integrate, Gamification, Mobile, Android, SDK, Loyalty, Management, add, external, dependency]
---

# Integrate Gamification Mobile Android SDK into Loyalty Management Mobile Android
    SDK

> To integrate the Gamification Mobile Android SDK into the existing Loyalty Management
    Mobile Android SDK, add it as an external dependency.

# Integrate Gamification Mobile Android SDK into Loyalty Management Mobile Android SDK

To integrate the Gamification Mobile Android SDK into the existing Loyalty Management Mobile Android SDK, add it as an external dependency.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Open Terminal, and go to the LoyaltyMobileSDK-Android folder.
2.  Run these commands:

    git submodule add git@github.com:loyaltysampleapp/GamificationMobileSDK-Android.git

    git submodule sync

    git submodule update

    cd GamificationMobileSDK-Android

    git submodule update --init --recursive --remote

3.  Open the LoyaltyMobileSDK-Android project in Android Studio.
4.  Click **Open**.
5.  Open the SampleApps/MyNTORewards/build.gradle file, and under Dependencies block, to the first line of Dependencies, add:

    implementation(project(":GamificationMobileSDK-Android:GamificationMobileSDK"))

6.  Open the SampleApps/MyNTORewards/connectedapp.properties.sample file and modify the properties of the connected app as per your org.
7.  Click **Sync Now**.
8.  Open the SDK files and ensure that the files include the appropriate SDK packages.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

    #### Note

    If the sync fails, disconnect the VPN to ensure there’s no blocker when downloading the dependencies, and then resync.

9.  To add the gamification SDK package, include this code snippet in your code.

    \`import com.salesforce.gamification.api.\*

    import com.salesforce.gamification.model.\*

    import com.salesforce.gamification.repository.\*

    import com.salesforce.gamification.utilities.\*\`


You can now use the classes and interfaces in the GamificationMobileSDK-Android module to extend and manage the gamification features in the MyNTORewards sample app.
