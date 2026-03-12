---
title: "ChangeRequestRelatedIssue"
domain: sfFieldRef
topic: changerequestrelatedissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.841Z
estimatedTokens: 361
keywords: [ChangeRequestRelatedIssue, junction, relates, ChangeRequest, Incident, Problem, due, service, failure, API, version, 53.0, later]
---

# ChangeRequestRelatedIssue

> Represents a junction object that relates a ChangeRequest to an Incident or
         Problem due to a service failure. This object is available in API version 53.0 and
      later.

# ChangeRequestRelatedIssue

Represents a junction object that relates a ChangeRequest to an Incident or Problem due to a service failure. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ChangeRequestRelatedIssue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_changerequestrelatedissue.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeRequestId | Change Request ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Change Request Related Issue ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Change Request Related Issue Number | string |  | 255 |  |  |
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
