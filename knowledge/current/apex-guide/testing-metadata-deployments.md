---
title: "Testing Metadata Deployments"
domain: apex-guide
topic: testing-metadata-deployments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.739Z
estimatedTokens: 263
keywords: [Testing, Metadata, Deployments, Apex, code, accesses, properly, tested]
---

# Testing Metadata Deployments

> Apex code that accesses metadata must be properly tested.

# Testing Metadata Deployments

Apex code that accesses metadata must be properly tested.

To provide Apex test coverage for metadata deployments, write tests that verify both the set up of the deployment request and handling of the deployment results.

Tests for deployment request code verify the metadata components and component values that get created and assert that the DeployContainer contains exactly what needs to be deployed.

Tests for deployment result code verify that your DeployCallback handles expected and unexpected results. Your DeployCallback is normally called by Salesforce as part of the asynchronous deployment process. Therefore, to test your callback outside of the deployment process, create tests that use your callback class directly. You also must create test DeployResults and DeployCallbackContext instances to test your DeployCallback.handleResults() method.

When creating a test instance of DeployCallbackContext, subclass DeployCallbackContext and provide your own implementation of getCallbackJobId().

```

```

## Code Examples

```apex
// DeployCallbackContext subclass for testing that returns myJobId
public class TestingDeployCallbackContext extends Metadata.DeployCallbackContext {
  private Id myJobId = '000000000000000000'; // replace value with a job ID that you can use for testing
  public override Id getCallbackJobId() {
    return myJobId;
  }
}
```
