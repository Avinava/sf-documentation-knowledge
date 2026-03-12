---
title: "Session-Based Permission Set Actions"
domain: api-action
topic: session-based-permission-set-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.941Z
estimatedTokens: 256
namespace: Type
keywords: [Session-Based, Permission, Actions, Activate, deactivate, current, user’s, API, session, REST, HTTP, Inputs, Outputs]
---

# Session-Based Permission Set Actions

> Activate or deactivate a session-based permission set for the current
      user’s API session.

**Namespace:** `Type`

# Session-Based Permission Set Actions

Activate or deactivate a session-based permission set for the current user’s API session.

This object is available in API version 40.0 and later.

This action activates or deactivates the provided permission set for the current user’s API session. The activation or deactivation doesn’t affect other sessions. The permission set must already be assigned to the current user.

## Supported REST HTTP Methods

URI

Activate session-based permission set:

/services/data/vXX.X/actions/standard/activateSessionPermSet

Deactivate session-based permission set:

/services/data/vXX.X/actions/standard/deactivateSessionPermSet

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| PermSetName | TypestringDescriptionRequired. Specifies the developer name of the permission set. |
| PermSetNamespace | TypestringDescriptionOptional. Specifies the namespace of the permission set. |

## Outputs

None.
