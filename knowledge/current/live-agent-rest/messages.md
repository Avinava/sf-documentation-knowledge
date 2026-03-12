---
title: "Messages"
domain: live-agent-rest
topic: messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.294Z
estimatedTokens: 626
keywords: [Messages, were, sent, agents, chat, visitors, session, Troubleshooting]
---

# Messages

> Returns all messages that were sent between agents and
chat visitors during a chat session.

# Messages

Returns all messages that were sent between agents and chat visitors during a chat session.

For a complete list of responses for the Messages resource, see [Chat REST API Messages Response Objects](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm "The Messages request returns an array of objects that represent all the events that occurred during an agent’s chat with a chat customer.").

## Syntax

URI

https://hostname/chat/rest/System/Messages

Available since release

This resource is available in API versions 29.0 and later.

Formats

JSON

HTTP methods

GET

Request headers

X-LIVEAGENT-API-VERSION

X-LIVEAGENT-AFFINITY

X-LIVEAGENT-SESSION-KEY

Request parameters

None

Query parameters

ack—The ack query parameter is a sequencing mechanism that allows you to poll for messages on the Live Agent server. The first time you make the Messages request, the ack parameter is set to –1. To guarantee that you receive the messages from the server in the correct order, update the ack value in the next request with the sequence value from the preceding response. You receive a sequence value only if the response code is 200, which is the response if there are new messages. If the response code is 204, there are no messages and the client doesn't provide a sequence value. In this case, run the Messages request with the same ack value as the previous request.

Request body

None

Response body

[Messages response](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm#Messages)

## Troubleshooting

If your request doesn’t receive an HTTP response and fails, retry the request. If you don’t retry the request before the chat session times out, the session expires. The timeout value that determines how long you have to attempt to send requests before the server expires the session is configured in **Chat Deployment** in **Salesforce Setup**.

-   **[Chat REST API Messages Response Objects Response Objects](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm)**
    The Messages request returns an array of objects that represent all the events that occurred during an agent’s chat with a chat customer.

#### See Also

-   [Your Message Long Polling Loop](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm "Message long polling notifies you of events that occur on the Chat server for your Chat session.")

## Related Topics

- Chat REST API Messages Response
     Objects (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm)
- Messages response (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm)
- Chat REST API Messages Response Objects Response Objects (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Messages_responses_overview.htm)
- Your Message Long Polling Loop (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm)
