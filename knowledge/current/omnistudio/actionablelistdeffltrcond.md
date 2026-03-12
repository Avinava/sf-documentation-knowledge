---
title: "ActionableListDefFltrCond"
domain: omnistudio
topic: actionablelistdeffltrcond
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.751Z
estimatedTokens: 1330
keywords: [ActionableListDefFltrCond, filter, condition, including, excluding, data, dataset, associated, actionable, definition, API, version, 60.0, later, Calls]
---

# ActionableListDefFltrCond

> Represents the filter condition for including or excluding data from the
         dataset associated with the actionable list definition. This object is available in
      API version 60.0 and later.

# ActionableListDefFltrCond

Represents the filter condition for including or excluding data from the dataset associated with the actionable list definition. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListDatasetColumnId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe actionable list dataset column associated with the actionable list filter condition.This field is a relationship field.Relationship NameActionableListDatasetColumnRelationship TypeLookupRefers ToActionableListDatasetColumn |
| ActionableListDefFltrCritId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe filter criteria associated with the individual filter condition in the actionable list definition.This field is a relationship field.Relationship NameActionableListDefFltrCritRelationship TypeLookupRefers ToActionableListDefFltrCrit |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| DataDomain | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data domain that is mapped to the data type of the dataset column.Possible values are:DatesDimensionsMeasures |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-assigned number that identifies the actionable list definition filter condition record. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe operator used in the filter condition.Possible values are:containsequalsgreaterThangreaterThanOrEqualsinisNotNullisNulllessThanlessThanOrEqualsnotEqualsnotIn |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequential number assigned to the filter condition. |
| SourceColumnApiName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe API name of the column in the source dataset associated with the actionable list definition. |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value in the filter condition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListDefFltrCondChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionableListDefFltrCondFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionableListDefFltrCondHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionableListDefFltrCondOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionableListDefFltrCondShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ActionableListDefFltrCondChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- ActionableListDefFltrCondFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- ActionableListDefFltrCondHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
- ActionableListDefFltrCondOwnerSharingRule (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ActionableListDefFltrCondShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)
