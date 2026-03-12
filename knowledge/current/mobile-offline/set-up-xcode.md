---
title: "Set Up Xcode"
domain: mobile-offline
topic: set-up-xcode
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.663Z
estimatedTokens: 551
keywords: [Xcode, run, previews, iOS, simulators, sure, latest, version, properly, installed, configured, install, test, environment, Mobile]
---

# Set Up Xcode

> Before you run previews in iOS simulators, make sure that the latest version of Xcode
    is properly installed and configured. After you install Xcode, test your environment with the
    Mobile Preview setup command. If you’re using an existing
    Xcode installation, run the setup command to verify that your
    installed environment meets Mobile Extensions requirements.

# Set Up Xcode

Before you run previews in iOS simulators, make sure that the latest version of Xcode is properly installed and configured. After you install Xcode, test your environment with the Mobile Preview setup command. If you’re using an existing Xcode installation, run the setup command to verify that your installed environment meets Mobile Extensions requirements.

## Install Xcode

How you install Xcode depends on your version of macOS. We recommend using the latest version of macOS and Xcode. You can download and install Xcode from [developer.apple.com/downloads/more](https://developer.apple.com/support/xcode/ "HTML (New Window)"). This site requires you to log in with your Apple ID.

If you’ve already installed Xcode, skip to “[Verify Your iOS Setup](#verify_ios_setup).”

## Verify Your iOS Setup

To verify that your new or existing Xcode environment is ready for iOS previews, run the Mobile Extensions setup command:

sf force:lightning:local:setup -p ios

If setup reports any issues, follow these steps to correct them.

1.  **Use the latest macOS:** To run Mobile Extensions for iOS, you have to use a Mac. Make sure it's using the latest version of macOS.
    1.  On your Mac, click **About This Mac** in the System menu.
    2.  Under **Overview**, look for the operating system name and version. Examples: “macOS Sonoma Version 14.5”.
2.  **Verify that you’re running the latest version of Xcode.**
    1.  In Xcode, select **Xcode** | **About Xcode** and check the version number.
3.  **Add an iOS simulator that runs the latest version of iOS.**
    1.  In **Xcode** | **Preferences**, select **Components**.

        In the Simulator list, installed simulators are marked with a blue check. The default simulator for your version of Xcode doesn’t appear in this list.

    2.  If none of your installed simulators use the latest version of iOS, check and install at least one updated iOS simulator.
4.  **Final check:** Rerun the setup command:

    sf force:lightning:local:setup -p ios

5.  To see the list of installed virtual devices that Mobile Extensions recognizes on your machine, use the device:list command:

    sf force:lightning:local:device:list -p ios
