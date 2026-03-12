---
title: "Dashboard"
domain: sfFieldRef
topic: dashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.395Z
estimatedTokens: 604
namespace: NamespacePrefix
keywords: [Dashboard, data, custom, reports, visual, components, Access, read-only, API, version, 20.0, later]
---

# Dashboard

> Represents a dashboard, which shows data from custom reports as visual
			components. Access is read-only. This object is available in API version 20.0 and
		later.

**Namespace:** `NamespacePrefix`

# Dashboard

Represents a dashboard, which shows data from custom reports as visual components. Access is read-only. This object is available in API version 20.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Dashboard](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dashboard.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BackgroundDirection | Background Fade Direction | picklist |  | 40 |  |  |
| BackgroundEnd | Ending Color | int | 9 |  |  |  |
| BackgroundStart | Starting Color | int | 9 |  |  |  |
| ChartTheme | Chart Background | picklist |  | 40 |  |  |
| ColorPalette | Color Palette | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DashboardResultRefreshedDate | Last refreshed for this user | string |  | 256 |  |  |
| DashboardResultRunningUser | Running as | string |  | 256 |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Dashboard Unique Name | string |  | 80 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| FolderName | Folder Name | string |  | 256 |  |  |
| Id | Dashboard ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeftSize | Left Size | picklist |  | 40 |  |  |
| MiddleSize | Middle Size | picklist |  | 40 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RightSize | Right Size | picklist |  | 40 |  |  |
| RunningUserId | Running User ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TextColor | Text Color | int | 9 |  |  |  |
| Title | Title | string |  | 80 |  |  |
| TitleColor | Title Color | int | 9 |  |  |  |
| TitleSize | Title Size | int | 9 |  |  |  |
| Type | Dashboard Running User | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
