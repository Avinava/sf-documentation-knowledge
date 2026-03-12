---
title: "getResult()"
domain: apex-reference
topic: getresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.365Z
estimatedTokens: 86
keywords: [getResult, results, batch, operation, typed, according, call, getMembershipBatch, successful, BatchResult, ConnectApi.GroupMembership]
---

# getResult()

> Returns an object that contains the
results of the batch operation. The object is typed according to the
batch method. For example, if you call getMembershipBatch(), a successful call to BatchResult getResult() returns a ConnectApi.GroupMembership object.

# getResult()

Returns an object that contains the results of the batch operation. The object is typed according to the batch method. For example, if you call getMembershipBatch(), a successful call to BatchResult getResult() returns a ConnectApi.GroupMembership object.

## Signature

public Object getResult()

## Return Value

Type: Object
