---
title: "package Commands"
domain: cli-commands
topic: package-commands
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T05:14:03.453Z
estimatedTokens: 14557
keywords: [package, Commands, Convert, managed-released, first-generation, managed, second-generation, package., convert, Description, Examples, Flags, Aliases, create, delete, install, report, installed, list, push-upgrade]
---

# package Commands

> Convert a managed-released first-generation managed package into a second-generation managed package.

# package Commands

Commands to develop and install unlocked packages and managed 2GP packages.

-   **[package convert](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_convert_unified)**
    Convert a managed-released first-generation managed package into a second-generation managed package.
-   **[package create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_create_unified)**
    Create a package.
-   **[package delete](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_delete_unified)**
    Delete a package.
-   **[package install](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_unified)**
    Install or upgrade a version of a package in the target org.
-   **[package install report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_report_unified)**
    Retrieve the status of a package installation request.
-   **[package installed list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_installed_list_unified)**
    List the org’s installed packages.
-   **[package list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_list_unified)**
    List all packages in the Dev Hub org.
-   **[package push-upgrade abort](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_push-upgrade_abort_unified)**
    Abort a package push upgrade that has been scheduled. Only push upgrade requests with a status of Created or Pending can be aborted.
-   **[package push-upgrade list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_push-upgrade_list_unified)**
    Lists the status of push upgrade requests for a given package.
-   **[package push-upgrade report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_push-upgrade_report_unified)**
    Retrieve the status of a package push upgrade.
-   **[package push-upgrade schedule](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_push-upgrade_schedule_unified)**
    Schedule a package push upgrade.
-   **[package uninstall](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_uninstall_unified)**
    Uninstall a second-generation package from the target org.
-   **[package uninstall report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_uninstall_report_unified)**
    Retrieve the status of a package uninstall request.
-   **[package update](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_update_unified)**
    Update package details.
-   **[package version create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_create_unified)**
    Create a package version in the Dev Hub org.
-   **[package version create list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_create_list_unified)**
    List package version creation requests.
-   **[package version create report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_create_report_unified)**
    Retrieve details about a package version creation request.
-   **[package version delete](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_delete_unified)**
    Delete a package version.
-   **[package version displayancestry](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_displayancestry_unified)**
    Display the ancestry tree for a 2GP managed package version.
-   **[package version displaydependencies](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_displaydependencies_unified)**
    Display the dependency graph for an unlocked or 2GP managed package version.
-   **[package version list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_list_unified)**
    List all package versions in the Dev Hub org.
-   **[package version promote](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_promote_unified)**
    Promote a package version to released.
-   **[package version report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_report_unified)**
    Retrieve details about a package version in the Dev Hub org.
-   **[package version retrieve](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_retrieve_unified)**
    Retrieve package metadata for a specified package version. Package metadata can be retrieved for only second-generation managed package versions or unlocked packages.
-   **[package version update](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_version_update_unified)**
    Update a package version.

## package convert

Convert a managed-released first-generation managed package into a second-generation managed package.

### Description for package convert

The package conversion command automatically selects the latest released major.minor first-generation managed package version, and converts it into a second-generation managed package version.

Use --patch-version to specify a released patch version.

To retrieve details about a package version create request, including status and package version ID (04t), run "sf package version create report -i 08c...".

To protect the contents of your package and to prevent unauthorized installation of your package, specify the --installation-key flag.

To promote a package version to released, you must use the --code-coverage parameter. The package must also meet the code coverage requirements.

To list package version creation requests in the org, run "sf package version create list".

### Examples for package convert

Create a second-generation managed package version from the first-generation managed package with the specified ID and give it the installation key "password123"; uses your default Dev Hub org:

```

```

Similar to previous example, but uses the specified Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 033) of the first-generation managed package to convert.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package.

Either an --installation-key value or the --installation-key-bypass flag is required.

Type: option

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a definition file that contains features and org preferences that the metadata of the package version depends on.

This definition file is similar to the scratch org definition file.

Type: option

\-x | \--installation-key-bypass

Optional

Bypass the installation key requirement.

If you bypass this requirement, anyone can install your package. Either an --installation-key value or the --installation-key-bypass flag is required.

Type: boolean

\-w | \--wait WAIT

Optional

Minutes to wait for the package version to be created.

Type: option

Default value: 0 minutes

\-m | \--seed-metadata SEED-METADATA

Optional

