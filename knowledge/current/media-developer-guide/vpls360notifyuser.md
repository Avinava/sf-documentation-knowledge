---
title: "VPLS360_notifyUser"
domain: media-developer-guide
topic: vpls360notifyuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.246Z
estimatedTokens: 159
keywords: [VPLS360_notifyUser, Integration, Procedure, subscriber, email, order, VPLS360, _notifyUser, Sample, Input, Output, Calls]
---

# VPLS360_notifyUser

> This Integration Procedure sends the subscriber an email
      with the order details.

# VPLS360\_notifyUser

This Integration Procedure sends the subscriber an email with the order details.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| customerName | Required |
| encryptedString | Required |
| userId | Required |

## Sample Output

The order details are sent to the user as an email.

## Called By

-   Flows:

    -   Web shop: Order Confirmation

-   Components:

    -   LWC: vplS360CartComponent.js


## Calls

-   Data Mapper: getCustomerOrder

-   Integration Procedure: VPLS\_360\_addTag

-   Remote Action: DecryptOrder

    -   Class: VPLUserDetails

    -   Method: decryptInput

## Code Examples

```
{
	"customerName": "John",
	"encryptedString": "kmakSQljSYLOAZLoMEp****",
	"userId": "0054W00000DMUqoQAH"
}
```
