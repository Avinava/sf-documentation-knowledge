---
title: "org Commands"
domain: cli-commands
topic: org-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.544Z
estimatedTokens: 21610
keywords: [org, Commands, Assign, permission, users, permset, Examples, Flags, permsetlicense, sandbox, Aliases, scratch, shape, snapshot, user]
---

# org Commands

> Assign a permission set to one or more org users.

# org Commands

Commands to create and manage orgs and scratch org users.

-   **[org assign permset](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_assign_permset_unified)**
    Assign a permission set to one or more org users.
-   **[org assign permsetlicense](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_assign_permsetlicense_unified)**
    Assign a permission set license to one or more org users.
-   **[org create sandbox](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_sandbox_unified)**
    Create a sandbox org.
-   **[org create scratch](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_scratch_unified)**
    Create a scratch org.
-   **[org create shape](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_shape_unified)**
    Create a scratch org configuration (shape) based on the specified source org.
-   **[org create snapshot](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_snapshot_unified)**
    Create a snapshot of a scratch org.
-   **[org create user](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_user_unified)**
    Create a user for a scratch org.
-   **[org delete sandbox](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_delete_sandbox_unified)**
    Delete a sandbox.
-   **[org delete scratch](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_delete_scratch_unified)**
    Delete a scratch org.
-   **[org delete shape](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_delete_shape_unified)**
    Delete all org shapes for a target org.
-   **[org delete snapshot](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_delete_snapshot_unified)**
    Delete a scratch org snapshot.
-   **[org disable tracking](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_disable_tracking_unified)**
    Prevent Salesforce CLI from tracking changes in your source files between your project and an org.
-   **[org display](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_display_unified)**
    Display information about an org.
-   **[org display user](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_display_user_unified)**
    Display information about a Salesforce user.
-   **[org enable tracking](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_enable_tracking_unified)**
    Allow Salesforce CLI to track changes in your source files between your project and an org.
-   **[org generate password](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_generate_password_unified)**
    Generate a random password for scratch org users.
-   **[org get snapshot](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_get_snapshot_unified)**
    Get details about a scratch org snapshot.
-   **[org list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_unified)**
    List all orgs you’ve created or authenticated to.
-   **[org list auth](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_auth_unified)**
    List authorization information about the orgs you created or logged into.
-   **[org list limits](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_limits_unified)**
    Display information about limits in your org.
-   **[org list metadata](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_metadata_unified)**
    List the metadata components and properties of a specified type.
-   **[org list metadata-types](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_metadata-types_unified)**
    Display details about the metadata types that are enabled for your org.
-   **[org list shape](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_shape_unified)**
    List all org shapes you’ve created.
-   **[org list snapshot](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_snapshot_unified)**
    List scratch org snapshots.
-   **[org list sobject record-counts](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_sobject_record-counts_unified)**
    Display record counts for the specified standard or custom objects.
-   **[org list users](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_list_users_unified)**
    List all locally-authenticated users of an org.
-   **[org login access-token](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_access-token_unified)**
    Authorize an org using an existing Salesforce access token.
-   **[org login jwt](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_jwt_unified)**
    Log in to a Salesforce org using a JSON web token (JWT).
-   **[org login sfdx-url](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_sfdx-url_unified)**
    Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).
-   **[org login web](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified)**
    Log in to a Salesforce org using the web server flow.
-   **[org logout](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_logout_unified)**
    Log out of a Salesforce org.
-   **[org open](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_open_unified)**
    Open your default scratch org, or another specified org, in a browser.
-   **[org open agent](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_open_agent_unified)**
    Open an agent in your org's Agent Builder UI in a browser.
-   **[org open authoring-bundle](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_open_authoring-bundle_unified)**
    Open your org in Agentforce Studio, specifically in the list view showing the list of agents.
-   **[org refresh sandbox](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_refresh_sandbox_unified)**
    Refresh a sandbox org using the sandbox name.
-   **[org resume sandbox](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_resume_sandbox_unified)**
    Check the status of a sandbox creation, and log in to it if it's ready.
-   **[org resume scratch](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_resume_scratch_unified)**
    Resume the creation of an incomplete scratch org.

## org assign permset

Assign a permission set to one or more org users.

### Description for org assign permset

To specify an alias for the --target-org or --on-behalf-of flags, use the CLI username alias, such as the one you set with the "alias set" command. Don't use the value of the Alias field of the User Salesforce object for the org user.

To assign multiple permission sets, either set multiple --name flags or a single --name flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --on-behalf-of.

### Examples for org assign permset

Assign two permission sets called DreamHouse and CloudHouse to original admin user of your default org:

```

```

Assign the Dreamhouse permission set to the original admin user of the org with alias "my-scratch":

```

```

Assign the Dreamhouse permission set to the specified list of users of your default org:

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

\-n | \--name NAME

Required

Permission set to assign.

Type: option

\-b | \--on-behalf-of ON-BEHALF-OF

Optional

Username or alias to assign the permission set to.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## org assign permsetlicense

Assign a permission set license to one or more org users.

### Description for org assign permsetlicense

To specify an alias for the --target-org or --on-behalf-of flags, use the CLI username alias, such as the one you set with the "alias set" command. Don't use the value of the Alias field of the User Salesforce object for the org user.

To assign multiple permission sets, either set multiple --name flags or a single --name flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --on-behalf-of.

### Examples for org assign permsetlicense

Assign the DreamHouse permission set license to original admin user of your default org:

```

```

Assign two permission set licenses to the original admin user of the org with alias "my-scratch":

```

```

Assign the Dreamhouse permission set license to the specified list of users of your default org:

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

\-n | \--name NAME

Required

Name of the permission set license to assign.

Type: option

\-b | \--on-behalf-of ON-BEHALF-OF

Optional

Usernames or alias to assign the permission set license to.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## org create sandbox

Create a sandbox org.

### Description for org create sandbox

There are two ways to create a sandbox org: specify a definition file that contains the sandbox options or use the --name and --license-type flags to specify the two required options. If you want to set an option other than name or license type, such as apexClassId, you must use a definition file.

You can also use this command to clone an existing sandbox. Use the --source-sandbox-name flag to specify the existing sandbox name and the --name flag to the name of the new sandbox.

### Examples for org create sandbox

Create a sandbox org using a definition file and give it the alias "MyDevSandbox". The production org that contains the sandbox license has the alias "prodOrg".

```

```

Create a sandbox org by directly specifying its name and type of license (Developer) instead of using a definition file. Set the sandbox org as your default.

```

```