Directory containing metadata to be deployed prior to conversion.

The directory containing metadata that will be deployed on the build org prior to attempting package conversion.

Type: option

\--verbose

Optional

Display verbose command output.

Type: boolean

\-a | \--patch-version PATCH-VERSION

Optional

Specific released patch version to be converted.

Specify a released patch version as major.minor.patch to convert to a second-generation managed package version.

Type: option

\-c | \--code-coverage

Optional

Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version.

Before you can promote and release a managed package version, the Apex code must meet a minimum 75% code coverage requirement.

Type: boolean

### Aliases for package convert

```

```

## package create

Create a package.

### Description for package create

First, use this command to create a package. Then create a package version.

If you don’t have a namespace defined in your sfdx-project.json file, use --no-namespace.

Your --name value must be unique within your namespace.

Run 'sf package list to list all packages in the Dev Hub org.

### Examples for package create

Create an unlocked package from the files in the "force-app" directory; uses your default Dev Hub org:

```

```

Create a managed packaged from the "force-app" directory files, give the package a description, and use the specified Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-n | \--name NAME

Required

Name of the package to create.

Type: option

\-t | \--package-type PACKAGE-TYPE

Required

Type of package.

The options for package type are Managed and Unlocked (Managed=DeveloperManagedSubscriberManaged, Unlocked=DeveloperControlledSubscriberEditable). These options determine upgrade and editability rules.

Type: option

Permissible values are: Managed, Unlocked

\-d | \--description DESCRIPTION

Optional

Description of the package.

Type: option

\-e | \--no-namespace

Optional

Create the package with no namespace; available only for unlocked packages.

This flag is useful when you’re migrating an existing org to packages. But use a namespaced package for new metadata.

Type: boolean

\-r | \--path PATH

Required

Path to directory that contains the contents of the package.

Type: option

\--org-dependent

Optional

Depends on unpackaged metadata in the installation org; applies to unlocked packages only.

Use Source Tracking in Sandboxes to develop your org-dependent unlocked package. For more information, see "Create Org-Dependent Unlocked Packages" in the Salesforce DX Developer Guide.

Type: boolean

\-o | \--error-notification-username ERROR-NOTIFICATION-USERNAME

Optional

Active Dev Hub user designated to receive email notifications for package errors.

Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.

Type: option

### Aliases for package create

```

```

## package delete

Delete a package.

### Description for package delete

Specify the ID or alias of the package you want to delete.

Delete unlocked and second-generation managed packages. Before you delete a package, first delete all associated package versions.

### Examples for package delete

Delete a package using its alias from your default Dev Hub org:

```

```

Delete a package using its ID from the specified Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-n | \--no-prompt

Optional

Don't prompt before deleting the package.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 0Ho) or alias of the package to delete.

Type: option

### Aliases for package delete

```

```

## package install

Install or upgrade a version of a package in the target org.

### Description for package install

To install or upgrade a package, specify a specific version of the package using the 04t package ID. The package and the version you specified installs in your default target org unless you supply the username for a different target org.

When upgrading an unlocked package, include the --upgrade-type value to specify whether any removed components are deprecated or deleted. To delete components that can be safely deleted and deprecate the others, specify "--upgrade-type Mixed" (the default). To deprecate all removed components, specify "--upgrade-type DeprecateOnly". To delete all removed components, except for custom objects and custom fields, that don't have dependencies, specify "--upgrade-type Delete". (Note: This option can result in the loss of data that is associated with the deleted components.)

### Examples for package install

Install or upgrade a package version with the specified ID in the org with username "me@example.com":

```

```

Install or upgrade a package version with the specified alias into your default org:

```

```

Install or upgrade a package version with an alias that includes spaces into your default org:

```

```

Upgrade an unlocked package version with the specified ID and deprecate all removed components:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for installation status.

Type: option

Default value: 0 minutes

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package (default: null).

Type: option

\-b | \--publish-wait PUBLISH-WAIT

Optional

Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request.

Type: option

Default value: 0 minutes

\-r | \--no-prompt

Optional

Don't prompt for confirmation.

Allows the following without an explicit confirmation response: 1) Remote Site Settings and Content Security Policy websites to send or receive data, and 2) --upgrade-type Delete to proceed.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to install.

Type: option

\-a | \--apex-compile APEX-COMPILE

Optional

Compile all Apex in the org and package, or only Apex in the package; unlocked packages only.

