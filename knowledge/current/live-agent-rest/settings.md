---
title: "Settings"
domain: live-agent-rest
topic: settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.327Z
estimatedTokens: 301
keywords: [Settings, Retrieves, Chat, deployment, that’s, associated, session, establish, visitor’s]
---

# Settings

> Retrieves all settings information about the Chat deployment
that’s associated with your chat session. The Settings
request is required as the first request to establish a chat visitor’s
session.

# Settings

Retrieves all settings information about the Chat deployment that’s associated with your chat session. The Settings request is required as the first request to establish a chat visitor’s session.

## Syntax

URI

https://hostname/chat/rest/Visitor/Settings

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

The ID of the Chat deployment that the chat request was initiated from.

Settings.buttonIds

An array of chat button IDs for which to retrieve settings information.

Settings.needEstimatedWaitTime

Indicates whether the estimatedWaitTime property should be filled. Specify a value of 1 to request the estimated wait time.

Settings.updateBreadcrumb

Indicates whether to update the chat visitor’s location with the URL of the Web page that the visitor is viewing.

Request body

None

Response body

[Settings response](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm#Settings)

## Related Topics

- Settings response (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_response_bodies.htm)