Clone the existing sandbox with name "ExistingSandbox" and name the new sandbox "NewClonedSandbox". Set the new sandbox as your default org. Wait for 30 minutes for the sandbox creation to complete.

```

```

Clone the existing sandbox with ID "0GQB0000000TVobOAG" and do not wait.

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

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a sandbox definition file.

The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each sandbox type that you use in the development process. See <https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_sandbox\_definition.htm> for all the options you can specify in the definition file.

Type: option

\-s | \--set-default

Optional

Set the sandbox org as your default org.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the sandbox org.

When you create a sandbox, the generated usernames are based on the usernames present in the production org. To ensure uniqueness, the new usernames are appended with the name of the sandbox. For example, the username "user@example.com" in the production org results in the username "user@example.com.mysandbox" in a sandbox named "mysandbox". When you set an alias for a sandbox org, it's assigned to the resulting username of the user running this command.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the sandbox org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays the "sf org resume sandbox" command you run to check the status of the create. The displayed command includes the job ID for the running sandbox creation.

Type: option

Default value: 30 minutes

\-i | \--poll-interval POLL-INTERVAL

Optional

Number of seconds to wait between retries.

Type: option

Default value: 30 seconds

\--async

Optional

Request the sandbox creation, but don't wait for it to complete.

The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue to use the CLI. To check the status of the sandbox creation, run "sf org resume sandbox".

Type: boolean

\-n | \--name NAME

Optional

Name of the sandbox org.

The name must be a unique alphanumeric string (10 or fewer characters) to identify the sandbox. You can’t reuse a name while a sandbox is in the process of being deleted.

Type: option

\--source-sandbox-name SOURCE-SANDBOX-NAME

Optional

Name of the sandbox org to clone.

The value of --source-sandbox-name must be an existing sandbox. The existing sandbox, and the new sandbox specified with the --name flag, must both be associated with the production org (--target-org) that contains the sandbox licenses.

You can specify either --source-sandbox-name or --source-id when cloning an existing sandbox, but not both.

Type: option

\--source-id SOURCE-ID

Optional

ID of the sandbox org to clone.

The value of --source-id must be an existing sandbox (SandboxInfo.Id). The existing sandbox, and the new sandbox specified with the --name flag, must both be associated with the production org (--target-org) that contains the sandbox licenses.

You can specify either --source-sandbox-name or --source-id when cloning an existing sandbox, but not both.

Type: option

\-l | \--license-type LICENSE-TYPE

Optional

Type of sandbox license.

Type: option

Permissible values are: Developer, Developer\_Pro, Partial, Full

\-o | \--target-org TARGET-ORG

Required

Username or alias of the production org that contains the sandbox license.

When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to the new sandbox org.

Type: option

\--no-prompt

Optional

Don't prompt for confirmation about the sandbox configuration.

Type: boolean

\--no-track-source

Optional

Do not use source tracking for this sandbox.

We recommend you enable source tracking in Developer and Developer Pro sandbox, which is why it's the default behavior. Source tracking allows you to track the changes you make to your metadata, both in your local project and in the sandbox, and to detect any conflicts between the two.

To disable source tracking in the new sandbox, specify the --no-track-source flag. The main reason to disable source tracking is for performance. For example, while you probably want to deploy metadata and run Apex tests in your CI/CD jobs, you probably don't want to incur the costs of source tracking (checking for conflicts, polling the SourceMember object, various file system operations.) This is a good use case for disabling source tracking in the sandbox.

Type: boolean

### Aliases for org create sandbox

```

```

## org create scratch

Create a scratch org.

### Description for org create scratch

There are four ways to create a scratch org:

\* Specify a definition file that contains the scratch org options.

\* Use the --edition flag to specify the one required option; this method doesn't require a defintion file.

\* Use the --snapshot flag to create a scratch org from a snapshot. Snapshots are a point-in-time copy of a scratch org; you create a snapshot with the "sf org create snapshot" command.

\* Use the --source-org flag to create a scratch org from an org shape. Org shapes mimic the baseline setup of a source org without the extraneous data and metadata; you create an org shape with the "sf org create shape" command.

The --edition, --snapshot, and --source-org flags are mutually exclusive, which means if you specify one, you can't also specify the others.

For any of the methods, you can also use these flags; if you use them with --definition-file, they override their equivalent option in the scratch org definition file:

\* --description

\* --name (equivalent to the "orgName" option)

\* --username

\* --release

\* --admin-email (equivalent to the "adminEmail" option)

If you want to set options such as org features or settings, you must use a definition file.

You must specify a Dev Hub to create a scratch org, either with the --target-dev-hub flag or by setting your default Dev Hub with the target-dev-hub configuration variable.

### Examples for org create scratch

Create a Developer edition scratch org using your default Dev Hub and give the scratch org an alias:

```

```

Create a scratch org with a definition file. Specify the Dev Hub using its alias, set the scratch org as your default, and specify that it expires in 3 days:

```

```

Create a preview Enterprise edition scratch org; for use only during Salesforce release transition periods:

```

```

Create a scratch org from a snapshot called "NightlyBranch"; be sure you specify the same Dev Hub org associated with the snapshot. We recommend you increase the --wait time because creating a scratch org from a snapshot can take a while:

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

\-a | \--alias ALIAS

Optional

Alias for the scratch org.

New scratch orgs include one administrator by default. The admin user's username is auto-generated and looks something like test-wvkpnfm5z113@example.com. When you set an alias for a new scratch org, it's assigned this username.

Type: option

\--async

Optional

Request the org, but don't wait for it to complete.

The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue to use the CLI. To resume the scratch org creation, run "sf org resume scratch".

Type: boolean

\-d | \--set-default

Optional

Set the scratch org as your default org

Type: boolean

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a scratch org definition file.

The scratch org definition file is a blueprint for the scratch org. It mimics the shape of an org that you use in the development life cycle, such as acceptance testing, packaging, or production. See <https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_scratch\_orgs\_def\_file.htm> for all the option you can specify in the definition file.

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org.

Overrides the value of the target-dev-hub configuration variable, if set.

Type: option

\-c | \--no-ancestors

Optional

Don't include second-generation managed package (2GP) ancestors in the scratch org.

Type: boolean

\-e | \--edition EDITION

Optional

Salesforce edition of the scratch org. Overrides the value of the "edition" option in the definition file, if set.

The editions that begin with "partner-" are available only if the Dev Hub org is a Partner Business Org.

Type: option

Permissible values are: developer, enterprise, group, professional, partner-developer, partner-enterprise, partner-group, partner-professional

\-s | \--snapshot SNAPSHOT

Optional

Name of the snapshot to use when creating this scratch org. Overrides the value of the "snapshot" option in the defintion file, if set.

