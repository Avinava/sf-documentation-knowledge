---
title: "HealthScore"
domain: sfFieldRef
topic: healthscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.174Z
estimatedTokens: 587
keywords: [HealthScore, subject’s, score, specific, category, API, version, 55.0, later]
---

# HealthScore

> Represents a subject’s score for a specific score category. This object
      is available in API version 55.0 and later.

# HealthScore

Represents a subject’s score for a specific score category. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthScore in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Age | Age | int | 9 |  |  |  |
| AgeBand | Age Band | picklist |  | 40 |  |  |
| AssessmentYear | Assessment Year | int | 9 |  |  |  |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| ConditionCategoryCount | Condition Category Count | int | 9 |  |  |  |
| ConditionCategoryList | Condition Category List | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentScore | Current Score | double |  |  | 10 | 4 |
| CurrentScoreDate | Current Score Date | datetime |  |  |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| HierCondCategoryCodeList | Hierarchical Condition Category Code List | textarea |  | 255 |  |  |
| Id | Health Score ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSubjectDisabled | Is Subject Disabled | boolean |  |  |  |  |
| IsSubjectInstitutionalized | Institutionalized Subject | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Health Score Name | string |  | 255 |  |  |
| PreviousScore | Previous Score | double |  |  | 10 | 4 |
| PreviousScoreDate | Previous Score Date | datetime |  |  |  |  |
| ScoreAndDate | Score and Date | string |  | 255 |  |  |
| ScoreCategoryId | Score Category ID | reference |  | 18 |  |  |
| ScoreChangePercent | Score Change Percent | percent |  |  | 5 | 2 |
| ScoredAccountId | Account ID | reference |  | 18 |  |  |
| ScoredContactId | Contact ID | reference |  | 18 |  |  |
| ScoredLeadId | Lead ID | reference |  | 18 |  |  |
| SubjectId | Subject ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
