---
title: "Create and Register Your Namespace"
domain: sfdx-dev
topic: create-and-register-your-namespace
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.760Z
estimatedTokens: 307
namespace: With
keywords: [Register, unlocked, packages, share, multiple, Since, sharing, code, much, easier, package, shares, recommend, namepaces, namespaced]
---

# Create and Register Your Namespace

> With unlocked packages, you can share a single namespace with multiple packages. Since
    sharing of code is much easier if your package shares the same namespace, we recommend that if
    use namepaces, you use a single namespace for your namespaced unlocked packages.

**Namespace:** `With`

# Create and Register Your Namespace

With unlocked packages, you can share a single namespace with multiple packages. Since sharing of code is much easier if your package shares the same namespace, we recommend that if use namepaces, you use a single namespace for your namespaced unlocked packages.

To create a namespace:

1.  Sign up for a new Developer Edition org.
2.  In Setup, enter Package Manager in the Quick Find box, and select **Package Manager**.
3.  In Namespace Settings, click **Edit**.
4.  Enter a namespace and select **Check Availability**.
5.  (Optional) Select a package to associate with this namespace , or select **None**, then click **Review**.
6.  Review your selections, and then click **Save**.

To register a namespace:

1.  To link the namespace that you created with your Dev Hub, use Namespace Registry. See [Link a Namespace to a Dev Hub for details](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm "HTML (New Window)").
2.  In the sfdx-project.json file, specify your namespace using the namespace attribute. When you create a new unlocked package, the package is associated with the namespace specified in the sfdx-project.json file.
