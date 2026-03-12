---
title: "CaseRelatedIssue"
domain: sfFieldRef
topic: caserelatedissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.702Z
estimatedTokens: 351
keywords: [CaseRelatedIssue, acts, junction, customer, issue, Case, Incident, Problem, associated, service, failure, API, version, 53.0, later]
---

# CaseRelatedIssue

> This object acts as a junction between a customer issue (Case) and the
         Incident or Problem that represents an associated service failure. This object is
      available in API version 53.0 and later.

# CaseRelatedIssue

This object acts as a junction between a customer issue (Case) and the Incident or Problem that represents an associated service failure. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CaseRelatedIssue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_caserelatedissue.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CaseId | Case ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Case Related Issue ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Case Related Issue Number | string |  | 255 |  |  |
| RelatedEntityType | Related Issue Type | picklist |  | 255 |  |  |
| RelatedIssueId | Related Issue ID | reference |  | 18 |  |  |
| RelationshipType | Relationship Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
