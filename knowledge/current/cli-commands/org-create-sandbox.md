---
title: "org create sandbox"
domain: cli-commands
topic: org-create-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, create, sandbox, Create, org., Description, Examples, Flags, Aliases]
---

# org create sandbox

> Create a sandbox org.

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