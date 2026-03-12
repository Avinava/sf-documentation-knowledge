---
title: "What to Consider Before Removing Metadata Components"
domain: pkg2-dev
topic: what-to-consider-before-removing-metadata-components
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:27.087Z
estimatedTokens: 737
keywords: [Consider, Removing, Metadata, Components, cases, second-generation, managed, package, marks, component, deprecated, doesn’t, hard, subscriber, org]
---

# What to Consider Before Removing Metadata Components

> In most cases, removing metadata components from a second-generation managed package
  marks the component as deprecated and doesn’t hard delete the component from the subscriber org.
  This approach to component removal ensures that package upgrades don’t disrupt a subscriber’s
  org.

# What to Consider Before Removing Metadata Components

In most cases, removing metadata components from a second-generation managed package marks the component as deprecated and doesn’t hard delete the component from the subscriber org. This approach to component removal ensures that package upgrades don’t disrupt a subscriber’s org.

But there’s a scenario where a deprecated component can lead to a package upgrade issue. This issue only pertains to deprecated components, and no action is needed for hard deleted components.

To see which components are deprecated and which are deleted, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

Here’s an example scenario of how a deprecated component leads to a package upgrade issue.

1.  Subscriber A installs version 1.0 of a managed package.
2.  A package developer removes project\_\_c custom object, and creates package version 2.0.
3.  Subscriber A upgrades from version 1.0 to version 2.0, and project\_\_c is now marked as deprecated in their org. Any integration with project\_\_c that the subscriber created continues to work.
4.  The package developer continues to refine their app, and then releases several new versions.
5.  During development of version 5.0, the package developer adds a component named project\_\_c to the package.
6.  A new subscriber, Subscriber B, successfully installs version 5.0.
7.  Subscriber A tries to upgrade to version 5.0, but the installation fails because the admin at Subscriber A never deleted project\_\_c from their org.
8.  The package developer has two paths to unblock Subscriber A.
    1.  Ask Subscriber A to remove all references to project\_\_c, and then delete the component from their org.
    2.  Remove project\_\_c from the package and release a new package version.

To prevent this kind of API name collisions in your packages, here are some best practices.

Communicate within Your Team and Company

Before you remove any metadata, assess the impact to the package and to any packages that depend on that package. If you remove metadata in one package, that action has the potential to break the functionality of a package that depends on the removed metadata. Communicate within your team and company so that other developers are aware of this change.

Document Package Changes for Future Developers

If you internally document the major changes that your package undergoes, including the name of metadata components that were removed, you can help alert future package developers about previously used API names.

Communicate Changes with Your Subscribers

Educate your customers about the potential impact from any components you remove. In the Release Notes for your upgraded package, list all components you’ve removed and notify customers of any necessary actions.
