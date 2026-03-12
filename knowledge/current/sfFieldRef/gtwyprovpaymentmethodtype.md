---
title: "GtwyProvPaymentMethodType"
domain: sfFieldRef
topic: gtwyprovpaymentmethodtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:59.989Z
estimatedTokens: 472
namespace: NamespacePrefix
keywords: [GtwyProvPaymentMethodType, gateway, provider, payment, integrators, providers, choose, active, receive, order's, data, rather, allowing, Salesforce, Order]
---

# GtwyProvPaymentMethodType

> The gateway provider payment method type allows integrators and payment
      providers to choose an active payment to receive an order's payment data rather than allowing
      the Salesforce Order Management platform to select a default payment method. This object
    is available in API version 50.0 and later.

**Namespace:** `NamespacePrefix`

# GtwyProvPaymentMethodType

The gateway provider payment method type allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [GtwyProvPaymentMethodType](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_gtwyprovpaymentmethodtype.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 255 |  |  |
| GtwyProviderPaymentMethodType | Gateway Provider Payment Method Type | string |  | 60 |  |  |
| Id | Gateway Provider Payment Method Type ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PaymentGatewayProviderId | Payment Gateway Provider ID | reference |  | 18 |  |  |
| PaymentMethodType | Payment Method Type | picklist |  | 255 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
