---
title: "package push-upgrade schedule"
domain: cli-commands
topic: package-push-upgrade-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, push-upgrade, schedule, Schedule, push, upgrade., Description, Examples, Flags]
---

# package push-upgrade schedule

> Schedule a package push upgrade.

## package push-upgrade schedule

Schedule a package push upgrade.

### Description for package push-upgrade schedule

Represents a push upgrade request for upgrading a package in one or many orgs from one version to another version.

To initiate a push upgrade for an unlocked or second-generation managed package, the Create and Update Second-Generation Packages user permission is required.

For second-generation managed packages, the push upgrade feature is available only for packages that have passed AppExchange security review. To enable push upgrades for your managed package, log a support case in the Salesforce Partner Community.

For unlocked packages, push upgrades are enabled by default.

Use the -–migrate-to-2GP flag to indicate you’re installing a converted second-generation managed package into an org that has the first-generation managed package version of that package installed.

### Examples for package push-upgrade schedule

Schedule a push upgrade that initiates at a specified time:

```

```

Schedule a push upgrade that initiates as soon as possible:

```

```

Schedule a push migration from a 1GP package to a 2GP package:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org that owns the package.

Overrides the value of the target-dev-hub configuration variable, if set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 04t) of the package version that the package is being upgraded to. The package version must be an active, non-beta package version.

Type: option

\-t | \--start-time START-TIME

Optional

Date and time (UTC) when the push upgrade is processed. Set to the earliest time that you want Salesforce to attempt to start the upgrade.

Scheduled push upgrades begin as soon as resources are available on the Salesforce instance, which is either at or after the start time you specify. In certain scenarios, the push upgrade starts a few hours after the scheduled start time.

As a best practice, schedule push upgrades at off-peak hours like 1:00 AM Saturday.

If you don't specify this flag, the push upgrade is scheduled to run as soon as resources are available on the Salesforce instance.

Type: option

\-l | \--org-list ORG-LIST

Optional

Comma-separated list of subscriber org IDs that need the package upgrade. Either --org-list or --org-file must be specified.

Type: option

\-f | \--org-file ORG-FILE

Optional

Filename of the CSV file that contains the list of subscriber org IDs that need the package upgrade. Either --org-list or --org-file must be specified.

The file must contain one org per line. The org ID must be the only value in each row.

All listed orgs must have a package version installed in their org that is lower than the package version you specified for the --package flag.

Type: option

\--migrate-to-2gp

Optional

Upgrade from a first-generation managed package (1GP) to a second-generation managed package (2GP). Required when you’re pushing a 2GP package to orgs with the 1GP version installed.

Type: boolean