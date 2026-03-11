---
title: "ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation"
domain: apex-reference
topic: connectapiocipublishlocationstructurestatusoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.403Z
keywords: [ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation]
---

# ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation

# ConnectApi.OCIPublishLocationStructureStatusOutputRepresentation

Detailed status of a publish location structure job.

Subclass of [ConnectApi.OCIBaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_base_output.htm "Base Omnichannel Inventory output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| endTimeUTC | String | The UTC time when the job finished. (for example: "2020-07-06T22:54:08.012Z") | 51.0 |
| recordsProcessedCount | Integer | The number of records processed by the job. | 51.0 |
| recordsReadCount | Integer | The number of records read by the job. | 51.0 |
| recordsSkippedCount | Integer | The number of records skipped by the job. | 51.0 |
| startTimeUTC | String | The UTC time when the job started. (for example: "2020-07-06T22:53:06.788Z") | 51.0 |
| status | String | The status of the job. (e.g., "PENDING," "COMPLETED," etc.). | 51.0 |
| uploadId | String | Identifier of the job. | 51.0 |
| validationErrors | List<String> | List of any validation errors returned by the job. | 51.0 |
| validationStatus | String | The validation status of the job. | 51.0 |