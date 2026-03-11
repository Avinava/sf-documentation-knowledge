---
title: "Query Context Tags Action"
domain: omnistudio
topic: query-context-tags-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.487Z
keywords: [Query, Context, Tags, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Query Context Tags Action

# Query Context Tags Action

Query the tag values from an instance that are associated with a context definition.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/queryContextTags

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired. The ID of the context instance. |
| tagsList | TypestringDescriptionRequired. A collection of tags to be queried. |

## Outputs

| Output | Details |
| --- | --- |
| queryResult | TypestringDescriptionThe output of the queried context instance. |

## Example

POST

This sample request is for the Query Context Tags action.

```

```

This sample response is for the Query Context Tags action.

```

```