Applies to unlocked packages only. Specifies whether to compile all Apex in the org and package, or only the Apex in the package.

For package installs into production orgs, or any org that has Apex Compile on Deploy enabled, the platform compiles all Apex in the org after the package install or upgrade operation completes.

This approach assures that package installs and upgrades don’t impact the performance of an org, and is done even if --apex-compile package is specified.

Type: option

Permissible values are: all, package

Default value: all

\-s | \--security-type SECURITY-TYPE

Optional

Security access type for the installed package. Available options are AdminsOnly and AllUsers.

Type: option

Permissible values are: AllUsers, AdminsOnly

Default value: AdminsOnly

\-t | \--upgrade-type UPGRADE-TYPE

Optional

Upgrade type for the package installation; available only for unlocked packages.

For unlocked package upgrades, set this flag to one of these values:

\- DeprecateOnly: Mark all removed components as deprecated.

\- Mixed: Delete all removed components that can be safely deleted and deprecate the other components.

\- Delete: Delete removed components, except for custom objects and custom fields, that don't have dependencies.

Type: option

Permissible values are: DeprecateOnly, Mixed, Delete

Default value: Mixed

### Aliases for package install

```

```

## package install report

Retrieve the status of a package installation request.

### Examples for package install report

Retrieve the status of a package installation request with the specified ID on your default org:

```

```

Similar to previous example, except use the org with username me@example.com:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--request-id REQUEST-ID

Required

ID of the package install request you want to check; starts with 0Hf.

Type: option

### Aliases for package install report

```

```

## package installed list

List the org’s installed packages.

### Examples for package installed list

List the installed packages in your default org:

```

```

List the installed packages in the org with username me@example.com:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for package installed list

```

```

## package list

List all packages in the Dev Hub org.

### Description for package list

Description

### Examples for package list

List all packages in the specified Dev Hub org:

```

```

List all packages details in the specified Dev Hub org, and show extended details about each package:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\--verbose

Optional

Display extended package detail.

Type: boolean

### Aliases for package list

```

```

## package push-upgrade abort

Abort a package push upgrade that has been scheduled. Only push upgrade requests with a status of Created or Pending can be aborted.

### Description for package push-upgrade abort

Specify the request ID that you want to abort. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package pushupgrade list --package 033...".

### Examples for package push-upgrade abort

Cancel the specified package push upgrade request with the specified ID; uses your default Dev Hub org:

```

```

Cancel the specified package push upgrade request in the Dev Hub org with username devhub@example.com:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--push-request-id PUSH-REQUEST-ID

Required

ID of the package push request (starts with 0DV). This ID is returned after the package push-upgrade schedule command completes successfully.

Type: option

## package push-upgrade list

Lists the status of push upgrade requests for a given package.

### Description for package push-upgrade list

Shows the details of each request to create a push upgrade in the Dev Hub org.

All filter parameters are applied using the AND logical operator (not OR).

To get information about a specific request, run "sf package pushupgrade report" and supply the request ID.

### Examples for package push-upgrade list

List all package push upgrade requests in the specified Dev Hub org:

```

```

List all package push upgrade requests in the specified Dev Hub org scheduled in the last 30 days:

```

```

List all package push upgrade with a status Succeeded:

```

```

List all package push upgrade with a status Failed:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

Package ID (starts with 033) of the package that you want push upgrade information for.

Type: option

\-l | \--scheduled-last-days SCHEDULED-LAST-DAYS

Optional

Number of days in the past for which to display the list of push upgrade requests that were scheduled. Used to filter the list output to only recently scheduled push upgrades.

Type: option

\-s | \--status STATUS

Optional

Status used to filter the list output Valid values are: Created, Canceled, Pending, In Progress, Failed, or Succeeded

Type: option

Permissible values are: Created, Cancelled, Pending, In Progress, Failed, Succeeded

\--show-push-migrations-only

Optional

Display only push upgrade requests for package migrations.

Type: boolean

### Aliases for package push-upgrade list

```

```

## package push-upgrade report

Retrieve the status of a package push upgrade.

### Description for package push-upgrade report

Specify the request ID for which you want to view details. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package pushupgrade list".

### Examples for package push-upgrade report

Retrieve details about the package push upgrade with the specified ID; uses your default Dev Hub org:

```

```

Retrieve details about the specified package push request in the Dev Hub org with username devhub@example.com:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--push-request-id PUSH-REQUEST-ID

Required

