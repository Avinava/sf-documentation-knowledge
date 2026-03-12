---
title: "Build and Release Your App with Managed Packages"
domain: pkg1-dev
topic: build-and-release-your-app-with-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.682Z
estimatedTokens: 322
keywords: [Build, Release, App, Managed, Packages, developed, tested, you’re, well, way, releasing, Luckily, it’s, time, package]
---

# Build and Release Your App with Managed Packages

> If you developed and tested your app, you’re well on your way to releasing it. Luckily,
  when it’s time to build and release an app as a managed package, you’ve got options. You can
  package an app you developed from scratch. If you’re experimenting, you can also build
  a
  sample app from Salesforce and emulate the release process.

# Build and Release Your App with Managed Packages

If you developed and tested your app, you’re well on your way to releasing it. Luckily, when it’s time to build and release an app as a managed package, you’ve got options. You can package an app you developed from scratch. If you’re experimenting, you can also build a sample app from Salesforce and emulate the release process.

Working with a package is an iterative process. You typically retrieve, convert, and deploy source multiple times as you create scratch orgs, test, and update the package components.

Chances are, you already have a namespace and package defined in your packaging org. If not, run this command to open the packaging org in your browser.

```

```

In the Salesforce UI, you can define a namespace and a package. Each packaging org can have a single managed package and one namespace.

#### See Also

-   [Link a Namespace to a Dev Hub Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm "To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.")

-   [Retrieve Source from an Existing Managed Package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_retrieve_man_pack.htm)

## Code Examples

```
sf org open --target-org me@my.org --path lightning/setup/Package/home
```

## Related Topics

- Link a Namespace to a Dev Hub Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm)
