---
title: "Create a Package Version Based on a Snapshot"
domain: sfdx-dev
topic: create-a-package-version-based-on-a-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.640Z
estimatedTokens: 705
keywords: [Package, Version, Snapshot, you’re, partner, ISV, builds, second-generation, managed, packages, depend, base, versions, significantly, faster]
---

# Create a Package Version Based on a Snapshot

> If you’re a partner or ISV who builds second-generation managed packages that depend on
    base packages, you can create package versions significantly faster by using scratch org
    snapshots. Using a snapshot to create a package version is a great choice if your dependent base
    packages are stable.

# Create a Package Version Based on a Snapshot

If you’re a partner or ISV who builds second-generation managed packages that depend on base packages, you can create package versions significantly faster by using scratch org snapshots. Using a snapshot to create a package version is a great choice if your dependent base packages are stable.

## What Are the Benefits of Using a Snapshot When Developing a Package Version?

A snapshot includes all the dependencies and configurations required for your package. When you run the package version create CLI command, we create a scratch org behind the scenes. That scratch org serves as a build org where we build your package. In the build org we install the dependent packages you specified, and deploy the package metadata for the package version you're creating.

If you install your dependent packages in the scratch org before you create the snapshot, and specify the snapshot when you create a package version, the package build process bypasses these steps. Meaning, we don't install the dependent packages into the build org, but use the snapshot instead. If you don’t use a snapshot, those dependent packages have to be installed each time you create a package version, which can greatly prolong package creation times.

For a more detailed explanation, see Second-Generation Managed Packaging Guide: [When to Use Scratch Org Snapshots in Package Development](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm).

## Why Can’t I Promote a Package Version Based on a Snapshot?

Using snapshots to create package versions speeds up the package development and testing process. However, a scratch org snapshot could contain unpackaged metadata that’s not associated with the package. For example, if you’re an ISV that created a package version with unpackaged metadata in a snapshot, it’s likely that your customers could encounter installation issues when you perform a push upgrade to orgs that don’t contain the dependent metadata.

To ensure your package version is ready to release and doesn’t contain any unintended dependencies, you must build a package version without a snapshot.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

You can promote an [unlocked package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm) based on a snapshot. Only managed packages based on snapshots can’t be promoted to the released state.

## How Do I Create a Package Version Based on Snapshot?

See Second-Generation Managed Packaging Guide: [Create a Package Version Based on a Scratch Org Snapshot](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_pkg_snapshot.htm).
