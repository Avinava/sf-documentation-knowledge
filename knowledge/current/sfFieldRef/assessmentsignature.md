---
title: "AssessmentSignature"
domain: sfFieldRef
topic: assessmentsignature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.430Z
estimatedTokens: 372
keywords: [AssessmentSignature, Stores, respondent’s, assessment, API, version, 57.0, later]
---

# AssessmentSignature

> Stores the respondent’s signature during an assessment. This object is
      available in API version 57.0 and later.

# AssessmentSignature

Stores the respondent’s signature during an assessment. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentSignature in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentId | Assessment ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DateTime | Date Time | datetime |  |  |  |  |
| DigitalSignatureId | Digital Signature ID | reference |  | 18 |  |  |
| Id | Assessment Signature ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniscriptIdentifier | Omniscript Identifier | string |  | 255 |  |  |
| Place | Place | string |  | 255 |  |  |
| SignedBy | Signed By | string |  | 255 |  |  |
| SignedInitial | Signed Initial | string |  | 255 |  |  |
| SigneeId | Signee ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
