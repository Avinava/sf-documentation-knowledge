---
title: "CaseTeamTemplateRecord"
domain: sfFieldRef
topic: caseteamtemplaterecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.783Z
estimatedTokens: 287
keywords: [CaseTeamTemplateRecord, linking, Case, CaseTeamTemplate, objects, assign, predefined, team, customer, inquiry, record, point, ParentId, TeamTemplateId]
---

# CaseTeamTemplateRecord

> The CaseTeamTemplateRecord object is a linking object
    between the Case and CaseTeamTemplate objects. To assign a predefined case team to a case
    (customer inquiry), create a CaseTeamTemplateRecord record and point the
     ParentId to the case and the TeamTemplateId to the
    predefined case team.

# CaseTeamTemplateRecord

The CaseTeamTemplateRecord object is a linking object between the Case and CaseTeamTemplate objects. To assign a predefined case team to a case (customer inquiry), create a CaseTeamTemplateRecord record and point the ParentId to the case and the TeamTemplateId to the predefined case team.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CaseTeamTemplateRecord](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_caseteamtemplaterecord.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Predefined Team Record Id | id |  | 18 |  |  |
| ParentId | Case ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TeamTemplateId | Team Template ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
