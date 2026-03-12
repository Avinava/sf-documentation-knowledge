---
title: "Boost and Bury Rule Input"
domain: chatterapi
topic: boost-and-bury-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.780Z
estimatedTokens: 287
keywords: [Boost, Bury, Rule, Input]
---

# Boost and Bury Rule Input

> Boost and bury rule input.

# Boost and Bury Rule Input

Boost and bury rule input.

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

## Code Examples

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

- Boost and Bury Rule Target Expression Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_boost_bury_target_expression_input.htm)
