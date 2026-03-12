---
title: "Create and Register Your Namespace for Second-Generation Managed Packages"
domain: pkg2-dev
topic: create-and-register-your-namespace-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.018Z
estimatedTokens: 497
keywords: [Register, Second-Generation, Managed, Packages, packaging, 2GP, share, multiple, Since, sharing, code, much, easier, package, shares]
---

# Create and Register Your Namespace for Second-Generation Managed Packages

> With second-generation managed packaging (managed 2GP), you can share a single
    namespace with multiple packages. Since sharing of code is much easier if your package shares
    the same namespace, we recommend that you use a single namespace for all of your managed 2GP
    packages.

# Create and Register Your Namespace for Second-Generation Managed Packages

With second-generation managed packaging (managed 2GP), you can share a single namespace with multiple packages. Since sharing of code is much easier if your package shares the same namespace, we recommend that you use a single namespace for all of your managed 2GP packages.

To create a namespace:

1.  Sign up for a new Developer Edition org.
2.  In Setup, enter Package Manager in the Quick Find box, and select **Package Manager**.
3.  In Namespace Settings, click **Edit**.
4.  Enter a namespace and select **Check Availability**.
5.  (Optional) Select a package to associate with this namespace , or select **None**, then click **Review**.
6.  Review your selections, and then click **Save**.

To register a namespace:

1.  To link the namespace that you created with your Dev Hub, use Namespace Registry. See [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm) for details.
2.  In the sfdx-project.json file, specify your namespace using the namespace attribute. When you create a new 2GP package, the package is associated with the namespace specified in the sfdx-project.json file.

#### See Also

-   [Namespaces for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm "Namespaces for Second-Generation Managed Packages - HTML (New Window)")

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")

-   [Avoid Namespace Collisions in Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_collisions.htm "Avoid Namespace Collisions in Second-Generation Managed Packages - HTML (New Window)")
