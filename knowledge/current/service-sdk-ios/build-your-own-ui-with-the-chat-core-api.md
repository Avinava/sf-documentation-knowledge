---
title: "Build Your Own UI with the Chat Core API"
domain: service-sdk-ios
topic: build-your-own-ui-with-the-chat-core-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.936Z
estimatedTokens: 2193
keywords: [Build, Own, Chat, Core, API, access, functionality, useful, want]
---

# Build Your Own UI with the Chat Core API

> With the Chat Core API, you can access the functionality of Chat without a UI. This API
    is useful if you want to build your own UI and not use the default.

# Build Your Own UI with the Chat Core API

With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before running through these steps, be sure you’ve already:

-   Set up Service Cloud to work with Chat. To learn more, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").
-   Installed the SDK. To learn more, see [Install the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

Once you’ve reviewed these prerequisites, you’re ready to begin.

These steps describe how to use the Chat Core API with your own custom UI. To use the default UI, see [Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm "To add Chat to your iOS app, create an SCSChatConfiguration object and pass it to the showChat method.").

1.  Import the SDK. Wherever you intend to use the Chat SDK, be sure to import the ServiceCore framework and the ServiceChat framework.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

2.  Create an [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    See [Configure a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm#configure_lac_session "Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.") on how to configure a chat session.

3.  Implement [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html) and handle the relevant session-related methods.

    Using this delegate, you can:

    -   Detect state transitions with [session(didTransitionFrom:to:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didTransitionFromState:toState:).
    -   Detect the end of the session with [session(didEnd:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didEnd:).
    -   Detect error conditions with [session(didError:fatal:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didError:fatal:).
    -   Detect queue state changes with [session(didUpdateQueuePosition:estimatedWaitTime:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didUpdateQueuePosition:estimatedWaitTime:).

    Pass your implementation to the [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html) instance.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    To learn more, see [Listen for State Changes and Events](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_listen_to_events.htm "Implement SCSChatSessionDelegate to be notified about state changes made before, during, and after a chat session. This delegate also allows you to listen for error conditions so you can present alerts to the user when applicable.").

4.  Implement [SCSChatEventDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html) and handle the relevant event-related methods.

    Using this delegate, you can:

    -   Detect when an agent joins with [session(agentJoined:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:agentJoined:).
    -   Detect when an agent leaves with [session(agentLeftConference:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:agentLeftConference:).
    -   Detect when an outgoing message is sent with [session(processedOutgoingMessage:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:processedOutgoingMessage:).
    -   Detect when the delivery status of a message has been updated with [session(didUpdateOutgoingMessageDeliveryStatus:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:didUpdateOutgoingMessageDeliveryStatus:).
    -   Detect when an incoming message arrives with [session(didReceiveMessage:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:didReceiveMessage:).
    -   Detects when a URL is found in an message with [session(didReceiveURL:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:didReceiveURL:).
    -   Detect when a chat bot menu arrives with [session(didReceiveChatBotMenu:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:didReceiveChatBotMenu:).
    -   Detect when a chat bot menu item is selected with [session(didSelectMenuItem:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatEventDelegate.html#/c:objc\(pl\)SCSChatEventDelegate\(im\)session:didSelectMenuItem:).
    -   Detect when the agent starts and finishes typing.
    -   Detect events related to the file transfer process.
    -   Detects when the user is transferred to an agent from a chat bot.

    Pass your implementation to the [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html) instance.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

5.  Start the session using [startSession(with:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html#/c:objc\(cs\)SCSChat\(im\)startSessionWithConfiguration:) on [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html).

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

6.  Send activity to the [SCSChatSession](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSession.html) object found in [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html).

    You can access the session object either from the SCSChat.session property, or from any of your delegate event methods that the SDK calls.

    With this session object, you can:

    -   Send sneak peek data about the user's message to the agent with sendSneakPeek.
    -   Send a message to the agent with sendMessage.
    -   Get or set the user's typing status with userTyping.
    -   Get information about the actors in the chat session with actors.
    -   Get the history of all events from the chat session with allEvents.
    -   Get the current queue position when the user is waiting for an agent with queuePosition.

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
ServiceCloud.shared().chatCore.add(delegate: mySessionDelegate)
```

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- Install the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
- Quick Setup: Chat in the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm)
- Configure a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm)
- Listen for State Changes and Events (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_listen_to_events.htm)
