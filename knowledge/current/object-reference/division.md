---
title: "Division"
domain: object-reference
topic: division
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.185Z
estimatedTokens: 791
keywords: [Division, logical, segment, organization's, data, company, organized, different, business, units, unit, “North, America, “Healthcare, “Consulting.”]
---

# Division

> A logical segment of your organization's data. For example, if your
   company is organized into different business units, you could create a division for each business
   unit, such as “North America,” “Healthcare,” or
   “Consulting.” Available only if the organization has the Division permission
   enabled.

# Division

A logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Divisions must be enabled for your organization to access this object. To discover whether divisions have been enabled for an organization, inspect the User or Group object for the DefaultDivision field—if it is present, then divisions have been enabled, and this field (the field is named Division in objects other than User and Group) will be available in all relevant objects.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the division is active (true) or not (false). Label is Active. |
| IsGlobalDivision | TypebooleanPropertiesDefaulted on createFilterDescriptionIndicates whether the division is your organization’s global default division (true) or not (false). Label is Global Division. |
| Name | TypestringPropertiesCreate, Filter, UpdateDescriptionA descriptive name for the division. Limit: 80 characters. |
| SortOrder | TypeintPropertiesCreate, Filter, Nillable, UpdateDescriptionThe order in which this division name appears in the Division picklist field when creating or editing users in the Salesforce user interface. |

## Usage

The values available for that field are the global division ID for the organization, created when divisions are first enabled, and any other division IDs that have been created. The division ID associated with a user is populated in the objects owned or created by the user.

You can use the division ID to make searches, reports, and list views run more quickly and return more relevant results if an organization has very large data sets. For more information, see the Salesforce online help, in the Fields description for the object.

You can use WITH in SOSL to pre-filter results based on division. This is faster than specifying the division in a WHERE clause.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The User object has a Division field that is unrelated to this object. The Division field is a standard text field similar to Company or Department that has no special properties. Do not confuse it with the DefaultDivision field, which does relate to this object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
