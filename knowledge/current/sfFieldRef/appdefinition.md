---
title: "AppDefinition"
domain: sfFieldRef
topic: appdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.337Z
estimatedTokens: 507
namespace: NamespacePrefix
keywords: [AppDefinition, metadata, app, navigation, items, apps, current, user, access, API, version, 43.0, later]
---

# AppDefinition

> Represents the metadata of an app and its navigation items. Metadata is
			returned only for apps that the current user can access. This object is available
		in API version 43.0 and later.

**Namespace:** `NamespacePrefix`

# AppDefinition

Represents the metadata of an app and its navigation items. Metadata is returned only for apps that the current user can access. This object is available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appdefinition.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| HeaderColor | Header Color | string |  | 20 |  |  |
| Id | App Definition ID | id |  | 18 |  |  |
| IsLargeFormFactorSupported | Is Large Form Factor Supported | boolean |  |  |  |  |
| IsMediumFormFactorSupported | Is Medium Form Factor Supported | boolean |  |  |  |  |
| IsNavAutoTempTabsDisabled | Is Navigation Menu Automatically Create Temporary Tabs Disabled | boolean |  |  |  |  |
| IsNavPersonalizationDisabled | Is Navigation Menu Personalization Disabled | boolean |  |  |  |  |
| IsNavTabPersistenceDisabled | Is Clearing Workspace Tabs Enabled | boolean |  |  |  |  |
| IsOmniPinnedViewEnabled | Is Omni-Channel Sidebar Enabled | boolean |  |  |  |  |
| IsOverrideOrgTheme | Is Org Theme Overridden | boolean |  |  |  |  |
| IsSmallFormFactorSupported | Is Small Form Factor Supported | boolean |  |  |  |  |
| Label | Label | string |  | 1000 |  |  |
| LogoUrl | Logo URL | url |  | 255 |  |  |
| MasterLabel | Master Label | string |  | 40 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| NavType | Navigation Type | picklist |  | 255 |  |  |
| UiType | UI Type | picklist |  | 255 |  |  |
| UtilityBar | Utility Bar Name | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
