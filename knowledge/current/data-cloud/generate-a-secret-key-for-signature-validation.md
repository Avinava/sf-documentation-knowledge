---
title: "Generate a Secret Key for Signature Validation"
domain: data-cloud
topic: generate-a-secret-key-for-signature-validation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.253Z
estimatedTokens: 188
keywords: [Generate, Secret, Key, Validation, protect, webhook, system, malicious, attacks, don’t, targets, receive, payload, calls, marked]
---

# Generate a Secret Key for Signature Validation

> To protect a webhook system from malicious attacks, generate a secret key for
  validation. If you don’t generate a secret key, targets don’t receive a payload, and calls are
  marked with Signing Key Not Found. In Data Cloud, data actions use the HMACSHA256
  signature algorithm.

# Generate a Secret Key for Signature Validation

To protect a webhook system from malicious attacks, generate a secret key for validation. If you don’t generate a secret key, targets don’t receive a payload, and calls are marked with Signing Key Not Found. In Data Cloud, data actions use the HMACSHA256 signature algorithm.

1.  In Data Cloud, on the Data Actions Target tab, click **New**.
2.  Enter the action target name.

    The Action Target API Name field is auto-filled.

3.  Select **Webhook**.
4.  Enter the URL where you want to publish the webhook events, and click **Save**.
5.  Generate the secret key.
6.  Copy the secret key to your webhook system to validate and protect the integrity of the payload requests sent from Salesforce.
