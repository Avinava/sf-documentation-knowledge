---
title: "WaveAutoInstallRequest"
domain: sfFieldRef
topic: waveautoinstallrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.090Z
estimatedTokens: 450
keywords: [WaveAutoInstallRequest, access, concrete, CRM, Analytics, auto-install, tracks, progress, applications, created, templates, automated, process, user, API]
---

# WaveAutoInstallRequest

> Provides access to the concrete object that represents a CRM Analytics
      auto-install request. The auto-install request tracks the progress of CRM Analytics
      applications created from CRM Analytics templates by the automated process user. This
    object is available in API version 38.0 and later.

# WaveAutoInstallRequest

Provides access to the concrete object that represents a CRM Analytics auto-install request. The auto-install request tracks the progress of CRM Analytics applications created from CRM Analytics templates by the automated process user. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WaveAutoInstallRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_waveautoinstallrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Configuration | Configuration | textarea |  | 100000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FailedReason | Failed Reason | picklist |  | 255 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| Id | Request Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Request Name | string |  | 255 |  |  |
| RequestLog | Request Log | textarea |  | 100000 |  |  |
| RequestStatus | Request Status | picklist |  | 255 |  |  |
| RequestType | Request Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateApiName | Wave Template API Name | string |  | 255 |  |  |
| TemplateVersion | Wave Template Version | string |  | 50 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
