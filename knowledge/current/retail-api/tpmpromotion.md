---
title: "TPM_Promotion"
domain: retail-api
topic: tpmpromotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.674Z
estimatedTokens: 780
keywords: [TPM_Promotion, rules, linked, TPM_Promotion.Promotion, output, entities, executed, generated, previous, TPM, _Promotion, resetPromotion, movePromotionTimeframe2, manageTacticProductFilterCopy2, manageParticipatingCustomersCopy2]
---

# TPM_Promotion

> These rules are linked to the TPM_Promotion and TPM_Promotion.Promotion output entities.
  The rules are executed based on the generated output of the previous rules.

# TPM\_Promotion

These rules are linked to the TPM\_Promotion and TPM\_Promotion.Promotion output entities. The rules are executed based on the generated output of the previous rules.

## resetPromotion

-   Description: Resets the promotion structure in order to be inserted as a new one.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: resetPromotion

## movePromotionTimeframe2

-   Description: Forwards the promotion dates to any number of years ahead. Default value: next year.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: movePromotionTimeframe

| Property | Description | Required or Optional |
| --- | --- | --- |
| .AddYears | Number of years to move the promotion. | Optional |

Increase the promotion dates by the offset defined in the AddYears property. If the property isn’t set, the number of years to advance the promotion will be in the order of promotion ahead of time. The offset years are calculated using the template property Mass Copy Start Date.

Promotion Dates

-   Date\_From\_\_c
-   Date\_Thru\_\_c
-   Commit\_Date\_\_c
-   Reference\_Date\_\_c
-   Placement\_Date\_From\_\_c
-   Placement\_Date\_Thru\_\_c
-   Order\_Date\_From\_\_c
-   Order\_Date\_Thru\_\_c
-   Delivery\_Date\_From\_\_c
-   Delivery\_Date\_Thru\_\_c
-   Custom1\_Date\_From\_\_c
-   Custom1\_Date\_Thru\_\_c
-   Custom2\_Date\_From\_\_c
-   Custom2\_Date\_Thru\_\_c

Tactic Dates

-   Date\_From\_\_c
-   Date\_Thru\_\_c
-   InStore\_Date\_From\_\_c
-   InStore\_Date\_Thru\_\_c
-   Shipment\_Date\_From\_\_c
-   Shipment\_Date\_Thru\_\_c
-   Custom1\_Date\_From\_\_c
-   Custom1\_Date\_Thru\_\_c
-   Custom2\_Date\_From\_\_c
-   Custom2\_Date\_Thru\_\_c

## manageTacticProductFilterCopy2

-   Description: Manages the promotion product filter copy.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: managePromotionProductFilterCopy

If promotion template doesn’t have products as copied components, Filter Criteria is set as an empty filter criteria. This rule filters the product filter criteria by removing products that are no longer valid for the promotion period.

## manageParticipatingCustomersCopy2

-   Description: Removes from participating customers the customers that are not valid because of the period of the copied promotion .
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: manageParticipatingCustomersCopy

## manageSubAccountsCopy2

-   Description: Removes from Sub Accounts the customers that aren’t valid because of the period of the copied promotion.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: manageSubAccountsCopy

## manageSubAccountsCopy2

-   Description: Handles manual inputs copy.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: manageManualInputCopy

If the promotion template does not have the Sub Accounts Enabled, this rule sets:

-   Promotion Sub Accounts Selection: Empty
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Promotion Volume Percent: Empty

If Promotion Template does not have ManualInput as copied components, the Promotion Manual Input field is empty.
