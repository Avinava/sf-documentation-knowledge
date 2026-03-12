---
title: "ActionableListFilterCriteria"
domain: life-sciences-dev-guide
topic: actionablelistfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.921Z
estimatedTokens: 521
keywords: [ActionableListFilterCriteria, logical, expression, containing, filter, conditions, include, exclude, data, dataset, that's, associated, actionable, API, version]
---

# ActionableListFilterCriteria

> Represents a logical expression containing filter conditions to include or
         exclude data from the dataset that's associated with the actionable list. This object is
         available in API version 65.0 and later.

# ActionableListFilterCriteria

Represents a logical expression containing filter conditions to include or exclude data from the dataset that's associated with the actionable list. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe actionable list associated with the filter criteria.This field is a relationship field.Relationship NameActionableListRelationship TypeMaster-detailRefers ToActionableList (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Possible values are:USD—U.S. DollarThe default value is USD. |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe logical expression of the filter criteria in the text format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-assigned number that identifies the actionable list filter criteria record. |
| SourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source type of the actionable list.Possible values are:CrmAnalytics—Crm AnalyticsDataCloudPlatform—Data Cloud Platform |
