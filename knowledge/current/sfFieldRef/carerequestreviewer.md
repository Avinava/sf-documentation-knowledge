---
title: "CareRequestReviewer"
domain: sfFieldRef
topic: carerequestreviewer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.382Z
estimatedTokens: 430
keywords: [CareRequestReviewer, care, reviewer, including, status, end, review, reviewer’s, notes, date, item, drug, diagnosis, associated]
---

# CareRequestReviewer

> Represents the details of a care request reviewer including name, reviewer
         type, status of the care request at the end of the review, the reviewer’s notes, and date
         of review. A care request, care request item, care request drug, or care diagnosis can be
         associated with a care request reviewer.

# CareRequestReviewer

Represents the details of a care request reviewer including name, reviewer type, status of the care request at the end of the review, the reviewer’s notes, and date of review. A care request, care request item, care request drug, or care diagnosis can be associated with a care request reviewer.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRequestReviewer in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| CareRequestReferenceId | Care Request Reference ID | reference |  | 18 |  |  |
| ContentDocumentId | ContentDocument ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Care Request Reviewer ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Care Request Reviewer Name | string |  | 255 |  |  |
| ReviewDate | Review Date | datetime |  |  |  |  |
| ReviewerId | Reviewer ID | reference |  | 18 |  |  |
| ReviewerNotes | Reviewer Notes | textarea |  | 32000 |  |  |
| ReviewerType | Reviewer Type | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
