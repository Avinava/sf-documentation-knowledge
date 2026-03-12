---
title: "InfoAuthRequestForm"
domain: sfFieldRef
topic: infoauthrequestform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.103Z
estimatedTokens: 413
keywords: [InfoAuthRequestForm, Tracks, individual, Authorization, Form, Texts, belong, consent, GDPR, privacy, policy, document, mortgage, loan, rate]
---

# InfoAuthRequestForm

> Tracks the individual Authorization Form Texts that belong to an
         Authorization Request. For example, consent on GDPR privacy policy document and consent on
         mortgage loan rate lock fee document. This object is available in API version 52.0 and
      later.

# InfoAuthRequestForm

Tracks the individual Authorization Form Texts that belong to an Authorization Request. For example, consent on GDPR privacy policy document and consent on mortgage loan rate lock fee document. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InfoAuthRequestForm in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationFormTextId | Authorization Form Text ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Info Authorization Request Form ID | id |  | 18 |  |  |
| InfoAuthorizationRequestId | Info Authorization Request ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LatestAuthFormConsentId | Latest Authorization Form Consent ID | reference |  | 18 |  |  |
| LatestResponseDateTime | Latest Response Date Time | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ResponseStatus | Response Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
