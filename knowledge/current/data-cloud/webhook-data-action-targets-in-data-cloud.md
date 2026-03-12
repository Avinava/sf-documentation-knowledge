---
title: "Webhook Data Action Targets in Data Cloud"
domain: data-cloud
topic: webhook-data-action-targets-in-data-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.664Z
estimatedTokens: 608
keywords: [Webhook, Data, Action, Targets, Cloud, Send, data, action, event, webhook, target, protect, message, integrity, Salesforce-generated, secret, key., HTTP, request, that’s]
---

# Webhook Data Action Targets in Data Cloud

> Send a Data Cloud data action event to a webhook target and protect the
    message integrity with a Salesforce-generated secret key. A webhook is a type of HTTP request
    that’s triggered by an event in a source system and sent to a destination system with a payload.
    A webhook is event-driven rather than request-driven. Webhooks are sent automatically when an
    event is triggered in the source system. The secret key based signature validates the payload
    requests sent from Salesforce.

# Webhook Data Action Targets in Data Cloud

Send a Data Cloud data action event to a webhook target and protect the message integrity with a Salesforce-generated secret key. A webhook is a type of HTTP request that’s triggered by an event in a source system and sent to a destination system with a payload. A webhook is event-driven rather than request-driven. Webhooks are sent automatically when an event is triggered in the source system. The secret key based signature validates the payload requests sent from Salesforce.

A webhook transports HTTP payload with events in the format of [DataObjectDataChgEvent](https://developer.salesforce.com/docs/atlas.en-us.252.0.platform_events.meta/platform_events/sforce_api_objects_dataobjectdatachgevent.htm "HTML (New Window)").

```

```

-   **[Generate a Secret Key for Signature Validation](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_generate_secret_key_for_signature_validation.htm)**
    To protect a webhook system from malicious attacks, generate a secret key for validation. If you don’t generate a secret key, targets don’t receive a payload, and calls are marked with Signing Key Not Found. In Data Cloud, data actions use the HMACSHA256 signature algorithm.
-   **[Regenerate a Secret Key](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_regenerate_secret_key.htm)**
    We recommend regenerating the secret key used in your webhook system at least every 12 months. After you regenerate a secret key, it takes up to 15 minutes to be effective. Until the new key is configured for use, validations at the webhook target fail.
-   **[Payload Signature](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_payload_signature.htm)**
    Payload-based signature validates the payload requests sent to your webhook system from Salesforce.
-   **[Validating the Signature](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_validating_the_signature.htm)**
    To validate the signature, you can use this sample Java code or something similar. This code includes the payload, signature received, and secret key.

#### See Also

-   [*Salesforce Developers Blog*: Unleashing the Power of Data Actions Using a Webhook as a Target](https://developer.salesforce.com/blogs/2024/01/unleashing-the-power-of-data-actions-using-a-webhook-as-a-target "Salesforce Developers Blog: Unleashing the Power of Data Actions Using a
    Webhook as a Target - HTML (New Window)")

## Code Examples

```
{
"creationDateTime": "DateTime: Payload creation time at the service calling webhook",
"count": "Number: Count of events in this payload",
"schemas": [ { "schemaId": "Action Name of schema", schema : "Schema of Event Payload in Action" } ], //Array of Schemas for different event payload
"events": [Array of DataObjectDataChgEvent Events],
}
```

## Related Topics

- Generate a Secret Key for Signature Validation (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_generate_secret_key_for_signature_validation.htm)
- Regenerate a Secret Key (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_regenerate_secret_key.htm)
- Payload Signature (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_payload_signature.htm)
- Validating the Signature (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_validating_the_signature.htm)
