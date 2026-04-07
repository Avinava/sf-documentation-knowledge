---
title: "Get Started with Chat"
domain: service-sdk-ios
topic: get-started-with-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.875Z
estimatedTokens: 1333
keywords: [Started, Chat, rolling, quickly, sessions, customers, agents]
---

# Get Started with Chat

> Get rolling quickly with chat sessions between your customers and your
        agents.

# Get Started with Chat

Get rolling quickly with chat sessions between your customers and your agents.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before doing this tutorial, be sure that you’ve set up Service Cloud for Chat. See [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.") for more information.

This tutorial shows you how to get Chat into your iOS app.

1.  Create an Xcode project. For this example, let’s make a Single View Application. Name it HelloChat.

    ![Single view application](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-knowledge-ios-singleviewcontroller.png&folder=service_sdk_ios)

    ![Hello chat setup](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-lac-ios-hellolac.png&folder=service_sdk_ios)

2.  Install the SDK as described in [Install the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").
3.  Go to your storyboard and place a button somewhere on the view. Name it Chat.

    ![Place button](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-knowledge-ios-button.png&folder=service_sdk_ios)

4.  Add a Touch Up Inside action to your UIViewController implementation. Name it launchChat.

    ![Button action](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-lac-ios-action.png&folder=service_sdk_ios)

    ![showSOS action](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-lac-ios-showchat.png&folder=service_sdk_ios)

5.  Import the SDK. Wherever you intend to use the Chat SDK, be sure to import the ServiceCore framework and the ServiceChat framework.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

6.  Launch a chat session from within the launchChat method.

    From the button action implementation, launch chat using the [showChat(with:showPrechat:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)showChatWithConfiguration:showPrechat:) method on [SCSChatInterface](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html).

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

    Fill in the placeholder text for the Chat API endpoint, the org ID, the deployment ID, and the button ID.

    Deployment ID

    The unique ID of your Chat deployment. To get this value, from Setup, select **Chat** | **Deployments**. The script at the bottom of the page contains a call to the liveagent.init function with the **pod**, the **deploymentId**, and **orgId** as arguments. Copy the **deploymentId** value.

    ![Deployment ID](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_deployment_id.png&folder=service_sdk_ios)

    For instance, if the deployment code contains the following information:

    ```

    ```

    The deployment ID value is:

    ```

    ```

    Be sure not to use the org ID value (which is also in this deployment code) for the deployment ID.

    Button ID

    The unique button ID for your chat configuration. To get this value, from Setup, search for **Chat Buttons** and select **Chat Buttons & Invitations**. Copy the id for the button from the JavaScript snippet.

    ![Button ID](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_button_id.png&folder=service_sdk_ios)

    For instance, if your chat button code contains the following information:

    ```

    ```

    The button ID value is:

    ```

    ```

    Be sure to omit the liveagent\_button\_online\_ text from the ID when using it in the SDK.

7.  Launch **Service Cloud Console**. From the **Omni-Channel** widget, ensure that an agent is online.

    ![Omni-channel online](/docs/resources/img/en-us/noversion?doc_id=images%2Fquickstart-lac-ios-omnichannel.png&folder=service_sdk_ios)


Now you can build and run the app. When you tap the **Chat** button, the app requests a chat session, which an agent can accept from the **Service Cloud Console**. From the console, an agent can real-time chat with a customer.

![Chat publisher](/docs/resources/img/en-us/noversion?doc_id=images%2Flac-chat-publisher-ios.png&folder=service_sdk_ios)

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
@IBAction func launchChat(sender: AnyObject) {

  // Create configuration object
  if let config = SCSChatConfiguration(liveAgentPod: "YOUR_POD_NAME",
                                       orgId: "YOUR_ORG_ID",
                                       deploymentId: "YOUR_DEPLOYMENT_ID",
                                       buttonId: "YOUR_BUTTON_ID") {

    // Start the session
    ServiceCloud.shared().chatUI.showChat(with: config)
  }
}
```

```
- (IBAction)launchChat:(id)sender {
                        
  SCSChatConfiguration *config =
    [[SCSChatConfiguration alloc] initWithLiveAgentPod:@"YOUR_POD_NAME"
                                                 orgId:@"YOUR_ORG_ID"
                                          deploymentId:@"YOUR_DEPLOYMENT_ID"
                                              buttonId:@"YOUR_BUTTON_ID"];

  // Start the session
  [[SCServiceCloud sharedInstance].chatUI showChatWithConfiguration:config];
}
```

```
<script type='text/javascript' 
        src='https://d.gla3.gus.salesforce.com/content/g/js/44.0/deployment.js'></script>
<script type='text/javascript'>
liveagent.init('https://d.gla5.gus.salesforce.com/chat', '573B00000005KXz', '00DB00000003Rxz');
</script>
```

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- Install the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
