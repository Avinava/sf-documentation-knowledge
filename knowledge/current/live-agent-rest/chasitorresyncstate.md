---
title: "ChasitorResyncState"
domain: live-agent-rest
topic: chasitorresyncstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.261Z
estimatedTokens: 196
keywords: [ChasitorResyncState, Reestablishes, chat, visitor’s, state, including, ReconnectSessionrequest, completed]
---

# ChasitorResyncState

> Reestablishes the chat visitor’s state, including the details of the chat, after a
   ReconnectSessionrequest is completed.

# ChasitorResyncState

Reestablishes the chat visitor’s state, including the details of the chat, after a ReconnectSessionrequest is completed.

## Syntax

URI

https://hostname/chat/rest/Chasitor/ChasitorResyncState

Available since release

This resource is available in API versions 29.0 and later.

Formats

JSON

HTTP methods

POST

Request headers

X-LIVEAGENT-API-VERSION

X-LIVEAGENT-AFFINITY

X-LIVEAGENT-SESSION-KEY

Request parameters

None

Query parameters

None

Request body

ChasitorResyncState

Response body

None

#### See Also

-   [ReconnectSession](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm "Reconnect a customer’s chat session on a new server if the session is interrupted and the original server is unavailable.")

## Related Topics

- ReconnectSession (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ReconnectSession.htm)
