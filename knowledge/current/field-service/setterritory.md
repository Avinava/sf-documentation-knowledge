---
title: "setTerritory"
domain: field-service
topic: setterritory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.072Z
keywords: [setTerritory, Sets, territories, job, returned, getJob, performs, various, validation, checks., Signature, Parameters, Return, Value, Usage, Example]
---

# setTerritory

> Sets territories for a job returned by getJob and
    performs various validation checks.

### setTerritory

Sets territories for a job returned by getJob and performs various validation checks.

#### Signature

public void setTerritory(List<GroupData> groupList)

#### Parameters

groupList

Type: List<[GroupData](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_class_FSL_GroupData "Represents a global class that combines a group policy ID and a list of service territory IDs. GroupData is a required input parameter for FSL.ScheduleJobsApi.getJob.setTerritory.")\>

Required. A list of GroupData objects representing the territories and group policies to be associated with the job.

#### Return Value

Type: Void

#### Usage

This method configures the Territory tab based on optimized territory and scheduling policy for a scheduled job. Here are two examples of code that configures the territory tab for a scheduled job.

#### Example 1:

```

```

#### Example 2:

```

```