---
title: "VPL360_ExtractAccountForUser"
domain: media-developer-guide
topic: vpl360extractaccountforuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.862Z
estimatedTokens: 149
keywords: [VPL360_ExtractAccountForUser, Integration, Procedure, fetches, account, address, payment, case, user, VPL360, _ExtractAccountForUser, Sample, Input, Output, Calls]
---

# VPL360_ExtractAccountForUser

> This Integration Procedure fetches the account address,
    payment method, case details and user details for the specified user.

# VPL360\_ExtractAccountForUser

This Integration Procedure fetches the account address, payment method, case details and user details for the specified user.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web Shop: Post user registration

    -   Self Care: Self care landing page

-   Components:

    -   LWC: vplS360AccountSignup.js

    -   LWC: vplS360SelfCareAccountDetails.js

    -   LWC: vplS360SelfCareConfirmOtc.js


## Calls

-   Data Mapper: FetchAccountMasterDetails

## Code Examples

```
{
	"userId": "0054W00000CRwmKQAT"
}
```

```
{
  "Account": {
    "shipping": {
      "street": "3493,County Road 4100,Montgomery County",
      "state": "Kansas",
      "postalCode": "67301",
      "country": "United States",
      "city": "Independence"
    },
    "billing": {
      "street": "224,South 16th Street,Montgomery County",
      "state": "Kansas",
      "postalCode": "67301",
      "country": "United States",
      "city": "Independence"
    },
    "phone": "+1-515-516-0624"
  },
  "Payment": [
    {
      "PaymentId": "a3Q4W000000gXzSUAU"
    }
  ],
  "Case": [
    {
      "Subject": "Problem with device",
      "Status": "New",
      "CreatedDate": "2020-11-11T14:38:37.000Z",
      "CaseReason": "Wrong set-up",
      "CaseNumber": "00001030"
    }
  ],
  "User": {
    "lastName": "Smith",
    "firstName": "John",
    "email": "johnsmith@example.com",
    "Id": "0054W00000CRxFqQAL",
    "ContactId": "0034W00002IRPRSQA5",
    "AccountId": "0014W00002AFIFRQA5"
  }
}
```
