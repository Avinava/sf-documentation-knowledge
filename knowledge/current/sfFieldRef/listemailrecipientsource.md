---
title: "ListEmailRecipientSource"
domain: sfFieldRef
topic: listemailrecipientsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.397Z
estimatedTokens: 381
keywords: [ListEmailRecipientSource, email, Salesforce, dynamically, defined, sources, recipient, addresses, record, link, view, campaign, examined, sent, one-to-many]
---

# ListEmailRecipientSource

> For a list email in Salesforce, represents the dynamically defined
         sources of recipient email addresses. Each record represents a link to a single list view
         or campaign that is examined when the list email is sent. Has a one-to-many relationship
         with ListEmail. This object is available in API version 41.0 and later.

# ListEmailRecipientSource

For a list email in Salesforce, represents the dynamically defined sources of recipient email addresses. Each record represents a link to a single list view or campaign that is examined when the list email is sent. Has a one-to-many relationship with ListEmail. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ListEmailRecipientSource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_listemailrecipientsource.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | List Email Recipient Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListEmailId | List Email ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceListId | SourceList ID | reference |  | 18 |  |  |
| SourceType | Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
