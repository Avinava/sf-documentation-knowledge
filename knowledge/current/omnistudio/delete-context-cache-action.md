---
title: "Delete Context Cache Action"
domain: omnistudio
topic: delete-context-cache-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.433Z
keywords: [Delete, Context, Cache, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Delete Context Cache Action

# Delete Context Cache Action

Delete the specified context instance from the in-memory context cache using the provided context ID. This action removes the cached data maintained by the context cache service without performing any database write operations.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/deleteContextCache

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired. ID of the context instance. |

## Outputs

None.

## Example

POST

This sample request is for the Delete Context Cache action.

```

```