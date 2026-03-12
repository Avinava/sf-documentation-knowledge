---
title: "Error with Output"
domain: chatterapi
topic: error-with-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.477Z
estimatedTokens: 235
keywords: [Error, Output, extra, errors, rare, cases, message, isn't, enough, describe, reason, failure, conflicting, precondition, exists]
---

# Error with Output

> Contains extra information about errors. In rare cases, an error message isn't enough to
  describe the reason for a failure. For example, when a conflicting precondition exists, the error
  result can include the information about the cause of the conflict.

# Error with Output

Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enhancedErrorType | String | Indicates the type of the output property. This value is either null or:GroupMembershipRequestError–A nested Group Membership Request. | Small, 39.0 | 39.0 |
| message | String | Description of the error | Small, 29.0 | 27.0 |
| output | Any response body | The response body returned by the requested resource. For example, if a successful request returns a Like response body but an error triggers the Error with Output response body, the value of the output property is a Like response body. | Small, 29.0 | 27.0 |

## Related Topics

- Group Membership Request (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm)
- Like (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm)