To view the names of the available snapshots for a given Dev Hub org, run the "sf org list snapshot" command.

Type: option

\-m | \--no-namespace

Optional

Create the scratch org with no namespace, even if the Dev Hub has a namespace.

Type: boolean

\-y | \--duration-days DURATION-DAYS

Optional

Number of days before the org expires.

Type: option

Default value: 7 days

\-w | \--wait WAIT

Optional

Number of minutes to wait for the scratch org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays the job ID. To resume the scratch org creation, run the org resume scratch command and pass it the job ID.

Type: option

Default value: 5 minutes

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--client-id CLIENT-ID

Optional

Consumer key of the Dev Hub connected app.

Type: option

\-t | \--track-source

Optional

Use source tracking for this scratch org. Set --no-track-source to disable source tracking.

We recommend you enable source tracking in scratch orgs, which is why it's the default behavior. Source tracking allows you to track the changes you make to your metadata, both in your local project and in the scratch org, and to detect any conflicts between the two.

To disable source tracking in the new scratch org, specify the --no-track-source flag. The main reason to disable source tracking is for performance. For example, while you probably want to deploy metadata and run Apex tests in your CI/CD jobs, you probably don't want to incur the costs of source tracking (checking for conflicts, polling the SourceMember object, various file system operations.) This is a good use case for disabling source tracking in the scratch org.

Type: boolean

Default value: true

\--username USERNAME

Optional

Username of the scratch org admin user. Overrides the value of the "username" option in the definition file, if set.

The username must be unique within the entire scratch org and sandbox universe. You must add your own logic to ensure uniqueness.

Omit this flag to have Salesforce generate a unique username for your org.

Type: option

\--description DESCRIPTION

Optional

Description of the scratch org in the Dev Hub. Overrides the value of the "description" option in the definition file, if set.

Type: option

\--name NAME

Optional

Name of the org, such as "Acme Company". Overrides the value of the "orgName" option in the definition file, if set.

Type: option

\--release RELEASE

Optional

Release of the scratch org as compared to the Dev Hub release.

By default, scratch orgs are on the same release as the Dev Hub. During Salesforce release transition periods, you can override this default behavior and opt in or out of the new release.

Type: option

Permissible values are: preview, previous

\--admin-email ADMIN-EMAIL

Optional

Email address that will be applied to the org's admin user. Overrides the value of the "adminEmail" option in the definition file, if set.

Type: option

\--source-org SOURCE-ORG

Optional

15-character ID of the org shape that the new scratch org is based on. Overrides the value of the "sourceOrg" option in the definition file, if set.

To view the names of the available org shapes for a given Dev Hub org, run the "sf org list shape" command.

Type: option

### Aliases for org create scratch

```

```

## org create shape

Create a scratch org configuration (shape) based on the specified source org.

### Description for org create shape

Scratch org shapes mimic the baseline setup (features, limits, edition, and Metadata API settings) of a source org without the extraneous data and metadata.

Run "sf org list shape" to view the available org shapes and their IDs.

To create a scratch org from an org shape, include the "sourceOrg" property in the scratch org definition file and set it to the org ID of the source org. Then create a scratch org with the "sf org create scratch" command.

### Examples for org create shape

Create an org shape for the source org with alias SourceOrg:

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

### Aliases for org create shape

```

```

## org create snapshot

Create a snapshot of a scratch org.

### Description for org create snapshot

A snapshot is a point-in-time copy of a scratch org. The copy is referenced by its unique name in a scratch org definition file.

Use "sf org get snapshot" to get details, including status, about a snapshot creation request.

To create a scratch org from a snapshot, include the "snapshot" option (instead of "edition") in the scratch org definition file and set it to the name of the snapshot. Then use "sf org create scratch" to create the scratch org.

### Examples for org create snapshot

Create a snapshot called "Dependencies" using the source scratch org ID and your default Dev Hub org:

```

```

Create a snapshot called "NightlyBranch" using the source scratch org username and a Dev Hub org with alias NightlyDevHub:

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

\-o | \--source-org SOURCE-ORG

Required

ID or locally authenticated username or alias of scratch org to snapshot.

Type: option

\-n | \--name NAME

Required

Unique name of snapshot.

Type: option

\-d | \--description DESCRIPTION

Optional

Description of snapshot.

Use this description to document the contents of the snapshot. We suggest that you include a reference point, such as a version control system tag or commit ID.

Type: option

### Aliases for org create snapshot

```

```

## org create user

Create a user for a scratch org.

### Description for org create user

A scratch org includes one administrator user by default. For testing purposes, however, you sometimes need to create additional users.

The easiest way to create a user is to let this command assign default or generated characteristics to the new user. If you want to customize your new user, create a definition file and specify it with the --definition-file flag. In the file, you can include all the User sObject (Salesforce object) fields and Salesforce DX-specific options, as described in "User Definition File for Customizing a Scratch Org User" (https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_scratch\_orgs\_users\_def\_file.htm). You can also specify these options on the command line.

If you don't customize your new user, this command creates a user with the following default characteristics:

\* The username is the existing administrator’s username prepended with a timestamp, such as 1505759162830\_test-wvkpnfm5z113@example.com.

\* The user’s profile is Standard User.

\* The values of the required fields of the User sObject are the corresponding values of the administrator user.

\* The user has no password.

Use the --set-alias flag to assign a simple name to the user that you can reference in later CLI commands. This alias is local and different from the Alias field of the User sObject record of the new user, which you set in the Setup UI.

When this command completes, it displays the new username and user ID. Run the "org display user" command to get more information about the new user.

After the new user has been created, Salesforce CLI automatically authenticates it to the scratch org so the new user can immediately start using the scratch org. The CLI uses the same authentication method that was used on the associated Dev Hub org. Due to Hyperforce limitations, the scratch org user creation fails if the Dev Hub authentication used the JWT flow and the scratch org is on Hyperforce. For this reason, if you plan to create scratch org users, authenticate to the Dev Hub org with either the "org login web" or "org login sfdx-url" command, and not "org login jwt".

For more information about user limits, defaults, and other considerations when creating a new scratch org user, see https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_scratch\_orgs\_users.htm.

### Examples for org create user

Create a user for your default scratch org and let this command generate a username, user ID, and other characteristics:

```

```

Create a user with alias "testuser1" using a user definition file. Set the "profileName" option to "Chatter Free User", which overrides the value in the defintion file if it also exists there. Create the user for the scratch org with alias "my-scratch":

```

```

Create a user by specifying the username, email, and perm set assignment at the command line; command fails if the username already exists in Salesforce:

