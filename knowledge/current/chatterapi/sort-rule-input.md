---
title: "Sort Rule Input"
domain: chatterapi
topic: sort-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.864Z
estimatedTokens: 593
keywords: [Sort, Rule, Input]
---

# Sort Rule Input

> Sort rule input.

# Sort Rule Input

Sort rule input.

Root XML tag

<sortRule>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | Type of sort rule. Values are:ProductAttributeBased—Sorts by product attribute fields.ProductBased—Sorts by product field data.Relevancy—Sorts by product and catalog term frequency.SortByPricebook—Sorts by product prices defined in the specified pricebook (version 55.0 and later). | Required | 54.0 |
| sortStandardField | String | A standard field typically used for sorting (for example, Name, StockKeepingUnit, CreatedDate, Family, or ProductCode). | Required for ProductAttributeBased or ProductBased sort types. | 54.0 |
| customFieldId | String | A custom field to use for sorting. | Required. You must specify a custom field ID or a standard sort field, but not both. | 54.0 |
| direction | String | Direction of the sort rule. Values are:Ascending—Sorts in ascending alphanumeric order (A–Z, 0–9).Default—When no direction is defined, sorts by relevance.Descending—Sorts in descending alphanumeric order (Z–A, 9–0). | Optional | 54.0 |
| labelSuffix | String | Label suffix of the sort rule. Valid values:Ascen—Label suffix for 'Asc'Ascending—Label suffix for 'Ascending'Az—Label suffix for 'A-Z'Descen—Label suffix for 'Desc'Descending—Label suffix for 'Descending'FewMany—Label suffix for 'Few-Many'HeavyLight—Label suffix for 'Heavy-Light'HighLow—Label suffix for 'High-Low'HighestLowest—Label suffix for 'Highest-Lowest'LightHeavy—Label suffix for 'Light-Heavy'LowHigh—Label suffix for 'Low-High'LowestHighest—Label suffix for 'Lowest-Highest'ManyFew—Label suffix for 'Many-Few'NewOld—Label suffix for 'New-Old'Newest—Label suffix for 'Newest'NewestOldest—Label suffix for 'Newest-Oldest'NineZero—Label suffix for '9-0'OldNew—Label suffix for 'Old-New'Oldest—Label suffix for 'Oldest'OldestNewest—Label suffix for 'Oldest-Newest'PriceDecreasing—Label suffix for '$$-$'PriceIncreasing—Label suffix for '$-$$'ThickThin—Label suffix for 'Thick-Thin'ThinThick—Label suffix for 'Thin-Thick'Za—Label suffix for 'Z-A'ZeroNine—Label suffix for '0-9' | Optional | 54.0 |
| sortOrder | Integer | Sort order for the rule. A lower number has higher precedence. The first sort option is called when no other option is selected. | Required | 54.0 |

## Code Examples

```
{
      "type" : "ProductBased",
      "sortStandardField" : "Stock_Keeping_Unit",
      "direction" : "Ascending",
      "labelSuffix: "Asc",
      "sortOrder" : "1"
}
```
