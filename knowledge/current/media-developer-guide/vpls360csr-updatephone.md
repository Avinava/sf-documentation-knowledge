---
title: "vpls360csr-UpdatePhone"
domain: media-developer-guide
topic: vpls360csr-updatephone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.329Z
estimatedTokens: 135
keywords: [vpls360csr-UpdatePhone, Omnistudio, Data, Mapper, loads, updates, phone, number, user, IDs, updated, records, Sample, Input, Output]
---

# vpls360csr-UpdatePhone

> This Omnistudio Data Mapper loads or updates the phone
    number of a user, and returns the IDs for the updated records.

# vpls360csr-UpdatePhone

This Omnistudio Data Mapper loads or updates the phone number of a user, and returns the IDs for the updated records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| ContactId | Required |
| ContactPhone | Required |
| PhoneDetails | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Personal Details

    -   Omniscript: vpls360csr\_UpdatePersonalDetails

        -   Integration Procedure: vpls360csr\_UpdatePersonalDetails

## Code Examples

```
{
"AccountId":"0014x000009RJ95AAG",
"ContactId" :"0034x000006y811AAA",
"PhoneDetails":{
  "ContactPhone" :"829000289989"
}
}
```

```
1- Contact: 0034x000006y811AAA
```
