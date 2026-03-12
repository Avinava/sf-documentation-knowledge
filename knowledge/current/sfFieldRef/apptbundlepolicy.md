---
title: "ApptBundlePolicy"
domain: sfFieldRef
topic: apptbundlepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.012Z
estimatedTokens: 549
keywords: [ApptBundlePolicy, Policy, how, bundling, service, appointments, handled, API, version, 54.0, later]
---

# ApptBundlePolicy

> Policy that defines how the bundling of service appointments should be
         handled. This object is available in API version 54.0 and later.

# ApptBundlePolicy

Policy that defines how the bundling of service appointments should be handled. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApptBundlePolicy](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apptbundlepolicy.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BundleEndTimeFieldName | Bundle End Time Field Name | picklist |  | 255 |  |  |
| BundleStartTimeFieldName | Bundle Start Time Field Name | picklist |  | 255 |  |  |
| CanAllowSchleDepndInBundle | Allow Scheduling Dependencies in Bundle | boolean |  |  |  |  |
| ConstantTimeValue | Constant Time Value | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| Id | Appointment Bundle Policy ID | id |  | 18 |  |  |
| IsAutomaticBundling | Automatic Bundling | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManualBundling | Manual Bundling | boolean |  |  |  |  |
| IsTimeCalcByBundleDurationFld | Time Calculation by Bundle Duration Field | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitAmountOfBundleMembers | Limit Amount of Bundle Members | int | 3 |  |  |  |
| LimitDurationOfBundle | Limit Duration of Bundle | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
