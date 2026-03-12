---
title: "AccountBillingAccount"
domain: eu-developer-guide
topic: accountbillingaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.066Z
estimatedTokens: 384
keywords: [AccountBillingAccount, junction, Account, objects, Billing, API, version, 62.0, later, Calls]
---

# AccountBillingAccount

> Represents a junction between Account objects and Billing Account
         objects. This object is available in API version 62.0 and later.

# AccountBillingAccount

Represents a junction between Account objects and Billing Account objects. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Account associated with the Billing Account.This field is a relationship field.Relationship NameAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| BillingAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Billing Account associated with the Account.This field is a relationship field.Relationship NameBillingAccountRefers ToBillingAccount |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship between the Account and Billing Account ends. |
| RelationshipType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the Account associated with the Billing Account.Possible values are:Authorised Party—Authorized PartyFinancially Responsible PartyInterested PartyThe default value is Financially Responsible Party. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship between Account and Billing Account starts. |
