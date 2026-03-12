---
title: "Guest Referral Output"
domain: health-cloud-object-reference
topic: guest-referral-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.636Z
estimatedTokens: 144
keywords: [Guest, Referral, Output, representation]
---

# Guest Referral Output

> Output representation of the request to create a guest referral.

# Guest Referral Output

Output representation of the request to create a guest referral.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response | Error details when the request fails. | Small, 60.0 | 60.0 |
| token | String | Encrypted value of the Clinical Service Request ID, Organization ID, and User ID in this format: ReferralId:OrgId:UserId.The encrypted ID is required to link files to the created Clinical Service Request record. | Small, 60.0 | 60.0 |

## Code Examples

```
{
   "error":null,
   "token":"0lvxx00004000001AAB"
}
```

## Related Topics

- Error Response (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_error_output.htm)
