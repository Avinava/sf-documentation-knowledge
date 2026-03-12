---
title: "Referral Event Input"
domain: referral-marketing
topic: referral-event-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.774Z
estimatedTokens: 966
keywords: [Referral, Event, Input, representation]
---

# Referral Event Input

> Input representation of the request to create a referral
      event.

# Referral Event Input

Input representation of the request to create a referral event.

JSON example

Here’s an example of a payload for an event where the existing member refers his friend, Michael Clare.

```

```

Here’s an example of a payload to know which channel did the referral come from.

```

```

Here’s an example of a payload for an event where Michael Clare signs up for the referral program.

```

```

Here’s an example of a payload for an event where Michael Clare purchases a product.

```

```

Here’s an example of a payload for an event where the existing member refers multiple friends.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activityDateTime | String | The date and time when the referral event took place. | OptionalThis field is required only if the joining date isn’t specified in the request. | 59.0 |
| contactId | String | Contact ID of the referred friend. | OptionalRequired if the referral record exists. | 59.0 |
| email | String | Email address of the referred friend. | OptionalRequired only if the contact ID of the referred friend doesn’t exist. | 59.0 |
| eventType | String | Type of event completed by the referred friend or advocate. Possible values are:EnrollmentPurchaseRefer | Required | 59.0 |
| firstName | String | First name of the referred friend. | OptionalRequired only if the contact ID of the referred friend doesn’t exist. | 59.0 |
| joiningDate | String | Date the referred friend joined as a new customer.This field has been deprecated. In API version 59.0 and later, use the new activityDateTime field. | OptionalThis field is required only if the activity date and time isn’t specified in the request. | 59.0 |
| lastName | String | Family name of the referred friend. | OptionalRequired only if the contact ID of the referred friend doesn’t exist. | 59.0 |
| orderReferenceId | String | External purchase order ID.This field is applicable only when the event type is Purchase. | Optional | 59.0 |
| productId | String | ID of the product purchased by the referral.This field is applicable only when the event type is Purchase. | Optional | 59.0 |
| purchaseAmount | Double | Price of the product purchased by the referred friend.This field is applicable only when the event type is Purchase. | Optional | 59.0 |
| purchaseQuantity | Integer | Quantity purchased by the referred friend.This field is applicable only when the event type is Purchase. | Optional | 59.0 |
| referralAdditionalAttributes | Map<String, String> | Key value pairs for additional information about the referred friend. | Optional | 59.0 |
| referralCode | String | Referral code used by the referred friend to sign up or make a purchase. It’s a combination of the referral code and promotion code in the format, referralCode-promotionCode. | Required | 59.0 |
| referralEmails | String[] | The email addresses of the referral friends. | Optional | 59.0 |
| transactionJournal​AdditionalAttributes | Map<String, String> | Additional details of the transaction journal that is created for the event. | Optional | 59.0 |
| referralChannel | String | Channels such as email and social media that are used to refer a friend. | Optional | 62.0 |
| referralStage | String | The event type to consider based on the stage of the referral promotion. | Optional | 62.0 |
| referredPartyJournalSubtype | String | The activity for which the referred members are rewarded. | Optional | 62.0 |
| optInWhatsApp | Boolean | Indicates whether the new customer has opted in to receive WhatsApp messages from the company. | Optional | 62.0 |
| contactLocale | String | Locale for contact for WhatsApp distribution channel. | Optional | 62.0 |
| contactFieldForLocale | String | Contact field used for Locale WhatsApp distribution channel. | Optional | 62.0 |

## Code Examples

```
{
   "referralCode":"2G11QW4G-PROMOCODE2809",
   "firstName":"Michael",
   "lastName":"Clare",
   "email":"mclare@salesforce.com",
   "activityDateTime":"2023-09-13T00:00:00",
   "eventType":"Refer",
   "referredPartyJournalSubtype":"Sample Activity",
   "referralAdditionalAttributes":{
      "attributes":{
         "phoneNumber":"1234567890",
         "emailOptOut":true
      }
   }
```

```
{
 "referralCode":"2G11QW4G-PROMOCODE2809",
 "contactId": "003xx000004WkhEAAS",
 "firstName":"Michael",
 "lastName":"Clare",
 "email":"michael.clare@salesforce.com",
 "joiningDate":"2021-04-13T00:00:00",
 "eventType": "Purchase",
 "referralChannel":"Facebook",
 "purchaseAmount": 40000,
 "purchaseQuantity": 34,
 "referralAdditionalAttributes" : {
 "attributes": {
 "phoneNumber":"1234567890",
 "PersonHasOptedOutOfEmail": false,
 }
 },
 "transactionJournalAdditionalAttributes": {
 },
 "orderReferenceId": "003xx00000000fxEAA"
}
```

```
{
   "referralCode":"2G11QW4G-PROMOCODE2809",
   "contactId":"003xx000004WkhEAAS",
   "activityDateTime":"2023-09-13T00:00:00",
   "eventType":"Enrollment"
}
```

```
{
   "referralCode":"2G11QW4G-PROMOCODE2809",
   "contactId":"003xx000004WkhEAAS",
   "activityDateTime":"2023-09-13T00:00:00",
   "referralStage":"Purchase",
   "productId":"01txx0000006iGyAAI",
   "purchaseAmount":40000,
   "purchaseQuantity":34,
   "referralAdditionalAttributes":{
      "attributes":{
         "phoneNumber":"1234567890",
         "emailOptOut":true
      }
   },
   "transactionJournalAdditionalAttributes":{
      
   }
}
```

```
{
   "referralCode":"0UGUXMNA-promotiontest098",
   "referralEmails":{
      "emails":[
         "kit.ryan@salesforce.com",
         "amy.sh@salesforce.com"
      ]
   },
   "activityDateTime":"2024-02-12T00:00:00",
   "eventType":"Refer",
   "referralAdditionalAttributes":{
      "attributes":{
         
      }
   },
   "transactionJournalAdditionalAttributes":{
      
   }
}
```
