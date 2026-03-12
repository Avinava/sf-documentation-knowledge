---
title: "Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages"
domain: pkg2-dev
topic: namespace-based-visibility-for-apex-classes-in-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.097Z
estimatedTokens: 695
keywords: [Namespace-Based, Visibility, Apex, Classes, Second-Generation, Managed, Packages, @NamespaceAccessible, package, annotation, interfaces, defined, aren’t, accessible, they]
---

# Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages

> The @NamespaceAccessible makes public Apex in
        a package available to other packages that use the same namespace. Without this annotation,
        Apex classes, methods, interfaces, and properties defined in a second-generation managed
        package aren’t accessible to the other packages with which they share a namespace. Apex that
        is declared global is always available across all namespaces, and needs no
        annotation.

# Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages

The @NamespaceAccessible makes public Apex in a package available to other packages that use the same namespace. Without this annotation, Apex classes, methods, interfaces, and properties defined in a second-generation managed package aren’t accessible to the other packages with which they share a namespace. Apex that is declared global is always available across all namespaces, and needs no annotation.

Considerations for Apex Accessibility Across Packages

-   You can’t use the @NamespaceAccessible annotation for an @AuraEnabled Apex method or an @InvocableMethod Apex method.
-   You can add or remove the @NamespaceAccessible annotation at any time, even on managed and released Apex code. Make sure that you don’t have dependent packages relying on the functionality of the annotation before adding or removing it.
-   When adding or removing @NamespaceAccessible Apex from a package, consider the impact to customers with installed versions of other packages that reference this package’s annotation. Before pushing a package upgrade, ensure that no customer is running a package version that would fail to fully compile when the upgrade is pushed.
-   If a public interface is declared as @NamespaceAccessible, then all interface members inherit the annotation. Individual interface members can’t be annotated with @NamespaceAccessible.
-   If a public or protected variable or method is declared as @NamespaceAccessible, its defining class must be either global or public with the @NamespaceAccessible annotation.
-   If a public or protected inner class is declared as @NamespaceAccessible, its enclosing class must be either global or public with the @NamespaceAccessible annotation.

This example shows an Apex class marked with the @NamespaceAccessible annotation. The class is accessible to other packages within the same namespace. The first constructor is also visible within the namespace, but the second constructor isn’t.

```

```

#### See Also

-   [Namespaces for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_namespaces.htm "Namespaces for Second-Generation Managed Packages - HTML (New Window)")

-   [Create and Register Your Namespace for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "Create and Register Your Namespace for Second-Generation Managed Packages - HTML (New Window)")

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")

## Code Examples

```apex
// A namespace-visible Apex class
@NamespaceAccessible
public class MyClass {
    private Boolean bypassFLS;

    // A namespace-visible constructor that only allows secure use
    @NamespaceAccessible
    public MyClass() {
        bypassFLS = false;
    }

    // A package private constructor that allows use in trusted contexts,
    // but only internal to the package
    public MyClass (Boolean bypassFLS) {
        this.bypassFLS = bypassFLS;
    }
    @NamespaceAccessible
    protected Boolean getBypassFLS() {
       return bypassFLS;
    }
}
```
