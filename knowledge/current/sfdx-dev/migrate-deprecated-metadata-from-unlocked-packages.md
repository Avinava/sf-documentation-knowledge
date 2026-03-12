---
title: "Migrate Deprecated Metadata from Unlocked Packages"
domain: sfdx-dev
topic: migrate-deprecated-metadata-from-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.806Z
estimatedTokens: 205
keywords: [Migrate, Deprecated, Metadata, Unlocked, Packages, deprecate, package, move, new, install, production, org]
---

# Migrate Deprecated Metadata from Unlocked Packages

> You can deprecate metadata in an unlocked package, move that metadata to a new package,
  and then install the new package in your production org.

# Migrate Deprecated Metadata from Unlocked Packages

You can deprecate metadata in an unlocked package, move that metadata to a new package, and then install the new package in your production org.

As you create more unlocked packages, you can refactor your package and move metadata from one unlocked package to another unlocked package if necessary.

To move production metadata from package A to package B, follow these steps.

1.  Identify the metadata to be moved from package A to package B.
2.  Remove the metadata from package A, create a version, and release the package.
3.  Add the metadata to package B, create a version, and release the package.
4.  In your production org, upgrade package A.
5.  In your production org, install package B.

Your metadata is now a part of package B in your production org.
