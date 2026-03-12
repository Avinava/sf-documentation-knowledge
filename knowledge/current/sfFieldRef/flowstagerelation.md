---
title: "FlowStageRelation"
domain: sfFieldRef
topic: flowstagerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.424Z
estimatedTokens: 393
keywords: [FlowStageRelation, relationship, paused, flow, interview, stages, Salesforce, creates, record, stage, that’s, $Flow.CurrentStage, $Flow.ActiveStages, variable, API]
---

# FlowStageRelation

> Represents a relationship between a paused flow interview and its stages. When
      a flow interview is paused, Salesforce creates a FlowStageRelation record for each stage
      that’s set to the $Flow.CurrentStage or $Flow.ActiveStages global variable. Available in API
    version 43.0 and later.

# FlowStageRelation

Represents a relationship between a paused flow interview and its stages. When a flow interview is paused, Salesforce creates a FlowStageRelation record for each stage that’s set to the $Flow.CurrentStage or $Flow.ActiveStages global variable. Available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowStageRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowstagerelation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FlexIndex | Flex Index | string |  | 255 |  |  |
| Id | Flow Interview Stage Relation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentId | Flow Interview ID | reference |  | 18 |  |  |
| StageLabel | Stage Label | string |  | 1000 |  |  |
| StageOrder | Stage Order | int | 9 |  |  |  |
| StageType | Stage Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
