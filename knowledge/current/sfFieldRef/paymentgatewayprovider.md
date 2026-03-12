---
title: "PaymentGatewayProvider"
domain: sfFieldRef
topic: paymentgatewayprovider
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:07.259Z
estimatedTokens: 384
namespace: NamespacePrefix
keywords: [PaymentGatewayProvider, Setup, entity, payment, gateways, connection, gateway, Apex, adapter, API, version, 48.0, later]
---

# PaymentGatewayProvider

> Setup entity for payment gateways. Defines the connection to a payment gateway
      Apex adapter. This object is available in API version 48.0 and later.

**Namespace:** `NamespacePrefix`

# PaymentGatewayProvider

Setup entity for payment gateways. Defines the connection to a payment gateway Apex adapter. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentGatewayProvider](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentgatewayprovider.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexAdapterId | Class ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 255 |  |  |
| Id | Payment Gateway Provider ID | id |  | 18 |  |  |
| IdempotencySupported | Idempotency Supported | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
