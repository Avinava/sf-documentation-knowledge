---
title: "vpls360csr_UpdatePersonalDetails"
domain: media-developer-guide
topic: vpls360csrupdatepersonaldetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.325Z
estimatedTokens: 239
keywords: [vpls360csr_UpdatePersonalDetails, Integration, Procedure, updates, phone, number, email, address, account, vpls360csr, _UpdatePersonalDetails, Sample, Input, Output, Calls]
---

# vpls360csr_UpdatePersonalDetails

> This Integration Procedure updates the name, phone number,
    and email address for an account.

# vpls360csr\_UpdatePersonalDetails

This Integration Procedure updates the name, phone number, and email address for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| BillingAddressChange | Required |
| BillingCity | Required |
| ContactId | Required |
| EmailChange | Required |
| EmailDetails | Required |
| InteractionNode | Required |
| interactionTopicId | Required |
| NameChange | Required |
| NameDetails | Required |
| PhoneChange | Required |
| PhoneDetails | Required |
| ShippingAddress | Required |
| ShippingAddressChange | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Update Personal Details

-   Components:

    -   Omniscript: vpls360csr\_UpdatePersonalDetails


## Calls

-   Data Mapper: vpls360csr-UpdateAccountName

-   Data Mapper: vpls360csr-UpdateBillingAddress

-   Data Mapper: vpls360csr-UpdatePhone

-   Data Mapper: vpls360Csr-UpdateEmail

## Code Examples

```
{
  "ContactId": "0033t000037TkbPAAS",
  "BillingAddressChange": true,
  "ShippingAddressChange": true,
  "BillingAddress": {
    "BillingCity": "bilCty4",
    "BillingCountry": "bilCnt4",
    "BillingState": "bilStt4",
    "BillingStreet": "billStr4",
    "BillingZipCode": "123124"
  },
  "ShippingAddress": {
    "ShippingCity": "shpCty",
    "ShippingCountry": "shpCnt",
    "ShippingState": "shpStt",
    "ShippingStreet": "shpStr",
    "ShippingZipCode": "555666"
  },
  "NameChange": true,
  "NameDetails": {
    "FirstName": "Walter",
    "LastName": "White",
    "Salutation": "Mr."
  },
  "PhoneChange" : true,
  "PhoneDetails":{
    "ContactPhone": 1231231231
  },
  "EmailChange" : true,
  "EmailDetails": {
    "Email": "Walterjr@bb1.com"
  },
  "InteractionNode":{
    "interactionTopicId" : "a1R5w000006mvWFEAY"
  }
}
```

```
{
  "response": {},
  "ResponseStatus": true,
  "UpdateInteractionTopic": {
    "ineractionStatus": {
      "UpsertSuccess": true,
      "vlocity_cmt__Outcome__c": "sucessful",
      "Id": "a154x000000f4gNAAQ"
    }
  },
  "UpdateInteractionTopicStatus": true,
  "UpdateEmail": {
    "ActualTime": 2220,
    "CpuTime": 1491,
    "User_2": [
      {
        "UpsertSuccess": true,
        "Id": "0054x000002EvdFAAS",
        "ContactId": "0034x000006y85xAAA"
      }
    ],
    "Contact_1": [
      {
        "UpsertSuccess": true,
        "Id": "0034x000006y85xAAA"
      }
    ],
    "error": "OK",
    "responseType": "SObject"
  },
  "UpdateEmailStatus": true,
  "UpdatePhone": {
    "ActualTime": 1839,
    "CpuTime": 1208,
    "Account_2": [
      {
        "UpsertSuccess": true,
        "Phone": "1231231231",
        "Id": "0014x000009RJGWAA4"
      }
    ],
    "Contact_1": [
      {
        "UpsertSuccess": true,
        "Phone": "1231231231",
        "Id": "0034x000006y85xAAA"
      }
    ],
    "error": "OK",
    "responseType": "SObject"
  },
  "UpdatePhoneStatus": true,
  "UpdateName": {
    "ActualTime": 1600,
    "CpuTime": 1046,
    "User_3": [
      {
        "UpsertSuccess": true,
        "Id": "0054x000002EvdFAAS",
        "ContactId": "0034x000006y85xAAA",
        "LastName": "White",
        "FirstName": "Walter"
      }
    ],
    "Account_2": [
      {
        "UpsertSuccess": true,
        "Name": "Walter White",
        "Id": "0014x000009RJGWAA4"
      }
    ],
    "Contact_1": [
      {
        "UpsertSuccess": true,
        "Salutation": "Mr.",
        "LastName": "White",
        "FirstName": "Walter",
        "Id": "0034x000006y85xAAA"
      }
    ],
    "error": "OK",
    "responseType": "SObject"
  },
  "UpdateNameStatus": true,
  "UpdateAddress": {
    "ActualTime": 667,
    "CpuTime": 510,
    "Account_2": [
      {
        "UpsertSuccess": true,
        "ShippingStreet": "shpStr",
        "ShippingState": "shpStt",
        "ShippingPostalCode": "555666",
        "ShippingCountry": "shpCnt",
        "ShippingCity": "shpCty",
        "BillingStreet": "billStr4",
        "BillingState": "bilStt4",
        "BillingPostalCode": "123124",
        "BillingCountry": "bilCnt4",
        "BillingCity": "bilCty4",
        "Id": "0014x000009RJGWAA4"
      }
    ],
    "Contact_1": [
      {
        "UpsertSuccess": true,
        "MailingStreet": "billStr4",
        "MailingState": "bilStt4",
        "MailingPostalCode": "123124",
        "MailingCountry": "bilCnt4",
        "MailingCity": "bilCty4",
        "Id": "0034x000006y85xAAA"
      }
    ],
    "error": "OK",
    "responseType": "SObject"
  },
  "UpdateAddressStatus": true,
  "options": {
    "useQueueableApexRemoting": false,
    "queueableChainable": false,
    "ignoreCache": true,
    "resetCache": false,
    "chainable": false
  },
  "InteractionNode": {
    "interactionTopicId": "a154x000000f4gNAAQ"
  },
  "EmailDetails": {
    "Email": "Walterjr@bb1.com"
  },
  "EmailChange": true,
  "PhoneDetails": {
    "ContactPhone": 1231231231
  },
  "PhoneChange": true,
  "NameDetails": {
    "Salutation": "Mr.",
    "LastName": "White",
    "FirstName": "Walter"
  },
  "NameChange": true,
  "ShippingAddress": {
    "ShippingZipCode": "555666",
    "ShippingStreet": "shpStr",
    "ShippingState": "shpStt",
    "ShippingCountry": "shpCnt",
    "ShippingCity": "shpCty"
  },
  "BillingAddress": {
    "BillingZipCode": "123124",
    "BillingStreet": "billStr4",
    "BillingState": "bilStt4",
    "BillingCountry": "bilCnt4",
    "BillingCity": "bilCty4"
  },
  "ShippingAddressChange": true,
  "BillingAddressChange": true,
  "ContactId": "0034x000006y85xAAA"
}
```
