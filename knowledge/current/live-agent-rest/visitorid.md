---
title: "VisitorId"
domain: live-agent-rest
topic: visitorid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.330Z
estimatedTokens: 159
keywords: [VisitorId, Generates, unique, track, chat, visitor, they, initiate, tracks, visitor’s, activities, navigates, Web, another]
---

# VisitorId

> Generates a unique ID to track a chat visitor
when they initiate a chat request and tracks the visitor’s
activities as the visitor navigates from one Web page to another.

# VisitorId

Generates a unique ID to track a chat visitor when they initiate a chat request and tracks the visitor’s activities as the visitor navigates from one Web page to another.

## Syntax

URI

https://hostname/chat/rest/Visitor/VisitorId

Available since release

This resource is available in API versions 29.0 and later.

Formats

JSON

HTTP methods

GET

Request headers

X-LIVEAGENT-API-VERSION

Request parameters

None

Query parameters

org\_id

The Salesforce organization ID

deployment\_id

The ID of the Chat deployment that the chat request was initiated from

Request body

None

Response body

VisitorId response
