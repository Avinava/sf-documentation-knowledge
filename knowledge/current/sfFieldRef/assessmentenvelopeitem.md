---
title: "AssessmentEnvelopeItem"
domain: sfFieldRef
topic: assessmentenvelopeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.166Z
estimatedTokens: 380
keywords: [AssessmentEnvelopeItem, item, envelope, assessments, user, assessment, depression, anxiety, API, version, 58.0, later]
---

# AssessmentEnvelopeItem

> Represents information about an item in an envelope that contains the
         assessments related to a user. For example, you can create an item that contains an
         assessment for depression or anxiety. This object is available in API version 58.0 and
      later.

# AssessmentEnvelopeItem

Represents information about an item in an envelope that contains the assessments related to a user. For example, you can create an item that contains an assessment for depression or anxiety. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentEnvelopeItem in the Education Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentEnvelopeId | Assessment Envelope ID | reference |  | 18 |  |  |
| AssessmentId | Assessment ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Assessment Envelope Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Assessment Envelope Item Name | string |  | 255 |  |  |
| OmniProcessId | Omni Process ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
