---
title: "Comment Capability, Verified"
domain: chatterapi
topic: comment-capability-verified
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.903Z
estimatedTokens: 781
keywords: [Comment, Capability, Verified, status, Mark, unverified]
---

# Comment Capability, Verified

> Get the verified status of a comment. Mark a comment as verified or
      unverified.

# Comment Capability, Verified

Get the verified status of a comment. Mark a comment as verified or unverified.

Resource

```

```

```

```

The commentId must be the ID of a comment on a question post. Only one comment on a question post can be marked as verified.

Available version

41.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

<verifiedCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isVerified | Boolean | Specifies whether to mark the comment as verified (true) or unverified (false).Only verified comments can be marked as unverified, and only unverified comments can be marked as verified. | Required | 41.0 |
| isVerifiedBy​Anonymized | Boolean | Specifies whether to mark the comment as verified by an anonymous user (true).If a user previously verified a comment and then requested the activity to be deleted, use isVerifiedByAnonymized to maintain the verification and anonymize the value of lastVerifiedByUser.You can’t set isVerified and isVerifiedByAnonymized to true at the same time. isVerifiedByAnonymized can be set to true only if isVerified is already set to true.You can’t set isVerifiedByAnonymized to false. After isVerifiedByAnonymized is set to true, it can be undone only when another user marks the comment as unverified and then reverifies the comment. | Optional | 43.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isVerified | Boolean | Specifies whether to mark the comment as verified (true) or unverified (false).Only verified comments can be marked as unverified, and only unverified comments can be marked as verified. | Required | 41.0 |
| isVerifiedBy​Anonymized | Boolean | Specifies whether to mark the comment as verified by an anonymous user (true).If a user previously verified a comment and then requested the activity to be deleted, use isVerifiedByAnonymized to maintain the verification and anonymize the value of lastVerifiedByUser.You can’t set isVerified and isVerifiedByAnonymized to true at the same time. isVerifiedByAnonymized can be set to true only if isVerified is already set to true.You can’t set isVerifiedByAnonymized to false. After isVerifiedByAnonymized is set to true, it can be undone only when another user marks the comment as unverified and then reverifies the comment. | Optional | 43.0 |

Response body for GET and PATCH

[Verified Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_verified_capability.htm "If a comment has this capability, users with permission can mark it as verified or unverified.")

If the comment doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/comments/commentId/capabilities/verified
```

```
/connect/communities/communityId/chatter/comments/commentId/capabilities/verified
```

```
{
   "isVerified": "true"
}
```

## Related Topics

- Verified Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_verified_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
