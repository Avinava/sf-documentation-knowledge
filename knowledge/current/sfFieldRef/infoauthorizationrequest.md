---
title: "InfoAuthorizationRequest"
domain: sfFieldRef
topic: infoauthorizationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.125Z
estimatedTokens: 495
keywords: [InfoAuthorizationRequest, Tracks, authorization, Data, Purpose, consent, share, documents, open, financial, account, loan, rate, lock, disclosure]
---

# InfoAuthorizationRequest

> Tracks a request for authorization on a Data Use Purpose. For example,
         consent request to share the documents required to open a financial account and share loan
         rate lock disclosure to the external customer.  This object is available in API
      version 52.0 and later.

# InfoAuthorizationRequest

Tracks a request for authorization on a Data Use Purpose. For example, consent request to share the documents required to open a financial account and share loan rate lock disclosure to the external customer. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InfoAuthorizationRequest in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommunicationType | Communication Type | picklist |  | 255 |  |  |
| ConsenterId | Consenter ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataUsePurposeId | Data Use Purpose ID | reference |  | 18 |  |  |
| ExpirationDateTime | Expiration Date Time | datetime |  |  |  |  |
| Id | Info Authorization Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Locale | Locale | picklist |  | 255 |  |  |
| MultipartyInfoAuthRequestId | Multiparty Information Authorization Request ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PertainsToId | Pertains To ID | reference |  | 18 |  |  |
| RequestedDateTime | Requested Date Time | datetime |  |  |  |  |
| RequesterId | Requester ID | reference |  | 18 |  |  |
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
