---
title: "Three Phases of Package Migration Development"
domain: pkg1-dev
topic: three-phases-of-package-migration-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.493Z
estimatedTokens: 1739
keywords: [Three, Phases, Package, Migration, Development, move, 1GP, 2GP, you’ll, Phase, Plan, Test, Two, Transition, Fully]
---

# Three Phases of Package Migration Development

> As you move from 1GP development to 2GP development, you’ll move through three phases.

# Three Phases of Package Migration Development

As you move from 1GP development to 2GP development, you’ll move through three phases.

-   Phase One: Plan for and test package migration
-   Phase Two: Transition from 1GP to 2GP
-   Phase Three: Fully transitioned to 2GP package development

Here's a quick comparison of the three phases.

| Phase | New package versions are built using 1GP? | Convert Packages? | Migrate Packages? | New package versions built using 2GP? |
| --- | --- | --- | --- | --- |
| Phase 1Plan and Test | Yes. Use 1GP to create and distribute packages. | Only for testing. When converting packages for testing only, you don’t need to promote the converted version. | Migrate in scratch orgs or test environments only. | No. |
| Phase 2Transition from 1GP to 2GP | Yes. In phase two, even if you have migrated a subscriber. All new innovation to your package is built using 1GP. | Yes. You can begin the conversion process with the latest version of your package. For previously converted packages, you can also convert specific patch versions as needed.Remember, a crucial step before updating your subscribers is to promote your converted package version to the released state. | Yes. Use the push upgrade CLI to migrate subscribers to 2GP.Migration is a one-time operation per subscriber and package.In phase two, after package migration, you upgrade subscribers using push upgrades to a converted version of your package. | No. Even if you have migrated some or all subscribers to a 2GP package version. During phase two any major, minor, or patch updates to this package must be built using 1GP.If you make updates to the 1GP package, upload it to the managed-released state, then convert that package version, and use push upgrades to upgrade subscriber orgs. |
| Phase 3Fully Transitioned from 1GP to 2GP | No. In this phase all innovation to your package is built using 2GP. | Before moving to phase three you must convert your latest package version. After a package has moved to phase three, you can no longer convert any new major, minor package versions. | At this stage, most of your subscribers are migrated to 2GP, but you can continue migrating lagging subscribers. | Yes |

## Phase One: Plan for and Test Package Migration

In phase one, you’re developing, distributing, and releasing package upgrades using 1GP packaging. While you continue package development using 1GP, it’s a good time to learn how package migrations work, and plan out how to migrate. See [Plan Your Package Migration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_planning.htm) for more details.

During phase one you can convert your 1GP package, test the package in a scratch org, and try migrating packages installed in scratch orgs or sandboxes. During package conversion, your original managed 1GP package isn’t altered. After a package conversion completes, you have both your original managed 1GP package version, and a new managed 2GP package version. Because your original 1GP isn’t altered, you can continue developing that 1GP package using its associated packaging org.

If your subscribers aren’t all using the same version of your package, phase one is a great time to get everyone upgraded to the same 1GP version of your package. Let's look at why this is recommended.

The package conversion command automatically selects and converts the latest major.minor package version. (We’ll cover patch versions in a later section). To migrate subscribers using a lower major.minor package version, you must upgrade them to either your latest 1GP package version, or to a previously converted 1GP version.

When you migrate a package, the 1GP package version installed on a subscriber org must match the major.minor.patch version of the converted 2GP package you migrate to that org.

If you’re able to get your subscribers all updated to the same package version, you only need to convert that one package version (for example version 6.0), and then you could choose to bulk migrate all subscribers to version 6.0 of the converted 2GP package.

Before moving to phase two, ensure you understand how migration works, including some best practices.

-   Review: [Plan Your Migration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_planning.htm)
-   Review: [Before you Begin Package Migration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_prerequistes.htm)
-   Review: [Considerations for Package Migration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migrations_known_limitations.htm)
-   Try package conversion and package migration in a test environment

## Phase Two: Transition from 1GP to 2GP

Phase two is a transition time.

In phase two you will convert your package, promote it to the released state, and start migrating your subscribers. The package conversion CLI command converts your latest major.minor released version of your package. To ultimately migrate all subscribers and move to phase three, any subscribers not using your latest package version must be upgraded to either your latest package version, or upgraded to a previously converted version, before they can be migrated.

If you’ve already tested package conversion and migration, you understand how to run those CLI commands. The thing to note about phase two is that after you migrate subscribers to your 2GP package, you’ll continue to use 1GP for new package innovation. After you create a new 1GP package version, you convert that package version, promote it, and push upgrade the new converted 2GP to your subscribers. Package migration is a one-time per package and subscriber operation, but during phase two you’ll likely convert additional versions of your 1GP package and use those new converted versions to upgrade previously migrated subscribers.

## Phase Three: Fully Transitioned to 2GP Package Development

In phase three, you confirm in Setup for your packaging org that you’re ready to develop and distribute your package solely using 2GP packaging. When you confirm that you’re ready to move to 2GP, the packaging org for your package is blocked from creating any new major or minor 1GP versions of that package. See [Complete the Move to 2GP Package Development](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp_workflow.htm "To fully transition to 2GP package development, you retrieve the source files for your package’s latest converted version. Then, you confirm in Setup for your packaging org that you’re ready to develop and distribute your package solely using 2GP packaging.") for instructions.

You can continue to create 1GP patch versions for versions prior to moving to 2GP development. For example, if you moved package version 6.0.0 to 2GP development, you can create patch version 5.0.1 or 4.1.1 using 1GP, but you can’t create patch version 6.0.1 or later using 1GP.

## Related Topics

- Complete the Move to 2GP Package Development (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp_workflow.htm)
