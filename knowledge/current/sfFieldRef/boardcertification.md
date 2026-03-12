---
title: "BoardCertification"
domain: sfFieldRef
topic: boardcertification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.222Z
estimatedTokens: 515
keywords: [BoardCertification, practitioner's, board, certifications, board-certified, cardiology, cardiovascular, disease]
---

# BoardCertification

> Represents the practitioner's board certifications such as being
			board-certified in cardiology and cardiovascular disease.

# BoardCertification

Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BoardCertification in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BoardName | Board Name | string |  | 255 |  |  |
| CertificationType | Certification Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentCertificationDate | Current Certification Date | date |  |  |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Board Certification ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Board Certification Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TerminationDate | Termination Date | date |  |  |  |  |
| TerminationReason | Termination Reason | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
