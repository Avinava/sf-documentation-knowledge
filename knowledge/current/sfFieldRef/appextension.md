---
title: "AppExtension"
domain: sfFieldRef
topic: appextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.343Z
estimatedTokens: 391
keywords: [AppExtension, connection, Service, mobile, app, another, typically, passing, record, data, Salesforce, apps, API, version, 41.0]
---

# AppExtension

> Represents a connection between the Field Service mobile app
			and another app, typically for passing record data to the Salesforce mobile app or other
			apps. This object is available in API version 41.0 and later.

# AppExtension

Represents a connection between the Field Service mobile app and another app, typically for passing record data to the Salesforce mobile app or other apps. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppExtension](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appextension.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppExtensionLabel | Label | string |  | 255 |  |  |
| AppExtensionName | Name | string |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FieldServiceMobileSettingsId | Field Service Mobile Settings ID | reference |  | 18 |  |  |
| Id | App Extension ID | id |  | 18 |  |  |
| InstallationUrl | Installation URL | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LaunchValue | Launch Value | string |  | 255 |  |  |
| ScopedToObjectTypes | Scoped To Object Types | string |  | 255 |  |  |
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
