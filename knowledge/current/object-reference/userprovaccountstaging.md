---
title: "UserProvAccountStaging"
domain: object-reference
topic: userprovaccountstaging
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.938Z
estimatedTokens: 1074
keywords: [UserProvAccountStaging, Temporarily, stores, user, account, completes, Provisioning, Wizard, stored, UserProvAccount, click, button, collect, analyze, accounts]
---

# UserProvAccountStaging

> Temporarily stores user account information while a user completes the
			User Provisioning Wizard. This information that is stored in the UserProvAccount object
			when you click the button to collect and analyze accounts on the target
		system.

# UserProvAccountStaging

Temporarily stores user account information while a user completes the User Provisioning Wizard. This information that is stored in the UserProvAccount object when you click the button to collect and analyze accounts on the target system.

User provisioning links a Salesforce user account with an account in a third-party (target) system. To configure user provisioning, you use a User Provisioning Wizard that guides you through the setup process. As you enter values about account details in the wizard, these values are stored in this object until you click the button to collect and analyze accounts on the target system. The general user provisioning configuration details are stored in the UserProvisioningConfig object.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ConnectedAppId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe 15 character connected app ID.This is a relationship field.Relationship NameConnectedAppRelationship TypeLookupRefers ToConnectedApplication |
| ExternalEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address as stored in the target system for the associated user account. |
| ExternalFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name as stored in the target system for the associated user account. |
| ExternalLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name as stored in the target system for the associated user account. |
| ExternalUserId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the user as stored in the target system. |
| ExternalUsername | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe username as stored in the target system for the associated user account. |
| LinkState | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the current connection between the user account in the Salesforce organization and the associated user account in the target system. The valid values are:linked— a user account matches one in the target system.duplicate— an associated account in the target system exists.orphaned—no associated account exists in the target system.ignored— changes to the account in the Salesforce organization have no effect on the associated user account in the target system. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name for this object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user ID of the owner of this object—typically a Salesforce administrator. |
| SalesforceUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID for the user account in the Salesforce organization that is associated with the user account in the target system.This is a relationship field.Relationship NameSalesforceUserRelationship TypeLookupRefers ToUser |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the account in the target system. The valid values are:ActiveDeactivatedDeleted |

## Usage

When committing fields from a UserProvAccountStaging to a UserProvAccount object, Salesforce looks up the UserProvAccount record where UserProvAccountStaging.ExternalUserId = UserProvAccount.ExternalUserId.

-   If an ExternalUserId doesn't match an existing account, Salesforce creates a UserProvAccount record based on the UserProvAccountStaging record.
-   If an ExternalUserId matches, then Salesforce checks the UserProvAccount.isKnownLink value, and does the following.
    -   If UserProvAccount.IsKnownLink = true, Salesforce copies the UserProvAccountStaging values to the UserProvAccount object, except for the ExternalUserId and LinkState values.
    -   If UserProvAccount.IsKnownLink = false, Salesforce copies all of the UserProvAccountStaging values to the UserProvAccount object.
