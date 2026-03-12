---
title: "Connection Property"
domain: bi-dev-guide-rest
topic: connection-property
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.078Z
estimatedTokens: 300
keywords: [Connection, connect, Analytics, data, connector]
---

# Connection Property

> A property used to connect to an Analytics data connector.

# Connection Property

A property used to connect to an Analytics data connector.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Property​Condition[] | A list of conditions for the connection property. | Small, 66.0 | 66.0 |
| dataType | Connect​Wave​Conn​Property​Type​Enum | The field type of the connection property. Valid values are:BooleanNumericSelectText | Small, 39.0 | 39.0 |
| default​Value | Object | The default value of the connection property. | Small, 39.0 | 39.0 |
| is​Encrypted | Boolean | Indicates whether the connection property is encrypted (true) or not (false). | Small, 39.0 | 39.0 |
| is​Required | Boolean | Indicates whether the connection property is required (true) or not (false). | Small, 39.0 | 39.0 |
| label | String | The label of the connection property. | Small, 39.0 | 39.0 |
| max​Length | Integer | The maximum length of the connection property. | Small, 39.0 | 39.0 |
| name | String | The name of the connection property. | Small, 39.0 | 39.0 |
| options | Property​Option[] | A list of select options for the connection property. | Small, 66.0 | 66.0 |

## Related Topics

- Property​Condition (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_property_condition.htm)
- Property​Option (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_property_option.htm)
