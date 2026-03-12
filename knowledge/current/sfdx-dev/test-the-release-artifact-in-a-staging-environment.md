---
title: "Test the Release Artifact in a Staging Environment"
domain: sfdx-dev
topic: test-the-release-artifact-in-a-staging-environment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.103Z
estimatedTokens: 358
keywords: [Test, Release, Artifact, Staging, Environment, Stage, changes, run, regression, tests, Full, sandbox]
---

# Test the Release Artifact in a Staging Environment

> Stage the changes and run regression tests in a Full
        sandbox.

# Test the Release Artifact in a Staging Environment

Stage the changes and run regression tests in a Full sandbox.

After you have made all your changes based on the integration testing, the next step is to stage the changes in a Full sandbox. The process of deploying changes to the Full sandbox is similar to the process you used to deploy changes to your Developer Pro sandbox. This phase includes regression testing and mimics how you release the changes to production.

These steps provide the high-level work flow.

1.  Authorize the Full sandbox.
2.  (Optional) If you made any changes based on your testing in the Developer Pro sandbox, create a release artifact (.zip). If not, use the existing release artifact.
3.  To validate the deployment without saving the components in the target org, run all local (regression) tests. A validation enables you to verify the results of tests that would be executed during a deployment, but doesn’t commit any changes.

    ```

    ```

4.  Test the actual production deployment steps in the staging sandbox. Set up the same quick deploy that you plan to execute against the production org.

    ```

    ```

    This command returns a job ID that you reference in the quick deploy.

5.  Next, test the quick deploy using the job ID returned in the previous step.

    ```

    ```


After you validate a deployment, you have 10 days to perform the quick deployment to production.

## Code Examples

```
sf project deploy validate --manifest manifest/package.xml --target-org full-sandbox --test-level RunLocalTests
```

```
sf project deploy validate --manifest manifest/package.xml --target-org full-sandbox --test-level RunSpecifiedTests
```

```
sf project deploy quick --target-org full-sandbox --job-id jobID
```
