---
title: "Consent"
domain: data-cloud
topic: consent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.115Z
keywords: [Consent]
---

# Consent

# Consent

The Salesforce Interactions SDK has been designed to respect user privacy and doesn’t store or transmit data collected until it has been granted consent. If your site has existing consent management features, those features must integrate with the SDK to signal when the user has given consent to track.

Providing the user’s consent to the Salesforce Interactions SDK can happen either:

-   During [Initialization](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_initialization.htm "The recommended initialization flow for the Salesforce Interactions SDK follows a general pattern.")
-   Calling updateConsents = (consents: Consent | Consent\[\]): void

The recommended approach is to provide a Promise for the consent during Initialization that resolves with an array of Consent Data values as shown in the example:

```

```

**Consent Methods**

```

```

Returns [Consent Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent_data.htm "Consent data is used to either grant or revoke consent in Salesforce Interactions SDK. When a customer chooses to opt in to tracking these consent details are attached to the Event Structure of the first tracked event.") with last updated and sent times.

```

```

To update consent after Initialization. For example, to call directly from your OneTrust code:

```

```