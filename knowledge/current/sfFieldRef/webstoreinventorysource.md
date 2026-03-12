---
title: "WebStoreInventorySource"
domain: sfFieldRef
topic: webstoreinventorysource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.169Z
estimatedTokens: 499
keywords: [WebStoreInventorySource, configure, inventory, source, webstore, API, version, 57.0, later]
---

# WebStoreInventorySource

> Used to configure the inventory source for a webstore. This object is
      available in API version 57.0 and later.

# WebStoreInventorySource

Used to configure the inventory source for a webstore. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WebStoreInventorySource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_webstoreinventorysource.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DoesAllowGuestInventoryLevel | Allows guest user access to inventory level. | boolean |  |  |  |  |
| Id | Web Store Inventory Source ID | id |  | 18 |  |  |
| InventoryCacheTtl | Inventory Cache Time To Live (Seconds). | int | 9 |  |  |  |
| InventoryDimension | Inventory Dimension | picklist |  | 255 |  |  |
| IsBopisEnabled | BOPIS Enabled | boolean |  |  |  |  |
| IsChkInvOnActiveCartEnabled | Check Inventory on Products For an Active Cart. | boolean |  |  |  |  |
| IsDefault | Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationSourceExtRef | Location Source External Reference | string |  | 255 |  |  |
| LocationSourceId | Location Source ID | reference |  | 18 |  |  |
| Name | Web Store Inventory Source Name | string |  | 255 |  |  |
| ReservationDurationInSeconds | Reservation Duration (Seconds) | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WebStoreId | Store ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
