---
title: "SurveyEmailBranding"
domain: sfFieldRef
topic: surveyemailbranding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.739Z
estimatedTokens: 302
keywords: [SurveyEmailBranding, configuration, settings, invitation, emails, sent, survey, participants, particular]
---

# SurveyEmailBranding

> Represents the configuration settings for invitation emails sent to
			survey participants for a particular survey.

# SurveyEmailBranding

Represents the configuration settings for invitation emails sent to survey participants for a particular survey.

For more information, see SurveyEmailBranding in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Email Body | textarea |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FooterImageId | Asset File ID | reference |  | 18 |  |  |
| FromEmailAddress | Email From Address | email |  | 80 |  |  |
| HeaderImageId | Asset File ID | reference |  | 18 |  |  |
| Id | Survey Email Branding ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| Subject | Email Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
