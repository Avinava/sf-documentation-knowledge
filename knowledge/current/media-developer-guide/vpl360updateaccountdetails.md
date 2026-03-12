---
title: "VPL360_UpdateAccountDetails"
domain: media-developer-guide
topic: vpl360updateaccountdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.927Z
estimatedTokens: 205
keywords: [VPL360_UpdateAccountDetails, Integration, Procedure, self, care, portal, account, VPL360, _UpdateAccountDetails, Sample, Input, Output, Calls]
---

# VPL360_UpdateAccountDetails

> This Integration Procedure is used in the self care portal
      to update account details.

# VPL360\_UpdateAccountDetails

This Integration Procedure is used in the self care portal to update account details.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountData | Required |
| accountId | Required |
| contactId | Required |
| passwordData | Required |
| updateAccountInfo | Required |
| updatePassword | Required |
| updateUserInfo | Required |
| userData | Required |
| userId | Required |

## Sample Output

The account details are updated.

## Called By

-   Flows:

    -   Self care: Account Update Flow Components

-   Components:

    -   LWC: VplS360SelfCareAccountDetails.js


## Calls

-   Data Mapper: VPL360UpdateUserData

-   Data Mapper: VPL360UpdateAccountData

-   Remote Action: ChangePassword

    -   Class: VPLUserDetails

    -   Method: changePassword

## Code Examples

```
{
    "accountData": {
        "billing": {
            "city": "HSR",
            "country": "India",
            "postalCode": 560068,
            "state": "Kar",
            "street": "47 Main"
        },
        "phone": "1231231234",
        "shipping": {
            "city": "HSR",
            "country": "India",
            "customerName": "test Name",
            "postalCode": 560068,
            "state": "Kar",
            "street": "47 Main"
        }
    },
    "accountId": "0013t00001bcYsC",
    "contactId": "0033t0000377nBk",
    "passwordData": {
        "newPassword": "Sep2020!",
        "oldPassword": "Aug2020!",
        "verifyPassword": "Sep2020!"
    },
    "updateAccountInfo": "false",
    "updatePassword": "false",
    "updateUserInfo": "true",
    "userData": {
        "email": "abd@rcb.com",
        "firstName": "Amir",
        "lastName": "Suhail"
    },
    "userId": "0053t000008UYneAAG"
}
```
