---
title: "Running Tests in a Deployment"
domain: metadata-api
topic: running-tests-in-a-deployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.716Z
estimatedTokens: 826
keywords: [Running, Tests, Deployment, test, level, specified, deployment, options, default, execution, behavior, depends, contents, package., deploying, production, tests, except, those, originate]
---

# Running Tests in a Deployment

> When no test level is specified in the deployment options, the
        default test execution behavior depends on the contents of your deployment package. When
        deploying to production, all tests, except those that originate from managed packages, are
        executed if your deployment packa

# Running Tests in a Deployment

## Default Test Execution in Production

When no test level is specified in the deployment options, the default test execution behavior depends on the contents of your deployment package. When deploying to production, all tests, except those that originate from managed packages, are executed if your deployment package contains Apex classes or triggers. If your package doesn’t contain Apex components, no tests are run by default.

In API version 33.0 and earlier, tests were run for components that required tests, such as custom objects, and not only for Apex components. For example, if your package contains a custom object, all tests are run in API version 33.0 and earlier. In contrast, starting with API version 34.0, no tests are run for this package. The API version corresponds to the version of your API client or the version of the tool you’re using (Ant Migration Tool).

You can run tests for a deployment of non-Apex components. You can override the default test execution behavior by setting the test level in your deployment options. Test levels are enforced regardless of the types of components present in your deployment package. We recommend that you run all local tests in your development environment, such as sandbox, before deploying to production. Running tests in your development environment reduces the number of tests needed to run in a production deployment.

## Default Test Execution in Production for API Version 33.0 and Earlier

For deployment to a production organization, all local tests in your organization are run by default. Tests that originate from installed managed packages aren’t run by default. If any test fails, the entire deployment is rolled back.

If the deployment includes components for the following metadata types, all local tests are run.

-   ApexClass
-   ApexComponent
-   ApexPage
-   ApexTrigger
-   ArticleType
-   BaseSharingRule
-   CriteriaBasedSharingRule
-   CustomField
-   CustomObject
-   DataCategoryGroup
-   Flow
-   InstalledPackage
-   NamedFilter
-   OwnerSharingRule
-   PermissionSet
-   Profile
-   Queue
-   RecordType
-   RemoteSiteSetting
-   Role
-   SharingReason
-   Territory
-   Validation Rules
-   Workflow

For example, no tests are run for the following deployments:

-   1 CustomApplication component
-   100 Report components and 40 Dashboard components

But all local tests are run for any of the following example deployments, because they include at least one component from the list above:

-   1 CustomField component
-   1 ApexComponent component and 1 ApexClass component
-   5 CustomField components and 1 ApexPage component
-   100 Report components, 40 Dashboard components, and 1 CustomField component

#### See Also

-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")

-   [Run Relevant Apex Tests in a Deployment (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm "Use the RunRelevantTests (beta) test level to run only the Apex tests that are relevant to your deployment. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies.")

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- Run Relevant Apex Tests in a Deployment (Beta) (atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm)
