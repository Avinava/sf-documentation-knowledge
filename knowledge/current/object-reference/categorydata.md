---
title: "CategoryData"
domain: object-reference
topic: categorydata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.366Z
estimatedTokens: 446
keywords: [CategoryData, logical, grouping, Solution, records, Calls, Special, Access, Rules, Usage]
---

# CategoryData

> Represents a logical grouping of Solution records.

# CategoryData

Represents a logical grouping of Solution records.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| CategoryNodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the CategoryNode associated with the solution. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| RelatedSobjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the solution related to the category. |

## Usage

This object allows you to assign one or more categories to a Solution. It is an intermediate data table with two foreign keys that defines the relationship between a CategoryNode and a Solution record.

CategoryData has two foreign keys:

-   The first foreign key, CategoryNodeId, refers to the ID of a CategoryNode.
-   The other foreign key, RelatedSobjectId, refers to a Solution ID.

This is a many-to-many relationship, so there can be multiple rows returned with a CategoryNodeId. A Solution can be associated with multiple categories.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
