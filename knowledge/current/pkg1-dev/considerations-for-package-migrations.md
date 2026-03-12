---
title: "Considerations for Package Migrations"
domain: pkg1-dev
topic: considerations-for-package-migrations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.506Z
estimatedTokens: 430
keywords: [Considerations, Package, Migrations, Review, limits, converting, migrating, packages]
---

# Considerations for Package Migrations

> Review these limits and considerations for converting and migrating packages.

# Considerations for Package Migrations

Review these limits and considerations for converting and migrating packages.

1.  Packages converted before June 15, 2025 can’t be promoted or migrated. Instead, run the convert command on your latest package version, and move forward with that package version.
2.  The daily package conversion limit is the same as your Dev Hub org’s scratch org allocation. See [Scratch Org Allocations for Salesforce Partners](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_allocations.htm) for details.
3.  The convert command may fail on your first attempt to convert a package. If this happens, retry again in a few minutes. This issue is most likely to occur if you create a new package for testing purposes, and immediately try to convert that package version.
4.  The package conversion process performs limited validation when creating the managed 2GP package version.
    1.  In some instances the limited validation could mask issues that would otherwise result in package conversion failure.
    2.  You can expect to see cryptic error messages in certain scenarios. Please share those error messages with us so we can improve them.
5.  During migration, the managed 1GP package version installed in the target org has the same version number as the managed 2GP migration package version.
6.  Only package versions created using API version 57 (Spring ’23) or above, can be converted. To promote a package version, it must have been created using API version 64 (Summer ’25) or later.
7.  Large packages containing 20,000+ metadata files aren’t supported at this time.
8.  Packages containing Data Cloud metadata can’t be converted.
