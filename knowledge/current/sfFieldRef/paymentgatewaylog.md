---
title: "PaymentGatewayLog"
domain: sfFieldRef
topic: paymentgatewaylog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.252Z
estimatedTokens: 642
keywords: [PaymentGatewayLog, Stores, exchanged, Salesforce, payments, platform, external, payment, gateways, Gateway, logs, record, payloads, entities, API]
---

# PaymentGatewayLog

> Stores information exchanged between the Salesforce payments platform and
      external payment gateways. Gateway logs can also record payloads from external payment
      entities. This object is available in API version 48.0 and later.

# PaymentGatewayLog

Stores information exchanged between the Salesforce payments platform and external payment gateways. Gateway logs can also record payloads from external payment entities. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentGatewayLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentgatewaylog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| GatewayAuthCode | Gateway Auth Code | string |  | 64 |  |  |
| GatewayAvsCode | Gateway Avs Code | string |  | 64 |  |  |
| GatewayDate | Gateway Date | datetime |  |  |  |  |
| GatewayMessage | Gateway Message | string |  | 255 |  |  |
| GatewayRefNumber | Gateway Reference Number | string |  | 255 |  |  |
| GatewayResultCode | Gateway Result Code | string |  | 64 |  |  |
| GatewayResultCodeDescription | Gateway Result Code Description | string |  | 255 |  |  |
| Id | Payment Gateway Log ID | id |  | 18 |  |  |
| InteractionStatus | Status | picklist |  | 255 |  |  |
| InteractionType | Interaction Type | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsNotification | Is Notification | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PaymentGatewayId | Payment Gateway ID | reference |  | 18 |  |  |
| PaymentGatewayLogNumber | Payment Gateway Log Number | string |  | 255 |  |  |
| ReferencedEntityId | Referenced Entity ID | reference |  | 18 |  |  |
| Request | Request | textarea |  | 131072 |  |  |
| Response | Response | textarea |  | 131072 |  |  |
| RetryCategory | Retry Category | picklist |  | 255 |  |  |
| RetryDecision | Retry Decision | picklist |  | 255 |  |  |
| SfRefNumber | Salesforce Reference Number | string |  | 255 |  |  |
| SfResultCode | Salesforce Result Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
