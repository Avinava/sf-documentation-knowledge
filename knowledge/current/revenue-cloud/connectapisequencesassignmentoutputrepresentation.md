---
title: "ConnectApi.SequencesAssignmentOutputRepresentation"
domain: revenue-cloud
topic: connectapisequencesassignmentoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.206Z
estimatedTokens: 160
keywords: [Output, representation, showing, status, assigned, sequence, pattern]
---

# ConnectApi.SequencesAssignmentOutputRepresentation

> Output representation showing the status of the assigned sequence pattern values.

# ConnectApi.SequencesAssignmentOutputRepresentation

Output representation showing the status of the assigned sequence pattern values.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.SequenceErrorOutputRepresentation> | Error encountered during the processing of the API request. | 65.0 |
| sequencesAssignment | List<ConnectApi.SequencesAssignmentResultOutputRepresentation> | Details of the sequence pattern values assignment. | 65.0 |
| status | SequenceResponseStatusEnum | Status of the sequence policy assignment. Valid values are:PartialSuccessSuccessFailed | 65.0 |

## Related Topics

- ConnectApi.SequenceErrorOutputRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_sequence_error_output.htm)
- ConnectApi.SequencesAssignmentResultOutputRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_sequences_assignment_result_output.htm)
