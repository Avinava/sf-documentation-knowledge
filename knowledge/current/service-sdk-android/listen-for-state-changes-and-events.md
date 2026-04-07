---
title: "Listen for State Changes and Events"
domain: service-sdk-android
topic: listen-for-state-changes-and-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.556Z
estimatedTokens: 1072
keywords: [Listen, State, Changes, Events, add, listeners, chat, session, respond, accordingly, instance, client, ends, display, dialog]
---

# Listen for State Changes and Events

> You can add listeners for state changes and events during a chat
      session and respond accordingly. For instance, when the client ends a session, you can display
      a dialog to the user.

# Listen for State Changes and Events

You can add listeners for state changes and events during a chat session and respond accordingly. For instance, when the client ends a session, you can display a dialog to the user.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

1.  Create a [SessionStateListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionStateListener.html) implementation to handle session state changes.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    This implementation handles state changes (onSessionStateChange) and why the session ended (onSessionEnded). For information on other session states and reasons for ending, see [ChatSessionState](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatSessionState.html) and [ChatEndReason](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEndReason.html).

2.  Create a [ChatEventListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatEventListener.html) implementation if you want to listen for additional events.

    This listener isn’t required, but it can be used to listen for events such as: when an agent joins (agentJoined), when a message is sent (processedOutgoingMessage), when a message is received (didReceiveMessage).

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

3.  Create a [SessionInfoListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionInfoListener.html) implementation if you want to get session information.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

4.  Instantiate your listener instances from your Application class.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    It’s important to have the listener at the Application scope to ensure that the session is trackable throughout the lifetime of the application rather than just within an Activity.

5.  When you configure and start a session, add the listeners that you implemented. Add the event listener ([ChatEventListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatEventListener.html)) to the chat UI configuration object. Add the session info listener ([SessionInfoListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionInfoListener.html)) and the session state listener ([SessionStateListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/SessionStateListener.html)) to the chat UI client.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```


#### See Also

-   [Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm#android_chat_basic_setup "To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.")

## Code Examples

```apex
public class MySessionStateListener implements SessionStateListener {

  @Override public void onSessionStateChange (ChatSessionState state) {
    if (state == ChatSessionState.Disconnected) {
      // TODO: Handle the disconnected state change
    }
  }

  @Override public void onSessionEnded (ChatEndReason endReason) {
    if (endReason == ChatEndReason.EndedByAgent) {
      // TODO: Show a UI telling the user that the agent ended the session
    }
  }
}
```

```
class MySessionStateListener: SessionStateListener {

  override fun onSessionStateChange(state: ChatSessionState?) {
    if (state == ChatSessionState.Disconnected) {
      // TODO: Handle the disconnected state change
    }
  }

  override fun onSessionEnded(endReason: ChatEndReason?) {
    if (endReason == ChatEndReason.EndedByAgent) {
      // TODO: Show a UI telling the user that the agent ended the session
    }
  }
}
```

```apex
public class MyEventListener implements ChatEventListener {
    public void agentJoined (AgentInformation agentInformation) {
        // Handle agent joined
    }

    public void processedOutgoingMessage (String message) {
        // Handle outgoing message processed
    }

    public void didSelectMenuItem (ChatWindowMenu.MenuItem menuItem) {
        // Handle chatbot menu selected
    }

    public void didSelectButtonItem (ChatWindowButtonMenu.Button buttonItem) {
        // Handle chatbot button selected
    }

    public void didSelectFooterMenuItem (ChatFooterMenu.MenuItem footerMenuItem) {
        // Handle chatboot footer menu selected
    }

    public void didReceiveMessage (ChatMessage chatMessage) {
        // Handle received message
    }

    public void transferToButtonInitiated () {
        // Handle transfer to agent
    }

    public void agentIsTyping (boolean isUserTyping) {
        // Handle typing update
    }
}
```

```
class MyEventListener : ChatEventListener {
    override fun agentJoined(agentInformation: AgentInformation) {
        // Handle agent joined
    }

    override fun processedOutgoingMessage(message: String) {
        // Handle outgoing message processed
    }

    override fun didSelectMenuItem(menuItem: ChatWindowMenu.MenuItem) {
        // Handle chatbot menu selected
    }

    override fun didSelectButtonItem(buttonItem: ChatWindowButtonMenu.Button) {
        // Handle chatbot button selected
    }

    override fun didSelectFooterMenuItem(footerMenuItem: ChatFooterMenu.MenuItem) {
        // Handle chatboot footer menu selected
    }

    override fun didReceiveMessage(chatMessage: ChatMessage) {
        // Handle received message
    }

    override fun transferToButtonInitiated() {
        // Handle transfer to agent
    }

    override fun agentIsTyping(isUserTyping: Boolean) {
        // Handle typing update
    }
}
```

```apex
public class MySessionInfoListener implements SessionInfoListener {

    public void onSessionInfoReceived (ChatSessionInfo chatSessionInfo) {
        // TO DO: Do something with the session ID
        String sessionId = chatSessionInfo.getSessionId();
}
```

## Related Topics

- Quick Setup: Chat in the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)
