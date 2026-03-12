---
title: "AccountContactRelation"
domain: object-reference
topic: accountcontactrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.592Z
estimatedTokens: 1056
keywords: [AccountContactRelation, relationship, contact, accounts, Calls, Usage, Associated, Objects]
---

# AccountContactRelation

> Represents a relationship between a contact and one or more
			accounts.

# AccountContactRelation

Represents a relationship between a contact and one or more accounts.

This object is available in API version 37.0. The AccountContactRelation object supports person accounts. That means that a person account can be either a related contact on a business account or a related account on a contact. A person account can also be related to another person account as either a related contact or related account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccountContactRelationshipCurrency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the account that is related to the contact. Field can't be modified when updating existing account-contact relationship records. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the contact that is related to the account. Field can't be modified when updating existing account-contact relationship records. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date a relationship between a contact and account ended. Use with the Start Date to keep a history of the relationship. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether relationship is active (true) or not (false). |
| IsDirect | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the account associated with the contact is the contact's primary account (true) or not (false). |
| Roles | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe contact’s participating role in the account. Values are Business User, Decision Maker, Economic Buyer, Economic Decision Maker, Evaluator, Executive Sponsor, Influencer, Technical Buyer, and Other. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date a relationship between a contact and account began. Use with the End Date to keep a history of the relationship. |

## Usage

Use this object to associate a single contact record to multiple account records so you can easily track the relationships between the people and businesses they work with.

When you insert a non-private contact in your org that associates a contact to multiple accounts, an AccountContactRelation is created and its validation rules, database insertion, and triggers are executed immediately after the contact is saved to the database. When you change a contact's primary account, an AccountContactRelation may be created or edited, and the AccountContactRelation validation rules, database changes, and triggers are executed immediately after the contact is saved to the database. See [Order of Execution](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm).

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountContactRelationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

## Related Topics

- AccountContactRelationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
