---
title: "Comparison of First- and Second-Generation Managed Packages"
domain: pkg2-dev
topic: comparison-of-first--and-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.991Z
estimatedTokens: 706
keywords: [Comparison, First-, Second-Generation, Managed, Packages, you’re, familiar, first-generation, 1GP, wonder, how, it’s, different, 2GP, key]
---

# Comparison of First- and Second-Generation Managed Packages

> If you’re familiar with first-generation managed packages (managed 1GP) and wonder how
  it’s different from second-generation managed packages (managed 2GP), here are some key
  distinctions.

# Comparison of First- and Second-Generation Managed Packages

If you’re familiar with first-generation managed packages (managed 1GP) and wonder how it’s different from second-generation managed packages (managed 2GP), here are some key distinctions.

| Managed 1GP Packages | Managed 2GP Packages |
| --- | --- |
| The packaging org is the source of truth for the metadata in your package. | Your version control system is the source of truth (source-driven system) for the metadata in your package.And unlike managed 1GP, managed 2GP doesn’t use packaging or patch orgs. |
| The packaging org owns the package. The metadata in the package resides in the packaging org. | The Dev Hub owns the package, but the Dev Hub doesn’t contain the packaged metadata.We recommend that you enable Dev Hub in your Partner Business Org (PBO). |
| A packaging org can own only one managed package. | A Dev Hub can own one or more packages. |
| The namespace of the managed package is created in the packaging org. | The namespace of a managed package is created in a namespace org and linked to the Dev Hub. And you can associate multiple namespaces to a single Dev Hub.A namespace is linked to a managed 2GP when you run the sf package create Salesforce CLI command. And you must specify the namespace in the sfdx-project.json file.See Namespaces for Second-Generation Managed Packages for more details. |
| A namespace can be associated with only one package. | Multiple packages can use the same namespace. |
| Global Apex is the only way to share code across packages. | Multiple packages using the same namespace can share code using public Apex classes and methods with the @namespaceAccessible annotation. |
| Some packaging operations, like package create and package uninstall, can’t be automated. | All packaging operations can be automated using Salesforce CLI. |
| Package versioning is linear. | Package versioning is flexible, and you can abandon unwanted package versions. This flexible versioning allows you to use branches and do parallel package development. |
| Patch versions can only be created in specialized orgs called patch orgs. | Patch versions are created using Salesforce CLI. The version control system is the source of truth, and there are no patch orgs. |

Despite these distinctions, managed 1GP and 2GP packages have many things in common. They share the key packaging concept of associating metadata with a package. And they both allow you to iterate and create package and patch versions, which can be installed and uninstalled in subscriber orgs. Both managed package types enable you to submit a package for AppExchange security review, and list your package on AppExchange. And both managed package types can use the License Management App, Subscriber Support Console, and Feature Management App.

## Related Topics

- Namespaces for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm)
