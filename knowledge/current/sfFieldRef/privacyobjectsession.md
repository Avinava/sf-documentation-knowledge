---
title: "PrivacyObjectSession"
domain: sfFieldRef
topic: privacyobjectsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.758Z
estimatedTokens: 571
keywords: [PrivacyObjectSession, status, processed, past, ongoing, scheduled, policy, jobs, Privacy, Center, API, version, 59.0, later]
---

# PrivacyObjectSession

> Represents the status of each object being processed in past, ongoing, and
         scheduled policy jobs in Privacy Center. This object is available in API version 59.0
      and later.

# PrivacyObjectSession

Represents the status of each object being processed in past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PrivacyObjectSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_privacyobjectsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentEntity | Current Entity | string |  | 128 |  |  |
| Id | Privacy Object Session ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ObjectFailureLog | Object Failure Log | textarea |  | 32000 |  |  |
| ObjectStatus | Object Status | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PolicyNode | Policy Node | string |  | 128 |  |  |
| Position | Position | int | 9 |  |  |  |
| PrivacyJobSessionObjectId | Privacy Job Session ID | reference |  | 18 |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| ProcessedFailures | Processed Failures | int | 9 |  |  |  |
| ProcessedSuccesses | Processed Successes | int | 9 |  |  |  |
| ProcessedTotal | Processed Total | int | 9 |  |  |  |
| Processor | Processor | string |  | 128 |  |  |
| Queue | Queue | string |  | 128 |  |  |
| QueueLength | Queue Length | int | 9 |  |  |  |
| RecordsAffected | Records Affected | int | 9 |  |  |  |
| Retry | Retry | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TraversalEndTime | Traversal End Time | datetime |  |  |  |  |
| TraversalStartTime | Traversal Start Time | datetime |  |  |  |  |
| UniqueConstraint | Unique Constraint | string |  | 128 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
