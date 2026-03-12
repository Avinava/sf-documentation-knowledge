---
title: "OpportunityTeamMember"
domain: object-reference
topic: opportunityteammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.638Z
estimatedTokens: 1042
keywords: [OpportunityTeamMember, User, opportunity, team, Calls, Usage, Associated, Objects]
---

# OpportunityTeamMember

> Represents a User on the opportunity team of an
  Opportunity.

# OpportunityTeamMember

Represents a User on the opportunity team of an Opportunity.

See also UserTeamMember, which represents a User who is on the default Opportunity team of another user.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted.NoteAn OpportunityTeamMember that is deleted isn’t moved to the Recycle Bin and can’t be undeleted, unless the record was cascade-deleted when deleting a related Opportunity. For directly deleted OpportunityTeamMember records, don't use the isDeleted field to detect deleted records in SOQL queries. Instead, use getDeleted(). |
| Name | TypestringPropertiesFilter, Nillable, SortDescriptionThe team member name. This read-only field is available in API version 30.0 and later. |
| OpportunityAccessLevel | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionOpportunity access level for this team member. Valid values:ReadEditAllThis field is supported in triggers, but not in workflows or validation rules. It’s editable in API version 36.0 and later. |
| OpportunityId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the Opportunity associated with this opportunity team. This field can’t be updated. |
| PhotoURL | TypeURLPropertiesFilter, Nillable, Sort, GroupDescriptionRead only. Retrieves the users Chatter photo URL. This field is available in API version 32.0 and later. |
| TeamMemberRole | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionRole that the team member has on the opportunity. The org’s admin sets the valid values in the Opportunity Team Roles picklist. Label is Team Role. |
| Title | TypestringPropertiesFilter, Nillable, Sort, GroupDescriptionRead only. Retrieves the user’s title. This field is available in API version 36.0 and later. |
| UserId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the User who is a member of the opportunity team. This field can’t be updated. |

## Usage

If you create a record for this object and the OpportunityId and UserId combination matches an existing record, the system updates any modified fields and returns the existing record.

In the user interface, users can set up an opportunity team for the opportunities they own. The opportunity team includes other users that are working on the opportunity with them. This object is available only in organizations that have enabled team selling.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The behavior for changing ownership of opportunities is different using the user interface when the previous owner is on an opportunity team. For example, when you change the owner of an opportunity using the API, the previous owner's access becomes Read Only or the access specified in your organization-wide default for opportunities, whichever is greater. However, performing this same action in the user interface allows you to select the access level for the previous owner when the previous owner is on an opportunity team.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunityTeamMemberHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 59.0)

History is available for tracked fields of the object.

#### See Also

-   [UserTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userteammember.htm "Represents a single User on the default opportunity team of another User.")

## Related Topics

- OpportunityTeamMemberHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- UserTeamMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userteammember.htm)
