---
title: "Scontrol"
domain: sfFieldRef
topic: scontrol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.987Z
estimatedTokens: 391
namespace: NamespacePrefix
keywords: [Scontrol, custom, s-control, content, hosted, system, executed, client, application]
---

# Scontrol

> A custom s-control, which is custom content that is hosted by the
         system but executed by the client application.

**Namespace:** `NamespacePrefix`

# Scontrol

A custom s-control, which is custom content that is hosted by the system but executed by the client application.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Scontrol](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_scontrol.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Binary | Binary | base64 |  |  |  |  |
| BodyLength | Binary Length | int | 8 |  |  |  |
| ContentSource | Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | S-Control Name | string |  | 80 |  |  |
| EncodingKey | Encoding | picklist |  | 40 |  |  |
| Filename | Filename | string |  | 255 |  |  |
| HtmlWrapper | HTML Body | textarea |  | 1048576 |  |  |
| Id | Custom S-Control ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SupportsCaching | Prebuild In Page | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
