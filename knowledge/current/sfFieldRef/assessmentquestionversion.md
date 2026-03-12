---
title: "AssessmentQuestionVersion"
domain: sfFieldRef
topic: assessmentquestionversion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:48.386Z
estimatedTokens: 514
keywords: [AssessmentQuestionVersion, Stores, question, versions, assessment, questions, API, version, 55.0, later]
---

# AssessmentQuestionVersion

> Stores the question versions for the assessment questions. This object
      is available in API version 55.0 and later.

# AssessmentQuestionVersion

Stores the question versions for the assessment questions. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentQuestionVersion in the Industries Common Resources Developer Guide and Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivationDateTime | Activation Date | datetime |  |  |  |  |
| AdditionalInformation | Additional Information | textarea |  | 32000 |  |  |
| AssessmentQuestionId | Assessment Question ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DeactivationDateTime | Deactivation Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExternalAsmtContentVersion | External Assessment Content Version | string |  | 255 |  |  |
| GuidanceInformation | Guidance Information | textarea |  | 131072 |  |  |
| HelpText | Help Text | string |  | 255 |  |  |
| Id | Assessment Question Version ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOptionSourceResponseValue | Option Source Response Value | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuestionText | Question Text | textarea |  | 1000 |  |  |
| ResponseValues | Response Values | textarea |  | 32000 |  |  |
| Status | Status | string |  | 10 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
