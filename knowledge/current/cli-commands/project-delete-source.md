---
title: "project delete source"
domain: cli-commands
topic: project-delete-source
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, delete, source, Delete, non-source-tracked, org., Description, Examples, Flags, Aliases]
---

# project delete source

> Delete source from your project and from a non-source-tracked org.

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