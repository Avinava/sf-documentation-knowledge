---
title: "vpls360csr_ChangePersonalDetailsPreProcess"
domain: media-developer-guide
topic: vpls360csrchangepersonaldetailspreprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.274Z
estimatedTokens: 146
keywords: [Integration, Procedure, agent, console, change, personal, account, vpls360csr, _ChangePersonalDetailsPreProcess, Sample, Input, Output, Calls]
---

# vpls360csr_ChangePersonalDetailsPreProcess

> This Integration Procedure is used in the agent console to
      change the personal details of an account.

# vpls360csr\_ChangePersonalDetailsPreProcess

This Integration Procedure is used in the agent console to change the personal details of an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| interactionId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Change Personal Details of an Account

-   Components:

    -   Omniscript: vpls360csrChangePersonalDetails


## Calls

-   Data Mapper: vpls360csr-GetCustomerDetailsByContextId

-   Integration Procedure Action: VPL\_CreateCustomerInteractionTopicInOS

## Code Examples

```
{
    "interactionId": "a1S4W000006A1aIUAS"
}
```

```
{
  "InteractionNode": {
    "AccountId": "",
    "ContactId": "",
    "interactionId": "a1S4W000006A1aIUAS",
    "interactionTopicId": "a1R4W000004cw7ZUAQ"
  },
  "PersonalDetails": {
    "ShippingStreet": "Bangalore Urban",
    "ShippingState": "Karnataka",
    "ShippingCountry": "India",
    "ShippingCity": "Bengaluru",
    "BillingStreet": "Bangalore Urban",
    "BillingState": "Karnataka",
    "BillingCountry": "India",
    "BillingCity": "Bengaluru",
    "LastName": "Express",
    "FirstName": "Media",
    "ContactId": "0034W00002IR1JQQA1",
    "ContactEmail": "PSR@media.org"
  }
}
```
