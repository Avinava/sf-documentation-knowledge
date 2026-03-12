---
title: "Save Group Census Member Plans Data Action"
domain: insurance-developer-guide
topic: save-group-census-member-plans-data-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.734Z
estimatedTokens: 488
keywords: [Save, Group, Census, Member, Plans, Data, Action, Validate, new, members, Special, Access, Rules, REST, HTTP]
---

# Save Group Census Member Plans Data Action

> Validate and save group census member plans for the new members. Update the group
        census member plans for existing members.

# Save Group Census Member Plans Data Action

Validate and save group census member plans for the new members. Update the group census member plans for existing members.

This action processes member enrollment information, validates plan assignments, and handles primary and dependent member relationships. It manages plan updates, including plan additions and deletions, and supports bulk processing of member plans with comprehensive error handling and logging.

This action is available in API version 66.0 and later.

## Special Access Rules

To use this invocable action, you must have Digital Insurance Group Benefits Census Management user access

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/saveGrpCensusMbrPlansData

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| asyncBulkRequestItemId | TypestringDescriptionRequired.ID of the asynchronous bulk request item to use for tracking and error logging. |
| groupCensusId | TypestringDescriptionRequired.ID of the group census record. |
| groupCensusMemberPlans | TypesobjectDescriptionRequired.List of group census member plan records to save. |
| groupCensusMembers | TypesobjectDescriptionRequired.List of group census member records to process. |
| shouldLogErrors | TypebooleanDescriptionRequired.Indicates whether errors that occur while saving group census member plans are recorded in a content document (true) or not (false). |

## Outputs

| Output | Details |
| --- | --- |
| errorsData | TypeApex-definedDescriptionError details for the failed records. |
| groupCensusMemberPlans | TypesobjectDescriptionDetails of group census member plan records that are successfully saved. |

## Example

POST

This sample request is for the Save Group Census Member Plans Data action.

```

```

This sample response is for the Save Group Census Member Plans Data action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "groupCensusMembers": [
        {
          "Id": "a1B000000000001",
          "MemberRefId": "M001",
          "PrimaryGroupCensusMemberId": null,
          "GroupCensusId": "a3B000000000001",
          "MemberKey": "EMP001",
          "AssociationWithPrimaryMbr": "Self"
        },
        {
          "Id": "a1B000000000002",
          "MemberRefId": "M002",
          "PrimaryGroupCensusMemberId": "a1B000000000001",
          "GroupCensusId": "a3B000000000001",
          "MemberKey": "DEP001",
          "AssociationWithPrimaryMbr": "Spouse"
        }
      ],
      "groupCensusMembersPlans": [
        {
          "ContractGroupPlanId": "p1B000000000001",
          "PlanName": "Health Plan A",
          "PlanType": "Medical",
          "GroupCensusMember": "a1B000000000001",
          "MemberRefId": "M001"
        },
        {
          "ContractGroupPlanId": "p1B000000000002",
          "PlanName": "Dental Plan B",
          "PlanType": "Dental",
          "GroupCensusMember": "a1B000000000001",
          "MemberRefId": "M001"
        },
        {
          "ContractGroupPlanId": "p1B000000000001",
          "PlanName": "Health Plan A",
          "PlanType": "Medical",
          "GroupCensusMember": "a1B000000000002",
          "MemberRefId": "M002"
        }
      ],
      "shouldLogErrors": true,
      "asyncBulkRequestItemId": "a2B000000000001",
      "groupCensusId": "a3B000000000001"
    }
  ]
}
```

```
{
  "outputs": [
    {
      "savedGroupCensusMembersPlans": [
        {
          "Id": "a4B000000000001",
          "Name": "Plan-001",
          "GroupCensusMemberId": "a1B000000000001",
          "ContractGroupPlanId": "p1B000000000001",
          "CreatedDate": "2025-01-27T10:30:00.000Z",
          "CreatedById": "005000000000001"
        },
        {
          "Id": "a4B000000000002",
          "Name": "Plan-002",
          "GroupCensusMemberId": "a1B000000000001",
          "ContractGroupPlanId": "p1B000000000002",
          "CreatedDate": "2025-01-27T10:30:00.000Z",
          "CreatedById": "005000000000001"
        },
        {
          "Id": "a4B000000000003",
          "Name": "Plan-003",
          "GroupCensusMemberId": "a1B000000000002",
          "ContractGroupPlanId": "p1B000000000001",
          "CreatedDate": "2025-01-27T10:30:00.000Z",
          "CreatedById": "005000000000001"
        }
      ],
      "errors": [
        {
          "errorMessage": "Invalid plan assignment for member M003",
          "recordId": "M003",
          "errorType": "VALIDATION_ERROR",
          "fieldName": "ContractGroupPlanId"
        }
      ],
      "isSuccess": true
    }
  ]
}
```
