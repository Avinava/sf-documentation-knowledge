---
title: "QuoteLineGroup"
domain: sfFieldRef
topic: quotelinegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.133Z
estimatedTokens: 401
keywords: [QuoteLineGroup, Stores, group, line, items, quote, aggregated, subtotal, parent-child, relationship, API, version, 61.0, later]
---

# QuoteLineGroup

> Stores the group information for line items in a quote. It also stores the
         aggregated line field information (subtotal). It contains a parent-child relationship to
         quote. This object is available in API version 61.0 and later.

# QuoteLineGroup

Stores the group information for line items in a quote. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to quote. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteLineGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelinegroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Quote Line Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Quote Line Group Name | string |  | 255 |  |  |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SummarySubtotal | Summary Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Quote Line Group Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
