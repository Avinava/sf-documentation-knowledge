---
title: "List of Zones"
domain: chatterapi
topic: list-of-zones
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.051Z
estimatedTokens: 318
keywords: [Zones, Chatter, Answers, organization, context, user]
---

# List of Zones

> A list of Chatter Answers zones in the organization. Get
   information about zones available to the context user.

# List of Zones

A list of Chatter Answers zones in the organization. Get information about zones available to the context user.

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

| Parameter Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 29.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 250. The default value is 25. | 29.0 |

Response body for GET

[Zone Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_zone_page.htm "A page of Chatter Answers zones.")

## Code Examples

```
/connect/zones/
```

```
/connect/communities/communityId/zones/
```

## Related Topics

- Zone Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_zone_page.htm)
