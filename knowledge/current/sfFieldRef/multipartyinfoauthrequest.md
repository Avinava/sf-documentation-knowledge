---
title: "MultipartyInfoAuthRequest"
domain: sfFieldRef
topic: multipartyinfoauthrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.487Z
estimatedTokens: 394
keywords: [MultipartyInfoAuthRequest, Tracks, multiple, parties, authorization, Data, Purpose, consent, requests, share, documents, open, joint, financial, account]
---

# MultipartyInfoAuthRequest

> Tracks a request for multiple parties of authorization on a Data Use Purpose.
         For example, consent requests to share the required documents to open a joint financial
         account or share mortgage disclosures to loan applicants (borrower + co-borrower).
      This object is available in API version 53.0 and later.

# MultipartyInfoAuthRequest

Tracks a request for multiple parties of authorization on a Data Use Purpose. For example, consent requests to share the required documents to open a joint financial account or share mortgage disclosures to loan applicants (borrower + co-borrower). This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MultipartyInfoAuthRequest in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationType | Authorization Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataUsePurposeId | Data Use Purpose ID | reference |  | 18 |  |  |
| Id | Multiparty Information Authorization Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ResponseStatus | Response Status | picklist |  | 255 |  |  |
| SourceRecordId | Source Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
