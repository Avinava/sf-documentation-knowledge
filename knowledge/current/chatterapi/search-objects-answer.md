---
title: "Search Objects Answer"
domain: chatterapi
topic: search-objects-answer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.418Z
estimatedTokens: 262
keywords: [Search, Objects, Answer, natural, language, query]
---

# Search Objects Answer

> Search objects using a natural language query and return an answer.

# Search Objects Answer

Search objects using a natural language query and return an answer.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To use this resource, enable search answers in your Salesforce org from Einstein Search settings. This resource doesn't support the search customizations configured in Search Manager.

Resource

```

```

Available version

63.0

HTTP methods

GET

Example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Natural language query to search for in the org. | Required | 63.0 |

Response body for GET

[Search Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm "Results of searching objects using a natural language query.")

#### See Also

-   [*Einstein Search Help*: Enable AI-Generated Search Answers](https://help.salesforce.com/s/articleView?id=ai.search_es_enable_search_answers.htm&language=en_US)

## Code Examples

```
/connect/search/sobjects/answer
```

```
/services/data/v63.0/connect/search/sobjects/answer?q=how to sign documents with docusign &htmlEncode=false
```

## Related Topics

- Search Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm)
