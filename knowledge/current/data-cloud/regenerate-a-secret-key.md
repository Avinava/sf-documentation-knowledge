---
title: "Regenerate a Secret Key"
domain: data-cloud
topic: regenerate-a-secret-key
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.490Z
estimatedTokens: 129
keywords: [Regenerate, Secret, Key, recommend, regenerating, secret, key, used, webhook, system, least, every, months., After, regenerate, takes, minutes, effective., Until, new]
---

# Regenerate a Secret Key

> We recommend regenerating the secret key used in your webhook system at least every 12
  months. After you regenerate a secret key, it takes up to 15 minutes to be effective. Until the
  new key is configured for use, validations at the webhook target fail.

# Regenerate a Secret Key

We recommend regenerating the secret key used in your webhook system at least every 12 months. After you regenerate a secret key, it takes up to 15 minutes to be effective. Until the new key is configured for use, validations at the webhook target fail.

1.  In Data Cloud, navigate to the Data Actions Target tab.
2.  Open your webhook-based data action target.
3.  Regenerate the secret key.
4.  Copy the secret key to your webhook system to validate the signature provided with payload.
