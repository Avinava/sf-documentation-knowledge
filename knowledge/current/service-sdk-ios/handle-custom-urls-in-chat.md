---
title: "Handle Custom URLs in Chat"
domain: service-sdk-ios
topic: handle-custom-urls-in-chat
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.918Z
estimatedTokens: 598
keywords: [Handle, URLs, Chat, agents, pass, along, perform, specific, actions, mobile, app]
---

> Have your agents pass along custom URLs to perform
            specific actions in your mobile app.

# Handle Custom URLs in Chat

Have your agents pass along custom URLs to perform specific actions in your mobile app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

When an agent sends a standard link to a user in your app, a preview tile appears that the user can tap to view in a browser. However, you can come up with your own URL scheme that displays a custom tile and performs a custom action within your app.

1.  Create a custom URL scheme and expression.

    Create a URL scheme using the [SCSAppEventList](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAppEventList.html) class. This class allows you to add URLs either for specific paths (such as action/settings) or using regular expressions (such as action\\\\/a.\*). Patterns are matched in the order that you add them to the [SCSAppEventList](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSAppEventList.html) object. Be sure to add items starting with the most specific and ending with the most generic.

    ```

    ```

2.  Add the event list to your [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object.

    ```

    ```

3.  Implement the [SCSChatInterfaceDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatInterfaceDelegate.html) delegate so that you can handle when the user taps on the URL.

    ```

    ```

4.  Add your delegate to the chat interface.

    ```

    ```

## Code Examples

```
// Create an app event list
// TO DO: Replace "servicesdk" with your own unique scheme
let eventList = SCSAppEventList(scheme: "servicesdk")

// Add a regular expression for a path
eventList.addDescription("Tap for regex action", withExpression: "action\\/a.*")

// Add a custom path for a specific path
eventList.addDescription("Tap for path action", forPath: "action/settings")
```

```
// Create a chat config object
let config = SCSChatConfiguration(liveAgentPod: "YOUR_POD_NAME",
                                  orgId: "YOUR_ORG_ID",
                                  deploymentId: "YOUR_DEPLOYMENT_ID",
                                  buttonId: "YOUR_BUTTON_ID")

// … Perform other chat configuration setup …

// Add event list to chat configuration
config.eventList = eventList
```

```
class MyChatDelegate: SCSChatInterfaceDelegate {

  func interface(_ interface: SCSChatInterface!, 
                   didReceiveAppEventWith URL: URL!) 

        // Get path
        guard let fullPath = (URL as NSURL).resourceSpecifier else { return }

        // Minimize chat window
        ServiceCloud.shared().chatUI.minimize()

        if fullPath.contains("action/settings") {
            // TO DO: Perform some action for this url
            return
        }

        if fullPath.contains("action/alert") {
            // TO DO: Perform some action for this url
            return
        }

        // NOTE: You can maximize the chat window using
        //       ServiceCloud.shared().chatUI.maximize()
  }
}
```

```
ServiceCloud.shared().chatUI.delegate = myChatDelegate
```
