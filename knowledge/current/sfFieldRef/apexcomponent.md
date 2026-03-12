---
title: "ApexComponent"
domain: sfFieldRef
topic: apexcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.193Z
estimatedTokens: 362
namespace: NamespacePrefix
keywords: [ApexComponent, definition, custom, component, Visualforce, alongside, standard, components, <apex, relatedList>, dataTable>]
---

# ApexComponent

> Represents a definition for a custom component that can be used in a
   Visualforce page alongside standard components such as <apex:relatedList> and <apex:dataTable>.

**Namespace:** `NamespacePrefix`

# ApexComponent

Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList> and <apex:dataTable>.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexComponent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | Api Version | double |  |  | 18 | 1 |
| ControllerKey | Controller Key | string |  | 255 |  |  |
| ControllerType | Controller Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| Id | Visualforce Component ID | id |  | 18 |  |  |
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
