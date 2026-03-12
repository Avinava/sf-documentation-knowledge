---
title: "AppMenuItem"
domain: sfFieldRef
topic: appmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.391Z
estimatedTokens: 789
namespace: NamespacePrefix
keywords: [AppMenuItem, organization’s, settings, items, app, menu, Launcher]
---

# AppMenuItem

> Represents the organization’s default settings for items in the app
			menu or App Launcher.

**Namespace:** `NamespacePrefix`

# AppMenuItem

Represents the organization’s default settings for items in the app menu or App Launcher.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appmenuitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationId | Application ID | reference |  | 18 |  |  |
| CanvasAccessMethod | The configured access method for the canvas application | picklist |  | 255 |  |  |
| CanvasEnabled | Is this a canvas-enabled application | boolean |  |  |  |  |
| CanvasOptions | The options to hide publisher header or publisher share button | string |  | 255 |  |  |
| CanvasReferenceId | The identifier used to render the canvas application. | string |  | 18 |  |  |
| CanvasSelectedLocations | The selected/supported locations of the canvas application | string |  | 255 |  |  |
| CanvasUrl | The canvas URL for the canvas application | url |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 250 |  |  |
| IconUrl | Icon URL | url |  | 255 |  |  |
| Id | AppMenuItem ID | id |  | 18 |  |  |
| InfoUrl | Info URL | url |  | 255 |  |  |
| IsAccessible | Is Accessible | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRegisteredDeviceOnly | App requires a registered mobile device | boolean |  |  |  |  |
| IsUsingAdminAuthorization | IsUsingAdminAuthorization | boolean |  |  |  |  |
| IsVisible | Is Visible | boolean |  |  |  |  |
| Label | Label | string |  | 250 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LogoUrl | Logo Image URL | url |  | 255 |  |  |
| MobileAppBinaryId | ID for the related mobile app binary | string |  | 255 |  |  |
| MobileAppInstallUrl | URL to install the mobile app | url |  | 255 |  |  |
| MobileAppInstalledDate | Date the mobile app was most recently installed | datetime |  |  |  |  |
| MobileAppInstalledVersion | Most recently installed version of the mobile app | string |  | 255 |  |  |
| MobileAppVer | Version of the mobile app | string |  | 255 |  |  |
| MobileDeviceType | Type of mobile device | string |  | 255 |  |  |
| MobileMinOsVer | Minimum required mobile device OS version | string |  | 255 |  |  |
| MobilePlatform | Mobile device OS platform | picklist |  | 255 |  |  |
| MobileStartUrl | Mobile Start URL | url |  | 255 |  |  |
| Name | Developer Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 80 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StartUrl | Start URL | url |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | App Type | picklist |  | 255 |  |  |
| UserSortOrder | User Sort Order | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
