---
title: "SandboxPostCopy Example Implementation"
domain: apex-reference
topic: sandboxpostcopy-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.696Z
keywords: [SandboxPostCopy, Example, Implementation, These, examples, show, simple, implementation, interface, test, implementation., System.Test.testSandboxPostCopyScript, method., Important]
---

# SandboxPostCopy Example Implementation

> These examples show a simple implementation of the SandboxPostCopy interface and a test
    for that implementation. To test your SandboxPostCopy implementation, use the System.Test.testSandboxPostCopyScript() method.

## SandboxPostCopy Example Implementation

These examples show a simple implementation of the SandboxPostCopy interface and a test for that implementation. To test your SandboxPostCopy implementation, use the System.Test.testSandboxPostCopyScript() method.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The SandboxPostCopy Apex class is executed at the end of the sandbox copy using a special Automated Process user that isn’t visible within the org. This user doesn’t have access to all objects and features; therefore, the Apex script can’t access all objects and features. If the script fails, run the script after sandbox activation as a user with appropriate permissions.

This example implements the System.SandboxPostCopy interface.

```

```

The following example tests the implementation using the System.Test.testSandboxPostCopyScript() method. This method takes four parameters: a reference to a class that implements the SandboxPostCopy interface, and the three fields on the context object that you pass to the runApexClass(context) method. An overload on the method takes an optional Boolean parameter to indicate if the test must be performed as the Automated Process user.

```

```

For more information on testing, see [Testing Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing.htm).