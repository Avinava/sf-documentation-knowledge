---
title: "project Commands"
domain: cli-commands
topic: project-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.554Z
estimatedTokens: 22507
keywords: [project, Commands, Convert, metadata, retrieved, via, Metadata, API, source, format, used, Salesforce, projects., convert, mdapi, Description, Examples, Flags, Aliases, source-behavior]
---

# project Commands

> Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

# project Commands

Work with projects, such as deploy and retrieve metadata.

-   **[project convert mdapi](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_convert_mdapi_unified)**
    Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.
-   **[project convert source](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_convert_source_unified)**
    Convert source-formatted files into metadata that you can deploy using Metadata API.
-   **[project convert source-behavior (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_convert_source-behavior_unified)**
    Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior.
-   **[project delete source](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_delete_source_unified)**
    Delete source from your project and from a non-source-tracked org.
-   **[project delete tracking](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_delete_tracking_unified)**
    Delete all local source tracking information.
-   **[project deploy cancel](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_cancel_unified)**
    Cancel a deploy operation.
-   **[project deploy pipeline quick (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_pipeline_quick_unified)**
    Quickly deploy a validated deployment to an org.
-   **[project deploy pipeline report (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_pipeline_report_unified)**
    Check the status of a pipeline deploy operation.
-   **[project deploy pipeline resume (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_pipeline_resume_unified)**
    Resume watching a pipeline deploy operation.
-   **[project deploy pipeline start (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_pipeline_start_unified)**
    Deploy changes from a branch to the pipeline stage’s org.
-   **[project deploy pipeline validate (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_pipeline_validate_unified)**
    Perform a validate-only deployment from a branch to the pipeline stage’s org.
-   **[project deploy preview](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_preview_unified)**
    Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.
-   **[project deploy quick](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_quick_unified)**
    Quickly deploy a validated deployment to an org.
-   **[project deploy report](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_report_unified)**
    Check or poll for the status of a deploy operation.
-   **[project deploy resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_resume_unified)**
    Resume watching a deploy operation and update source tracking when the deploy completes.
-   **[project deploy start](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified)**
    Deploy metadata to an org from your local project.
-   **[project deploy validate](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_validate_unified)**
    Validate a metadata deployment without actually executing it.
-   **[project generate manifest](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_generate_manifest_unified)**
    Create a project manifest that lists the metadata components you want to deploy or retrieve.
-   **[project list ignored](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_list_ignored_unified)**
    Check your local project package directories for forceignored files.
-   **[project reset tracking](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_reset_tracking_unified)**
    Reset local and remote source tracking.
-   **[project retrieve preview](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_retrieve_preview_unified)**
    Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.
-   **[project retrieve start](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_retrieve_start_unified)**
    Retrieve metadata from an org to your local project.

## project convert mdapi

Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

### Description for project convert mdapi

To use Salesforce CLI to work with components that you retrieved via Metadata API, first convert your files from the metadata format to the source format using this command.

To convert files from the source format back to the metadata format, run "sf project convert source".

To convert multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project convert mdapi

Convert metadata formatted files in the specified directory into source formatted files; writes converted files to your default package directory:

```

```

Similar to previous example, but writes converted files to the specified output directory:

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

\-r | \--root-dir ROOT-DIR

Required

Root directory that contains the Metadata API–formatted metadata.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to store your files in after they’re converted to source format; can be an absolute or relative path.

Type: option

\-x | \--manifest MANIFEST

Optional

File path to manifest (package.xml) of metadata types to convert.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-p | \--metadata-dir METADATA-DIR

Optional

Root of directory or zip file of metadata formatted files to convert.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).

If you specify this flag, don’t specify --manifest or --metadata. If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to convert.

Type: option

### Aliases for project convert mdapi

```

```

## project convert source

Convert source-formatted files into metadata that you can deploy using Metadata API.

### Description for project convert source

To convert source-formatted files into the metadata format, so that you can deploy them using Metadata API, run this command. Then deploy the metadata using "sf project deploy".

To convert Metadata API–formatted files into the source format, run "sf project convert mdapi".

To specify a package name that includes spaces, enclose the name in single quotes.

To convert multiple components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project convert source

Convert source-formatted files in the specified directory into metadata-formatted files; writes converted files into a new directory:

```

```

Similar to previous example, but writes converted files to the specified output directory and associates the files with the specified package:

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

API Version to use in the generated project's manifest. By default, will use the version from sfdx-project.json

Override the api version used for api requests made by this command

Type: option

\-r | \--root-dir ROOT-DIR

Optional

Source directory other than the default package to convert.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Output directory to store the Metadata API–formatted files in.

Type: option

Default value: metadataPackage\_1772650329005

\-n | \--package-name PACKAGE-NAME

Optional

Name of the package to associate with the metadata-formatted files.

Type: option

\-x | \--manifest MANIFEST

Optional

Path to the manifest (package.xml) file that specifies the metadata types to convert.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-p | \--source-dir SOURCE-DIR

Optional

Paths to the local source files to convert.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).

If you specify this flag, don’t specify --manifest or --metadata.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to convert.

Type: option

### Aliases for project convert source

```

```

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

## project delete source

Delete source from your project and from a non-source-tracked org.

### Description for project delete source

Use this command to delete components from orgs that don’t have source tracking. To remove deleted items from orgs that have source tracking enabled, "sf project deploy start".

When you run this command, both the local source file and the metadata component in the org are deleted.

To delete multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project delete source

Delete all local Apex source files and all Apex classes from the org with alias "my-scratch":

```

```

Delete a specific Apex class and a Profile that has a space in it from your default org; don't prompt for confirmation:

```

```

Run the tests that aren’t in any managed packages as part of the deletion; if the delete succeeds, and the org has source-tracking enabled, update the source tracking information:

```

```

Delete the Apex source files in a directory and the corresponding components from your default org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-c | \--check-only

Optional

Validate delete command but don't delete anything from the org or the local project.

IMPORTANT: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.

If you change a field type from Master-Detail to Lookup or vice versa, that change isn’t supported when using the --check-only flag to test a deletion (validation). This kind of change isn’t supported for test deletions to avoid the risk of data loss or corruption. If a change that isn’t supported for test deletions is included in a deletion package, the test deletion fails and issues an error.

If your deletion package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deletion to another test Sandbox. A full deletion includes a validation of the changes as part of the deletion process.

Note: A Metadata API deletion that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.

1\. For a deletion with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to delete the Master-Detail field, or the deletion fails. During the deletion, detail records are permanently deleted from the Recycle Bin and cannot be recovered.

2\. For a deletion that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deletion to succeed. However, a successful deletion permanently deletes any detail records in the Recycle Bin.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to finish.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

Type: option

Default value: 33 minutes

\--tests TESTS

Optional

Apex tests to run when --test-level is RunSpecifiedTests.

If a test name contains a space, enclose it in double quotes.

For multiple test names, use one of the following formats:

\- Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"

\- Separate the test names with spaces: --tests Test1 Test2 "Test With Space"

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Deployment Apex testing level.

Valid values are:

\- NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

\- RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.

\- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

\- RunRelevantTests (Beta) — Runs only tests that are relevant to the files being deployed. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies. For fine-grained control, you can also annotate test classes so that they always run in certain conditions. See "@IsTest Annotation" in the "Apex Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_classes\_annotation\_isTest.htm). Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually and is different than the overall coverage percentage.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package and target org. For more information, see "Running Tests in a Deployment" (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_running\_tests.htm) in the "Metadata API Developer Guide".

Type: option

Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg, RunRelevantTests

\-r | \--no-prompt

Optional

Don't prompt for delete confirmation.

Type: boolean

\-m | \--metadata METADATA

Optional

Metadata components to delete.

If you specify this flag, don’t specify --source-dir.

Type: option

\-p | \--source-dir SOURCE-DIR

Optional

Source file paths to delete.

The supplied paths can be a single file (in which case the operation is applied to only one file) or a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).

If you specify this flag, don’t specify --metadata.

Type: option

\-t | \--track-source

Optional

If the delete succeeds, update the source tracking information.

Type: boolean

\-f | \--force-overwrite

Optional

Ignore conflict warnings and overwrite changes to the org.

Type: boolean

\--verbose

Optional

Verbose output of the delete result.

Type: boolean

### Aliases for project delete source

```

```

## project delete tracking

Delete all local source tracking information.

### Description for project delete tracking

WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

Deletes all local source tracking information. When you next run 'project deploy preview', Salesforce CLI displays all local and remote files as changed, and any files with the same name are listed as conflicts.

### Examples for project delete tracking

Delete local source tracking for the org with alias "my-scratch":

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-p | \--no-prompt

Optional

Don't prompt for source tracking override confirmation.

Type: boolean

### Aliases for project delete tracking

```

```

## project deploy cancel

Cancel a deploy operation.

### Description for project deploy cancel

Use this command to cancel a deploy operation that hasn't yet completed in the org. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy cancel

Cancel a deploy operation using a job ID:

```

```

Cancel the most recent deploy operation:

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

\--async

Optional

Run the command asynchronously.

The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf project deploy report".

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to cancel.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy start

\- sf project deploy validate

\- sf project deploy quick

\- sf project deploy cancel

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less. If your most recent deploy operations was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf project deploy report".

Type: option

### Aliases for project deploy cancel

```

```

## project deploy pipeline quick (Beta)

Quickly deploy a validated deployment to an org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline quick

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Before you run this command, create a validated deployment with the "project deploy pipeline validate" command, which returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command. Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the deployment to your production org take several hours and you don’t want to risk a failed deploy.

This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org.

### Examples for project deploy pipeline quick

Run a quick deploy using your default Devops Center org and a job ID:

```

```

Asynchronously run a quick deploy of the most recently validated deployment using an org with alias "my-prod-org":

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume the deployment, run "sf project deploy pipeline resume". To check the status of the deployment, run "sf project deploy pipeline report".

Type: boolean

\--concise

Optional

Show concise output of the command result.

Type: boolean

\--verbose

Optional

Show verbose output of the command result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To check the status of the operation, run "sf project deploy pipeline report".

Type: option

Default value: 33 minutes

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the validated deployment to quick deploy.

The job ID is valid for 10 days from when you started the validation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recently validated deployment.

For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most recent deployment validation was more than 3 days ago, this flag won't find the job ID.

Type: boolean

## project deploy pipeline report (Beta)

Check the status of a pipeline deploy operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline report

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Run this command by either indicating a job ID or specifying the —use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy pipeline report

Check the status using a job ID:

```

```

Check the status of the most recent deploy operation:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the pipeline deployment to check the status of.

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started in the past 3 days or fewer. If your most recent operation was longer than 3 days ago, this flag won't find the job ID.

Type: boolean

## project deploy pipeline resume (Beta)

Resume watching a pipeline deploy operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline resume

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Use this command to resume watching a pipeline deploy operation if the original command times out or you specified the --async flag.

Run this command by either indicating a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy pipeline resume

Resume watching a deploy operation using a job ID:

```

```

Resume watching the most recent deploy operation:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the pipeline deploy operation you want to resume.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy pipeline start

\- sf project deploy pipeline validate

\- sf project deploy pipeline quick

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for operations that started in the past 3 days or fewer. If your most recent operation was longer than 3 days ago, this flag won't find a job ID.

Type: boolean

\--concise

Optional

Show concise output of the command result.

Type: boolean

\--verbose

Optional

Show verbose output of the command result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To check the status of the operation, run "sf project deploy pipeline report".

Type: option

Default value: 33 minutes

## project deploy pipeline start (Beta)

Deploy changes from a branch to the pipeline stage’s org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline start

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

Before you run this command, changes in the pipeline stage's branch must be merged in the source control repository.

### Examples for project deploy pipeline start

Deploy changes in the Staging branch to the Staging environment (sandbox), if the previous stage is the bundling stage:

```

```

Deploy all changes in the main branch to the release environment:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\-b | \--branch-name BRANCH-NAME

Required

Name of the branch in the source control repository that corresponds to the pipeline stage that you want to deploy the changes to.

Type: option

\-v | \--bundle-version-name BUNDLE-VERSION-NAME

Optional

Version name of the bundle.

You must indicate the bundle version if deploying to the environment that corresponds to the first stage after the bundling stage.

Type: option

\-a | \--deploy-all

Optional

Deploy all metadata in the branch to the stage's org.

If you don’t specify this flag, only changes in the stage’s branch are deployed.

Type: boolean

\-p | \--devops-center-project-name DEVOPS-CENTER-PROJECT-NAME

Required

Name of the DevOps Center project.

Type: option

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-t | \--tests TESTS

Optional

Apex tests to run when --test-level is RunSpecifiedTests.

Separate multiple test names with commas. Enclose the entire flag value in double quotes if a test name contains spaces.

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Deployment Apex testing level.

Valid values are:

\- NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

\- RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.

\- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see the section "Running Tests in a Deployment" in the "Metadata API Developer Guide". (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_running\_tests.htm)

Type: option

Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume the deployment, run "sf project deploy pipeline resume". To check the status of the deployment, run "sf project deploy pipeline report".

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To check the status of the operation, run "sf project deploy pipeline report".

Type: option

Default value: 33 minutes

\--verbose

Optional

Show verbose output of the command result.

Type: boolean

\--concise

Optional

Show concise output of the command result.

Type: boolean

## project deploy pipeline validate (Beta)

Perform a validate-only deployment from a branch to the pipeline stage’s org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for project deploy pipeline validate

The first time you run any "project deploy pipeline" command, be sure to authorize the org in which DevOps Center is installed. The easiest way to authorize an org is with the "org login web" command.

A validation runs Apex tests to verify whether a deployment will succeed without actually deploying the metadata to your environment, so you can then quickly deploy the changes later without re-running the tests.

### Examples for project deploy pipeline validate

Perform a validate-only deployment from the Staging branch to the Staging environment (sandbox):

```

```

Perform a validate-only deployment of all changes from the main branch to the release environment:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\-b | \--branch-name BRANCH-NAME

Required

Name of the branch in the source control repository that corresponds to the pipeline stage that you want to deploy the changes to.

Type: option

\-v | \--bundle-version-name BUNDLE-VERSION-NAME

Optional

Version name of the bundle.

You must indicate the bundle version if deploying to the environment that corresponds to the first stage after the bundling stage.

Type: option

\-a | \--deploy-all

Optional

Deploy all metadata in the branch to the stage's org.

If you don’t specify this flag, only changes in the stage’s branch are deployed.

Type: boolean

\-p | \--devops-center-project-name DEVOPS-CENTER-PROJECT-NAME

Required

Name of the DevOps Center project.

Type: option

\-c | \--devops-center-username DEVOPS-CENTER-USERNAME

Required

Username or alias of the DevOps Center org.

Type: option

\-t | \--tests TESTS

Optional

Apex tests to run when --test-level is RunSpecifiedTests.

Separate multiple test names with commas. Enclose the entire flag value in double quotes if a test name contains spaces.

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Deployment Apex testing level.

Valid values are:

\- NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

\- RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.

\- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see the section "Running Tests in a Deployment" in the "Metadata API Developer Guide". (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_running\_tests.htm)

Type: option

Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume the deployment, run "sf project deploy pipeline resume". To check the status of the deployment, run "sf project deploy pipeline report".

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To check the status of the operation, run "sf project deploy pipeline report".

Type: option

Default value: 33 minutes

\--verbose

Optional

Show verbose output of the command result.

Type: boolean

\--concise

Optional

Show concise output of the command result.

Type: boolean

## project deploy preview

Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

### Description for project deploy preview

You must run this command from within a project.

The command outputs a table that describes what will happen if you run the "sf project deploy start" command. The table lists the metadata components that will be deployed and deleted. The table also lists the current conflicts between files in your local project and components in the org. Finally, the table lists the files that won't be deployed because they're included in your .forceignore file.

If your org allows source tracking, then this command displays potential conflicts between the org and your local project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

To preview the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project deploy preview

NOTE: The commands to preview a deployment and actually deploy it use similar flags. We provide a few preview examples here, but see the help for "sf project deploy start" for more examples that you can adapt for previewing.

Preview the deployment of source files in a directory, such as force-app, to your default org:

```

```

Preview the deployment of all Apex classes to an org with alias "my-scratch":

```

```

Preview deployment of a specific Apex class:

```

```

Preview deployment of all components listed in a manifest:

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

\-c | \--ignore-conflicts

Optional

Don't display conflicts in preview of the deployment.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-x | \--manifest MANIFEST

Optional

Full file path for manifest (package.xml) of components to preview.

All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to preview.

Type: option

\-d | \--source-dir SOURCE-DIR

Optional

Path to the local source files to preview.

The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its subdirectories).

If you specify this flag, don’t specify --metadata or --manifest.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--concise

Optional

Show only the changes that will be deployed; omits files that are forceignored.

Type: boolean

### Aliases for project deploy preview

```

```

## project deploy quick

Quickly deploy a validated deployment to an org.

### Description for project deploy quick

Before you run this command, first create a validated deployment with the "sf project deploy validate" command, which returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command. Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the deployment to your production org take several hours and you don’t want to risk a failed deploy.

This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org.

Note: Don't use this command on sandboxes; the command is intended to be used on production orgs. By default, sandboxes don't run tests during a deploy. Use "sf project deploy start" instead.

### Examples for project deploy quick

Run a quick deploy to your default org using a job ID:

```

```

Asynchronously run a quick deploy of the most recently validated deployment to an org with alias "my-prod-org":

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

\--async

Optional

Run the command asynchronously.

The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project deploy report".

Type: boolean

\--concise

Optional

Show concise output of the deploy result.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deployment you want to quick deploy.

The job ID is valid for 10 days from when you started the validation.

Type: option

\-o | \--target-org TARGET-ORG

Optional

Username or alias of the target org.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recently validated deployment.

For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most recent deployment validation was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\--verbose

Optional

Show verbose output of the deploy result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project deploy report".

Type: option

Default value: 33 minutes

\-a | \--api-version API-VERSION

Optional

Target API version for the deploy.

Use this flag to override the default API version with the API version of your package.xml file. The default API version is the latest version supported by the CLI.

Type: option

### Aliases for project deploy quick

```

```

## project deploy report

Check or poll for the status of a deploy operation.

### Description for project deploy report

Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation. If you specify the --wait flag, the command polls for the status every second until the timeout of --wait minutes. If you don't specify the --wait flag, the command simply checks and displays the status of the deploy; the command doesn't poll for the status.

You typically don't specify the --target-org flag because the cached job already references the org to which you deployed. But if you run this command on a computer different than the one from which you deployed, then you must specify the --target-org and it must point to the same org.

This command doesn't update source tracking information.

### Examples for project deploy report

Check the status using a job ID:

```

```

Check the status of the most recent deploy operation:

```

```

Poll for the status using a job ID and target org:

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

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to check the status of.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy start

\- sf project deploy validate

\- sf project deploy quick

\- sf project deploy cancel

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less. If your most recent operation was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\--coverage-formatters COVERAGE-FORMATTERS

Optional

Format of the code coverage results.

For multiple formatters, repeat the flag for each formatter.

\--coverage-formatters lcov --coverage-formatters clover

Type: option

Permissible values are: clover, cobertura, html-spa, html, json, json-summary, lcovonly, none, teamcity, text, text-summary

\--junit

Optional

Output JUnit test results.

Type: boolean

\--results-dir RESULTS-DIR

Optional

Output directory for code coverage and JUnit results; defaults to the deploy ID.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume the deployment, run "sf project deploy resume". To check the status of the deployment, run "sf project deploy report".

Type: option

### Aliases for project deploy report

```

```

## project deploy resume

Resume watching a deploy operation and update source tracking when the deploy completes.

### Description for project deploy resume

Use this command to resume watching a deploy operation if the original command times out or you specified the --async flag. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations. This command doesn't resume the original operation itself, because the operation always continues after you've started it, regardless of whether you're watching it or not. When the deploy completes, source tracking information is updated as needed.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most recent deploy operation.

### Examples for project deploy resume

Resume watching a deploy operation using a job ID:

```

```

Resume watching the most recent deploy operation:

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

\--concise

Optional

Show concise output of the deploy operation result.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the deploy operation you want to resume.

These commands return a job ID if they time out or you specified the --async flag:

\- sf project deploy start

\- sf project deploy validate

\- sf project deploy quick

\- sf project deploy cancel

The job ID is valid for 10 days from when you started the deploy operation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent deploy operation.

For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less. If your most recent operation was more than 3 days ago, this flag won't find a job ID.

Type: boolean

\--verbose

Optional

Show verbose output of the deploy operation result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To resume watching the deploy operation, run this command again. To check the status of the deploy operation, run "sf project deploy report".

Type: option

\--coverage-formatters COVERAGE-FORMATTERS

Optional

Format of the code coverage results.

For multiple formatters, repeat the flag for each formatter.

\--coverage-formatters lcov --coverage-formatters clover

Type: option

Permissible values are: clover, cobertura, html-spa, html, json, json-summary, lcovonly, none, teamcity, text, text-summary

\--junit

Optional

Output JUnit test results.

Type: boolean

\--results-dir RESULTS-DIR

Optional

Output directory for code coverage and JUnit results; defaults to the deploy ID.

Type: option

### Aliases for project deploy resume

```

```

## project deploy start

Deploy metadata to an org from your local project.

### Description for project deploy start

You must run this command from within a project.

Metadata components are deployed in source format by default. Deploy them in metadata format by specifying the --metadata-dir flag, which specifies the root directory or ZIP file that contains the metadata formatted files you want to deploy.

If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production orgs, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

To deploy multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project deploy start

Deploy local changes not in the org; uses your default org:

```

```

Deploy all source files in the "force-app" directory to an org with alias "my-scratch"; show only concise output, in other words don't print a list of all the source that was deployed:

```

```

Deploy all the Apex classes and custom objects that are in the "force-app" directory. The list views, layouts, etc, that are associated with the custom objects are also deployed. Both examples are equivalent:

```

```

```

```

Deploy all Apex classes that are in all package directories defined in the "sfdx-project.json" file:

```

```

Deploy a specific Apex class; ignore any conflicts between the local project and org (be careful with this flag, because it will overwrite the Apex class in the org if there are conflicts!):

```

```

Deploy specific Apex classes that match a pattern; in this example, deploy Apex classes whose names contain the string "MyApex". Also ignore any deployment warnings (again, be careful with this flag! You typically want to see the warnings):

```

```

Deploy a custom object called ExcitingObject that's in the SBQQ namespace:

```

```

Deploy all custom objects in the SBQQ namespace by using a wildcard and quotes:

```

```

Deploy all custom objects and Apex classes found in all defined package directories (both examples are equivalent):

```

```

```

```

Deploy all Apex classes and a profile that has a space in its name:

```

```

Deploy all components listed in a manifest:

```

```

Run the tests that aren’t in any managed packages as part of a deployment:

```

```

Deploy all metadata formatted files in the "MDAPI" directory:

```

```

Deploy all metadata formatted files in the "MDAPI" directory; items listed in the MDAPI/destructiveChangesPre.xml and MDAPI/destructiveChangesPost.xml manifests are immediately eligible for deletion rather than stored in the Recycle Bin:

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

\-a | \--api-version API-VERSION

Optional

Target API version for the deploy.

Use this flag to override the default API version with the API version of your package.xml file. The default API version is the latest version supported by the CLI.

Type: option

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume the deployment, run "sf project deploy resume". To check the status of the deployment, run "sf project deploy report".

Type: boolean

\--concise

Optional

Show concise output of the deploy result.

Type: boolean

\--dry-run

Optional

Validate deploy and run Apex tests but don’t save to the org.

Type: boolean

\-c | \--ignore-conflicts

Optional

Ignore conflicts and deploy local files, even if they overwrite changes in the org.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-r | \--ignore-errors

Optional

Ignore any errors and don’t roll back deployment.

Never use this flag when deploying to a production org. If you specify it, components without errors are deployed and components with errors are skipped, and could result in an inconsistent production org.

Type: boolean

\-g | \--ignore-warnings

Optional

Ignore warnings and allow a deployment to complete successfully.

If you specify this flag, and a warning occurs, the success status of the deployment is set to true. If you don't specify this flag, and a warning occurs, then the success status is set to false, and the warning is treated like an error.

This flag is useful in a CI environment and your deployment includes destructive changes; if you try to delete a component that doesn't exist in the org, you get a warning. In this case, to ensure that the command returns a success value of true, specify this flag.

Type: boolean

\-x | \--manifest MANIFEST

Optional

Full file path for manifest (package.xml) of components to deploy.

All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to deploy. Wildcards (\`\*\` ) supported as long as you use quotes, such as \`ApexClass:MyClass\*\`.

Type: option

\--metadata-dir METADATA-DIR

Optional

Root of directory or zip file of metadata formatted files to deploy.

Type: option

\--single-package

Optional

Indicates that the metadata zip file points to a directory structure for a single package.

Type: boolean

\-d | \--source-dir SOURCE-DIR

Optional

Path to the local source files to deploy.

The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its subdirectories).

If you specify this flag, don’t specify --metadata or --manifest.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-t | \--tests TESTS

Optional

Apex tests to run when --test-level is RunSpecifiedTests.

If a test name contains a space, enclose it in double quotes.

For multiple test names, use one of the following formats:

\- Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"

\- Separate the test names with spaces: --tests Test1 Test2 "Test With Space"

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Deployment Apex testing level.

Valid values are:

\- NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

\- RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.

\- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

\- RunRelevantTests (Beta) — Runs only tests that are relevant to the files being deployed. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies. For fine-grained control, you can also annotate test classes so that they always run in certain conditions. See "@IsTest Annotation" in the "Apex Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_classes\_annotation\_isTest.htm). Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually and is different than the overall coverage percentage.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package and target org. For more information, see "Running Tests in a Deployment" (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_running\_tests.htm) in the "Metadata API Developer Guide".

Type: option

Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg, RunRelevantTests

\--verbose

Optional

Show verbose output of the deploy result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume the deployment, run "sf project deploy resume". To check the status of the deployment, run "sf project deploy report".

Type: option

Default value: 33 minutes

\--purge-on-delete

Optional

Specify that deleted components in the destructive changes manifest file are immediately eligible for deletion rather than being stored in the Recycle Bin.

Type: boolean

\--pre-destructive-changes PRE-DESTRUCTIVE-CHANGES

Optional

File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy.

Type: option

\--post-destructive-changes POST-DESTRUCTIVE-CHANGES

Optional

File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy.

Type: option

\--coverage-formatters COVERAGE-FORMATTERS

Optional

Format of the code coverage results.

For multiple formatters, repeat the flag for each formatter.

\--coverage-formatters lcov --coverage-formatters clover

Type: option

Permissible values are: clover, cobertura, html-spa, html, json, json-summary, lcovonly, none, teamcity, text, text-summary

\--junit

Optional

Output JUnit test results.

Type: boolean

\--results-dir RESULTS-DIR

Optional

Output directory for code coverage and JUnit results; defaults to the deploy ID.

Type: option

### Aliases for project deploy start

```

```

## project deploy validate

Validate a metadata deployment without actually executing it.

### Description for project deploy validate

Use this command to verify whether a deployment will succeed without actually deploying the metadata to your org. This command is similar to "sf project deploy start", except you're required to run Apex tests, and the command returns a job ID rather than executing the deployment. If the validation succeeds, then you pass this job ID to the "sf project deploy quick" command to actually deploy the metadata. This quick deploy takes less time because it skips running Apex tests. The job ID is valid for 10 days from when you started the validation. Validating first is useful if the deployment to your production org take several hours and you don’t want to risk a failed deploy.

You must run this command from within a project.

This command doesn't support source-tracking. When you quick deploy with the resulting job ID, the source you deploy overwrites the corresponding metadata in your org.

To validate the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

Note: Don't use this command on sandboxes; the command is intended to be used on production orgs. By default, sandboxes don't run tests during a deploy. If you want to validate a deployment with tests on a sandbox, use "sf project deploy start --dry-run --test-level RunLocalTests" instead.

### Examples for project deploy validate

NOTE: These examples focus on validating large deployments. See the help for "sf project deploy start" for examples of deploying smaller sets of metadata which you can also use to validate.

Validate the deployment of all source files in the "force-app" directory to the default org:

```

```

Validate the deployment of all source files in two directories: "force-app" and "force-app-utils":

```

```

Asynchronously validate the deployment and run all tests in the org with alias "my-prod-org"; command immediately returns the job ID:

```

```

Validate the deployment of all components listed in a manifest:

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

\-a | \--api-version API-VERSION

Optional

Target API version for the validation.

Use this flag to override the default API version with the API version of your package.xml file. The default API version is the latest version supported by the CLI.

Type: option

\--async

Optional

Run the command asynchronously.

The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the CLI. To resume watching the validation, run "sf project deploy resume". To check the status of the validation, run "sf project deploy report".

Type: boolean

\--concise

Optional

Show concise output of the validation result.

Type: boolean

\-x | \--manifest MANIFEST

Optional

Full file path for manifest (package.xml) of components to validate for deployment.

All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to validate for deployment.

Type: option

\-d | \--source-dir SOURCE-DIR

Optional

Path to the local source files to validate for deployment.

The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its subdirectories).

If you specify this flag, don’t specify --metadata or --manifest.

Type: option

\--metadata-dir METADATA-DIR

Optional

Root of directory or zip file of metadata formatted files to deploy.

Type: option

\--single-package

Optional

Indicates that the metadata zip file points to a directory structure for a single package.

Type: boolean

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-t | \--tests TESTS

Optional

Apex tests to run when --test-level is RunSpecifiedTests.

If a test name contains a space, enclose it in double quotes.

For multiple test names, use one of the following formats:

\- Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"

\- Separate the test names with spaces: --tests Test1 Test2 "Test With Space"

Type: option

\-l | \--test-level TEST-LEVEL

Optional

Deployment Apex testing level.

Valid values are:

\- RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

\- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default.

\- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

\- RunRelevantTests (Beta) — Runs only tests that are relevant to the files being deployed. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies. For fine-grained control, you can also annotate test classes so that they always run in certain conditions. See "@IsTest Annotation" in the "Apex Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex\_classes\_annotation\_isTest.htm). Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually and is different than the overall coverage percentage.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package and target org. For more information, see "Running Tests in a Deployment" (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_running\_tests.htm) in the "Metadata API Developer Guide".

Type: option

Permissible values are: RunAllTestsInOrg, RunLocalTests, RunSpecifiedTests, RunRelevantTests

Default value: RunLocalTests

\--verbose

Optional

Show verbose output of the validation result.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume watching the validation, run "sf project deploy resume". To check the status of the validation, run "sf project deploy report".

Type: option

Default value: 33 minutes

\-g | \--ignore-warnings

Optional

Ignore warnings and allow a deployment to complete successfully.

If you specify this flag, and a warning occurs, the success status of the deployment is set to true. If you don't specify this flag, and a warning occurs, then the success status is set to false, and the warning is treated like an error.

This flag is useful in a CI environment and your deployment includes destructive changes; if you try to delete a component that doesn't exist in the org, you get a warning. In this case, to ensure that the command returns a success value of true, specify this flag.

Type: boolean

\--coverage-formatters COVERAGE-FORMATTERS

Optional

Format of the code coverage results.

For multiple formatters, repeat the flag for each formatter.

\--coverage-formatters lcov --coverage-formatters clover

Type: option

Permissible values are: clover, cobertura, html-spa, html, json, json-summary, lcovonly, none, teamcity, text, text-summary

\--junit

Optional

Output JUnit test results.

Type: boolean

\--results-dir RESULTS-DIR

Optional

Output directory for code coverage and JUnit results; defaults to the deploy ID.

Type: option

\--purge-on-delete

Optional

Specify that deleted components in the destructive changes manifest file are immediately eligible for deletion rather than being stored in the Recycle Bin.

Type: boolean

\--pre-destructive-changes PRE-DESTRUCTIVE-CHANGES

Optional

File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy

Type: option

\--post-destructive-changes POST-DESTRUCTIVE-CHANGES

Optional

File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy.

Type: option

### Aliases for project deploy validate

```

```

## project generate manifest

Create a project manifest that lists the metadata components you want to deploy or retrieve.

### Description for project generate manifest

Create a manifest from a list of metadata components (--metadata) or from one or more local directories that contain source files (--source-dir). You can specify either of these flags, not both.

Use --type to specify the type of manifest you want to create. The resulting manifest files have specific names, such as the standard package.xml or destructiveChanges.xml to delete metadata. Valid values for this flag, and their respective file names, are:

\* package : package.xml (default)

\* pre : destructiveChangesPre.xml

\* post : destructiveChangesPost.xml

\* destroy : destructiveChanges.xml

See https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_deploy\_deleting\_files.htm for information about these destructive manifest files.

Use --name to specify a custom name for the generated manifest if the pre-defined ones don’t suit your needs. You can specify either --type or --name, but not both.

To include multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --include-packages and --source-dir.

To build a manifest from the metadata in an org, use the --from-org flag. You can combine --from-org with the --metadata flag to include only certain metadata types, or with the --excluded-metadata flag to exclude certain metadata types. When building a manifest from an org, the command makes many concurrent API calls to discover the metadata that exists in the org. To limit the number of concurrent requests, use the SF\_LIST\_METADATA\_BATCH\_SIZE environment variable and set it to a size that works best for your org and environment. If you experience timeouts or inconsistent manifest contents, then setting this environment variable can improve accuracy. However, the command takes longer to run because it sends fewer requests at a time.

### Examples for project generate manifest

Create a manifest for deploying or retrieving all Apex classes and custom objects:

```

```

Create a manifest for deleting the specified Apex class:

```

```

Create a manifest for deploying or retrieving all the metadata components in the specified local directory; name the file myNewManifest.xml:

```

```

Create a manifest from the metadata components in the specified org and include metadata in any unlocked packages:

```

```

Create a manifest from specific metadata types in an org:

```

```

Create a manifest from all metadata components in an org excluding specific metadata types:

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

\-m | \--metadata METADATA

Optional

Names of metadata components to include in the manifest.

Type: option

\-p | \--source-dir SOURCE-DIR

Optional

Paths to the local source files to include in the manifest.

Type: option

\-n | \--name NAME

Optional

Name of a custom manifest file to create.

Type: option

\-t | \--type TYPE

Optional

Type of manifest to create; the type determines the name of the created file.

Type: option

Permissible values are: pre, post, destroy, package

\-c | \--include-packages INCLUDE-PACKAGES

Optional

Package types (managed, unlocked) whose metadata is included in the manifest; by default, metadata in managed and unlocked packages is excluded. Metadata in unmanaged packages is always included.

Type: option

Permissible values are: managed, unlocked

\--excluded-metadata EXCLUDED-METADATA

Optional

Metadata types to exclude when building a manifest from an org. Specify the name of the type, not the name of a specific component.

Type: option

\--from-org FROM-ORG

Optional

Username or alias of the org that contains the metadata components from which to build a manifest.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to save the created manifest.

Type: option

### Aliases for project generate manifest

```

```

## project list ignored

Check your local project package directories for forceignored files.

### Description for project list ignored

When deploying or retrieving metadata between your local project and an org, you can specify the source files you want to exclude with a .forceignore file. The .forceignore file structure mimics the .gitignore structure. Each line in .forceignore specifies a pattern that corresponds to one or more files. The files typically represent metadata components, but can be any files you want to exclude, such as LWC configuration JSON files or tests.

### Examples for project list ignored

List all the files in all package directories that are ignored:

```

```

List all the files in a specific directory that are ignored:

```

```

Check if a particular file is ignored:

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

\-p | \--source-dir SOURCE-DIR

Optional

File or directory of files that the command checks for foreceignored files.

Type: option

### Aliases for project list ignored

```

```

## project reset tracking

Reset local and remote source tracking.

### Description for project reset tracking

WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

Resets local and remote source tracking so that Salesforce CLI no longer registers differences between your local files and those in the org. When you next run 'project deploy preview', Salesforce CLI returns no results, even though conflicts might actually exist. Salesforce CLI then resumes tracking new source changes as usual.

Use the --revision flag to reset source tracking to a specific revision number of an org source member. To get the revision number, query the SourceMember Tooling API object with the 'data soql' command. For example:

sf data query --query "SELECT MemberName, MemberType, RevisionCounter FROM SourceMember" --use-tooling-api --target-org my-scratch

### Examples for project reset tracking

Reset source tracking for the org with alias "my-scratch":

```

```

Reset source tracking to revision number 30 for your default org:

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

\-r | \--revision REVISION

Optional

SourceMember revision counter number to reset to.

Type: option

\-p | \--no-prompt

Optional

Don't prompt for source tracking override confirmation.

Type: boolean

### Aliases for project reset tracking

```

```

## project retrieve preview

Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

### Description for project retrieve preview

You must run this command from within a project.

The command outputs a table that describes what will happen if you run the "sf project retrieve start" command. The table lists the metadata components that will be retrieved and deleted. The table also lists the current conflicts between files in your local project and components in the org. Finally, the table lists the files that won't be retrieved because they're included in your .forceignore file.

If your org allows source tracking, then this command displays potential conflicts between the org and your local project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

### Examples for project retrieve preview

Preview the retrieve of all changes from your default org:

```

```

Preview the retrieve when ignoring any conflicts from an org with alias "my-scratch":

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

\-c | \--ignore-conflicts

Optional

Don't display conflicts in the preview of the retrieval.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--concise

Optional

Show only the changes that will be retrieved; omits files that are forceignored.

Type: boolean

### Aliases for project retrieve preview

```

```

## project retrieve start

Retrieve metadata from an org to your local project.

### Description for project retrieve start

You must run this command from within a project.

Metadata components are retrieved in source format by default. Retrieve them in metadata format by specifying the --target-metadata-dir flag, which retrieves the components into a ZIP file in the specified directory.

If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production orgs, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project retrieve start

Retrieve all remote changes from your default org:

```

```

Retrieve the source files in the "force-app" directory from an org with alias "my-scratch":

```

```

Retrieve all the Apex classes and custom objects whose source is in the "force-app" directory. The list views, layouts, etc, that are associated with the custom objects are also retrieved. Both examples are equivalent:

```

```

```

```

Retrieve all Apex classes that are in all package directories defined in the "sfdx-project.json" file:

```

```

Retrieve a specific Apex class; ignore any conflicts between the local project and org (be careful with this flag, because it will overwrite the Apex class source files in your local project if there are conflicts!):

```

```

Retrieve specific Apex classes that match a pattern; in this example, retrieve Apex classes whose names contain the string "MyApex":

```

```

Retrieve a custom object called ExcitingObject that's in the SBQQ namespace:

```

```

Retrieve all custom objects in the SBQQ namespace by using a wildcard and quotes:

```

```

Retrieve all list views for the Case standard object:

```

```

Retrieve all custom objects and Apex classes found in all defined package directories (both examples are equivalent):

```

```

```

```

Retrieve all metadata components listed in a manifest:

```

```

Retrieve metadata from a package:

```

```

Retrieve metadata from multiple packages, one of which has a space in its name (both examples are equivalent):

```

```

```

```

Retrieve the metadata components listed in the force-app directory, but retrieve them in metadata format into a ZIP file in the "output" directory:

```

```

Retrieve in metadata format and automatically extract the contents into the "output" directory:

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

\-a | \--api-version API-VERSION

Optional

Target API version for the retrieve.

Use this flag to override the default API version, which is the latest version supported the CLI, with the API version in your package.xml file.

Type: option

\-c | \--ignore-conflicts

Optional

Ignore conflicts and retrieve and save files to your local filesystem, even if they overwrite your local changes.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-x | \--manifest MANIFEST

Optional

File path for the manifest (package.xml) that specifies the components to retrieve.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to retrieve. Wildcards (\`\*\`) supported as long as you use quotes, such as \`ApexClass:MyClass\*\`.

Type: option

\-n | \--package-name PACKAGE-NAME

Optional

Package names to retrieve. Use of this flag is for reference only; don't use it to retrieve packaged metadata for development.

The metadata of the supplied package name(s) will be retrieved into a child directory of the project. The name of that child directory matches the name of the package. The retrieved metadata is meant for your reference only, don't add it to a source control system for development and deployment. For package development, retrieve the metadata using a manifest (\`--manifest\` flag) or by targeting a source controlled package directory within your project (\`--source-dir\` flag).

Type: option

\-r | \--output-dir OUTPUT-DIR

Optional

Directory root for the retrieved source files.

The root of the directory structure into which the source files are retrieved.

If the target directory matches one of the package directories in your sfdx-project.json file, the command fails.

Running the command multiple times with the same target adds new files and overwrites existing files.

Type: option

\--single-package

Optional

Indicates that the zip file points to a directory structure for a single package.

Type: boolean

\-d | \--source-dir SOURCE-DIR

Optional

File paths for source to retrieve from the org.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its subdirectories).

Type: option

\-t | \--target-metadata-dir TARGET-METADATA-DIR

Optional

Directory that will contain the retrieved metadata format files or ZIP.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results to the terminal window.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

Type: option

Default value: 33 minutes

\-z | \--unzip

Optional

Extract all files from the retrieved zip file.

Type: boolean

\--zip-file-name ZIP-FILE-NAME

Optional

File name to use for the retrieved zip file.

Type: option

### Aliases for project retrieve start

```

```

## Code Examples

```
$ sf project convert mdapi --root-dir path/to/metadata
```

```
$ sf project convert mdapi --root-dir path/to/metadata --output-dir path/to/outputdir
```

```
force:mdapi:convert
```

```
$ sf project convert source --root-dir path/to/source
```

```
$ sf project convert source --root-dir path/to/source --output-dir path/to/outputdir --package-name 'My Package'
```

## Related Topics

- project convert mdapi (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project convert source (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project convert source-behavior (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project delete source (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project delete tracking (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project deploy cancel (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project deploy pipeline quick (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project deploy pipeline report (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project deploy pipeline resume (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
- project deploy pipeline start (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)
