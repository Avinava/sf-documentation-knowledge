---
title: "Commerce Webstore Buyer Registration"
domain: chatterapi
topic: commerce-webstore-buyer-registration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.164Z
estimatedTokens: 375
keywords: [Commerce, Webstore, Buyer, Registration, Lets, guest, shopper, register, account, merchant, resource, one-click, checkout, Salesforce, Payments]
---

# Commerce Webstore Buyer Registration

> Lets a guest shopper register an account with a merchant. This resource is for use with
    one-click checkout with Salesforce Payments and
    Salesforce
    Commerce. Before the shopper completes their order, they can choose to save
    their payment and shipping information for future use. This resource creates a Person account,
    user record, and a contact point address for saving shipping information.

# Commerce Webstore Buyer Registration

Lets a guest shopper register an account with a merchant. This resource is for use with one-click checkout with Salesforce Payments and Salesforce Commerce. Before the shopper completes their order, they can choose to save their payment and shipping information for future use. This resource creates a Person account, user record, and a contact point address for saving shipping information.

To use this API, complete these store configurations:

-   Enable Person Accounts
-   Configure self-registration
-   Enable guest user access to the webstore

Resource

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressList | Checkout Address Input[] | Saves the customer’s physical address entered during checkout. | Required | 61.0 |
| captchaToken | String | Generated token used to verify user identity. | Required | 61.0 |
| email | String | Customer’s email address. | Required | 61.0 |
| firstName | String | Customer’s first name. | Required | 61.0 |
| lastName | String | Customer’s last name. | Required | 61.0 |
| phoneNumber | String | Customer’s phone number | Required | 61.0 |

Response body for POST

[Buyer Registration](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_registration.htm "The ID of the registered buyer that is returned in the response.")

## Code Examples

```
/commerce/webstores/webstoreId/buyers/registrations
```

```
{
"captchaToken": "03AFcWeA4v8y87Gsj1H3mlVlKAAoh3m564YSnuKR4-qWeyBqe3iPRyTETL27xH8EuKFSd4vHxGb0kVBQha6k2T
gyxDI892u0Fqzd3XOdp-YrwHG5CEflhsnaIEZ29UdADaWZBEfzkgOOEOw5oOuj5QAcyDJw6STHccU2dqn6CUzsNUdG_CBVd37
TN0bJs3mCJC3oX6k-SeT3qHXgKSf_ES-gsz06UxLleN6IUPhiCWoHeNiEoJ_CShRlGiP93Akj7GaAmiNC7xP5AHJ-QXLBLHrg
OmpJJXaiSH3j99p7o9HI7fz9RZA2AQaGPOly5NzIf-Y94TclezpDkhoPC6clRbpckzeUFuh6YHfzasRIR0NJudsC7
gx0f_RGcrYrxDw8EFbwvK4MJjVACKb-pfZQamt8o6g-UKJ5a5wTWUdoFl4RdrjFJqwQ98q7_NpFumXXzY91Aq1Pmt7j
WCS_WxOPRcixfFlQYd8leapzEv06LxkkHUBA5auiWzdeth5165AnpcyB8SMcf-E7XIu1cIApCSjUkuLdNZ6_MSUnnlHdEmWV
Dpowmb-eH2kHAxthoCXxHyLwAexyHTzi9SjX9LsykocdEMlrruYiqQbMsxxXgp_wT2oPuVjTYjJzkIibEpC82o1ZFLHM
idO2LHmnaKRhwjSqmKZi54Md_QzQSabxhOTAvX2_VpZeLPTqZPh3p1VuLhshmLJsYZnLOJT-uZkHX0F26Fcc2omGIWGYOISO
rDmiPcbeQ3xCWGJxTbn3LrqJ48NlwbUPafknrKtVclg3lB9KZxJZso4ZEyZvwvjNA2De4EvohTQTKY
oFnbqLjvulEyM29jnR6Ncq64oJjL2xbj-FyWqYR4VCcl8WxFCQBdayNRmRBokyyFFHCAQUKL_ooHl09ZP_l3otTomo
YExAQHLM0846dSaJ0xfUDwyPGlt_cEJxl1Jm4NuG4_rA5AB8tvpkDBJGovhM2cOK4AuNBTnCIrI-24gzMX8Cj-sCjh
TsqEw32J5w7DBGDrsjHBKcy4qFJbn84yMdZL6zs4LfSveNujNFau0rdjeQ5FkKRB3XXsGls-kIekCPng3QB
rNlAfDGLPUj7ldEcKeBFj_97G6vGMVjhnoPwr13NBID4DMWgjgmmnUtYIcnn4t898gKQez-Uce9Ja2EKt1-moe0JsOdv
ECNK36sKe-qhKQLNZIwQ18a6yHFP9ymL8R2Qr8XZmI0_IFI_vQ1ahdDza_yr0pHA93E50t4ihd27fQWKiSZpT
phVdQyRQbFpkHfgiOBt74O79m-K6L0ycDsPdbU9vNZOXD5rAfUzcSBkUJeNag9glAGl_eyITDqxAQqTA6dnu
XNgnV-QJ1Va1x1ZGjMwkTnSr9vPljGk8YmhfSMcNYZMCjoHNQw-q2bFfwU6hKfWhcqum4Ye7CkToAPsnwdCgH3
IBmW3KEA8UsJ283IrluqFgpHkTsdX_QjwJBdFQQu4PUF7dtMma2VRVooAExREIR15TkIovGuoUAqj7ZMsjFExv7L
2JJmr17lK2LZIiP5Zhnct830BTCfohcC_kJnXlxQ_QLmJo-orePXVrtF5caxlp4wNILdrM9JKQNxPQvyZgzVwxyXP
VaN6A7XAlBqA-lQpqcdqNhKbNLl62EivnXtXE9nMXv8HQvUrq1rkR3y62y85xNqugK7Yystr4CmKWVTlGhlrhaTlnu3
sFvHrLraw_c-z2xz4lkgIWq4PBt8mOkBC2Cv_RxH6S",
  "email": "jdoe@salesforce.com",
  "phoneNumber": "+18585559876",
  "firstName": "Jose",
  "lastName": "Figueroa",
  "addressList": {
     "addresses": [
       {
        "city": "San Ysidro",
         "companyName": "",
         "country": "US",
         "firstName": "Jose",
         "lastName": "Figueroa",
         "name": "Jose Figueroa",
         "postalCode": "92143",
         "region": "MA",
         "street": "1 Main St"
         }
       ]
    }
```

## Related Topics

- Checkout Address Input[] (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Buyer Registration (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_registration.htm)
