---
title: "wkcc__LocationWellnessStaging__c"
domain: workdotcom-dev-guide
topic: wkcclocationwellnessstagingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.407Z
estimatedTokens: 518
keywords: [wkcc__LocationWellnessStaging__c, Deprecated, staging, recalculating, location, wellness, facts, Records, removed, once, locations, recalculated, orgs, version, earlier]
---

# wkcc__LocationWellnessStaging__c

> Deprecated. This object is a staging table for recalculating location wellness
      facts. Records are removed once the locations have been recalculated. This object is
    available in orgs that have version 4 or earlier of Work.com installed. This object was
    deprecated in version 4.2 of Workplace Command Center. In version 4.2 and later, the data in
    this object is no longer updated.

# wkcc\_\_LocationWellnessStaging\_\_c

Deprecated. This object is a staging table for recalculating location wellness facts. Records are removed once the locations have been recalculated. This object is available in orgs that have version 4 or earlier of Work.com installed. This object was deprecated in version 4.2 of Workplace Command Center. In version 4.2 and later, the data in this object is no longer updated.

Records in this object should not be used for custom solutions.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create. |
| wkcc__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique identifier for the record in the format of <Location Id> + ‘:’ + <Wellness Status>. This field is unique within your organization. |
| wkcc__JobStatus__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the status of this location for processing.Possible values are:Not ProcessedProcessing |
| wkcc__Location__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location that needs its fact records recalculated. |
