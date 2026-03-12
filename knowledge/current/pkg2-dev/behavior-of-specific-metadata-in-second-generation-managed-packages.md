---
title: "Behavior of Specific Metadata in Second-Generation Managed Packages"
domain: pkg2-dev
topic: behavior-of-specific-metadata-in-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.148Z
estimatedTokens: 1238
namespace: Metadata
keywords: [Behavior, Specific, Metadata, Second-Generation, Managed, Packages, how, profiles, visibility, handled]
---

# Behavior of Specific Metadata in Second-Generation Managed Packages

> Learn how profiles and namespace visibility are handled for second-generation managed
  packages.

**Namespace:** `Metadata`

# Behavior of Specific Metadata in Second-Generation Managed Packages

Learn how profiles and namespace visibility are handled for second-generation managed packages.

-   **[Package Agentforce Metadata Components](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_packageable_agentforce_md.htm)**
    Bring the power of conversational AI to your apps with Agentforce.
-   **[Develop and Package Agent Templates Using Scratch Orgs](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_package_agent_templates.htm#dev2gp_package_agent_templates)**
    At a high-level, agents are distributed by ISVs as agent templates. To package an agent template you first create and test an agent in a namespaced scratch org, retrieve the agent to your Salesforce DX project, generate an agent template from the agent using Salesforce CLI, and finally package the agent template.
-   **[Package Data Cloud Metadata Components](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_package_data_cloud.htm)**
    Utilize the power of Data Cloud in your apps by including Data Cloud metadata in your managed packages. Working with Data Cloud metadata has some unique requirements. Review these details to understand how to work with Data Cloud metadata in your packages.
-   **[Protected Components in Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_protected_components.htm)**
    Developers can mark certain components as protected. Protected components can’t be linked to or referenced by components created in a subscriber org. A developer can delete a protected component in a future release without worrying about failing installations. However, after a component is marked as unprotected and is released globally, the developer can’t delete it.
-   **[Set Up a Platform Cache Partition with Provider Free Capacity](atlas.en-us.pkg2_dev.meta/pkg2_dev/data_platform_cache_setup_provider_capacity.htm)**
    Salesforce provides 3 MB of free Platform Cache capacity for security-reviewed managed packages. This is made available through a capacity type called Provider Free capacity and is automatically enabled in all Developer edition orgs.
-   **[Metadata Access in Apex Code](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_metadata_in_apex.htm)**
    Use the Metadata namespace in Apex to access metadata in your package.
-   **[Permission Sets and Profile Settings in Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/distribution_perm_sets_profile_settings.htm)**
    Permission sets, permission set groups, and profile settings are all ways to grant permissions and other access settings to a package. Only use a profile setting if permission sets don’t support the specific access you need to grant. In all other instances, use permission sets or permission set groups.
-   **[Protecting Your Intellectual Property](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_protect_ip.htm)**
    The details of your custom objects, custom links, reports, and other installed items are revealed to installers so that they can check for malicious content. However, revealing an app’s components prevents developers from protecting some intellectual property.
-   **[Call Salesforce URLs Within a Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_instanceless_url.htm)**
    The URLs that Salesforce serves for a target org vary based on the org type and configuration. To build packages that support all possible URL formats, use relative URLs whenever possible. If your package functionality requires a full URL, use the Apex DomainCreator class to get the corresponding hostname. This method allows your package to work in all orgs, regardless of the org type and My Domain settings.
-   **[Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_visibility.htm)**
    The @NamespaceAccessible makes public Apex in a package available to other packages that use the same namespace. Without this annotation, Apex classes, methods, interfaces, and properties defined in a second-generation managed package aren’t accessible to the other packages with which they share a namespace. Apex that is declared global is always available across all namespaces, and needs no annotation.
-   **[Work with Services Outside of Salesforce](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_external_services.htm)**

-   **[Package Connected Apps in Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_connected_app.htm)**
    Add a connected app to a second-generation managed package.
-   **[Test and Respond to the New Order Save Behavior](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_order_save_behavior.htm)**
    To make sure custom application logic works accurately on records associated with the Order object, turn on the Enable New Order Save Behavior setting, and test the behavior. We recommend that you support both the new and old order save behavior during testing.

## Related Topics

- Package Agentforce Metadata Components (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_packageable_agentforce_md.htm)
- Develop and Package Agent Templates Using Scratch Orgs (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_package_agent_templates.htm)
- Package Data Cloud Metadata Components (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_package_data_cloud.htm)
- Protected Components in Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_protected_components.htm)
- Set Up a Platform Cache Partition with Provider Free Capacity (atlas.en-us.pkg2_dev.meta/pkg2_dev/data_platform_cache_setup_provider_capacity.htm)
- Metadata Access in Apex Code (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_metadata_in_apex.htm)
- Permission Sets and Profile Settings in Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/distribution_perm_sets_profile_settings.htm)
- Protecting Your Intellectual Property (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_protect_ip.htm)
- Call Salesforce URLs Within a Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_instanceless_url.htm)
- Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_visibility.htm)
