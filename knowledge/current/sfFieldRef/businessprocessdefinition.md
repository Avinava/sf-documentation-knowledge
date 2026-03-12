---
title: "BusinessProcessDefinition"
domain: sfFieldRef
topic: businessprocessdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:50.750Z
estimatedTokens: 300
keywords: [BusinessProcessDefinition, Setup, stores, stages, customer, lifecycle, map, associated, surveys, questions, created, Salesforce]
---

# BusinessProcessDefinition

> Setup object that stores information about stages in a customer lifecycle map.
      The stages are associated with surveys and questions created using Salesforce Surveys.

# BusinessProcessDefinition

Setup object that stores information about stages in a customer lifecycle map. The stages are associated with surveys and questions created using Salesforce Surveys.

For more information, see BusinessProcessDefinition in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessProcessGroupId | Business Process Group ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Object Name | string |  | 80 |  |  |
| Id | Business Process Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| ProcessDescription | Description | textarea |  | 4000 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
