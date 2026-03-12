---
title: "Search Suggested Queries"
domain: knowledge-dev
topic: search-suggested-queries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.710Z
estimatedTokens: 781
keywords: [Search, Suggested, Queries, searches, user’s, query, text, matching, users, performed, Salesforce, Knowledge, way, improve, effectiveness]
---

# Search Suggested Queries

> Returns a list of suggested searches based on the
      user’s query string text matching searches that other users have performed in
      Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs
      a search. This resource is available in REST API version 30.0 and later.

# Search Suggested Queries

Returns a list of suggested searches based on the user’s query string text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search. This resource is available in REST API version 30.0 and later.

Salesforce Knowledge must be enabled in your organization.

Queries are suggested if they exactly match the query string text. The text string must be a prefix within the query; it’s not considered a match if it appears within a word. For example, the text string app would return suggested queries *apple banana* and *banana apples* but not *pineapple*.

If the number of suggestions returned exceeds the limit specified in the request, the end of the response contains a field called hasMoreResults. Its value is true if the suggestions returned are only a subset of the suggestions available, and false otherwise.

If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI.

## Syntax

URI

/services/data/vXX.X/search/suggestSearchQueries?q=searchString​&language=languageOfQuery

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None required

Request parameters

| Parameter | Description |
| --- | --- |
| channel | Optional. Specifies the Salesforce Knowledge channel where the article can be viewed. Valid values:AllChannels–Visible in all channels the user has access toApp–Visible in the internal Salesforce Knowledge applicationPkb–Visible in the public knowledge baseCsp–Visible in the Customer PortalPrm–Visible in the Partner PortalIf channel isn’t specified, the default value is determined by the type of user.Pkb for a guest userCsp for a Customer Portal userPrm for a Partner Portal userApp for any other type of userIf channel is specified, the specified value may not be the actual value requested, because of certain requirements.For guest, Customer Portal, and Partner Portal users, the specified value must match the default value for each user type. If the values don’t match or AllChannels is specified, then App replaces the specified value.For all users other than guest, Customer Portal, and Partner Portal users:If Pkb, Csp, Prm, or App are specified, then the specified value is used.If AllChannels is specified, then App replaces the specified value. |
| language | Required. The language of the user’s query. |
| limit | Optional. Specifies the maximum number of suggested searches to return. If there are more suggested queries than the limit specified, the response body’s hasMoreResults property is true. |
| q | Required. The user’s search query string, properly URL-encoded. Suggestions are returned only if the user’s query string meets the minimum length requirements: one character for queries in Chinese, Japanese, and Korean, and three characters for all other languages. Query strings exceeding the maximum length of 250 characters return an error. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/search/suggestSearchQueries?
q=app&language=en_US -H "Authorization: Bearer token"
```

```
{
  "autoSuggestResults" : [ {
    "0" : "apple",
    "1" : "apple banana",
  } ],
  "hasMoreResults" : false
}
```
