---
title: "Referral Event"
domain: referral-marketing
topic: referral-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.826Z
estimatedTokens: 231
keywords: [Referral, Event, Output, representation, record, event, records, advocate, refers, friend, referred, friends, sign, purchase, Resource, Input, Sample, REST, HTTP, Inputs]
---

# Referral Event

> Create referral event records when an advocate refers a friend, or when referred friends
  sign up or make a purchase.

# Referral Event

Create referral event records when an advocate refers a friend, or when referred friends sign up or make a purchase.

This action is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processB2bReferralEvent

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| event​Type | TypeStringDescriptionRequired. The type of event that the referral completed. Possible values are:ReferEnrollmentPurchase |
| referral​Code | TypeStringDescriptionRequired. The referral code used by a referral to sign up as a customer, or to make a purchase. The referral code is a combination of the advocate’s referral code and the promotion code separated by a hyphen. |
| activity​Date​Time | TypeDateTimeDescriptionThe date and time when the referral event took place. |
| account​Id | TypeStringDescriptionID of the account who is being referred. |
| lead​Id | TypeStringDescriptionID of the lead record that is used to identify referred members. |
| opportunity | TypeStringDescriptionOpportunity record associated with the referral. |
| product​Id | TypeStringDescriptionThe ID of the product that the referral purchased. |
| purchase​Amount | TypeStringDescriptionThe amount the referral spent to purchase one or more units of a product. |
| purchase​Quantity | TypeStringDescriptionThe number of units that the referral purchased of a product. |

## Outputs

| Output | Details |
| --- | --- |
| account​Id | TypeStringDescriptionID of the account that is associated as a referral program member. |
| referral​Id | TypeStringDescriptionThe ID of the referral record of the person who was referred, or whose referral event is processed. |
| lead​Id | TypeStringDescriptionID of the lead record that is used to identify referred members. |
| referral​Stage | TypeStringDescriptionThe current stage of the referral promotion for a referral. Possible values are:Promotion LaunchedAdvocate Joins PromotionAdvocate Refers FriendFriend Signs UpFriend Completes First Purchase |
| transaction​Journal​Ids | TypeStringDescriptionThe comma separate list of transaction journal IDs created to process the referral event. |
| voucher​List | TypeStringDescriptionThe details of the voucher records created for the referral event. |
| custom​Reward​List | TypeStringDescriptionThe details of the custom reward records created for the referral event. |

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
   "contactIds":[
      "0031Q00002kCusB"
   ],
   "referralIds":[
      "0wi1Q000000ljna"
   ],
   "referralStage":"Friend Completes First Purchase",
   "transactionJournalIds":[
      "0lV1Q0000019gJg",
      "0lV1Q0000019gJh"
   ],
   "voucherId":"0kD1Q000000keXVUAY",
"voucherList": [
 {
 "effectiveDate": "2024-06-14",
 "expirationDate": "2025-04-14",
 "transactionJournalId": "0lV1Q0000019gJg",
 "voucherCode": "SW504FF7",
 "voucherDefinition": "Voucher2",
 "voucherId": "0kD1Q000000keXVUAY"
 },
 {
 "effectiveDate": "2024-06-14",
 "expirationDate": "2025-04-14",
 "transactionJournalId": "0lV1Q0000019gJh",
 "voucherCode": "IKWX6D5D",
 "voucherDefinition": "Voucher2",
 "voucherId": "0kDxx00000002l0EAA"
 }
 ]
 }
```

```
referralEvent(emails:referralCode:eventType:version:devMode)
```

```apex
public struct ReferralEventOutputModel: Codable
```

```
{
   "contactIds":[
      "0031Q00002kCusB"
   ],
   "referralIds":[
      "0wi1Q000000ljna"
   ],
   "referralStage":"Friend Completes First Purchase",
   "transactionJournalIds":[
      "0lV1Q0000019gJg",
      "0lV1Q0000019gJh"
   ],
   "voucherId":"0kD1Q000000keXVUAY"
}
```

```
{
   "inputs":[
      {
         "accountId": "001xx000003Ge9HAAS",
  "activityDateTime": "2025-02-13T00:00:00",
  "referralCode": "FR886GFJ-NONMCB2B",
  "eventType": "Refer",
  "purchaseAmount": 40000,
  "purchaseQuantity": 34
 }
 ]
}
```

## Related Topics

- Referral Event Output (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_event_output.htm)
