---
title: "Obligation"
domain: sfFieldRef
topic: obligation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.050Z
estimatedTokens: 499
keywords: [Obligation, parties, fulfill, agreed, conditions, contractual, commitments, commitment, assists, strategy, achieve, desired, outcome, timeframe, reduce]
---

# Obligation

> Represents an obligation between parties to fulfill agreed
         conditions, such as contractual commitments. The obligation commitment assists with a
      strategy to achieve the desired outcome within a set timeframe and reduce risk with compliance
      tracking. For example, payment due dates, contract terms, renewals. This object is available
      in API version 59.0 and later.

# Obligation

Represents an obligation between parties to fulfill agreed conditions, such as contractual commitments. The obligation commitment assists with a strategy to achieve the desired outcome within a set timeframe and reduce risk with compliance tracking. For example, payment due dates, contract terms, renewals. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Obligation in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssigneeUserId | User ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 5000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Obligation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherPartyAccountId | Account ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Party | Party | picklist |  | 255 |  |  |
| ReferenceContractId | Contract ID | reference |  | 18 |  |  |
| ReferenceObjectId | Reference Object ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| State | State | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusChangeReason | Status Change Reason | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