ID of the package push request (starts with 0DV). This ID is returned after the package push-upgrade schedule command completes successfully.

Type: option

### Aliases for package push-upgrade report

```

```

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

## package uninstall

Uninstall a second-generation package from the target org.

### Description for package uninstall

Specify the package ID for a second-generation package.

To list the org’s installed packages, run "sf package installed list".

To uninstall a first-generation package, from Setup, enter Installed Packages in the Quick Find box, then select Installed Packages.

### Examples for package uninstall

Uninstall a package with specified ID from an org with username me@example.com:

```

```

Uninstall a package with the specified alias from your default org:

```

```

Uninstall a package with an alias that contains spaces from your default org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for uninstall status.

Type: option

Default value: 0 minutes

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to uninstall.

Type: option

### Aliases for package uninstall

```

```

## package uninstall report

Retrieve the status of a package uninstall request.

### Examples for package uninstall report

Retrieve the status of a package uninstall in your default org using the specified request ID:

```

```

Similar to previous example, but use the org with username me@example.com:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--request-id REQUEST-ID

Required

ID of the package uninstall request you want to check; starts with 06y.

Type: option

### Aliases for package uninstall report

```

```

## package update

Update package details.

### Description for package update

Specify a new value for each option you want to update.

Run "sf package list" to list all packages in the Dev Hub org.

### Examples for package update

Update the name of the package with the specified alias; uses your default Dev Hub org:

```

```

Update the description of the package with the specified ID; uses the specified Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 0Ho) or alias of the package to update.

Type: option

\-n | \--name NAME

Optional

New name of the package.

Type: option

\-d | \--description DESCRIPTION

Optional

New description of the package.

Type: option

\-o | \--error-notification-username ERROR-NOTIFICATION-USERNAME

Optional

Active Dev Hub user designated to receive email notifications for package errors.

Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.

Type: option

\--enable-app-analytics

Optional

Enable AppExchange App Analytics usage data collection on this managed package and its components.

Type: boolean

\-r | \--recommended-version-id RECOMMENDED-VERSION-ID

Optional

ID of the package version that's installed when subscribers click the Upgrade to Recommended Version option on the Installed Packages page of their org.

Specify the recommended package version for subscribers to install. If a subscriber has a package version installed in their org that's lower than the version you set, the subscriber sees the Upgrade to Recommended Version option on the Installed Packages page. Only released package versions can be set as the recommended version.

Type: option

\--skip-ancestor-check

Optional

Bypass the ancestry check for setting a recommended version.

Type: boolean

### Aliases for package update

```

```

## package version create

Create a package version in the Dev Hub org.

### Description for package version create

The package version is based on the package contents in the specified directory.

To retrieve details about a package version create request, including status and package version ID (04t), run "sf package version create report -i 08c...".

We recommend that you specify the --installation-key parameter to protect the contents of your package and to prevent unauthorized installation of your package.

To list package version creation requests in the org, run "sf package version create list".

To promote a package version to released, you must use the --code-coverage parameter. The package must also meet the code coverage requirements. This requirement applies to both managed and unlocked packages.

We don’t calculate code coverage for org-dependent unlocked packages, or for package versions that specify --skip-validation.

### Examples for package version create

Create a package version from the contents of the "common" directory and give it an installation key of "password123"; uses your default Dev Hub org:

```

```

Create a package version from a package with the specified alias; uses the Dev Hub org with username devhub@example.com:

```

```

Create a package version from a package with the specified ID:

```

```

Create a package version and skip the validation step:

```

```

Create a package version and perform package validations asynchronously:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-b | \--branch BRANCH

Optional

Name of the branch in your source control system that the package version is based on.

Type: option

\-c | \--code-coverage

Optional

Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version.

Before you can promote and release a managed or unlocked package version, the Apex code must meet a minimum 75% code coverage requirement. We don’t calculate code coverage for org-dependent unlocked packages or for package versions that specify --skip-validation.

Type: boolean

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on.

For a patch version, the features specified in this file are ignored, and instead the features specified for the ancestor version are used.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package. (either --installation-key or --installation-key-bypass is required)

Type: option

\-x | \--installation-key-bypass

Optional

Bypass the installation key requirement. (either --installation-key or --installation-key-bypass is required)

If you bypass this requirement, anyone can install your package.

Type: boolean

\-p | \--package PACKAGE

Optional

ID (starts with 0Ho) or alias of the package to create a version of.

