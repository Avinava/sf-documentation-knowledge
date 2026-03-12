---
title: "Get Invocable Actions"
domain: rest-api
topic: get-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.349Z
estimatedTokens: 101
keywords: [Get, Invocable, Actions, standard, custom, invocable, action, URIs, Salesforce., resource, REST, API, version, 32.0, later., Example, URI, Formats, HTTP, Authentication]
---

# Get Invocable Actions

> Gets standard and custom invocable action URIs from Salesforce. This resource is
    available in REST API version 32.0 and later.

# Get Invocable Actions

Gets standard and custom invocable action URIs from Salesforce. This resource is available in REST API version 32.0 and later.

## Example

## URI

/services/data/vXX.X/actions

## Formats

JSON, XML

## HTTP Methods

GET

## Authentication

Authorization: Bearer token

## Request parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/actions -H "Authorization: Bearer token"
```

```
{
  "standard" : "/services/data/v66.0/actions/standard",
  "custom" : "/services/data/v66.0/actions/custom"
}
```
