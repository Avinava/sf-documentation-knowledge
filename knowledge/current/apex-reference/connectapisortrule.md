---
title: "ConnectApi.SortRule"
domain: apex-reference
topic: connectapisortrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.043Z
estimatedTokens: 589
keywords: [ConnectApi.SortRule, Sort, rule.]
---

# ConnectApi.SortRule

> Sort rule.

# ConnectApi.SortRule

Sort rule.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| direction | ConnectApi.​CommerceSearch​SortRuleDirection | Direction of the sort rule. Values are:Ascending—Sorts in ascending alphanumeric order (A–Z, 0–9).Default—When no direction is defined, sorts by relevance.Descending—Sorts in descending alphanumeric order (Z–A, 9–0). | 52.0 |
| label | String | Label of the sort rule. | 52.0 |
| labelSuffix | ConnectApi.​CommerceSearch​SortRuleLabelSuffix | Label suffix of the sort rule.Values are:Ascen—Label suffix for 'Asc'Ascending—Label suffix for 'Ascending'Az—Label suffix for 'A-Z'Descen—Label suffix for 'Desc'Descending—Label suffix for 'Descending'FewMany—Label suffix for 'Few-Many'HeavyLight—Label suffix for 'Heavy-Light'HighLow—Label suffix for 'High-Low'HighestLowest—Label suffix for 'Highest-Lowest'LightHeavy—Label suffix for 'Light-Heavy'LowHigh—Label suffix for 'Low-High'LowestHighest—Label suffix for 'Lowest-Highest'ManyFew—Label suffix for 'Many-Few'NewOld—Label suffix for 'New-Old'Newest—Label suffix for 'Newest'NewestOldest—Label suffix for 'Newest-Oldest'NineZero—Label suffix for '9-0'OldNew—Label suffix for 'Old-New'Oldest—Label suffix for 'Oldest'OldestNewest—Label suffix for 'Oldest-Newest'PriceDecreasing—Label suffix for '$$-$'PriceIncreasing—Label suffix for '$-$$'ThickThin—Label suffix for 'Thick-Thin'ThinThick—Label suffix for 'Thin-Thick'Za—Label suffix for 'Z-A'ZeroNine—Label suffix for '0-9' | 54.0 |
| nameOrId | String | Name of the sort rule field or, if the sort rule is based on a custom field, ID. | 52.0 |
| sortOrder | Integer | Sort order for the rule. A lower number has higher precedence. The first sort option is called when no other option is selected. | 54.0 |
| sortRuleId | String | ID of the sort rule. | 52.0 |
| type | ConnectApi.​CommerceSearch​SortRuleType | Type of sort rule. Values are:ProductAttributeBased—Sorts by product attribute fields.ProductBased—Sorts by product field data.Relevancy—Sorts by product and catalog term frequency.SortByPricebook—Sorts by product prices defined in the specified pricebook (version 55.0 and later). | 52.0 |

#### See Also

-   [ConnectApi.SortRulesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm "Collection of sort rules.")

## Related Topics

- ConnectApi.​CommerceSearch​SortRuleDirection (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CommerceSearch​SortRuleLabelSuffix (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​CommerceSearch​SortRuleType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.SortRulesCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm)
