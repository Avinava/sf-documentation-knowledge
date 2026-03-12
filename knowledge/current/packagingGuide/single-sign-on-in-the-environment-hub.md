---
title: "Single Sign-on in the Environment Hub"
domain: packagingGuide
topic: single-sign-on-in-the-environment-hub
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.879Z
estimatedTokens: 747
keywords: [Sign-on, Environment, Hub, Developing, testing, deploying, apps, means, switching, multiple, Salesforce, environments, providing, login, credentials]
---

# Single Sign-on in the Environment Hub

> Developing, testing, and deploying apps means switching between multiple Salesforce
    environments and providing login credentials each time. Single sign-on (SSO) simplifies this
    process by letting an Environment Hub user log in to member orgs without reauthenticating. You
    can set up SSO by defining user mappings manually, using Federation IDs, or creating a
    formula.

# Single Sign-on in the Environment Hub

Developing, testing, and deploying apps means switching between multiple Salesforce environments and providing login credentials each time. Single sign-on (SSO) simplifies this process by letting an Environment Hub user log in to member orgs without reauthenticating. You can set up SSO by defining user mappings manually, using Federation IDs, or creating a formula.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


The Environment Hub supports these SSO methods for matching users.

| SSO Method | Description |
| --- | --- |
| Mapped Users | Match users in the Environment Hub to users in a member org manually. Mapped Users is the default method for SSO user mappings defined from the member detail page. |
| Federation ID | Match users who have the same Federation ID in both the Environment Hub and a member org. |
| User Name Formula | Match users in the Environment Hub and a member org according to a formula that you define. |

If you specify multiple SSO methods, they’re evaluated in this order: (1) Mapped Users, (2) Federation ID, and (3) User Name Formula. The first method that results in a match is used to log in the user, and the other methods are ignored. If a matching user can’t be identified, the Environment Hub directs the user to the standard Salesforce login page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

SSO doesn’t work for newly added users or for user mappings defined in a sandbox org. Only add users, edit user information, or define SSO user mappings in the parent org for the sandbox.

-   **[Enable SSO for a Member Org](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_enable.htm)**
    You can enable single sign-on (SSO) to let an Environment Hub user log in to a member org without reauthenticating.
-   **[Define an SSO User Mapping](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_create.htm)**
    You can manually define a single-sign on (SSO) user mapping between a user in the Environment Hub and a user in a member org. Before you define a user mapping, enable SSO in the hub member org.
-   **[Use a Federation ID or Formula for SSO](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_federation_formula.htm)**
    You can match an Environment Hub user with a user in a member org using a Federation ID or a user name formula. For either method, enable SSO in the hub member org first.
-   **[Disable SSO for a Member Org](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_disable.htm)**
    If you want Environment Hub users to reauthenticate when they log in to a member org, you can disable SSO. Disabling SSO doesn’t remove the user mappings that you’ve defined, so you can always re-enable SSO later.

## Related Topics

- Enable SSO for a Member Org (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_enable.htm)
- Define an SSO User Mapping (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_create.htm)
- Use a Federation ID or Formula for SSO (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_federation_formula.htm)
- Disable SSO for a Member Org (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping_disable.htm)
