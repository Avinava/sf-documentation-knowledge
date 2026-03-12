---
title: "SalesWorkQueueSettings"
domain: sfFieldRef
topic: salesworkqueuesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.907Z
estimatedTokens: 362
keywords: [SalesWorkQueueSettings, settings, customize, work, queue, options, third-party, scoring, custom, number, person, accounts, contacts, leads, Sales]
---

# SalesWorkQueueSettings

> Represents settings used to customize work queue options for
         third-party scoring. Third-party scoring enables custom number fields on person accounts,
         contacts, and leads. You must be a Sales Engagement customer to update this object.
         Previously, you could only use the Einstein Intelligence Score for third-party scoring.

# SalesWorkQueueSettings

Represents settings used to customize work queue options for third-party scoring. Third-party scoring enables custom number fields on person accounts, contacts, and leads. You must be a Sales Engagement customer to update this object. Previously, you could only use the Einstein Intelligence Score for third-party scoring.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SalesWorkQueueSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_SalesWorkQueueSettings.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeatureName | Feature Name | string |  | 75 |  |  |
| Id | SalesWorkQueueSettings ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEntity | Custom Object Definition ID | picklist |  | 255 |  |  |
| TargetField | Custom Field Definition ID | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
