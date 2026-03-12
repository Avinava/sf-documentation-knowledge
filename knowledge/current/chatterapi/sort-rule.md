---
title: "Sort Rule"
domain: chatterapi
topic: sort-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.188Z
estimatedTokens: 590
keywords: [Sort, Rule]
---

# Sort Rule

> Sort rule.

# Sort Rule

Sort rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| direction | String | Direction of the sort rule. Values are:Ascending—Sorts in ascending alphanumeric order (A–Z, 0–9).Default—When no direction is defined, sorts by relevance.Descending—Sorts in descending alphanumeric order (Z–A, 9–0). | Small, 52.0 | 52.0 |
| label | String | Label of the sort rule. | Small, 52.0 | 52.0 |
| labelSuffix | String | Label suffix of the sort rule. Values are:Ascen—Label suffix for 'Asc'Ascending—Label suffix for 'Ascending'Az—Label suffix for 'A-Z'Descen—Label suffix for 'Desc'Descending—Label suffix for 'Descending'FewMany—Label suffix for 'Few-Many'HeavyLight—Label suffix for 'Heavy-Light'HighLow—Label suffix for 'High-Low'HighestLowest—Label suffix for 'Highest-Lowest'LightHeavy—Label suffix for 'Light-Heavy'LowHigh—Label suffix for 'Low-High'LowestHighest—Label suffix for 'Lowest-Highest'ManyFew—Label suffix for 'Many-Few'NewOld—Label suffix for 'New-Old'Newest—Label suffix for 'Newest'NewestOldest—Label suffix for 'Newest-Oldest'NineZero—Label suffix for '9-0'OldNew—Label suffix for 'Old-New'Oldest—Label suffix for 'Oldest'OldestNewest—Label suffix for 'Oldest-Newest'PriceDecreasing—Label suffix for '$$-$'PriceIncreasing—Label suffix for '$-$$'ThickThin—Label suffix for 'Thick-Thin'ThinThick—Label suffix for 'Thin-Thick'Za—Label suffix for 'Z-A'ZeroNine—Label suffix for '0-9' | Small, 54.0 | 54.0 |
| nameOrId | String | Name of the sort rule field or, if the sort rule is based on a custom field, ID. | Small, 52.0 | 52.0 |
| sortOrder | Integer | Sort order for the rule. A lower number has higher precedence. The first sort option is called when no other option is selected. | Small, 54.0 | 54.0 |
| sortRuleId | String | ID of the sort rule. | Small, 52.0 | 52.0 |
| type | String | Type of sort rule. Values are:ProductAttributeBased—Sorts by product attribute fields.ProductBased—Sorts by product field data.Relevancy—Sorts by product and catalog term frequency.SortByPricebook—Sorts by product prices defined in the specified pricebook (version 55.0 and later). | Small, 52.0 | 52.0 |

#### See Also

-   [Sort Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sort_rules_collection_output.htm "Collection of sort rules.")

## Related Topics

- Sort Rules Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sort_rules_collection_output.htm)