Type: option

\-d | \--path PATH

Optional

Path to the directory that contains the contents of the package.

Type: option

\--post-install-script POST-INSTALL-SCRIPT

Optional

Name of the post-install script; applies to managed packages only.

The post-install script is an Apex class within this package that is run in the installing org after installations or upgrades of this package version.

Type: option

\--post-install-url POST-INSTALL-URL

Optional

Post-install instructions URL.

The contents of the post-installation instructions URL are displayed in the UI after installation of the package version.

Type: option

\--releasenotes-url RELEASENOTES-URL

Optional

Release notes URL.

This link is displayed in the package installation UI to provide release notes for this package version to subscribers.

Type: option

\--skip-ancestor-check

Optional

Override ancestry requirements, which allows you to specify a package ancestor that isn’t the highest released package version.

Type: boolean

\--skip-validation

Optional

Skip validation during package version creation; you can’t promote unvalidated package versions.

Skips validation of dependencies, package ancestors, and metadata during package version creation. Skipping validation reduces the time it takes to create a new package version, but you can promote only validated package versions. Skipping validation can suppress important errors that can surface at a later stage. You can specify skip validation or code coverage, but not both. Code coverage is calculated during validation.

Type: boolean

\--async-validation

Optional

Return a new package version before completing package validations.

Specifying async validation returns the package version earlier in the process, allowing you to install and test the new version right away. If your development team is using continuous integration (CI) scripts, async validation can reduce your overall CI run time.

Type: boolean

\--generate-pkg-zip

Optional

Generate a package ZIP file that you can use for debugging or to examine the package contents.

Type: boolean

\-t | \--tag TAG

Optional

Package version’s tag.

Type: option

\--uninstall-script UNINSTALL-SCRIPT

Optional

Uninstall script name; applies to managed packages only.

The uninstall script is an Apex class within this package that is run in the installing org after uninstallations of this package.

Type: option

\-e | \--version-description VERSION-DESCRIPTION

Optional

Description of the package version to be created; overrides the sfdx-project.json value.

Type: option

\-a | \--version-name VERSION-NAME

Optional

Name of the package version to be created; overrides the sfdx-project.json value.

Type: option

\-n | \--version-number VERSION-NUMBER

Optional

Version number of the package version to be created; overrides the sfdx-project.json value.

For information about the format of the version number, see https://developer.salesforce.com/docs/atlas.en-us.pkg2\_dev.meta/pkg2\_dev/sfdx\_dev2gp\_config\_file.htm.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the package version to be created.

Type: option

Default value: 0 minutes

\--language LANGUAGE

Optional

Language for the package.

Specify the language using a language code listed under "Supported Languages" in Salesforce Help. If no language is specified, the language defaults to the language of the Dev Hub user who created the package.

Type: option

\--verbose

Optional

Display verbose command output.

Display verbose command output. When polling for the status of the creation, this will output status and timeout data on a separate line for each poll request, which is useful in CI systems where timeouts can occur with long periods of no output from commands.

Type: boolean

### Aliases for package version create

```

```

## package version create list

List package version creation requests.

### Description for package version create list

Shows the details of each request to create a package version in the Dev Hub org.

All filter parameters are applied using the AND logical operator (not OR).

To get information about a specific request, run "sf package version create report" and supply the request ID.

### Examples for package version create list

List all package version creation requests in your default Dev Hub org:

```

```

List package version creation requests from the last 3 days in the Dev Hub org with username devhub@example.com:

```

```

List package version creation requests with status Error:

```

```

List package version creation requests with status InProgress:

```

```

List package version creation requests with status Success that were created today:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-c | \--created-last-days CREATED-LAST-DAYS

Optional

Number of days since the request was created, starting at 00:00:00 of first day to now. Use 0 for today.

Type: option

\-s | \--status STATUS

Optional

Status of the version creation request, used to filter the list.

Type: option

Permissible values are: Queued, InProgress, Success, Error

\--show-conversions-only

Optional

Filter the list output to display only converted package version.

Type: boolean

\--verbose

Optional

Displays additional information at a slight performance cost, such as the version name and number for each package version create request.

Type: boolean

### Aliases for package version create list

```

```

## package version create report

Retrieve details about a package version creation request.

### Description for package version create report

Specify the request ID for which you want to view details. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package version create list".

### Examples for package version create report

Retrieve details about the package version creation request with the specified ID; uses your default Dev Hub org:

