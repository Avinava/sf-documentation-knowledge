---
title: "DigitalVerification"
domain: sfFieldRef
topic: digitalverification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.165Z
estimatedTokens: 489
keywords: [DigitalVerification, Stores, verification, record, API, version, 60.0, later]
---

# DigitalVerification

> Stores information about the verification of a related record. This
      object is available in API version 60.0 and later.

# DigitalVerification

Stores information about the verification of a related record. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DigitalVerification in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comment | Comment | textarea |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DesignatedVerifierId | Designated Verifier ID | reference |  | 18 |  |  |
| Id | Digital Verification ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentReferenceRecordId | ParentReferenceRecord ID | reference |  | 18 |  |  |
| PostVerificationMessage | Post-Verification Message | textarea |  | 4000 |  |  |
| PreVerificationMessage | Pre-Verification Message | textarea |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationDateTime | Verification Date | datetime |  |  |  |  |
| VerificationRequestDateTime | Verification Request Date | datetime |  |  |  |  |
| VerificationSite | Verification Site ID | textarea |  | 4000 |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |
| VerificationStatusCategory | Verification Status Category | picklist |  | 255 |  |  |
| VerifiedById | Verified By ID | reference |  | 18 |  |  |
| VerifierOrder | Verifier Order | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
