---
title: "PendingServiceRoutingInteractionInfo"
domain: sfFieldRef
topic: pendingserviceroutinginteractioninfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.559Z
estimatedTokens: 435
keywords: [PendingServiceRoutingInteractionInfo, PendingServiceRouting, interaction, that’s, work, routed, agent, screen, pop, records, open, specific, channel, read-only, API]
---

# PendingServiceRoutingInteractionInfo

> Represents PendingServiceRouting interaction information that’s used when
         work is routed to an agent. For a screen pop, it specifies which records to open when work
         is routed to an agent from a specific channel. PendingServiceRoutingInteractionInfo is
      read-only. This object is available in API version 53.0 and later.

# PendingServiceRoutingInteractionInfo

Represents PendingServiceRouting interaction information that’s used when work is routed to an agent. For a screen pop, it specifies which records to open when work is routed to an agent from a specific channel. PendingServiceRoutingInteractionInfo is read-only. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PendingServiceRoutingInteractionInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pendingserviceroutinginteractioninfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Pending Service Routing Interaction Information ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFocused | Is Focused | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PendingServiceRoutingId | Pending Service Routing ID | reference |  | 18 |  |  |
| PrimaryRecordId | Primary Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetFlowName | Target Flow Name | string |  | 255 |  |  |
| TargetObjectId | Target Object ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
