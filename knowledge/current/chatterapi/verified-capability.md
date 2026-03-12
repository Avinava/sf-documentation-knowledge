---
title: "Verified Capability"
domain: chatterapi
topic: verified-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.520Z
estimatedTokens: 382
keywords: [Verified, Capability, comment, users, permission, mark, unverified]
---

# Verified Capability

> If a comment has this capability, users with permission can mark it as verified or
    unverified.

# Verified Capability

If a comment has this capability, users with permission can mark it as verified or unverified.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isVerifiableByMe | Boolean | Specifies whether the context user has permission to mark comments as verified or unverified (true) or not (false). | Small, 41.0 | 41.0 |
| isVerified | Boolean | Specifies whether the comment is marked as verified (true) or not (false). | Small, 41.0 | 41.0 |
| isVerifiedBy​Anonymized | Boolean | Specifies whether the comment is marked as verified by an anonymous user (true) or not (false). If the comment has never been marked as verified or unverified, null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. |  |  |
| lastVerifiedByUser | User Summary | User who last marked the comment as verified or unverified, otherwise null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. | Small, 41.0 | 41.0 |
| lastVerifiedDate | String | ISO 8601 date string. Date when the comment was last marked as verified or unverified, otherwise null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. | Small, 41.0 | 41.0 |

#### See Also

-   [Comment Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm "A container for all capabilities that can be included with a comment.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Comment Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm)
