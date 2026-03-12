---
title: "WebLink"
domain: sfFieldRef
topic: weblink
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:17.139Z
estimatedTokens: 526
namespace: NamespacePrefix
keywords: [WebLink, custom, link, URL, Scontrol]
---

# WebLink

> Represents a custom link to a URL or Scontrol.

**Namespace:** `NamespacePrefix`

# WebLink

Represents a custom link to a URL or Scontrol.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WebLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_weblink.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DisplayType | Display Type | picklist |  | 40 |  |  |
| EncodingKey | Link Encoding | picklist |  | 40 |  |  |
| HasMenubar | Show Menu Bar | boolean |  |  |  |  |
| HasScrollbars | Show Scrollbars | boolean |  |  |  |  |
| HasToolbar | Show Toolbars | boolean |  |  |  |  |
| Height | Height (in pixels) | int | 9 |  |  |  |
| Id | Custom Button or Link ID | id |  | 18 |  |  |
| IsProtected | Protected Component | boolean |  |  |  |  |
| IsResizable | Resizeable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkType | Content Source | picklist |  | 40 |  |  |
| MasterLabel | Label | string |  | 240 |  |  |
| Name | Name | string |  | 240 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OpenType | Behavior | picklist |  | 40 |  |  |
| PageOrSobjectType | Page or sObject Type Name | picklist |  | 40 |  |  |
| Position | Window Position | picklist |  | 40 |  |  |
| RequireRowSelection | Require Row Selection | boolean |  |  |  |  |
| ScontrolId | Custom S-Control ID | reference |  | 18 |  |  |
| ShowsLocation | Show Address Bar | boolean |  |  |  |  |
| ShowsStatus | Show Status Bar | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Url | URL | textarea |  | 1048576 |  |  |
| Width | Width (in pixels) | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
