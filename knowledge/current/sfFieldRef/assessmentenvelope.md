---
title: "AssessmentEnvelope"
domain: sfFieldRef
topic: assessmentenvelope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.147Z
estimatedTokens: 438
keywords: [AssessmentEnvelope, envelope, assessments, user, patient, caregiver, depression, anxiety, API, version, 58.0, later]
---

# AssessmentEnvelope

> Represents information about an envelope that contains the assessments
         related to a user. For example, you can create an envelope that contains assessments for a
         patient or a caregiver related to depression or anxiety. This object is available in
      API version 58.0 and later.

# AssessmentEnvelope

Represents information about an envelope that contains the assessments related to a user. For example, you can create an envelope that contains assessments for a patient or a caregiver related to depression or anxiety. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentEnvelope in the Education Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpirationDateTime | Envelope Expiration Date | datetime |  |  |  |  |
| Id | Assessment Envelope ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Envelope Name | string |  | 255 |  |  |
| NotificationStatus | Notification Status | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RequestReferenceId | Request Reference ID | reference |  | 18 |  |  |
| Status | Envelope Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
