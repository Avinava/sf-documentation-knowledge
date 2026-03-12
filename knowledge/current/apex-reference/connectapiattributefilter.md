---
title: "ConnectApi.AttributeFilter"
domain: apex-reference
topic: connectapiattributefilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.097Z
estimatedTokens: 184
keywords: [ConnectApi.AttributeFilter, Represents, attribute, filter, output.]
---

# ConnectApi.AttributeFilter

> Represents the attribute filter output.

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

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- FilterOperatorDataTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
