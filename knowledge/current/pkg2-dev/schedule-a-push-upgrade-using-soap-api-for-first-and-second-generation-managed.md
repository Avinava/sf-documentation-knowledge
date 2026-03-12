---
title: "Schedule a Push Upgrade Using SOAP API for First- and Second-Generation Managed
    Packages"
domain: pkg2-dev
topic: schedule-a-push-upgrade-using-soap-api-for-first--and-second-generation-managed-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.933Z
estimatedTokens: 797
keywords: [Schedule, Push, Upgrade, SOAP, API, First-, Second-Generation, Managed, Packages, you’ve, created, updated, version, package, automatically]
---

# Schedule a Push Upgrade Using SOAP API for First- and Second-Generation Managed
    Packages

> After you’ve created an updated version of your package, you can automatically deploy
    it to customers using a push upgrade.

# Schedule a Push Upgrade Using SOAP API for First- and Second-Generation Managed Packages

After you’ve created an updated version of your package, you can automatically deploy it to customers using a push upgrade.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Partners can also grant select customers the ability to block push upgrades by setting up customized push upgrades. See [Enable a Package Subscriber to Restrict Push Upgrades](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm "In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.") for more information.

For code samples and more detailed steps, see SOAP API object documentation linked in each step.

1.  Authenticate to your [Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_login.htm "HTML (New Window)").
2.  Query [MetadataPackage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_metadatapackage.htm "HTML (New Window)") to verify package details.
3.  Query [MetadataPackageVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_metadatapackageversion.htm "HTML (New Window)") to verify the package version to use for the push upgrade.
4.  Query [PackageSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagesubscriber.htm "HTML (New Window)") to retrieve details about subscriber orgs such as the org ID and installed package version. To retrieve information about more than 2,000 subscribers, use SOAP API [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm "HTML (New Window)") call.
5.  Create a [PackagePushRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagepushrequest.htm "HTML (New Window)") object. Specify the PackageVersionId and ScheduledStartTime (optional). If you omit the ScheduledStartTime, the push begins when you set the PackagePushRequest's status to Pending.
6.  Create a [PackagePushJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagepushjob.htm "HTML (New Window)") for each subscriber and associate it with the PackagePushRequest you created in the previous step.
7.  Schedule the push upgrade by changing the status of the PackagePushRequest to Pending.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Scheduled push upgrades begin as soon as resources are available on the Salesforce instance, which is either at or after the start time you specify. In certain scenarios, the push upgrade could start a few hours after the scheduled start time.

## Related Topics

- Enable a Package Subscriber to Restrict Push Upgrades (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm)