```

```

Create a user with a definition file, set the email value as specified (overriding any value in the definition file), and generate a password for the user. If the username in the definition file isn't unique, the command appends the org ID to make it unique:

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

\-a | \--set-alias SET-ALIAS

Optional

Set an alias for the created username to reference in other CLI commands.

Type: option

\-f | \--definition-file DEFINITION-FILE

Optional

File path to a user definition file for customizing the new user.

The user definition file uses JSON format and can include any Salesforce User sObject field and Salesforce DX-specific options. See https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_scratch\_orgs\_users\_def\_file.htm for more information.

Type: option

\-s | \--set-unique-username

Optional

Force the username, if specified in the definition file or at the command line, to be unique by appending the org ID.

The new user’s username must be unique across all Salesforce orgs and in the form of an email address. If you let this command generate a username for you, it's guaranteed to be unique. If you specify an existing username in a definition file, the command fails. Set this flag to force the username to be unique; as a result, the username might be different than what you specify in the definition file.

Type: boolean

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for org create user

```

```

## org delete sandbox

Delete a sandbox.

### Description for org delete sandbox

Salesforce CLI marks the org for deletion in the production org that contains the sandbox licenses and then deletes all local references to the org from your computer.

Specify a sandbox with either the username you used when you logged into it, or the alias you gave the sandbox when you created it. Run "sf org list" to view all your orgs, including sandboxes, and their aliases.

Both the sandbox and the associated production org must already be authenticated with the CLI to successfully delete the sandbox.

### Examples for org delete sandbox

Delete a sandbox with alias my-sandbox:

```

```

Specify a username instead of an alias:

```

```

Delete the sandbox without prompting to confirm:

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

\-p | \--no-prompt

Optional

Don't prompt the user to confirm the deletion.

Type: boolean

### Aliases for org delete sandbox

```

```

## org delete scratch

Delete a scratch org.

### Description for org delete scratch

Salesforce CLI marks the org for deletion in the Dev Hub org and then deletes all local references to the org from your computer.

Specify a scratch org with either the username or the alias you gave the scratch org when you created it. Run "sf org list" to view all your orgs, including scratch orgs, and their aliases.

### Examples for org delete scratch

Delete a scratch org with alias my-scratch-org:

```

```

Specify a username instead of an alias:

```

```

Delete the scratch org without prompting to confirm :

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

\-p | \--no-prompt

Optional

Don't prompt the user to confirm the deletion.

Type: boolean

### Aliases for org delete scratch

```

```

## org delete shape

Delete all org shapes for a target org.

### Description for org delete shape

A source org can have only one active org shape. If you try to create an org shape for a source org that already has one, the previous shape is marked inactive and replaced by a new active shape. If you don’t want to create scratch orgs based on this shape, you can delete the org shape.

### Examples for org delete shape

Delete all org shapes for the source org with alias SourceOrg:

```

```

Delete all org shapes without prompting:

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

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org delete shape

```

```

## org delete snapshot

Delete a scratch org snapshot.

### Description for org delete snapshot

Dev Hub admins can delete any snapshot. Users can delete only their own snapshots, unless a Dev Hub admin gives the user Modify All permission, which works only with the Salesforce license.

### Examples for org delete snapshot

Delete a snapshot from the default Dev Hub using the snapshot ID:

```

```

Delete a snapshot from the specified Dev Hub using the snapshot name:

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

\-s | \--snapshot SNAPSHOT

Required

Name or ID of snapshot to delete.

The IDs of scratch org snapshots start with 0Oo.

Type: option

\-p | \--no-prompt

Optional

Don't prompt the user to confirm the deletion.

Type: boolean

### Aliases for org delete snapshot

```

```

## org disable tracking

Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

### Description for org disable tracking

Disabling source tracking has no direct effect on the org, it affects only your local environment. Specifically, Salesforce CLI stores the setting in the org's local configuration file so that no source tracking operations are executed when working with the org.

### Examples for org disable tracking

Disable source tracking for an org with alias "myscratch":

```

```

Disable source tracking for an org using a username:

```

```

Disable source tracking for your default org:

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

## org display

Display information about an org.

### Description for org display

Output includes your access token, client Id, connected status, org ID, instance URL, username, and alias, if applicable.

Use --verbose to include the SFDX auth URL. WARNING: The SFDX auth URL contains sensitive information, such as a refresh token that can be used to access an org. Don't share or distribute this URL or token.

Including --verbose displays the sfdxAuthUrl property only if you authenticated to the org using "org login web" (not "org login jwt").

### Examples for org display

Display information about your default org:

```

```

Display information, including the sfdxAuthUrl property, about the org with alias TestOrg1:

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

\--verbose

Optional

Display the sfdxAuthUrl property.

Type: boolean

### Aliases for org display

```

```

## org display user

Display information about a Salesforce user.

### Description for org display user

Output includes the profile name, org ID, access token, instance URL, login URL, and alias if applicable. The displayed alias is local and different from the Alias field of the User sObject record of the new user, which you set in the Setup UI.

### Examples for org display user

Display information about the admin user of your default scratch org:

```

```

Display information about the specified user and output in JSON format:

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

### Aliases for org display user

```

```

## org enable tracking

Allow Salesforce CLI to track changes in your source files between your project and an org.

### Description for org enable tracking

Enabling source tracking has no direct effect on the org, it affects only your local environment. Specifically, Salesforce CLI stores the setting in the org's local configuration file so that source tracking operations are executed when working with the org.

This command throws an error if the org doesn't support tracking. Examples of orgs that don't support source tracking include Developer Edition orgs, production orgs, Partial Copy sandboxes, and Full sandboxes.

### Examples for org enable tracking

Enable source tracking for an org with alias "myscratch":

```

```

Enable source tracking for an org using a username:

```

```

Enable source tracking for your default org:

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

## org generate password

Generate a random password for scratch org users.

### Description for org generate password

By default, new scratch orgs contain one admin user with no password. Use this command to generate or change a password for this admin user. After it's set, you can’t unset a password, you can only change it.

You can also use the --on-behalf-of flag to generate a password for a scratch org user that you've created locally with the "org create user" command. This command doesn't work for users you created in the scratch org using Setup.

To change the password strength, set the --complexity flag to a value between 0 and 5. Each value specifies the types of characters used in the generated password:

0 - lower case letters only

1 - lower case letters and numbers only

2 - lower case letters and symbols only

3 - lower and upper case letters and numbers only

4 - lower and upper case letters and symbols only

5 - lower and upper case letters and numbers and symbols only

To see a password that was previously generated, run "org display user".

