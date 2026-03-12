---
title: "DataDetectJobObjectSession"
domain: object-reference
topic: datadetectjobobjectsession
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.962Z
estimatedTokens: 818
keywords: [DataDetectJobObjectSession, object-specific, job, session, that's, created, whenever, DataDetect, scan, policy, runs, API, version, 63.0, later]
---

# DataDetectJobObjectSession

> Represents an object-specific job session that's created whenever a
         DataDetect scan policy job session runs on a scan policy object. This object is
      available in API version 63.0 and later.

# DataDetectJobObjectSession

Represents an object-specific job session that's created whenever a DataDetect scan policy job session runs on a scan policy object. This object is available in API version 63.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| CurrentObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the scan policy object associated with the job object session. |
| DataDetectJobSessionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the job session associated with a scan policy data scan.This field is a relationship field.Relationship NameDataDetectJobSessionRelationship TypeMaster-DetailRefers ToDataDetectJobSession |
| SessionEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date when the scan policy object scan completes. |
| ScannedRecordsCount | TypeLongPropertiesFilter, Group, Nillable, SortDescriptionThe number of records already scanned while the overall job is in progress. |
| LastScannedRecord | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe Last scanned record identifier of the object. |
| JobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the scan policy object scan. Possible values are:CancelledCancelled and CsvNoPiiData - Scan cancelled. No sensitive data detected.Cancelled and CsvUploadFailed - Scan cancelled. Results upload failed.Cancelled and CsvUploadInProgress - Scan cancelled. Results upload in progress.Cancelled and CsvUploadSuccess - Scan cancelled. Results upload completed successfully.CompletedCompleted and CsvNoPiiData - Scan completed. No sensitive data detected.Completed and CsvUploadFailed - Scan completed. Results upload failed.Completed and CsvUploadInProgress - Scan completed. Results upload in progress.Completed and CsvUploadSuccess - Scan completed. Results upload completed successfully.FailedFailed and CsvNoPiiData - Scan failed. No sensitive data detected.Failed and CsvUploadFailed - Scan failed. Results upload failed.Failed and CsvUploadInProgress - Scan failed. Results upload in progress.Failed and CsvUploadSuccess - Scan failed. Results upload completed successfully.PartialSuccessPartialSuccess and CsvNoPiiData - Scan partially successful. No sensitive data detected.PartialSuccess and CsvUploadFailed - Scan partially successful. Results upload failed.PartialSuccess and CsvUploadInProgress - Scan partially successful. Results upload in progress.PartialSuccess and CsvUploadSuccess - Scan partially successful. Results upload completed successfully.RunningScheduledTimedOutThe default value is Scheduled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated name of the job object session. |
| SessionStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date when the scan policy object scan begins. Scan policy object scan can start anytime within a 30-day window from the current date. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
