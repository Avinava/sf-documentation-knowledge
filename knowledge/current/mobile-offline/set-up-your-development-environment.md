---
title: "Set Up Your Development Environment"
domain: mobile-offline
topic: set-up-your-development-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.604Z
estimatedTokens: 1567
keywords: [Development, Environment, Lightning, web, component, LWC, test, mobile, app, components, Installation, Instructions]
---

# Set Up Your Development Environment

> Before you can create your first Lightning web component (LWC), or test a LWC in a
  mobile app, you must set up your development environment for mobile components.

# Set Up Your Development Environment

Before you can create your first Lightning web component (LWC), or test a LWC in a mobile app, you must set up your development environment for mobile components.

The complete development environment for building Lightning web components for offline-enabled apps includes the following elements.

-   Salesforce CLI (SFDX)
-   Visual Studio Code (VS Code)
-   Salesforce Extensions for VS Code
-   Android Studio and a virtual device emulator
-   Apple Xcode and a virtual device simulator
-   Salesforce Mobile Extensions
-   A virtual device build for the relevant mobile app

While you can eventually choose to replace or add tools to this list, start with these and add to them as you become more experienced.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Don’t let Android Studio or Xcode intimidate you. You only need to use it to provision a device emulator (Android) or simulator (iOS). You don’t *need* both Android Studio and Xcode. If you want both, great. If not, pick the one you’re most comfortable with.

## Installation Instructions

We recommend the following installation sequence. Each link provides complete details for installing and configuring each of the different tools.

-   [Install and configure Android Studio](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm "Before you run previews in Android emulators, make sure that Android Studio is properly installed and configured. After you install Android Studio, test your environment with the setup command. If you’re using an existing Android Studio installation, run setup to verify that your installed environment meets Mobile Extensions requirements.")
-   [Install and configure Xcode](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm "Before you run previews in iOS simulators, make sure that the latest version of Xcode is properly installed and configured. After you install Xcode, test your environment with the Mobile Preview setup command. If you’re using an existing Xcode installation, run the setup command to verify that your installed environment meets Mobile Extensions requirements.")
-   [Install the Salesforce CLI](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-cli.html "HTML (New Window)")
-   [Install the Mobile Extensions](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm "To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the required Android and iOS configurations. If the plug-in finds problems, the command output gives you hints for how to fix your environment. After your environment is set up, preview your components from the command line or from Visual Studio Code.")
-   [Install VS Code](https://code.visualstudio.com/ "HTML (New Window)")
-   [Install Salesforce Extensions for VS Code](https://developer.salesforce.com/tools/vscode/en/vscode-desktop/install "HTML (New Window)")
-   Download the latest virtual device build for the mobile app
    -   For the Salesforce mobile app, use the standard virtual device builds, as described in [Preview Components in the Salesforce Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm "To verify your Lightning web components in Salesforce on many devices, use virtual device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on iOS simulators and Android emulators.").

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

        #### Note

        Your org must be enabled for LWC Offline before you can see or use LWC Offline features.

    -   For the Field Service mobile app, the download link is posted in the [Trailblazer Community](https://trailblazers.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F94S000000GwNL "HTML (New Window)").
-   [Install a virtual device build](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm#install_ios_and_android_virtual_device_builds) into a configured Android emulator or iOS simulator instance

The [Develop a Lightning Web Component Quick Action](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action.htm "Welcome to developing quick actions using Lightning web components (LWCs) in the Salesforce Field Service (SFS) mobile app. With custom quick actions, you can tailor your Field Service mobile app users’ experience to have easier access to viewing and updating information relevant to them.") quick start provides hands-on instructions for setting up your development environment, and also for creating, deploying, and running your first LWC.

-   **[Install Mobile Extensions](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm)**
    To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the required Android and iOS configurations. If the plug-in finds problems, the command output gives you hints for how to fix your environment. After your environment is set up, preview your components from the command line or from Visual Studio Code.
-   **[Set Up Xcode](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)**
    Before you run previews in iOS simulators, make sure that the latest version of Xcode is properly installed and configured. After you install Xcode, test your environment with the Mobile Preview setup command. If you’re using an existing Xcode installation, run the setup command to verify that your installed environment meets Mobile Extensions requirements.
-   **[Set Up Android Studio](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)**
    Before you run previews in Android emulators, make sure that Android Studio is properly installed and configured. After you install Android Studio, test your environment with the setup command. If you’re using an existing Android Studio installation, run setup to verify that your installed environment meets Mobile Extensions requirements.

## Related Topics

- Install and configure Android
            Studio (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)
- Install and configure Xcode (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)
- Install the Mobile Extensions (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm)
- Preview Components in the Salesforce Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm)
- Install a virtual device
            build (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm)
- Develop a Lightning Web Component Quick Action (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action.htm)
- Install Mobile Extensions (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm)
- Set Up Xcode (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)
- Set Up Android Studio (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)
