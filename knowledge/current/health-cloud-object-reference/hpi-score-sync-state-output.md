---
title: "HPI Score Sync State Output"
domain: health-cloud-object-reference
topic: hpi-score-sync-state-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.641Z
estimatedTokens: 266
keywords: [HPI, Score, Sync, State, Output, representation, synchronization, status]
---

# HPI Score Sync State Output

> Output representation of the score synchronization status
      request.

# HPI Score Sync State Output

Output representation of the score synchronization status request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bulkJobId | String | The ID of the bulk job that contains the score synchronization requests. | Small, 55.0 | 55.0 |
| errors | String[] | The message associated with the synchronization status request, in case of failure. | Small, 55.0 | 55.0 |
| status | String | The status of the score synchronization request for the specified score category.Possible values are:Idle—Either no process is running or no requests for the specified category are pending.Not Started—The synchronization process request is accepted, but hasn’t started yet.In Progress—The synchronization request is in progress with the messaging queue.Bulk Job Submitted—The scores are fetched from Data Cloud and the score records are submitted to the bulk job to be inserted into the HealthScore object.Failed—Failure during the synchronization process. | Small, 55.0 | 55.0 |
