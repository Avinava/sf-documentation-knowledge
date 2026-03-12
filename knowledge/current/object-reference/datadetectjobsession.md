---
title: "DataDetectJobSession"
domain: object-reference
topic: datadetectjobsession
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.971Z
estimatedTokens: 940
keywords: [DataDetectJobSession, run, DataDetect, scan, policy, that's, triggered, manually, API, version, 63.0, later, Calls, Associated, Objects]
---

# DataDetectJobSession

> Represents a run of a DataDetect scan policy that's triggered manually.
      This object is available in API version 63.0 and later.

# DataDetectJobSession

Represents a run of a DataDetect scan policy that's triggered manually. This object is available in API version 63.0 and later.

To opt in for beta, contact your Salesforce account executive. After the org permission is enabled, users can access the Data Detect app from the App launcher.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| DataDetectPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the scan policy associated with this job session.This field is a relationship field.Relationship NameDataDetectPolicyRefers ToDataDetectPolicy |
| DataDetectPolicySnapshotId | TypereferencePropertiesFilter, Group, SortDescriptionID of the snapshot of the scan policy associated with this job session.This field is a relationship field.Relationship NameDataDetectPolicySnapshotRelationship TypeMaster-DetailRefers ToDataDetectPolicySnapshot |
| SessionEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date when the data scan completes. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated name of the job session. |
| NamedEntityCount | TypeintPropertiesCreate, Filter, Nillable, UpdateDescriptionAggregate count of PII found during the data scan. |
| PolicyJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the data scan. Valid values are:CancelledCancelled and CsvNoPiiData - Scan cancelled. No sensitive data detected.Cancelled and CsvUploadFailed - Scan cancelled. Results upload failed.Cancelled and CsvUploadInProgress - Scan cancelled. Results upload in progress.Cancelled and CsvUploadSuccess - Scan cancelled. Results upload completed successfully.CompletedCompleted and CsvNoPiiData - Scan completed. No sensitive data detected.Completed and CsvUploadFailed - Scan completed. Results upload failed.Completed and CsvUploadInProgress - Scan completed. Results upload in progress.Completed and CsvUploadSuccess - Scan completed. Results upload completed successfully.FailedFailed and CsvNoPiiData - Scan failed. No sensitive data detected.Failed and CsvUploadFailed - Scan failed. Results upload failed.Failed and CsvUploadInProgress - Scan failed. Results upload in progress.Failed and CsvUploadSuccess - Scan failed. Results upload completed successfully.PartialSuccessPartialSuccess and CsvNoPiiData - Scan partially successful. No sensitive data detected.PartialSuccess and CsvUploadFailed - Scan partially successful. Results upload failed.PartialSuccess and CsvUploadInProgress - Scan partially successful. Results upload in progress.PartialSuccess and CsvUploadSuccess - Scan partially successful. Results upload completed successfully.RunningScheduledTimedOutThe default value is Scheduled. |
| RunByUser | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser who started the job session or data scan. |
| SessionStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date when the data scan begins. |

## Associated Objects

This object has this associated object. If the API version isn’t specified, it's available in the same API version as this object. Otherwise, it's available in the specified API version and later.

[DataDetectJobSessionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
