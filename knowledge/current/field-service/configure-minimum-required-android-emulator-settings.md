---
title: "Configure Minimum Required Android Emulator Settings"
domain: field-service
topic: configure-minimum-required-android-emulator-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:13.212Z
keywords: [Configure, Minimum, Required, Android, Emulator, Settings, Ensure, virtual, device, meets, minimum, API, version, requirements, run, mobile, app.]
---

# Configure Minimum Required Android Emulator Settings

> Ensure your virtual device meets the minimum device and Android API version
    requirements to run your mobile app.

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