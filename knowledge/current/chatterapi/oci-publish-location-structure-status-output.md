---
title: "OCI Publish Location Structure Status Output"
domain: chatterapi
topic: oci-publish-location-structure-status-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.995Z
estimatedTokens: 278
keywords: [OCI, Publish, Location, Structure, Status, Output, Detailed, job]
---

# OCI Publish Location Structure Status Output

> Detailed status of a publish location structure
    job.

# OCI Publish Location Structure Status Output

Detailed status of a publish location structure job.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| endTimeUTC | String | The UTC time when the job finished. (for example: "2020-07-06T22:54:08.012Z") | Big, 51.0 | 51.0 |
| recordsProcessedCount | Integer | The number of records processed by the job. | Big, 51.0 | 51.0 |
| recordsReadCount | Integer | The number of records read by the job. | Big, 51.0 | 51.0 |
| recordsSkippedCount | Integer | The number of records skipped by the job. | Big, 51.0 | 51.0 |
| startTimeUTC | String | The UTC time when the job started. (for example: "2020-07-06T22:53:06.788Z") | Big, 51.0 | 51.0 |
| status | String | The status of the job. (e.g., "PENDING," "COMPLETED," etc.). | Big, 51.0 | 51.0 |
| uploadId | String | Identifier of the job. | Big, 51.0 | 51.0 |
| validationErrors | String[] | List of any validation errors returned by the job. | Big, 51.0 | 51.0 |
| validationStatus | String | The validation status of the job. | Big, 51.0 | 51.0 |
