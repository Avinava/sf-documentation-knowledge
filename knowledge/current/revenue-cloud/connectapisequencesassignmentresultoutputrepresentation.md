---
title: "ConnectApi.SequencesAssignmentResultOutputRepresentation"
domain: revenue-cloud
topic: connectapisequencesassignmentresultoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.185Z
estimatedTokens: 192
keywords: [ConnectApi.SequencesAssignmentResultOutputRepresentation, Output, representation, details, assigned, sequence, values, target, objects.]
---

# ConnectApi.SequencesAssignmentResultOutputRepresentation

> Output representation of the details of the assigned sequence values to target
    objects.

# ConnectApi.SequencesAssignmentResultOutputRepresentation

Output representation of the details of the assigned sequence values to target objects.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.SequenceErrorOutputRepresentation> | Error encountered during the processing of the API request. | 65.0 |
| isSuccess | Boolean | Indicates whether the sequence pattern value was assigned (true) or not (false). | 65.0 |
| sequencePatternValue | String | Sequence pattern value assigned to the target object. | 65.0 |
| sequencePolicyId | String | ID of the sequence policy assigned to the target object. | 65.0 |
| targetObjectId | String | Record to which the sequence pattern value is assigned. | 65.0 |
