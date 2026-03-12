---
title: "Verified Capability Input"
domain: chatterapi
topic: verified-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.019Z
estimatedTokens: 291
keywords: [Verified, Capability, Input, Mark, comment, unverified]
---

# Verified Capability Input

> Mark a comment as verified or unverified.

# Verified Capability Input

Mark a comment as verified or unverified.

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

## Code Examples

```
{
   "isVerified": "true"
}
```
