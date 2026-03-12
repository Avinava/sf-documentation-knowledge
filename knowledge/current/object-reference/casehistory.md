---
title: "CaseHistory"
domain: object-reference
topic: casehistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.281Z
estimatedTokens: 686
keywords: [CaseHistory, historical, changes, made, associated, Case, Calls, Special, Access, Rules, Usage]
---

# CaseHistory

> Represents historical information about changes that have been made to
      the associated Case.

# CaseHistory

Represents historical information about changes that have been made to the associated Case.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

This object is always read-only.

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Case associated with this record.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the case field that was modified, or a special value to indicate some other modification to the case. The possible values, in addition to the case field names, are:ownerAssignment—The owner of the case was changed.ownerAccepted—A user took ownership of a case from a queue.ownerEscalated—The owner of the case was changed due to case escalation.external—A user made the case visible to customers in the Customer Self-Service Portal. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the modified case field. Maximum of 255 characters. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionPrevious value of the modified case field. Maximum of 255 characters. |

## Usage

Case history entries are indirectly created each time a case is modified.

Two rows are added to this record when foreign key fields change. One row contains the foreign key object names that display in the online application. For example, Jane Doe is recorded as the name of a Contact. The other row contains the actual foreign key ID that is only returned to and visible from the API.

This object respects field level security on the parent object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
