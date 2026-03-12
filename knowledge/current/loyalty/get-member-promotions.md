---
title: "Get Member Promotions"
domain: loyalty
topic: get-member-promotions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.105Z
estimatedTokens: 375
keywords: [Member, Promotions, View, eligible, loyalty, URL, Sample, JSON, Requests, Retrieve, asynchronously, requesting, data, program, process, API, Resource, Input, Output]
---

# Get Member Promotions

> Retrieve a list of promotions that the member is eligible for, while asynchronously
  requesting data from the Get Member Promotions loyalty program process API.

# Get Member Promotions

Retrieve a list of promotions that the member is eligible for, while asynchronously requesting data from the Get Member Promotions loyalty program process API.

## Resource

Here’s the request when the input parameter is member ID.

```

```

## Signature

```

```

Here’s the request when the input parameter is membership number.

```

```

## Signature

```

```

## Input Parameters

| Parameter | Types | Description | Required or Optional |
| --- | --- | --- | --- |
| devMode | Boolean | Indicates whether the request is run in developer mode ((true)) or not ((false)).. | Optional |
| memberId | String | Identifier of the member whose promotions are being retrieved. | Required |
| membershipNumber | String | The membership number of the member whose promotions are being retrieved. | Required |
| version | String | Version of the API. The request body is available in version 55.0 and later. | Optional |

## Sample Output

```

```

## Output Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| description | String | The description of the promotion. |
| endDate | String | The end date of the promotion. |
| fulfillmentAction | String | Specifies the fulfillment action of the related promotion. Possible values are: Credit_Points and Issue_Voucher |
| imageName | String | The name for the promotion image. |
| loyaltyProgramCurrency | String | The loyalty program currency associated with the promotion. |
| loyaltyPromotionType | String | The type of promotion. Possible values are:CumulativeStandardJoint |
| maximumPromotionRewardValue | Double | The value that can be accumulated for the promotion. |
| memberEligibilityCategory | String | Specifies whether the loyalty program member is eligible for the promotion. Possible values are:EligibleEligibleButNotEnrolledIneligible |
| message | String | The request response message. |
| promEnrollmentStartDate | String | The date when the enrollment in the related promotion starts. |
| promotionEnrollmentEndDate | String | The date when the enrollment in the related promotion ends. |
| promotionEnrollmentRqr | Boolean | Indicates whether the related promotion requires member enrollment. |
| promotionId | String | The ID related to the promotion. |
| promotionImageURL | String | The URL for the promotion image. In the promotion record, enter an image URL and ensure that the webpage that hosts the image is publicly accessible. |
| promotionName | String | The name of the promotion. |
| startDate | String | The start date of the related promotion. |
| status | Boolean | Indicates whether the member is eligible to enroll for the promotion. |
| totalPromotionRewardPointsVal | Double | The total points credited to the loyalty program member for the related promotion. |

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/View Promotions
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMRM0000004G5h2AE"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"M1234"
      }
   ]
}
```

```
{
   "message":null,
   "outputParameters":{
      "outputParameters":{
         "results":[
            {
               "promotionEnrollmentRqr":false,
               "loyaltyPromotionType":"STANDARD",
               "memberEligibilityCategory":"Eligible",
               "promotionName":"doc_promo_1",
               "promotionId":"0c8RM0000004DnXYAU",
               "startDate":"2022-09-01"
            }
         ]
      }
   },
   "simulationDetails":{
      
   },
   "status":true
}
```

```
getPromotions(memberId:version:devMode:)
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
