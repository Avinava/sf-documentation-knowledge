---
title: "MessagingDeliveryError"
domain: sfFieldRef
topic: messagingdeliveryerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.206Z
estimatedTokens: 441
keywords: [MessagingDeliveryError, log, triggered, outbound, failures, verify, failed, API, version, 44.0, later]
---

# MessagingDeliveryError

> Represents a log of triggered outbound failures to verify when a
         triggered outbound has failed. This object is available in API version 44.0 and
      later.

# MessagingDeliveryError

Represents a log of triggered outbound failures to verify when a triggered outbound has failed. This object is available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingDeliveryError](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingdeliveryerror.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 36 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DestinationPhoneNumber | Recipient Phone | string |  | 64 |  |  |
| FailureReason | Error | textarea |  | 65536 |  |  |
| FlowEntity | Source Record ID | string |  | 18 |  |  |
| FullMessage | Message | textarea |  | 65536 |  |  |
| Id | Messaging Delivery Error ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| MessagingEndUserId | Messaging User ID | reference |  | 18 |  |  |
| MessagingTemplateId | Messaging Template ID | reference |  | 18 |  |  |
| Name | Messaging Delivery Error Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
