---
title: "Take Ownership of a Second-Generation Managed Package Transferred from a Different Dev
  Hub"
domain: pkg2-dev
topic: take-ownership-of-a-second-generation-managed-package-transferred-from-a-differe
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.967Z
estimatedTokens: 1557
keywords: [Take, Ownership, Second-Generation, Managed, Package, Transferred, Different, Dev, Hub, another, Hug, org, Transfers, External, Customers]
---

# Take Ownership of a Second-Generation Managed Package Transferred from a Different Dev
  Hub

> You can take ownership of a second-generation managed package that is transferred from
  another Dev Hug org.

# Take Ownership of a Second-Generation Managed Package Transferred from a Different Dev Hub

You can take ownership of a second-generation managed package that is transferred from another Dev Hug org.

To initiate a package transfer from your Dev Hub org, see [Transfer a Second-Generation Managed Package to a Different Dev Hub](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_package_transfer.htm "You can transfer the ownership of a second-generation managed package (managed 2GP) from one Dev Hub org to another. These transfers can occur either internally between two Dev Hub orgs your company owns, or you can transfer a package externally to another Salesforce Partner or ISV. This change provides a way to sell a second-generation managed package to a different company.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

For security reasons, package transfers between a Dev Hub located in Government Cloud and a Dev Hub located outside Government Cloud aren’t permitted.

## Transfers from External Customers

If you’re receiving the package from another Salesforce Partner or ISV, make sure they provide the source code for the package, and an outline for the config settings needed to properly set up your Salesforce DX environment.

Request all the configuration settings required to properly set up the sfdx-project.json file, and a complete list of features and settings that must be specified in your scratch org definition file.

Also ensure that the company who is transferring the ownership of the package provides the login credentials for the namespace org they used. This information is needed to link the package namespace to your Dev Hub org.

## Receive a Package Transfer

For internal transfers, skip this step. Only log the case described in [Transfer a Second-Generation Managed Package to a Different Dev Hub](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_package_transfer.htm "You can transfer the ownership of a second-generation managed package (managed 2GP) from one Dev Hub org to another. These transfers can occur either internally between two Dev Hub orgs your company owns, or you can transfer a package externally to another Salesforce Partner or ISV. This change provides a way to sell a second-generation managed package to a different company.") .

If you’re receiving a package from a different Salesforce Partner or ISV, start by linking the namespace of the package you are receiving to your Dev Hub org. See [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm) in the Salesforce DX Developer Guide.

Next, log a case with Salesforce Customer Support, and provide the:

-   Dev Hub org ID for the source org.
-   Subscriber package ID of the package you’re receiving. This ID begins with 033.
-   Dev Hub org ID for the destination org.

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

Open and review the contents of the sfdx-project.json file that you received from the original package owner.

Open and review the contents of any scratch org definition files that you received from the original package owner. Definition files help in setting up your scratch orgs during development. Use the \-–definition-file parameter to specify a definition file when you create a new package version.

If the package directories section lists additional packages that weren’t transferred to you, remove those references from the sfdx-project.json file.

Next, review the package alias section of the sfdx-project.json file, and remove any references to package aliases that aren’t associated with the package that was transferred.

Update the package alias of the transferred package to specify its 0Ho package ID.

## Before You Create a New Package Version

Similar to how you go about creating any new package versions, you must update the sfdx-project.json file, and update the version number and ancestor ID. We recommend you set the ancestor ID to HIGHEST.

To designate a Dev Hub user to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package, run the sf package update command, and use the \--error-notification-username parameter.

## What Package History Is Transferred?

Regardless of whether the package transfer occurred between two Dev Hub orgs you own, or the package was transferred externally to a Dev Hub you don’t own, we transfer the package version history.

We transfer:

-   Package name, namespace, type, and IDs. One exception is that the transferred package gets a new 0Ho ID.
-   Package version info. This includes all the info that is typically displayed when you run the sf package version list or sf package version report command.

We don’t transfer:

-   Push upgrade history.
-   Package version create requests.
-   The username of the Dev Hub user who received Apex and other types of error notifications.
-   Deleted package versions.

## Next Steps

You’ve verified that the package is associated with your Dev Hub, you’ve updated your sfdx-project.json file, and perhaps you’ve even created a new package version. Congrats! There’s still a couple more items of business left to complete.

1.  Register the transferred package with your License Management Org.

    If this is an external transfer, log a case with Salesforce Customer Support and request provide both your LMO org ID, and the 033 package ID.

2.  [Publish Your Package on AppExchange](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_publish_appexchange.htm)

## Related Topics

- Transfer a Second-Generation Managed Package to a Different Dev Hub (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_package_transfer.htm)
