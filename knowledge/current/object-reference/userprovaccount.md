---
title: "UserProvAccount"
domain: object-reference
topic: userprovaccount
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.930Z
estimatedTokens: 1122
keywords: [UserProvAccount, links, Salesforce, user, account, third-party, target, system, Google, users, connected, apps, provisioning, enabled, API]
---

# UserProvAccount

> Represents information that links a Salesforce user account with an
      account in a third-party (target) system, such as Google, for users of connected apps with
      Salesforce user provisioning enabled. This object is available in API
        version 33.0 and later.

# UserProvAccount

Represents information that links a Salesforce user account with an account in a third-party (target) system, such as Google, for users of connected apps with Salesforce user provisioning enabled. This object is available in API version 33.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConnectedAppId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe 15 character application ID.This is a relationship field.Relationship NameConnectedAppRelationship TypeLookupRefers ToConnectedApplication |
| DeletedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the associated user account in the target system was deleted. This value is automatically updated during the provisioning and reconciling processes. |
| ExternalEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address as stored in the target system for the associated user account. |
| ExternalFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name as stored in the target system for the associated user account. |
| ExternalLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name as stored in the target system for the associated user account. |
| ExternalUserId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the user as stored in the target system. |
| ExternalUsername | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe username as stored in the target system for the associated user account. |
| IsKnownLink | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSetting the IsKnownLink value to true implies the administrator or another user is managing the relationship between the Salesforce user account and the third-party user account, manually. This field helps Salesforce coordinate updates between the UserProvAccountStaging object and the UserProvAccount object while committing staged accounts. Typically, for a matching user account (the same ExternalUserId for both objects), Salesforce copies the values from the UserProvAccountStaging object to the UserProvAccount object.However, if Salesforce encounters a UserProvAccountStaging object with a matching ExternalUserId but different LinkState and SalesforceUserId values during this process, Salesforce checks the UserProvAccount IsKnownLink value. If the IsKnownLinkvalue is true, Salesforce doesn’t copy the LinkState and SalesforceUserId values from the UserProvAccountStaging object to the UserProvAccount object (all other values are copied).The default is false, meaning Salesforce manages the account relationship. |
| LinkState | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the current connection between the user account in the Salesforce organization and the associated user account in the target system. The valid values are:linked— changes to the account in the Salesforce organization are queued to be updated for the associated user account in the target system.duplicate— an associated account in the target system exists.orphaned—no associated account exists in the target system.ignored— changes to the account in the Salesforce organization have no effect on the associated user account in the target system. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name for this object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Namepointing, Sort, UpdateDescriptionThe user ID of the owner of this object—typically a Salesforce administrator. |
| SalesforceUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID for the user account in the Salesforce organization that is associated with the user account in the target system.This is a relationship field.Relationship NameSalesforceUserRelationship TypeLookupRefers ToUser |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the account in the target system. The valid values are:ActiveDeactivatedDeleted |
