---
title: "ConnectApi.AttributeFilter"
domain: apex-reference
topic: connectapiattributefilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.959Z
keywords: [ConnectApi.AttributeFilter]
---

# ConnectApi.AttributeFilter

# ConnectApi.AttributeFilter

Represents the attribute filter output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeId | String | ID of the attribute. | 60.0 |
| attributeName | String | Name of the attribute. | 60.0 |
| dateUnits | Datetime | Date units for the attribute. | 60.0 |
| operator | String | Operator for the attribute. | 60.0 |
| type | FilterOperatorDataTypeEnum | Type of attribute.FilterOperatorDataTypeBooleanFilterOperatorDataTypeDateFilterOperatorDataTypeDateOnlyFilterOperatorDataTypeExactlyRelativeDateFilterOperatorDataTypeNumberFilterOperatorDataTypeRelateToNowDateFilterOperatorDataTypeText | 60.0 |
| values | List<String> | Values for the attribute. | 60.0 |