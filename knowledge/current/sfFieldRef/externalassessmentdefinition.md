---
title: "ExternalAssessmentDefinition"
domain: sfFieldRef
topic: externalassessmentdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.773Z
estimatedTokens: 386
keywords: [ExternalAssessmentDefinition, Stores, external, assessments, API, version, 60.0, later]
---

# ExternalAssessmentDefinition

> Stores information about external assessments. This object is available
      in API version 60.0 and later.

# ExternalAssessmentDefinition

Stores information about external assessments. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ExternalAssessmentDefinition in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentCategory | Assessment Category | picklist |  | 40 |  |  |
| AssessmentContentVersion | Assessment Content Version | string |  | 100 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomAssessmentDisclaimer | Custom Assessment Disclaimer | textarea |  | 5000 |  |  |
| ExternalIdentifier | External Identifier | string |  | 100 |  |  |
| Id | External Assessment Definition ID | id |  | 18 |  |  |
| IsCustomAssessment | Custom Assessment | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SourceSystemName | Source System Name | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
