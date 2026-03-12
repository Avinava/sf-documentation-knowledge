---
title: "Get Previous Related Record Details Action"
domain: revenue-cloud
topic: get-previous-related-record-details-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.985Z
estimatedTokens: 348
keywords: [Previous, Record, Action, submitted, approval, current, submission, steps, custom, logic, auto-approvals, REST, HTTP, Inputs, Outputs]
---

# Get Previous Related Record Details Action

> Get the related record details submitted for approval before the
            current approval submission. The details are required for approval steps that use custom
            logic for auto-approvals.

# Get Previous Related Record Details Action

Get the related record details submitted for approval before the current approval submission. The details are required for approval steps that use custom logic for auto-approvals.

This Apex action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getPreviousRelaRecDetails

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| flowOrchestrationInstanceId | TypestringDescriptionRequired.The ID of the flow orchestration instance associated with the approval submission. |
| stepApiNamesList | TypestringDescriptionRequired.The comma-delimited list of step API names to retrieve previous related record details for. |

## Outputs

| Output | Details |
| --- | --- |
| previousRelatedRecordDetails | TypesObjectDescriptionThe collection of previous related record details for approval steps that use custom logic for auto-approvals. |

## Usage

To use this Apex action in approval workflows, see [Define Rules and Conditions for Auto-Approval Resubmissions](https://help.salesforce.com/s/articleView?id=ind.approvals_define_custom_logic_auto_approvals.htm&language=en_US "HTML (New Window)").

## Example

POST

Here's a sample request for the Get Previous Related Record Details action.

```

```

## Code Examples

```
{
  "flowOrchestrationInstanceId": "0jEDU0000001zeN",
  "stepApiNameList": [
    "ManagerApprovalStep",
    "FinancialApprovalStep"
  ]
}
```
