---
title: "AuthFormRequestRecord"
domain: sfFieldRef
topic: authformrequestrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.168Z
estimatedTokens: 385
keywords: [AuthFormRequestRecord, Junction, Authorization, Salesforce, record, authorized, actual, financial, records, shared, third, parties, any, result, consent]
---

# AuthFormRequestRecord

> Junction between an Authorization Request and the Salesforce record that is
         being authorized. For example. the actual financial Salesforce records shared with third
         parties or any Salesforce record being shared as a result of the consent request. This
      object is available in API version 52.0 and later.

# AuthFormRequestRecord

Junction between an Authorization Request and the Salesforce record that is being authorized. For example. the actual financial Salesforce records shared with third parties or any Salesforce record being shared as a result of the consent request. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AuthFormRequestRecord in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Authorizable Form Request Record ID | id |  | 18 |  |  |
| InfoAuthRequestFormId | Info Auth Request Form ID | reference |  | 18 |  |  |
| InfoAuthorizationRequestId | Info Authorization Request ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
