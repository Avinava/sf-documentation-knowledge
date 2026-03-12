---
title: "Personalization Recommender Creation"
domain: chatterapi
topic: personalization-recommender-creation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.255Z
estimatedTokens: 152
keywords: [Personalization, Recommender, Creation]
---

# Personalization Recommender Creation

> Create a personalization recommender.

# Personalization Recommender Creation

Create a personalization recommender.

Resource

```

```

Available version

64.0

HTTP method

POST

Request body

[Personalization Recommender Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_recommender_input.htm "Contains the details for creating a personalization recommender.")

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
/personalization/personalization-recommenders
```

```
{
    "name": "MaximizeRevenueRecommender",
    "label": "Maximize Revenue Recommender",
    "description": "Recommender to maximize revenue",
    "dataSpaceName": "default",
    "itemDataGraphName": "productDg",
    "profileDataGraphName": "profileDg",
    "objectiveName": "MaximizeRevenue",
    "includeFilters": {
        "operator": "And",
        "rules": [
            {
                "type": "Field",
                "fieldName": "ssot__BrandId__c",
                "predicate": {
                    "type": "Text",
                    "operator": "Equals",
                    "values": ["Nike"]
                }
            }
        ]
    }
}
```

```
{
    "contentObject": {
        "label": "Goods Product",
        "name": "GoodsProduct"
    },
    "createdById": "005SG000001skcTYAQ",
    "createdDate": "2025-02-23T20:27:30.000Z",
    "dataSpace": {
        "label": "default",
        "name": "default"
    },
    "excludeFilters": null,
    "id": "0heSG0000000JlpYAE",
    "includeFilters": {
        "operator": "And",
        "rules": [
            {
                "fieldName": "ssot__BrandId__c",
                "predicate": {
                    "operator": "Equals",
                    "type": "Text",
                    "values": [
                        "Nike"
                    ]
                },
                "type": "Field"
            }
        ]
    },
    "itemDataGraph": {
        "label": "productDg",
        "name": "Products datagraph"
    },
    "label": "Maximize Revenue Recommender",
    "lastModifiedById": "005SG000001smAMYAY",
    "lastModifiedDate": "2025-09-05T08:04:02.000Z",
    "lastRefreshedStatus": "Complete",
    "lastSuccessfulRefresh": "2025-04-09T16:42:09.000Z",
    "name": "MaximizeRevenueRecommender",
    "objective": {
        "label": "MaximizeRevenue",
        "name": "MaximizeRevenue"
    },
    "profileDataGraph": {
        "label": "profileDg",
        "name": "Profile datagraph"
    },
    "sortCriteria": {
        "calculatedInsightLabel": null,
        "calculatedInsightMetricLabel": null,
        "sortOrder": null
    },
    "status": "Active",
    "url": "/services/data/v64.0/personalization/personalization-recommenders/0heSG0000000JlpYAE"
}
```

## Related Topics

- Personalization Recommender Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_recommender_input.htm)
- Personalization Recommender (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender.htm)
