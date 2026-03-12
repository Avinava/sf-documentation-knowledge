---
title: "ConnectApi.VerifiedCapability"
domain: apex-reference
topic: connectapiverifiedcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.279Z
estimatedTokens: 408
keywords: [ConnectApi.VerifiedCapability, comment, capability, users, permission, mark, verified, unverified.]
---

# ConnectApi.VerifiedCapability

> If a comment has this capability, users with permission can mark it as
      verified or unverified.

# ConnectApi.VerifiedCapability

If a comment has this capability, users with permission can mark it as verified or unverified.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isVerifiableByMe | Boolean | Specifies whether the context user has permission to mark comments as verified or unverified (true) or not (false). | 41.0 |
| isVerified | Boolean | Specifies whether the comment is marked as verified (true) or not (false). | 41.0 |
| isVerifiedBy​Anonymized | Boolean | Specifies whether the comment is marked as verified by an anonymous user (true) or not (false). If the comment has never been marked as verified or unverified, null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. | 43.0 |
| lastVerifiedByUser | ConnectApi.UserSummary | User who last marked the comment as verified or unverified, otherwise null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. | 41.0 |
| lastVerifiedDate | Datetime | Date when the comment was last marked as verified or unverified, otherwise null. Also null if the context user doesn’t have permission to mark comments as verified or unverified. | 41.0 |

#### See Also

-   [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm "A set of capabilities on a comment.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.CommentCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)
