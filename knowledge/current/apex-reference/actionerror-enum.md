---
title: "ActionError Enum"
domain: apex-reference
topic: actionerror-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:44.168Z
estimatedTokens: 166
keywords: [ActionError, error, occurred, execution, actionable, notification]
---

> Specifies the error that occurred during the execution of an actionable notification.

# ActionError Enum

Specifies the error that occurred during the execution of an actionable notification.

## Enum Values

The following are the values of the Messaging.ActionError enum.

| Value | Description |
| --- | --- |
| ACCESS_DENIED | Indicates that the user is not authorized to execute the action. |
| ACTION_NOT_IMPLEMENTED | Indicates that the action identifier is unsupported. |
| INTERNAL_ERROR | Indicates an internal error during execution of the action. |
| INVALID_ACTION_PARAMETERS | Indicates that the parameters passed to the methods for Messaging.ActionableNotification.Builder are invalid. |
| INVALID_STATE | Indicates an invalid state. |
