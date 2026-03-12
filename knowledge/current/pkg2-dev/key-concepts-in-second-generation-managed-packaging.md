---
title: "Key Concepts in Second-Generation Managed Packaging"
domain: pkg2-dev
topic: key-concepts-in-second-generation-managed-packaging
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.954Z
estimatedTokens: 652
keywords: [Key, Concepts, Second-Generation, Managed, Packaging, Let’s, look, high-level, 2GP]
---

# Key Concepts in Second-Generation Managed Packaging

> Let’s look at some key high-level concepts in second-generation managed packaging
  (managed 2GP).

# Key Concepts in Second-Generation Managed Packaging

Let’s look at some key high-level concepts in second-generation managed packaging (managed 2GP).

| What’s the difference between… | Details |
| --- | --- |
| An app, a package, and metadata? | An app is a set of features that you’re developing for your customers.Metadata is the technical representation of Salesforce features like custom objects, Apex classes, and Lightning pages. An app is composed of a set of metadata.A package is the container for your app’s Salesforce metadata. Packages are used to distribute the app that you build. When a package is installed in an org, the app’s metadata is deployed to the org. |
| A package and package version? | Your app, and thus your package, evolves over time. Whenever you change, add, or remove the metadata in your package, you create a new package version. Each package version is an immutable artifact, a static snapshot of your metadata at a specific point in time. So while your package evolves continuously, you take snapshots of it when it's in a stable state in the form of a package version. Technically speaking, when we say “Install a package,” we really mean install a specific package version. |
| A package install and package upgrade? | A package install refers to the first time a version of the package is installed in an org. When a package is installed, the metadata associated with the package is deployed into the org.A package upgrade refers to the installation of a new package version in an org that already has a previous version of the package installed. During a package upgrade, metadata changes are deployed. An upgrade can include deploying new metadata, modifying existing metadata, or deleting or deprecating metadata. At any given point in time, an org can only ever have one version of a package installed in that org. |

| Is it possible to... | Details |
| --- | --- |
| Push a package upgrade? | Yes. Push upgrades enable you to upgrade packages installed in subscriber orgs, without asking customers to install the upgrade themselves. For more details, see Push a Package Upgrade. |
| Uninstall a package? | Yes. When you uninstall managed 2GP packages, all components in the package and any associated data is deleted from the org. Before uninstalling a package, review these considerations. |
| Delete a package or package version? | Yes. If you haven’t promoted or distributed a specific package or package version, you can delete the package or package version from your Dev Hub org. For more details, see Delete a Managed 2GP Package or Package Version. |
