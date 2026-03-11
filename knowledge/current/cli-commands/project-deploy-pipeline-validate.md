---
title: "project deploy pipeline validate"
domain: cli-commands
topic: project-deploy-pipeline-validate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.385Z
keywords: [project, deploy, pipeline, validate, Perform, validate-only, deployment, branch, stage’s, org., Beta, Note, Description, Examples, Flags]
---

# project deploy pipeline validate

> Perform a validate-only deployment from a branch to the pipeline stage’s org.

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