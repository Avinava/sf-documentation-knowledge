---
title: "Dataflow Node"
domain: bi-dev-guide-rest
topic: dataflow-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.241Z
estimatedTokens: 283
keywords: [Dataflow, Node]
---

# Dataflow Node

> A node in an dataflow.

# Dataflow Node

A node in an dataflow.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| column​Count | Long | The count of columns. | Small, 55.0 | 55.0 |
| end​Date | Date | The end time for the node execution. | Small, 55.0 | 55.0 |
| error​Message | String | The error message for this dataflow job. | Small, 57.0 | 57.0 |
| label | String | The label of the node source. | Small, 57.0 | 57.0 |
| name | String | The name of the node source. | Small, 55.0 | 55.0 |
| output​Row​Count | Long | The count of rows output by the node. | Small, 57.0 | 57.0 |
| output​Size​In​Bytes | Long | The size of the node output. | Small, 57.0 | 57.0 |
| row​Count | Long | The count of rows. | Small, 55.0 | 55.0 |
| size​In​Bytes | Long | The size of the node. | Small, 55.0 | 55.0 |
| start​Date | Date | The start time for the node execution. | Small, 55.0 | 55.0 |
| status | Connect​Wave​Dataflow​Job​Status​Enum | The status of the job runnsing the node. Valid values are:CancelledFailurePreprocessingQueuedRunningSuccessWarning | Small, 57.0 | 57.0 |
