---
title: "SearchableObjDataSyncInfo"
domain: life-sciences-dev-guide
topic: searchableobjdatasyncinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.801Z
estimatedTokens: 713
keywords: [SearchableObjDataSyncInfo, data, synchronization, search, frequency, status, date, time, API, version, 58.0, later, SOAP, Calls, REST]
---

# SearchableObjDataSyncInfo

> Represents information about the data synchronization for a search object,
         such as frequency of synchronization, status, and the date and time of the last
         synchronization. This object is available in API version 58.0 and later.

# SearchableObjDataSyncInfo

Represents information about the data synchronization for a search object, such as frequency of synchronization, status, and the date and time of the last synchronization. This object is available in API version 58.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Automotive and Criteria-Based Search and Filter must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of a searchable object data sync information record. Maximum length allowed is 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsDataSyncActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the data synchronization operation for the search object is active (true) or not (false). This value does not indicate the status of a Data Processing Engine (DPE) definition, but the system job that executes that DPE definition.The default value is false. |
| LastDataSyncRunDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time at which the data synchronization job ran. This field does not indicate the date and time when the Data Processing Engine (DPE) last ran, but rather when the system job that executes the DPE definition last ran. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for SearchableObjDataSyncInfo. This internal label doesn’t get translated. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionMetadata that defines search criteria configurations. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ScheduleFrequencyInHours | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe frequency at which the data synchronization job is run to refresh data in the searchable object. |
| SearchableObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object that's used for criteria-based search and filter.Possible values are:VehicleSearchableField—This value is applicable for Automotive Cloud. |
