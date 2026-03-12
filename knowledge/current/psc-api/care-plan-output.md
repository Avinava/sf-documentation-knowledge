---
title: "Care Plan Output"
domain: psc-api
topic: care-plan-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.727Z
estimatedTokens: 477
keywords: [Care, Plan, Output, representation, associated, benefit, assignment, goal, records]
---

# Care Plan Output

> Output representation of the care plan and the associated benefit
  assignment and goal assignment records.

# Care Plan Output

Output representation of the care plan and the associated benefit assignment and goal assignment records.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefitAssignments | Benefit Assignment List | List of benefit assignments associated with the care plan record. | Small, 55.0 | 55.0 |
| carePlanTasks | Care Plan Tasks | Tasks for a care plan. | Small, 56.0 | 56.0 |
| carePlanTemplateId | String | ID of the service plan template associated with the care plan. | Small, 55.0 | 55.0 |
| carePlanTemplate​Name | String | Name of the service plan template associated with the care plan. | Small, 55.0 | 55.0 |
| caseId | String | Case associated with the care plan record. | Small, 55.0 | 55.0 |
| customFields | Custom Field List | Custom fields details of the care plan. | Small, 56.0 | 56.0 |
| description | String | Description of the care plan record. | Small, 55.0 | 55.0 |
| endDate | String | Date until when the care plan is effective. | Small, 55.0 | 55.0 |
| goalAssignments | Goal Assignment List | List of goal assignments associated with this care plan record. | Small, 55.0 | 55.0 |
| id | String | ID of the care plan record. | Small, 55.0 | 55.0 |
| name | String | Name of the care plan record. | Small, 55.0 | 55.0 |
| participantId | String | ID of the account associated with the care plan. | Small, 55.0 | 55.0 |
| startDate | String | Date from when the care plan is effective. | Small, 55.0 | 55.0 |
| status | String | Status of the care plan. | Small, 55.0 | 55.0 |
| taskJobAggregatedStatus | String | The aggregated status of the tasks associated with the care plan record. | Small, 57.0 | 58.0 |
| taskJobStatus | String | Reserved for internal use. | Small, 56.0 | 56.0 |
| taskJobStatusReason | String | Reserved for internal use. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "benefitAssignments": {
    "records": [
      {
        "benefitAssignmentTasks": {
          "tasks": {
            "records": [
              {
                "dueDate": "2022-09-20",
                "id": "00TRM00000Jxna72AB",
                "priority": "Low",
                "relatedTo": "0nDRM0000004CGJ2A2",
                "status": "Not Started",
                "subject": "Benefit Task 1"
              },
              {
                "id": "00TRM00000K3a3c2AB",
                "priority": "Normal",
                "relatedTo": "0nDRM0000004CGJ2A2",
                "status": "In Progress",
                "subject": "test task 0"
              }
            ]
          }
        },
        "benefitId": "0jiRM00000000KGYAY",
        "benefitName": "Test Benefit 1",
        "customFields": {
          "records": [
            {
              "dataType": "Boolean",
              "fieldName": "CustomCheckbox__c",
              "fieldValue": false
            }
          ]
        },
        "id": "0nDRM0000004CGJ2A2",
        "participantId": "001RM000005LXQcYAO",
        "priority": "Low"
      }
    ]
  },
  "carePlanTasks": {
    "tasks": {
      "records": [
        {
          "dueDate": "2022-09-10",
          "id": "00TRM00000Jxna62AB",
          "priority": "Low",
          "relatedTo": "1spRM0000004CDZYA2",
          "status": "Not Started",
          "subject": "Test CPT task"
        }
      ]
    }
  },
  "carePlanTemplateId": "1stRM000000001nYAA",
  "carePlanTemplateName": "Test CPT_2",
  "caseId": "500RM000003nux7YAA",
  "customFields": {
    "records": [
      {
        "dataType": "Boolean",
        "fieldName": "CustomCheckBox__c",
        "fieldValue": false
      },
      {
        "dataType": "Boolean",
        "fieldName": "CustomCheckbox3__c",
        "fieldValue": false
      },
      {
        "dataType": "Boolean",
        "fieldName": "isChecked__c",
        "fieldValue": false
      },
      {
        "dataType": "Double",
        "fieldName": "testNum__c",
        "fieldValue": 433
      }
    ]
  },
  "goalAssignments": {
    "records": [
      {
        "completionPercentage": 0,
        "customFields": {
          "records": [
            {
              "dataType": "Boolean",
              "fieldName": "CustomCheckbox2__c",
              "fieldValue": false
            }
          ]
        },
        "goalAssignmentTasks": {
          "tasks": {
            "records": [
              {
                "dueDate": "2022-10-01",
                "id": "00TRM00000Jxna32AB",
                "priority": "Low",
                "relatedTo": "1pgRM0000004CCCYA2",
                "status": "Not Started",
                "subject": "Goal Task 1"
              }
            ]
          }
        },
        "goalDefinitionId": "1gdRM0000004CBTYA2",
        "goalDefinitionName": "Test Stra Goal 1",
        "goalType": "Strategic",
        "id": "1pgRM0000004CCCYA2",
        "status": "Active"
      },
      {
        "completionPercentage": 0,
        "customFields": {
          "records": [
            {
              "dataType": "Boolean",
              "fieldName": "CustomCheckbox2__c",
              "fieldValue": false
            }
          ]
        },
        "goalAssigneeId": "001RM000005MZefYAG",
        "goalAssignmentTasks": {
          "tasks": {
            "records": [
              {
                "dueDate": "2022-10-01",
                "id": "00TRM00000Jxna52AB",
                "priority": "Low",
                "relatedTo": "1pgRM0000004CCDYA2",
                "status": "Not Started",
                "subject": "Goal Task 1"
              }
            ]
          }
        },
        "goalDefinitionId": "1gdRM000000001OYAQ",
        "goalDefinitionName": "Test Ind Goal 1",
        "goalType": "Individual",
        "id": "1pgRM0000004CCDYA2",
        "priority": "Low",
        "status": "Active"
      }
    ]
  },
  "id": "1spRM0000004CDZYA2",
  "name": "test CP",
  "participantId": "001RM000005LXQcYAO",
  "status": "Started",
  "taskJobStatus": "Completed"
}
```

## Related Topics

- Benefit Assignment List (atlas.en-us.psc_api.meta/psc_api/connect_responses_benefit_assignment_list.htm)
- Care
                  Plan Tasks (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_tasks.htm)
- Custom
                  Field List (atlas.en-us.psc_api.meta/psc_api/connect_responses_custom_field_list.htm)
- Goal Assignment List (atlas.en-us.psc_api.meta/psc_api/connect_responses_goal_assignment_list.htm)
