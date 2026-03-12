---
title: "ConnectApi.InsPolicyLmtCalcStandingNode"
domain: insurance-developer-guide
topic: connectapiinspolicylmtcalcstandingnode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.500Z
estimatedTokens: 666
keywords: [ConnectApi.InsPolicyLmtCalcStandingNode, Node, representation, insurance, policy, limit, standing, calculation]
---

# ConnectApi.InsPolicyLmtCalcStandingNode

> Node representation for an insurance policy limit standing calculation.

# ConnectApi.InsPolicyLmtCalcStandingNode

Node representation for an insurance policy limit standing calculation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| applicableActions | List<String> | List of actions that initiate attribute processing. | 65.0 |
| category | String | Category of the limit. | 65.0 |
| claimCoverageId | String | ID of the related claim coverage. | 65.0 |
| claimId | String | ID of the related claim. | 65.0 |
| durationType | String | Duration type over which the attribute consumption is actively monitored during processing. | 65.0 |
| initialAmount | Double | Configured amount. | 65.0 |
| initialValue | Integer | Configured value of the limit. | 65.0 |
| itemType | String | Type of the item. | 65.0 |
| parentMappedScopeId | String | ID of the parent product attribute mapped scope that's associated with the product attribute to define a parent-child relationship between attribute mappings. | 65.0 |
| pendingAmount | Double | Amount that's pending. | 65.0 |
| pendingValue | Integer | Value that's pending. | 65.0 |
| policyAssetId | String | ID of the related policy asset. | 65.0 |
| policyCoverageId | String | ID of the related policy coverage. | 65.0 |
| policyLimitId | String | ID of the insurance policy limit record. | 65.0 |
| policyLimitStandingKey | String | Unique identifier for the insurance policy limit standing. | 65.0 |
| policyParticipantId | String | ID of the related policy participant. | 65.0 |
| predictedRemainingAmount | Double | Remaining amount to carry forward for the next payment after calculating the pending amount. | 65.0 |
| predictedRemainingValue | Integer | Remaining value to carry forward for the next payment after calculating the pending value. | 65.0 |
| prodtAttrMappedScopeId | String | ID of the product attribute mapped scope that defines how a product attribute is associated with a specific scope, such as a product type or category. | 65.0 |
| remainingAmount | Double | Remaining amount to carry forward for the next payment. | 65.0 |
| remainingValue | Integer | Remaining value to carry forward for the next payment. | 65.0 |
| scope | String | Scope where the limit is applied. | 65.0 |
| subCoverageName | String | Name of the sub-coverage. | 65.0 |
| totalUsedAmount | Double | Total amount that's used to date. | 65.0 |
| totalUsedValue | Integer | Total value that's used to date. | 65.0 |
| trackingEndDate | Date | End date of the duration period that’s used to calculate the current standing. | 66.0 |
| trackingStartDate | Date | Start date of the duration period that’s used to calculate the current standing. | 66.0 |
