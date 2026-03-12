---
title: "vpls360csr_GetProfileDetails"
domain: media-developer-guide
topic: vpls360csrgetprofiledetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.297Z
estimatedTokens: 102
keywords: [vpls360csr_GetProfileDetails, Integration, Procedure, agent, console, profile, account, vpls360csr, _GetProfileDetails, Sample, Input, Output, Calls]
---

# vpls360csr_GetProfileDetails

> This Integration Procedure is used in the agent console to
    get the profile details for an account.

# vpls360csr\_GetProfileDetails

This Integration Procedure is used in the agent console to get the profile details for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent Console: To get profile details of an account


## Calls

-   Data Mapper: vpls360csr-GetCustomerDetails

## Code Examples

```
{
    ""ContextId"": ""a1S4W000006A1eAUAS""
}
```

```
{
  "CustomerDetails": {
    "Name": "John Day",
    "MailingStreet": "Bangalore Urban",
    "MailingState": "Karnataka",
    "MailingCity": "Bengaluru",
    "FirstName": "John",
    "Email": "psr74263724367246@media.org",
    "AccountStatus": "Active"
  }
}
```
