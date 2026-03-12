---
title: "Member Currency Output"
domain: loyalty
topic: member-currency-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.523Z
estimatedTokens: 748
keywords: [Member, Currency, Output, loyalty, program, member's, associated, currencies]
---

# Member Currency Output

> Represents the details of the loyalty program member's associated currencies.

# Member Currency Output

Represents the details of the loyalty program member's associated currencies.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalLoyalty​MemberCurrencyFields | Map<String, Object> | The details of the custom fields added in the loyalty member currency object. | Small, 55.0 | 55.0 |
| escrowPoints​Balance | Double | The escrow points balance of the member for the currency. | Small, 55.0 | 55.0 |
| expirablePoints | Double | The number of points that the member hasn't redeemed for the currency. | Small, 55.0 | 55.0 |
| lastAccrualProcessedDate | String | The date on which the member's accruals for the currency were last processed. | Small, 55.0 | 55.0 |
| lastEscrowProcessedDate | String | The date on which the member's escrow points were last rolled over to their points balance for the currency. | Small, 55.0 | 55.0 |
| lastExpiration​ProcessRunDate | String | The date on which the member's points were last expired for the currency. | Small, 55.0 | 55.0 |
| lastPointsAggregationDate | String | The date on which the member's points for the fixed type non-qualifying currency were last aggregated. | Small, 55.0 | 55.0 |
| lastPointsResetDate | String | The date on which the member's points for the currency were last reset. | Small, 55.0 | 55.0 |
| loyaltyMemberCurrencyName | String | The name of the Loyalty Member Currency record. | Small, 55.0 | 55.0 |
| loyaltyProgramCurrencyId | String | The ID of the loyalty program currency associated with the member. | Small, 55.0 | 55.0 |
| loyaltyProgram​CurrencyName | String | The name of the loyalty program currency associated with the member. | Small, 55.0 | 55.0 |
| memberCurrencyId | String | The ID of the Loyalty Member Currency record. | Small, 55.0 | 55.0 |
| nextQualifyingPointsResetDate | String | The date on which the member's points balance for the qualifying currency is reset next. | Small, 55.0 | 55.0 |
| pointsBalance | Double | The points balance of the member for the currency. | Small, 55.0 | 55.0 |
| qualifyingPoints​BalanceBeforeReset | Double | The last point balance of the member before the member's points balance was reset to zero for the qualifying currency. | Small, 55.0 | 55.0 |
| totalEscrowPointsAccrued | Double | The total number of points that the member has accrued in escrow for the currency. | Small, 55.0 | 55.0 |
| totalEscrowRolloverPoints | Double | The total number of points that has rolled over from the member's escrow point balance to the member's points balance for the currency. | Small, 55.0 | 55.0 |
| totalPointsAccrued | Double | The total number of points the member has accrued for the currency. | Small, 55.0 | 55.0 |
| totalPointsExpired | Double | The total number of points that have expired for the member. | Small, 55.0 | 55.0 |
| totalPointsRedeemed | Double | The total number of points the member has redeemed for the currency. | Small, 55.0 | 55.0 |
