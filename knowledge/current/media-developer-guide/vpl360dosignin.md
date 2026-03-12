---
title: "VPL360_DoSignIn"
domain: media-developer-guide
topic: vpl360dosignin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.854Z
estimatedTokens: 120
keywords: [VPL360_DoSignIn, Integration, Procedure, customers, log, self, care, portal, VPL360, _DoSignIn, Sample, Input, Output, Calls]
---

# VPL360_DoSignIn

> This Integration Procedure allows existing customers to log in to the self
      care portal.

# VPL360\_DoSignIn

This Integration Procedure allows existing customers to log in to the self care portal.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| password | Required |
| userName | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Customer Login

-   Components:

    -   LWC: vplS360SelfCareLogin.js


## Calls

-   Remote Action: performSignIn

    -   Class: VPLUserDetails

    -   Method: doSignIn

## Code Examples

```
{
	"password": "Aug2020!",
	"userName": "john@example.org"
}
```

```
{
"redirectUrl":"URL to be redirected to",
"msg":"Login Successful"
}
```
