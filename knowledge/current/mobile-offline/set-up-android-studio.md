---
title: "Set Up Android Studio"
domain: mobile-offline
topic: set-up-android-studio
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.659Z
estimatedTokens: 1943
keywords: [Android, Studio, run, previews, emulators, sure, properly, installed, configured, install, test, environment, setup, command, you’re]
---

# Set Up Android Studio

> Before you run previews in Android emulators, make sure that Android Studio is properly
    installed and configured. After you install Android Studio, test your environment with the
      setup command. If you’re using an existing Android Studio
    installation, run setup to verify that your installed
    environment meets Mobile Extensions requirements.

# Set Up Android Studio

Before you run previews in Android emulators, make sure that Android Studio is properly installed and configured. After you install Android Studio, test your environment with the setup command. If you’re using an existing Android Studio installation, run setup to verify that your installed environment meets Mobile Extensions requirements.

## Install Android Studio

If you’ve already installed Android Studio, skip to “[Verify Your Android Studio Setup](#verify_android_setup).”

To install Android Studio, download and run the installer at [developer.android.com/studio](https://developer.android.com/studio "HTML (New Window)").

Android apps specify different API levels. According to the Android documentation:

-   “Minimum API level” is the lowest API level with which your app is compatible
-   “Target API level” is the highest API level against which you’ve designed and tested your app

We recommend installing the latest available API level. If the latest level doesn't work as expected, try the next API level below.

![List of Android SDK platforms in Android Studio Preferences](/docs/resources/img/en-us/260.0?doc_id=images%2Fsdkmanager_apiversions.png&folder=mobile_offline)

1.  In the Android Studio Welcome screen, click **Configure** | **SDK Manager**.
2.  If you require previewing with additional API levels, download one or more **SDK Platforms**. We recommend the latest API level and one level below. For each required level:
    1.  Check the box next to its name.
    2.  Click Apply. Downloading new API versions can take several minutes.
    3.  If prompted, confirm each download, then accept the license agreement and click **Next**.
3.  Select **SDK Tools**.
4.  If the status of **Android SDK Command-line Tools (latest)** is “Not installed”, select **Android SDK Command-line Tools (latest)**, then click **Download**.

    ![Command-line tools download](/docs/resources/img/en-us/260.0?doc_id=images%2Fas_command_line_tools_select_download.png&folder=mobile_offline)

    Although the latest version is recommended, any version of the command-line tools is expected to work.

5.  When the downloads are finished, click OK to dismiss the SDK Manager.

## Create a Virtual Device

Now that you’ve installed the SDK, create an emulator for testing and debugging your apps. Let’s choose a system image that supports the latest API version and Google APIs.

1.  In the Android Studio Welcome screen, click **Configure** | **AVD Manager**.
2.  On the Your Virtual Devices page, click the plus symbol to **Add a new device**. Then, click **Create Virtual Device**.
3.  Select a device definition, and click **Next**.
4.  Under Select a System Image, select an image listing that supports the following criteria.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    In a new Android Studio installation, none of the images are downloaded.

    -   **API Level:** 34 or higher
    -   **ABI:** arm64-v8a
    -   **Target:** Any image that Android Studio makes available by default

    ![Download button for Android 10.0 (Google Play) emulator](/docs/resources/img/en-us/260.0?doc_id=images%2Favd_systemimage_x86images_download.png&folder=mobile_offline)

5.  Click the **Download** button next to the Release Name.
6.  After the download completes and you return to the System Image list, select the downloaded image and click **Next**.
7.  In Verify Configuration, you can change the AVD name to any value that helps you identify the configuration. For other settings, you can accept the default values.
8.  Click **Finish** to return to Your Virtual Devices.
9.  To launch the emulator, click the Play button in your emulator’s listing.

## Verify Your Android Studio Setup

During installation, Android Studio configures your system environment with standard Android paths and locations. The Mobile Extensions setup command checks your settings and reports issues to the command-line console.

To verify that your environment is ready for Android previews, run the setup command:

sf force:lightning:local:setup -p android

If setup reports any issues, use the following guidelines to correct them.

System Variables

The ANDROID\_HOME variable is the starting point for all Android development operations. If this variable isn’t set or is incorrect, Mobile Extensions can’t use Android tools. You set ANDROID\_HOME to point to the top-level directory of your Android SDK installation. On macOS, for example, this variable’s default value is /Users/<*user\_name*\>/Library/Android/sdk. If you’ve installed Android SDK in a custom directory, make sure that this path points to that location.

**macOS X**:

You can make these settings persistent by adding them to the ~/.bash\_profile or similar startup file for your command shell.

-   Configure ANDROID\_HOME as follows.

    ```

    ```

-   For Android, the Mobile Extensions plug-in requires the Java Development Kit (JDK) version used by Android Studio. Currently, this version is JDK 17. Your plug-in commands might fail if:

    -   A JAVA\_HOME system variable exists on your machine and points to a different JDK version.
    -   Other applications in your system path use a different JDK version.

    You can find the correct JDK version installed with Android Studio’s Java runtime engine embedded in the Android Studio app. For example:

    ```

    ```

    See [the Android Developer documentation](https://developer.android.com/studio/intro/studio-config#jdk "HTML (New Window)").

**Windows:** In **System Properties** | **Advanced**, add the following variable definitions to either System Environment Variables or User Environment Variables. (For help with finding System Properties, see [www.imatest.com/docs/editing-system-environment-variables](https://www.imatest.com/docs/editing-system-environment-variables "HTML (New Window)").)

-   -   Variable: **ANDROID\_HOME**
    -   Value: C:\\Users\\<user>\\AppData\\Local\\Android\\Sdk
-   -   Variable: **JAVA\_HOME**
    -   Value: C:\\Program Files\\Android\\Android Studio\\jre

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

        #### Note

        For Android, the Mobile Extensions plug-in requires the Java Development Kit (JDK) version used by Android Studio. If you set JAVA\_HOME to a custom path that points to a different JDK version, the plug-in commands might fail.


**Linux:** Set the following variable definitions in your ~/.profile file.

-   -   Variable: **ANDROID\_HOME**
    -   Value: ~/Android/Sdk
-   -   Variable: **JAVA\_HOME**
    -   Value: /snap/android-studio/current/android-studio/jre

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

        #### Note

        For Android, the Mobile Extensions plug-in requires the Java Development Kit (JDK) version used by Android Studio. Currently, this version is JDK 17. If you set JAVA\_HOME to a custom path that points to a different JDK version, the plug-in commands might fail.


Android SDK Version

One or more of: Android 9.0 (Pie), API Level 28, or higher.

Android Tools and Emulator

For the following items, verify that you’ve installed the latest version of all of the following tools.

-   Android Emulator
-   Android SDK Platform-Tools
-   Android SDK Command-line Tools

Check these versions in the SDK Tools section of the Android SDK Manager.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

In addition to the version ranges listed here, later stable versions of these tools are also expected to work.

If you’ve changed any settings, rerun the setup command.

## Code Examples

```
export ANDROID_HOME=/Users/<your_user_name>/Library/Android/sdk
```

```
export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
```
