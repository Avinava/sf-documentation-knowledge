---
title: "AccountTeamMember"
domain: object-reference
topic: accountteammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.727Z
estimatedTokens: 1420
keywords: [AccountTeamMember, User, member, Account, team, Calls, Special, Access, Rules, Usage]
---

# AccountTeamMember

> Represents a User who is a member of an Account team.

# AccountTeamMember

Represents a User who is a member of an Account team.

See also UserAccountTeamMember, which represents a User who is on the default account team of another user.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   This object is available only for Enterprise, Unlimited, and Performance Edition users who have enabled the account team functionality.
-   Customer Portal users can't access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccountAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of access that the User has to the Account. The possible values are:ReadEditAllThis field must be set to an access level that is at least equal to the organization’s default Account access level. In addition, the users’s AccountAccessLevel, ContactAccessLevel, OpportunityAccessLevel, or CaseAccessLevel field must be set higher than the organization’s default access level. |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Account to which this user is a team member. Must be a valid account ID. |
| CaseAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of access that the User has to cases associated with the account. The possible values are:NoneReadEditThis field must be set to an access level that is at least equal to the organization’s default case access level. In addition, the users’s AccountAccessLevel, ContactAccessLevel, OpportunityAccessLevel, or CaseAccessLevel field must be set higher than the organization’s default access level. This field is available in API version 37.0 and later. |
| ContactAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of access that the User has to contacts associated with the account. The possible values are:NoneReadEditControlled By ParentThis field must be set to an access level that is at least equal to the organization’s default contact access level. In addition, the users’s AccountAccessLevel, ContactAccessLevel, OpportunityAccessLevel, or CaseAccessLevel field must be set higher than the organization’s default access level. If the org-wide default for contacts is set to Controlled By Parent, users can’t see or edit the Contact Access field. This field is available in API version 37.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesFilter, Restricted picklistDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted.NoteAn AccountTeamMember record that is deleted is not moved to the Recycle Bin. A deleted AccountTeamMember record can’t be undeleted unless the record was cascade-deleted when deleting a related Account. For directly deleted AccountTeamMember records, don’t use the isDeleted field to detect deleted records in SOQL queries or queryAll() calls.The getDeleted() call also doesn’t show deleted account team members unless the record was deleted from an account related list or the Developer Console. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of access that the User has to opportunities associated with the account. The possible values are:NoneReadEditThis field must be set to an access level that is at least equal to the organization’s default opportunity access level. In addition, the users’s AccountAccessLevel, ContactAccessLevel, OpportunityAccessLevel, or CaseAccessLevel field must be set higher than the organization’s default access level. This field is available in API version 37.0 and later. |
| PhotoURL | TypeURLPropertiesFilter, Nillable, Sort, GroupDescriptionRead only. Retrieves the users Chatter photo URL. This field is available in API version 37.0 and later. |
| TeamMemberRole | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionRole associated with this team member. One of the valid team member roles defined for your organization. Label is Team Role. |
| Title | TypestringPropertiesFilter, Nillable, Sort, GroupDescriptionRead only. Retrieves the user’s title. This field is available in API version 37.0 and later. |
| UserId | TypereferencePropertiesCreate, FilterDescriptionRequired. ID of the User who is a member of this account team. Must be a valid User ID. |

## Usage

Use this object to manage the team members of a particular Account and to specify team member roles for those users on that account.

If team members are added by a user with group-based access, those members are removed after an account’s owner is changed. This applies even if the **Keep account team** option is selected. A Salesforce admin, the account owner, or someone higher in the role hierarchy should add team members to keep team members related to the account.

If you use [SOQL statements to query all records in an organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm), the ALL ROWS keywords don’t query deleted account team member records.

#### See Also

-   [Account](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm "Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).")

## Related Topics

- Account (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)