### Examples for org generate password

Generate a password for the original admin user of your default scratch org:

```

```

Generate a password that contains 12 characters for the original admin user of the scratch org with alias "my-scratch":

```

```

Generate a password for your default scratch org admin user that uses lower and upper case letters and numbers only:

```

```

Generate a password for the specified users in the default scratch org; these users must have been created locally with the "org create user" command:

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

\-b | \--on-behalf-of ON-BEHALF-OF

Optional

Comma-separated list of usernames or aliases to assign the password to; must have been created locally with the "org create user" command.

Type: option

\-l | \--length LENGTH

Optional

Number of characters in the generated password; valid values are between 8 and 100.

Type: option

Default value: 13

\-c | \--complexity COMPLEXITY

Optional

Level of password complexity or strength; the higher the value, the stronger the password.

Type: option

Default value: 5

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## org get snapshot

Get details about a scratch org snapshot.

### Description for org get snapshot

Snapshot creation can take a while. Use this command with the snapshot name or ID to check its creation status. After the status changes to Active, you can use the snapshot to create scratch orgs.

To create a snapshot, use the "sf org create snapshot" command. To retrieve a list of all snapshots, use "sf org list snapshot".

### Examples for org get snapshot

Get snapshot details using its ID and the default Dev Hub org:

```

```

Get snapshot details using its name from a Dev Hub org with alias SnapshotDevHub:

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

\-s | \--snapshot SNAPSHOT

Required

Name or ID of snapshot to retrieve.

The IDs of scratch org snapshots start with 0Oo.

Type: option

### Aliases for org get snapshot

```

```

## org list

List all orgs you’ve created or authenticated to.

### Examples for org list

List all orgs you've created or authenticated to:

```

```

List all orgs, including expired, deleted, and unknown-status orgs; don't include the connection status:

```

```

List orgs and remove local org authorization info about non-active scratch orgs:

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

\--verbose

Optional

List more information about each org.

Type: boolean

\--all

Optional

Include expired, deleted, and unknown-status scratch orgs.

Type: boolean

\--clean

Optional

Remove all local org authorizations for non-active scratch orgs. Use "org logout" to remove non-scratch orgs.

Type: boolean

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

\--skip-connection-status

Optional

Skip retrieving the connection status of non-scratch orgs.

Type: boolean

### Aliases for org list

```

```

## org list auth

List authorization information about the orgs you created or logged into.

### Description for org list auth

This command uses local authorization information that Salesforce CLI caches when you create a scratch org or log into an org. The command doesn't actually connect to the orgs to verify that they're still active. As a result, this command executes very quickly. If you want to view live information about your authorized orgs, such as their connection status, use the "org list" command.

### Examples for org list auth

List local authorization information about your orgs:

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

### Aliases for org list auth

```

```

```

```

## org list limits

Display information about limits in your org.

### Description for org list limits

For each limit, this command returns the maximum allocation and the remaining allocation based on usage. See this topic for a description of each limit: https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/resources\_limits.htm.

### Examples for org list limits

Display limits in your default org:

```

```

Display limits in the org with alias "my-scratch-org":

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

### Aliases for org list limits

```

```

```

```

## org list metadata

List the metadata components and properties of a specified type.

### Description for org list metadata

Use this command to identify individual components in your manifest file or if you want a high-level view of particular metadata types in your org. For example, you can use this command to return a list of names of all the CustomObject or Layout components in your org, then use this information in a retrieve command that returns a subset of these components.

The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API Functions permission.

### Examples for org list metadata

List the CustomObject components, and their properties, in the org with alias "my-dev-org":

```

```

List the CustomObject components in your default org, write the output to the specified file, and use API version 57.0:

```

```

List the Dashboard components in your default org that are contained in the "folderSales" folder, write the output to the specified file, and use API version 57.0:

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

API version to use; default is the most recent API version.

Override the api version used for api requests made by this command

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-f | \--output-file OUTPUT-FILE

Optional

Pathname of the file in which to write the results.

Type: option

\-m | \--metadata-type METADATA-TYPE

Required

Metadata type to be retrieved, such as CustomObject; metadata type names are case-sensitive.

Type: option

\--folder FOLDER

Optional

Folder associated with the component; required for components that use folders; folder names are case-sensitive.

Examples of metadata types that use folders are Dashboard, Document, EmailTemplate, and Report.

Type: option

### Aliases for org list metadata

```

```

## org list metadata-types

Display details about the metadata types that are enabled for your org.

### Description for org list metadata-types

The information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types. Use this information to identify the syntax needed for a <name> element in a manifest file (package.xml).

The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API Functions permission.

### Examples for org list metadata-types

Display information about all known and enabled metadata types in the org with alias "my-dev-org" using API version 57.0:

```

```

Display only the metadata types that aren't yet supported by Salesforce CLI in your default org and write the results to the specified file:

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

API version to use; default is the most recent API version.

Override the api version used for api requests made by this command

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-f | \--output-file OUTPUT-FILE

Optional

Pathname of the file in which to write the results.

Directing the output to a file makes it easier to extract relevant information for your package.xml manifest file. The default output destination is the terminal or command window console.

Type: option

### Aliases for org list metadata-types

```

```

## org list shape

List all org shapes you’ve created.

### Description for org list shape

The output includes the alias, username, and ID of the source org, the status of the org shape creation, and more. Use the org ID to update your scratch org configuration file so you can create a scratch org based on this org shape.

### Examples for org list shape

List all org shapes you've created:

```

```

List all org shapes in JSON format and write the output to a file:

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

### Aliases for org list shape

```

```

## org list snapshot

List scratch org snapshots.

### Description for org list snapshot

You can view all the snapshots in a Dev Hub that you have access to. If you’re an admin, you can see all snapshots associated with the Dev Hub org. If you’re a user, you can see only your snapshots unless a Dev Hub admin gives you View All permissions.

To create a snapshot, use the "sf org create snapshot" command. To get details about a snapshot request, use "sf org get snapshot".

### Examples for org list snapshot

List snapshots in the default Dev Hub:

```

```

List snapshots in the Dev Hub with alias SnapshotDevHub:

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

### Aliases for org list snapshot

```

```

## org list sobject record-counts

Display record counts for the specified standard or custom objects.

### Description for org list sobject record-counts

Use this command to get an approximate count of the records in standard or custom objects in your org. These record counts are the same as the counts listed in the Storage Usage page in the Setup UI. The record counts are approximate because they're calculated asynchronously and your org's storage usage isn't updated immediately. To display all available record counts, run the command without the --sobject flag.

### Examples for org list sobject record-counts

Display all available record counts in your default org:

