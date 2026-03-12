---
title: "Search"
domain: rest-api
topic: search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.721Z
estimatedTokens: 183
keywords: [Search, Executes, SOSL, URL-encoded]
---

# Search

> Executes the specified SOSL search. The search string must be
    URL-encoded.

# Search

Executes the specified SOSL search. The search string must be URL-encoded.

For more information on SOSL see the [SOQL and SOSL Reference](http://www.salesforce.com/us/developer/docs/soql_sosl/index_Left.htm "HTML (New Window)").

## Syntax

URI

/services/data/vXX.X/search/?q=SOSL\_searchString

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| q | A SOSL statement that is properly URL-encoded. |

## Example

See [Search for a String](atlas.en-us.api_rest.meta/api_rest/dome_search.htm "Use the Search resource to execute a SOSL search or use the Parameterized Search resource to execute a simple RESTful search without SOSL.").

## Related Topics

- Search for a String (atlas.en-us.api_rest.meta/api_rest/dome_search.htm)
