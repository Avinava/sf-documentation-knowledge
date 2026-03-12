---
title: "Case"
domain: sfFieldRef
topic: case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.613Z
estimatedTokens: 701
keywords: [Case, customer, issue, problem]
---

# Case

> Represents a case, which is a customer issue or
		problem.

# Case

Represents a case, which is a customer issue or problem.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CaseNumber | Case Number | string |  | 30 |  |  |
| ClosedDate | Closed Date | datetime |  |  |  |  |
| Comments | Internal Comments | textarea |  | 4000 |  |  |
| ContactEmail | Contact Email | email |  | 80 |  |  |
| ContactFax | Contact Fax | phone |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContactMobile | Contact Mobile | phone |  | 40 |  |  |
| ContactPhone | Contact Phone | phone |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Case Currency | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EngineeringReqNumber__c | Engineering Req Number | string |  | 12 |  |  |
| Id | Case ID | id |  | 18 |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEscalated | Escalated | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MasterRecordId | Master Record ID | reference |  | 18 |  |  |
| Origin | Case Origin | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent Case ID | reference |  | 18 |  |  |
| PotentialLiability__c | Potential Liability | picklist |  | 255 |  |  |
| Priority | Priority | picklist |  | 255 |  |  |
| Product__c | Product | picklist |  | 255 |  |  |
| Reason | Case Reason | picklist |  | 255 |  |  |
| SLAViolation__c | SLA Violation | picklist |  | 255 |  |  |
| SourceId | Case Source ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SuppliedCompany | Company | string |  | 80 |  |  |
| SuppliedEmail | Email Address | email |  | 80 |  |  |
| SuppliedName | Name | string |  | 80 |  |  |
| SuppliedPhone | Phone | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Case Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
