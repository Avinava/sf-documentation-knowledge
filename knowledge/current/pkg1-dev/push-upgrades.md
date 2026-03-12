---
title: "Push Upgrades"
domain: pkg1-dev
topic: push-upgrades
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.595Z
estimatedTokens: 750
keywords: [Push, Upgrades, Upgrade, Steps]
---

# Push Upgrades

> Overview of Push Upgrade Steps

# Push Upgrades

Overview of Push Upgrade Steps

-   Upgrade your managed package installed in a customer organization from version X to version Y
-   Select one, many, or all customer organizations to upgrade and select a particular version to upgrade to
-   Schedule the upgrade to start at a particular date and time
-   View progress of upgrades, abort upgrades in progress, or view the result of a push upgrade
-   In conjunction with push, you can use a post-install Apex script to automate post-upgrade configurations that your customers have previously performed manually

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

#### Warning

When you push an upgrade, you’re making changes to a subscriber’s org without explicit consent. Therefore, it’s important to plan ahead and exercise caution. You can also exclude specific subscriber orgs from a push upgrade by entering the org IDs, separated by a comma, in the Push Upgrade Exclusion List.

Pushing a major upgrade entails a higher degree of risk as it can impact existing functionality in a subscriber’s organization. This is because new components in the upgraded package might not be available to existing users of the package, or could overwrite users’ customizations. As the app developer, it’s your responsibility to protect users from any adverse impact due to upgrading. We strongly recommend you consider all potential consequences of the upgrade and take appropriate steps to prevent any problems.

When pushing a major upgrade, we recommend that you divide changes in your package into two categories:

1.  Enhancements to existing features that users already have access to—Use a post install Apex script to automatically assign the relevant components to existing users. This ensures all current users of the package can continue using it without explicit action by administrators.
2.  New features you’re introducing—Don’t use a post install Apex script to auto-assign components. This ensures your subscribers have the opportunity to decide if and when to use the new features.

Here are some additional guidelines to keep in mind when planning a push upgrade.

-   Avoid changes to validation rules, formula fields, and errors thrown from Apex triggers, as they may negatively impact subscribers’ integrations.
-   Don’t make visible changes to a package in a patch. This is because other than a change in the package version number, subscribers aren't notified of push upgrades.
-   Test your upgraded package in multiple environments, replicating all relevant features of your customers’ organizations, including editions, customizations, other installed packages, and permission sets.
-   Schedule push upgrades at your customers’ off-peak hours and outside of Salesforce’s major release windows, to minimize potential subscriber impact.
-   Notify your subscribers in advance about the timing of the upgrade, its potential consequences, and any steps they need to take.
