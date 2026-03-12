---
title: "Personalization Recommender List"
domain: chatterapi
topic: personalization-recommender-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.260Z
estimatedTokens: 104
keywords: [Personalization, Recommender, specific]
---

# Personalization Recommender List

> Get information about a specific personalization recommender by ID or name.

# Personalization Recommender List

Get information about a specific personalization recommender by ID or name.

Resource

```

```

Available version

64.0

HTTP method

GET

Response body

[Personalization Recommender](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender.htm "Contains details of a personalization recommender.")

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
/personalization/personalization-recommenders/{idOrName}
```

```
GET /personalization/personalization-recommenders/0heWs000000009hIAA
```

```
{
    "id": "0heWs000000009hIAA",
    "status": "Active",
    "lastRefreshedStatus": "Complete",
    "lastSuccessfulRefresh": "1/16/2025, 4:09 AM",
    "name": "Maximise_Signup_Recommender",
    "label": "MaximiseSignupRecommender",
    "description": "Recommender to maximize signups",
    "contentObject": {
        "label": "Goods Product",
        "name": "ssot__GoodsProduct__c"
    },
    "dataSpace": {
        "label": "default",
        "name": "dataSpaceApiName"
    },
    "itemDataGraph": {
        "name": "product_dg",
        "label": "ProductDG"
    },
    "profileDataGraph": {
        "label": "IndividualDG",
        "name": "abc_someProfileDataGraphApiName"
    },
    "objective": {
        "label": "MaximiseSignupObjective",
        "name": "Maximise_Signup_Objective"
    },
    "sortCriteria": null,
    "includeFilter": {}
}
```

## Related Topics

- Personalization Recommender (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender.htm)
