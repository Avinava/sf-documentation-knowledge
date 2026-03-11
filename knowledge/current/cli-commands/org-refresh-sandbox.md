---
title: "org refresh sandbox"
domain: cli-commands
topic: org-refresh-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, refresh, sandbox, Refresh, name., Description, Examples, Flags]
---

# org refresh sandbox

> Refresh a sandbox org using the sandbox name.

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