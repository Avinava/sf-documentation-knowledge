---
title: "Android Emulator Setup"
domain: field-service
topic: android-emulator-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:55.146Z
estimatedTokens: 1417
keywords: [Android, Emulator, Setup, development, it’s, convenient, test, code, virtual, device, Studio, install, build, mobile, app]
---

# Android Emulator Setup

> During development it’s convenient to test your code in a virtual device. Use Android
    Studio to create a device emulator, and install the virtual device build of your mobile app into
    it.

# Android Emulator Setup

During development it’s convenient to test your code in a virtual device. Use Android Studio to create a device emulator, and install the virtual device build of your mobile app into it.

-   **[Configure Minimum Required Android Emulator Settings](atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_android_setup.htm#sfs_gs_lwc_action_android_setup_create_emulator)**
    Ensure your virtual device meets the minimum device and Android API version requirements to run your mobile app.
-   **[Install the Field Service App for Android](atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_android_setup.htm#sfs_gs_lwc_action_android_setup_install_app)**
    To run the Field Service mobile app in an Android emulator, download and install a virtual device build of the app. After it’s installed, open the app and log into your development org.

## Configure Minimum Required Android Emulator Settings

Ensure your virtual device meets the minimum device and Android API version requirements to run your mobile app.

Review the minimum requirements for your mobile app.

-   [Field Service Mobile App Requirements](https://help.salesforce.com/s/articleView?id=service.mfs_requirements.htm&type=5&language=en_US)
-   [Salesforce Mobile App Requirements](https://help.salesforce.com/s/articleView?id=xcloud.salesforce_app_requirements.htm&type=5&language=en_US)

1.  Download and install the latest version of [Android Studio](https://developer.android.com/studio "HTML (New Window)").

    If you already have Android Studio installed, there’s no need to reinstall it.

2.  Launch Android Studio.
3.  Click **More Actions** or ![More Actions button with three vertical dots](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_studio_icon_more_actions.png&folder=field_service_dev) in the top left, depending on your version of Android Studio, and then select **Virtual Device Manager** from the dropdown.
4.  Click the ![Edit button with pencil icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_studio_icon_edit.png&folder=field_service_dev) in the Actions column of the device you’d like to edit.

    Or, if you want to create an emulator, click **Create Device** and follow the prompts.

5.  Click **Change** in the line that displays the version number.

    ![Android Studio virtual device configuration panel, API version setting](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_studio_avd_api_version.png&folder=field_service_dev)

6.  In the pop-up window, select API 30 version or later.
7.  Click **OK**.
8.  Scroll down in the window to the Memory and Storage section.

    ![Android Studio virtual device configuration panel, memory and storage settings](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_studio_avd_ram.png&folder=field_service_dev)

9.  Click in the **RAM** field and enter 4096.

    If you can’t change the RAM value, use a newer device for the emulator.

10.  Click **Finish**.
11.  Click ![Start Emulator button with play icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_studio_icon_start_emulator.png&folder=field_service_dev) in the Actions column of the device to launch the Android Emulator.

After the device emulator launches you can close Android Studio, but keep the Android Emulator app window open to install the Field Service app in the next section.

## Install the Field Service App for Android

To run the Field Service mobile app in an Android emulator, download and install a virtual device build of the app. After it’s installed, open the app and log into your development org.

1.  Download the Android virtual device build of the Salesforce Field Service mobile app in the form of an APK file.

    A link to download the latest version of the app is available in [this Trailblazer Community post](https://trailhead.salesforce.com/trailblazer-community/feed/0D54S00000J8Q7YSAV "HTML (New Window)"). If you encounter an insufficient permissions page, log in to Trailhead and try the link again.

2.  Drag the downloaded .apk file into the Android Emulator window.
3.  Click a blank space on the Android Emulator’s screen and drag up to view the installed apps.
4.  Click the newly installed Field Service app.
5.  Click **I Agree** to accept the Order Form Supplement agreement.
6.  Click the vertical dots button on the top right and select **Change Server**.

    ![Field Service mobile app login. Select Change Connection in the top-right menu.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_app_login_change_connection.png&folder=field_service_dev)

7.  Select a connection.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=field_service_dev)

    #### Warning

    If you’re logging in as a community user for the first time, click **Add New Connection**, fill in the form as indicated in the following bullet list, and then click **Apply** to save the changes.

    -   For **Name**, enter a nickname for your connection.
    -   For **URL**, enter your org’s URL. It must be in the following format: https://\[yourURL\].my.salesforce.com

8.  Click the arrow in the top left to go back to the login screen.
9.  Enter your username and password for your org.
10.  Click **Log In**.
11.  Click **Allow** to allow the app to access your Salesforce information.
12.  Click through the various permissions screens and allow them the appropriate access.

     When finished, you arrive at the app’s home screen.

## Related Topics

- Configure Minimum Required Android Emulator Settings (atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_android_setup.htm)
- Install the Field Service App for Android (atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_android_setup.htm)
