---
title: "Advocate Enrollment"
domain: referral-marketing
topic: advocate-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.912Z
estimatedTokens: 531
keywords: [Advocate, Enrollment, Enroll, new, customer, referral, promotion, REST, HTTP, Inputs, Outputs]
---

# Advocate Enrollment

> Enroll an existing or new customer as an advocate of a referral promotion.

# Advocate Enrollment

Enroll an existing or new customer as an advocate of a referral promotion.

This action is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/enrollAdvocateB2bReferralProm

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| program​Name | TypeStringDescriptionRequired. Loyalty program name associated with the promotion. |
| promotion​Id | TypeStringDescriptionPromotion ID of the promotion. The account is enrolled as an advocate for this promotion. |
| promotion​Code | TypeStringDescriptionPromotion code used to enroll accounts as an advocate in this promotion. |
| account​Id | TypeStringDescriptionAccount ID of the account that is going to be enrolled as an advocate. |
| member​Status | TypeStringDescriptionStatus of the new advocate after enrollment is completed. |
| membership​Number | TypeStringDescriptionMembership number of the account that is enrolled as a loyalty program member. |
| referral​First​Name | TypeStringDescriptionThe first name of the referral who signed up to be a customer, or to make a purchase. |
| enrollment​Channel | TypeStringDescriptionChannel used by the advocate to join the referral program. |

## Outputs

| Output | Details |
| --- | --- |
| program​Name | TypeStringDescriptionRequired. Loyalty program name associated with the promotion. |
| promotion​Code | TypeStringDescriptionPromotion code used to enroll accounts as an advocate in this promotion. |
| member​Id | TypeStringDescriptionPromotion code used to enroll accounts as an advocate in this promotion. |
| account​Id | TypeStringDescriptionAccount ID of the account that is going to be enrolled as an advocate. |
| membership​Number | TypeStringDescriptionMembership number of the account that is enrolled as a loyalty program member. |
| transaction​Journal​Ids | TypeStringDescriptionThe comma separate list of transaction journal IDs created for target member enrollment. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[
      {
         "programName": "demo",
         "promotionId": "0c8xx00000001NVAAY",
         "accountId": "001xx000003Ge63AAC"
 }
 ]
}
```

```
{
"actionName": "enrollAdvocateB2bReferralProm",
"errors": null,
"invocationId": null,
"isSuccess": true,
"outcome": null,
"outputValues": {
"membershipNumber": "BTMADV1",
"accountId": "001xx000003Ge63AAC",
"programName": "RP01",
"referralCode": "PN4SCF73-RPT01",
"promotionCode": "RPT01",
"transactionJournals": [
"0lVxx00000001SL"
],
"memberId": "0lMxx00000000Mb"
},
"sortOrder": -1,
"version": 1
}
]
```
