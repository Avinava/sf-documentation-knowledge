---
title: "What’s an Unlocked Package?"
domain: sfdx-dev
topic: whats-an-unlocked-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.893Z
estimatedTokens: 701
keywords: [What’s, Unlocked, Package, you’re, new, packaging, think, container, fill, metadata, features, customizations, schema, packages, help]
---

# What’s an Unlocked Package?

> If you’re new to packaging, think of a package as a container that you fill with
  metadata. It contains a set of related features, customizations, and schema. Unlocked packages
  help you add, edit, and remove metadata in your org in a trackable way. You can apply your
  metadata to multiple orgs, and upgrade your Salesforce apps easier and faster. Unlocked packages
  are especially suited for internal business apps.

# What’s an Unlocked Package?

If you’re new to packaging, think of a package as a container that you fill with metadata. It contains a set of related features, customizations, and schema. Unlocked packages help you add, edit, and remove metadata in your org in a trackable way. You can apply your metadata to multiple orgs, and upgrade your Salesforce apps easier and faster. Unlocked packages are especially suited for internal business apps.

Unlocked packages differ from managed packages, which have [manageability rules](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm) that determine the behavior of each metadata component in the package. With an unlocked package, you have a lot of flexibility. Your admins can make changes directly in production in response to emergency change requests because metadata in unlocked packages can be modified in a production org.

At the same time, this flexibility comes with responsibility. Ensure that you have the proper governance in place to prevent cases where package updates overwrite changes that admins make directly in production. You can avoid this issue by ensuring that your admins communicate with your development team whenever they edit any packaged metadata directly in the production org.

Each unlocked package has a distinct lifecycle. When you add metadata to an existing unlocked package, you create a new package version. While the package is continually evolving, each package version is an immutable artifact that never changes.

A package version contains the specific metadata and features associated with the package version at the time it was created. As you iterate on your package, and add, remove, or change the packaged metadata, you create many package versions.

You can install a package version in a scratch, sandbox, trial, Developer Edition, or production org. Installing a package version is similar to deploying metadata. Each package version has a version number, and subscribers can install a new package version into their org through a package upgrade.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Because package versions are immutable, they can also be used as artifacts for Continuous Integration (CI) and Continuous Delivery (CD) processes.

You can repeat the package development cycle any number of times. You can change metadata, create a package version, test the package version, and finally install the package to a production org. This distinct app development lifecycle lets you control exactly what, when and how your metadata is rolled out. In the installed org, you can inspect which metadata came from which package and the set of all metadata associated with a specific package.
