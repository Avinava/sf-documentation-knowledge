---
title: "BillingAccountContact"
domain: eu-developer-guide
topic: billingaccountcontact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.144Z
estimatedTokens: 342
keywords: [BillingAccountContact, junction, Billing, Account, objects, Contact, API, version, 62.0, later, Calls]
---

# BillingAccountContact

> Represents a junction between Billing Account objects and Contact
         objects. This object is available in API version 62.0 and later.

# BillingAccountContact

Represents a junction between Billing Account objects and Contact objects. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BillingAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Billing Account associated with the Contact.This field is a relationship field.Relationship NameBillingAccountRefers ToBillingAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact associated with the Billing Account.This field is a relationship field.Relationship NameContactRefers ToContact |
| RelationshipEndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the relationship between the Contact and Billing Account ends. |
| RelationshipStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship between Contact and Billing Account starts. |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the role of the Contact associated with the Billing Account.Possible values are:Authorised PartyInterested Party |
