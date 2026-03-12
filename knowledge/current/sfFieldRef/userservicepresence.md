---
title: "UserServicePresence"
domain: sfFieldRef
topic: userservicepresence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.444Z
estimatedTokens: 479
keywords: [UserServicePresence, presence, user’s, real-time, status, API, version, 32.0, later]
---

# UserServicePresence

> Represents a presence user’s real-time presence status. This
		object is available in API version 32.0 and later.

# UserServicePresence

Represents a presence user’s real-time presence status. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserServicePresence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userservicepresence.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AtCapacityDuration | At Capacity Duration | int | 9 |  |  |  |
| AverageCapacity | Average Capacity | double |  |  | 10 | 2 |
| ConfiguredCapacity | Configured Capacity | int | 9 |  |  |  |
| ConfiguredInterruptCapacity | Configured Interruptible Capacity | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | User Presence ID | id |  | 18 |  |  |
| IdleDuration | Idle Duration | int | 9 |  |  |  |
| IsAway | Is Away | boolean |  |  |  |  |
| IsCurrentState | Is Current State | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServicePresenceStatusId | Service Presence Status ID | reference |  | 18 |  |  |
| StatusDuration | Status Duration | int | 9 |  |  |  |
| StatusEndDate | Status End Date | datetime |  |  |  |  |
| StatusStartDate | Status Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
