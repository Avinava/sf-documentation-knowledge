---
title: "Embedded Chat Custom Events"
domain: snapins-web-dev
topic: embedded-chat-custom-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.334Z
estimatedTokens: 674
keywords: [Embedded, Chat, Custom, Events, There, three, APIs, let, Service, code, snippet, version, 5.0, later, _svc.liveagentAPI.sendCustomEvent]
---

# Embedded Chat Custom Events

> There are three APIs that let you create custom chat events with Embedded Chat.
  Available using Embedded Service code snippet version 5.0 and later.

# Embedded Chat Custom Events

There are three APIs that let you create custom chat events with Embedded Chat. Available using Embedded Service code snippet version 5.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

## embedded\_svc.liveagentAPI.sendCustomEvent()

Sends a custom event to the agent console of the agent currently chatting with a customer.

| Name | Type | Description |
| --- | --- | --- |
| type | string | The name of the custom event to send to the agent console. |
| data | string | Extra data you want to send to the agent console along with the custom event. |

## embedded\_svc.liveagentAPI.getCustomEvents()

Retrieves a list of custom events from both the agent and chat visitor that are received during this chat session.

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. It passes a JSON formatted string of the events. |

## embedded\_svc.liveagentAPI.addCustomEventListener()

Registers a function to call when a custom event is received in the chat window.

| Name | Type | Description |
| --- | --- | --- |
| type | string | The type of custom event you want to listen for. |
| callback | function | .JavaScript method called upon completion of the method. It passes an object that has two attributes: type and data. |

#### See Also

-   [Create Custom Chat Events](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_create_custom_events.htm "Custom chat events let you have your own communication channel with your customers using the agent console to send and receive your own chat events. Create custom events using your own JavaScript and CSS files.")

-   [Load Files for Custom Chat Events](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm "Load your own JavaScript and CSS files into Embedded Chat to handle and style custom chat events. Your scripts and styles are loaded only after the agent accepts the chat request.")

## Related Topics

- Create Custom Chat Events (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_create_custom_events.htm)
- Load Files for Custom Chat Events (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm)
