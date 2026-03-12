---
title: "Transaction Management Fields on Quote Line Group"
domain: revenue-cloud
topic: transaction-management-fields-on-quote-line-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.213Z
estimatedTokens: 1148
keywords: [Transaction, Management, Fields, Quote, Line, Group, Standard, custom, fields, extend, standard, Management., Special, Access, Rules]
---

# Transaction Management Fields on Quote Line Group

> Standard and custom fields extend the standard Quote Line Group object
   for use in Transaction Management.

# Transaction Management Fields on Quote Line Group

Standard and custom fields extend the standard Quote Line Group object for use in Transaction Management.

## Special Access Rules

To view these fields, you must have the Revenue Cloud Advanced license. See [Quote Line Group](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelinegroup.htm) for fields on the Salesforce platform object.

## Fields

| Field | Details |
| --- | --- |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional discount percentage, specified by the sales representative at the group level. Available in API version 65.0 and later. |
| DiscountAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional discount amount, specified by the sales representative at the group level. Available in API version 65.0 and later. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the group.If the IsRamped field is set to true, Transaction Management sets this date as the end date of all the line items in the group that have the Term-Defined product selling model.Available in API version 65.0 and later. |
| IsRamped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the group is a group ramp segment, which is a period in a group ramp schedule with specific products, quantities, and discounts.You can use this field from Revenue Cloud only when the Ramp Deals for Groups in Quotes and Orders setting is turned on.The default value is false.Available in API version 65.0 and later. |
| Margin | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin percentage, specified by the sales representative at the group level. Available in API version 65.0 and later. |
| MarginAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin amount, specified by the sales representative at the group level. This amount can also be considered as the summary margin amount calculated by subtracting the total cost from the summary subtotal. Available in API version 65.0 and later. |
| ParentQuoteLineGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent group for a nested quote line group. Available in API version 65.0 and later.This field is a relationship field.Relationship NameParentQuoteLineGroupRefers ToQuoteLineGroup |
| SegmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe duration type of the segment. You can use this field from Revenue Cloud only when the Ramp Deals for Groups in Quotes and Orders setting is turned on.Valid values are:CustomYearlyAvailable in API version 65.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the group.If the IsRamped field is set to true, Transaction Management sets this date as the start date of all the line items in the group.Available in API version 65.0 and later. |
| SummaryTotalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe aggregated total amount of nested group lines before any discounts are applied. Available in API version 65.0 and later. |
| TotalAdjustment | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total discount percentage applied at the group level. This percentage is calculated by using the formula: (Summary Total Amount - Summary Subtotal) / Summary Total Amount. Available in API version 65.0 and later. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total discount amount at the group level. This amount is calculated by subtracting the summary subtotal from the summary total amount. Available in API version 65.0 and later. |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe aggregated total cost of nested group lines. Available in API version 65.0 and later. |
| TotalMargin | TypepercentPropertiesFilter, Nillable, SortDescriptionThe summary margin percentage at the line item level. This percentage is calculated by using the formula: (Summary Subtotal - Total Cost) / Summary Subtotal. Available in API version 65.0 and later. |
| TotalMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe summary margin amount calculated at the group level. Available in API version 65.0 and later. |
