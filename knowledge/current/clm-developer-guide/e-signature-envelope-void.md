---
title: "E-signature Envelope Void"
domain: clm-developer-guide
topic: e-signature-envelope-void
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.321Z
estimatedTokens: 173
keywords: [E-signature, Envelope, Expire, envelopes, associated]
---

# E-signature Envelope Void

> Expire or void envelopes associated with an object.

# E-signature Envelope Void

Expire or void envelopes associated with an object.

Resource

```

```

Available version

56.0

HTTP methods

PATCH

Example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| senderEmail | String | Refers to the email of the user who initiated the voiding. | Optional | 56.0 |
| voidedReason | String | Reason for which the envelope is being voided. | Required | 56.0 |

Response body for PATCH

[Envelope Void Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_envelope_void_respons.htm "Void envelope related details.")

## Code Examples

```
/connect/e-sign/signature-requests/${sourceObjectId}/envelopes/void
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/e-sign/signature-requests/{sourceObjectId}/envelopes/void
```

```
{
    "voidedReason": "",//required
    "senderEmail": ""
}
```

## Related Topics

- Envelope Void Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_envelope_void_respons.htm)
