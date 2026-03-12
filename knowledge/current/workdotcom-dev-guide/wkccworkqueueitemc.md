---
title: "wkcc__WorkQueueItem__c"
domain: workdotcom-dev-guide
topic: wkccworkqueueitemc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.387Z
estimatedTokens: 1046
keywords: [wkcc__WorkQueueItem__c, Coordinates, Workplace, Command, Center, background, processing, jobs, sending, surveys, aggregating, location’s, status, orgs, installed]
---

# wkcc__WorkQueueItem__c

> Coordinates Workplace Command Center background processing jobs, such
      as sending surveys or aggregating a location’s status. This object is available in orgs
    that have Workplace Command Center installed.

# wkcc\_\_WorkQueueItem\_\_c

Coordinates Workplace Command Center background processing jobs, such as sending surveys or aggregating a location’s status. This object is available in orgs that have Workplace Command Center installed.

When, for example, an admin clicks **Send Survey** to send a survey to all individuals at a location, Work.com creates a record in the wkcc\_\_WorkQueueItem\_\_c object. Adding a record to this object is akin to adding a job to the work queue. The record contains information about the required work, such as the priority, status, and details of the work. Sensitive information, like the survey’s email template and recipient and location IDs, is encrypted and stored in the wkcc\_\_EncryptedDetails\_\_c field. A background process checks for new records which in turn kicks off a job to process the work, such as actually sending out the surveys. When the job is complete and successful, the background process deletes the record. If the job fails, the background process logs a message to the wkcc\_\_CmdCtrLog\_\_c object with details about the failure.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create(). |
| wkcc__EncryptedDetails__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores an encrypted serialized object with sensitive details about the job, such as the survey’s email template and IDs of the recipients and locations. |
| wkcc__JobDetailHash__c | TypedoublePropertiesCreate, Filter, idLookup, Nillable, Sort, UpdateDescriptionUnique hash of the details of the job. The background process uses this value to prevent duplicate jobs. |
| wkcc__JobPriority__c | TypedoublePropertiesCreate, Defaulted on create, Filter, idLookup, Nillable, Sort, UpdateDescriptionSpecifies the priority of the job. The background process selects jobs with the highest number first. If two records have the same priority, the background process selects the most recently added job based on the record creation timestamp. Default value is 0. |
| wkcc__JobStatusDetails__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMore details about the job’s status. Includes logged error messages. |
| wkcc__JobStatus__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the job.Possible values are:ErrorNew |
| wkcc__JobType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of job, such as Survey or Status Aggregation. |
| wkcc__ProcessAfter__c | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionDelays the processing of the job until after the time specified in this field. While we can guarantee that the job will be processed after the specified time, we can’t guarantee how long after. |
| wkcc__QIStatus__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the internal status Apex class that corresponds to this job. The background process uses this class to determine when to execute this job. |
| wkcc__QIWorker__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the internal worker Apex class that corresponds to this job. The background process uses this class to determine how to execute this job. |
