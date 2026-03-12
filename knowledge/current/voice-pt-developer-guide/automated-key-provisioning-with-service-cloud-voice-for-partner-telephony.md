---
title: "Automated Key Provisioning with Service Cloud Voice for Partner Telephony"
domain: voice-pt-developer-guide
topic: automated-key-provisioning-with-service-cloud-voice-for-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.916Z
estimatedTokens: 325
keywords: [Automated, Key, Provisioning, Service, Cloud, Voice, Partner, Telephony, contact, center, created, connected, system, provisioned, automatically]
---

# Automated Key Provisioning with Service Cloud Voice for Partner Telephony

> When a contact center is created and connected with the partner telephony system, the
        public key for the contact center can be provisioned automatically with an Apex call to the
        partner system.

# Automated Key Provisioning with Service Cloud Voice for Partner Telephony

When a contact center is created and connected with the partner telephony system, the public key for the contact center can be provisioned automatically with an Apex call to the partner system.

The key can also be renewed by clicking the **Update Key** button in the contact center details page, or by using the **Update Key** dropdown action in the contact center list page.

![Update key button](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_update_key.png&folder=voice_pt_developer_guide)

For automated key provisioning and renewal, the following requirements must be met:

1.  Partners must set the CapabilitiesSupportsKeyProvisioning capability to true in their ConversationVendorInfo object.
2.  The Apex integration class must implement the KeyProvider interface. This interface includes the getPublicKey method, which is called when the key is provisioned or renewed and returns the public key and its expiration date.

    When a contact center has an expired public key, the expiration date on the contact center details page and the contact center list page has a red circle with a slash icon next to it. When the public key expires within 5 days, it has a yellow warning icon next to it.
