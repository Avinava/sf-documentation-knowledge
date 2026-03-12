---
title: "Preview Approval"
domain: revenue-cloud
topic: preview-approval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.049Z
estimatedTokens: 232
keywords: [Preview, Approval, Output, representation, details, preview, approval, request.]
---

# Preview Approval

> Output representation of the details of a preview approval request.

# Preview Approval

Output representation of the details of a preview approval request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approvalChain​Items | Preview Approval Chain Item[] | Details of the approval items for a specific group. | Small, 65.0 | 65.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 65.0 | 65.0 |
| error | Preview Approval Error[] | Details of the error encountered during the processing of the API request. | Small, 65.0 | 65.0 |
| flowOrchestration​DefinitionVersion​Id | String | ID of the flow orchestration definition version. | Small, 65.0 | 65.0 |
| status | String | Status of the API request. | Small, 65.0 | 65.0 |

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

## Related Topics

- Preview Approval Chain Item (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_preview_approval_chain_item_output.htm)
- Preview Approval Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_preview_approval_error.htm)
