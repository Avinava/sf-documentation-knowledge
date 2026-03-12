---
title: "ConnectApi.SequenceGapReconciliationOutputRepresentation"
domain: revenue-cloud
topic: connectapisequencegapreconciliationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.175Z
estimatedTokens: 223
keywords: [ConnectApi.SequenceGapReconciliationOutputRepresentation, Output, representation, details, sequence, gap, reconciliation.]
---

# ConnectApi.SequenceGapReconciliationOutputRepresentation

> Output representation of the details of the sequence gap reconciliation.

# ConnectApi.SequenceGapReconciliationOutputRepresentation

Output representation of the details of the sequence gap reconciliation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.SequenceGapReconciliationErrorOutputRepresentation | List of errors encountered during the processing of the API request. | 65.0 |
| jobId | String | Unique identifier assigned to sequence gap reconciliation asynchronous process. | 65.0 |
| sequencePolicyIds | List<String> | List of IDs of the sequence policies. | 65.0 |
| status | StatusEnum | The status of sequence reconciliation API request. Valid values are:SubmittedNotSubmitted | 65.0 |
| submittedAt | String | Date and time when the reconciliation request was submitted to the async job. | 65.0 |
| targetObjects | List<String> | List of objects to which the policies are applied. | 65.0 |

## Related Topics

- ConnectApi.SequenceGapReconciliationErrorOutputRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_sequence_gap_reconciliation_error_output.htm)
