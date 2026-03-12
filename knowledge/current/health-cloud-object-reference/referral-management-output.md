---
title: "Referral Management Output"
domain: health-cloud-object-reference
topic: referral-management-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.745Z
estimatedTokens: 106
keywords: [Referral, Management, Output, representation, patient]
---

# Referral Management Output

> Output representation of the request to create a patient
      referral.

# Referral Management Output

Output representation of the request to create a patient referral.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response | Error details when the request fails. | Small, 59.0 | 59.0 |
| referralsIds | String[] | IDs of the created patient referral records. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "error":null,
   "referralIds":[
      "0lvxx00004000001AAB",
      "0bhxx00008000001CAD"
   ]
}
```

## Related Topics

- Error
                  Response (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_error_output.htm)
