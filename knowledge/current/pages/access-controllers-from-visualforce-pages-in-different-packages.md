---
title: "Access Controllers From Visualforce Pages in Different Packages"
domain: pages
topic: access-controllers-from-visualforce-pages-in-different-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.890Z
estimatedTokens: 297
keywords: [Access, Controllers, Visualforce, Pages, Different, Packages, Apex, controller, package, @namespaceAccessible, annotation, custom, first-generation, packaging, develop]
---

# Access Controllers From Visualforce Pages in Different Packages

> To access an Apex controller from a Visualforce page that is in a different package,
        use the @namespaceAccessible Apex annotation in your
        custom controller class. In first-generation packaging, you can develop only one managed
        package with a given namespace. In second-generation packaging, you can develop more than
        one managed (or unlocked) package with the same namespace. By default, Visualforce pages
        installed in a package can't call a public Apex method from an Apex class in another
        package. This is true even if both packages are in the same namespace.

# Access Controllers From Visualforce Pages in Different Packages

To access an Apex controller from a Visualforce page that is in a different package, use the @namespaceAccessible Apex annotation in your custom controller class. In first-generation packaging, you can develop only one managed package with a given namespace. In second-generation packaging, you can develop more than one managed (or unlocked) package with the same namespace. By default, Visualforce pages installed in a package can't call a public Apex method from an Apex class in another package. This is true even if both packages are in the same namespace.

Here’s an example of how to include the @namespaceAccessible annotation in your Apex code.

```

```

First, add the annotation above the controller, which makes it visible from across the namespace in different packages. You must annotate the controller so that any methods you add to the annotation are also visible. Then, for every method that you want visible across the namespace, add the @namespaceAccessible annotation before the method. Use the annotation only for methods that you want visible outside of your package, but within the same namespace.

## Code Examples

```apex
@namespaceAccessible
public virtual class NsController {
    private String message;
    @namespaceAccessible
    public NsController() {
        this.message = 'default'; // init to non-blank value
    }
    @namespaceAccessible
    public virtual String getMessage() {
       return this.message;
    }
    @namespaceAccessible
    public virtual void setMessage(String msg) {
        this.message = msg;
    }
}
```
