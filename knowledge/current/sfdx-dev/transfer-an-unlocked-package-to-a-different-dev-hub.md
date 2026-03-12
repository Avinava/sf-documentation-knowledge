---
title: "Transfer an Unlocked Package to a Different Dev Hub"
domain: sfdx-dev
topic: transfer-an-unlocked-package-to-a-different-dev-hub
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.018Z
estimatedTokens: 1423
keywords: [Transfer, Unlocked, Package, Different, Dev, Hub, ownership, org, another, Prepare, Process, Impact, Transfers, IDs, Project]
---

# Transfer an Unlocked Package to a Different Dev Hub

> You can transfer the ownership of an unlocked package from one Dev Hub org to
  another.

# Transfer an Unlocked Package to a Different Dev Hub

You can transfer the ownership of an unlocked package from one Dev Hub org to another.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

This package transfer feature is available only to unlocked packages and second-generation managed packages. Dev Hub orgs aren’t used with first-generation managed packages or unmanaged packages, so this feature doesn’t apply to those package types.

## Request a Package Transfer to a Different Dev Hub

Start by logging a case with Salesforce Customer Support, and provide the following details:

Subject: Unlocked Package Transfer to a different Dev Hub

Description:

In the description, list:

-   Subscriber package ID of the package you’re transferring. This ID starts with 033.

    To verify the 033 ID of your package, run the sf package list command with the \-–verbose flag on the source Dev Hub org.

-   Dev Hub org ID for the source org.
-   Dev Hub org ID for the destination org. The destination Dev Hub org can’t be a Developer Edition org or a trial org.
-   (Optional) Namespace of the package being transferred. If the package is a no-namespace unlocked package, skip this step.
-   Acknowledge that you’ve reviewed and completed the steps listed in the Prepare to Transfer Your Package section, including linking your namespace to the destination Dev Hub, and clearing your Apex Error Notification User.

If you’re transferring more than one package, file a separate case for each package.

After your case has been reviewed and approved, someone from Salesforce Customer Support will contact you to arrange a time to initiate the package transfer.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

For security reasons, package transfers between a Dev Hub located in Government Cloud and a Dev Hub located outside Government Cloud aren’t permitted.

## Prepare to Transfer Your Package

Here’s how you can help ensure a smooth package transfer.

-   If the package you’re transferring has a namespace, keep the namespace linked to the source Dev Hub. Before the package transfer, the [namespace must be linked](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm) to both the source and destination Dev Hub orgs.
-   Before the package transfer process is initiated, ensure all push upgrades or package version creation processes have completed.
-   Delete package versions that are no longer needed.
-   If specified, clear the package’s Error Notification User using the sf package update --error-notification-username= command. If you’re transferring the package to a Dev Hub org you own, you can set the Error Notification User to a user in the destination Dev Hub after the package transfer is complete. Note: Specifying \--error-notification-username= with no value after the equals sign clears any previously set username.

## During the Package Transfer Process

All push upgrades or package version creation processes must be complete before the package transfer process is initiated. Salesforce Customer Support will alert you about the date the package transfer will occur.

## After the Package Transfer Is Complete

Run sf package list and verify that the package is no longer associated with your Dev Hub.

## Impact of Package Transfers on Package IDs

| ID Type | ID starts with | After package transfer is complete … |
| --- | --- | --- |
| Subscriber Package ID | 033 | This ID remains the same. |
| Subscriber Package Version ID | 04t | This ID remains the same. |
| Package ID | 0Ho | The transferred package receives a new and unique package ID. |

## Update Your Package Project File

Before you create new packages or package versions on your Dev Hub, update your sfdx-project.json file and remove all references to the transferred package from the package directory and package alias sections.

If you have packages in your Dev Hub that depend on the package that you’re transferring, update the package dependency section in your sfdx-project.json file to explicitly specify the 04t ID of the transferred package that you depend on.

For example, if you transferred pkgA to a different Dev Hub, and your sfdx-project.json file lists the package dependency like this.

```

```

Update the dependency to either specify the 04t ID of pkgA.

```

```

Or specify the dependency using a package alias.

```

```

## What Package History Is Transferred?

When a package is transferred, all package versions, and all lines of ancestry are transferred. Upgrade paths aren’t affected.

Regardless of whether the package transfer occurred between two Dev Hub orgs you own, or the package was transferred externally to a Dev Hub you don’t own, we transfer the package version history.

We transfer:

-   Package name, namespace, type, and IDs. One exception is that the transferred package gets a new 0Ho ID.
-   Package version info. This includes all the info that is typically displayed when you run the sf package version list or sf package version report command.

We don’t transfer:

-   Push upgrade history.
-   Package version create requests.
-   The username of the Dev Hub user who received Apex and other types of error notifications. This optional user is set using \--error-notification-username.
-   Deleted package versions.

-   **[Take Ownership of an Unlocked Package Transferred from a Different Dev Hub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_unlocked_receive_package_transfer.htm)**
    You can take ownership of an unlocked package that is transferred from another Dev Hug org.

## Code Examples

```
"dependencies": [ 
   {
      "package": "pkgA"
      "versionNumber": "2.0.0.LATEST"
   }
]
```

```
"dependencies": [ 
   {
      "package": "04tB0000000UzH5IAK"
   }
]
```

```
"dependencies": [ 
   {
      "package": "pkgA2.0.0-1"
   }
"packageAliases": {
     "pkgA2.0.0-1": "04tB0000000UzH5IAK"
}
]
```

## Related Topics

- Take Ownership of an Unlocked Package Transferred from a Different Dev Hub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_unlocked_receive_package_transfer.htm)
