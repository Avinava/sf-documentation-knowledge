---
title: "CategoryNode"
domain: object-reference
topic: categorynode
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.372Z
estimatedTokens: 399
keywords: [CategoryNode, tree, Solution, categories, Calls, Special, Access, Rules, Usage]
---

# CategoryNode

> Represents a tree of Solution categories.

# CategoryNode

Represents a tree of Solution categories.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Customer Portal users can't access this object.
-   Attempting to delete a CategoryNode that has children (referred by CategoryNode.Parent), or is referred to elsewhere, causes a failure.

## Fields

| Field | Details |
| --- | --- |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the category node. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent of this node, if any. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the sort order of child CategoryNode objects. |
| SortStyle | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the sort order is alphabetical or custom. |

## Usage

A CategoryNode defines a category of solutions. In the user interface, you can edit category definitions from Setup by entering Solution Categories in the Quick Find box, then selecting **Solution Categories**.

#### See Also

-   [CategoryData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorydata.htm "Represents a logical grouping of Solution records.")

-   [Solution](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solution.htm "Represents a detailed description of a customer issue and the resolution of that issue.")

## Related Topics

- CategoryData (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorydata.htm)
- Solution (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_solution.htm)
