---
title: "ActionableListDtastClmnUsr"
domain: omnistudio
topic: actionablelistdtastclmnusr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.513Z
keywords: [ActionableListDtastClmnUsr, Supported, Calls, Fields, Associated, Objects]
---

# ActionableListDtastClmnUsr

# ActionableListDtastClmnUsr

Represents the user preference for an actionable list dataset column. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListDatasetColumnId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actionable list dataset column associated with the user preference.This field is a relationship field.Relationship NameActionableListDatasetColumnRelationship TypeLookupRefers ToActionableListDatasetColumn |
| ColumnDisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the actionable list dataset columns are displayed. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-assigned number that identifies the actionable list dataset column user record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of the actionable list dataset column user record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ShouldDisplayColumn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the dataset column appears in the actionable list (true) or not (false).The default value is false. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actionable list user associated with the actionable list dataset column.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListDtastClmnUsrChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionableListDtastClmnUsrFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionableListDtastClmnUsrHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionableListDtastClmnUsrOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionableListDtastClmnUsrShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.