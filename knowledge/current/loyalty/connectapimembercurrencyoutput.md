---
title: "ConnectApi.MemberCurrencyOutput"
domain: loyalty
topic: connectapimembercurrencyoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.758Z
estimatedTokens: 680
keywords: [ConnectApi.MemberCurrencyOutput, Output, representation, loyalty, program, member's, associated, currencies]
---

# ConnectApi.MemberCurrencyOutput

> Output representation of the details of the loyalty program member's
      associated currencies.

# ConnectApi.MemberCurrencyOutput

Output representation of the details of the loyalty program member's associated currencies.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additionalLoyaltyMember​CurrencyFields | Map<String, Object> | The details of the custom fields added in the Loyalty Member Currency object. | 55.0 |
| escrowPointsBalance | Double | The escrow points balance of the member for the currency. | 55.0 |
| expirablePoints | Double | The number of points that the member hasn't redeemed for the currency. | 55.0 |
| lastAccrualProcessed​Date | Datetime | The date on which the member's accruals for the currency were last processed. | 55.0 |
| lastEscrowProcessed​Date | Datetime | The date on which the member's escrow points were last rolled over to their points balance for the currency. | 55.0 |
| lastExpirationProcess​RunDate | Datetime | The date on which the member's points were last expired for the currency. | 55.0 |
| lastPoints​AggregationDate | Datetime | The date on which the member's points for the fixed type non-qualifying currency were last aggregated. | 55.0 |
| lastPointsResetDate | Datetime | The date on which the member's points for the currency were last reset. | 55.0 |
| loyaltyMember​CurrencyName | String | The name of the Loyalty Member Currency record. | 55.0 |
| loyaltyProgram​CurrencyId | String | The ID of the loyalty program currency associated with the member. | 55.0 |
| loyaltyProgram​CurrencyName | String | The name of the loyalty program currency associated with the member. | 55.0 |
| memberCurrencyId | String | The ID of the loyalty member currency record. | 55.0 |
| nextQualifying​PointsResetDate | Datetime | The date on which the member's points balance for the qualifying currency is reset next. | 55.0 |
| pointsBalance | Double | The points balance of the member for the currency. | 55.0 |
| qualifyingPoints​BalanceBeforeReset | Double | The last point balance of the member before the member's points balance was reset to zero for the qualifying currency. | 55.0 |
| totalEscrow​PointsAccrued | Double | The total number of points that the member has accrued in escrow for the currency. | 55.0 |
| totalEscrow​RolloverPoints | Double | The total number of points that has rolled over from the member's escrow point balance to the member's points balance for the currency. | 55.0 |
| totalPointsAccrued | Double | The total number of points the member has accrued for the currency. | 55.0 |
| totalPointsExpired | Double | The total number of points that have expired for the member. | 55.0 |
| totalPointsRedeemed | Double | The total number of points the member has redeemed for the currency. | 55.0 |
