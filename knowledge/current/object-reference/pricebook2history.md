---
title: "Pricebook2History"
domain: object-reference
topic: pricebook2history
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.025Z
estimatedTokens: 603
keywords: [Pricebook2History, historical, changes, made, standard, associated, Pricebook2, any, custom, history, tracking, enabled, API, version, 66.0]
---

# Pricebook2History

> Represents historical information
    about changes that have been made to the standard fields of the associated Pricebook2, or to any
    custom fields with history tracking enabled.
  This object is available in API version 66.0 and later.

# Pricebook2History

Represents historical information about changes that have been made to the standard fields of the associated Pricebook2, or to any custom fields with history tracking enabled. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

This object is always read-only.

## Fields

| Field | Details |
| --- | --- |
| Pricebook2Id | TypereferencePropertiesFilter, Group, SortDescriptionID of the Pricebook2 associated with this record.This is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the price book field that was modified, or a special value to indicate some other modification to the price book. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). This is a standard system field. Label is Deleted. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the modified price book field. Maximum of 255 characters. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionPrevious value of the modified price book field. Maximum of 255 characters. |

## Usage

Price book history entries are indirectly created each time a price book is modified.

Two rows are added to this record when foreign key fields change. One row contains the foreign key object names that display in the online application. For example, Jane Doe is recorded as the name of a Contact. The other row contains the actual foreign key ID that is only returned to and visible from the API.

This object respects field level security on the parent object.

#### See Also

-   [Pricebook2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm "Represents a price book that contains the list of products that your org sells.")

## Related Topics

- Pricebook2 (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm)
