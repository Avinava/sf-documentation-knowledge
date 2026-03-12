---
title: "Chat REST API Messages Response Objects Response Objects"
domain: live-agent-rest
topic: chat-rest-api-messages-response-objects-response-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.297Z
estimatedTokens: 777
keywords: [Chat, REST, API, Messages, Objects, array, represent, events, occurred, agent’s, customer]
---

# Chat REST API Messages Response Objects Response Objects

> The Messages request returns an array of objects
        that represent all the events that occurred during an agent’s chat with a chat
        customer.

# Chat REST API Messages Response Objects Response Objects

The Messages request returns an array of objects that represent all the events that occurred during an agent’s chat with a chat customer.

This request can return several subtypes with unique response bodies, depending on the events that occurred within the chat.

Here is an example of the structure of a Messages response array:

```

```

-   **[AgentDisconnect](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentDisconnect.htm)**
    Indicates that the agent has been disconnected from the chat.
-   **[AgentNotTyping](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentNotTyping.htm)**
    Indicates that the agent is not typing a message to the chat visitor.
-   **[AgentTyping](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentTyping.htm)**
    Indicates that the agent is typing a message to the chat visitor.
-   **[ChasitorSessionData](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm)**
    Returns the current chat session data for the chat visitor. This request is used to restore the session data for a chat visitor’s chat session after a ReconnectSessionrequest is sent.
-   **[ChatEnded](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnded.htm)**
    Indicates that the chat has ended.
-   **[ChatEstablished](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEstablished.htm)**
    Indicates that an agent has accepted a chat request and is engaged in a chat with a visitor.
-   **[ChatMessage](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatMessage_response.htm)**
    Indicates a new chat message has been sent from an agent to a chat visitor.
-   **[ChatRequestFail](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestFail.htm)**
    Indicates that the chat request was not successful.
-   **[ChatRequestSuccess](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm)**
    Indicates that the chat request was successful and routed to available agents.
-   **[ChatTransferred](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatTransferred.htm)**
    Indicates the chat was transferred from one agent to another.
-   **[CustomEvent](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_CustomEvent_response.htm)**
    Indicates a custom event was sent from an agent to a chat visitor during a chat.
-   **[NewVisitorBreadcrumb](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_NewVisitorBreadcrumb.htm)**
    Indicates the URL of the Web page the chat visitor is currently viewing.
-   **[QueueUpdate](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_QueueUpdate.htm)**
    Indicates the new position of the chat visitor in the chat queue when the visitor’s position in the queue changes.
-   **[SensitiveDataRules](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_SensitiveDataRules.htm)**
    Lists the sensitive data rules.

## Code Examples

```
{
    "messages":{
        "type":"array",
        "description":"The messages sent over the course of a chat.",
        "items":{
            "name":"Message",
            "type":"object",
            "properties": {
                "type": {
                    "type":"string",
                    "description":"The type of message that was received.",
                    "required":true,
                    "version":29.0
            },
            "message": {
                "type":"object",
                "description":"A placeholder object for the message that was received.
                 Can return any of the responses available for the Messages request.",
                "required":true,
                "version":29.0
            }
        }
    },
    "required":true,
    "version":29.0
},
"sequence":{
    "type":"integer",
    "description":"The sequence of the message as it was received over 
     the course of a chat.",
    "required":true,
    "version":29.0
    }
}
```

## Related Topics

- AgentDisconnect (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentDisconnect.htm)
- AgentNotTyping (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentNotTyping.htm)
- AgentTyping (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_AgentTyping.htm)
- ChasitorSessionData (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChasitorSessionData.htm)
- ChatEnded (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEnded.htm)
- ChatEstablished (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatEstablished.htm)
- ChatMessage (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatMessage_response.htm)
- ChatRequestFail (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestFail.htm)
- ChatRequestSuccess (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm)
- ChatTransferred (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatTransferred.htm)
