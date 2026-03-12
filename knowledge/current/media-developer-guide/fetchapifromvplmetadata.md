---
title: "FetchAPIFromVPLMetadata"
domain: media-developer-guide
topic: fetchapifromvplmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.063Z
estimatedTokens: 127
keywords: [FetchAPIFromVPLMetadata, Omnistudio, Data, Mapper, fetches, Google, API, key, validating, address, Sample, Input, Output]
---

# FetchAPIFromVPLMetadata

> This Omnistudio Data Mapper fetches the Google API key value
    for validating an address.

# FetchAPIFromVPLMetadata

This Omnistudio Data Mapper fetches the Google API key value for validating an address.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| metadataName | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Webshop: New User Onboarding

    -   SelfCare: Updating the primary address

-   Components:

    -   LWC: vplS360AccountSignup.js

    -   LWC: vplS360SearchAddress.js

    -   Integration Procedure: VPLS360\_predictAddress

## Code Examples

```
{
    "metadataName": "Google_API_Public_Key"
}
```

```
{
  "Name": "Google_API_Public_Key",
  "ConfigValue": "AIzaSyDWLziF73XUtjB-WiMsIFqWx8-IuX8MbP8",
  "Active": true
}
```
