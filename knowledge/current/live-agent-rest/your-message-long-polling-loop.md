---
title: "Your Message Long Polling Loop"
domain: live-agent-rest
topic: your-message-long-polling-loop
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.380Z
estimatedTokens: 735
keywords: [Message, Long, Polling, Loop, notifies, events, occur, Chat, server, session]
---

# Your Message Long Polling Loop

> Message long polling notifies you of events that occur on the Chat server for your Chat
    session.

# Your Message Long Polling Loop

Message long polling notifies you of events that occur on the Chat server for your Chat session.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

When you start a request, all pending messages get immediately delivered to your session. If there are no pending messages, the connection to the server will remain open. The Messages poll will return one payload of messages from the server when they become available, and you’ll have to open a new Messages connection to receive future data.

You’ll receive a 200 (“OK”) response code and a resource that contains an array of the remaining messages. If no messages were received, you will receive a 204 (“No Content”) response code.

When you receive a 200 (“OK”) or 204 (“No Content”) response code, immediately perform another Messages request to continue to retrieve messages that are registered on the Chat server.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=live_agent_rest)

#### Warning

If you don’t make another Messages request to continue the messaging loop, your session will end after a system timeout on the Chat server.

If you don’t receive a response within the number of seconds indicated by the clientPollTimeout property in your SessionId request, your network connection to the server is likely experiencing an error, so you should terminate the request.

To initiate a long polling loop, perform a Messages request.

#### See Also

-   [Messages](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm "Returns all messages that were sent between agents and chat visitors during a chat session.")

-   [SessionId](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm "Establishes a new Chat session. The SessionId request is required as the first request to create every Chat session.")

-   [Status Codes and Error Responses](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm "Each request returns a status code or error response to indicate whether the request was successful.")

## Related Topics

- Messages (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages.htm)
- SessionId (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SessionId.htm)
- Status Codes and Error Responses (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm)
