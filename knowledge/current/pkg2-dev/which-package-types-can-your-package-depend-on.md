---
title: "Which Package Types Can Your Package Depend On?"
domain: pkg2-dev
topic: which-package-types-can-your-package-depend-on
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.040Z
estimatedTokens: 531
keywords: [Package, Depend, second-generation, managed, packaging, 2GP, unlocked, let, easily, develop, small, interdependent, packages, share, logic]
---

# Which Package Types Can Your Package Depend On?

> Both second-generation managed packaging (managed 2GP) and unlocked packaging let you
  easily develop small interdependent packages and share logic between them. If you design your app
  to rely on small modular packages, both package creation and package installation are faster, and
  you’re less likely to hit limits.

# Which Package Types Can Your Package Depend On?

Both second-generation managed packaging (managed 2GP) and unlocked packaging let you easily develop small interdependent packages and share logic between them. If you design your app to rely on small modular packages, both package creation and package installation are faster, and you’re less likely to hit limits.

To develop small, modular packages, you create dependencies between your packages. A package dependency is when metadata contained in one package depends on metadata contained in another package. These dependencies allow you to extend the functionality of the base package with components and metadata in a separate extension package.

When working with packaging, only certain combinations of packages are supported.

|  | Can a Managed 1GP Depend on a ... | Can a Managed 2GP Depend on a ... | Can an Unlocked Package Depend on a ... | Can an Unmanaged Package Depend on a ... |
| --- | --- | --- | --- | --- |
| Managed 1GP | Yes | Yes | Yes | No |
| Managed 2GP | No1 | Yes | Yes | No |
| Unlocked package | Not recommended | Not recommended | Yes | No |
| Unmanaged package | Not recommended | Not recommended | Not recommended | No |

1This dependency isn’t supported, and we block the installation of managed 2GP packages in managed 1GP packaging orgs. We can override this behavior on an individual basis. To share your scenario and request an override, log a case with [Salesforce Partner Support](https://partners.salesforce.com). We’re investigating how to support this dependency scenario more broadly.

#### See Also

-   [Create Dependencies Between Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_dependencies.htm "Create Dependencies Between Second-Generation Managed Packages - HTML (New Window)")

-   [Considerations for Promoting Packages with Dependencies](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm "Considerations for Promoting Packages with Dependencies - HTML (New Window)")
