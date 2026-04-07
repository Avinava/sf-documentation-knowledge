---
title: "Quick Setup: Chat in the"
domain: service-sdk-ios
topic: quick-setup-chat-in-the
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:28.061Z
estimatedTokens: 2644
keywords: [Quick, Setup, Chat, add, iOS, app, SCSChatConfiguration, pass, showChat]
---

> To add Chat to your iOS app, create an SCSChatConfiguration object and pass it to the showChat method.

# Quick Setup: Chat in the

To add Chat to your iOS app, create an SCSChatConfiguration object and pass it to the showChat method.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before running through these steps, be sure you’ve already:

-   Set up Service Cloud to work with Chat. To learn more, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").
-   Installed the SDK. To learn more, see [Install the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

Once you’ve reviewed these prerequisites, you’re ready to begin.

These steps describe how to set up Chat with the default UI. If you prefer to build your own user interface, see [Build Your Own UI with the Chat Core API](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_chat_core_api.htm#live_agent_chat_core_api "With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default.").

1.  Import the SDK. Wherever you intend to use the Chat SDK, be sure to import the ServiceCore framework and the ServiceChat framework.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

2.  Create an [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) instance with information about your LiveAgent pod, your Salesforce org ID, the deployment ID, and the button ID.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    You can get the required parameters for this method from your Salesforce org. See [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#live_agent_cloud_setup_get_settings "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup."). If your Salesforce admin hasn’t already set up Chat in Service Cloud or you need more guidance, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").

3.  (Optional) Configure the visitor name, queue display style, whether the user can minimize the chat session, and various other configuration settings.

    See [Configure a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm#configure_lac_session "Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.") for more information.

4.  (Optional) Customize the appearance with the configuration object.

    You can configure the colors, fonts, and images to your interface with an [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) instance. It contains the methods [setColor](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setColor:forName:), [setFontDescriptor](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setFontDescriptor:fontFileName:forWeight:), and [setImage](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setImage:compatibleWithTraitCollection:forName:). You can also configure the strings used throughout the interface. See [SDK Customizations with the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm "Once you’ve played around with some of the SDK features, use this section to learn how to customize the Service Chat SDK user interface so that it fits the look and feel of your app. This section also contains instructions for localizing strings in all supported languages.").

5.  (Optional) Specify any pre-chat fields.

    You can specify both optional and required fields shown to the user before a chat session starts. You can also directly pass data to an agent without requiring any user input. These fields can be mapped directly to fields in a record in your org.

    See [Show Pre-Chat Fields to User](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_prechat_fields.htm#live_agent_prechat_fields "Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.") and [Create or Update Salesforce Records from a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_send_custom_data.htm "When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.") for more information.

6.  To start a chat session, call the [showChat(with:showPrechat:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showChatWithConfiguration:showPrechat:) method on [SCSChatInterface](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html).

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    The showChat method must be called on the main UI thread.

    You can provide an optional completion block to execute code when the session has been fully connected to all services. During a successful session initialization, the SDK calls the completion block at the point that the session is active and the user is waiting for an agent to join. If there is a failure, the SDK calls the completion block with the associated error.

7.  Listen for events and handle error conditions.

    You can detect when a session ends by implementing the [session(didEnd:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didEnd:) method on the [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html) delegate. Register this delegate using the [add(delegate:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html#/c:objc\(cs\)SCSChat\(im\)addDelegate:) method on your [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html) instance. In particular, we suggest that you handle the .agent reason (for when an agent ends a session) and the .noAgentsAvailable reason (for when there are no agents available). See [Listen for State Changes and Events](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_listen_to_events.htm "Implement SCSChatSessionDelegate to be notified about state changes made before, during, and after a chat session. This delegate also allows you to listen for error conditions so you can present alerts to the user when applicable.").

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    The SDK doesn't show an alert when a session fails to start, or when a session ends. It's your responsibility to listen to events and display an error when appropriate.


These steps embed the chat experience into your app.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

To learn about chat timeout limitations on iOS devices, see [When does a chat session time out?](https://github.com/forcedotcom/ServiceSDK-iOS/wiki/When-does-a-chat-session-time-out%3F)

## Example

To use this example code, create a Single View Application and [Install the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

Use the storyboard to add a button to the view. Add a Touch Up Inside action in your UIViewController implementation with the name startChat. In the view controller code:

-   Implement the [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html) protocol so that you can be notified when there are errors or state changes.
-   Specify self as a chat delegate.
-   Start a chat session in the button action.
-   Implement the [session(didEnd:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didEnd:) method and show a dialog when appropriate.

In Swift:

```

```

In Objective-C:

```

```

## Code Examples

```
import ServiceCore
import ServiceChat
```

```
@import ServiceCore;
@import ServiceChat;
```

```
let config = SCSChatConfiguration(liveAgentPod: "TO_DO_POD_NAME",
                                  // e.g. "d.gla5.gus.salesforce.com"
                                  orgId: "TO_DO_ORG_ID",
                                  // e.g. "00DB00000003Rxz"
                                  deploymentId: "TO_DO_DEPLOYMENT_ID",
                                  // e.g. "573B00000005KXz"
                                  buttonId: "TO_DO_BUTTON_ID")
                                  // e.g. "575C00000004h3m"
```

```
SCSChatConfiguration *config =
  [[SCSChatConfiguration alloc] initWithLiveAgentPod:@"TO_DO_POD_NAME"
                                              // e.g. "d.gla5.gus.salesforce.com"
                                               orgId:@"TO_DO_ORG_ID"
                                              // e.g. "00DB00000003Rxz"
                                        deploymentId:@"TO_DO_DEPLOYMENT_ID"
                                              // e.g. "573B00000005KXz"
                                            buttonId:@"TO_DO_BUTTON_ID"];
                                              // e.g. "575C00000004h3m"
```

```
ServiceCloud.shared().chatUI.showChat(with: config!)
```

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- Install the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
- Build Your Own UI with the Chat Core API (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_chat_core_api.htm)
- Get Chat Settings from Your Org (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm)
- Configure a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm)
- SDK Customizations with the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm)
- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_prechat_fields.htm)
- Create or Update Salesforce Records from a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_send_custom_data.htm)
- Listen for State Changes and Events (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_listen_to_events.htm)
