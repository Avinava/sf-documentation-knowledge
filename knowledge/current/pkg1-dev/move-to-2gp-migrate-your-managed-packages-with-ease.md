---
title: "Move to 2GP: Migrate Your Managed Packages with Ease"
domain: pkg1-dev
topic: move-to-2gp-migrate-your-managed-packages-with-ease
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.511Z
estimatedTokens: 789
keywords: [Move, 2GP, Migrate, Managed, Packages, Ease, first-generation, packaging, 1GP, package, development, work, you're, alone, ISVs]
---

# Move to 2GP: Migrate Your Managed Packages with Ease

> Are you still using first-generation managed packaging (1GP) for your package
  development work? If so, you're not alone. Many ISVs like you are looking to move to
  second-generation managed packaging (2GP) and take advantage of its many benefits.

# Move to 2GP: Migrate Your Managed Packages with Ease

Are you still using first-generation managed packaging (1GP) for your package development work? If so, you're not alone. Many ISVs like you are looking to move to second-generation managed packaging (2GP) and take advantage of its many benefits.

If you don't have customers who are still using 1GP packages you created, you can skip this chapter and move straight to learning how to build new [2GP packages](https://trailhead.salesforce.com/content/learn/modules/second-generation-managed-packages).

Package migration involves two main steps: converting an existing 1GP package into a 2GP package, and then migrating the 2GP package into a subscriber org. Package migration won't change your package's metadata, or disrrupt any subscriber data associated with your package.

-   **[About Package Conversion and Package Migration](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_get_started.htm)**
    There are two main stages involved in package migrations. It starts with package conversion and ends with package migration.
-   **[Three Phases of Package Migration Development](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_three_stages.htm)**
    As you move from 1GP development to 2GP development, you’ll move through three phases.
-   **[Plan Your Package Migration](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_planning.htm)**
    Are you ready to move your subscribers to 2GP? The speed and ease of your package migration depend on a few key factors.
-   **[Before You Begin Package Migrations](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_prerequistes.htm)**
    If you’ve never created or worked with managed 2GP packages, scratch orgs, or Salesforce CLI, take some time to learn more about Salesforce DX and second-generation managed packages.
-   **[Convert Your Managed 1GP Package to 2GP](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_conversion_workflow.htm)**
    Before you convert your managed 1GP package version, ensure your development environment is set up.
-   **[Migrate Your Subscribers from 1GP to 2GP](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_pkg_migration_workflow.htm)**
    Are you ready to migrate your converted package? To migrate a package you install the converted 2GP package into a subscriber org that already has the managed 1GP package version installed. Package migration requires that the major and minor version of the subscriber's installed package, match the major and minor version of 2GP you’re installing.
-   **[Move to 2GP Package Development](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp.htm)**
    After you thoroughly test converted packages and migrations, complete your move to 2GP development.
-   **[Considerations for Package Migrations](atlas.en-us.pkg1_dev.meta/pkg1_dev/migrations_known_limitations.htm)**
    Review these limits and considerations for converting and migrating packages.
-   **[Troubleshoot Package Conversion Failures](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_troubleshoot_errors.htm#migration_troubleshoot_errors)**
    Here are some possible error scenarios that can occur when you convert a package.

## Related Topics

- About Package Conversion and Package Migration (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_get_started.htm)
- Three Phases of Package Migration Development (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_three_stages.htm)
- Plan Your Package Migration (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_planning.htm)
- Before You Begin Package Migrations (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_prerequistes.htm)
- Convert Your Managed 1GP Package to 2GP (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_conversion_workflow.htm)
- Migrate Your Subscribers from 1GP to 2GP (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_pkg_migration_workflow.htm)
- Move to 2GP Package Development (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp.htm)
- Considerations for Package Migrations (atlas.en-us.pkg1_dev.meta/pkg1_dev/migrations_known_limitations.htm)
- Troubleshoot Package Conversion Failures (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_troubleshoot_errors.htm)
