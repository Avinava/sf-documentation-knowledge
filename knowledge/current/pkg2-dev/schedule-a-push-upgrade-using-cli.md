---
title: "Schedule a Push Upgrade Using CLI"
domain: pkg2-dev
topic: schedule-a-push-upgrade-using-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.915Z
estimatedTokens: 2678
keywords: [Schedule, Push, Upgrade, CLI, Salesforce, commands, abort, view, requests, upgrades, let, second-generation, managed, packages, installed]
---

# Schedule a Push Upgrade Using CLI

> Use Salesforce CLI commands to schedule, abort, or view details about your push upgrade
  requests. Push upgrades let you upgrade second-generation managed packages installed in subscriber
  orgs, without asking customers to install the upgrade themselves.

# Schedule a Push Upgrade Using CLI

Use Salesforce CLI commands to schedule, abort, or view details about your push upgrade requests. Push upgrades let you upgrade second-generation managed packages installed in subscriber orgs, without asking customers to install the upgrade themselves.

The push upgrade feature is available to unlocked packages and second-generation managed packages only. To push a package upgrade for a second-generation managed package, that package must have already passed the AppExchange security review.

Push upgrades for unlocked packages are enabled by default. To enable push upgrades for your second-generation managed package, log a case with Salesforce Partner Support.

To initiate a push upgrade for an unlocked or second-generation managed package, the Create and Update Second-Generation Packages user permission is required.

There are several aspects to scheduling a push upgrade for a package. At a high-level these include:

-   Identifying the subscriber orgs and the org IDs that you want to upgrade
-   Scheduling the push upgrade
-   Tracking the progress and completion of the push upgrade

In some scenarios you may also need to abort a scheduled push upgrade, or analyze errors that occurred. Let’s review each of these steps in more detail.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Partners can also grant select customers the ability to block push upgrades by setting up customized push upgrades. See [Enable a Package Subscriber to Restrict Push Upgrades](atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm "In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.") for more information.

## Determine the Orgs to Be Upgraded

There isn't a dedicated push-upgrade CLI command for this action, instead let's look at how to use the CLI data query command.

Push upgrades must be done in the context of the Dev Hub org that owns the package. To confirm the set of packages owned by a specific Dev Hub org, run the [package list](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_list_unified) command.

Then [authorize to the Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified) that is the owner of the package are upgrading.

```

```

If you're preparing to push a package upgrade, we assume your development environment is set up, if you aren't certain, review [Set Up Your Development Environment](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_dev_environment.htm).

Here are three example queries you can use to retrieve a list of subscriber orgs that are eligible for a package upgrade. To review the possible fields that can be queried, see [PackageSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagesubscriber.htm) in the Object Reference for the Salesforce Platform.

Each query requires either a subscriber package ID (starts with 033), or a subscriber package version ID (starts with 04t). To retrieve the subsciber package ID, use the [package list](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_list_unified) command and specify the \--verbose flag. To retrieve the subscriber package version ID, use the [package version list](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_list_unified) command.

Query Example 1:

Compile a list of all orgs that have a specific package installed. This query requires the subscriber package ID (starts with 033).

```

```

If you copy and paste this query, update the target org and the subscriber package ID, before running the command. The target org is the Dev Hub org that owns the package. Specify either the username or alias for the Dev Hub org.

Query Example 2:

Compile a list of orgs that have a specific package version installed, and pipe that output to a CSV file.

```

```

If you copy and paste this query, update the target org and the subscriber package version ID, before running the command. The target org is the Dev Hub org that owns the package. Specify either the username or alias for the Dev Hub org.

This query returns as CSV file that you can use when scheduling the push upgrade. Before specifying the file in the package push-upgrade schedule command, remove the first line of the CSV file. The CSV file can contain one org ID per line only.

Query Example 3:

Compile a list of all orgs that have a package version lower than version 2.7 installed. This query requires two separate steps.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

A single package has both a package ID (starts with 0Ho) and a subscriber package ID (starts with 033). For part one of this two-part query, you must specify the 0Ho ID. If you run the package list command with the \--verbose flag, you can determine both the 033 and 0Ho ID for a package. For more details on package IDs, see [Package IDs and Aliases for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm).

First, query the [Package2Version](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_package2version.htm) object to find all versions of your package that are numerically lower than the specified version (2.7).

```

```

