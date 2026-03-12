---
title: "Install Mobile Extensions"
domain: mobile-offline
topic: install-mobile-extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.651Z
estimatedTokens: 2425
keywords: [Install, Mobile, Extensions, lwc-dev-mobile, Salesforce, CLI, plug-in, it’s, installed, check, Android, iOS, configurations, finds, problems]
---

# Install Mobile Extensions

> To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the
    required Android and iOS configurations. If the plug-in finds problems, the command output gives
    you hints for how to fix your environment. After your environment is set up, preview your
    components from the command line or from Visual Studio Code.

# Install Mobile Extensions

To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the required Android and iOS configurations. If the plug-in finds problems, the command output gives you hints for how to fix your environment. After your environment is set up, preview your components from the command line or from Visual Studio Code.

The Mobile Extensions plug-in provides several tools:

Setup

Run force:lightning:local:setup to set up virtual mobile devices—iOS simulators and Android emulators—in their local environments. Mobile Extensions provides a preconfigured default virtual device for iOS and for Android.

Preview

Run force:lightning:lwc:preview to preview your components on virtual mobile devices. You can choose either the default device or one that you’ve configured. Mobile Extensions let you add and recall virtual device configurations. The plug-in presents your component preview in the default browser of your virtual device. This preview acts as a playground—instantly reflecting visual changes you apply to your component’s code.

List Devices

Run force:lightning:local:device:list to see a list of virtual devices found on your machine by the Mobile Extensions plug-in.

## Install the Mobile Extensions Plug-in

1.  If you haven’t yet installed Salesforce CLI on your development machine, see [Install the Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)").
2.  Install the Mobile Extensions plug-in:

    sf plugins install @salesforce/lwc-dev-mobile

    A message that the plug-in isn’t digitally signed is expected and isn’t a cause for concern.
3.  If you’re prompted to continue installation, enter y.
4.  To see the available commands, use grep with sf commands, which lists the commands with a space separator rather than a colon. Salesforce CLI commands accept either separator. For example, the setup command is in the force lightning local topic, while the preview command is in the force lightning lwc topic:

    sf commands | grep "force lightning local" force lightning local device create Create a virtual mobile device force lightning local device list List the available virtual mobile devices for Lightning Web Component development. force lightning local device start Start a virtual mobile device force lightning local setup Set up mobile environment for Lightning Web Component development. sf commands | grep "force lightning lwc" force lightning lwc preview Preview Lightning Web Components in a virtual mobile environment force lightning lwc start Develop Lightning Web Component modules and see live changes without publishing your components to an org. force lightning lwc test create creates a Lightning web component test file with boilerplate code inside a \_\_tests\_\_ directory. force lightning lwc test run invokes Lightning Web Components Jest unit tests. force lightning lwc test setup install Jest unit testing tools for Lightning Web Components. force lightning lwc test ui mobile configure Create a configuration file for running UTAM tests on mobile. force lightning lwc test ui mobile run Run UTAM test by specifying a WDIO configuration. Test specs to run can be explicitly specified by using a flag.

    To see the syntax of the available commands, call each command with the \--help argument. For example:

    sf force:lightning:local:setup --help sf force:lightning:lwc:preview --help


## Check Your Development Environment

To verify that your development environment meets Mobile Extensions requirements, run the setup command. This command runs a series of tests that checks the presence and versions of your mobile platform libraries, tools, and virtual device configurations. If the command detects problems, it prints hints for solving them in the Terminal console or Windows command prompt.

You can run this command to check either an Android or an iOS configuration.

sf force:lightning:local:setup -p <*platform\_name*\>

-   \-p, \--platform: Mobile platform to verify. Can be either Android or iOS (case insensitive).
-   Two other parameters—\--json and \--loglevel—are standard Salesforce CLI conventions and aren’t part of the setup functionality.

1.  Check your Android setup status.

    sf force:lightning:local:setup -p android

    1.  If your setup is correct, this command prints “Passed” status for all tests. You’re ready to start previewing components on Android!
    2.  If any test fails, follow the suggestions printed in the console to finish setting up your Android environment. To review setup instructions, see [Set Up Android Studio](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm "Before you run previews in Android emulators, make sure that Android Studio is properly installed and configured. After you install Android Studio, test your environment with the setup command. If you’re using an existing Android Studio installation, run setup to verify that your installed environment meets Mobile Extensions requirements.").
    3.  Repeat this step until all tests report “Passed”.
