---
title: "Migrate Your Subscribers from 1GP to 2GP"
domain: pkg1-dev
topic: migrate-your-subscribers-from-1gp-to-2gp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.474Z
estimatedTokens: 824
keywords: [Migrate, Subscribers, 1GP, 2GP, ready, converted, package, install, subscriber, org, already, managed, version, installed, migration]
---

# Migrate Your Subscribers from 1GP to 2GP

> Are you ready to migrate your converted package? To migrate a package you install the
  converted 2GP package into a subscriber org that already has the managed 1GP package version
  installed. Package migration requires that the major and minor version of the subscriber's
  installed package, match the major and minor version of 2GP you’re installing.

# Migrate Your Subscribers from 1GP to 2GP

Are you ready to migrate your converted package? To migrate a package you install the converted 2GP package into a subscriber org that already has the managed 1GP package version installed. Package migration requires that the major and minor version of the subscriber's installed package, match the major and minor version of 2GP you’re installing.

After a package is migrated there’s no change to the metadata or customer data associated with the package.

If your package has dependencies on other packages, the order in which you migrate the base and dependent packages is important. For more details, see [Plan Your Package Migration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_planning.htm).

## Bulk Migrate Multiple Subscribers (Beta)

To migrate multiple subscribers that all have the same package version installed, use the Salesforce CLI command to schedule a push upgrade and specify the \--migrate-to-2gp flag. Remember the major.minor.patch version of the package you're migrating, must be identical to the major.minor.patch version installed in a subscriber org.

The subscriber package version ID (starts with 04t) that you specify when migrating a package version, must be the ID for the converted 2GP package version, not the ID for the original 1GP package version.

Example:

```

```

Push upgrades for package migrations have a daily limit. Currently, you can use push upgrades to migrate 5 subscriber orgs per day.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Push migrations is a beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this beta service is at the Customer's sole discretion.

Before migrating customers using push upgrades, please review these [best practices](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_best_practices.htm). In particular, we strongly recommend that you work with your subscribers and follow a staggered approach, starting by migrating sandboxes first, before carrying out migrations in production.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Before migrating customers using push upgrades, please review these best practices. In particular, we strongly recommend that you work with your subscribers and follow a staggered approach, starting by migrating sandboxes first, before carrying out migrations in production.

## Manually Migrate One Subscriber

If you have subscribers who don't allow push upgrades to their org, they can manually upgrade to the 2GP package. Provide them with the package installation URL and they can migrate the package.

## Push Upgrade History and Org Migrations

From time to time, Salesforce migrates production orgs from one instance to another. If your Dev Hub org is scheduled for an org migration, it's crucial to back up your historical data related to push upgrades and 2GP migrations, as this data won't be retained post-migration.

## Code Examples

```
sf package push-upgrade schedule --migrate-to-2gp --package-version 04txyz --scheduled-start-time "2024-12-06T21:00:00" --org-file upgrade-orgs.csv
```
