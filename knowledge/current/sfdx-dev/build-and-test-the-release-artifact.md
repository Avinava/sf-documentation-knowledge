---
title: "Build and Test the Release Artifact"
domain: sfdx-dev
topic: build-and-test-the-release-artifact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.106Z
estimatedTokens: 213
keywords: [Build, Test, Release, Artifact, team, finished, development, tasks, transition, phase, integrate, changes, Developer, Pro, sandbox]
---

# Build and Test the Release Artifact

> After your team has finished its development tasks, transition to the build release
  phase to integrate your changes in a Developer Pro sandbox. Then build the release
  artifact.

# Build and Test the Release Artifact

After your team has finished its development tasks, transition to the build release phase to integrate your changes in a Developer Pro sandbox. Then build the release artifact.

Here are the high-level steps in the work flow to create the release artifact.

1.  Pull the changes from the repo so your local project contains all the changes your team has made.
2.  Authorize the Developer Pro sandbox.
3.  Run the deploy command that mimics what you’ll deploy to production, for example:

    ```

    ```

4.  Open the sandbox.
5.  Perform testing.
6.  If the testing passes, continue to the test release phase where you deploy the release artifact to the partial sandbox. Then perform user-acceptance testing.

After the testing passes, move to the release phase and perform regression tests in the Full sandbox.

## Code Examples

```
sf project source deploy --manifest manifest/package.xml --target-org dev-pro-sandbox \
--test-level RunSpecifiedTests --tests TestMyCode
```
