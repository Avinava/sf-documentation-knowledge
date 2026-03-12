---
title: "Chat REST API Resources"
domain: live-agent-rest
topic: chat-rest-api-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.240Z
estimatedTokens: 527
keywords: [Chat, REST, API, Resources, perform, POST, send, HTTP, appropriate]
---

# Chat REST API Resources

> To perform a POST or GET request, create and send an HTTP
request with the appropriate parameters or request body.

# Chat REST API Resources

To perform a POST or GET request, create and send an HTTP request with the appropriate parameters or request body.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The Chat REST API requests let you begin new chat sessions between agents and chat visitors and monitor the chat activity that occurs.

-   **[Create a Chat Session](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_create_agent_session.htm)**
    To create a new Chat session, you must call the SessionId request.
-   **[Create a Chat Visitor Session](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_create_visitor_session.htm)**
    To create or reestablish a chat visitor session using the Chat REST API, you must make certain requests.
-   **[Monitor Chat Activity](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_monitor_chat_activity_requests.htm)**
    Chat requests indicate when certain activities occurred during a chat session.
-   **[Customize the Chat Visitors’ Experience](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_implement_chat_visitor_experience_requests.htm)**
    With the Chat visitor REST API resources, you can establish your chat visitors’ experience with Chat in custom mobile applications.

## Related Topics

- Create a Chat Session (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_create_agent_session.htm)
- Create a Chat Visitor Session (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_create_visitor_session.htm)
- Monitor Chat Activity (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_monitor_chat_activity_requests.htm)
- Customize the Chat Visitors’ Experience (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_implement_chat_visitor_experience_requests.htm)
