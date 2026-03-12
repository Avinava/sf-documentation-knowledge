---
title: "Boost and Bury Rule Target Expression Input"
domain: chatterapi
topic: boost-and-bury-rule-target-expression-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.074Z
estimatedTokens: 94
keywords: [Boost, Bury, Rule, Target, Expression, Input]
---

# Boost and Bury Rule Target Expression Input

> Target expression for a boost and bury rule.

# Boost and Bury Rule Target Expression Input

Target expression for a boost and bury rule.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Boost and Bury Rule Condition Input[] | List of conditions for the boost and bury rule target expression. | Required | 59.0 |

## Code Examples

```
{
        "conditions": [
            {
                "attributeNameOrId": "Id",
                "attributeType": "Product2",
                "values": ["01txx0000006iiOAAQ","01txx0000006ij4AAA"]
            }
        ]
}
```

## Related Topics

- Boost and Bury Rule Condition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_boost_bury_condition_input.htm)
