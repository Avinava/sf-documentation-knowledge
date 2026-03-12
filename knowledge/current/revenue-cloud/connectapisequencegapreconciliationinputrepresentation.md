---
title: "ConnectApi.SequenceGapReconciliationInputRepresentation"
domain: revenue-cloud
topic: connectapisequencegapreconciliationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.082Z
estimatedTokens: 167
keywords: [ConnectApi.SequenceGapReconciliationInputRepresentation, details, input, used, identify, reconcile, gaps, sequence, values, based, policy, target, object.]
---

# ConnectApi.SequenceGapReconciliationInputRepresentation

> The details of the input used to identify and reconcile gaps in sequence values based on the sequence policy or target object.

# ConnectApi.SequenceGapReconciliationInputRepresentation

The details of the input used to identify and reconcile gaps in sequence values based on the sequence policy or target object.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sequencePolicyIds | List<String> | List of IDs of the sequence policies. | Required if the targetObjects property isn't specified. You must not specify both properties. | 65.0 |
| targetObjects | List<String> | List of objects to which the policies are applied. | Required if the sequencePolicyIds property isn't specified. You must not specify both properties. | 65.0 |
