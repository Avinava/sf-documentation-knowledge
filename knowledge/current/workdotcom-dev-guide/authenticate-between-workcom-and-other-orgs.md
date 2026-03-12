---
title: "Authenticate Between Work.com and Other Orgs"
domain: workdotcom-dev-guide
topic: authenticate-between-workcom-and-other-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.291Z
estimatedTokens: 249
keywords: [Authenticate, Work.com, Orgs, installed, new, dedicated, org, solution, access, original, strategy, authenticating]
---

# Authenticate Between Work.com and Other Orgs

> If Work.com has been installed in a new, dedicated org, but your solution must access
    the original org, you need a strategy for authenticating to the other org.

# Authenticate Between Work.com and Other Orgs

If Work.com has been installed in a new, dedicated org, but your solution must access the original org, you need a strategy for authenticating to the other org.

The following are recommended strategies for authenticating to another org.

Use the existing, original org as an identity provider. Use user authentication from the original org to log in to the Work.com org. Avoid creating replicated logins in the new Work.com org.

If the existing org is already using a different identity provider, you can either connect the Work.com org to the same identity provider, or connect the Work.com org to the existing org.

#### See Also

-   [*Salesforce Help*: Configure SAML SSO Between Salesforce Orgs or Experience Cloud Sites](https://help.salesforce.com/articleView?id=experience.sso_between_multiple_orgs.htm&type=5&language=en_US "Salesforce Help: Configure SAML SSO Between Salesforce Orgs or Experience
    Cloud Sites - HTML (New Window)")
