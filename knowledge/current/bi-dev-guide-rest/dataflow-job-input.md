---
title: "Dataflow Job Input"
domain: bi-dev-guide-rest
topic: dataflow-job-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.729Z
estimatedTokens: 212
keywords: [Dataflow, Job, Input, Analytics]
---

# Dataflow Job Input

> An Analytics dataflow job.

# Dataflow Job Input

An Analytics dataflow job.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| command | Connect​Dataflow​Job​Command​Enum | Dataflow job command. Valid values are:﻿StartStop | Required | 42.0 |
| dataflowId | ID | The dataflow ID. | Optional; only required when the command is Start | 42.0 |

#### See Also

-   [Dataflow Jobs List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm "Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.")

-   [Dataflow Job Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm "Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes.")

## Related Topics

- Dataflow Jobs List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)
- Dataflow Job Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm)
