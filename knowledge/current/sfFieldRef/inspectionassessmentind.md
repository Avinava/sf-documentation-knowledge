---
title: "InspectionAssessmentInd"
domain: sfFieldRef
topic: inspectionassessmentind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.279Z
estimatedTokens: 455
keywords: [InspectionAssessmentInd, assessment, indicators, recorded, inspection, API, version, 49.0, later]
---

# InspectionAssessmentInd

> Represents the assessment indicators recorded during an inspection. This object is available in API version 49.0 and later.

# InspectionAssessmentInd

Represents the assessment indicators recorded during an inspection. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InspectionAssessmentInd in the Emergency Response Management Object Reference and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentIndDefinitionId | Assessment Indicator Definition ID | reference |  | 18 |  |  |
| AssessmentTaskId | Assessment Task ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateTimeFieldResponse | Date Time Field Response | datetime |  |  |  |  |
| DecimalFieldResponse | Decimal Field Response | double |  |  | 18 | 5 |
| DisplayOrder | Display Order | int | 9 |  |  |  |
| Id | Inspection Assessment Indicator ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NumberFieldResponse | Number Field Response | int | 9 |  |  |  |
| PercentageFieldResponse | Percentage Field Response | percent |  |  | 5 | 2 |
| Result | Assessment Question Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TextFieldResponse | Text Field Response | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
