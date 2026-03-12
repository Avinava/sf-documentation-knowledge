---
title: "VPL360_GetCurrentUserDetails"
domain: media-developer-guide
topic: vpl360getcurrentuserdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.873Z
estimatedTokens: 133
keywords: [VPL360_GetCurrentUserDetails, Integration, Procedure, self, care, portal, user, subscriber, logged, VPL360, _GetCurrentUserDetails, Sample, Input, Output, Calls]
---

# VPL360_GetCurrentUserDetails

> This Integration Procedure is used in the self care portal
      to get user details after the subscriber has logged in.

# VPL360\_GetCurrentUserDetails

This Integration Procedure is used in the self care portal to get user details after the subscriber has logged in.

## Sample Input

This Integration Procedure fetches details of the logged in user. No input is required.

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Fetch Details Before Loading Landing Page

-   Components:

    -   LWC: vplS360SelfCareLanding.js


## Calls

-   Remote Action: GetUserData

    -   Class: VPLUserDetails

    -   Method: getUserData

## Code Examples

```
{
	"accountId": "",
	"firstName": "Jane",
	"licensed": true,
	"userId": "0054W00000CRVRaQAP",
	"userName": "jane.s@example.org"
}
```
