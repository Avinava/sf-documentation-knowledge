---
title: "GeolocationBasedAction"
domain: sfFieldRef
topic: geolocationbasedaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.416Z
estimatedTokens: 480
keywords: [GeolocationBasedAction, geolocation-based, action, that’s, triggered, user, enters, exits, area, associated, API, version, 61.0, later]
---

# GeolocationBasedAction

> Represents a geolocation-based action, which is an action that’s
         triggered when a user enters, exits, or is within the area of the associated object.
      Available in API version 61.0 and later.

# GeolocationBasedAction

Represents a geolocation-based action, which is an action that’s triggered when a user enters, exits, or is within the area of the associated object. Available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [GeolocationBasedAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_geolocationbasedaction.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionData | Action Data | textarea |  | 32000 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Geolocation Based Action ID | id |  | 18 |  |  |
| InitialTimeInvoked | First Time Triggered | datetime |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastTimeInvoked | Last Time Triggered | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Radius | Radius (in meters) | int | 9 |  |  |  |
| ReferenceRecordId | Reference Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TriggerType | Trigger Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
