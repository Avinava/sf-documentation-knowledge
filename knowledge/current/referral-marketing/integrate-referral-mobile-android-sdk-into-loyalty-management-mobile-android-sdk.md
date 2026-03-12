---
title: "Integrate Referral Mobile Android SDK into Loyalty Management Mobile Android SDK"
domain: referral-marketing
topic: integrate-referral-mobile-android-sdk-into-loyalty-management-mobile-android-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.008Z
estimatedTokens: 455
keywords: [Integrate, Referral, Mobile, Android, SDK, Loyalty, Management, add, external, dependency]
---

# Integrate Referral Mobile Android SDK into Loyalty Management Mobile Android SDK

> To integrate the Referral Mobile Android SDK into the existing Loyalty Management
    Mobile Android SDK, add it as an external dependency.

# Integrate Referral Mobile Android SDK into Loyalty Management Mobile Android SDK

To integrate the Referral Mobile Android SDK into the existing Loyalty Management Mobile Android SDK, add it as an external dependency.

| Available in: all editions that have Referral Marketing enabled |
| --- |


1.  Open Terminal, and go to the LoyaltyMobileSDK-Android folder.
2.  Run these commands:

    git submodule add git@github.com:loyaltysampleapp/ReferralMobileSDK-Android.git

    git submodule sync

    git submodule update

    cd ReferralMobileSDK-Android

    git submodule update --init --recursive --remote

3.  Open the LoyaltyMobileSDK-Android project in Android Studio.
4.  Click **Open**.
5.  Open the SampleApps/MyNTORewards/build.gradle file, and under Dependencies block, to the first line of Dependencies, add:

    implementation(project(":ReferralMobileSDK-Android:ReferralMobileSDK"))

6.  Open the SampleApps/MyNTORewards/connectedapp.properties file and modify the properties of the connected app as per your org.
7.  Click **Sync Now**.
8.  Open the SDK files and ensure that the files include the appropriate SDK packages.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

    #### Note

    If the sync fails, disconnect the VPN to ensure there’s no blocker when downloading the dependencies, and then resync.

9.  To add the Referral SDK package, include this code snippet in your code.

    \`import com.salesforce.referral.api.\*

    import com.salesforce.referral.entities.\*

    import com.salesforce.referral.repository.\*

    import com.salesforce.referral.utils.\*\`


You can now use the classes and interfaces in the ReferralMobileSDK-Android module to extend and manage the referral program feature in the MyNTORewards sample app.
