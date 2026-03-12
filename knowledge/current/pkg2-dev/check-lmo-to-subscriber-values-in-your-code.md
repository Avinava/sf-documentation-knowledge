---
title: "Check LMO-to-Subscriber Values in Your Code"
domain: pkg2-dev
topic: check-lmo-to-subscriber-values-in-your-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.134Z
estimatedTokens: 128
keywords: [Check, LMO-to-Subscriber, Code, feature, you’d, any, custom]
---

# Check LMO-to-Subscriber Values in Your Code

> You can reference feature parameters in your code, just like you’d reference any other
  custom object.

# Check LMO-to-Subscriber Values in Your Code

You can reference feature parameters in your code, just like you’d reference any other custom object.

Use these Apex methods with LMO-to-subscriber feature parameters to check values in your subscriber’s org.

-   System.FeatureManagement.checkPackageBooleanValue('YourBooleanFeatureParameter');
-   System.FeatureManagement.checkPackageDateValue('YourDateFeatureParameter');
-   System.FeatureManagement.checkPackageIntegerValue('YourIntegerFeatureParameter');
