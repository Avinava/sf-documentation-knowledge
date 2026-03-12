---
title: "Zone Search Results"
domain: chatterapi
topic: zone-search-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.046Z
estimatedTokens: 482
keywords: [Zone, Search, Results, Chatter, Answers]
---

# Zone Search Results

> Search results from a search in a Chatter Answers
   zone.

# Zone Search Results

Search results from a search in a Chatter Answers zone.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

Resource

```

```

```

```

Available version

29.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Optional or Required | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | A filter for the search results. One of these values:Article—Search results contain only articles.Question—Search results contain only questions. | Optional | 29.0 |
| language | String | The language of the articles or questions. The value must be a Salesforce supported locale code. In an <apex:page>, the default value is the language of the page. Otherwise, the default value is the user's locale. | Optional | 36.0 |
| page | Integer | The page of items to return. The default value is 0, which returns the first page. | Optional | 29.0 |
| pageSize | Integer | The number of items per page. Valid values are from 1 through 100. The default value is 20. | Optional | 29.0 |
| q | String | Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See Wildcards. | Required | 29.0 |

Response body for GET

[Zone Search Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_zone_search_result.htm "The result of a search within a Chatter Answers zone.")

## Code Examples

```
/connect/zones/zoneId/search-results
```

```
/connect/communities/communityId/zones/zoneId/search-results
```

## Related Topics

- Zone Search Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_zone_search_result.htm)
