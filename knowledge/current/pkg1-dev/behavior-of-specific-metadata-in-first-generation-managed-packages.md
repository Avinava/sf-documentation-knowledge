---
title: "Behavior of Specific Metadata in First-Generation Managed Packages"
domain: pkg1-dev
topic: behavior-of-specific-metadata-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.598Z
estimatedTokens: 1432
namespace: Metadata
keywords: [Behavior, Specific, Metadata, First-Generation, Managed, Packages, how, profiles, handled]
---

# Behavior of Specific Metadata in First-Generation Managed Packages

> Learn how profiles and other metadata are handled for first-generation managed packages.

**Namespace:** `Metadata`

# Behavior of Specific Metadata in First-Generation Managed Packages

Learn how profiles and other metadata are handled for first-generation managed packages.

-   **[Get Access to Agentforce in Your 1GP Packaging Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging1_agentforce_access.htm)**
    Agentforce is a set of tools to create and customize AI agents that are deeply and securely integrated with customers' data and apps. Agentforce brings together humans with agents to transform the way work gets done.
-   **[Components Automatically Added to First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm)**
    When adding components to your first-generation managed package, related components are automatically added. For example, if you add a Visualforce page to a package that references a custom controller, that Apex class is also added.
-   **[Protected Components in Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm)**
    Developers can mark certain components as protected. Protected components can’t be linked to or referenced by components created in a subscriber org. A developer can delete a protected component in a future release without worrying about failing installations. However, after a component is marked as unprotected and is released globally, the developer can’t delete it.
-   **[Set Up a Platform Cache Partition with Provider Free Capacity](atlas.en-us.pkg1_dev.meta/pkg1_dev/data_platform_cache_setup_provider_capacity.htm)**
    Salesforce provides 3 MB of free Platform Cache capacity for security-reviewed managed packages. This is made available through a capacity type called Provider Free capacity and is automatically enabled in all Developer edition orgs.
-   **[Package Dependencies in First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/about_dependencies.htm)**
    Package dependencies are created when a component references another component, permission, or preference that is required for the component to be valid.
-   **[Metadata Access in Apex Code](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_metadata_in_apex.htm)**
    Use the Metadata namespace in Apex to access metadata in your package.
-   **[Permission Sets and Profile Settings in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/distribution_perm_sets_profile_settings.htm)**
    Permission sets, permission set groups, and profile settings are all ways to grant permissions and other access settings to a package. Only use a profile setting if permission sets don’t support the specific access you need to grant. In all other instances, use permission sets or permission set groups.
-   **[Permission Set Groups](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_permission_set_groups.htm)**
    You can organize permission sets into groups and include them in first and second-generation managed packages. Permission set groups can be updated when you upgrade the package.
-   **[Custom Profile Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_creating_custom_profile.htm)**
    Create profiles to define how users access objects and data, and what they can do within your app. For example, profiles specify custom object permissions and the tab visibility for your app. When installing or upgrading your app, admins can associate your custom profiles with existing non-standard profiles. Permissions in your custom profile that are related to new components created as part of the install or upgrade are added to the existing profile. The security settings associated with standard objects and existing custom objects in an installer’s organization are unaffected.
-   **[Protecting Your Intellectual Property](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protect_ip.htm)**
    The details of your custom objects, custom links, reports, and other installed items are revealed to installers so that they can check for malicious content. However, revealing an app’s components prevents developers from protecting some intellectual property.
-   **[Call Salesforce URLs Within a Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_instanceless_url.htm)**
    The URLs that Salesforce serves for a target org vary based on the org type and configuration. To build packages that support all possible URL formats, use relative URLs whenever possible. If your package functionality requires a full URL, use the Apex DomainCreator class to get the corresponding hostname. This method allows your package to work in all orgs, regardless of the org type and My Domain settings.
-   **[Develop App Documentation](atlas.en-us.pkg1_dev.meta/pkg1_dev/develop_documentation.htm)**
    To help your subscribers make the most of your app, provide documentation about how to configure and customize your app.
-   **[API and Dynamic Apex Access in Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/about_client_security_profile.htm)**
    Apex Package components have access via dynamic Apex and the API to standard and custom objects in the organization where they’re installed.
-   **[Connected Apps](atlas.en-us.pkg1_dev.meta/pkg1_dev/connected_apps.htm)**
    A connected app is a framework that enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for external apps. The external apps that are integrated with Salesforce can run on the customer success platform, other platforms, devices, or SaaS subscriptions. For example, when you log in to your Salesforce mobile app and see your data from your Salesforce org, you’re using a connected app.

## Related Topics

- Get Access to Agentforce in Your 1GP Packaging Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging1_agentforce_access.htm)
- Components Automatically Added to First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_components_auto_added.htm)
- Protected Components in Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm)
- Set Up a Platform Cache Partition with Provider Free Capacity (atlas.en-us.pkg1_dev.meta/pkg1_dev/data_platform_cache_setup_provider_capacity.htm)
- Package Dependencies in First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/about_dependencies.htm)
- Metadata Access in Apex Code (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_metadata_in_apex.htm)
- Permission Sets and Profile Settings in Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/distribution_perm_sets_profile_settings.htm)
- Permission Set Groups (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_permission_set_groups.htm)
- Custom Profile Settings (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_creating_custom_profile.htm)
- Protecting Your Intellectual Property (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protect_ip.htm)
