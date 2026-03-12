---
title: "PrivacyJobSession"
domain: sfFieldRef
topic: privacyjobsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.744Z
estimatedTokens: 689
keywords: [PrivacyJobSession, status, past, ongoing, scheduled, policy, jobs, Privacy, Center, API, version, 59.0, later]
---

# PrivacyJobSession

> Represents the status of past, ongoing, and scheduled policy jobs in Privacy
         Center. This object is available in API version 59.0 and later.

# PrivacyJobSession

Represents the status of past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PrivacyJobSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_privacyjobsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreationDate | Creation Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentObject | Current Object | string |  | 128 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| FailureLog | Failure Log | textarea |  | 131072 |  |  |
| Id | Privacy Job Session ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPreview | Preview | boolean |  |  |  |  |
| JobManagementType | Job Management Type | picklist |  | 255 |  |  |
| JobPolicyName | Job Policy Name | string |  | 255 |  |  |
| JobStartType | Job Start Type | picklist |  | 255 |  |  |
| JobStatus | Job Status | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OptionsAcknowledged | Acknowledged | boolean |  |  |  |  |
| OptionsErrorBypassOccurred | ErrorBypassOccurred | boolean |  |  |  |  |
| OptionsPreview | Preview | boolean |  |  |  |  |
| OptionsProcessingFailed | ProcessingFailed | boolean |  |  |  |  |
| OptionsTopLevelErrorBypass | TopLevelErrorBypass | boolean |  |  |  |  |
| OptionsTraversalComplete | TraversalComplete | boolean |  |  |  |  |
| OptionsTraversalFailed | TraversalFailed | boolean |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PermissionSet | Permission Set | string |  | 255 |  |  |
| PolicyDescription | Policy Description | string |  | 255 |  |  |
| PolicyName | Policy Name | string |  | 255 |  |  |
| PolicyType | Policy Type | picklist |  | 255 |  |  |
| PrivacyPolicyDefinitionId | Privacy Policy Definition ID | reference |  | 18 |  |  |
| PrivacyRtbfRequestId | Privacy RTBF Request ID | reference |  | 18 |  |  |
| ScheduledTime | Scheduled Time | datetime |  |  |  |  |
| SerializedPolicy | Serialized Policy | textarea |  | 131072 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
