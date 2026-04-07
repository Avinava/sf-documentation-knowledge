---
title: "Configure a Chat Session"
domain: service-sdk-ios
topic: configure-a-chat-session
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.795Z
estimatedTokens: 2021
namespace: ServiceCloud.Chat.Status.EstimatedWait
keywords: [Configure, Chat, Session, starting, several, ways, SCSChatConfiguration, configuration, settings, allow, specify, pre-chat, determine, whether, starts]
---

# Configure a Chat Session

> Before starting a chat session, you have several ways to
      configure the session using the SCSChatConfiguration
      object. These configuration settings allow you to specify pre-chat fields, determine whether a
      session starts minimized or full screen, and get updates about the user's queue
    position.

**Namespace:** `ServiceCloud.Chat.Status.EstimatedWait`

# Configure a Chat Session

Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

When you start a chat session, you specify an [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object as one of the arguments. This object contains all the configuration settings necessary for Chat to start a session. To create an [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object, you specify information about your org and deployment.

In Swift:

```

```

In Objective-C:

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

You can get the required parameters for this method from your Salesforce org. See [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#live_agent_cloud_setup_get_settings "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup."). If your Salesforce admin hasn’t already set up Chat in Service Cloud or you need more guidance, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").

However, there are other options you can set using [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) at configuration time.

The following features are available for configuration:

| Property Name | Description | Type & Default Value |
| --- | --- | --- |
| allowMinimization | Indicates whether the user is allowed to minimize the chat session view. | Bool: true/YES |
| allowURLPreview | Indicates whether the user is shown URL previews when the agent types a URL in the chat feed. | Bool: true/YES |
| defaultToMinimized | Indicates whether the chat session starts out as a minimized thumbnail view. | Bool: true/YES |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

When the minimized view is visible, it displays the number of unread messages. This value represents the total number of bot, agent, and system messages that are unread.

| Property Name | Description | Type & Default Value |
| --- | --- | --- |
| allowBackgroundExecution | Indicates whether to allow extended background execution to support active chat sessions. When true, active chat sessions can remain in the background for more than three minutes. See allowBackgroundNotifications for related functionality. | Bool: true/YES |
| allowBackgroundNotifications | Indicates whether the session posts local notifications based on chat activity. Requires that allowBackgroundExecution is also set to true. To learn more, see Notifications for Chat Activity. | Bool: true/YES |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

When turning on background execution, be sure that Idle Connection Timeout Duration is set in your org. To learn more, see [Chat Deployment Settings](https://help.salesforce.com/articleView?id=service.live_agent_deployment_settings.htm&type=5&language=en_US).

| Property Name | Description | Type & Default Value |
| --- | --- | --- |
| prechatEntities | Pre-chat fields are always sent to the agent at the start of the session. But if you want to fill in fields of a particular record, instantiate an SCSPrechatEntity for each Salesforce object (for example, Case or Contact) and instantiate an SCSPrechatEntityField for each field association within that Salesforce object (for example, Subject or LastName).To learn more, see Create or Update Salesforce Records from a Chat Session. | SCSPrechatEntity array: nil |
| prechatFields | You can specify both optional and required fields shown to the user before a chat session starts. You can also directly pass data to an agent without requiring any user input.To create pre-chat fields, add SCSPrechatObject instances to the prechatFields property on the SCSChatConfiguration object.To learn more, see Show Pre-Chat Fields to User. | SCSPrechatObject array: nil |

| Property Name | Description | Type & Default Value |
| --- | --- | --- |
| eventList | Adds a custom path that displays a custom tile and performs a custom action within your app. To learn more, see Handle Custom URLs in Chat. | SCSAppEventList |
| queueStyle | Determines the style of the queue. The queue can either display the queue position number (.position), the estimated wait time (.estimatedWaitTime), or no queue information at all (.none).You can subscribe to queue position events using session(didUpdateQueuePosition:estimatedWaitTime:) on SCSChatSessionDelegate.When using the estimated wait time, the wait time is shown to the user in minutes. However, you can set the minimum (minimumEstimatedWaitTime) and maximum () wait time values. If the wait time exceeds the maximum value, a generic message appears, which you can customize (using the customizable chat strings in the ServiceCloud.Chat.Status.EstimatedWait namespace). To understand the algorithm used for the estimated wait time, see the estimated wait time documentation in the Chat REST API Developer Guide.When using the queue position number, the queue position is 0 if the agent capacity is greater than or equal to the number of customer requests. Otherwise, the position value represents how far the customer is from getting served by an agent.q = max(n - c, 0)Where:q is the queue positionn is the position of the customer compared to all waiting customersc is the total capacity of all agentsFor example, if the total capacity is 10, the first 10 waiting visitors have a position of 0, the 11th has a position of 1, the 12th has a position of 2, and so on. | SCSChatConfigurationQueueStyle: .position |
| remoteLoggingEnabled | Indicates whether session logs are sent for collection. (Logs sent remotely don't collect personal information. Unique IDs are created for tying logs to sessions and those IDs can't be correlated back to specific users.) | Bool: true/YES |
| visitorName | Name of the chat visitor. This value is used by the Service Cloud console and displayed to the agent. | String: "Visitor" |

Once you've fully configured the [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object, you can start the session using the startSession method.

## Example

The following example configures a session with one pre-chat field and a visitor name "Jane Doe".

In Swift:

```

```

In Objective-C:

```

```

## Code Examples

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
let config = SCSChatConfiguration(liveAgentPod: "YOUR_POD_NAME",
                                  orgId: "YOUR_ORG_ID",
                                  deploymentId: "YOUR_DEPLOYMENT_ID",
                                  buttonId: "YOUR_BUTTON_ID")

// Set the visitor name
config?.visitorName = "Jane Doe"

// Change from queue position to estimated wait time
config?.queueStyle = .estimatedWaitTime

// Add a required email field (with an email keyboard and no auto-correction)
let emailField = SCSPrechatTextInputObject(label: "Email")
emailField?.isRequired = true
emailField?.keyboardType = .emailAddress
emailField?.autocorrectionType = .no
config?.prechatFields.append(emailField!)
```

```
SCSChatConfiguration *config =
    [[SCSChatConfiguration alloc] initWithLiveAgentPod:@"YOUR_POD_NAME"
                                                 orgId:@"YOUR_ORG_ID"
                                          deploymentId:@"YOUR_DEPLOYMENT_ID"
                                              buttonId:@"YOUR_BUTTON_ID"];

// Set the visitor name
config.visitorName = @"Jane Doe";

// Change from queue position to estimated wait time
config.queueStyle = SCSChatConfigurationQueueStyleEstimatedWaitTime;

// Add a required email field (with an email keyboard and no auto-correction)
SCSPrechatTextInputObject* emailField = [[SCSPrechatTextInputObject alloc] 
                                         initWithLabel:@"Email"];
emailField.required = YES;
emailField.keyboardType = UIKeyboardTypeEmailAddress;
emailField.autocorrectionType = UITextAutocorrectionTypeNo;
[config.prechatFields addObject:emailField];
```

## Related Topics

- Get Chat Settings from Your Org (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm)
- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- Notifications for Chat Activity (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_notifications.htm)
- Create or Update Salesforce Records from a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_send_custom_data.htm)
- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_prechat_fields.htm)
- Handle Custom URLs in Chat (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/chat_url_event.htm)
- you can
                  customize (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/localization.htm)
