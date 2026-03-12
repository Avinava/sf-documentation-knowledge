---
title: "FetchAccountMasterDetails"
domain: media-developer-guide
topic: fetchaccountmasterdetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.060Z
estimatedTokens: 138
keywords: [FetchAccountMasterDetails, Omnistudio, Data, Mapper, fetch, account, custom, Sample, Input, Output]
---

# FetchAccountMasterDetails

> This Omnistudio Data Mapper is used to fetch account details
    for a custom account.

# FetchAccountMasterDetails

This Omnistudio Data Mapper is used to fetch account details for a custom account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| userId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Webshop: Post User registration

    -   SelfCare: Selfcare landing page

-   Components:

    -   LWC: vplS360AccountSignup.js

    -   LWC: vplS360SelfCareAccountDetails.js

    -   LWC: vplS360SelfCareConfirmOtc.js

    -   Integration Procedure: VPL360\_ExtractAccountForUser

## Code Examples

```
{
    "userId": "0054W00000CRfy1QAD"
}
```

```
{
  "Account": {
    "shipping": {
      "street": "Kullu",
      "state": "Himachal Pradesh",
      "postalCode": "175105",
      "country": "India",
      "city": "Kasol"
    },
    "billing": {
      "street": "Kullu",
      "state": "Himachal Pradesh",
      "postalCode": "175105",
      "formattedAddress": "Kasol, Himachal Pradesh 175105, India",
      "country": "India",
      "city": "Kasol"
    }
  },
  "Asset": [
    {
      "AssetCreatedDate": "2020-11-10T05:21:11.000Z"
    }
  ],
  "Case": [
    {
      "Subject": "Testing",
      "Status": "New",
      "CreatedDate": "2020-11-11T14:38:37.000Z",
      "CaseReason": "User didn't attend training",
      "CaseNumber": "00001030"
    }
  ],
  "Payment": [
    {
      "PaymentId": "a3Q4W000000gXHDUA2",
      "ExpirationYear": "2034",
      "ExpirationMonth": "9",
      "CardNumber": "4242424242424242"
    }
  ],
  "User": {
    "lastName": "Jay1",
    "firstName": "Manju1",
    "email": "manju2@gmail.com",
    "Id": "0054W00000CRfy1QAD",
    "ContactId": "0034W00002GdStUQAV",
    "AccountId": "0014W000029yRBAQA2"
  }
}
```
