---
title: "PartyCertifiedCapacity"
domain: sfFieldRef
topic: partycertifiedcapacity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.506Z
estimatedTokens: 372
keywords: [PartyCertifiedCapacity, captured, certificate, capacity, party's, work, timeline, recovery, API, version, 60.0, later]
---

# PartyCertifiedCapacity

> Represents the information captured from the certificate of capacity, such as
         the party's capacity to work, a timeline for recovery, and return to work. This object
      is available in API version 60.0 and later.

# PartyCertifiedCapacity

Represents the information captured from the certificate of capacity, such as the party's capacity to work, a timeline for recovery, and return to work. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyCertifiedCapacity in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Party Certified Capacity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IssueDate | Issue Date | date |  |  |  |  |
| IssuerId | Issuer ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
