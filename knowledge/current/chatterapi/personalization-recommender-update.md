---
title: "Personalization Recommender Update"
domain: chatterapi
topic: personalization-recommender-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.264Z
estimatedTokens: 158
keywords: [Personalization, Recommender, specific]
---

# Personalization Recommender Update

> Update a specific personalization recommender by ID or name.

# Personalization Recommender Update

Update a specific personalization recommender by ID or name.

Resource

```

```

Available version

65.0

HTTP method

PATCH

Request body

[Personalization Recommender Patch Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_patch_input.htm "Contains the details for editing a personalization recommender.")

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
PATCH /personalization/personalization-recommenders/0heSG0000000JlpYAE

{
    "label": "Updated Label for Maximize Revenue recommender"
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
    "label": "Updated Label for Maximize Revenue recommender",
    "lastModifiedById": "005SG000001smAMYAY",
    "lastModifiedDate": "2025-09-06T08:04:02.000Z",
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

- Personalization Recommender Patch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_patch_input.htm)
- Personalization Recommender (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender.htm)
