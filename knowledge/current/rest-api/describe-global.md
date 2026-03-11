---
title: "Describe Global"
domain: rest-api
topic: describe-global
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.348Z
keywords: [Describe, Global, Note, Syntax, Example, See]
---

# Describe Global

# Describe Global

Lists the available objects and the associated metadata. This resource returns both custom and standard objects.

In addition, it provides the org encoding, as well as the maximum batch size permitted in queries. For more information on encoding, see [Internationalization and Character Sets](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/implementation_considerations.htm#sforce_api_other_internationalization "HTML (New Window)").

You can use the If-Modified-Since or If-Unmodified-Since header with this resource. If you use the If-Modified-Since header and no available object’s metadata has changed since the provided date, a 304 Not Modified status code is returned with no response body.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The If-Modified-Since and If-Unmodified-Since headers check for more than object-specific metadata changes. They also check for org-wide events, such as changes to permissions, profiles, or field labels.

## Syntax

URI

/services/data/vXX.X/sobjects/

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| If-Modified-Since | An optional header specifying a date and time. The request returns records that have been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss z. For example: If-Modified-Since: Mon, 30 Nov 2020 08:34:54 MST. |
| If-Unmodified-Since | An optional header specifying a date and time. The request returns records that haven’t been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss z. For example: If-Unmodified-Since: Mon, 30 Nov 2020 08:34:54 MST. |

## Example

See [Get a List of Objects](atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm "Use the Describe Global resource to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.").

#### See Also

-   [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.")