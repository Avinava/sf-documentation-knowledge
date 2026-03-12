---
title: "Schedule Adhoc Promotion Calculation"
domain: retail-api
topic: schedule-adhoc-promotion-calculation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.867Z
estimatedTokens: 155
keywords: [Schedule, Adhoc, Promotion, Calculation, Schedules, off-platform, ad-hoc, transaction]
---

# Schedule Adhoc Promotion Calculation

> Schedules one promotion for off-platform calculation in an ad-hoc
      transaction.

# Schedule Adhoc Promotion Calculation

Schedules one promotion for off-platform calculation in an ad-hoc transaction.

You must first register a transaction using the BEGIN\_JOB\_SCHEDULING\_TRANSACTION request to schedule off-platform calculations.

Resource

```

```

Available version

55.0

Request Parameters

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| adhocTransactionId | String | ID of the adhoc transaction record. | Required |
| salesOrg | String | ID of the sales org. | Required |
| promotion | Object | Promotion object. | Required |

Apex Request Example

```

```

## Code Examples

```
SCHEDULE_ADHOC_PROMOTION_CALCULATION
```

```apex
// name of the salesorg for which the promotion belongs to
String salesOrg = '0001';

// Adhoc Transaction Id obtained from previous call
String adhocTransactionId = 'xxxx-xxxx-xxxxxxxx-xxxx-xxxx';

// Promotion id
String promotionId = 'xxx000000000001';

<namespace>.OffPlatformCallout callout = new <namespace>.OffPlatformCallout(
      'SCHEDULE_ADHOC_PROMOTION_CALCULATION',
      salesOrg
);

// Do request
<namespace>.OffplatformCalloutResponse response = callout.execute(
    txId,
    new Map<String, String> { 'promotionId' => promotionId },
    JSON.serialize(new Map<String, Object> {
       'adhoctransactionid' => adhocTransactionId,
       'salesorg' => salesOrg,
       'promotion' => new <namespace>.PromotionWebServiceCall.WSRequestBodyV1(....)
    })
);

if (response.status != 200) {
    // Handle error
}
```
