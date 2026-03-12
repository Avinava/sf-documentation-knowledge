---
title: "CustomHelpMenuItem"
domain: object-reference
topic: customhelpmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:07.682Z
estimatedTokens: 360
keywords: [CustomHelpMenuItem, items, Lightning, Experience, help, menu, admin, added, display, custom, org-specific, resources, API, version, 44.0]
---

# CustomHelpMenuItem

> Represents the items within a section of the Lightning Experience
         help menu that the admin added to display custom, org-specific help resources. This
      object is available in API version 44.0 and later.

# CustomHelpMenuItem

Represents the items within a section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources. This object is available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Packaging Considerations

Although you can package custom Help Menu section information, the section won't appear in the Help Menu Setup page or the Help Menu user interface of orgs where the package is installed. Instead, customers must view the data in the CustomHelpMenuItem and CustomHelpMenuSection objects and then manually add resources on the Help Menu Setup page.

## Fields

| Field | Details |
| --- | --- |
| LinkUrl | TypeurlPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The URL for the resource. Specify up to 1,000 characters. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the resource. Specify up to 100 characters. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the custom help section the item belongs to.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCustomHelpMenuSection |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The order of the item within the custom section. Valid values are 1 through 15. |
