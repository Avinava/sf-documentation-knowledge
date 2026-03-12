---
title: "ListEmailIndividualRecipient"
domain: sfFieldRef
topic: listemailindividualrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.392Z
estimatedTokens: 370
keywords: [ListEmailIndividualRecipient, email, Salesforce, recipient, record, link, Recipients, contacts, leads, campaign, members, one-to-many, relationship, ListEmail, API]
---

# ListEmailIndividualRecipient

> For a list email in Salesforce, represents a recipient. Each record
         represents a link from a list email to exactly one recipient for that list email.
         Recipients can be contacts, leads, or campaign members. Has a one-to-many relationship with
         ListEmail. This object is available in API version 44.0 and later.

# ListEmailIndividualRecipient

For a list email in Salesforce, represents a recipient. Each record represents a link from a list email to exactly one recipient for that list email. Recipients can be contacts, leads, or campaign members. Has a one-to-many relationship with ListEmail. This object is available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ListEmailIndividualRecipient](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_listemailindividualrecipient.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | List Email Individual Recipient ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListEmailId | List Email ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| RecipientId | Recipient ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
