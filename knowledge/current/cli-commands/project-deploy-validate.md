---
title: "project deploy validate"
domain: cli-commands
topic: project-deploy-validate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, deploy, validate, Validate, metadata, deployment, without, actually, executing, it., Description, Examples, Flags, Aliases]
---

# project deploy validate

> Validate a metadata deployment without actually executing it.

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