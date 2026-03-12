---
title: "Action Link Input"
domain: chatterapi
topic: action-link-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.931Z
estimatedTokens: 219
keywords: [Action, Link, Input, desired, execution, status]
---

# Action Link Input

> The desired execution status of an action link.

# Action Link Input

The desired execution status of an action link.

Root XML tag

<actionLink>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The current status of the action. Values are:FailedStatus—The action link execution failed.NewStatus—The action link is ready to be executed. Available for Download and Ui action links only.PendingStatus—The action link is executing. Choosing this value triggers the API call for Api and ApiAsync action links.SuccessfulStatus—The action link executed successfully. | Required | 33.0 |

#### See Also

-   [Update the Status of an Action Link or Invoke an Action Link](atlas.en-us.chatterapi.meta/chatterapi/quickreference_patch_action_link_status.htm "Update the status of an action link or invoke an action link.")

## Code Examples

```
{  "status" : "SuccessfulStatus"  }
```

## Related Topics

- Update the Status of an Action Link or Invoke an Action Link (atlas.en-us.chatterapi.meta/chatterapi/quickreference_patch_action_link_status.htm)
