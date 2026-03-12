---
title: "When to Use Scratch Org Snapshots in Package Development"
domain: pkg2-dev
topic: when-to-use-scratch-org-snapshots-in-package-development
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.111Z
estimatedTokens: 788
keywords: [Scratch, Org, Snapshots, Package, Development, managed, 2GP, unlocked, you’re, building, depends, large, packages, take, long]
---

# When to Use Scratch Org Snapshots in Package Development

> If the managed 2GP or unlocked package that you’re building depends on one or more large
  packages, it can take a long time for the package version creation CLI command to complete. Let’s
  talk about why that occurs, and how scratch org snapshots can dramatically reduce how long it
  takes to create a new package version.

# When to Use Scratch Org Snapshots in Package Development

If the managed 2GP or unlocked package that you’re building depends on one or more large packages, it can take a long time for the package version creation CLI command to complete. Let’s talk about why that occurs, and how scratch org snapshots can dramatically reduce how long it takes to create a new package version.

When you run the package version create CLI command, we create a scratch org behind the scenes. That scratch org serves as a build org where we build your package. In the build org we install the dependent packages you specified, and deploy the package metadata for the package version you're creating. If your dependent packages are large, the package install time for those dependent packages extends the overall package creation time.

If the dependent packages that your base package requires are stable, you can reduce the end-to-end package version creation time by creating a scratch org snapshot, and using that scratch org snapshot during package version creation.

A [scratch org snapshot](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm) captures the state of a scratch org’s configuration so that you can use the snapshot to create scratch org replicas. A snapshot is a point-in-time copy of a scratch org that includes installed packages, features, limits, licenses, metadata, and data. If you install your dependent packages in the scratch org before you create the snapshot, and you specify the snapshot when you create a new package version, the package build process bypasses these steps. Meaning, we don't install the dependent packages into the build org, we use the snapshot instead. By not installing the dependent packages during package version creation, your package version builds in a fraction of the time.

Keep in mind, the intention of scratch org snapshots in the package development cycle is to shorten the package creation time during development. When you are ready to promote and release a package, you must create a new package version that doesn’t rely on a scratch org snapshot. Package versions created using scratch org snapshots can’t be promoted to the released state.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

You can promote an [unlocked package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm) based on a snapshot. Only managed packages based on snapshots can’t be promoted to the released state.

#### See Also

-   [Create a Package Version Based on a Scratch Org Snapshot](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_pkg_snapshot.htm "If the dependent package your base package requires is stable, you can reduce the end-to-end package version creation time by creating a scratch org snapshot.")

-   [*Salesforce DX Developer Guide*: Scratch Org Snapshots](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm "Salesforce DX Developer Guide: Scratch Org Snapshots - HTML (New Window)")

## Related Topics

- Create a Package Version Based on a Scratch Org Snapshot (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_pkg_snapshot.htm)
