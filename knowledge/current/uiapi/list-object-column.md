---
title: "List Object Column"
domain: uiapi
topic: list-object-column
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.887Z
estimatedTokens: 483
keywords: [Column]
---

# List Object Column

> List object column.

# List Object Column

List object column.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alias | String | Alias for the column. | Small, 61.0 | 61.0 |
| dataType | String | Data type for the column. Values are:AddressAnytypeBase64BooleanComboBoxComplexValueCurrencyDateDateTimeDoubleEmailEncryptedStringIntJunctionIdListLocationLongMultiPicklistPercentPhonePicklistReferenceStringTextAreaTimeUrl | Small, 61.0 | 61.0 |
| defaultFilter​Operator | String | Default filter operator for the column. | Small, 61.0 | 61.0 |
| displayable | Boolean | Indicates whether the column is displayable (true) or not (false). | Small, 61.0 | 61.0 |
| fieldApiName | String | Field API name for the column. | Small, 61.0 | 61.0 |
| filterable | Boolean | Indicates whether the column is filterable (true) or not (false). | Small, 61.0 | 61.0 |
| label | String | Label for the column. | Small, 61.0 | 61.0 |
| picklistValues | List Object Picklist Value[] | List of allowed picklist values for the column. | Small, 61.0 | 61.0 |
| quickFilter​Operator | String | Operator to use for quick filters on the column. | Small, 64.0 | 64.0 |
| quickFilter​Overrides | List Object Quick Filter Overrides | Optional overrides to use for quick filters on the column. | Small, 64.0 | 64.0 |
| quickFilterable | Boolean | Indicates whether the column can have quick filters (true) or not (false). | Small, 64.0 | 64.0 |
| sortable | Boolean | Indicates whether the column is sortable (true) or not (false). | Small, 61.0 | 61.0 |
| supportedFilter​Operators | String[] | Supported filter operators for the column. Values are:ContainsEqualsExcludesGreaterOrEqualGreaterThanIncludesLessOrEqualLessThanNotContainNotEqualStartsWithWithin | Small, 61.0 | 61.0 |

#### See Also

-   [List Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_info.htm "List object info.")

## Related Topics

- List Object Picklist Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_picklist_value.htm)
- List Object Quick Filter Overrides (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_quick_filter_overrides.htm)
- List Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_info.htm)
