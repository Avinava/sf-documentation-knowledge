---
title: "Push a Package Upgrade for Unlocked Packages"
domain: sfdx-dev
topic: push-a-package-upgrade-for-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.842Z
estimatedTokens: 395
keywords: [Push, Package, Upgrade, Unlocked, Packages, upgrades, enable, installed, orgs, asking, org, admins, install, themselves, choose]
---

# Push a Package Upgrade for Unlocked Packages

> Push upgrades enable you to upgrade packages installed in orgs, without asking org
  admins to install the upgrade themselves. You can choose which orgs receive a push upgrade, what
  version the package is upgraded to, and when you want the upgrade to occur. Push upgrades are
  particularly helpful if you need to push a change for a hot bug fix.

# Push a Package Upgrade for Unlocked Packages

Push upgrades enable you to upgrade packages installed in orgs, without asking org admins to install the upgrade themselves. You can choose which orgs receive a push upgrade, what version the package is upgraded to, and when you want the upgrade to occur. Push upgrades are particularly helpful if you need to push a change for a hot bug fix.

Use Salesforce CLI or SOAP API to initiate the push upgrade, track the status of each job, and review error messages if any push upgrades fail.

The CLI push upgrade commands are available to second-generation managed packages and unlocked packages. For unlocked packages, push upgrades are enabled by default.

| Package Type | Push Upgrade using CLI? | Push Upgrade using API? | Push Upgrade using UI? |
| --- | --- | --- | --- |
| 2GP | Yes | Yes | No |
| 1GP | No | Yes | Yes |
| Unlocked | Yes | Yes | No |

## Push Upgrade Considerations for Unlocked Packages

-   You can include new and changed features, or remove features during a push upgrade.
-   When a push upgrade is installed, the Apex in the package is compiled.
-   You can use push upgrades even if the package version requires a password.

-   **[Schedule a Push Upgrade Using CLI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_push_upgrade_cli.htm)**
    Use Salesforce CLI commands to schedule, abort, or view details about your push upgrade requests. Push upgrades let you upgrade second-generation managed packages installed in subscriber orgs, without asking customers to install the upgrade themselves.

## Related Topics

- Schedule a Push Upgrade Using CLI (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_push_upgrade_cli.htm)
