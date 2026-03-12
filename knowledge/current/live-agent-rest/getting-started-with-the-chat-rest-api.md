---
title: "Getting Started with the Chat REST API"
domain: live-agent-rest
topic: getting-started-with-the-chat-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.376Z
estimatedTokens: 1296
keywords: [Getting, Started, Chat, REST, API, how, start, confirm, end, session, Retrieve, Endpoint]
---

# Getting Started with the Chat REST API

> Learn how to start, confirm, and end a Chat session with the Chat REST API.

# Getting Started with the Chat REST API

Learn how to start, confirm, and end a Chat session with the Chat REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Retrieve Your Chat API Endpoint

Your Chat API endpoint is a unique URL that lets you access data from your organization’s Chat sessions. To find your organization’s Chat API endpoint:

1.  From Setup, in the Quick Find box, enter Chat Settings, and then select **Chat Settings**.
2.  Retrieve the hostname from the Chat API Endpoint. The hostname is the URL without “/chat/rest/” at the end, for example, “https://yourChatApiEndpoint.com”. Substitute hostname in the Chat API endpoints with this URL.

![The hostname that you retrieve from the Chat Settings page in Settings.](/docs/resources/img/en-us/260.0?doc_id=images%2Flive_agent_rest_get_hostname.png&folder=live_agent_rest)

## Start a Chat Session

To start a Chat session, send a [SessionId](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm "Establishes a new Chat session. The SessionId request is required as the first request to create every Chat session.") request. Replace hostname with the URL that you retrieved from Chat API Endpoint.

```

```

Use these [Request Headers](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_required_headers.htm "Each Chat REST API resource requires one or more headers to make a request.").

-   X-LIVEAGENT-AFFINITY
-   X-LIVEAGENT-API-VERSION

## Confirm the Chat Session Started

A [ChatRequestSuccess](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm "Indicates that the chat request was successful and routed to available agents.") response tells you that the Chat session started.

```

```

Then wait for a [ChatEstablished](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEstablished.htm "Indicates that an agent has accepted a chat request and is engaged in a chat with a visitor.") response. That response tells you that an agent accepted the chat session.

```

```

Now you’re ready to send, for example, [Messages](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm "Returns all messages that were sent between agents and chat visitors during a chat session.") requests. Before you send further requests, wait until you receive the [ChatRequestSuccess](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm "Indicates that the chat request was successful and routed to available agents.") and [ChatEstablished](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEstablished.htm "Indicates that an agent has accepted a chat request and is engaged in a chat with a visitor.") responses, otherwise the API throws a Null Pointer exception, and you receive a 500 error.

## End the Chat Session

The Chat session ends when you send a [ChatEnd](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnd.htm "Indicates that a chat visitor has ended the chat.") request or send a DELETE [SessionId](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm "Establishes a new Chat session. The SessionId request is required as the first request to create every Chat session.") request. In both request types, X-LIVEAGENT-SESSION-KEY is the unique ID of the Chat session that you want to end.

Here’s the [ChatEnd](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnd.htm "Indicates that a chat visitor has ended the chat.") request.

```

```

Use these [Request Headers](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_required_headers.htm "Each Chat REST API resource requires one or more headers to make a request.").

-   X-LIVEAGENT-AFFINITY
-   X-LIVEAGENT-API-VERSION
-   X-LIVEAGENT-SESSION-KEY
-   X-LIVEAGENT-SEQUENCE

Here’s the [SessionId](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm "Establishes a new Chat session. The SessionId request is required as the first request to create every Chat session.") request.

```

```

Use these [Request Headers](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_required_headers.htm "Each Chat REST API resource requires one or more headers to make a request.").

-   X-LIVEAGENT-AFFINITY
-   X-LIVEAGENT-API-VERSION

## Code Examples

```
GET https://hostname/chat/rest/System/SessionId/
```

```
{
        queuePosition: 1,
        estimatedWaitTime: 120,
        geoLocation: {
                countryCode:"US",
                countryName: "United States of America",
                region: "CA",
                city: "San Francisco",
                organization: Salesforce,
                latitude: 37.793880,
                longitude: -122.395114
        },
        url: "http://yoursite",
        oref: "http://www.google.com?q=yoursite",
        postChatUrl: "http://yoursite/postchat",
        customDetails: [
                {
                        label: "E-mail Address",
                        value: "jon@example.com",
                        transcriptFields: [
                                 "c__EmailAddress"
                         ],
                        displayToAgent: true
                }                        

        ],
        visitorId: "acd47048-bd80-476e-aa33-741bd5cb05d3"
}
```

```
{
        name: "Andy L.",
        userId: "f1dda237-57f8-4816-b8e8-59775f1e44c8",
        sneakPeekEnabled: true
}
```

```
https://hostname/chat/rest/Chasitor/ChatEnd
```

```
DELETE https://hostname/chat/rest/System/SessionId/X-LIVEAGENT-SESSION-KEY
```

## Related Topics

- SessionId (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm)
- Request Headers (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_required_headers.htm)
- ChatRequestSuccess (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm)
- ChatEstablished (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEstablished.htm)
- Messages (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm)
- ChatEnd (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnd.htm)
