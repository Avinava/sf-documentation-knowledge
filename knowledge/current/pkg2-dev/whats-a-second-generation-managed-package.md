---
title: "What’s a Second-Generation Managed Package?"
domain: pkg2-dev
topic: whats-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.114Z
estimatedTokens: 570
keywords: [What’s, Second-Generation, Managed, Package, goal, build, app, distribute, AppExchange, you’ll, packages, Packaging, container, fill, metadata]
---

# What’s a Second-Generation Managed Package?

> If your goal is to build an app and distribute it on AppExchange, you’ll use managed
  packages to do both. Packaging is the container that you fill with metadata, and it holds the set
  of related features, customizations, and schema that make up your app. A package can include many
  different metadata components, and you can package a single component, an app, or library.

# What’s a Second-Generation Managed Package?

If your goal is to build an app and distribute it on AppExchange, you’ll use managed packages to do both. Packaging is the container that you fill with metadata, and it holds the set of related features, customizations, and schema that make up your app. A package can include many different metadata components, and you can package a single component, an app, or library.

Each second-generation managed package follows a distinct lifecycle. As you develop your app, you add metadata to a package, and create a new package version. While the package is continually evolving, each package version is an immutable artifact.

A package version contains the set of metadata and features associated with the package version at the moment it was created. As you iterate on your package, and add, remove, or change the packaged metadata, you're likely to create many package versions along the way.

You can install a package version in a scratch, sandbox, trial, developer edition, or production org. Your customers can install the package into their org and when you release a new package version, your customers can upgrade to the latest version.

You can repeat the package development cycle any number of times. You can change metadata, create a package version, test the package version, and distribute it to your customers via AppExchange.

-   **[Why Switch to Second-Generation Managed Packaging?](atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm)**
    You’ve been using first-generation managed packages to develop your apps, so you’re probably pretty familiar with what works well, and what’s a bit more painful than you’d like. And no doubt, you’re aware that second-generation managed packages is our newer technology, but maybe you aren’t so sure why switching to second-generation managed packaging (managed 2GP) will improve your package development experience. So let’s talk about that.
-   **[Comparison of First- and Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm)**
    If you’re familiar with first-generation managed packages (managed 1GP) and wonder how it’s different from second-generation managed packages (managed 2GP), here are some key distinctions.

## Related Topics

- Why Switch to Second-Generation Managed Packaging? (atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm)
- Comparison of First- and Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm)
