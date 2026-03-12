---
title: "ScheduleJobsApi Class"
domain: field-service
topic: schedulejobsapi-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.282Z
estimatedTokens: 899
namespace: FSL
keywords: [ScheduleJobsApi, Represents, configurations, Territory, tab, scheduled, jobs, categorized, under, Enhanced, Optimization., Usage, getJob, setTerritory, Example]
---

# ScheduleJobsApi Class

> Represents configurations to the Territory tab that is available for all scheduled jobs
    that are categorized under Enhanced Optimization.

**Namespace:** `FSL`

# ScheduleJobsApi Class

Represents configurations to the Territory tab that is available for all scheduled jobs that are categorized under Enhanced Optimization.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

This API uses two methods, getJob and setTerritory. getJob passes a job to setTerritory, and setTerritory applies a territoryID and groupPolicyID to that job via [GroupData](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_class_FSL_GroupData "Represents a global class that combines a group policy ID and a list of service territory IDs. GroupData is a required input parameter for FSL.ScheduleJobsApi.getJob.setTerritory.").

-   **[ScheduleJobsApi Methods](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_methods)**


## ScheduleJobsApi Methods

ScheduleJobsApi includes the following static methods.

-   **[getJob](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_getJob)**
    Passes a scheduled job to thesetTerritory method, which modifies the territories.
-   **[setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory)**
    Sets territories for a job returned by getJob and performs various validation checks.

### getJob

Passes a scheduled job to thesetTerritory method, which modifies the territories.

#### Signature

global static ScheduleJobsApi getJob(String jobName)

#### Parameters

jobName

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)

Required. The name of the job to update for service territory. The job name is case-sensitive.

#### Return Value

Type: ScheduleJobsApi(validateJobId(jobId))

#### Usage

This method passes a job to [setTerritory](#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks."), which updates the Territory tab. See [setTerritory](#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.") for sample code.

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

## Code Examples

```apex
String jobName = 'Optimization';

List<FSL.ScheduleJobsApi.GroupData> groupList = new List<FSL.ScheduleJobsApi.GroupData>();

FSL.ScheduleJobsApi.GroupData firstGroup = new FSL.ScheduleJobsApi.GroupData
    ('a0cSM0000000fEU', new List<String>{'0HhSM0000000S5x', '0HhSM0000000TbV0AU'});

FSL.ScheduleJobsApi.GroupData secondGroup = new FSL.ScheduleJobsApi.GroupData
    ('0', new List<String>{'0HhSM0000000RbJ'});

groupList.add(firstGroup);
groupList.add(secondGroup);

FSL.ScheduleJobsApi.GetJob(jobName).setTerritory(groupList);
```

```apex
String jobName = "Optimization";

// Get all service territory groups.
List<YourGroupType> All_ST_GROUPS = getAllGroupsFromAnotherSource();

List<FSL.ScheduleJobsApi.GroupData> groupList = new List<FSL.ScheduleJobsApi.GroupData>();

for (Integer i = 0; i < All_ST_GROUPS.size(); i++) {
    FSL.ScheduleJobsApi.GroupData groupData = new FSL.ScheduleJobsApi.GroupData(
        All_ST_GROUPS[i].policyId,
        new List<String> {
            All_ST_GROUPS[i].territoryIds
        }
    );
    // Add the created groupData to the list.
    groupList.add(groupData);
}

FSL.ScheduleJobsApi.GetJob(jobName).setTerritory(groupList);
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- GroupData (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm)
- ScheduleJobsApi Methods (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm)
- getJob (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm)
- setTerritory (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm)
