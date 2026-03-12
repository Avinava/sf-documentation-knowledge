---
title: "Commerce Webstore Search Boost and Bury Rules, Create"
domain: chatterapi
topic: commerce-webstore-search-boost-and-bury-rules-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.557Z
estimatedTokens: 686
keywords: [Commerce, Webstore, Search, Boost, Bury, Rules, rule, supports, limit, products, unique, across]
---

# Commerce Webstore Search Boost and Bury Rules, Create

> Get all boost and bury rules for a webstore. Create a boost and bury
      rule. You can create up to 25 boost and bury rules for a webstore, and each boost and bury
      rule supports a limit of 100 products. You can use up to 500 unique products across all boost
      and bury rules.

# Commerce Webstore Search Boost and Bury Rules, Create

Get all boost and bury rules for a webstore. Create a boost and bury rule. You can create up to 25 boost and bury rules for a webstore, and each boost and bury rule supports a limit of 100 products. You can use up to 500 unique products across all boost and bury rules.

Keep these considerations in mind when using boost and bury rules to influence search results.

-   Boost and bury rules aren’t intended for precise control over ranking products in your search results.
-   Boost and bury rules influence how products are ranked in search results, but they don’t override them.
-   A product being boosted appears earlier and is ranked higher in the search results relative to its ranking without the rule and not relative to other products.
-   Boost and bury rules don’t guarantee that products with a higher boost value appear before products with a lower boost value.
-   Boost and bury rules only apply when the Best Match sort rule uses a relevance score to rank products.

Resource

```

```

Available version

59.0

HTTP methods

GET POST

Response body for GET

[Boost and Bury Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rules_collection_output.htm "Collection of boost and bury rules.")

Request body for POST

[Boost and Bury Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_boost_bury_rule_input.htm "Boost and bury rule input.")

Root XML tag

searchBoostBuryRule

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action of the boost and bury rule. Values are:Boost—Boost rule. Increases search result rankings for targeted products.Bury—Bury rule. Decreases search result rankings for targeted products. | Required | 59.0 |
| endDate | String | End date and time of the boost and bury rule. | Required | 59.0 |
| level | Integer | Level of the boost and bury rule. Values are from 1-100. The level determines the degree to which a boost and bury rule influences search result rankings for the targeted products. | Required | 59.0 |
| name | String | Name of the boost and bury rule. | Required | 59.0 |
| startDate | String | Start date and time of the boost and bury rule. | Required | 59.0 |
| targetExpression | Boost and Bury Rule Target Expression Input | Target expression for a boost and bury rule. The target expression specifies which products a boost and bury rule applies to. | Required | 59.0 |

Response body for POST

[Boost and Bury Rule](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rule_output.htm "Boost and bury rule information.")

## Code Examples

```
/commerce/management/webstores/${webstoreId}/search/boost-bury-rules
```

```
{
    "name": "Medium boost all Alpine products",
    "action": "Boost",
    "level": 70,
    "targetExpression": {
        "conditions": [
            {
                "attributeNameOrId": "Id",
                "attributeType": "Product2",
                "values": ["01txx0000006iiOAAQ","01txx0000006ij4AAA"]
            }
        ]
    },
    "startDate": "2023-07-31T00:10:00.000Z",
    "endDate": "2023-08-31T00:10:00.000Z"
}
```

## Related Topics

- Boost and Bury Rules Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rules_collection_output.htm)
- Boost and Bury Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_boost_bury_rule_input.htm)
- Boost and Bury Rule Target Expression Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_boost_bury_target_expression_input.htm)
- Boost and Bury Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rule_output.htm)
