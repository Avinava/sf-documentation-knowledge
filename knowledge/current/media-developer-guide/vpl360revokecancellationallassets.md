---
title: "VPL360_RevokeCancellationAllAssets"
domain: media-developer-guide
topic: vpl360revokecancellationallassets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.913Z
estimatedTokens: 132
keywords: [VPL360_RevokeCancellationAllAssets, Integration, Procedure, revoke, in-progress, cancellation, assets, account, VPL360, _RevokeCancellationAllAssets, Sample, Input, Output, Calls]
---

# VPL360_RevokeCancellationAllAssets

> This Integration Procedure is used to revoke the
        in-progress cancellation of assets for an account.

# VPL360\_RevokeCancellationAllAssets

This Integration Procedure is used to revoke the in-progress cancellation of assets for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription page

-   Components:

    -   LWC: vplS360SelfCareSubscriptionYourSubscription.js


## Calls

-   Remote Action:

    -   Class: vlocity\_cmt.MediaCmexAppHandler

    -   Method: revokeCancelAllAssets

## Code Examples

```
"{
    ""AccountId"": ""0014W00002C0J1u""
}"
```

```
{"msg":"'Your cancellation has been Revoked Successfully. Please enjoy our services',"success":"true"}
```
