---
title: "project convert source-behavior"
domain: cli-commands
topic: project-convert-source-behavior
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, convert, source-behavior, Enable, behavior, source, files, then, update, Salesforce, implement, behavior., Beta, Note, Description, Examples, Flags]
---

# project convert source-behavior

> Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior.

## project convert source-behavior (Beta)

Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project convert source-behavior

Specifically, this command updates the "sourceBehaviorOption" option in the "sfdx-project.json" file and then converts the associated local source files in your project as needed.

For example, run this command with the "--behavior decomposePermissionSetBeta" flag to start decomposing permission sets when you deploy or retrieve them. Decomposing means breaking up the monolithic metadata API format XML file that corresponds to a metadata component into smaller XML files and directories based on its subtypes. Permission sets are not decomposed by default; you must opt-in to start decomposing them by using this command. When the command finishes, your "sfdx-project.json" file is updated to always decompose permission sets, and the existing permission set files in your local package directories are converted into the new decomposed format. You run this command only once for a given behavior change.

For more information about the possible values for the --behavior flag, see the "sourceBehaviorOptions" section in the https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_ws\_config.htm topic.

### Examples for project convert source-behavior

Update your Salesforce DX project to decompose custom permission sets:

```

```

Display what the command would do, but don't change any existing files:

```

```

Keep the temporary directory that contains the interim metadata API formatted files:

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

\-b | \--behavior BEHAVIOR

Required

Behavior to enable; the values correspond to the possible values of the "sourceBehaviorOption" option in the "sfdx-project.json" file.

Type: option

Permissible values are: decomposeCustomLabelsBeta2, decomposeCustomLabelsBeta, decomposePermissionSetBeta, decomposePermissionSetBeta2, decomposeSharingRulesBeta, decomposeWorkflowBeta, decomposeExternalServiceRegistrationBeta

\--dry-run

Optional

Display what the command would do, but don't make any actual changes.

Type: boolean

\--preserve-temp-dir

Optional

Don't delete the metadata API format temporary directory that this command creates. Useful for debugging.

Type: boolean

\-o | \--target-org TARGET-ORG

Optional

Username or alias of the target org.

Type: option