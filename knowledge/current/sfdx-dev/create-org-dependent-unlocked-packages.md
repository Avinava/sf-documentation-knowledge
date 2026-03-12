---
title: "Create Org-Dependent Unlocked Packages"
domain: sfdx-dev
topic: create-org-dependent-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.817Z
estimatedTokens: 790
keywords: [Org-Dependent, Unlocked, Packages, variation, allow, depend, unpackaged, metadata, org, plan, install, package, installation]
---

# Create Org-Dependent Unlocked Packages

> Org-dependent unlocked packages are a variation of unlocked packages that allow you to
  create packages that depend on unpackaged metadata in the org where you plan to install the
  package (installation org).

# Create Org-Dependent Unlocked Packages

Org-dependent unlocked packages are a variation of unlocked packages that allow you to create packages that depend on unpackaged metadata in the org where you plan to install the package (installation org).


| User Permissions Needed |
| --- |
| To create packages: | Create and Update Second-Generation Packages |

Untangling your production org metadata can be a daunting project. But now you have a solution that enables you to package metadata without completely accounting for all metadata dependencies: org-dependent unlocked packages. When you use org-dependent unlocked packages, metadata validation occurs during package installation, instead of during package version creation.

Longstanding and large production orgs often accumulate large amounts of metadata that are difficult to modularize when adopting a package-based Application Lifecycle Management (ALM) approach. Instead, you can package metadata that depends on unpackaged metadata in the installation org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Org-dependent unlocked packages are a variation of unlocked packages, and not a separate package type. They follow the same [package development steps](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_workflow.htm "HTML (New Window)"), and use the same supported [metadata types](https://developer.salesforce.com/docs/success/metadata-coverage-report/references/coverage-report/metadata-coverage-report.html "HTML (New Window)") as unlocked packages.

To create an org-dependent unlocked package, specify the orgdependent CLI parameter on the sf package create CLI command.

```

```

| Scenario | Unlocked Packages | Org Dependent Unlocked Packages |
| --- | --- | --- |
| Build once, install anywhere | Yes | No. These packages are designed for specific production and sandbox orgs. You can install them only in orgs that contain the metadata that the package depends on. |
| Dependency validation | Occurs during package version creation | Occurs during package installation |
| Can depend on other packages | Yes | No |
| Requires dependencies to be resolved to create the package | Yes | No |
| Supported metadata types | See the unlocked packaging channel of the Metadata Coverage Report. | See the unlocked packaging channel of the Metadata Coverage Report. |
| Recommended development and testing environment | Use scratch orgs to develop and test your unlocked packages. | Use a sandbox that contains the dependent metadata. Consider enabling Source Tracking in Sandboxes to develop your org-dependent unlocked package. Then, test the package in a sandbox org before installing it in your production org. |
| Code coverage requirement | Before you can promote and release an unlocked package, the Apex code must meet a minimum 75% code coverage requirement. | We don’t calculate code coverage, but we recommend that you ensure the Apex code in your package is well tested. |

To review which of your packages are org-dependent unlocked packages, use sf package list --verbose.

## Code Examples

```
sf package create -t Unlocked -r force-app -n MyPackage --org-dependent
```
