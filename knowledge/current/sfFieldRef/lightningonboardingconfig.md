---
title: "LightningOnboardingConfig"
domain: sfFieldRef
topic: lightningonboardingconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:02.303Z
estimatedTokens: 454
keywords: [LightningOnboardingConfig, feedback, provided, users, switch, Lightning, Experience, Salesforce, Classic, Admins, customize, question, how, frequently, form]
---

# LightningOnboardingConfig

> Represents the feedback provided when users switch from Lightning
         Experience to Salesforce Classic. Admins can customize the question, how frequently the
         form appears, and where the feedback is stored in Chatter from the Adoption Assistance page
         in Lightning Experience Setup. Available in API version 47.0 and later.

# LightningOnboardingConfig

Represents the feedback provided when users switch from Lightning Experience to Salesforce Classic. Admins can customize the question, how frequently the form appears, and where the feedback is stored in Chatter from the Adoption Assistance page in Lightning Experience Setup. Available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LightningOnboardingConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lightningonboardingconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CollaborationGroupId | Collaboration Group ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomQuestion | Custom Question | textarea |  | 1000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FeedbackFormDaysFrequency | Feedback Form Days Frequency | int | 9 |  |  |  |
| Id | Lightning Onboarding Config ID | id |  | 18 |  |  |
| IsCustom | Is Custom | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| PromptDelayTime | Prompt Delay Time | int | 9 |  |  |  |
| SendFeedbackToSalesforce | Send Feedback To Salesforce | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
