---
title: "Environment Hub Best Practices"
domain: packagingGuide
topic: environment-hub-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.808Z
estimatedTokens: 337
keywords: [Environment, Hub, Best, Practices, Follow, guidelines]
---

# Environment Hub Best Practices

> Follow these guidelines and best practices when you use the Environment Hub.

# Environment Hub Best Practices

Follow these guidelines and best practices when you use the Environment Hub.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


-   If you’re an admin or developer, choose the org that your team uses most frequently as your hub org. If you’re an ISV partner, the Environment Hub is already installed in your Partner Business Org.
-   Because each member org is a standard object (of type EnvironmentHubMember), you can modify its behavior or access it programmatically. For example, you can create custom fields, set up workflow rules, or define user mappings and enable single sign-on using the API for any member org.
-   Decide on a strategy for enabling SSO access based on your company’s security requirements. Then choose the SSO method (explicit mapping, Federation ID, or custom formula) that meets your needs.
-   SSO doesn’t work for newly added users or for user mappings defined in a sandbox org. Only add users, edit user information, or define SSO user mappings in the parent org for the sandbox.
-   The Environment Hub connected app is for internal use only. Don’t enable it for any profiles. Unless advised by Salesforce, don’t delete the connected app or adjust its settings.