```

```

Retrieve details about the specified package version creation request in the Dev Hub org with username devhub@example.com:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--package-create-request-id PACKAGE-CREATE-REQUEST-ID

Required

ID (starts with 08c) of the package version creation request you want to display.

Type: option

### Aliases for package version create report

```

```

## package version delete

Delete a package version.

### Description for package version delete

Specify the ID or alias of the package version you want to delete. In second-generation managed packaging, only beta package versions can be deleted. Before deleting a package version, review the considerations outlined in https://developer.salesforce.com/docs/atlas.en-us.pkg2\_dev.meta/pkg2\_dev/sfdx\_dev\_dev2gp\_package\_deletion.htm.

### Examples for package version delete

Delete a package version with the specified alias using your default Dev Hub org:

```

```

Delete a package version with the specified ID using the Dev Hub org with username "devhub@example.com":

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-n | \--no-prompt

Optional

Don’t prompt before deleting the package version.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to delete.

Type: option

### Aliases for package version delete

```

```

## package version displayancestry

Display the ancestry tree for a 2GP managed package version.

### Examples for package version displayancestry

Display the ancestry tree for a package version with the specified alias, using your default Dev Hub org:

```

```

Similar to previous example, but display the output in DOT code:

```

```

Display the ancestry tree for a package with the specified ID, using the Dev Hub org with username devhub@example.com:

```

```

Display the ancestry tree of a package version with the specified ID, using your default Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID or alias of the package (starts with 0Ho) or package version (starts with 04t) to display ancestry for.

If you specify a package ID (starts with 0Ho) or alias, the ancestor tree for every package version associated with the package ID is displayed. If you specify a package version (starts with 04t) or alias, the ancestry tree of the specified package version is displayed.

Type: option

\--dot-code

Optional

Display the ancestry tree in DOT code.

You can use the DOT code output in graph visualization software to create tree visualizations.

Type: boolean

\--verbose

Optional

Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree.

Type: boolean

### Aliases for package version displayancestry

```

```

## package version displaydependencies

Display the dependency graph for an unlocked or 2GP managed package version.

### Examples for package version displaydependencies

Display the dependency graph for a package version with the specified alias, using your default Dev Hub org and the default edge-direction:

```

```

Display the dependency graph for a package version with the specified ID and display the graph using a root-last edge direction. Use the Dev Hub org with username devhub@example.com:

```

```

Display the dependency graph of a version create request with the specified ID, using your default Dev Hub org and the default edge-direction:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID or alias of the package version (starts with 04t) or the package version create request (starts with 08c) to display the dependency graph for.

Before running this command, update your sfdx-project.json file to specify the calculateTransitiveDependencies attribute, and set the value to true. This command returns GraphViz code, which can be compiled to a graph using DOT code or another graph visualization software.

Type: option

\--edge-direction EDGE-DIRECTION

Optional

Order (root-first or root-last) in which the dependencies are displayed.

A root-first graph declares the root as the package that must be installed last. A root-last graph is the reverse order of root-first. If you specify "--edge-direction root-last", the graph displays the packages in the order they must be installed. The root starts with the farthest leaf of the package dependencies and ends with the base package, which must be installed last.

Type: option

Permissible values are: root-first, root-last

Default value: root-first

\--verbose

Optional

Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in each node.

Type: boolean

## package version list

List all package versions in the Dev Hub org.

### Description for package version list

Description

### Examples for package version list

List package versions in your default Dev Hub org that were created in the last 3 days; show only the released versions and order the list using the PatchVersion field. Display extended details about each package version:

```

```

List the released package versions for the two specified packages that were modified today; use the Dev Hub org with username devhub@example.com:

```

```

List all released package versions in your default Dev Hub org:

```

```

List package versions that were modified today in your default Dev Hub org; show limited details about each one:

```

```

List package versions that are based on the "featureA" branch in your source control system that were modified today in your default Dev Hub org; show limited details about each one:

```

```

List released package versions that were created in the last 3 days in your default Dev Hub org; show limited details:

```

```

List released package versions that were modified today for the two packages with specified aliases in your default Dev Hub org:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-c | \--created-last-days CREATED-LAST-DAYS

Optional

Number of days since the request was created, starting at 00:00:00 of first day to now. Use 0 for today.

Type: option

\--concise

Optional

Display limited package version details.

Type: boolean

\--show-conversions-only

Optional

