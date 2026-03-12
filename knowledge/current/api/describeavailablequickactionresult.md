---
title: "DescribeAvailableQuickActionResult"
domain: api
topic: describeavailablequickactionresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.984Z
estimatedTokens: 282
keywords: [DescribeAvailableQuickActionResult, array, objects]
---

# DescribeAvailableQuickActionResult

> Returns an array of DescribeAvailableQuickActionResult objects.

# DescribeAvailableQuickActionResult

Returns an array of DescribeAvailableQuickActionResult objects.

The [describeAvailableQuickActions()](atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactions.htm "In API version 28.0, describes details about actions available for a specified parent. In API version 29.0 and greater, describes details about actions available for a specified context.") call returns an array of DescribeAvailableQuickActionResult objects. In API version 28.0, each DescribeAvailableQuickActionResult object represents details about actions available for a specified parent. In API version 29.0 and greater, each DescribeAvailableQuickActionResult object represents details about actions available for a specified context.

| Name | Type | Description |
| --- | --- | --- |
| actionEnumOrId | string | The unique ID for the action. If the action doesn’t have an ID, its API name is used.This field is available in API version 35.0 and later. |
| label | string | The action label. |
| name | string | The action name. |
| type | string | LogACallSocialPostCanvasCreateVisualforcePageUpdate |

## Related Topics

- describeAvailableQuickActions() (atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactions.htm)
