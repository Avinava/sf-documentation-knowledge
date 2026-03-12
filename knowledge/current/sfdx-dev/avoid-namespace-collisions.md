---
title: "Avoid Namespace Collisions"
domain: sfdx-dev
topic: avoid-namespace-collisions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.812Z
estimatedTokens: 906
keywords: [Avoid, Collisions, Namespaces, impact, combination, package, install, org, Dependencies]
---

# Avoid Namespace Collisions

> Namespaces impact the combination of package types you can install in an
  org.

# Avoid Namespace Collisions

Namespaces impact the combination of package types you can install in an org.

To understand how namespaces affect the types of packages you can install in a namespaced or no-namespace org, review this table.

| Installation Org | No-namespace Unlocked Package | Namespaced Unlocked Package | Second-generation Managed Package (2GP) | First-generation Managed Package (1GP) |
| --- | --- | --- | --- | --- |
| Org with a namespaceFor example, a 1GP packaging org, 1GP patch org, Developer Edition org with namespace, or a scratch org with namespace | Fail.You can’t install a no-namespace unlocked package in an org with a namespace. | Pass.If the namespace of the unlocked package is different from the namespace of the org, you can install one or many packages. | Pass (scratch orgs)If the namespace of the 2GP is different from the namespace of the scratch org, you can install one or many packages.Fail (1GP packaging and patch orgs).To prevent 1GP packages from depending on 2GP packages, we block the installation of 2GP packages in a 1GP packaging or patch org. We also block the installation of 2GP packages in Developer Edition (DE) orgs that have an associated namespace, unless it’s a DE scratch org. | Pass.If the namespace of the 1GP is different from the namespace of the org, you can install one or many packages.Fail.If the namespace of the 1GP is the same as the namespace of the org, you can’t install the 1GP into the org. |
| Org without a namespace | Pass.Can install one or many no-namespace unlocked packages. | Pass.Can install one or many namespaced unlocked packages. | Pass.Can install one or many 2GP packages. | Pass.Can install one or many 1GP packages. |

To understand how namespaces affect the combination of packages that can be installed into one org, review this table.

| Namespace and Package Type | Unlocked Package with Namespace Y | Second-generation Managed Package (2GP) with Namespace Y | First-generation Managed Package (1GP) with Namespace Y |
| --- | --- | --- | --- |
| First-generation Managed Package (1GP) with namespace X | Pass.If the 1GP and unlocked package use unique namespaces, you can install them in the same org. | Pass.If the 1GP and 2GP use a unique namespace, you can install them in the same org. | Pass.If each 1GP uses a unique namespace, you can install multiple 1GP packages in the same org. |
| First-generation Managed Package (1GP) with namespace Y | Fail.If the 1GP and unlocked package share a namespace, you can’t install them in the same org. | Fail.If the 1GP and 2GP share a namespace, you can’t install them in the same org. | Fail.If the 1GP packages share a namespace, you can’t install them in the same org. |
| Second-generation Managed Package (2GP) with namespace X | Pass.You can install a 2GP and a namespaced unlocked package in the same org. The packages can share a namespace or use unique namespaces. | Pass.You can install multiple 2GP packages with unique namespaces, or the same namespace. | Pass.If the 1GP packages use unique namespaces, you can install multiple 1GP packages in the same org. |
| Second-generation Managed Package (2GP) with namespace Y | Pass.You can install a 2GP and a namespaced unlocked package in the same org. The packages can share a namespace or use unique namespaces. | Pass.You can install multiple 2GP packages with the same namespace in the same org. | Fail.If the 1GP and 2GP share a namespace, you can’t install them in the same org. |

## Namespaces and Package Dependencies

A namespaced unlocked package can’t depend on an unlocked package without a namespace.
