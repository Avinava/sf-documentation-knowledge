---
title: "Testing Versioned Behavior in Apex Code"
domain: apex-guide
topic: testing-versioned-behavior-in-apex-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.305Z
keywords: [Testing, Versioned, Behavior, Apex, Code]
---

# Testing Versioned Behavior in Apex Code

# Testing Versioned Behavior in Apex Code

When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.

This sample shows a trigger with different behavior for different package versions. For more information about defining different behavior for package versions, see [Version Apex Behavior](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. With this conditional logic, you can support existing behavior in classes and triggers in previous package versions while evolving the code.").

```

```

The following test class uses the runAs method to verify the trigger’s behavior with and without a specific version:

```

```