---
title: "Manage Orgs with Environment Hub"
domain: packagingGuide
topic: manage-orgs-with-environment-hub
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.857Z
estimatedTokens: 933
keywords: [Manage, Orgs, Environment, Hub, lets, connect, view, log, Salesforce, location, company, multiple, environments, development, testing]
---

# Manage Orgs with Environment Hub

> The Environment Hub lets you connect, create, view, and log in to Salesforce orgs from one location. If your
  company has multiple environments for development, testing, and trials, the Environment Hub lets
  you streamline your approach to org management.

# Manage Orgs with Environment Hub

The Environment Hub lets you connect, create, view, and log in to Salesforce orgs from one location. If your company has multiple environments for development, testing, and trials, the Environment Hub lets you streamline your approach to org management.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

From the Environment Hub, you can:

-   Connect existing orgs to the hub with automatic discovery of related orgs.
-   Create standard and partner edition orgs for development, testing, and trials.
-   View and filter hub members according to criteria that you choose, like edition, creation date, instance, origin, and SSO status.
-   Create single sign-on (SSO) user mappings for easy login access to hub members.

Each hub member org corresponds to an EnvironmentHubMember object. EnvironmentHubMember is a standard object, similar to Accounts or Contacts, so you can use the platform to extend or modify the Environment Hub programmatically. For example, you can create custom fields, set up workflow rules, or define user mappings and enable SSO using the API for any hub member org.

-   **[Get Started with the Environment Hub](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_get_started.htm)**
    Configure the Environment Hub so that users at your company can access the app to create and manage member orgs. Then connect existing orgs to the hub and create SSO user mappings.
-   **[Manage Orgs in the Environment Hub](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_manage.htm)**
    You can manage all your existing Salesforce orgs from one location by connecting them to the Environment Hub. You can also create orgs using Salesforce templates for development, testing, and trial purposes.
-   **[Single Sign-on in the Environment Hub](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping.htm)**
    Developing, testing, and deploying apps means switching between multiple Salesforce environments and providing login credentials each time. Single sign-on (SSO) simplifies this process by letting an Environment Hub user log in to member orgs without reauthenticating. You can set up SSO by defining user mappings manually, using Federation IDs, or creating a formula.
-   **[Environment Hub Best Practices](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_best_practice.htm)**
    Follow these guidelines and best practices when you use the Environment Hub.
-   **[Environment Hub FAQ](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_faq_map.htm)**
    Answers to common questions about the Environment Hub.
-   **[Considerations for the Environment Hub in Lightning Experience](atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_considerations_lex.htm)**
    Be aware of these considerations when creating and managing orgs in the Environment Hub.

## Related Topics

- Get Started with the Environment Hub (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_get_started.htm)
- Manage Orgs in the Environment Hub (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_manage.htm)
- Single Sign-on in the Environment Hub (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_sso_mapping.htm)
- Environment Hub Best Practices (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_best_practice.htm)
- Environment Hub FAQ (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_faq_map.htm)
- Considerations for the Environment Hub in Lightning Experience (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_considerations_lex.htm)
