---
title: "CartCheckoutSession"
domain: sfFieldRef
topic: cartcheckoutsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.533Z
estimatedTokens: 394
keywords: [CartCheckoutSession, checkout, session, Lightning, B2B, Commerce, API, version, 48.0, later]
---

# CartCheckoutSession

> Represents a checkout session used in Lightning B2B Commerce checkout.
    This object is available in API version 48.0 and later.

# CartCheckoutSession

Represents a checkout session used in Lightning B2B Commerce checkout. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartCheckoutSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartcheckoutsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BackgroundOperationId | Background Operation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Cart Checkout Session ID | id |  | 18 |  |  |
| IsArchived | Is Archived | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsError | Is Error | boolean |  |  |  |  |
| IsProcessing | Is Processing | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NextState | Next State | string |  | 30 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderReferenceNumber | Order Reference Number | string |  | 36 |  |  |
| State | State | string |  | 30 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WebCartId | Cart ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