```

```

Display record counts for the Account, Contact, Lead, and Opportunity objects in your default org:

```

```

Display record counts for the Account and Lead objects for the org with alias "my-scratch-org":

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

\-s | \--sobject SOBJECT

Optional

API name of the standard or custom object for which to display record counts.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for org list sobject record-counts

```

```

```

```

## org list users

List all locally-authenticated users of an org.

### Description for org list users

For scratch orgs, the list includes any users you've created with the "org create user" command; the original scratch org admin user is marked with "(A)". For other orgs, the list includes the users you used to authenticate to the org.

### Examples for org list users

List the locally-authenticated users of your default org:

```

```

List the locally-authenticated users of the specified org:

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

### Aliases for org list users

```

```

## org login access-token

Authorize an org using an existing Salesforce access token.

### Description for org login access-token

By default, the command runs interactively and asks you for the access token. If you previously authorized the org, the command prompts whether you want to overwrite the local file. Specify --no-prompt to not be prompted.

To use the command in a CI/CD script, set the SF\_ACCESS\_TOKEN environment variable to the access token. Then run the command with the --no-prompt parameter.

### Examples for org login access-token

Authorize an org on https://mycompany.my.salesforce.com; the command prompts you for the access token:

```

```

Authorize the org without being prompted; you must have previously set the SF\_ACCESS\_TOKEN environment variable to the access token:

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

\-r | \--instance-url INSTANCE-URL

Required

URL of the instance that the org lives on.

If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".

Type: option

\-d | \--set-default-dev-hub

Optional

Set the authenticated org as the default Dev Hub.

Type: boolean

\-s | \--set-default

Optional

Set the authenticated org as the default that all org-related commands run against.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the org.

Type: option

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org login access-token

```

```

```

```

## org login jwt

Log in to a Salesforce org using a JSON web token (JWT).

### Description for org login jwt

Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD scripts.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

Complete these steps before you run this command:

1\. Create a digital certificate (also called digital signature) and the private key to sign the certificate. You can use your own key and certificate issued by a certification authority. Or use OpenSSL to create a key and a self-signed digital certificate.

2\. Store the private key in a file on your computer. When you run this command, you set the --jwt-key-file flag to this file.

3\. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called client id) that’s generated for you. Be sure the username of the user logging in is approved to use the connected app. When you run this command, you set the --client-id flag to the consumer key.

See https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_auth\_jwt\_flow.htm for more information.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don’t set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

### Examples for org login jwt

Log into an org with username jdoe@example.org and on the default instance URL (https://login.salesforce.com). The private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer key (client id) 04580y4051234051.

```

```

Set the org as the default and give it an alias:

```

```

Set the org as the default Dev Hub and give it an alias:

```

```

Log in to a sandbox using URL https://MyDomainName--SandboxName.sandbox.my.salesforce.com:

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

\-o | \--username USERNAME

Required

Username of the user logging in.

Type: option

\-f | \--jwt-key-file JWT-KEY-FILE

Required

Path to a file containing the private key.

Type: option

\-i | \--client-id CLIENT-ID

Required

OAuth client ID (also called consumer key) of your custom connected app.

Type: option

\-r | \--instance-url INSTANCE-URL

Optional

URL of the instance that the org lives on.

If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".

Type: option

\-d | \--set-default-dev-hub

Optional

Set the authenticated org as the default Dev Hub.

Type: boolean

\-s | \--set-default

Optional

Set the authenticated org as the default that all org-related commands run against.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the org.

Type: option

### Aliases for org login jwt

```

```

```

```

## org login sfdx-url

Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).

### Description for org login sfdx-url

You use the Salesforce DX (SFDX) authorization URL to authorize Salesforce CLI to connect to a target org. The URL contains the required data to accomplish the authorization, such as the client ID, client secret, and instance URL. You must specify the SFDX authorization URL in this format: "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". Replace <clientId>, <clientSecret>, <refreshToken>, and <instanceUrl> with the values specific to your target org. For <instanceUrl>, don't include a protocol (such as "https://"). Note that although the SFDX authorization URL starts with "force://", it has nothing to do with the actual authorization. Salesforce CLI always communicates with your org using HTTPS.

To see an example of an SFDX authorization URL, run "org display --verbose" on an org.

You have three options when creating the authorization file. The easiest option is to redirect the output of the "sf org display --verbose --json" command into a file. For example, using an org with alias my-org that you've already authorized:

```

```

The resulting JSON file contains the URL in the "sfdxAuthUrl" property of the "result" object. You can then reference the file when running this command:

```

```

NOTE: The "sf org display --verbose" command displays the refresh token only for orgs authorized with the web server flow, and not the JWT bearer flow.

You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the authorization URL. Finally, you can create a normal text file that includes just the URL and nothing else.

Alternatively, you can pipe the SFDX authorization URL through standard input by specifying the --sfdx-url-stdin flag.

### Examples for org login sfdx-url

Authorize an org using the SFDX authorization URL in the files/authFile.json file:

```

```

Similar to previous example, but set the org as your default and give it an alias MyDefaultOrg:

```

```

Pipe the SFDX authorization URL from stdin:

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

\-f | \--sfdx-url-file SFDX-URL-FILE

Optional

Path to a file that contains the Salesforce DX authorization URL.

Type: option

\-u | \--sfdx-url-stdin SFDX-URL-STDIN

Optional

Pipe the Salesforce DX authorization URL through standard input (stdin).

Type: option

\-d | \--set-default-dev-hub

Optional

Set the authenticated org as the default Dev Hub.

Type: boolean

\-s | \--set-default

Optional

Set the authenticated org as the default that all org-related commands run against.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the org.

Type: option

### Aliases for org login sfdx-url

```

```

```

```

## org login web

Log in to a Salesforce org using the web server flow.

### Description for org login web

Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you log in, you can close the browser window.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving metadata. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don’t set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

By default, this command uses the global out-of-the-box connected app in your org. If you need more security or control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. Then specify the consumer key with the --client-id flag.

You can also use this command to link one or more connected or external client apps in an org to an already-authenticated user. Then Salesforce CLI commands that have API-specific requirements, such as new OAuth scopes or JWT-based access tokens, can use these custom client apps rather than the default one. To create the link, you use the --client-app flag to give the link a name and the --username flag to specify the already-authenticated user. Use the --scopes flag to add OAuth scopes if required. After you create the link, you then use the --client-app value in the other command that has the API-specific requirements. An example of a command that uses this feature is "agent preview"; see the "Preview an Agent" section in the "Agentforce Developer Guide" for details and examples. (https://developer.salesforce.com/docs/einstein/genai/guide/agent-dx-preview.html)

### Examples for org login web

Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com):

