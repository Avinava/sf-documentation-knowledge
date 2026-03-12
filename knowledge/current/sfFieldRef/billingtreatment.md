---
title: "BillingTreatment"
domain: sfFieldRef
topic: billingtreatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.041Z
estimatedTokens: 485
keywords: [BillingTreatment, how, Subscription, Management, bills, order, item, Exclude, Billing, whether, invoiced, Child, treatment, items, control]
---

# BillingTreatment

> Defines how Subscription Management bills an order item. The Exclude From
         Billing field controls whether the order item is invoiced. Child billing treatment items
         control how much of the order item's balance is invoiced for each invoice across the
         subscription's lifecycle. Billing treatments are assigned to order items based on the
         parent billing policy's Billing Treatment Selection field. This object is available in
      API version 55.0 and later.

# BillingTreatment

Defines how Subscription Management bills an order item. The Exclude From Billing field controls whether the order item is invoiced. Child billing treatment items control how much of the order item's balance is invoiced for each invoice across the subscription's lifecycle. Billing treatments are assigned to order items based on the parent billing policy's Billing Treatment Selection field. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingTreatment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingtreatment.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingPolicyId | Billing Policy ID | reference |  | 18 |  |  |
| CanChangeBillingFrequency | Change Billing Frequency | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExcludeFromBilling | Exclude From Billing | picklist |  | 255 |  |  |
| Id | Billing Treatment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| Name | Billing Treatment Name | string |  | 255 |  |  |
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
