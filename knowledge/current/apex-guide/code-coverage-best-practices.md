---
title: "Code Coverage Best Practices"
domain: apex-guide
topic: code-coverage-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.789Z
estimatedTokens: 1465
keywords: [Code, Coverage, Best, Practices, Consider, tips, General, Why, Numbers, Differ, Sandbox, Production, Recommended, Process, Matching]
---

# Code Coverage Best Practices

> Consider the following code coverage tips and best practices.

# Code Coverage Best Practices

Consider the following code coverage tips and best practices.

## Code Coverage General Tips

-   Run tests to refresh code coverage numbers. Code coverage numbers aren't refreshed when updates are made to Apex code in the organization unless tests are rerun.
-   If the organization has been updated since the last test run, the code coverage estimate can be incorrect. Rerun Apex tests to get a correct estimate.
-   The overall code coverage percentage in your organization doesn’t include code coverage from package-related tests. The only exception is when package tests cause your triggers to fire. For more information, see [Managed and Unlocked Package Tests](#package_tests).
-   Coverage is based on the total number of code lines in the organization. Adding or deleting lines of code changes the coverage percentage. For example, let's say an organization has 50 lines of code covered by test methods. If you add a trigger that has 50 lines of code not covered by tests, the code coverage percentage drops from 100% to 50%. The trigger increases the total code lines in the organization from 50 to 100, of which only 50 are covered by tests.

## Why Code Coverage Numbers Differ Between Sandbox and Production

When Apex is deployed to production or uploaded as part of a package to the Salesforce AppExchange, Salesforce runs local tests in the destination organization. Sandbox and production environments often don’t contain the same data and metadata, so the code coverage results don’t always match. If code coverage is less than 75% in production, increase the coverage to be able to deploy or upload your code. The following are common causes for the discrepancies in code coverage numbers between your development or sandbox environment and production. This information can help you troubleshoot and reconcile those differences.

Test Failures

If the test results in one environment are different, the overall code coverage percentage doesn’t match. Before comparing code coverage numbers between sandbox and production, make sure that all tests for the code that you’re deploying or packaging pass in your organization first. The tests that contribute to the code coverage calculation must all pass before deployment or a package upload.

Data Dependencies

If your tests access organization data by using the @IsTest(SeeAllData=true) annotation, the test results can differ depending on which data is available in the organization. If the records referenced in a test don’t exist or have changed, the test fails or different code paths are executed in the Apex methods. Modify tests so that they create test data instead of accessing organization data.

Metadata Dependencies

Changes in the metadata, such as changes in the user’s profile settings, can cause tests to fail or execute different code paths. Make sure that the metadata in sandbox and production match, or ensure that the metadata changes aren’t the cause of different test execution behavior.

Managed and Unlocked Package Tests

Code coverage that is computed after you run all Apex tests in the user interface, such as the Developer Console, can differ from code coverage obtained in a deployment. If you run all tests, including package-related tests, in the user interface, the overall code coverage in your organization doesn’t include coverage for packaging code. Although package-related tests cover lines of code in managed or unlocked packages, this coverage isn’t part of the organization’s code coverage calculation as total lines and covered lines. In contrast, the code coverage computed in a deployment after running all tests through the RunAllTestsInOrg test level includes coverage of package-related code. If you’re running package tests in a deployment through the RunAllTestsInOrg test level, we recommend that you run this deployment in a sandbox first or perform a validation deployment to verify code coverage.

Deployment Resulting in Overall Coverage Lower Than 75%

When deploying new components that have 100% coverage to production, the deployment fails if the average coverage between the new and existing code doesn’t meet the 75% threshold. If a test run in the destination organization returns a coverage result of less than 75%, modify the existing test methods or write additional test methods to raise the code coverage over 75%. Deploy the modified or new test methods separately or with your new code that has 100% coverage.

Code Coverage in Production Dropping Below 75%

Sometimes the overall coverage in production drops below 75%, even though it was at least 75% when the components were deployed from sandbox. Test methods that have dependencies on the organization’s data and metadata can cause a drop in code coverage. If the data and metadata have changed sufficiently to alter the result of dependent test methods, some methods can fail or behave differently. In that case, certain lines are no longer covered.

## Recommended Process for Matching Code Coverage Numbers for Production

-   Use a Full Sandbox as the staging sandbox environment for production deployments. A Full Sandbox mimics the metadata and data in production and helps reduce differences in code coverage numbers between the two environments.
-   To reduce dependencies on data in sandbox and production organizations, use test data in your Apex tests.
-   If a deployment to production fails due to insufficient code coverage, write more tests to raise the overall code coverage to the highest possible coverage or 100%. Retry the deployment.
-   If a deployment to production fails even after you raise code coverage numbers in sandbox, run local tests from your production organization. Identify the classes with less than 75% coverage. Write additional tests for these classes in sandbox to raise the code coverage.
