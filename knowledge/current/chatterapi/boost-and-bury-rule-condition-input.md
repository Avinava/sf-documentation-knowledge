---
title: "Boost and Bury Rule Condition Input"
domain: chatterapi
topic: boost-and-bury-rule-condition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.070Z
estimatedTokens: 129
keywords: [Boost, Bury, Rule, Condition, Input]
---

# Boost and Bury Rule Condition Input

> Condition for a boost and bury rule.

# Boost and Bury Rule Condition Input

Condition for a boost and bury rule.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeNameOrId | String | Identifier of the attribute for the condition. Value is ID. | Required | 59.0 |
| attributeType | String | Search attribute type. Value is Product2. | Optional | 59.0 |
| values | String[] | List of up to 100 attribute values for the condition. | Required | 59.0 |

## Code Examples

```
{
      "attributeNameOrId" : "ID",
      "attributeType" : "Product2",
      "values": ["01txx0000006iiOAAQ","01txx0000006ij4AAA"]
}
```
