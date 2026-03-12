---
title: "ActionableListFilterCriteria"
domain: omnistudio
topic: actionablelistfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.791Z
estimatedTokens: 827
keywords: [ActionableListFilterCriteria, logical, expression, containing, filter, conditions, include, exclude, data, dataset, that's, associated, actionable, API, version]
---

# ActionableListFilterCriteria

> Represents a logical expression containing filter conditions to
         include or exclude data from the dataset that's associated with the actionable list.
      This object is available in API version 59.0 and later.

# ActionableListFilterCriteria

Represents a logical expression containing filter conditions to include or exclude data from the dataset that's associated with the actionable list. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe actionable list associated with the filter criteria.This field is a relationship field.Relationship NameActionableListRelationship TypeLookupRefers ToActionableList |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Possible values are:INR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe logical expression of the filter criteria in the text format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned number that identifies the actionable list filter criteria record. |
| SourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe source type of the actionable list.Possible values are:CrmAnalytics—Crm AnalyticsDataCloudPlatform—Data Cloud Platform |

## Associated Objects

This object has the following associated objects. If the API version isnâ€™t specified, theyâ€™re available in the same API versions as this object. Otherwise, theyâ€™re available in the specified API version and later.

[ActionableListFilterCriteriaChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionableListFilterCriteriaFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionableListFilterCriteriaHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionableListFilterCriteriaOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionableListFilterCriteriaShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
