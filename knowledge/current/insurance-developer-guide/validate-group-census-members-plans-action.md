---
title: "Validate Group Census Members Plans Action"
domain: insurance-developer-guide
topic: validate-group-census-members-plans-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.763Z
estimatedTokens: 542
keywords: [Validate, Group, Census, Members, Plans, Action, member, plan, records, assign, Special, Access, Rules, REST, HTTP]
---

# Validate Group Census Members Plans Action

> Validate the specified group census member plan records and assign default values to
        the specified fields.

# Validate Group Census Members Plans Action

Validate the specified group census member plan records and assign default values to the specified fields.

This action is available in API version 66.0 and later.

## Special Access Rules

To use this invocable action, you must have Digital Insurance Group Benefits Census Management user access and the org must be enabled with the Digital Insurance Group Benefits feature.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/validateGrpCensusMembersPlans

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

You must specify one of these input parameters for the validation process.

-   contextId
-   groupCensusMembers
-   memberPlansToDelete
-   memberPlansToValidate

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionID of the context definition that contains information about root plans and coverages that are configured for the current list of group census members. |
| groupCensusMembers | TypesobjectDescriptionGroup census member records that must be validated. |
| memberPlansToDelete | TypesobjectDescriptionGroup census member plan records that must be deleted. |
| memberPlansToValidate | TypesobjectDescriptionGroup census member plan records that must be validated. |
| shouldExecuteConfigurationRule | TypebooleanDescriptionIndicates whether the product configuration rules must be executed for member plans in the enrollment census (true) or not (false). |

## Outputs

| Output | Details |
| --- | --- |
| errorsData | TypeApex-definedDescriptionValidation errors that occurred while validating the group census member and plans records. |
| validatedGroupCensusMemberPlans | TypesobjectDescriptionGroup census member plan records that are validated and assigned with default values. |
| validatedGroupCensusMembers | TypesobjectDescriptionGroup census member records that are validated and assigned with default values. |

## Example

POST

This sample request is for the Validate Group Census Members Plans action.

```

```

This sample response is for the Validate Group Census Members Plans action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "groupCensusMembers": [
        {
          "Id": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001",
          "FirstName": "John",
          "LastName": "Doe",
          "GroupCensus": "gc_12345"
        },
        {
          "Id": "b2c3d4e5f6g7h8i9",
          "MemberRefId": "M002",
          "FirstName": "Jane",
          "LastName": "Smith",
          "GroupCensus": "gc_12345"
        }
      ],
      "memberPlansToValidate": [
        {
          "ContractGroupPlan": "plan_medical_001",
          "GroupCensusMember": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001"
        },
        {
          "ContractGroupPlan": "plan_dental_001",
          "GroupCensusMember": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001"
        }
      ],
      "memberPlansToDelete": [
        {
          "ContractGroupPlan": "plan_old_001",
          "GroupCensusMember": "b2c3d4e5f6g7h8i9",
          "MemberRefId": "M002"
        }
      ],
      "contextId": "ctx_validation_12345",
      "shouldExecuteConfigurationRule": true
    }
  ]
}
```

```
{
  "outputs": [
    {
      "validatedGroupCensusMembers": [
        {
          "Id": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001",
          "FirstName": "John",
          "LastName": "Doe",
          "Information": "Plans validated successfully",
          "CensusMgmtUploadMemError": null
        },
        {
          "Id": "b2c3d4e5f6g7h8i9",
          "MemberRefId": "M002",
          "FirstName": "Jane",
          "LastName": "Smith",
          "Information": "Plan deletion validated",
          "CensusMgmtUploadMemError": null
        }
      ],
      "validatedGroupCensusMemberPlans": [
        {
          "ContractGroupPlan": "plan_medical_001",
          "GroupCensusMember": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001",
          "PlanType": "AUTO_ADDED"
        },
        {
          "ContractGroupPlan": "plan_dental_001",
          "GroupCensusMember": "a1b2c3d4e5f6g7h8",
          "MemberRefId": "M001",
          "PlanType": "AUTO_ADDED"
        },
        {
          "ContractGroupPlan": "plan_old_001",
          "GroupCensusMember": "b2c3d4e5f6g7h8i9",
          "MemberRefId": "M002",
          "CensusMgmtUploadMemError": "Plan successfully marked for deletion"
        }
      ],
      "errorsData": []
    }
  ]
}
```
