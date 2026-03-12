---
title: "Approval"
domain: object-reference
topic: approval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.731Z
estimatedTokens: 1108
keywords: [Approval, Contract, Calls, Special, Access, Rules, Usage]
---

# Approval

> Represents an approval request for a Contract.

# Approval

Represents an approval request for a Contract.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is read-only and is specific to approvals on the Contract object. It isn't equal to or involved in the approval processes represented by the ProcessInstance, which is more powerful.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ApproveComment | TypestringPropertiesFilter, Nillable, SortDescriptionText entered by the user when they approved or rejected this approval request. Required. Limit: 4,000 characters. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the User being asked to approve or reject the approval request. Must be a valid User ID. Required. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the Contract associated with this approval request. Must be a valid contract ID. |
| RequestComment | TypestringPropertiesFilter, Nillable, SortDescriptionText entered by the User who created the approval request. Optional. This field can't be updated after the Approval has been created. Limit: 4,000 characters. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Status of this approval request. One of the following picklist values:Pending—Specified only when the Approval request is created (create() call)Approved—Specified only when the Approval request is approved (update() call)Rejected—Specified when the Approval request is rejected (update() call) or when it is created (create() call) and immediately rejected for archival/historical purposes. |

## Usage

This object allows client applications to programmatically handle approval requests for a Contract. Initially, to request a Contract approval, a client application might create a new Approval request record, specifying the ParentId, OwnerId (user approving or rejecting the request), Status (Pending), and (optionally) RequestComment fields. Note that when a client application creates the first approval request, if the value of the Contract Status field is Draft, then the Approval Status for this record is automatically changed to In Approval Process (see ContractStatus for more information).

A client application might subsequently update an existing Approval request, specifying the Status (Approved or Rejected) and an ApproveComment (required); the RequestComment field can't be updated. Updating an Approval record (either to approve or reject) requires the client application to be logged in with “Approve Contract” permission. To update an Approval request, its Status must be Pending—a client application can't update an Approval that has already been Approved or Rejected. To re-submit an approval request for a given Contract, a client application must create a new, separate Approval record and repeat the approval process.

Once a Contract has been approved (not rejected), the Contract LastApprovedDate field is automatically updated, however the Contract Status field isn't updated, it keeps the value InApproval.

An approved Contract must be activated explicitly. Client applications can activate a Contract by setting the value in its Status field to Activated, or a User can activate a Contract via the Salesforce user interface.

A Contract can have multiple approval requests in various states (Pending, Approved, and Rejected). In addition, one User can have multiple approval requests associated with the same Contract.

Client applications can't explicitly deleteApproval records. Approval records are deleted automatically if the parent Contract is deleted.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
