---
title: "Namespace-Based Visibility for Apex Classes in Unlocked Packages"
domain: sfdx-dev
topic: namespace-based-visibility-for-apex-classes-in-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.723Z
estimatedTokens: 433
keywords: [Namespace-Based, Visibility, Apex, Classes, Unlocked, Packages, @namespaceAccessible, package, annotation, interfaces, defined, aren’t, accessible, they, share]
---

# Namespace-Based Visibility for Apex Classes in Unlocked Packages

> The @namespaceAccessible makes public Apex in a
    package available to other packages that use the same namespace. Without this annotation, Apex
    classes, methods, interfaces, and properties defined in an unlocked package aren’t accessible to
    the other packages with which they share a namespace. Apex that is declared global is always
    available across all namespaces, and needs no annotation.

# Namespace-Based Visibility for Apex Classes in Unlocked Packages

The @namespaceAccessible makes public Apex in a package available to other packages that use the same namespace. Without this annotation, Apex classes, methods, interfaces, and properties defined in an unlocked package aren’t accessible to the other packages with which they share a namespace. Apex that is declared global is always available across all namespaces, and needs no annotation.

Considerations for Apex Accessibility Across Packages

-   A Lightning component outside the package can access a public Apex method installed from a no-namespace unlocked package. The component can be installed from another package or created in the org. For accessing Apex methods, a no-namespace unlocked package is treated the same as an unmanaged package.
-   You can't use the @namespaceAccessible annotation for an @AuraEnabled Apex method.
-   You can add or remove the @namespaceAccessible annotation at any time, even on managed and released Apex code. Make sure that you don’t have dependent packages relying on the functionality of the annotation before adding or removing it.
-   When adding or removing @namespaceAccessible Apex from a package, consider the impact to users with installed versions of other packages that reference this package’s annotation. Before pushing a package upgrade, ensure that no user is running a package version that would fail to fully compile when the upgrade is pushed.

This example shows an Apex class marked with the @namespaceAccessible annotation. The class is accessible to other packages within the same namespace. The first constructor is also visible within the namespace, but the second constructor isn’t.

```

```

## Code Examples

```apex
// A namespace-visible Apex class
@namespaceAccessible
public class MyClass {
    private Boolean bypassFLS;

    // A namespace-visible constructor that only allows secure use
    @namespaceAccessible
    public MyClass() {
        bypassFLS = false;
    }

    // A package private constructor that allows use in trusted contexts,
    // but only internal to the package
    public MyClass (Boolean bypassFLS) {
        this.bypassFLS = bypassFLS;
    }
    @namespaceAccessible
    protected Boolean getBypassFLS() {
       return bypassFLS;
    }
}
```
