---
title: "Buyer Registration Input"
domain: chatterapi
topic: buyer-registration-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.116Z
estimatedTokens: 181
keywords: [Buyer, Registration, Input, customer’s, account, store]
---

# Buyer Registration Input

> Provides a customer’s account registration information for your store.

# Buyer Registration Input

Provides a customer’s account registration information for your store.

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

## Code Examples

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
