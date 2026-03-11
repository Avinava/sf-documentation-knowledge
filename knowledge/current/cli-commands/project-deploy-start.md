---
title: "project deploy start"
domain: cli-commands
topic: project-deploy-start
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, deploy, start, Deploy, metadata, org, local, project., Description, Examples, Flags, Aliases]
---

# project deploy start

> Deploy metadata to an org from your local project.

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