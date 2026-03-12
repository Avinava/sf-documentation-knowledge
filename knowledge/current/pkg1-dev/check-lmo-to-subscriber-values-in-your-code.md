---
title: "Check LMO-to-Subscriber Values in Your Code"
domain: pkg1-dev
topic: check-lmo-to-subscriber-values-in-your-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.342Z
estimatedTokens: 192
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

#### See Also

-   [*Apex Reference Guide*: FeatureManagement Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_System_FeatureManagement.htm "Apex Reference Guide: FeatureManagement Class - HTML (New Window)")
