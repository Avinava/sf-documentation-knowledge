---
title: "Benefit Disbursement Action"
domain: psc-api
topic: benefit-disbursement-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.376Z
estimatedTokens: 623
keywords: [Benefit, Disbursement, Action, eligible, assignment, offer, monetary, benefits, direct, cash, assistance, subsidies, Special, Access, Rules]
---

# Benefit Disbursement Action

> Create a benefit disbursement for an eligible benefit assignment. For
			example, create a benefit disbursement request to offer monetary benefits through direct
			cash assistance or subsidies.

# Benefit Disbursement Action

Create a benefit disbursement for an eligible benefit assignment. For example, create a benefit disbursement request to offer monetary benefits through direct cash assistance or subsidies.

This action is available in API version 57.0 and later.

## Special Access Rules

To access the Benefit Disbursement action, your org must have the Program and Benefit Management Access and Benefit Disbursement Access permission set licenses.

## Supported REST HTTP Methods

URI

/services/data/v57.0/actions/standard/createBenefitDisbursement

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| benefitAssignmentId | TypeIDDescriptionRequired.The ID of the benefit assignment to be disbursed. |
| defaultApprovalStatus | TypestringDescriptionRequired.Approval status of the benefit disbursement that’s created or previewed. Possible values are:ApprovedIn ReviewNot ApplicablePendingRejected |
| disbursementType | TypestringDescriptionNumber of disbursements to be previewed. Possible values are:SINGLEALLA SINGLE disbursement type creates a preview of a single or one-time disbursement, whereas an ALL disbursement type creates a preview of a recurring disbursement. |
| isPreview | TypebooleanDescriptionRequired.Indicates whether a preview of the disbursement details is created (false) or not (true). |

## Outputs

| Output | Details |
| --- | --- |
| benefitDisbursementIaOutput | TypestringDescriptionThe Apex output type that contains nested arrays in JSON format with details of the disbursement that’s created or is to be previewed for the benefit assignment.The benefitDisbursementIaOutput output type contains an array of the BenefitDisbursementIAOutput Apex class. This output representation contains an array of the BenefitDisbursementDetail fields, while an array of BenefitDisbursementAdjDetail is contained in BenefitDisbursementDetail. |

## Example

GET

This example shows how to get the details of the Benefit Disbursement action type.

```

```

POST

Here’s a request for the Benefit Disbursement action.

```

```

Here’s a response for the Benefit Disbursement action.

```

```

#### See Also

-   [*Salesforce Help*: Assign and Disburse Benefits to Eligible Applicants](https://help.salesforce.com/s/articleView?id=ind.psc_assign_benefits.htm&type=5&language=en_US "Salesforce Help: Assign and Disburse Benefits to Eligible
    Applicants - HTML (New Window)")

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v57.0/actions/standard/createBenefitDisbursement"
```

```
{
   "inputs":[{
      "benefitAssignmentId" : "0nDxx0000000001EAA",
      “isPreview” : true,
      "disbursementType" : "SINGLE",
      "defaultApprovalStatus" : "Approved"
   }]
}
```

```
[
   {
      "actionName" : "createBenefitDisbursement",
      "errors" : null,
      "isSuccess" : true,
      "outputValues" : {
          "resultantDisbursements": {
             "benefitAssignmentId": "0nDxx0000000001EAA",
             "benefitDisbursements": [{
                  "approvalStatus": "Approved",
                  "benefitDisbursementAdjs": [{
                      "adjustmentAmount": 100.0,
                      "adjustmentReason": "sample reason",
                      "benefitAssignmentAdjustmentId": "baaId",
                      "id": "bdAdj"
                   }],
                   "entitlementAmount": 800.0,
                   "id": "bdAdj",
                   "paymentStatus": null
              }],
              "previewMode": true
          }
       }
   }]
```
