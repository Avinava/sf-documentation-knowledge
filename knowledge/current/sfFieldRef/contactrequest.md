---
title: "ContactRequest"
domain: sfFieldRef
topic: contactrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.031Z
estimatedTokens: 451
keywords: [ContactRequest, customer’s, support, back, issue, API, version, 45.0, later]
---

# ContactRequest

> Represents a customer’s request for support to get back to them about
			an issue. This object is available in API version 45.0 and later.

# ContactRequest

Represents a customer’s request for support to get back to them about an issue. This object is available in API version 45.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Contact Request ID | id |  | 18 |  |  |
| IsCallback | Is Callback | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Contact Request Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreferredChannel | Preferred Channel | picklist |  | 40 |  |  |
| PreferredPhone | Preferred Phone Number | phone |  | 40 |  |  |
| RequestDescription | Request Description | textarea |  | 32000 |  |  |
| RequestReason | Request Reason | picklist |  | 40 |  |  |
| Status | Request Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WhatId | Related To ID | reference |  | 18 |  |  |
| WhoId | Requestor ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
