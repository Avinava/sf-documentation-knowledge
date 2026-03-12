---
title: "ApexPage"
domain: sfFieldRef
topic: apexpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.218Z
estimatedTokens: 381
namespace: NamespacePrefix
keywords: [ApexPage, Visualforce]
---

# ApexPage

> Represents a single Visualforce page.

**Namespace:** `NamespacePrefix`

# ApexPage

Represents a single Visualforce page.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexPage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | Api Version | double |  |  | 18 | 1 |
| ControllerKey | Controller Key | string |  | 255 |  |  |
| ControllerType | Controller Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| Id | Visualforce Page ID | id |  | 18 |  |  |
| IsAvailableInTouch | Available for Lightning Experience, Experience Builder sites, and the mobile app | boolean |  |  |  |  |
| IsConfirmationTokenRequired | Require CSRF protection on GET requests | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Markup | Markup | textarea |  | 1048576 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| Name | Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
