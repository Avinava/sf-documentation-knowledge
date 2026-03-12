---
title: "VPLS360_updateBillingShipping"
domain: media-developer-guide
topic: vpls360updatebillingshipping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.258Z
estimatedTokens: 192
keywords: [VPLS360_updateBillingShipping, Integration, Procedure, processes, Google, API, Address, record, updates, Account, Contact, VPLS360, _updateBillingShipping, Sample, Input, VPLS360_UpdateBillingShipping, user, click, Ship, address]
---

# VPLS360_updateBillingShipping

> This Integration Procedure processes the Google API
        Address record and updates the Account and Contact address fields.

# VPLS360\_updateBillingShipping

This Integration Procedure processes the Google API Address record and updates the Account and Contact address fields.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| billingAccountId | Required |
| formatted_address | Required |
| result | Required |
| updateShipping | Required |

## Sample Output

On success, the values for BillingCity, BillingCountry, BillingPostalCode, BillingState, and BillingStreet are returned.

## Called By

-   Flows:

    -   Web shop : New User Onboarding

    -   Self care : Updating the Primary Address

-   Components:

    -   LWC: vplS360AccountSignup.js

    -   LWC: vplS360SelfCareAccountDetails.js

    -   LWC: vplS360SelfCareBillingDetails.js


## Calls

None.

## Code Examples

```
{
    "billingAccountId": "0013t00001byeKyAAI",
    "result": {
        "address_components": [
            {
                "long_name": "Pisa",
                "short_name": "Pisa",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Pisa",
                "short_name": "Pisa",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Province of Pisa",
                "short_name": "PI",
                "types": [
                    "administrative_area_level_2",
                    "political"
                ]
            },
            {
                "long_name": "Tuscany",
                "short_name": "Tuscany",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "Italy",
                "short_name": "IT",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Pisa, Province of Pisa, Italy"
    },
    "updateShipping": "TRUE"
}
```

```
{
    "AccountId": "0014W0000216IJmQAM",
    "AccountShippingState": "Kar",
    "AccountShippingStreet": "HSR",
    "AccountShippingZip": "123123",
    "AccountShippingcity": "Bng",
    "AccountShippingZipCustomerName": "test123"
}
```

```
Updated Account Shipping details.
```
