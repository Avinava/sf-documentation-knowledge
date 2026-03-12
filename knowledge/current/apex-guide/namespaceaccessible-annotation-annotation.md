---
title: "NamespaceAccessible Annotation Annotation"
domain: apex-guide
topic: namespaceaccessible-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.447Z
estimatedTokens: 902
keywords: [NamespaceAccessible, Annotation, @NamespaceAccessible, makes, Apex, package, packages, same, namespace., Without, annotation, classes, interfaces, abstract, defined, 2GP, aren’t, accessible, Versioned, Behavior]
---

# NamespaceAccessible Annotation Annotation

> The @NamespaceAccessible makes public Apex in a
            package available to other packages that use the same namespace. Without this
            annotation, Apex classes, methods, interfaces, properties, and abstract classes defined
            in a 2GP package aren’t accessible to the other pa

# NamespaceAccessible Annotation Annotation

The @NamespaceAccessible makes public Apex in a package available to other packages that use the same namespace. Without this annotation, Apex classes, methods, interfaces, properties, and abstract classes defined in a 2GP package aren’t accessible to the other packages with which they share a namespace. Apex that is declared global is always available across all namespaces, and needs no annotation.

For more information on 2GP managed packages, see [Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp.htm "HTML (New Window)") in Salesforce DX Developer Guide.

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

## Versioned Behavior Changes

In API version 47.0 and later, @NamespaceAccessible isn’t allowed on an entity marked with @AuraEnabled. Therefore, an Aura or Lightning web component installed from a package can’t call an Apex method from another package, even if both packages are in the same namespace. However, an @AuraEnabled public method from one package can call a @NamespaceAccessible public method from another package in the same namespace.

Therefore, this behavior isn’t allowed.

```

```

But this behavior is allowed.

```

```

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @NamespaceAccessible. For accessibility considerations, see [Considerations for Apex Acessibility Across Packages](#considerations_namespaceAccessible_p). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm "JsonAccess Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm "ReadOnly Annotation Annotation")

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

```apex
// In Package1 in the Acme namespace
public with sharing class MyController {
    // Stacking these annotations isn't allowed
    @AuraEnabled
    @NamespaceAccessible
    public static void myMethod( ){
        // ...
    }
}
```

```apex
// In Package1 in the Acme namespace
public with sharing class Service {
    @NamespaceAccessible
    public static void doSomething() {
        // ...
    }
}

// In Package2 in the Acme namespace
public with sharing class MyController {
    // Can call the @NamespaceAccessible method
    @AuraEnabled
    public static void myMethod( ){
        Service.doSomething();
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm)
