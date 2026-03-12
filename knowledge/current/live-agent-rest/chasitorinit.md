---
title: "ChasitorInit"
domain: live-agent-rest
topic: chasitorinit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.256Z
estimatedTokens: 163
keywords: [ChasitorInit, Initiates, new, chat, visitor, session, always, POST]
---

# ChasitorInit

> Initiates a new chat visitor session. The ChasitorInit request is always required as the first POST request in a new chat
  session.

# ChasitorInit

Initiates a new chat visitor session. The ChasitorInit request is always required as the first POST request in a new chat session.

## Syntax

URI

https://hostname/chat/rest/Chasitor/ChasitorInit

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

X-LIVEAGENT-SEQUENCE

Request parameters

None

Query parameters

None

Request body

[ChasitorInit request](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_request_bodies.htm#ChasitorInit)

Response body

None

## Related Topics

- ChasitorInit request (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_request_bodies.htm)
