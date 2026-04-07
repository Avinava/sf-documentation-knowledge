---
title: "Add the Service SDK Frameworks with CocoaPods"
domain: service-sdk-ios
topic: add-the-service-sdk-frameworks-with-cocoapods
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.986Z
estimatedTokens: 869
keywords: [Add, Service, SDK, Frameworks, CocoaPods, developer, tool, automatically, manages, dependencies]
---

> Add the SDK frameworks using CocoaPods, a developer tool that automatically manages
        dependencies.

# Add the Service SDK Frameworks with CocoaPods

Add the SDK frameworks using CocoaPods, a developer tool that automatically manages dependencies.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

1.  If you haven't already done so, install the [CocoaPods](https://cocoapods.org/) gem and initialize the CocoaPods main repository.

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    The minimum supported version of CocoaPods is 1.0.1. If you're not sure what version you have, use pod --version to check the version number.

2.  If you already have [CocoaPods](https://cocoapods.org/) installed, update your pods to the latest version.

    ```

    ```

3.  Change to the root directory of your application project.
4.  Create or edit a file named Podfile that contains the Service Chat SDK dependency.
    1.  If you want to install the complete Service Chat SDK, update your Podfile to include ServiceSDK.

        ```

        ```

    2.  If you want to install a single Service Chat SDK component, create a similar Podfile to the one specified above, but only include the desired pod.

        | Feature | Pod name |
        | --- | --- |
        | Chat | ServiceSDK/Chat |

        For example, the following Podfile installs Chat.

        ```

        ```

        If you don't specify a version number, you automatically get the latest version of that component. If you want to add a specific version to your component, be sure to add the version number of the Service Chat SDK and *not* the version number of the individual component.

5.  Run the CocoaPods installer.

    ```

    ```

    This command generates a .xcworkspace file for you with all the dependencies included.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    If you run into issues installing or updating the SDK, clear the local CocoaPods cache and then perform a pod update.

6.  Open the .xcworkspace file that CocoaPods generated and continue with the installation process.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    Be sure to open the .xcworkspace file (which includes all the dependencies) and *not* the .xcodeproj file.


Once you've added the SDK frameworks, proceed with [the installation instructions](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

## Code Examples

```
sudo gem install cocoapods
pod setup
```

```apex
source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/goinstant/pods-specs-public'

# To use the SDK (with all components)
target '<your app target>' do
    pod 'ServiceSDK'
end
```

```apex
source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/goinstant/pods-specs-public'

# To use Chat
target '<your app target>' do
    pod 'ServiceSDK/Chat'
end
```

```
pod install
```

## Related Topics

- the installation
                    instructions (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
