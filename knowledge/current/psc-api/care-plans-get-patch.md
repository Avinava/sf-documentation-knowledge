---
title: "Care Plans (GET, PATCH)"
domain: psc-api
topic: care-plans-get-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.498Z
estimatedTokens: 564
keywords: [Care, Plans, PATCH, Retrieve, plan, Fetches, benefit, assignments, goal, associated, record]
---

# Care Plans (GET, PATCH)

> Retrieve the care plan details. Fetches benefit assignments and goal
      assignments associated with the given care plan. Update a care plan record.

# Care Plans (GET, PATCH)

Retrieve the care plan details. Fetches benefit assignments and goal assignments associated with the given care plan. Update a care plan record.

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

GET, PATCH

PATCH is available in version 56.0 and later.

Response body for GET

[Care Plan Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan.htm "Output representation of the care plan and the associated benefit assignment and goal assignment records.")

Request body for PATCH

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

Response body for PATCH

[Generic Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm "Output representation of the created care plan record or care plan template record.")

## Code Examples

```
/connect/careplan/care-plans/${carePlanId}
```

```
https://yourInstance.salesforce.com/services/data/66.0
/connect/careplan/care-plans/1spRM0000004CDZYA2
```

```
{
  "id": "1spxx000000026fAAA",
  "name": "CP-(-678",
  "participantId": "001xx000003HTqdAAG",
  "status": "Draft",
  "description": "CP Created from workbench",
  "startDate": "2022-04-15T20:00:00.000Z",
  "endDate": "2025-04-15T20:00:00.000Z",
  "caseId": "500xx000000d0SXAAY",
  "carePlanTemplateId": "1stxx0000000149AAA",
  "goalAssignments": {
    "records": [
      {
        "startDate": "2022-07-05T00:00:00.000Z",
        "targetCompletionDate": "2022-07-09T00:00:00.000Z",
        "completionPercentage": 34,
        "status": "In Progress",
        "goalDefinitionId": "1gdxx0000000G1ZAAU",
        "id": "1pgxx00000000zJAAQ",
        "priority": "High",
        "customFields": {
          "records": []
        },
        "goalAssignmentTasks": {
          "excludedTasks": {
            "tasks": [
              "00Txx000003rMTaEAM",
              "00Txx000003rMTxEAM",
              "00Txx000003rMTdEAM"
            ]
          },
          "adhocTasks": {
            "records": [
              {
                "subject": "GA Adhoc Task 14567deesfdf",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First BA Adhoc task 34567",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "GA Adhoc Task 2345sdsd",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task 5678asdsfdas",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "GA Adhoc Task 34567sadsd",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task 123456sadadasdasd",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "GA Adhoc Task 44567sadwqdwqd",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task 34567sdsadasdasd",
                "assignedTo": "005xx000001YkA1AAK"
              }
            ]
          },
          "tasks": {
            "records": [
              {
                "subject": "Update CP Edit GOAL ASSIGNEMENT Task 990",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "Update CP Edit GOAL ASSIGNEMENT Task 990",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMTcEAM"
              },
              {
                "subject": "Update CP Edit GOAL ASSIGNMENT ADHOC TASK Task 7686970",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Update CP Edit GOAL ASSIGNMENT ADHOC TASK Task 7686970",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMTuEAM"
              }
            ]
          }
        }
      },
      {
        "startDate": "2022-07-05T00:00:00.000Z",
        "targetCompletionDate": "2022-07-09T00:00:00.000Z",
        "completionPercentage": 78,
        "goalAssigneeId": "001xx000003HTqdAAG",
        "goalDefinitionId": "1gdxx0000000FzxAAE",
        "id": "1pgxx00000000zKAAQ",
        "priority": "Medium",
        "customFields": {
          "records": []
        },
        "goalAssignmentTasks": {
          "excludedTasks": {
            "tasks": [
              "00Txx000003rMTyEAM",
              "00Txx000003rMTXEA2",
              "00Txx000003rMTZEA2"
            ]
          },
          "adhocTasks": {
            "records": [
              {
                "subject": " GA Adhoc Task 14567dawasfdasf",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First GA Adhoc task 34567asdasdfdasfdaf",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task 2345wewrw",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task 5678",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task 3456713eqasdasfddf",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task 123456",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task 44567wqewqewqr",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task 34567",
                "assignedTo": "005xx000001YkA1AAK"
              }
            ]
          },
          "tasks": {
            "records": [
              {
                "subject": "Update CP Edit GOAL ASSIGNEMENT Task 123124334",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "Update CP Edit GOAL ASSIGNEMENT Task 213213414",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMTYEA2"
              },
              {
                "subject": "Update CP Edit GOAL ASSIGNMENT ADHOC TASK Task 7686970",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Update CP Edit GOAL ASSIGNMENT ADHOC TASK Task 7686970",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMU1EAM"
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
        "participantId": "001xx000003HTqdAAG",
        "id": "0nDxx00000000uTEAQ",
        "benefitId": "0jixx00000000JNAAY",
        "customFields": {
          "records": []
        },
        "benefitAssignmentTasks": {
          "excludedTasks": {
            "tasks": [
              "00Txx000003rMTeEAM",
              "00Txx000003rMTfEAM",
              "00Txx000003rMTgEAM"
            ]
          },
          "adhocTasks": {
            "records": [
              {
                "subject": " BA Adhoc Task Rec1",
                "dueDate": "2022-09-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "First BA Adhoc task Rec 1234",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task Rec 232143",
                "dueDate": "2022-12-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Second Adhoc task Rec 121324325",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task Rec 21325346457",
                "dueDate": "2022-11-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Medium",
                "comment": "Third Adhoc task Rec 2324234235",
                "assignedTo": "005xx000001YkA1AAK"
              },
              {
                "subject": "BA Adhoc Task Rec 1342432423",
                "dueDate": "2022-08-10T00:00:00.000Z",
                "status": "Not Started",
                "priority": "High",
                "comment": "Fourth Adhoc task Rec 2343242345",
                "assignedTo": "005xx000001YkA1AAK"
              }
            ]
          },
          "tasks": {
            "records": [
              {
                "subject": "Update CP Edit Benefit Task 440",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "Not Started",
                "priority": "Low",
                "comment": "Update CP Edit Task 123243124 comment",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMTiEAM"
              },
              {
                "subject": "Update CP Edit Benefit Task 900",
                "dueDate": "2022-19-08T00:00:00.000Z",
                "status": "In Progress",
                "priority": "High",
                "comment": "Update CP Edit Benefit Task 12312312321 comment",
                "assignedTo": "005xx000001YkA1AAK",
                "id": "00Txx000003rMThEAM"
              }
            ]
          }
        }
      }
    ]
  },
  "customFields": {
    "records": []
  },
  "carePlanTasks": {
    "excludedTasks": {
      "tasks": [
        "00Txx000003rMTnEAM",
        "00Txx000003rMTUEA2",
        "00Txx000003rMTVEA2"
      ]
    },
    "adhocTasks": {
      "records": [
        {
          "subject": "Adhoc Task Update CP 121312321",
          "dueDate": "2022-08-09T00:00:00.000Z",
          "status": "In Progress",
          "priority": "Low",
          "comment": "Adhoc Task Update CP 121312321",
          "assignedTo": "005xx000001YkA1AAK"
        },
        {
          "subject": "Adhoc Task Update CP wdsf12312321",
          "dueDate": "2022-08-31T00:00:00.000Z",
          "status": "Not Started",
          "priority": "Low",
          "comment": "Adhoc Task Update CP wdsf12312321",
          "assignedTo": "005xx000001YkA1AAK"
        },
        {
          "subject": "Adhoc Task Update CP 21321312sdsd",
          "dueDate": "2022-08-08T00:00:00.000Z",
          "status": "Not Started",
          "priority": "Low",
          "comment": "Adhoc Task Update CP 21321312sdsd",
          "assignedTo": "005xx000001YkA1AAK"
        }
      ]
    },
    "tasks": {
      "records": [
        {
          "subject": "Update CP Edit Task One",
          "dueDate": "2022-19-08T00:00:00.000Z",
          "status": "Completed",
          "priority": "High",
          "comment": "Update CP Edit Task One",
          "assignedTo": "005xx000001YkA1AAK",
          "id": "00Txx000003rMTWEA2"
        }
      ]
    }
  }
}
```

## Related Topics

- Care
              Plan Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan.htm)
- Benefit Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_assignment_input.htm)
- Care Plan Tasks
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_tasks_input.htm)
- Custom Field Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_field_input.htm)
- Goal Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_goal_assignment_input.htm)
- Problem Definition Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_problem_input.htm)
- Generic Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm)
