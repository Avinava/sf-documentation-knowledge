---
title: "ApptBundleConfig"
domain: sfFieldRef
topic: apptbundleconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.986Z
estimatedTokens: 561
keywords: [ApptBundleConfig, general, define, behavior, bundle, API, version, 54.0, later]
---

# ApptBundleConfig

> Represents the general parameters that define the behavior of the
         bundle. This object is available in API version 54.0 and later.

# ApptBundleConfig

Represents the general parameters that define the behavior of the bundle. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApptBundleConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apptbundleconfig.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AddToBundleStatuses | Add to Bundle Statuses | multipicklist |  | 4099 | 0 |  |
| BundleStatusesToPropagate | Bundle Statuses to Propagate | multipicklist |  | 4099 | 0 |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriteriaForAutoUnbundlingId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DoesAddTravelTime | Add travel time to bundle duration | boolean |  |  |  |  |
| DoesDeleteEmptyBundles | Delete empty bundles | boolean |  |  |  |  |
| EmptyBundleStatus | Empty Bundle Status | picklist |  | 40 |  |  |
| Id | Appointment Bundle Config ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberStatusesNotToPropagate | Bundle Member Statuses not to be Propagated | multipicklist |  | 4099 | 0 |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RemoveFromBundleStatuses | Remove from Bundle Statuses | multipicklist |  | 4099 | 0 |  |
| StatusOnRemovalFromBundle | Status on Removal from Bundle | picklist |  | 40 |  |  |
| StatusesNotToUpdateOnUnbundle | Statuses not to Update on Unbundling | multipicklist |  | 4099 | 0 |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