```

```

Log in to your Dev Hub, set it as your default Dev Hub, and set an alias that you reference later when you create a scratch org:

```

```

Log in to a sandbox and set it as your default org:

```

```

Use --browser to specify a specific browser, such as Google Chrome:

```

```

Use your own connected app by specifying its consumer key (also called client ID) and specify additional OAuth scopes:

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

\-b | \--browser BROWSER

Optional

Browser in which to open the org.

If you don’t specify --browser, the command uses your default browser. The exact names of the browser applications differ depending on the operating system you're on; check your documentation for details.

Type: option

Permissible values are: chrome, edge, firefox

\-i | \--client-id CLIENT-ID

Optional

OAuth client ID (also called consumer key) of your custom connected app.

Type: option

\-r | \--instance-url INSTANCE-URL

Optional

URL of the instance that the org lives on.

If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".

Type: option

\-d | \--set-default-dev-hub

Optional

Set the authenticated org as the default Dev Hub.

Type: boolean

\-s | \--set-default

Optional

Set the authenticated org as the default that all org-related commands run against.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the org.

Type: option

\-c | \--client-app CLIENT-APP

Optional

Name to give to the link between the connected app or external client and the already-authenticated user. You can specify any string you want. Must be used with --username.

Type: option

\--username USERNAME

Optional

Username of the already-authenticated user to link to the connected app or external client app. Must be used with --client-app.

Type: option

\--scopes SCOPES

Optional

Authentication (OAuth) scopes to request. Use the scope's short name; specify multiple scopes using just one flag instance and separated by spaces: --scopes "sfap\_api chatbot\_api".

Type: option

### Aliases for org login web

```

```

```

```

## org logout

Log out of a Salesforce org.

### Description for org logout

If you run this command with no flags and no default org set in your config or environment, it first displays a list of orgs you've created or logged into, with none of the orgs selected. Use the arrow keys to scroll through the list and the space bar to select the orgs you want to log out of. Press Enter when you're done; the command asks for a final confirmation before logging out of the selected orgs.

The process is similar if you specify --all, except that in the initial list of orgs, they're all selected. Use --target-org to logout of a specific org. In both these cases by default, you must still confirm that you want to log out. Use --no-prompt to never be asked for confirmation when also using --all or --target-org.

Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org again, either through the CLI or the Salesforce UI.

Use the --client-app flag to log out of the link you previously created between an authenticated user and a connected app or external client app; you create these links with "org login web --client-app". Run "org display" to get the list of client app names.

### Examples for org logout

Interactively select the orgs to log out of:

```

```

Log out of the org with username me@my.org:

```

```

Log out of all orgs after confirmation:

```

```

Logout of the org with alias my-scratch and don't prompt for confirmation:

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

Optional

Username or alias of the target org.

Type: option

\-c | \--client-app CLIENT-APP

Optional

Client app to log out of.

Type: option

\-a | \--all

Optional

Include all authenticated orgs.

All orgs includes Dev Hubs, sandboxes, DE orgs, and expired, deleted, and unknown-status scratch orgs.

Type: boolean

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org logout

```

```

```

```

## org open

Open your default scratch org, or another specified org, in a browser.

### Description for org open

To open a specific page, specify the portion of the URL after "https://mydomain.my.salesforce.com" as the value for the --path flag. For example, specify "--path lightning" to open Lightning Experience, or specify "--path /apex/YourPage" to open a Visualforce page.

Use the --source-file flag to open ApexPage, FlexiPage, Flow, or Agent metadata from your local project in the associated Builder within the Org.

To generate a URL but not launch it in your browser, specify --url-only.

To open in a specific browser, use the --browser flag. Supported browsers are "chrome", "edge", and "firefox". If you don't specify --browser, the org opens in your default browser.

### Examples for org open

Open your default org in your default browser:

```

```

Open your default org in an incognito window of your default browser:

```

```

Open the org with alias MyTestOrg1 in the Firefox browser:

```

```

Display the navigation URL for the Lightning Experience page for your default org, but don't open the page in a browser:

```

```

Open a local Lightning page in your default org's Lightning App Builder:

```

```

Open a local Flow in Flow Builder:

```

```

Open local Agent metadata (Bot) in Agent Builder:

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

\--private

Optional

Open the org in the default browser using private (incognito) mode.

Type: boolean

\-b | \--browser BROWSER

Optional

Browser where the org opens.

Type: option

Permissible values are: chrome, edge, firefox

\-p | \--path PATH

Optional

Navigation URL path to open a specific page.

Type: option

\-r | \--url-only

Optional

Display navigation URL, but don’t launch browser.

Type: boolean

\-f | \--source-file SOURCE-FILE

Optional

Path to ApexPage, FlexiPage, Flow, or Agent metadata to open in the associated Builder.

Type: option

### Aliases for org open

```

```

```

```

## org open agent

Open an agent in your org's Agent Builder UI in a browser.

### Description for org open agent

Use the --api-name flag to open an agent using its API name in the Agent Builder UI of your org. To find the agent's API name, go to Setup in your org and navigate to the agent's details page.

To generate the URL but not launch it in your browser, specify --url-only.

To open Agent Builder in a specific browser, use the --browser flag. Supported browsers are "chrome", "edge", and "firefox". If you don't specify --browser, the org opens in your default browser.

### Examples for org open agent

Open the agent with API name Coral\_Cloud\_Agent in your default org using your default browser:

```

```

Open the agent in an incognito window of your default browser:

```

```

Open the agent in an org with alias MyTestOrg1 using the Firefox browser:

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

\-n | \--api-name API-NAME

Required

API name, also known as developer name, of the agent you want to open in the org's Agent Builder UI.

Type: option

\--private

Optional

Open the org in the default browser using private (incognito) mode.

Type: boolean

\-b | \--browser BROWSER

Optional

Browser where the org opens.

Type: option

Permissible values are: chrome, edge, firefox

\-r | \--url-only

Optional

Display navigation URL, but don’t launch browser.

Type: boolean

## org open authoring-bundle

Open your org in Agentforce Studio, specifically in the list view showing the list of agents.

### Description for org open authoring-bundle

The list view shows the agents in your org that are implemented with Agent Script and an authoring bundle. Click on an agent name to open it in Agentforce Builder in a new browser window.

To generate the URL but not launch it in your browser, specify --url-only.

### Examples for org open authoring-bundle

Open the agents list view in your default org using your default browser:

```

```

Open the agents list view in an incognito window of your default browser:

```

```

