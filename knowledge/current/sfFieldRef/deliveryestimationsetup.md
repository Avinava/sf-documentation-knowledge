---
title: "DeliveryEstimationSetup"
domain: sfFieldRef
topic: deliveryestimationsetup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:56.035Z
estimatedTokens: 565
keywords: [DeliveryEstimationSetup, configuration, options, commerce, delivery, service, offered, web, store, sales, channel, Includes, settings, location, group]
---

# DeliveryEstimationSetup

> Shows the configuration options for the commerce delivery service
      offered through a web store or sales channel. Includes settings such as delivery location
      group, channel, fulfillment types, and default fulfillment time. This object is available
    in API version 61.0 and later.

# DeliveryEstimationSetup

Shows the configuration options for the commerce delivery service offered through a web store or sales channel. Includes settings such as delivery location group, channel, fulfillment types, and default fulfillment time. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DeliveryEstimationSetup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_deliveryestimationsetup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChannelId | Channel ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultBusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| DefaultPickupTime | Default Pickup Time | time |  |  |  |  |
| DefaultProcessingTime | Default Processing Time | int | 9 |  |  |  |
| DefaultProcessingTimeUnit | Default Processing Time Unit | picklist |  | 255 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| Id | Delivery Estimation Setup ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Is Enabled | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastSyncedById | User ID | reference |  | 18 |  |  |
| LastSyncedDate | Last Synced Date | datetime |  |  |  |  |
| LastSyncedMessage | Last Synced Message | textarea |  | 10000 |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationGroupId | Location Group ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceRegion | Service Region | string |  | 256 |  |  |
| SyncStatus | Sync Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
