---
title: "Problem"
domain: sfFieldRef
topic: problem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.803Z
estimatedTokens: 560
keywords: [Problem, Problems, represent, root, cause, data, incidents, documenting, history, detection, closure, API, version, 53.0, later]
---

# Problem

> Problems represent the root cause data of one or more incidents. This object
         contains all the details of a problem, documenting the history of the problem from
         detection to closure. This object is available in API version 53.0 and later.

# Problem

Problems represent the root cause data of one or more incidents. This object contains all the details of a problem, documenting the history of the problem from detection to closure. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Problem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_problem.htm "HTML (New Window)") in the Agentforce IT Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created On | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Problem ID | id |  | 18 |  |  |
| Impact | Impact | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified On | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentProblemId | Parent Problem ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| PriorityOverrideReason | Priority Override Reason | string |  | 255 |  |  |
| ProblemNumber | Problem Number | string |  | 255 |  |  |
| ResolutionDateTime | Resolution Date | datetime |  |  |  |  |
| ResolutionSummary | Resolution Summary | textarea |  | 32000 |  |  |
| ResolvedById | Resolved By ID | reference |  | 18 |  |  |
| RootCauseSummary | Root Cause Summary | textarea |  | 32000 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SubCategory | Subcategory | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Urgency | Urgency | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
