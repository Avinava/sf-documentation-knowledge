---
title: "CartDeliveryGroupMethod"
domain: sfFieldRef
topic: cartdeliverygroupmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:52.556Z
estimatedTokens: 554
keywords: [CartDeliveryGroupMethod, selected, delivery, cart, group, Lightning, B2B, Commerce, checkout, API, version, 49.0, later]
---

# CartDeliveryGroupMethod

> Represents the selected delivery method for a cart delivery group used in
      Lightning B2B Commerce checkout. This object is available in API version 49.0 and
    later.

# CartDeliveryGroupMethod

Represents the selected delivery method for a cart delivery group used in Lightning B2B Commerce checkout. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartDeliveryGroupMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroupmethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedShippingFee | Adjusted Shipping Fee | currency |  |  | 18 | 2 |
| Carrier | Carrier | picklist |  | 40 |  |  |
| CartCheckoutSessionId | Cart Checkout Session ID | reference |  | 18 |  |  |
| CartDeliveryGroupId | Cart Delivery Group ID | reference |  | 18 |  |  |
| ClassOfService | Class Of Service | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalProvider | External Provider | string |  | 255 |  |  |
| Id | Cart Delivery Group Method ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProcessTime | Order Processing Time | int | 9 |  |  |  |
| ProcessTimeUnit | Unit of Order Processing Time | picklist |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ReferenceNumber | Reference Number | string |  | 255 |  |  |
| ShippingFee | Shipping Fee | currency |  |  | 18 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment Amount | currency |  |  | 18 | 0 |
| TransitTimeMax | Maximum Transit Time | int | 9 |  |  |  |
| TransitTimeMin | Minimum Transit Time | int | 9 |  |  |  |
| TransitTimeUnit | Unit of Transit Time | picklist |  | 255 |  |  |
| WebCartId | Cart ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