2.  Check your iOS setup status.

    sf force:lightning:local:setup -p ios

    1.  If your setup is correct, this command prints “Passed” status for all tests. You’re ready to start previewing components on iOS!
    2.  If any test fails, follow the suggestions printed in the console to finish setting up your iOS environment. To review setup instructions, see [Set Up Xcode](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm "Before you run previews in iOS simulators, make sure that the latest version of Xcode is properly installed and configured. After you install Xcode, test your environment with the Mobile Preview setup command. If you’re using an existing Xcode installation, run the setup command to verify that your installed environment meets Mobile Extensions requirements.").
    3.  Repeat this step until all tests report “Passed”.

## Check Your Available Virtual Devices

To see which of your devices are available to Mobile Extensions, use the following command.

sf force:lightning:local:device:list -p <*platform\_name*\>

-   \-p, \--platform: Mobile platform to verify. Can be either Android or iOS (case insensitive).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

-   The preview command allows you to select any of your installed simulators. However, Salesforce can’t guarantee preview performance on all virtual devices.
-   For iOS, the list produced by this command uses the format “*device name*, *iOS\_runtime version*”.
-   For Android, the list produced by this command uses the format “*device name*, *device type*, *Android runtime version*”.
-   For Android, if your development environment variables aren’t properly configured, this command returns an empty list.

## Create a Virtual Device

To create an iOS or Android device that’s guaranteed to meet Mobile Extensions requirements, use the following command:

sf force:lightning:local:device:create -n <*name*\> -d <*device\_type*\> -p \[ios|android\] \[-l <*android\_api\_level*\>\]

-   \-n, \--devicename

    Name for the new virtual device. If the specified name is already in use on your machine, the command fails with an explanatory error. To see the list of your existing device names, use the force:lightning:local:device:list command.

    \-d, \--devicetype

    Type of virtual device.

    If the command doesn’t recognize your device type entry, choose one from the list provided by the resulting error message. For example:

    -   Android:

        ```

        ```

    -   iOS:

        ```

        ```


    \-p, \--platform

    Mobile platform to create. Can be Android or iOS (case insensitive).

    \-l, \--apilevel

    (Optional, Android only) Android API level for the new device. Default value is your latest installed API level. Not used for iOS devices.

-   Two other parameters—\--json and \--loglevel—are standard Salesforce CLI conventions and aren’t part of the setup functionality.

iOS Example

sf force:lightning:local:device:create -p ios -n 'iOS test' -d 'iPhone 12 Pro Max'

Android Example

sf force:lightning:local:device:create -p android -n 'API 29 pixelXL' -d 'pixel\_xl' -l 29

This command starts by running the force:lightning:local:setup command. If that command reports failures, address the first reported failure, and then retry the force:create command.

If you specify a device name that already exists on your machine, the command exits with the message “A virtual device with the name '<*existing\_name*\>' already exists.”

## Start a Virtual Device

To launch a virtual device, use the following command.

sf force:lightning:local:device:start -p \[ios|android\] -t <*virtual\_device\_name*\>\] \[-w <*true*|*false*\>\]

-   \-p, \--platform

    Mobile platform of the target device. Can be Android or iOS (case insensitive).

    \-t, \--target

    Name of the virtual device to launch.

    \-w, \--writablesystem

    (Optional, Android only) Doesn’t accept a value. If present, the virtual device launches with a writable system. Otherwise, the system is read-only.

-   Two other parameters—\--json and \--loglevel—are standard Salesforce CLI conventions and aren’t part of the setup functionality.

iOS Example

sf force:lightning:local:device:start -p ios -t "iPhone 12 Pro Max"

Android Examples

sf force:lightning:local:device:start -p android -t "API 29 pixelXL"

sf force:lightning:local:device:start -p android -t "API 29 pixelXL" -w

## Code Examples

```
✖ FAILED: Validating specified device type. (0.001 sec) 
   › Device type 'pixel_xlst' is invalid. Must be one of the following 
     valid types: pixel, pixel_xl, pixel_c
```

```
✖ FAILED: Validating specified device type. (0.287 sec) 
   › Device type '“iPhone 12 Pro Max 14.4”' is invalid. Must be one of the following 
     valid types: iPhone-8, iPhone-8-Plus, iPhone-X, iPhone-XS, 
     iPhone-XS-Max, iPhone-XR, iPhone-11, iPhone-11-Pro, iPhone-11-Pro-Max, 
     iPhone-12-mini, iPhone-12, iPhone-12-Pro, iPhone-12-Pro-Max
```

## Related Topics

- Set Up Android Studio (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)
- Set Up Xcode (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)
