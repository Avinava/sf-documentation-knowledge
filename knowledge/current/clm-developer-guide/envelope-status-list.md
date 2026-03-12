---
title: "Envelope Status List"
domain: clm-developer-guide
topic: envelope-status-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.483Z
estimatedTokens: 154
keywords: [Envelope, Status, Output, representation]
---

# Envelope Status List

> Output representation of the envelope status update
    request.

# Envelope Status List

Output representation of the envelope status update request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| signatureStatus | Envelope Status[] | List of all the envelope IDs with their status. | Small, 56.0 | 56.0 |
| sourceObjectId | String | ID of the parent object. | Small, 56.0 | 56.0 |
| totalEnvelopes​ToBeUpdated | Integer | Total number of envelopes to be updated. | Small, 56.0 | 56.0 |
| totalEnvelopes​Updated | Integer | Actual count of envelopes updated. | Small, 56.0 | 56.0 |

## Code Examples

```
{
   "totalEnvelopesToBeUpdated":"",
   "totalEnvelopesUpdated":"",
   "signatureStatus:{"envelopeId1":{"success":false,"error":"errorcode","message":"errormessage"},
                          "envelopeId2":{"success":true, status:"Completed"}}
}
```

## Related Topics

- Envelope Status[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_envelope_status_respons.htm)
