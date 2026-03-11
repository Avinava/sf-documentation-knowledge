---
title: "Update Context Attributes Action"
domain: omnistudio
topic: update-context-attributes-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.506Z
keywords: [Update, Context, Attributes, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Update Context Attributes Action

# Update Context Attributes Action

Update the attributes in the context instance using tags.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/updateContextAttributes

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
| nodePathAndUpdatedValues | TypestringDescriptionOptional. The JSON containing the node path and its updated values. |

## Outputs

None.

## Example

POST

This sample request is for the Update Context Attributes action.

```

```