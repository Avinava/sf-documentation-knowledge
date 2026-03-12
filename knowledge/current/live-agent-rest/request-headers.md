---
title: "Request Headers"
domain: live-agent-rest
topic: request-headers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.403Z
estimatedTokens: 469
keywords: [Chat, REST, API, resource, requires]
---

# Request Headers

> Each Chat REST API resource requires one or more headers to make a request.

# Request Headers

Each Chat REST API resource requires one or more headers to make a request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Not all resources require all of the available request headers. Each resource indicates which headers are required to make a request.

The following headers are available:

| Header Syntax | Description |
| --- | --- |
| X-LIVEAGENT-API-VERSION | The Salesforce API version for the request. |
| X-LIVEAGENT-AFFINITY | The system-generated ID used to identify the Chat session on the Chat servers. This affinity token is included in the response body of the SessionId request. |
| X-LIVEAGENT-SESSION-KEY | The unique ID associated with your Chat session.NoteYour session key shouldn’t be shared or sent over insecure channels, as it allows access to potentially sensitive chat information. |
| X-LIVEAGENT-SEQUENCE | The sequence of messages you have sent to the Chat server to help the Chat server avoid processing duplicate messages. This number should be increased by one with every new request. |

## Related Topics

- response body of the SessionId request (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm)
