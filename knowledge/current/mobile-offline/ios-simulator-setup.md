---
title: "iOS Simulator Setup"
domain: mobile-offline
topic: ios-simulator-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.730Z
estimatedTokens: 1019
keywords: [iOS, Simulator, Setup, development, it’s, convenient, test, code, virtual, device, Xcode, install, build, mobile, app]
---

# iOS Simulator Setup

> During development it’s convenient to test your code in a virtual device. Use Xcode to
    create a device simulator, and install the virtual device build of your mobile app into
    it.

# iOS Simulator Setup

During development it’s convenient to test your code in a virtual device. Use Xcode to create a device simulator, and install the virtual device build of your mobile app into it.

-   **[Configure Minimum Required iOS Simulator Settings](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_ios_setup.htm#quickstart_lwc_action_ios_setup_create_simulator)**
    Ensure your virtual device meets the minimum device and iOS version requirements to run your mobile app.
-   **[Install the Field Service App for iOS](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_ios_setup.htm#quickstart_lwc_action_ios_setup_install_app)**
    To run the Field Service mobile app in an iOS simulator, download and install a virtual device build of the app. After it’s installed, open the app and log into your development org.

## Configure Minimum Required iOS Simulator Settings

Ensure your virtual device meets the minimum device and iOS version requirements to run your mobile app.

Review the minimum requirements for your mobile app.

-   [Requirements for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.salesforce_app_requirements.htm&type=5&language=en_US)
-   [Field Service Mobile App Requirements](https://help.salesforce.com/s/articleView?id=service.mfs_requirements.htm&type=5&language=en_US)

1.  Download and install the latest version of [Xcode](https://developer.apple.com/xcode/ "HTML (New Window)"). If you already have Xcode installed, there’s no need to reinstall it.
2.  Launch Xcode.
3.  In the menu bar, select **Xcode** | **Open Developer Tool** | **Simulator**.

    A new program called Simulator opens, displaying a mobile screen.

4.  Go to **File** | **Open Simulator** to choose your preferred device.

    If you want to create a simulator, go to **File** | **New Simulator** and follow the prompts.


After the device simulator launches you can close Xcode, but keep the Simulator app’s window open to install the Field Service app in the next section.

## Install the Field Service App for iOS

To run the Field Service mobile app in an iOS simulator, download and install a virtual device build of the app. After it’s installed, open the app and log into your development org.

1.  Download the latest iOS virtual device build of the [Salesforce Field Service mobile app zip file](https://sfdc.co/fieldservice-mobile-app-ios-simulator "HTML (New Window)").
2.  Double-click the downloaded zip file to extract the app file.
3.  Drag the downloaded .app file into the Simulator window.
4.  In Simulator, click (a simulated tap in this case) the newly installed Field Service app to open it.

    If you don’t see the app on the first page, it’s probably installed on a different app page. You can swipe the page with your mouse to see additional pages to find the app.

5.  Click (simulator tap, you get the idea) the Field Service app. Click **Get Started**.
6.  Click the screen to run through the tutorial or click **Skip**.
7.  Click **Log In**.
8.  Click **I Agree** to agree to the Order Form Supplement agreement.
9.  Click ![Gear icon](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_gear.png&folder=mobile_offline) and select a connection.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

    #### Warning

    If you’re logging in as a community user for the first time, click ![Plus icon](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_plus.png&folder=mobile_offline) to add a new connection.

    -   For **Host**, enter your org’s URL in the following format: https://\[yourURL\].my.salesforce.com.
    -   For **Label**, enter a nickname for your connection.

10.  Click **Done**.
11.  Enter your username and password for your org.
12.  Click **Log In**.
13.  Click **Allow** to allow the app to access your Salesforce information.
14.  Click through the various permissions screens and allow them the appropriate access.

     When finished, you arrive at the app’s home screen.

## Related Topics

- Configure Minimum Required iOS Simulator Settings (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_ios_setup.htm)
- Install the Field Service App for iOS (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_ios_setup.htm)
