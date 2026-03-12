---
title: "Understanding Namespaces"
domain: sfdx-dev
topic: understanding-namespaces
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.832Z
estimatedTokens: 900
namespace: With
keywords: [Understanding, Namespaces, 1-15, character, alphanumeric, identifier, distinguishes, package, contents, packages, org]
---

# Understanding Namespaces

> A namespace is a 1-15 character alphanumeric identifier that distinguishes your package
    and its contents from other packages in your org.

**Namespace:** `With`

# Understanding Namespaces

A namespace is a 1-15 character alphanumeric identifier that distinguishes your package and its contents from other packages in your org.

When you specify a package namespace, every component added to a package has the namespace prefixed to the component API name. Let’s say you have a custom object called Insurance\_Agent with the API name, Insurance\_Agent\_\_c. If you add this component to a package associated with the Acme namespace, the API name becomes Acme\_\_Insurance\_Agent\_\_c.

You can choose to create unlocked packages with or without a specific namespace. A namespace is assigned to a package at the time that it’s created and can’t be changed.

| Use No-Namespace Packages If | Use Namespace Packages If |
| --- | --- |
| You want to migrate metadata from your org’s monolith of unpackaged metadata to unlocked packages. Creating a no-namespace package gives you more control over how you organize and distribute parts of an application. | You’re new to packaging and you’re adopting packages in several stages. Using a namespace prefix such as Acme__ can help you identify what’s packaged and what’s still unpackaged metadata in your production orgs |
| You want to retain the API name of previously unpackaged metadata elements. | You have more than one development team. A namespace can ensure your API names don’t collide with another team.In general, working with a single namespace is easier, and you can easily share code across packages that share a namespace. |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

When creating a namespace, use something that’s useful and informative to users. However, don’t name a namespace after a person (for example, by using a person's name, nickname, or private information).

When you work with namespaces, keep these considerations in mind.

-   You can develop more than one unlocked package with the same namespace but you can associate each package with only a single namespace.
-   If you work with more than one namespace, we recommend that you set up one project for each namespace.
-   If you have unlocked packages and managed packages in the same namespace, make sure to [enable debug logging at the namespace level](https://help.salesforce.com/s/articleView?id=xcloud.code_add_users_debug_log.htm&language=en_US) so that you can capture logs from Apex classes across packages.

-   **[Create and Register Your Namespace](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_namespace.htm)**
    With unlocked packages, you can share a single namespace with multiple packages. Since sharing of code is much easier if your package shares the same namespace, we recommend that if use namepaces, you use a single namespace for your namespaced unlocked packages.
-   **[Avoid Namespace Collisions](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_namespace_collisions.htm)**
    Namespaces impact the combination of package types you can install in an org.
-   **[Namespace-Based Visibility for Apex Classes in Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm)**
    The @namespaceAccessible makes public Apex in a package available to other packages that use the same namespace. Without this annotation, Apex classes, methods, interfaces, and properties defined in an unlocked package aren’t accessible to the other packages with which they share a namespace. Apex that is declared global is always available across all namespaces, and needs no annotation.

## Related Topics

- Create and Register Your Namespace (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_namespace.htm)
- Avoid Namespace Collisions (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_namespace_collisions.htm)
- Namespace-Based Visibility for Apex Classes in Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm)
