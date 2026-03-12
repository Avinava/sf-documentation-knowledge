---
title: "OpportunityContactRole"
domain: object-reference
topic: opportunitycontactrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.505Z
estimatedTokens: 1182
keywords: [OpportunityContactRole, role, Contact, plays, Opportunity, Calls, Usage, Associated, Objects]
---

# OpportunityContactRole

> Represents the role that a Contact
   plays on an Opportunity.

# OpportunityContactRole

Represents the role that a Contact plays on an Opportunity.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of an associated Contact. The API applies user access rights to the associated Opportunity for this object, but not to the associated Contact. The API may return rows from a query on this object that include this field’s values for contacts to which the user does not have sufficient access rights. It may also return values for this field for contacts that have been deleted. In either case, the client must perform a query on the contact table for this field’s value to determine whether the Contact is accessible to the user and has not been deleted.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org. This field is available in API version 47.0. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). The IsDeleted flag is usable only when the parent record is deleted to the recycle bin, and not when the OpportunityContactRole record is deleted directly. Label is Deleted. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the associated Contact plays the primary role on the Opportunity (true) or not (false). Each Opportunity has only one primary contact. Label is Primary. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of an associated Opportunity. This field is non-nullable, and it cannot be updated. You must provide a value for this field when creating new records. You can’t change it after it has been created.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the role played by the associated Contact on the Opportunity, such as Business User or Decision Maker. |

## Usage

Use the Opportunity Contact Role object to manage information about contacts and roles related to opportunities. Records of this type appear in the user interface in the Opportunity Contact Role related list and on the Opportunity detail page.

Although allowed, we do not recommend that you create multiple relationships between the same Opportunity and a Contact.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunityContactRoleChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 45.0)

Change events are available for the object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- OpportunityContactRoleChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
