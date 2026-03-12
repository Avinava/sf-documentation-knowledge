---
title: "Personalization Recommender Collection"
domain: chatterapi
topic: personalization-recommender-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.252Z
estimatedTokens: 197
keywords: [Personalization, Recommender, Collection, recommenders, optionally, filtered, data, space, profile, graph]
---

# Personalization Recommender Collection

> Get a list of personalization recommenders, optionally filtered by data space or profile data graph.

# Personalization Recommender Collection

Get a list of personalization recommenders, optionally filtered by data space or profile data graph.

Resource

```

```

Available version

64.0

HTTP method

GET

Request parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| dataSpaceIdOrName | String | The ID or API name of the data space to filter by. | Optional |
| profileDataGraphIdOrName | String | The ID or API name of the profile data graph to filter by. | Optional |

Response body

[Personalization Recommender Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_collection.htm "Contains a collection of personalization recommenders.")

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
/personalization/personalization-recommenders
```

```
GET /personalization/personalization-recommenders/?dataSpaceIdOrName=default&profileDataGraphIdOrName=IndividualDG
```

```
[
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
        "includeFilters": {}
    },
    {
        "id": "0heWs000000009hIAX",
        "status": "Active",
        "lastRefreshedStatus": "Complete",
        "lastSuccessfulRefresh": "1/16/2025, 4:09 AM",
        "name": "Maximise_Signup_Recommender_Alt",
        "label": "MaximiseSignupRecommenderAlt",
        "description": "Recommender to maximize signups alt",
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
        "includeFilters": {}
    }
]
```

## Related Topics

- Personalization Recommender Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_collection.htm)
- Personalization Recommender (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender.htm)
