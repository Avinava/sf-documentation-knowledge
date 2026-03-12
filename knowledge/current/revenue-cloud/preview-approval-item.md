---
title: "Preview Approval Item"
domain: revenue-cloud
topic: preview-approval-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.044Z
estimatedTokens: 294
keywords: [Preview, Approval, Item, Output, representation, details, specific, approval, item, chain.]
---

# Preview Approval Item

> Output representation of the details of a specific approval item with an approval
    chain.

# Preview Approval Item

Output representation of the details of a specific approval item with an approval chain.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields | Map<String, String> | Details of any additional fields in the approval workflow. | Small, 65.0 | 65.0 |
| approval​ConditionName | String | Details of the configured conditions in the approval workflow. | Small, 65.0 | 65.0 |
| assignedTo | String | Name of the assignee that the approval request is assigned to. | Small, 65.0 | 65.0 |
| assigneeType | String | Type of assignee. | Small, 65.0 | 65.0 |
| level | Integer | Hierarchy level of the approval item. | Small, 65.0 | 65.0 |
| object​ApiName | String | API name of the object to preview the approval for. | Small, 65.0 | 65.0 |
| objectId | String | ID of the object to preview the approval for. | Small, 65.0 | 65.0 |
| parents | String[] | Details of the parent step. | Small, 65.0 | 65.0 |
| status | String | Status of the approval request. | Small, 65.0 | 65.0 |
| stepApi​Name | String | API name of the step. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "approvalChainItems": [
    {
      "approvalChainName": "HR",
      "approvalItems": [
        {
          "additionalFields": {
            "isAutoReviewed": false,
            "isEligibleForSmartApproval": true,
            "smartApprovalBasisWI": "",
            "reviewedBy": "005DU000000I9gtYAC",
            "approvalChainName": "hr"
          },
          "approvalConditionName": "HR Stage 2 Step 1",
          "assignedTo": "005DU000000I9gtYAC",
          "assigneeType": "User",
          "level": 1,
          "objectApiName": "Quote",
          "objectId": "0Q0DU0000005HZC0A2",
          "parents": [],
          "status": "Not Submitted",
          "stepApiName": "Step1_of_Stage1"
        }
      ]
    },
    {
      "approvalChainName": "MARKETING",
      "approvalItems": [
        {
          "additionalFields": {
            "isAutoReviewed": false,
            "isEligibleForSmartApproval": true,
            "smartApprovalBasisWI": "",
            "reviewedBy": "005DU000000I6yzYAC",
            "approvalChainName": "marketing"
          },
          "approvalConditionName": "MARKETING Stage 1 Step 1",
          "assignedTo": "005DU000000I6yzYAC",
          "assigneeType": "User",
          "level": 1,
          "objectApiName": "Quote",
          "objectId": "0Q0DU0000005HZC0A2",
          "parents": [],
          "status": "Not Submitted",
          "stepApiName": "Step2_of_Stage1"
        }
      ]
    },
    {
      "approvalChainName": "LEGAL",
      "approvalItems": [
        {
          "additionalFields": {
            "isAutoReviewed": false,
            "isEligibleForSmartApproval": true,
            "smartApprovalBasisWI": "",
            "reviewedBy": "005DU000000I6yzYAC",
            "approvalChainName": "legal"
          },
          "approvalConditionName": "Legal Stage 1 Step 1",
          "assignedTo": "005DU000000I6yzYAC",
          "assigneeType": "User",
          "level": 1,
          "objectApiName": "Quote",
          "objectId": "0Q0DU0000005HZC0A2",
          "parents": [],
          "status": "Not Submitted",
          "stepApiName": "Step1_of_Stage2"
        },
        {
          "additionalFields": {
            "isAutoReviewed": false,
            "isEligibleForSmartApproval": true,
            "smartApprovalBasisWI": "",
            "reviewedBy": "005DU000000I9gUYAS",
            "approvalChainName": "legal"
          },
          "approvalConditionName": "Legal Stage 2 Step 1",
          "assignedTo": "005DU000000I9gUYAS",
          "assigneeType": "User",
          "level": 2,
          "objectApiName": "Quote",
          "objectId": "0Q0DU0000005HZC0A2",
          "parents": [
            "0jLDU0000001pIr2AI"
          ],
          "status": "Not Submitted",
          "stepApiName": "Step2_of_Stage2"
        }
      ]
    },
    {
      "approvalChainName": "SALES",
      "approvalItems": [
        {
          "additionalFields": {
            "isAutoReviewed": false,
            "isEligibleForSmartApproval": true,
            "smartApprovalBasisWI": "",
            "reviewedBy": "00GDU000000MPZg2AO",
            "approvalChainName": "sales"
          },
          "approvalConditionName": "Sales Stage 1 Step 1",
          "assignedTo": "00GDU000000MPZg2AO",
          "assigneeType": "Group",
          "level": 1,
          "objectApiName": "Quote",
          "objectId": "0Q0DU0000005HZC0A2",
          "parents": [],
          "status": "Not Submitted",
          "stepApiName": "Step3_of_Stage1"
        }
      ]
    }
  ],
  "flowOrchestrationDefinitionVersionId": "0jEDU0000001nZm",
  "status": "Success"
}
```
