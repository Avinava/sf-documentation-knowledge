---
title: "GroupData Class"
domain: field-service
topic: groupdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.213Z
estimatedTokens: 843
namespace: FSL
keywords: [GroupData, Represents, combines, group, policy, list, service, territory, IDs., required, input, FSL.ScheduleJobsApi.getJob.setTerritory., Usage, Example, groupPolicyId, territoryIds]
---

# GroupData Class

> Represents a global class that combines a group policy ID and a list
      of service territory IDs. GroupData is a required input
      parameter for FSL.ScheduleJobsApi.getJob.setTerritory.

**Namespace:** `FSL`

# GroupData Class

Represents a global class that combines a group policy ID and a list of service territory IDs. GroupData is a required input parameter for [FSL.ScheduleJobsApi.getJob.setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.").

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

GroupData is a required input parameter for [FSL.ScheduleJobsApi.getJob.setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks."). GroupData has two input parameters: groupPolicyId and a list of territoryIds.

## Example

This sample code shows you how to populate GroupData.

```

```

See [FSL.ScheduleJobsApi.getJob.setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.") to see how to use GroupData with setTerritory.

-   **[GroupData Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_FSL_GroupData_properties)**


## GroupData Properties

GroupData contains the following properties.

-   **[groupPolicyId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_FSL_GroupData_groupPolicyID)**
    The group policy of a job required by FSL.ScheduleJobsApi.getJob.setTerritory.
-   **[territoryIds](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_FSL_GroupData_territoryIds)**
    A list of service territory IDs required by FSL.ScheduleJobsApi.getJob.setTerritory.

### groupPolicyId

The group policy of a job required by [FSL.ScheduleJobsApi.getJob.setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.").

#### Signature

public String groupPolicyId { get; set; }

#### Property Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)

### territoryIds

A list of service territory IDs required by [FSL.ScheduleJobsApi.getJob.setTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.").

#### Signature

public List<String\> territoryIds { get; set; }

#### Property Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)

## Code Examples

```apex
global class GroupData {
        public String groupPolicyId { get; set; }
        public List<String> territoryIds { get; set; }

        global GroupData(String groupPolicyId, List<String> territoryIds) {
            this.groupPolicyId = groupPolicyId;
            this.territoryIds = territoryIds;
        }
    }
```

## Related Topics

- FSL.ScheduleJobsApi.getJob.setTerritory (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm)
- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- GroupData Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm)
- groupPolicyId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm)
- territoryIds (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm)
