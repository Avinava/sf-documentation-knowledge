---
title: "Integrate Incoming Voice Call Creation"
domain: voice-pt-developer-guide
topic: integrate-incoming-voice-call-creation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.060Z
estimatedTokens: 692
keywords: [Integrate, Incoming, Voice, Call, Creation, inbound, calls, telephony, system, receives, prepares, route, rep, invoke, Service]
---

# Integrate Incoming Voice Call Creation

> For inbound calls, when the telephony system receives the incoming call and prepares to
    route the call to a rep, the telephony system can invoke Service Cloud Voice REST APIs to
    create the essential Voice Call record to represent the conversation.

# Integrate Incoming Voice Call Creation

For inbound calls, when the telephony system receives the incoming call and prepares to route the call to a rep, the telephony system can invoke Service Cloud Voice REST APIs to create the essential Voice Call record to represent the conversation.

You can use following REST endpoint: https://{org\_domain\_name}.my.salesforce-scrt.com/telephony/v1. For org\_domain\_name, specify the value as defined in [Set Up Single Sign-On](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm "Set up single sign-on (SSO) for your solution.").

The Service Cloud Voice REST APIs use JWT for authorization.

-   Salesforce requires that a [JWT](https://jwt.io/) is signed using RSA SHA256, which uses an uploaded certificate as the signing secret.
-   As part of your contact center setup, ensure that the call center has been updated with the certificate you generated in [Generate a Self-Signed Certificate with OpenSSL](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm "Use OpenSSL to generate an RSA private key and certificate."). The generated private key is used to sign the JWT bearer token payload.
-   Store the private key so you can retrieve it whenever you generate a JWT token.
-   The public key is saved in the call center information, whereas the private key is saved on the telephony provider side to sign the JWT bearer token. Ideally, the private key is never exposed on the network and stays on the server where it was generated.

For instructions on setting up authorization, see [Telephony Integration REST API Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_authorization.htm).

Once you have authorization set up, call the [Create VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) REST API. Use the callAttributes parameter to ingest Interactive Voice Response (IVR) data into a VoiceCall record.

#### See Also

-   [*Service Cloud Voice Implementation Guide:* Telephony Integration REST API Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_authorization.htm "Service Cloud Voice Implementation Guide: Telephony Integration REST API
    Authorization - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Create VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm "Service Cloud Voice Implementation Guide: Create VoiceCall - HTML (New Window)")

## Related Topics

- Set Up Single Sign-On (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm)
- Generate a Self-Signed Certificate with OpenSSL (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm)
