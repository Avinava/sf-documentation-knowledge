---
title: "Care Plans (POST)"
domain: psc-api
topic: care-plans-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.357Z
estimatedTokens: 484
keywords: [Care, Plans, POST, plan, records]
---

# Care Plans (POST)

> Create care plan records.

# Care Plans (POST)

Create care plan records. Associate benefit assignments and goal assignments when creating a care plan.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<CarePlan>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitAssignments | Benefit Assignment Input[] | Details of the benefit assignment information of the care plan. | Optional | 55.0 |
| carePlanTasks | Care Plan Tasks Input | Task details of a care plan. | Optional | 56.0 |
| carePlanTemplate​Id | String | ID of the service plan template associated with the care plan. | Optional | 55.0 |
| caseId | String | Case associated with the care plan. | Required | 55.0 |
| customFields | Custom Field Input[] | Custom fields details of a care plan. | Optional | 56.0 |
| description | String | Description of the care plan record. | Optional | 55.0 |
| endDate | String | Date until when the care plan is effective. | Optional | 55.0 |
| goalAssignments | Goal Assignment Input[] | Represents the goal assignment information of the care plan. | Optional | 55.0 |
| id | String | ID of the care plan record. | Optional | 55.0 |
| name | String | Name of the care plan record. | Required | 55.0 |
| participantId | String | ID of the account associated with the care plan. | Optional | 55.0 |
| problems | Problem Definition Input[] | Details of the problems associated with the care plan. | Required | 57.0 |
| startDate | String | Date from when the care plan is effective. | Optional | 55.0 |
| status | String | Status of the care plan. | Required | 55.0 |

JSON example

```

```

Response body for POST

[Generic Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm "Output representation of the created care plan record or care plan template record.")

## Code Examples

```
/connect/careplan/care-plans
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/connect/careplan/care-plans
```

