---
title: "Deploying Changes to a Salesforce Org"
domain: daas
topic: deploying-changes-to-a-salesforce-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.072Z
estimatedTokens: 2559
keywords: [Deploying, Changes, Salesforce, Org, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions]
---

# Deploying Changes to a Salesforce Org

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Deploying Changes to a Salesforce Org

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The build.xml file specifies targets to retrieve and deploy. You can set the following parameters for each deploy target.

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the org associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this URL to test.salesforce.com. |
| pollWaitMillis | Optional. Defaults to 10000. The number of milliseconds to wait when polling for results of the deployment. Deployment can succeed even if you stop waiting. |
| checkOnly | Optional. Defaults to false. Set to true to perform a test deployment (validation) of components without saving the components in the target org. A validation enables you to verify the results of tests that would be generated in a deployment, but doesn’t commit any changes. After the validation finishes with passing tests, it might qualify for deployment without rerunning tests. See Deploying a Recent Validation.NoteIf you change a field type from Master-Detail to Lookup or vice versa, the change isn’t supported when using the checkOnly parameter to test a deployment. This change isn’t supported for test deployments to avoid data loss or corruption. If a change that isn’t supported for test deployments is included in the deployment package, the test deployment fails and issues an error.If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes before you deploy to production. Perform a full deployment to another test sandbox. A full deployment includes a validation of the changes as part of the deployment process. |
| maxPoll | Optional. Defaults to 200. The number of times to poll the server for the results of the deploy request. Deployment can succeed even if you stop waiting. |
| deployRoot | Required if zipFile isn’t specified. Specifies the root of the directory tree of files to deploy. You must define a value for either zipFile or deployRoot. |
| zipFile | Required if deployRoot isn’t specified. Specifies the path of the metadata zip file to be deployed. You must define a value for either zipFile or deployRoot. |
| singlePackage | Optional. Defaults to false. Declares that the zipFile or deployRoot parameter points to a directory structure with a single package, as opposed to a set of packages. |
| allowMissingFiles | Optional. Defaults to false. Specifies whether a deploy succeeds even if files that are specified in package.xml are not in the zip file. Do not use this parameter for deployment to production orgs. |
| autoUpdatePackage | Optional. Defaults to false. Specifies whether a deploy continues even if files present in the zip file are not specified in package.xml. Do not use this parameter for deployment to production orgs. |
| ignoreWarnings | Optional. Defaults to false. This setting indicates that a deployment succeeds even if there are warnings (true) or that one or more warnings causes the deployment to fail and roll back (false). If there are errors, as opposed to warnings, the deployment always fails and rolls back. |
| logType | Optional. The debug logging level for running tests. The default is None. Valid options are:NoneDebugonlyDbProfilingCalloutDetail |
| purgeOnDelete | If true, the deleted components in the destructiveChanges.xml manifest file aren't stored in the Recycle Bin. Instead, they become immediately eligible for deletion.This option only works in Developer Edition or sandbox orgs. It doesn’t work in production orgs. |
| rollbackOnError | Optional. Defaults to true. Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever set of actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you are deploying to a production org.NoteIn earlier versions of the Ant Migration Tool (Spring ’14 and earlier), this parameter is ignored in build.xml, and Salesforce behaves as if this parameter is set to true. |
| runAllTests | (Deprecated and available only in API version 33.0 and earlier.) This parameter is optional and defaults to false. Set to true to run all Apex tests after deployment, including tests that originate from installed managed packages.NoteApex tests that run as part of a deployment always run synchronously and serially. |
| runTest | Optional child elements. A list of Apex classes containing tests run after deployment. For more information, see Running a Subset of Tests in a Deployment.To use this option, set testLevel to RunSpecifiedTests. |
| testLevel | Optional. Specifies which tests are run as part of a deployment. The test level is enforced regardless of the types of components that are present in the deployment package. Valid values are:NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial organizations. This test level is the default for development environments.RunSpecifiedTests—Only the tests that you specify in the runTests option are run. Code coverage requirements differ from the default coverage requirements when using this test level. Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and triggers individually and is different than the overall coverage percentage.RunLocalTests—All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.RunAllTestsInOrg—All tests are run. The tests include all tests in your org, including tests of managed packages.If you don’t specify a test level, the default test execution behavior is used. See Running Tests in a Deployment.NoteApex tests that run as part of a deployment always run synchronously and serially.This field is available in API version 34.0 and later. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool ignores files or folders with a name starting with a period (.) or ending with a tilde (~) when deploying files. Some source control systems, such as Subversion, create files or folders with names starting with a period. These files can cause issues during deployment to Salesforce, so the Ant Migration Tool ignores them.

The Ant Migration Tool comes with a sample build.xml file that lists several deployment targets. You want to create your own custom targets using the sample targets as starting points.

-   deployUnpackaged — Deploys unpackaged components specified in the target.
-   deployCode — Deploys the contents of the codepkg package specified in the target.
-   undeployCode — Deletes classes and triggers in the removecodepkg directory specified by the destructiveChanges.xml manifest. This file is similar to package.xml, but lists components to be deleted. For more information, see [Deleting Files from an Organization](atlas.en-us.daas.meta/daas/daas_destructive_changes.htm).
-   deployCodeFailingTest — Deploys code that fails testing requirements, strictly for demonstration purposes.
-   deployCodeCheckOnly — Verifies that the deployment works, but doesn’t deploy any components.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

You can deploy or retrieve up to 10,000 files at once. First-generation managed packages that have passed AppExchange Security Review can contain up to 35,000 files, and second-generation managed packages can contain up to 10,000 files. The maximum size of the deployed or retrieved .zip file is 39 MB. If the files are uncompressed in an unzipped folder, the size limit is 600 MB.

-   If using the Ant Migration Tool to deploy an unzipped folder, all files in the folder are compressed first. The maximum size of uncompressed components in an unzipped folder is 400 MB or less depending on the compression ratio. If the files have a high compression ratio, you can migrate a total of approximately 400 MB because the compressed size would be under 39 MB. However, if the components can't be compressed much, like binary static resources, you can migrate less than 400 MB.
-   Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB, which is the limit for SOAP messages. Base-64 encoding increases the size of the payload, so your compressed payload can't exceed approximately 39 MB before encoding.
-   You can perform a retrieve() call for a big object only if its index is defined. If a big object is created in Setup and doesn’t yet have an index defined, you can’t retrieve it.

## Related Topics

- Deploying a Recent Validation (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_validation.htm)
- Running a Subset of Tests in a Deployment (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_run_specific_tests.htm)
- Running Tests in a
                    Deployment (atlas.en-us.daas.meta/daas/meta_deploy_running_tests.htm)
- Deleting Files from an
          Organization (atlas.en-us.daas.meta/daas/daas_destructive_changes.htm)
