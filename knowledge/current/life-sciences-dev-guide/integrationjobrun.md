---
title: "IntegrationJobRun"
domain: life-sciences-dev-guide
topic: integrationjobrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.168Z
estimatedTokens: 1056
keywords: [IntegrationJobRun, statistical, asynchronous, integration, jobs, run, system, API, version, 65.0, later, Calls, Associated, Objects]
---

# IntegrationJobRun

> Represents the statistical details of asynchronous integration jobs that are
         run on the system. This object is available in API version 65.0 and later.

# IntegrationJobRun

Represents the statistical details of asynchronous integration jobs that are run on the system. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeEndRange | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe identifier for the end of the incremental execution of the job. |
| ChangeStartRange | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe identifier for the start of the incremental execution of the job. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the job was completed. |
| JobAdditionalInfo | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information on the job, for example, the country to which the job is applied. |
| JobExectionSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of the job, such as the downloaded record types with the count and number of failed records. |
| JobIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe MuleSoft identifier for the job. |
| JobName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the integration job. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the integration job run. |
| Origin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe feature from which the job is initiated. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the integration job run.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the job was started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the job. |
| TotalRecordsFailed | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of failed records in the job. |
| TotalRecordsProcessed | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of processed records in the job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IntegrationJobRunFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[IntegrationJobRunHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[IntegrationJobRunShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- IntegrationJobRunFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- IntegrationJobRunHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- IntegrationJobRunShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
