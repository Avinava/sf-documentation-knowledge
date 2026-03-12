---
title: "Duplicate Job"
domain: chatterapi
topic: duplicate-job
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.924Z
estimatedTokens: 146
keywords: [Duplicate, Job, status]
---

# Duplicate Job

> A duplicate job.

# Duplicate Job

A duplicate job.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created the job. | Small, 42.0 | 42.0 |
| createdDate | String | Date when the job was created in ISO 8601 format. | Small, 42.0 | 42.0 |
| endDateTime | String | Date when the job ended in ISO 8601 format. | Small, 42.0 | 42.0 |
| jobDefinitionId | String | ID of the job definition. | Small, 42.0 | 42.0 |
| jobId | String | ID of the job. | Small, 42.0 | 42.0 |
| lastModified​ById | String | ID of the user who last modified the job. | Small, 42.0 | 42.0 |
| lastModified​Date | String | Date when the job was last modified in ISO 8601 format. | Small, 42.0 | 42.0 |
| name | String | Name of the job. | Small, 42.0 | 42.0 |
| numDuplicate​RecordItems | Integer | Number of duplicate records created by the job. | Small, 42.0 | 42.0 |
| numDuplicate​RecordSets | Integer | Number of duplicate record sets created by the job. | Small, 42.0 | 42.0 |
| numRecords​Scanned | Integer | Number of records scanned by the job. | Small, 42.0 | 42.0 |
| resultListViewId | String | ID of the result list view for the job. | Small, 42.0 | 42.0 |
| startDateTime | String | Date when the job started in ISO 8601 format. | Small, 42.0 | 42.0 |
| status | String | Status of the job. Values are:CanceledCompletedFailedInProgressNotStartedResultsDeleted | Small, 42.0 | 42.0 |

#### See Also

-   [Duplicate Job Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_collection.htm "A collection of duplicate jobs.")

## Code Examples

```
/dedupe/jobs/jobId
```

```
{
   "status":"Canceled"
}
```

## Related Topics

- Duplicate Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job.htm)
- Duplicate Job Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_collection.htm)