Open the agents list view in an org with alias MyTestOrg1 using the Firefox browser:

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

\--private

Optional

Open the org in the default browser using private (incognito) mode.

Type: boolean

\-b | \--browser BROWSER

Optional

Browser where the org opens.

Type: option

Permissible values are: chrome, edge, firefox

\-r | \--url-only

Optional

Display navigation URL, but don't launch browser.

Type: boolean

## org refresh sandbox

Refresh a sandbox org using the sandbox name.

### Description for org refresh sandbox

Refreshing a sandbox copies the metadata, and optionally data, from your source org to the refreshed sandbox org. You can optionally specify a definition file if you want to change the configuration of the refreshed sandbox, such as its license type or template ID. You can also use the --source-id or --source-sandbox-name flags to change the refreshed sandbox org's original source org to a new org; in this case, the refreshed sandbox org's metadata is updated with the new source org's metadata.

You're not allowed to change the sandbox name when you refresh it with this command. If you want to change the sandbox name, first delete it with the "org delete sandbox" command. And then recreate it with the "org create sandbox" command and give it a new name.

### Examples for org refresh sandbox

Refresh the sandbox named "devSbx1". The production org that contains the sandbox license has the alias "prodOrg".

```

```

Refresh the sandbox named "devSbx2", and override the configuration of the refreshed sandbox with the properties in the specified defintion file. The default target org is the production org, so you don't need to specify the \`--target-org\` flag in this case.

```

```

Refresh the sandbox using the name defined in the definition file. The production org that contains the sandbox license has the alias "prodOrg".

```

```

Refresh the sandbox named "devSbx2" by changing its original source org to be a sandbox called "devSbx3":

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

\--no-auto-activate

Optional

Disable auto-activation of the sandbox after a successful refresh.

By default, a sandbox auto-activates after a refresh. Use this flag to control sandbox activation manually.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to poll for sandbox refresh status.

If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays the "sf org resume sandbox" command for you run to check the status of the refresh. The displayed command includes the job ID for the running sandbox refresh.

Type: option

Default value: 30 minutes

\-i | \--poll-interval POLL-INTERVAL

Optional

Number of seconds to wait between status polling requests.

Type: option

Default value: 30 seconds

\--source-sandbox-name SOURCE-SANDBOX-NAME

Optional

Name of the sandbox org that becomes the new source org for the refreshed sandbox.

The value of --source-sandbox-name must be an existing sandbox. The new source sandbox, and the refreshed sandbox specified with the --name flag, must both be associated with the production org (--target-org) that contains the sandbox licenses.

You can specify either --source-sandbox-name or --source-id when refreshing an existing sandbox, but not both.

Type: option

\--source-id SOURCE-ID

Optional

ID of the sandbox org that becomes the new source org for the refreshed sandbox.

The value of --source-id must be an existing sandbox. The new source sandbox, and the refreshed sandbox specified with the --name flag, must both be associated with the production org (--target-org) that contains the sandbox licenses.

You can specify either --source-id or --source-sandbox-name when refreshing an existing sandbox, but not both.

Type: option

\--async

Optional

Request the sandbox refresh, but don't wait for it to complete.

The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue to use the CLI. To check the status of the sandbox refresh, run "sf org resume sandbox".

Type: boolean

\-n | \--name NAME

Optional

Name of the existing sandbox org in your production org that you want to refresh.

Type: option

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a sandbox definition file for overriding its configuration when you refresh it.

The sandbox definition file is a blueprint for the sandbox; use the file to change the sandbox configuration during a refresh. If you don't want to change the sandbox configuration when you refresh it, then simply use the --name flag to specify the sandbox and don't use this flag. See <https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_sandbox\_definition.htm> for all the options you can specify in the definition file.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the production org that contains the sandbox license.

Type: option

\--no-prompt

Optional

Don't prompt for confirmation about the sandbox refresh.

Type: boolean

## org resume sandbox

Check the status of a sandbox creation, and log in to it if it's ready.

### Description for org resume sandbox

Sandbox creation can take a long time. If the original "sf org create sandbox" command either times out, or you specified the --async flag, the command displays a job ID. Use this job ID to check whether the sandbox creation is complete, and if it is, the command then logs into it.

You can also use the sandbox name to check the status or the --use-most-recent flag to use the job ID of the most recent sandbox creation.

### Examples for org resume sandbox

Check the status of a sandbox creation using its name and specify a production org with alias "prodOrg":

```

```

Check the status using the job ID:

```

```

Check the status of the most recent sandbox create request:

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

\-w | \--wait WAIT

Optional

Number of minutes to wait for the sandbox org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume checking the sandbox creation, rerun this command.

Type: option

\-n | \--name NAME

Optional

Name of the sandbox org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the incomplete sandbox creation that you want to check the status of.

The job ID is valid for 24 hours after you start the sandbox creation.

Type: option

\-l | \--use-most-recent

Optional

Use the most recent sandbox create request.

Type: boolean

\-o | \--target-org TARGET-ORG

Optional

Username or alias of the production org that contains the sandbox license.

When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to the new sandbox org.

Type: option

### Aliases for org resume sandbox

```

```

## org resume scratch

Resume the creation of an incomplete scratch org.

### Description for org resume scratch

When the original "sf org create scratch" command either times out or is run with the --async flag, it displays a job ID.

Run this command by either passing it a job ID or using the --use-most-recent flag to specify the most recent incomplete scratch org.

### Examples for org resume scratch

Resume a scratch org create with a job ID:

```

```

Resume your most recent incomplete scratch org:

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

\-i | \--job-id JOB-ID

Optional

Job ID of the incomplete scratch org create that you want to resume.

The job ID is the same as the record ID of the incomplete scratch org in the ScratchOrgInfo object of the Dev Hub.

The job ID is valid for 24 hours after you start the scratch org creation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent incomplete scratch org.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the scratch org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume checking the scratch creation, rerun this command.

Type: option

### Aliases for org resume scratch

```

```

## Code Examples

```
sf org assign permset --name DreamHouse --name CloudHouse
```

```
sf org assign permset --name DreamHouse --target-org my-scratch
```

```
sf org assign permset --name DreamHouse --on-behalf-of user1@my.org --on-behalf-of user2 --on-behalf-of user
```

```
sf org assign permsetlicense --name DreamHouse
```

```
sf org assign permsetlicense --name DreamHouse --name CloudHouse --target-org my-scratch
```

## Related Topics

- org assign permset (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org assign permsetlicense (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org create sandbox (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org create scratch (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org create shape (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org create snapshot (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org create user (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org delete sandbox (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org delete scratch (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
- org delete shape (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
