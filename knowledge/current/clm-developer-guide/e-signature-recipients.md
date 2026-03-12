---
title: "E-signature Recipients"
domain: clm-developer-guide
topic: e-signature-recipients
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.331Z
estimatedTokens: 174
keywords: [E-signature, Recipients]
---

# E-signature Recipients

> Get list of e-signature recipients.

# E-signature Recipients

Get list of e-signature recipients.

Resource

```

```

Available version

56.0

HTTP methods

GET

Example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipientSelector | String | Create a list of recipients that receive the DocuSign envelope for signing or viewing for a custom object. | Optional | 56.0 |
| sourceObjectId | String | Object Id of the document. | Optional | 56.0 |

Response body for GET

[Recipient List Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_recipient_list_respons.htm "List of recipients.")

## Code Examples

```
/connect/e-sign/recipients
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/e-sign/recipients?sourceObjectId=<sourceObjectId>&recipientSelector=<recipientCustomClassName>
```

## Related Topics

- Recipient List Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_recipient_list_respons.htm)
