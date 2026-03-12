---
title: "Remove Metadata Components from Second-Generation Managed Packages"
domain: pkg2-dev
topic: remove-metadata-components-from-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.143Z
estimatedTokens: 1773
keywords: [Remove, Metadata, Components, Second-Generation, Managed, Packages, Apex, classes, longer, want, Impact, Component, Removal, Subscriber, Orgs]
---

# Remove Metadata Components from Second-Generation Managed Packages

> Remove metadata components such as Apex classes that you no longer want in your
  second-generation managed packages.

# Remove Metadata Components from Second-Generation Managed Packages

Remove metadata components such as Apex classes that you no longer want in your second-generation managed packages.

## Impact of Component Removal in Subscriber Orgs

During a package upgrade, only certain component types are hard deleted and removed from the subscriber org. Most metadata components that were removed from a package version remain in the subscriber org after package upgrade and are marked as deprecated. When a package is upgraded in the subscriber org, the Setup Audit Trail logs which components were removed. Admins of a subscriber org can delete deprecated metadata. If the subscriber uninstalls the package, deprecated metadata that was previously associated with the package is deleted.

You can remove these metadata components from second-generation managed packages.

| Metadata Component | Upon Package Upgrade, the Metadata Component is ... |
| --- | --- |
| Analytic Snapshot | Marked as deprecated |
| Apex Class (excluding global Apex classes) | Hard deleted |
| Apex Trigger | Hard deleted |
| Aura Component | Marked as deprecated |
| Compact Layout | Marked as deprecated |
| Custom Application | Marked as deprecated |
| Custom Application Component | Marked as deprecated |
| Custom Field | Marked as deprecated |
| Custom Labels | Marked as deprecated |
| Custom Metadata Type Records | Marked as deprecated, if visible to the subscriber org; otherwise, hard deleted. |
| Custom Object | Marked as deprecated |
| Custom Permission | Marked as deprecated |
| Custom Tab | Marked as deprecated |
| Dashboard | Marked as deprecated |
| Dashboard Folder | Marked as deprecated |
| Document | Marked as deprecated |
| External Auth Identity Provider | Marked as deprecated |
| External Client App Header | Hard deleted |
| External Client App Settings | Hard deleted |
| External Credential | Marked as deprecated |
| External Services | Marked as deprecated |
| Field Set | Marked as deprecated |
| Flow | Marked as deprecated |
| Lightning Page | Marked as deprecated |
| Lightning Web Component | Marked as deprecated |
| List View | Marked as deprecated |
| Named Credential | Marked as deprecated |
| Page Layout | Marked as deprecated |
| Permission Set | Marked as deprecated |
| Platform Event Channel | Hard deleted |
| Platform Event Channel Member | Hard deleted |
| Profile | Marked as deprecated |
| Quick Action | Marked as deprecated |
| Record Type | Marked as deprecated |
| Remote Site Setting | Marked as deprecated |
| Report | Marked as deprecated |
| Report Folder | Marked as deprecated |
| Report Type | Marked as deprecated |
| Sharing Reason | Marked as deprecated |
| Static Resource | Marked as deprecated |
| Validation Rule | Marked as deprecated |
| Visualforce Component (excluding global components) | Hard deleted |
| Visualforce Page | Marked as deprecated |
| WebLink (Custom Button or Custom Link) | Marked as deprecated |
| Workflow Email Alert, Workflow Field Update, Workflow Outbound Message, Workflow Rule, Workflow Task | Marked as deprecated |

## How to Remove Metadata Components

To request access to this feature, log a case with [Salesforce Partner Support](atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm "Certain packaging features can only be enabled by Salesforce Partner Support.").

After your request is approved, remove the metadata component’s source file from your Salesforce DX project, and create a package version. Test the new package version to ensure it’s working properly without the removed metadata.

## Before You Remove Metadata Components from Second-Generation Managed Packages

To ensure you can successfully remove metadata components from a second-generation managed package, keep these details in mind.

-   Request access to the feature, if you haven’t already.
-   Familiarize yourself with the list of metadata components that can be removed.
-   Ensure that there aren’t dependencies on the metadata you plan to remove. If any component in the package depends on or references the component you're removing, the package version creation operation fails. After you remove a component, you can't access any customizations that depend on the removed component.

## Remove Metadata Dependencies Within a Package

If there are dependencies to the metadata component you plan to remove, resolve the dependency before removing the metadata component.

For example, before deleting a custom field that is referenced in a page layout, edit the page layout and remove the reference to the custom field. Then remove the custom field from your source file, and create a package version.

Some scenarios require a two-step approach to component removal. For example, let's say you plan to remove a Visualforce page that contains a Visualforce component and replace it with a Lightning page that contains a Lightning component. Removing both the Visualforce page and Visualforce component in a single upgrade could cause issues for your subscribers. These issues occur because Visualforce components are deleted, and Visualforce pages are deprecated during package upgrade.

To avoid issues for your subscribers in this example, remove the reference to the Visualforce component from the Visualforce page, create a package version, and push the upgrade. Then remove the Visualforce page from your package version, and push this upgrade to subscribers.

## Remove Dependencies Located in Other Packages

Before you remove a metadata component, first remove all references to the metadata, including references in other packages that depend on that metadata component. For example, if you’re removing a public Apex class, ensure your other packages aren’t referencing that class using the Apex @namespaceAccessible annotation.

In this section, PackageA refers to the package in which you plan to remove a metadata component. And PackageB is any package that depends on the metadata you’re removing from PackageA. If you have references to the metadata component or Apex class in PackageB, follow these steps:

1.  Remove the reference to the metadata component from PackageB.
2.  Create a version of PackageB.
3.  Push the new version of PackageB to your subscribers.
4.  Repeat these steps if any other packages include a reference to the metadata you plan to remove from PackageA.

After you've removed all references to the metadata component, remove the metadata component’s source file from the Salesforce DX project of PackageA. Then create a version of PackageA. Before pushing this upgrade to subscribers, test the new package version to ensure it’s working properly.

-   **[What to Consider Before Removing Metadata Components](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_md_removal_considerations.htm)**
    In most cases, removing metadata components from a second-generation managed package marks the component as deprecated and doesn’t hard delete the component from the subscriber org. This approach to component removal ensures that package upgrades don’t disrupt a subscriber’s org.

## Related Topics

- Salesforce Partner Support (atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)
- What to Consider Before Removing Metadata Components (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_md_removal_considerations.htm)
