---
title: "ConnectApi.AttributeFilterInput"
domain: apex-reference
topic: connectapiattributefilterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.776Z
keywords: [ConnectApi.AttributeFilterInput]
---

# ConnectApi.AttributeFilterInput

# ConnectApi.AttributeFilterInput

Represents the attribute filter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeId | String | ID of the attribute. |  | 60.0 |
| attributeName | String | Name of the attribute. |  | 60.0 |
| dateUnits | Datetime | Date unit filter. |  | 60.0 |
| operator | String | Operator of the attribute. |  | 60.0 |
| type | FilterOperatorDataTypeEnum | Type of attribute.FilterOperatorDataTypeBooleanFilterOperatorDataTypeDateFilterOperatorDataTypeDateOnlyFilterOperatorDataTypeExactlyRelativeDateFilterOperatorDataTypeNumberFilterOperatorDataTypeRelateToNowDateFilterOperatorDataTypeText |  | 60.0 |
| value | List<String> | Filter values. |  | 60.0 |