---
title: "Scheduling Push Upgrades"
domain: pkg1-dev
topic: scheduling-push-upgrades
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.674Z
estimatedTokens: 1706
keywords: [Scheduling, Push, Upgrades, you’ve, created, updated, version, package, automatically, deploy, customers, upgrade, Schedule, Enterprise, API]
---

# Scheduling Push Upgrades

> After you’ve created an updated version of your package, you can automatically deploy
    it to customers using a push upgrade.

# Scheduling Push Upgrades

After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade.


| User Permissions Needed |
| --- |
| To push an upgrade: | Upload AppExchange Packages |

1.  Push the upgrade to your own orgs so you can run tests and fix any bugs before upgrading subscribers.
2.  When you’re ready and have coordinated with your customers on their change management process, push to a small number of customer organizations. Try sandbox organizations first, if possible.
3.  After you’re comfortable with the initial results, push to your wider customer base, based on your agreements with each customer.
4.  Deprecate the previous version of your package in your main development organization. Replace the version on AppExchange if necessary, and update your Trialforce setup.
5.  If your upgrade was a patch, after you’ve successfully distributed the upgrade to subscriber organizations, reintegrate those changes into your main development organization. For more information about combining patches in the main development organization, see [Working with Patch Versions](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_patches_about.htm#packaging_patches_about "A patch version enables a developer to change the functionality of existing components in a managed package. Subscribers experience no visible changes to the package. Patches are minor upgrades to a Managed - Released package and only used for fixing bugs or other errors.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Partners can also grant select customers the ability to block push upgrades by setting up customized push upgrades. See [Enable a Package Subscriber to Restrict Push Upgrades](atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_customized.htm "In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.") for more information.

## Schedule a Push Upgrade Using the UI

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Only first-generation managed packages can schedule a push upgrade using the UI. To schedule a push upgrade for unlocked and second-generation managed packages, use the [PackagePushRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagepushrequest.htm "HTML (New Window)") in the Salesforce Object Reference.

1.  Log in to your main development org (not the patch org you used to upload the new version).
2.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
3.  Click the name of the managed package whose upgrade you want to push.
4.  On the package detail page, click the **Versions** tab, and then click **Push Upgrades**.
5.  Click **Schedule Push Upgrades**.
6.  Select a package version to push from the **Patch Version** dropdown list.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Beta versions aren’t eligible for push.

7.  For the scheduled start date, enter when you want the push upgrade to begin.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Scheduled push upgrades begin as soon as resources are available on the Salesforce instance, which is either at or after the start time you specify. In certain scenarios, the push upgrade could start a few hours after the scheduled start time.

8.  In the Select Target Organizations section, select the orgs to receive your push upgrade. If an org already received a push upgrade for the selected package version, it doesn’t appear in this list. You can select orgs by:

    -   Entering a term that filters based on an org’s name or ID. Names can match by partial string, but IDs must match exactly.
    -   Choosing between production and sandbox orgs from the **Organizations** dropdown list.
    -   Choosing orgs that have already installed a particular version.
    -   Clicking individual orgs or the **Select All** and **Deselect All** checkboxes.

    This section lists the following information about the org (in alphabetical order):

    | Field | Description |
    | --- | --- |
    | Current Version | The current package version an organization has installed. |
    | Organization ID | The ID of the org. |
    | Organization Name | The name of the org. To view the upgrade history for the org, click the org name. |
    | Primary Contact | The name of the user who installed the package. |

9.  Click **Schedule**. While a push upgrade is in progress, you can click Abort to stop it.

## Schedule a Push Upgrade Using the Enterprise API

1.  Authenticate to your main development org (not the patch org you used to upload the new version).
2.  Determine the package version you want to upgrade subscribers to by querying the MetadataPackageVersion object.
3.  Gather the list of subscriber orgs that are eligible to be upgraded by querying the PackageSubscriber object.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    If you’re retrieving more than 2,000 subscribers, use SOAP API [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm "HTML (New Window)") call.

4.  Create a PackagePushRequest object. PackagePushRequest objects take a PackageVersionId and, optionally, a ScheduledStartTime parameter to specify when the push begins. If you omit the ScheduledStartTime, the push begins when you set the PackagePushRequest's status to Pending.
5.  Create a PackagePushJob for each eligible subscriber and associate it with the PackagePushRequest you created in the previous step.
6.  Schedule the push upgrade by changing the status of the PackagePushRequest to Pending.
7.  Check the status of the PackagePushRequest and PackagePushJob objects by querying the Status fields. If the status is either Created or Pending, you can abort the push upgrade by changing the status of the PackagePushRequest to Canceled. You can’t abort a push upgrade that has a status of Canceled, Succeeded, Failed, or In Progress.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    If you’re pushing the upgrade to more than 2,000 subscribers, use the [Bulk\_API](https://developer.salesforce.com/page/Bulk_API "HTML (New Window)") to process the job in batches.


For sample code and more details, see *SOAP API Developer Guide*.

## Related Topics

- Working with Patch Versions (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_patches_about.htm)
- Enable a Package Subscriber to Restrict Push Upgrades (atlas.en-us.pkg1_dev.meta/pkg1_dev/push_upgrade_customized.htm)
