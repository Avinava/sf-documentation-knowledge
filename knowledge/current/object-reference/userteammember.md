---
title: "UserTeamMember"
domain: object-reference
topic: userteammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.032Z
estimatedTokens: 490
keywords: [UserTeamMember, User, opportunity, team, another, Calls, Special, Access, Rules, Usage]
---

# UserTeamMember

> Represents a single User on the
   default opportunity team of another User.

# UserTeamMember

Represents a single User on the default opportunity team of another User.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   This object is available only in organizations that have enabled the team selling functionality.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Restricted picklist, UpdateDescriptionRequired. Level of access that the team member has to opportunities for which the user has added his or her default opportunity team. The possible values are:ReadEditThis field must be set to an access level that is higher than the organization’s default access level for opportunities. |
| OwnerId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the User who owns the default opportunity team. This field can’t be updated. |
| TeamMemberRole | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionRole that the team member has on opportunities for which the User has added his or her default opportunity team. The valid values are set by the organization’s administrator in the Opportunity Team Roles picklist. Label is Team Role. |
| UserId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the User who is a member of the default opportunity team. This field can’t be updated. |

## Usage

If you attempt to create a record that matches an existing record, the create request updates any modified fields and returns the existing record.

Users can set up their default opportunity team to include other users that typically work with them on opportunities.

#### See Also

-   [OpportunityTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityteammember.htm "Represents a User on the opportunity team of an Opportunity.")

## Related Topics

- OpportunityTeamMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityteammember.htm)
