---
title: "ConnectApi.SequencesAssignmentInputRepresentation"
domain: revenue-cloud
topic: connectapisequencesassignmentinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.118Z
estimatedTokens: 156
keywords: [target, objects, sequence, pattern, assigned]
---

# ConnectApi.SequencesAssignmentInputRepresentation

> The details of the target objects to which the sequence pattern values are assigned.

# ConnectApi.SequencesAssignmentInputRepresentation

The details of the target objects to which the sequence pattern values are assigned.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sequencePolicyId | String | ID of the sequence policy. | Optional | 65.0 |
| shouldPublishPlatformEvent | Boolean | Indicates whether to publish a platform event when a sequence is assigned to a target record (true) or not (false). | Optional | 65.0 |
| targetObjectIds | List<String> | List of records to which the sequence pattern values are assigned. | Required | 65.0 |
