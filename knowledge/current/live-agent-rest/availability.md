---
title: "Availability"
domain: live-agent-rest
topic: availability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.250Z
estimatedTokens: 213
keywords: [Availability, whether, chat, button, receive, new, requests]
---

# Availability

> Indicates whether a chat button is available
to receive new chat requests.

# Availability

Indicates whether a chat button is available to receive new chat requests.

## Syntax

URI

https://hostname/chat/rest/Visitor/Availability

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

The ID of the Salesforce organization that’s associated with the Live Agent deployment.

deployment\_id

The 15-digit ID of the Chat deployment that the chat request was initiated from.

Availability.ids

An array of object IDs for which to verify availability.

Availability.needEstimatedWaitTime

Indicates whether the estimatedWaitTime property should be filled. Specify a value of 1 to request the estimated wait time.

Request body

None

Response body

Availability response
