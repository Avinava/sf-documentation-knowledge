---
title: "Avoid Namespace Collisions in Second-Generation Managed Packages"
domain: pkg2-dev
topic: avoid-namespace-collisions-in-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.093Z
estimatedTokens: 1191
keywords: [Avoid, Collisions, Second-Generation, Managed, Packages, Namespaces, impact, combination, package, install, org]
---

# Avoid Namespace Collisions in Second-Generation Managed Packages

> Namespaces impact the combination of package types that you can install in an
    org.

# Avoid Namespace Collisions in Second-Generation Managed Packages

Namespaces impact the combination of package types that you can install in an org.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

#### Important

When sharing a namespace, be intentional about managing component names across packages within that namespace. Ensure that packages associated with the same namespace don’t include components with the same API name. If two packages include a component with the same API name, you can’t install these packages into the same org.

To understand how namespaces affect the types of packages you can install in a namespaced or no-namespace org, review this table.

| Installation Org | No-namespace Unlocked Package | Namespaced Unlocked Package | Second-generation Managed Package (2GP) | First-generation Managed Package (1GP) |
| --- | --- | --- | --- | --- |
| Org with a namespaceFor example, a 1GP packaging org, 1GP patch org, Developer Edition org with namespace, or a scratch org with namespace | Fail.You can’t install a no-namespace unlocked package in an org with a namespace. | Pass.Regardless of whether the namespace matches or is different from the org’s namespace, you can install one or many namespaced unlocked packages. | Pass (scratch orgs).Regardless of whether the namespace matches or is different from the scratch org’s namespace, you can install one or many 2GP packages.Fail (1GP packaging and patch orgs).To prevent 1GP packages from depending on 2GP packages, we block the installation of 2GP packages in a 1GP packaging or patch org. We also block the installation of 2GP packages in Developer Edition (DE) orgs that have an associated namespace, unless it’s a DE scratch org. | Pass.If the namespace of the 1GP is different from the namespace of the org, you can install one or many packages.Fail.If the namespace of the 1GP is the same as the namespace of the org, you can’t install the 1GP into the org. |
| Org without a namespace | Pass.You can install one or many no-namespace unlocked packages. | Pass.You can install one or many namespaced unlocked packages. | Pass.You can install one or many 2GP packages. | Pass.You can install one or many 1GP packages. |

To understand how namespaces affect the combination of packages that can be installed into one org, review this table.

| Namespace and Package Type | Unlocked Package with Namespace Y | Second-generation Managed Package (2GP) with Namespace Y | First-generation Managed Package (1GP) with Namespace Y |
| --- | --- | --- | --- |
| First-generation Managed Package (1GP) with namespace X | Pass.If the 1GP and unlocked package use unique namespaces, you can install them in the same org. | Pass.If the 1GP and 2GP use unique namespaces, you can install them in the same org. | Pass.If each 1GP uses a unique namespace, you can install multiple 1GP packages in the same org. |
| First-generation Managed Package (1GP) with namespace Y | Fail.If the 1GP and unlocked package share a namespace, you can’t install them in the same org. | Fail.If the 1GP and 2GP share a namespace, you can’t install them in the same org. | Fail.If the 1GP packages share a namespace, you can’t install them in the same org. |
| Second-generation Managed Package (2GP) with namespace X | Pass.You can install a 2GP and a namespaced unlocked package in the same org. The packages can share a namespace or use unique namespaces. | Pass.You can install multiple 2GP packages with unique namespaces, or the same namespace. | Pass.If the 1GP and 2GP use unique namespaces, you can install them in the same org. |
| Second-generation Managed Package (2GP) with namespace Y | Pass.You can install a 2GP and a namespaced unlocked package in the same org. The packages can share a namespace or use unique namespaces. | Pass.You can install multiple 2GP packages with the same namespace in the same org. | Fail.If the 1GP and 2GP share a namespace, you can’t install them in the same org. |

#### See Also

-   [Namespaces for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm "Namespaces for Second-Generation Managed Packages - HTML (New Window)")

-   [Create and Register Your Namespace for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "Create and Register Your Namespace for Second-Generation Managed Packages - HTML (New Window)")

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")
