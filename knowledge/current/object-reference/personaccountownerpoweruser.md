---
title: "PersonAccountOwnerPowerUser"
domain: object-reference
topic: personaccountownerpoweruser
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.823Z
estimatedTokens: 554
keywords: [PersonAccountOwnerPowerUser, user, own, customer, partner, portal, accounts, Person, account, owner, power, users, large, number, either]
---

# PersonAccountOwnerPowerUser

> Represents a user who can own more than 50,000 customer or partner portal
         accounts. Person account owner power users can own a large number of either customer or
         partner users. Their role can’t be changed and they must be at the root of the role
         hierarchy. Person account owner power user objects can't be created if deferred sharing is
         turned on for your org. Person account owner power user objects can be created while
         deferred sharing is turned off for an org. Deferred sharing can be turned back on after
         person account owner power user objects have been created. This object is available in
      API version 57.0 and later.

# PersonAccountOwnerPowerUser

Represents a user who can own more than 50,000 customer or partner portal accounts. Person account owner power users can own a large number of either customer or partner users. Their role can’t be changed and they must be at the root of the role hierarchy. Person account owner power user objects can't be created if deferred sharing is turned on for your org. Person account owner power user objects can be created while deferred sharing is turned off for an org. Deferred sharing can be turned back on after person account owner power user objects have been created. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Create a PersonAccountOwnerPowerUser object. Enter the user ID of the power user and the type of users that they can own, Customer Portal or Partner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Only users at the highest level of a hierarchy can be added to the PersonAccountOwnerPowerUser object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language that the user’s account is set to. The user is specified using the UserId field.See Salesforce Help for a full list of languages. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label entered when the person account owner power user is created. |
| PortalType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of portal user account that the person account owner power user can own.A possible value is:CustomerPortal—Customer Portal |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID associated with the person account owner power user.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
