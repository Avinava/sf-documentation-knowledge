---
title: "AbnExperimentCohort"
domain: sfFieldRef
topic: abnexperimentcohort
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.804Z
estimatedTokens: 396
keywords: [AbnExperimentCohort, audience, that's, participating, experiment, API, version, 63.0, later]
---

# AbnExperimentCohort

> Represents the specified audience that's participating in an A/B/n
         experiment. This object is available in API version 63.0 and later.

# AbnExperimentCohort

Represents the specified audience that's participating in an A/B/n experiment. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AbnExperimentCohort](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_abnexperimentcohort.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AbnExperimentId | Experiment ID | reference |  | 18 |  |  |
| AllocationWeight | Allocation Weight | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Experiment Cohort API Name | string |  | 80 |  |  |
| Id | Experiment Cohort ID | id |  | 18 |  |  |
| IsControl | Is Control | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFallThrough | Is Fall Through | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | ABn Experiment Cohort Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
