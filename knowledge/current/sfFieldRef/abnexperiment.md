---
title: "AbnExperiment"
domain: sfFieldRef
topic: abnexperiment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.798Z
estimatedTokens: 672
keywords: [AbnExperiment, experiment, that's, Marketing, Cloud, content, Experience, websites, platform, automations, API, version, 63.0, later]
---

# AbnExperiment

> Represents an A/B/n experiment that's used with Marketing Cloud Next content,
         Experience Cloud websites, and platform automations. This object is available in API
      version 63.0 and later.

# AbnExperiment

Represents an A/B/n experiment that's used with Marketing Cloud Next content, Experience Cloud websites, and platform automations. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AbnExperiment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_abnexperiment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChanceToWinThreshold | Chance To Win Threshold | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Experiment API Name | string |  | 40 |  |  |
| Id | Experiment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRemote | Is Remote | boolean |  |  |  |  |
| LastAnalyzed | Last Analyzed | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumDurationInMinutes | Maximum Experiment Duration In Minutes | int | 9 |  |  |  |
| MinimumDurationInMinutes | Minimum Experiment Duration In Minutes | int | 9 |  |  |  |
| MinimumRequiredParticipants | Minimum Required Participants | int | 9 |  |  |  |
| Name | Experiment Name | string |  | 255 |  |  |
| PersonalizationSchemaEnum | Response Template Enum | picklist |  | 255 |  |  |
| PersonalizationSchemaId | Response Template ID | reference |  | 18 |  |  |
| PrimaryMetricId | Primary Metric ID | reference |  | 18 |  |  |
| ProfileDataGraphId | Data Graph ID | reference |  | 18 |  |  |
| ScheduleFrequencyInMinutes | Schedule Frequency In Minutes | int | 9 |  |  |  |
| Source | Source | picklist |  | 255 |  |  |
| SourceRecordId | Source Record ID | reference |  | 18 |  |  |
| StartedDate | Started Date | datetime |  |  |  |  |
| State | State | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StoppedDate | Stopped Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WinnerSelectionMode | Winner Selection Mode | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