Filter the list output to display only converted package version.

Type: boolean

\-m | \--modified-last-days MODIFIED-LAST-DAYS

Optional

Number of days since the items were modified, starting at 00:00:00 of first day to now. Use 0 for today.

Type: option

\-p | \--packages PACKAGES

Optional

Comma-delimited list of packages (aliases or 0Ho IDs) to list.

Type: option

\-r | \--released

Optional

Display released versions only (IsReleased=true).

Type: boolean

\-b | \--branch BRANCH

Optional

Branch in your source control system used to filter the results; only package versions based on the specified branch are listed.

Type: option

\-o | \--order-by ORDER-BY

Optional

Package version fields used to order the list.

Type: option

\--verbose

Optional

Display extended package version details.

Type: boolean

### Aliases for package version list

```

```

## package version promote

Promote a package version to released.

### Description for package version promote

Supply the ID or alias of the package version you want to promote. Promotes the package version to released status.

### Examples for package version promote

Promote the package version with the specified ID to released; uses your default Dev Hub org:

```

```

Promote the package version with the specified alias to released; uses the Dev Hub org with username devhub@example.com:

```

```

Promote the package version with an alias that has spaces to released:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to promote.

Type: option

\-n | \--no-prompt

Optional

Don't prompt to confirm setting the package version as released.

Type: boolean

### Aliases for package version promote

```

```

## package version report

Retrieve details about a package version in the Dev Hub org.

### Description for package version report

To update package version values, run "sf package version update".

### Examples for package version report

Retrieve details about the package version with the specified ID from your default Dev Hub org:

```

```

Retrieve details about the package version with the specified alias (that contains spaces) from the Dev Hub org with username devhub@example.com:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package to retrieve details for.

Type: option

\--verbose

Optional

Display extended package version details.

Type: boolean

### Aliases for package version report

```

```

## package version retrieve

Retrieve package metadata for a specified package version. Package metadata can be retrieved for only second-generation managed package versions or unlocked packages.

### Description for package version retrieve

Retrieving a package version downloads the metadata into the directory you specify.

When you run this command, specify the subscriber package version ID (starts with 04t) and the path to an empty directory.

By default, the package version retrieve command is available to 2GP managed packages that were converted from 1GP. To use this command with a managed package created using 2GP (not converted from 1GP) or with an unlocked package, specify IsDevUsePkgZipRequested = true in the Package2VersionCreateRequest Tooling API object. If you run this command and the zip folder with the package version’s source files is missing, confirm that IsDevUsePkgZipRequested is set to true.

### Examples for package version retrieve

Retrieve package metadata for a converted subscriber package version ID (starts with 04t) into my-directory/ within your Salesforce DX project directory:

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

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\-p | \--package PACKAGE

Required

Subscriber package version ID (starts with 04t).

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Path within your Salesforce DX project directory in which to download the metadata. This directory must be empty.

Type: option

Default value: force-app

## package version update

Update a package version.

### Description for package version update

Specify a new value for each option you want to update.

To display details about a package version, run "sf package version display".

### Examples for package version update

Update the package version that has the specified alias (that contains spaces) with a new installation key "password123"; uses your default Dev Hub org:

```

```

Update the package version that has the specified ID with a new branch and tag; use the Dev Hub org with username devhub@example.com:

```

```

Update the package version that has the specified ID with a new description:

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

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package to update a version of.

Type: option

\-a | \--version-name VERSION-NAME

Optional

New package version name.

Type: option

\-e | \--version-description VERSION-DESCRIPTION

Optional

New package version description.

Type: option

\-b | \--branch BRANCH

Optional

New package version branch.

Type: option

\-t | \--tag TAG

Optional

New package version tag.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

New installation key for key-protected package (default: null)

Type: option

### Aliases for package version update

```

```

## Code Examples

```
sf package convert --package 033... --installation-key password123
```

```
sf package convert --package 033... --installation-key password123 --target-dev-hub devhuborg@example.com
```

```
force:package:convert
```

```
sf package create --name MyUnlockedPackage --package-type Unlocked --path force-app
```

```
sf package create --name MyManagedPackage --description "Your Package Descripton" --package-type Managed --path force-app --target-dev-hub devhub@example.com
```

## Related Topics

- package convert (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package create (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package delete (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package install (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package install report (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package installed list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package push-upgrade abort (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package push-upgrade list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
- package push-upgrade report (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm)
