---
title: "Test Converted Packages and Subscriber Migrations"
domain: pkg1-dev
topic: test-converted-packages-and-subscriber-migrations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.484Z
estimatedTokens: 270
keywords: [Test, Converted, Packages, Subscriber, Migrations, move, 2GP, development, longer, any, new, major, minor, 1GP, versions]
---

# Test Converted Packages and Subscriber Migrations

> When you complete your move to 2GP development, you can no longer create any new major
  or minor 1GP versions of that package. Before you make this transition, it’s critical that you
  thoroughly test packages converted to 2GP and the migration of subscribers to 2GP.

# Test Converted Packages and Subscriber Migrations

When you complete your move to 2GP development, you can no longer create any new major or minor 1GP versions of that package. Before you make this transition, it’s critical that you thoroughly test packages converted to 2GP and the migration of subscribers to 2GP.

Test these scenarios before you complete the move to 2GP.

-   Create 2GP-converted versions for the minimum number of packages necessary to migrate subscribers to 2GP.
-   In test orgs, install the 2GP-converted package versions. Then, test the converted packages thoroughly.
-   Install the corresponding 1GP versions of your packages in your test orgs. Then, migrate these test orgs to 2GP using both manual installs and push upgrades.
-   When you’re comfortable with converting packages and testing migrations, we recommend that you migrate a significant portion of subscribers before completing your move to 2GP package development. After you complete your move to 2GP, any unmigrated subscribers must migrate to 2GP to continue receiving version updates.
