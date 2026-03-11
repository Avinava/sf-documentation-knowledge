---
title: "Initialization"
domain: data-cloud
topic: initialization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.347Z
keywords: [Initialization, Methods]
---

# Initialization

# Initialization

The recommended initialization flow for the Salesforce Interactions SDK follows a general pattern.

```

```

This method initializes the Web SDK with Consent, Identity, and Sitemap features enabled.

## Initialization Methods

```

```

Arguments:

| Field Name | Description |
| --- | --- |
| consents | Field TypeConsent[] Promise<Consent[]>DescriptionRequired.A list of consent data values or a promise that resolves a list of consent data values. |
| cookieDomain | Field TypestringDescriptionThe domain to use for the first-party cookies that stores identity data. Defaults to the domain of the current site. |

-   sdkConfig — An object with consent and cookieDomain fields.

```

```

```

```

Reinitializes the Web SDK and reevaluates which rules to apply from the configured sitemap.

```

```