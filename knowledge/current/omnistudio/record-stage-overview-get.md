---
title: "Record Stage Overview (GET)"
domain: omnistudio
topic: record-stage-overview-get
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:49.425Z
estimatedTokens: 137
keywords: [Record, Stage, Overview, GET, Get, list, stages, their, associated, fulfillment, steps, specific, record.]
---

# Record Stage Overview (GET)

> Get the list of stages and their associated fulfillment steps for
      a specific record.

# Record Stage Overview (GET)

Get the list of stages and their associated fulfillment steps for a specific record.

Resource

```

```

The recordId parameter is the ID of the record or the object where the stage management transitions are performed.

Resource example

```

```

Available version

61.0

HTTP methods

GET

Response body for GET

[Stage Management Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_stage_overview_output.htm "Output representation of the details of stage management.")

## Code Examples

```
/connect/stage-management/kanban-view/recordId
```

```
https://yourInstances.salesforce.com/services/data/v66.0/connect/stage-management/kanban-view/13Xxx0000004DjQEAU
```

## Related Topics

- Stage Management
              Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_stage_overview_output.htm)
