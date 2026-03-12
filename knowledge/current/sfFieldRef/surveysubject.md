---
title: "SurveySubject"
domain: sfFieldRef
topic: surveysubject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.821Z
estimatedTokens: 319
keywords: [SurveySubject, relationship, survey, another, account, case]
---

# SurveySubject

> Represents a relationship between a survey and another object, such
			as an account or a case.

# SurveySubject

Represents a relationship between a survey and another object, such as an account or a case.

For more information, see SurveySubject in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Object Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Record Name | string |  | 255 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| SubjectEntityType | Related Object | picklist |  | 255 |  |  |
| SubjectId | Subject ID | reference |  | 18 |  |  |
| SurveyId | Survey ID | reference |  | 18 |  |  |
| SurveyInvitationId | Survey Invitation ID | reference |  | 18 |  |  |
| SurveyResponseId | Survey Response ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
