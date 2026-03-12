---
title: "QuoteLineGroup"
domain: revenue-cloud
topic: quotelinegroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.339Z
estimatedTokens: 1085
keywords: [QuoteLineGroup, Stores, group, information, line, items, quote., stores, aggregated, field, subtotal, contains, parent-child, relationship, API, version, 61.0, later., Supported, Calls]
---

# QuoteLineGroup

> Stores the group information for line items in a quote. It also stores the
         aggregated line field information (subtotal). It contains a parent-child relationship to
         quote. This object is available in API version 61.0 and later.

# QuoteLineGroup

Stores the group information for line items in a quote. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to quote. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the group. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional discount percentage, specified by the sales representative at the group level. |
| DiscountAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional discount amount, specified by the sales representative at the group level. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the group ramp segment. |
| IsRamped | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the group is a group ramp segment, which is a period in a group ramp deal with specific prices and volume.The default value is false. |
| Margin | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin percentage, specified by the sales representative at the group level. |
| MarginAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin amount, specified by the sales representative at the group level. This amount can also be considered as the summary margin amount calculated by subtracting the total cost from the summary subtotal. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the group. |
| ParentQuoteLineGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent group for a nested quote line group.This field is a relationship field.Relationship NameParentQuoteLineGroupRefers ToQuoteLineGroup |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related quote.This field is a relationship field.Relationship NameQuoteRelationship TypeMaster-detailRefers ToQuote (the master object) |
| SegmentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe duration type of the segment.Possible values are:CustomYearly |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the group ramp segment. |
| SummarySubtotal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe aggregated subtotal amount of nested group lines. |
| SummaryTotalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe aggregated total amount of nested group lines before any discounts are applied. |
| TotalAdjustment | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total discount percentage applied at the group level. This percentage is calculated by using the formula: (Summary Total Amount - Summary Subtotal) / Summary Total Amount. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total discount amount at the group level. This amount is calculated by subtracting the summary subtotal from the summary total amount. |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe aggregated total cost of nested group lines. |
| TotalMargin | TypepercentPropertiesFilter, Nillable, SortDescriptionThe summary margin percentage at the line item level. This percentage is calculated by using the formula: (Summary Subtotal - Total Cost) / Summary Subtotal. |
| TotalMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe summary margin amount calculated at the group level. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of quote line group.Possible values are:AssetDowngradeAssetSwapAssetUpgradeCPQQuoteGroup—CPQ Line GroupingRampScheduleGroupThe default value is CPQQuoteGroup. |
