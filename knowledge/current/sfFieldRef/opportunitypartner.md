---
title: "OpportunityPartner"
domain: sfFieldRef
topic: opportunitypartner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.544Z
estimatedTokens: 355
keywords: [OpportunityPartner, partner, relationship, Account, Opportunity, record, created, automatically]
---

# OpportunityPartner

> This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.

# OpportunityPartner

This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OpportunityPartner](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountToId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Opportunity Partner ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| ReversePartnerId | Reverse Partner ID | reference |  | 18 |  |  |
| Role | Role | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