```
{
  "id": "",
  "name": "Care Plan Success Demo",
  "participantId": "001x0000008mGwlAAE",
  "status": "Active",
  "description": "CP Created from workbench",
  "startDate": "2022-04-15T20:00:00.000Z",
  "endDate": "2025-04-15T20:00:00.000Z",
  "caseId": "500x0000004mPTVAA2",
  "carePlanTemplateId": "1stx0000000002vAAA",
  "goalAssignments": {
    "records": [
      {
        "startDate": "2022-07-05T00:00:00.000Z",
        "targetCompletionDate": "2022-07-09T00:00:00.000Z",
        "completionPercentage": 34,
        "status": "In Progress",
        "goalDefinitionId": "1gdx000000000OLAAY",
        "goalAssigneeId": "001x0000008mGwlAAE",
        "priority": "High",
        "customFields": {
          "records": [
            {
              "fieldName": "BirthDate__c",
              "fieldValue": "1996-01-01"
            },
            {
              "fieldName": "RequestedAmount__c",
              "fieldValue": 5
            }
          ]
        },
        "goalAssignmentTasks": {
          "adhocTasks": {
            "records": [
              {
                "subject": " GA Adhoc Task 14567deesfdf",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First BA Adhoc task 34567",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "GA Adhoc Task 2345sdsd",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task 5678asdsfdas",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "GA Adhoc Task 34567sadsd",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task 123456sadadasdasd",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "GA Adhoc Task 44567sadwqdwqd",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task 34567sdsadasdasd",
                "assignedTo": "005x0000000DecJ"
              }
            ]
          }
        }
      },
      {
        "startDate": "2022-07-05T00:00:00.000Z",
        "targetCompletionDate": "2022-07-09T00:00:00.000Z",
        "completionPercentage": 78,
        "goalAssigneeId": "001x0000008mGwlAAE",
        "goalDefinitionId": "1gdx00000000QnKAAU",
        "priority": "Medium",
        "customFields": {
          "records": [
            {
              "fieldName": "BirthDate__c",
              "fieldValue": "1998-01-01"
            },
            {
              "fieldName": "RequestedAmount__c",
              "fieldValue": 5
            }
          ]
        },
        "goalAssignmentTasks": {
          "adhocTasks": {
            "records": [
              {
                "subject": " GA Adhoc Task 14567dawasfdasf",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First GA Adhoc task 34567asdasdfdasfdaf",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task 2345wewrw",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task 5678",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task 3456713eqasdasfddf",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task 123456",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task 44567wqewqewqr",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task 34567",
                "assignedTo": "005x0000000DecJ"
              }
            ]
          }
        }
      }
    ]
  },
  "benefitAssignments": {
    "records": [
      {
        "enrollmentCount": 5,
        "entitlementAmount": 100,
        "participantId": "001x0000008mGwlAAE",
        "benefitId": "0jix000000000LgAAI",
        "associatedGoalAssignment": {
          "goalDefinitionId": "1gdx000000000ItAAI",
          "startDate": "2022-07-05T00:00:00.000Z",
          "targetCompletionDate": "2022-07-09T00:00:00.000Z",
          "completionPercentage": "83",
          "status": "Active",
          "goalAssigneeId": "001x0000008mGwlAAE",
          "priority": "High",
          "goalAssignmentTasks": {
            "adhocTasks": {
              "records": [
                {
                  "subject": " GA Adhoc Task 14567dawasfdasf",
                  "dueDate": "2022-09-08T00:00:00.000Z",
                  "status": "Not Started",
                  "priority": "Low",
                  "comment": "First GA Adhoc task 34567asdasdfdasfdaf",
                  "assignedTo": "005x0000000DecJ"
                },
                {
                  "subject": "BA Adhoc Task 2345wewrw",
                  "dueDate": "2022-12-08T00:00:00.000Z",
                  "status": "In Progress",
                  "priority": "High",
                  "comment": "Second Adhoc task 5678",
                  "assignedTo": "005x0000000DecJ"
                },
                {
                  "subject": "BA Adhoc Task 3456713eqasdasfddf",
                  "dueDate": "2022-11-08T00:00:00.000Z",
                  "status": "Not Started",
                  "priority": "Medium",
                  "comment": "Third Adhoc task 123456",
                  "assignedTo": "005x0000000DecJ"
                },
                {
                  "subject": "BA Adhoc Task 44567wqewqewqr",
                  "dueDate": "2022-08-10T00:00:00.000Z",
                  "status": "Not Started",
                  "priority": "High",
                  "comment": "Fourth Adhoc task 34567",
                  "assignedTo": "005x0000000DecJ"
                }
              ]
            }
          },
          "customFields": {
            "records": [
              {
                "fieldName": "BirthDate__c",
                "fieldValue": "1998-01-01"
              },
              {
                "fieldName": "RequestedAmount__c",
                "fieldValue": 5
              }
            ]
          }
        },
        "customFields": {
          "records": [
            {
              "fieldName": "cust_date__c",
              "fieldValue": "1998-01-01"
            },
            {
              "fieldName": "cust_amount__c",
              "fieldValue": 5
            }
          ]
        },
        "benefitAssignmentTasks": {
          "adhocTasks": {
            "records": [
              {
                "subject": " BA Adhoc Task Rec1",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First BA Adhoc task Rec 1234",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task Rec 232143",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task Rec 121324325",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task Rec 21325346457",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task Rec 2324234235",
                "assignedTo": "005x0000000DecJ"
              },
              {
                "subject": "BA Adhoc Task Rec 1342432423",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task Rec 2343242345",
                "assignedTo": "005x0000000DecJ"
              }
            ]
          }
        }
      }
    ]
  },
  "customFields": {
    "records": [
      {
        "fieldName": "tests1234__c",
        "fieldValue": "demo text"
      }
    ]
  },
  "medicationTherapyReview": "",
  "carePlanTasks": {
    "adhocTasks": {
      "records": [
        {
          "subject": "Adhoc Task 19087899",
          "dueDate": "2022-08-09T00:00:00.000Z",
          "status": "In Progress",
          "priority": "High",
          "comment": "First Adhoc task 19082343254325",
          "assignedTo": "005x0000000DecJ"
        },
        {
          "subject": "Adhoc Task 290889999",
          "dueDate": "2022-08-31T00:00:00.000Z",
          "status": "Not Started",
          "priority": "High",
          "comment": "Second Adhoc task 29083424324",
          "assignedTo": "005x0000000DecJ"
        },
        {
          "subject": "Adhoc Task 390821324324",
          "dueDate": "2022-08-08T00:00:00.000Z",
          "status": "Not Started",
          "priority": "Low",
          "comment": "Third Adhoc task 39082343243245",
          "assignedTo": "005x0000000DecJ"
        }
      ]
    }
  }
}
```

## Related Topics

- Benefit Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_assignment_input.htm)
- Care Plan Tasks
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_tasks_input.htm)
- Custom Field Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_field_input.htm)
- Goal Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_goal_assignment_input.htm)
- Problem Definition Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_problem_input.htm)
- Generic Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm)
