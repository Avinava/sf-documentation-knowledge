---
title: "Considerations for Security"
domain: api
topic: considerations-for-security
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.793Z
estimatedTokens: 604
keywords: [Considerations, Security, outbound, messaging, ensure, third, party, send, messages, endpoint, pretending, Salesforce]
---

# Considerations for Security

> To use outbound messaging, ensure that no third party can send messages to the endpoint while
      pretending to be from Salesforce:

# Considerations for Security

To use outbound messaging, ensure that no third party can send messages to the endpoint while pretending to be from Salesforce:

-   Lock down the client application’s listener to accept requests only from Salesforce IP ranges. While this action guarantees that the message came from Salesforce, it doesn’t guarantee that another customer isn’t pointing to your endpoint and sending messages. For an up-to-date list of Salesforce IP ranges, see [https://help.salesforce.com/articleView?id=000321501&type=1&mode=1](https://help.salesforce.com/articleView?id=000321501&type=1&mode=1&language=en_US)
-   Use SSL/TLS. Using SSL/TLS provides confidentiality while data is transported across the internet. Without it, a malicious third party can eavesdrop on your data. This issue is especially important if you pass data with privacy requirements and you pass a SessionId with the message. Also, we authenticate the certificate presented on connection, ensure that it is from a valid Certificate Authority, and check that the domain in the certificate matches the one Salesforce is trying to connect. This validation prevents us from communicating with the wrong endpoint.
-   When you select **Send Session ID**, only HTTPS is supported for the endpoint URL to ensure secure transmission of the session ID. For managed and unmanaged packages created before Spring ’19 with this option but without an HTTPS endpoint, subscribers can still install them. Starting in Spring ’19, you can’t create packages with insecure outbound message options.
-   The SessionId included in the outbound message is scoped only for API requests and doesn’t apply to UI requests.
-   If the configuration of your application (endpoint) server's SSL/TLS allows, validate the identity of the Salesforce server when it takes the role of a client to your server, using the Salesforce client certificate. For instructions to download the certificate, see [Downloading the Salesforce Client Certificate](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm#om_client_cert).
-   The organization Id is included in each message. For more information about the Id field type, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616). In your client application, validate that messages contain your organization Id.

## Related Topics

- Downloading the Salesforce Client Certificate (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm)
