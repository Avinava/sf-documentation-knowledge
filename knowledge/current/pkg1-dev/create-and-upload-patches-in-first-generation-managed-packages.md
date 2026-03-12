---
title: "Create and Upload Patches in First-Generation Managed Packages"
domain: pkg1-dev
topic: create-and-upload-patches-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.634Z
estimatedTokens: 1387
keywords: [Upload, Patches, First-Generation, Managed, Packages, Patch, versions, developed, maintained, development, org]
---

# Create and Upload Patches in First-Generation Managed Packages

> Patch versions are developed and maintained in a patch development org.

# Create and Upload Patches in First-Generation Managed Packages

Patch versions are developed and maintained in a patch development org.

|  |
| --- |
| Available in: Developer Edition |


| User Permissions Needed |
| --- |
| To push an upgrade or create a patch development org | Upload AppExchange Packages |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

To enable patch versioning, log a case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)") and request patch versioning be enabled in the org where you created the namespace for the package. Patch versioning is available only to packages that have passed AppExchange security review.

To create a patch version:

1.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
2.  Click the name of your managed package.
3.  On the Patch Organization tab, click **New**.
4.  Select the package version that you want to create a patch for in the Patching Major Release dropdown. The release type must be Managed - Released.
5.  Enter a username for a login to your patch org.
6.  Enter an email address associated with your login.
7.  Click **Save**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    If you ever lose your login information, click **Reset** on the package detail page under Patch Development Organizations to reset the login to your patch development org.


The name of the patch development org’s My Domain name is randomly generated.

After you receive an email that Salesforce has created your patch development org, you can click **Login** to begin developing your patch version.

Development in a patch development org is restricted.

-   You can’t add package components.
-   You can’t delete existing package components.
-   API and dynamic Apex access controls can’t change for the package.
-   No deprecation of any Apex code.
-   You can’t add new Apex class relationships, such as extends.
-   You can’t add Apex access modifiers, such as virtual or global.
-   You can’t add new web services.
-   You can’t add feature or component dependencies.

    You can remove a feature or component dependency from a patch, but after the dependency is removed and the patch version is uploaded, you can't reinstate that dependency in a new patch version. To reinstate the dependency, create a new major or minor package version.


When you finish developing your patch, upload it through the UI in your patch development org. You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the *Tooling API Developer Guide*.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When you upload a new package in your patch development org, the upload process is asynchronous. Because the time to process the request varies, the package isn’t available immediately after the upload. While waiting, you can run SOQL queries on the PackageUploadRequest status field to monitor the request.

1.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
2.  Click the name of the package.
3.  On the Upload Package page, click **Upload**.
4.  Enter a Version Name. As a best practice, it's useful to have a short description and the date.
5.  Notice that the Version Number has had its patchNumber incremented.
6.  For managed packages, select a Release Type:
    -   Choose Managed - Released to upload an upgradeable version. After upload, some attributes of the metadata components are locked.
    -   Choose Managed - Beta if you want to upload a version of your package to a small sampling of your audience for testing purposes. You can still change the components and upload other beta versions.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

        #### Note

        Beta packages can only be installed in Developer Edition, scratch, or sandbox orgs, and thus can't be pushed to customer orgs.

7.  Change the Description, if necessary.
8.  (Optional) Enter and confirm a password to share the package privately with anyone who has the password. Don't enter a password if you want to make the package available to anyone on AppExchange and share your package publicly.
9.  Salesforce automatically selects the requirements it finds. In addition, select any other required components from the Package Requirements and Object Requirements sections to notify installers of any requirements for this package.
10.  Click **Upload**.

To distribute your patch, you can either share the upload link or [schedule a push upgrade](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm "After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade.").

## Related Topics

- schedule a push
                  upgrade (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_scheduling.htm)
