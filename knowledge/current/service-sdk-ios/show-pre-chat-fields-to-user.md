---
title: "Show Pre-Chat Fields to User"
domain: service-sdk-ios
topic: show-pre-chat-fields-to-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:33.022Z
estimatedTokens: 2638
keywords: [Show, Pre-Chat, User, chat, session, begins, enter, sent, agent, start]
---

# Show Pre-Chat Fields to User

> Before a chat session begins, you can request that the
            user enter pre-chat fields that are sent to the agent at the start of the
        session.

# Show Pre-Chat Fields to User

Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To create pre-chat fields, add [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) instances to the [prechatFields](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html#/c:objc\(cs\)SCSChatConfiguration\(py\)prechatFields) property on the [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object.

1.  Create an [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    See [Configure a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm#configure_lac_session "Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.") on how to configure a chat session.

2.  Create [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) objects for the pre-chat fields you want to specify in your app.

    There are several types of pre-chat fields:

    -   [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) does not require user input and can be used to send custom data directly to the agent.
    -   [SCSPrechatTextInputObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatTextInputObject.html) (a subclass of SCSPrechatObject) takes user input from a text field.
    -   [SCSPrechatPickerObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatPickerObject.html) (a subclass of SCSPrechatObject) provides the user with a dropdown list of options.

    Each type has different properties you can configure.

    1.  Create objects that don't require user input using [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html).

        In Swift:

        ```

        ```

        In Objective-C:

        ```

        ```

        When using [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) to send data without user input, specify both the label and the value. The [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) base class contains the following properties:

        -   label—name of the pre-chat field shown to agent.
        -   value—value of the pre-chat field; only use this property if you don't intend for the user to fill in this field.
        -   displayLabel—optional display name of the pre-chat field shown to the user if different than the label.
        -   transcriptFields—optional array of field identifiers on the LiveAgentChatTranscript object in Salesforce.
        -   displayToAgent—indicates whether this pre-chat detail is shown to an agent accepting the chat session; defaults to true.

    2.  Create text input objects using [SCSPrechatTextInputObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatTextInputObject.html).

        In Swift:

        ```

        ```

        In Objective-C:

        ```

        ```

        When using a [SCSPrechatTextInputObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatTextInputObject.html), you can control several other properties:

        -   required—indicates whether the field is required.
        -   keyboardType—provides access to other standard keyboards (such as UIKeyboardTypeEmailAddress).
        -   autocapitalizationType—controls how text capitalization works.
        -   autocorrectionType—controls auto-correction behavior.
        -   maxLength—specifies the maximum length of the field
        -   displayLabel—optional display name of the pre-chat field shown to the user if different than the label.
        -   transcriptFields—optional array of field identifiers on the LiveAgentChatTranscript object in Salesforce.
        -   displayToAgent—indicates whether this pre-chat detail is shown to an agent accepting the chat session; defaults to true.

    3.  Create dropdown lists using [SCSPrechatPickerObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatPickerObject.html).

        In Swift:

        ```

        ```

        In Objective-C:

        ```

        ```

        When using a [SCSPrechatPickerObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatPickerObject.html), you can access these properties:

        -   required—indicates whether the field is required.
        -   options—specifies items in the dropdown list. This property is an array of [SCSPrechatPickerOption](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatPickerOption.html) objects.
        -   displayLabel—optional display name of the pre-chat field shown to the user if different than the label.
        -   transcriptFields—optional array of field identifiers on the LiveAgentChatTranscript object in Salesforce.
        -   displayToAgent—indicates whether this pre-chat detail is shown to an agent accepting the chat session; defaults to true.

3.  (Optional) Create [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) objects to associate pre-chat fields with fields from a record in your org.

    Pre-chat fields are always sent to the agent at the start of the session. But if you want to fill in fields of a particular record, instantiate an [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) for each Salesforce object (for example, Case or Contact) and instantiate an [SCSPrechatEntityField](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntityField.html) for each field association within that Salesforce object (for example, Subject or LastName). To learn more, see [Create or Update Salesforce Records from a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_send_custom_data.htm "When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.").

4.  Update the config object's [prechatFields](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html#/c:objc\(cs\)SCSChatConfiguration\(py\)prechatFields) property with an array of your pre-chat objects.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

5.  Show the pre-chat form and start a chat session by calling [showChat(with:showPrechat:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showChatWithConfiguration:showPrechat:) and specify true for whether to show the pre-chat form.
    1.  If you want to show the pre-chat form and then send those results to the agent when starting a session, call [showChat(with:showPrechat:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showChatWithConfiguration:showPrechat:).

        In Swift:

        ```

        ```

        In Objective-C:

        ```

        ```

    2.  If you want to programmatically change the pre-chat data before passing it to the org or agent, call the [showPrechat(withFields:modal:completion:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showPrechatWithFields:modal:completion:) method first. From within the completion block of this method, update the config object's [prechatFields](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html#/c:objc\(cs\)SCSChatConfiguration\(py\)prechatFields) property and then call [showChat(with:showPrechat:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showChatWithConfiguration:showPrechat:) and specify false for showPrechat.

        For example, the following Swift code asks the user for their first and last name. After the user completes the pre-chat form, the code creates a new field by concatenating the two name fields. When we start the chat session, only this new field is sent to the agent.

        ```

        ```


## Example

This code sample builds a set of pre-chat fields that are shown to the user.

```

```

With this code, the user sees the following pre-chat UI in their mobile app.

![Pre-chat UI on app](/docs/resources/img/en-us/noversion?doc_id=images%2Fios-chat-prechat-app.png&folder=service_sdk_ios)

And the agent sees the following UI from the console.

![Pre-chat UI on console](/docs/resources/img/en-us/noversion?doc_id=images%2Fios-chat-prechat-console.png&folder=service_sdk_ios)

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
let customData = SCSPrechatObject(label: "CustomEmailField", 
                                    value: "lauren@example.com")
```

```
SCSPrechatObject* customData = [[SCSPrechatObject alloc] 
                                    initWithLabel:@"CustomEmailField"
                                    value:@"lauren@example.com"];
```

```
// Create a text field
let myPrechatField = SCSPrechatTextInputObject(label: "Full Name")
```

## Related Topics

- Configure a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm)
- Create or Update Salesforce Records from a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_send_custom_data.htm)
