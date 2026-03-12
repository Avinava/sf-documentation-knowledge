---
title: "AccountContactRole"
domain: object-reference
topic: accountcontactrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.599Z
estimatedTokens: 795
keywords: [AccountContactRole, role, Contact, plays, Account, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# AccountContactRole

> Represents the role that a Contact plays on an
  Account.

# AccountContactRole

Represents the role that a Contact plays on an Account.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Account.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the Contact associated with this account.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the Contact plays the primary role on the Account (true) or not (false). Note that each account has only one primary contact role. Label is Primary. Default value is false. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the role played by the Contact on this Account, such as Decision Maker, Approver, Buyer, and so on. Must be unique—there can't be multiple records in which the AccountId, ContactId, and Role values are identical. Different contacts can play the same role on the same account. A contact can play different roles on the same account. |

## Usage

Use this object to define the role that a Contact plays on a given Account within the context of a specific Opportunity.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountContactRoleChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

#### See Also

-   [Account](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm "Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).")

-   [Contact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm "Represents a contact, which is a person associated with an account.")

## Related Topics

- AccountContactRoleChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Account (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)
- Contact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm)
