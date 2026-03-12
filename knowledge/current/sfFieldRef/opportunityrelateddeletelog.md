---
title: "OpportunityRelatedDeleteLog"
domain: sfFieldRef
topic: opportunityrelateddeletelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.551Z
estimatedTokens: 401
keywords: [OpportunityRelatedDeleteLog, audit, log, deletion, opportunity-related, child, records, opportunity, team, members, product, splits, API, version, 59.0]
---

# OpportunityRelatedDeleteLog

> Represents an audit log of the deletion of opportunity-related child
         records, such as opportunity team members, product splits, or opportunity splits. This
      object is available in API version 59.0 and later.

# OpportunityRelatedDeleteLog

Represents an audit log of the deletion of opportunity-related child records, such as opportunity team members, product splits, or opportunity splits. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OpportunityRelatedDeleteLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunityrelateddeletelog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DeleteLog | Opportunity Related Delete Log Name | string |  | 255 |  |  |
| FieldName | Field Name | picklist |  | 255 |  |  |
| Id | Opportunity Related Delete Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| Parent | Parent | string |  | 18 |  |  |
| SobjectType | SobjectType | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | anyType |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
