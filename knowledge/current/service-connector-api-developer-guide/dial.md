---
title: "dial"
domain: service-connector-api-developer-guide
topic: dial
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.386Z
estimatedTokens: 134
keywords: [dial, contact]
---

# dial

> Dial a contact.

# dial

Dial a contact.

## Signature

dial(contact, dialOptions) → Promise.<[CallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm "Represents the result type for call-related functions.")\>

## Parameters

| Field | Details |
| --- | --- |
| contact | TypeContactDescriptionThe contact to dial. |
| dialOptions | TypeObjectDescriptionSpecifies whether a call is a callback (isCallback) or whether a call is a consult call (isConsultCall). |

## Related Topics

- CallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm)
- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)
