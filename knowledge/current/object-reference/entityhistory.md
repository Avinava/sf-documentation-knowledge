---
title: "EntityHistory"
domain: object-reference
topic: entityhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.710Z
estimatedTokens: 704
keywords: [EntityHistory, historical, object’s, changed, users, “View, Data”, permission, unavailable, beginning, API, version, 8.0, object-specific, Historyobjects]
---

# EntityHistory

> Represents historical information about an object’s changed
   field values. This object is only available to users with the “View All
   Data” permission. This object is unavailable beginning with API version 8.0. Use the
   object-specific Historyobjects instead.

# EntityHistory

Represents historical information about an object’s changed field values. This object is only available to users with the “View All Data” permission. This object is unavailable beginning with API version 8.0. Use the object-specific [History](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.xml "HTML (New Window)")objects instead.

## Supported Calls

describeSObjects(), getUpdated(), getDeleted(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| FieldName | TypepicklistPropertiesFilter, Restricted picklistDescriptionID of the standard or custom field. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| NewValue | TypeanyTypePropertiesNillableDescriptionNew value of the modified field. |
| OldValue | TypeanyTypePropertiesNillableDescriptionPrevious value of the modified field. |
| ParentId | TypereferencePropertiesFilterDescriptionID of the object that contains the field. |
| ParentSobjectType | TypepicklistPropertiesFilter, Restricted picklistDescriptionThe kind of object that contains the field. |

## Usage

In API version 7.0 and later, this object works with Case, Contract, and Solution objects:

-   This object is always read-only in the online application.
-   When a field is modified, this object records both the old and new field values. There are exceptions to this behavior for certain fields such as long text areas and multi-select picklists. These fields appear in this object to indicate that the field was changed, but the old and new values are not recorded.
-   Two rows are added to this object when foreign key fields change. One row contains the foreign key object names that display in the online application. For example, “Jane Doe” is recorded as the name of a contact. The other row contains the actual foreign key ID that is only returned to and visible from the API.
-   Up to a total of twenty fields (standard or custom) can be tracked for a given object.
-   In the online application, you can specify which fields are tracked or not tracked at any time.
-   As soon as tracking is turned on for a field, all changes to its value are recorded in the database.
-   Turning off tracking for a field stops further changes from being recorded, but the history data is not deleted.
-   Be advised that deleting a custom field also permanently deletes the history data for that custom field.
