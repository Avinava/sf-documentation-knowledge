---
title: "Get a List of Composite Resources"
domain: rest-api
topic: get-a-list-of-composite-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.260Z
estimatedTokens: 145
keywords: [Composite, Resources, URIs]
---

# Get a List of Composite Resources

> Gets a list of URIs for other composite resources.

# Get a List of Composite Resources

Gets a list of URIs for other composite resources.

## Syntax

URI

/services/data/vXX.X/composite

Formats

JSON

HTTP method

GET

Authentication

Authorization: Bearer token

Parameters

None required

Request body

None required

## Example

Example Request

```

```

Example Response Body

```

```

#### See Also

-   [https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/using\_composite\_resources.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_composite_resources.htm)

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/ -H "Authorization: Bearer token"
```

```
{
    "tree": "/services/data/v54.0/composite/tree",
    "batch": "/services/data/v54.0/composite/batch",
    "sobjects": "/services/data/v54.0/composite/sobjects",
    "graph": "/services/data/v54.0/composite/graph"
}
```