If you copy and paste this query, update the target org, the Package ID (starts with 0Ho), and the major and minor version before running the command. The target org is the Dev Hub org that owns the package. Specify either the username or alias for the Dev Hub org.

Note the SubscriberPackageVersionId values (starts with 04t) returned by this query.

Next, query the [PackageSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagesubscriber.htm) object using the subscriber package version IDs (starts with 04t) from the previous step.

```

```

If you copy and paste this query, update the target org and the subscriber package version IDs (starts with 04t) before running the command. The target org is the Dev Hub org that owns the package. Specify either the username or alias for the Dev Hub org.

If you created a CSV file in this step and plan to use the file to schedule your push upgrade, you must remove the first line of the file so that it contains a list of org IDs only.

## Schedule a Package Push Upgrade

After you have the org IDs for the subscribers you're upgrading, you can schedule the push upgrade. Review these examples of the flags you might include with the package push-upgrade schedule command. For more details on this command, see the [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_push-upgrade_schedule_unified).

When scheduling a push upgrade you have a choice about how to specify the orgs you want upgraded. You can use either flag:

-   \--org-file and provide a CSV file of all the orgs to be upgraded, or
-   \--org-list and specify a comma-separated list of org IDs in the command line when you run the push upgrade CLI command

If using a org file, it must contain one org ID per line only.

Examples for package push-upgrade schedule

Schedule a push upgrade that initiates at a specified time with a list of org IDs:

```

```

Schedule a push upgrade that initiates as soon as possible using a list of orgs in a CSV file:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

If you don't specify the \--start-time flag, the push upgrade begins as soon as resources are available. When specfiying a start time, schedule during off peak hours. Specify start time in UTC.

## Retrieve Details about Scheduled Package Push Upgrades

Use the package push-upgrade list or package push-upgrade report commands to retrieve details about push upgrades that have been scheduled or completed for a package.

Examples for package push-upgrade list:

List all package push upgrade requests for a specified package:

```

```

List all package push upgrade requests for a specified package scheduled in the last 30 days:

```

```

List all package push upgrade requests with a status of Failed. This status occurs if the push upgrade fails for one or more orgs.

```

```

List all package push upgrade requests with a status of Succeeded:

```

```

Generate a report about a specific push upgrade request:

```

```

The package push-upgrade list command displays these fields: push request ID, package version ID, package version number, status of the push upgrade request, push upgrade request scheduled start date and time, the number of orgs scheduled for push upgrade, the number of orgs that were successfully upgraded, the number of orgs that failed to be upgraded, and push upgrade request created date and time.

The package push-upgrade report command provides additional information, including error details.

## Cancel a Pending Package Push Upgrade Request

If your push upgrade request has a status of either Created or Pending you can cancel the push upgrade by running the package push-upgrade abort command. To retrieve the status of your push upgrade request, run either package push-upgrade list or package push-upgrade report.

To cancel a specified push upgrade request:

```

```

## Retrieve Error Messages for a Package Push Upgrade

There isn't a dedicated push upgrade CLI command for this retrieving error message, instead let's look at how to use the CLI data query command. Use this example query to retrieve error messages stored in the [PackagePushError](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagepusherror.htm) object.

Example:

```

```

## Code Examples

```
sf org login web --set-default-dev-hub
```

```
sf data query --target-org myDevHub --query "SELECT OrgKey, OrgName, OrgType, InstanceName, MetadataPackageId, MetadataPackageVersionId FROM PackageSubscriber WHERE MetadataPackageId = '033xxxxxxxxxxxxxxx'" --result-format json
```

```
sf data query --target-org myDevHub --query "SELECT OrgKey, OrgName, OrgType FROM PackageSubscriber WHERE MetadataPackageVersionId = '04t…'" --result-format csv
```

```
sf data query --target-org admin@packaging.com --use-tooling-api --query "SELECT SubscriberPackageVersionId FROM Package2Version WHERE Package2Id = '0HoPACKAGEIDxxxx' AND (MajorVersion < 2 OR (MajorVersion = 2 AND MinorVersion < 7))"
```

```
sf data query --target-org myDevHub --query "SELECT OrgKey FROM PackageSubscriber WHERE MetadataPackageVersionId IN ('04tID1', '04tID2', '04tID_etc')" --result-format csv >out.txt
```

## Related Topics

- Enable a Package Subscriber to Restrict Push Upgrades (atlas.en-us.pkg2_dev.meta/pkg2_dev/push_upgrade_customized.htm)
