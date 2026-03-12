---
title: "Release Your App to Production"
domain: sfdx-dev
topic: release-your-app-to-production
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.100Z
estimatedTokens: 169
keywords: [Release, App, Production, Now, tests, passed, Full, sandbox, you’re, ready, deploy]
---

# Release Your App to Production

> Now that all your tests have passed in the Full sandbox, you’re ready to deploy to
    production.

# Release Your App to Production

Now that all your tests have passed in the Full sandbox, you’re ready to deploy to production.

1.  In your deployment run list, complete any pre-deployment tasks.
2.  Authorize your production org.
3.  Set up the quick deploy by validating the deployment.

    ```

    ```

    This command returns a job ID that you reference in the quick deploy.

4.  After the tests are run, verify that all the Apex tests have passed. Be sure that the tests cover at least 75% of the code being deployed.
5.  Run the quick deploy:

    ```

    ```

6.  Open the production org, then perform any post-deployment tasks listed in the deployment run list.

## Code Examples

```
sf project deploy validate --source-dir force-app --target-org prod-org --test-level RunLocalTests
```

```
sf project deploy quick --target-org prod-org --job-id jobID
```
