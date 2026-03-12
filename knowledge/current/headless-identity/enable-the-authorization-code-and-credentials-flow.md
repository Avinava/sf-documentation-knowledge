---
title: "Enable the Authorization Code and Credentials Flow"
domain: headless-identity
topic: enable-the-authorization-code-and-credentials-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.881Z
estimatedTokens: 243
keywords: [Enable, Authorization, Code, Credentials, Flow, foundation, headless, login, registration, org-wide, level]
---

# Enable the Authorization Code and Credentials Flow

> The Authorization Code and Credentials Flow is the foundation of headless login and
    headless registration. Enable this flow at an org-wide level.

# Enable the Authorization Code and Credentials Flow

The Authorization Code and Credentials Flow is the foundation of headless login and headless registration. Enable this flow at an org-wide level.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From Setup, in the Quick Find box, enter OAuth, and then select **OAuth and OpenID Connect Settings**.
2.  Turn on **Allow Authorization Code and Credentials Flows**.

    You receive a warning that changing this setting can break your integrations.

3.  To accept the warning, click **OK**.

    With this flow enabled, you can access settings to turn it on for a specific external client app.


## Example

![Toggle to turn on the Authorization Code and Credentials Flow](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_identity%2Fimages%2Fauthcodecreds_toggle.png&folder=headless_identity)
