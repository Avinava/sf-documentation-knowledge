---
title: "Listen for State Changes and Events"
domain: service-sdk-ios
topic: listen-for-state-changes-and-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:28.126Z
estimatedTokens: 1197
keywords: [Listen, State, Changes, Events, Implement, SCSChatSessionDelegate, notified, made, chat, session, delegate, error, conditions, present, alerts, user, applicable, Listening, Handling, Termination]
---

> Implement SCSChatSessionDelegate to be notified
    about state changes made before, during, and after a chat session. This delegate also allows you
    to listen for error conditions so you can present alerts to the user when
    applicable.

# Listen for State Changes and Events

Implement SCSChatSessionDelegate to be notified about state changes made before, during, and after a chat session. This delegate also allows you to listen for error conditions so you can present alerts to the user when applicable.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Listening to State Changes

A chat session can be in one of the following states:

Inactive

No active session.

Connecting

A connection with chat servers is being established.

Queued

A connection has been established, and is now in the queue for next available agent.

Connected

Connected with an agent .

Ending

Session is cleaning up the connection at the end of a session.

These states are defined in [SCSChatSessionState](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Enums/SCSChatSessionState.html).

Throughout a session, your application might want to know the current state. You can monitor state changes by implementing [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html). Use the [add(delegate:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html#/c:objc\(cs\)SCSChat\(im\)addDelegate:) method on [SCSChat](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChat.html) to register your delegate. Use the [session(didTransitionFrom:to:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didTransitionFromState:toState:) method to listen for state changes.

## Handling Session Termination and Error Conditions

The SDK doesn't present UI alerts for session termination or error conditions so you'll need to listen for these events and decide what to show your users. There are two [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html) methods for this purpose:

1.  To track session termination, use the [session(didEnd:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didEnd:) method. Inspect the reason (SCSChatSessionEndEvent.type) to determine why the session stopped. Use the [SCSChatSession](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSession.html) object to get the session ID and other session information.
2.  You can track errors with the [session(didError:fatal:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didError:fatal:) method. Compare the error code to [SCSChatErrorCode](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Enums/SCSChatErrorCode.html) to determine what kind of error occurred.

## Example

This sample code does the following:

-   Implements the [SCSChatSessionDelegate](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html) protocol.
-   Implements the [session(didTransitionFrom:to:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didTransitionFromState:toState:) method to listen for state changes.
-   Implements the [session(didEnd:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didEnd:) method and logs a few possible end reasons.
-   Implements the [session(didError:fatal:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Protocols/SCSChatSessionDelegate.html#/c:objc\(pl\)SCSChatSessionDelegate\(im\)session:didError:fatal:) method to listen for errors.

```

```

## Code Examples

```
import UIKit
import ServiceCore
import ServiceChat

class MyChatSessionDelegateImplementation: NSObject, SCSChatSessionDelegate {
  
  // TO DO: Register this delegate using
  //        ServiceCloud.shared().chatCore.add(delegate: myDelegate)

  /**
   Delegate method to handle state change.
   */
  func session(_ session: SCSChatSession!,
               didTransitionFrom previous: SCSChatSessionState,
               to current: SCSChatSessionState) {
  
    NSLog("Chat state changed...")
    
    switch current {
      case .connecting:
        NSLog("Chat now connecting...")
      case .connected:
        NSLog("Chat connected...")
      // TO DO: Handle other reasons
      default:
        break
      }
  }
  
  /**
   Delegate method for session stop event.
   */
  func session(_ session: SCSChatSession!, didEnd endEvent: SCSChatSessionEndEvent!) {

    var reason = "Unknown"
    
    switch endEvent.reason {
      case .agent:
        reason = "The agent has ended the session."
      case .noAgentsAvailable:
        reason = "No agents were available."
      default:
        // TO DO: Handle other reasons
        break
    }
    
    NSLog("
Chat End Session. Reason: \(reason)")

    // You can access the session ID from the SCSChatSession object
    let sessionId = session.sessionId
  }
  
  /**
   Delegate method for error conditions.
   */
  func session(_ session: SCSChatSession!, didError error: Error!, fatal: Bool) {
    // TO DO: Handle error condition
    NSLog("Chat error: \(error.localizedDescription)")
  }
}
```
