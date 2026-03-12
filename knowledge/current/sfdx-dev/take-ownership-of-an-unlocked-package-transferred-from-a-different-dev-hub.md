---
title: "Take Ownership of an Unlocked Package Transferred from a Different Dev Hub"
domain: sfdx-dev
topic: take-ownership-of-an-unlocked-package-transferred-from-a-different-dev-hub
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.024Z
estimatedTokens: 858
keywords: [Take, Ownership, Unlocked, Package, Transferred, Different, Dev, Hub, another, Hug, org, Receive, Transfer, Impact, Transfers]
---

# Take Ownership of an Unlocked Package Transferred from a Different Dev Hub

> You can take ownership of an unlocked package that is transferred from another Dev Hug
  org.

# Take Ownership of an Unlocked Package Transferred from a Different Dev Hub

You can take ownership of an unlocked package that is transferred from another Dev Hug org.

To initiate a package transfer from your Dev Hub org, see [Transfer an Unlocked Package to a Different Dev Hub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_unlocked_package_transfer.htm "You can transfer the ownership of an unlocked package from one Dev Hub org to another.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

For security reasons, package transfers between a Dev Hub located in Government Cloud and a Dev Hub located outside Government Cloud aren’t permitted.

## Receive a Package Transfer

Link the namespace of the package you’re receiving to your Dev Hub org. See [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm) in the Salesforce DX Developer Guide. If the package isn’t associated with a namespace, skip this step.

## After the Package Transfer Is Complete

After the package transfer is complete, you’ll be notified by Salesforce Customer Support.

To verify that the transferred package is associated with your Dev Hub, run sf package list.

## Impact of Package Transfers on Package IDs

| ID Type | ID starts with | After package transfer is complete … |
| --- | --- | --- |
| Subscriber Package ID | 033 | This ID remains the same. |
| Subscriber Package Version ID | 04t | This ID remains the same. |
| Package ID | 0Ho | The transferred package receives a new and unique package ID. |

## Update Your Package Project File

Open and review the contents of the sfdx-project.json file associated with the transferred package.

Open and review the contents of any scratch org definition files associated with the transferred package. Definition files help in setting up your scratch orgs during development. Use the –definition-file parameter to specify a definition file when you create a new package version.

If the package directories section lists additional packages that weren’t transferred to you, remove those references from the sfdx-project.json file.

Next, review the package alias section of the sfdx-project.json file, and remove any references to package aliases that aren’t associated with the package that was transferred.

Update the package alias of the transferred package to specify its 0Ho package ID.

## Before You Create a New Package Version

Similar to how you go about creating new package versions, you must update the sfdx-project.json file, and update the version number.

To designate a Dev Hub user to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package, run the sf package update command, and use the \--error-notification-username parameter.

## What Package History Is Transferred?

We transfer:

-   Package name, namespace, type, and IDs. One exception is that the transferred package gets a new 0Ho ID.
-   Package version info. This includes all the info that is typically displayed when you run the sf package version list or sf package version report command.

We don’t transfer:

-   Push upgrade history.
-   Package version create requests.
-   The username of the Dev Hub user who received Apex and other types of error notifications.
-   Deleted package versions.

## Related Topics

- Transfer an Unlocked Package to a Different Dev Hub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_unlocked_package_transfer.htm)
