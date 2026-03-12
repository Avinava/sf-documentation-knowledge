---
title: "ChangeRequest"
domain: sfFieldRef
topic: changerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.824Z
estimatedTokens: 592
keywords: [ChangeRequest, decision, implement, formal, change, RFC, API, version, 53.0, later]
---

# ChangeRequest

> Represents a decision to implement a formal request for a change (RFC).
      This object is available in API version 53.0 and later.

# ChangeRequest

Represents a decision to implement a formal request for a change (RFC). This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ChangeRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_changerequest.htm "HTML (New Window)") in the Agentforce IT Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessJustification | Business Justification | textarea |  | 32000 |  |  |
| BusinessReason | Business Reason | picklist |  | 40 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| ChangeRequestNumber | Change Request Number | string |  | 255 |  |  |
| ChangeType | Type of Change | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created On | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EstimatedEndTime | End Time (Estimated) | datetime |  |  |  |  |
| EstimatedStartTime | Start Time (Estimated) | datetime |  |  |  |  |
| FinalReviewDateTime | Reviewed On | datetime |  |  |  |  |
| FinalReviewNotes | Final Review Notes | textarea |  | 32000 |  |  |
| Id | Change Request ID | id |  | 18 |  |  |
| Impact | Impact | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified On | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| RemediationPlan | Remediation Plan | textarea |  | 32000 |  |  |
| ReviewerId | Reviewer ID | reference |  | 18 |  |  |
| RiskImpactAnalysis | Impact Analysis | textarea |  | 32000 |  |  |
| RiskLevel | Risk Level | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
