---
title: "SessionId"
domain: live-agent-rest
topic: sessionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.324Z
estimatedTokens: 256
keywords: [SessionId, Establishes, new, Chat, session, every]
---

# SessionId

> Establishes a new Chat session. The SessionId
    request is required as the first request to create every Chat session.

# SessionId

Establishes a new Chat session. The SessionId request is required as the first request to create every Chat session.

## Syntax

URI

https://hostname/chat/rest/System/SessionId/

https://hostname/chat/rest/System/SessionId/X-LIVEAGENT-SESSION-KEY

Available since release

This resource is available in API versions 29.0 and later.

Formats

JSON

HTTP methods

GET—Creates a session. Don't pass X-LIVEAGENT-SESSION-KEY to the URL.

DELETE—Deletes the session. Pass X-LIVEAGENT-SESSION-KEY, the session key, to the URL.

Request headers

X-LIVEAGENT-AFFINITY

X-LIVEAGENT-API-VERSION

Request body

None

Request parameters

None

Response Body

[SessionId response](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm#SessionId)

#### See Also

-   [Your Message Long Polling Loop](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm "Message long polling notifies you of events that occur on the Chat server for your Chat session.")

## Related Topics

- SessionId
response (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm)
- Your Message Long Polling Loop (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_http_long_polling_loop.htm)
