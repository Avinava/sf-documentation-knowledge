---
title: "Get Chat Event Notifications"
domain: snapins-web-dev
topic: get-chat-event-notifications
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.317Z
estimatedTokens: 1422
keywords: [Chat, Event, Notifications, certain, events, triggered, Subscribe, particular, calling, embedded_svc.addEventHandler, Embedded, code, snippet]
---

# Get Chat Event Notifications

> Set up notifications when certain chat events are triggered. Subscribe to these
        particular events by calling to embedded_svc.addEventHandler in your Embedded Chat code snippet.

# Get Chat Event Notifications

Set up notifications when certain chat events are triggered. Subscribe to these particular events by calling to embedded\_svc.addEventHandler in your Embedded Chat code snippet.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

Calls to embedded\_svc.addEventHandler must take place before calls to embedded\_svc.init. If your code snippet contains calls to embedded\_svc.init, make sure that you enter your calls in the correct order.

The following events pass a JSON object parameter to the provided callback which contains one attribute:

```

```

| eventName | Scenario |
| --- | --- |
| onAgentJoinedConference | Fired when an agent joins the chat conference. |
| onAgentLeftConference | Fired when an agent leaves the chat conference. |
| onAgentMessage | Fired when the agent sends a message. |
| onAgentRichMessage | Fired when the bot sends a rich message. The bot sends a mixture of rich messages and plain messages. |
| onChasitorMessage | Fired when the chat visitor sends a message. |
| onChatConferenceEnded | Fired when the chat conference has ended. |
| onChatConferenceInitiated | Fired when the chat conference is initiated. |
| onChatEndedByAgent | Fired when the agent ends the chat. |
| onChatEndedByChasitor | Fired when the chat visitor ends the chat. |
| onChatEndedByChatbot | Fired when the bot ends a chat. |
| onChatReconnectSuccessful | Fired when the chat reconnects successfully. |
| onChatTransferInitiated | Fired when any transfer request occurs. |
| onChatRequestSuccess | Fired when the chat request is successful. |
| onChatTransferInitiated | Fired when any transfer request occurs. |
| onChatTransferSuccessful | Fired when a chat transfer is successful. |
| onConnectionError | Fired when the connection to the agent is lost. |
| onIdleTimeoutClear | Fired when the visitor responds after an idle timeout warning is visible, which will clear the warning. |
| onIdleTimeoutOccurred | Fired when a chat times out due to the visitor being idle. The chat ends and the visitor sees a message that the chat has ended. |
| onIdleTimeoutWarningStart | Fired when the visitor has not responded to the agent during the time set in the Customer Time-out Warning (seconds) field in Chat Buttons & Invitations Setup. |
| onQueueUpdate | Fired in the following scenarios:The visitor has requested a chat and is waiting for an agent.After requesting a chat, the visitor navigates to another page, but is still waiting for an agent.The visitor had previously lost connection (see reconnectingState) and has regained it.The visitor has advanced in the queue, but is still waiting for an agent to accept the chat request.A bot or agent has requested a chat transfer and is waiting for another agent to accept.During a chat transfer, the visitor navigates to another page, but is still waiting to be transferred.The visitor has advanced in the queue, but is still waiting for an agent to accept the chat transfer.NoteThis event fires only if queue position is enabled for your Embedded Service deployment and your Embedded Service code snippet is version 5.0 or later. |

The following general application-level events to the client are not specific to a Chat session, but can be used during Chat. These events do not broadcast any data.

| eventName | Scenario |
| --- | --- |
| afterMaximize | Fired when the Embedded Service Chat application is maximized by the end user clicking the minimized state. |
| afterDestroy | Fired when Embedded Service Chat has ended and the application is closed. |
| afterMinimize | Fired when the Embedded Service Chat application is minimized by the end user clicking the minimize button in the chat window header. |
| onClickSubmitButton | Click handler for the "Submit" button in the offline support UI component. |
| onHelpButtonClick | Callback to fire when the help button is clicked. |
| onInvitationResourceLoaded | Fired after the automated chat invitation static resource is loaded. |
| onInviteAccepted | Accepts the automated chat invitation. |
| onInviteRejected | Rejects the automated chat invitation. |

The following general application-level events to the client are not specific to a Chat session, but can be used during Chat. These events do broadcast data.

| eventName | Scenario |
| --- | --- |
| onAvailability | Fires in a loop every 60 seconds and indicates if the agent is online. The data parameter includes:isAgentAvailableid |
| onSettingsCallCompleted | Fired after the getSettings call is completed. The call happens on page load and retrieves settings for the chat button requested. Includes the initial agent availability status of the button on the snippet. The data parameter includes:isAgentAvailable |

## Code Example

The following code is an example of how these events can be used in your Embedded Service Chat code snippet.

```

```

## Code Examples

```
{   liveAgentSessionKey: chasitorData.chatKey   }
```

```
embedded_svc.addEventHandler("onHelpButtonClick", function(data) {
    console.log("onHelpButtonClick event was fired.");
});
 
embedded_svc.addEventHandler("onChatRequestSuccess", function(data) {
    console.log("onChatRequestSuccess event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatEstablished", function(data) {
    console.log("onChatEstablished event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChasitorMessage", function(data) {
    console.log("onChasitorMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onAgentMessage", function(data) {
    console.log("onAgentMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatConferenceInitiated", function(data) {
    console.log("onChatConferenceInitiated event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onAgentJoinedConference", function(data) {
    console.log("onAgentJoinedConference event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onAgentLeftConference", function(data) {
    console.log("onAgentLeftConference event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatConferenceEnded", function(data) {
    console.log("onChatConferenceEnded event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatTransferSuccessful", function(data) {
    console.log("onChatTransferSuccessful event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatEndedByChasitor", function(data) {
    console.log("onChatEndedByChasitor event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onChatEndedByAgent", function(data) {
    console.log("onChatEndedByAgent event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onQueueUpdate", function(data) {
    console.log("onQueueUpdate event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + "and queuePosition was " + data.queuePosition);
});
 
embedded_svc.addEventHandler("onIdleTimeoutOccurred", function(data) {
    console.log("onIdleTimeoutOccurred event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onConnectionError", function(data) {
    console.log("onConnectionError event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onClickSubmitButton", function(data) {
    console.log("onClickSubmitButton event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
});
 
embedded_svc.addEventHandler("onInviteAccepted", function() {
    console.log("onInviteAccepted event was fired.");
});
 
embedded_svc.addEventHandler("onInviteRejected", function() {
    console.log("onInviteRejected event was fired.");
});
 
embedded_svc.addEventHandler("onInvitationResourceLoaded", function() {
    console.log("onInvitationResourceLoaded event was fired.");
});

embedded_svc.addEventHandler("onSettingsCallCompleted", function(data) {
    console.log("onSettingsCallCompleted event was fired. Agent availability status is " + data.isAgentAvailable ? "online": "offline");
});
 
embedded_svc.addEventHandler("onAvailability", function(data) {
    console.log("onAvailability event was fired. Agent availability status is " + data.isAgentAvailable ? "online": "offline");
});
```
