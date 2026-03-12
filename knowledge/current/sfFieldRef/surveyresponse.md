---
title: "SurveyResponse"
domain: sfFieldRef
topic: surveyresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.811Z
estimatedTokens: 446
keywords: [SurveyResponse, participant’s, survey, status, location, completed]
---

# SurveyResponse

> Represents information about a participant’s response to a survey,
			such as the status of the response, the participant’s location, and when the survey was
			completed.

# SurveyResponse

Represents information about a participant’s response to a survey, such as the status of the response, the participant’s location, and when the survey was completed.

For more information, see SurveyResponse in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletionDateTime | Response Completion Date and Time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Survey Response ID | id |  | 18 |  |  |
| InterviewGuid | Interview GUID | string |  | 255 |  |  |
| InterviewId | Interview ID | reference |  | 18 |  |  |
| InvitationId | Survey Invitation ID | reference |  | 18 |  |  |
| IpAddress | Response IP Address | string |  | 39 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Response Language | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Response Latitude | double |  |  | 18 | 15 |
| Location | Response Location | location | 0 | 0 | 0 | 0 |
| Longitude | Response Longitude | double |  |  | 18 | 15 |
| Name | Response Name | string |  | 255 |  |  |
| Status | Response Status | picklist |  | 255 |  |  |
| SubmitterId | Response Submitter ID | reference |  | 18 |  |  |
| SurveyId | Survey ID | reference |  | 18 |  |  |
| SurveyVersionId | Survey Version ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
