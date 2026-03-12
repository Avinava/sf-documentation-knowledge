---
title: "Start, End, and Clear Embedded Chat Sessions"
domain: snapins-web-dev
topic: start-end-and-clear-embedded-chat-sessions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.288Z
estimatedTokens: 1182
keywords: [Start, End, Clear, Embedded, Chat, Sessions, Three, APIs, allow, Service, code, snippet, version, 5.0, later]
---

# Start, End, and Clear Embedded Chat Sessions

> Three APIs allow you to start, end, and clear sessions for Embedded Chat. Use the
    Embedded Service code snippet version 5.0 and later. The APIs are not available for Experience
    sites with Lightning Locker enabled.

# Start, End, and Clear Embedded Chat Sessions

Three APIs allow you to start, end, and clear sessions for Embedded Chat. Use the Embedded Service code snippet version 5.0 and later. The APIs are not available for Experience sites with Lightning Locker enabled.

## embedded\_svc.liveAgentAPI.startChat(attributes);

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Embedded Chat must be a menu item on a Channel Menu deployment for Chat APIs to work with a Channel Menu. This API isn’t available for Experience sites.

The Start Chat API launches the widget and initiates a chat request. Use the attributes object to pass more information (contact or case details) to the API. For example, directly route to another buttonId or a specific agentId based on logic you determine. Any parameters must be passed in as an object. Your code might look like this:

```

```

To start a chat, the attributes object contains any of these Embedded Service parameters from the table.

| Name | Type | Description |
| --- | --- | --- |
| directToAgentRouting | object | Direct agent routing supported only in Start Chat.buttonId (string) – The button ID to request a chat (required).userId (string) – The agent ID to directly route from specified button (optional, defaults to snippet buttonId).fallback (boolean) – If set as true, follows the button’s fallbackRouting rules if the button or agent is not available (required, defaults to false). |
| prepopulatedPrechatFields | object | See: Set Certain Pre-Chat Form Fields to Automatically PopulateNoteIf Pre-Chat is disabled, this setting is not supported for Start Chat. |
| extraPrechatInfo | array | See: Pass Nonstandard Pre-Chat Details |
| extraPrechatFormDetails | array | See: Pass Nonstandard Pre-Chat Details |
| fallbackRouting | array | See: Set Routing Order |
| directToButtonRouting | function | See: Route Chats Based on Pre-Chat Responses |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

Using the API overrides the Embedded Service code snippet settings. If you don’t pass in settings to the API, you override any existing settings on the snippet.

Limitations

-   Start Chat maximizes the widget if it’s minimized. Calling the API when the end user is in an active chat request or session doesn’t initiate another chat request.
-   Start Chat attributes are not supported for Offline Support and don’t pre-populate offline support forms or submit cases.
-   To avoid opening the widget in No Agents Available dialog or Offline Support states, use the [OnSettingsCallCompleted event](https://developer.salesforce.com/docs/atlas.en-us.260.0.snapins_web_dev.meta/snapins_web_dev/snapins_web_chat_events.htm) to ensure that agents are available first.

## embedded\_svc.liveAgentAPI.endChat();

The End Chat API ends the current chat (if active) and close the chat widget. It ends active chat requests or ongoing chat sessions (as ended by the visitor) and clears embedded service data related to the ongoing chat session. No parameters are required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

End Chat is not supported for the Post-Chat state.

## embedded\_svc.liveAgentAPI.clearSession();

The Clear Sessions API ends any chat connections (if active), close the chat widget, and delete session data pertaining to all client-side chat sessions. No parameters are required.

#### See Also

-   [Create Custom Chat Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.snapins_web_dev.meta/snapins_web_dev/snapins_web_create_custom_events.htm " Create Custom Chat Events - HTML (New Window)")

-   [Bootstrap Embedded Chat](https://developer.salesforce.com/docs/atlas.en-us.260.0.snapins_web_dev.meta/snapins_web_dev/%EF%BB%BFembedded_services_web_bootstrap_chat.xml " Bootstrap Embedded Chat - HTML (New Window)")

## Code Examples

```
embedded_svc.liveAgentAPI.startChat({
	directToAgentRouting: {
	buttonId: “573xx0000000000”,
	// userId: “”,
	fallback: true
},
extraPrechatInfo: [],
extraPrechatFormDetails: []
});
```
