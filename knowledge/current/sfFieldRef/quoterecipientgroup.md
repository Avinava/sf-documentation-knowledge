---
title: "QuoteRecipientGroup"
domain: sfFieldRef
topic: quoterecipientgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.260Z
estimatedTokens: 414
keywords: [QuoteRecipientGroup, recipient, group, offers, products, configuration, added, includes, reusing, groups, add, remove, recipients, API, version]
---

# QuoteRecipientGroup

> Represents a recipient group for which offers or products with the same
         configuration are being added. This also includes reusing these groups to add or remove
         recipients. This object is available in API version 64.0 and later.

# QuoteRecipientGroup

Represents a recipient group for which offers or products with the same configuration are being added. This also includes reusing these groups to add or remove recipients. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteRecipientGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quoterecipientgroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualMemberCount | Actual Member Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExpectedMemberCount | Expected Member Count | int | 9 |  |  |  |
| Id | Quote Recipient Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
