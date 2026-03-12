---
title: "Namespaces for Second-Generation Managed Packages"
domain: pkg2-dev
topic: namespaces-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.120Z
estimatedTokens: 677
keywords: [Namespaces, Second-Generation, Managed, Packages, 1–15, character, alphanumeric, identifier, distinguishes, package, contents, customer’s, org, assigned, 2GP]
---

# Namespaces for Second-Generation Managed Packages

> A namespace is a 1–15 character alphanumeric identifier that distinguishes your package
    and its contents from other packages in your customer’s org. A namespace is assigned to a
    second-generation managed package (managed 2GP) at the time that it’s created, and can’t be
    changed.

# Namespaces for Second-Generation Managed Packages

A namespace is a 1–15 character alphanumeric identifier that distinguishes your package and its contents from other packages in your customer’s org. A namespace is assigned to a second-generation managed package (managed 2GP) at the time that it’s created, and can’t be changed.

When you specify a package namespace, every component added to a package has the namespace prefixed to the component API name. Let’s say you have a custom object called Insurance\_Agent with the API name, Insurance\_Agent\_\_c. If you add this component to a package associated with the Acme namespace, the API name becomes Acme\_\_Insurance\_Agent\_\_c.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

#### Important

When creating a namespace, use something that’s useful and informative to users. However, don’t name a namespace after a person (for example, by using a person's name, nickname, or private information).

When you work with namespaces, keep these considerations in mind.

-   You can develop more than one managed 2GP package and associate the packages with the same namespace. But a single managed 2GP package can't be associated with more than one namespace.
-   If you work with more than one namespace, we recommend that you set up one project for each namespace.
-   It's beneficial for managed 2GP packages to share the same namespace, but it's not required. Carefully consider your package and namespace strategy. After a namespace is associated with a managed 2GP, the association can't be changed.
-   There are scenarios where you may prefer to keep a managed 2GP package isolated from other managed 2GP packages you're developing. For example, if you’re developing a product that you intend to sell or spin off, having a unique namespace for that package enables you to transfer the namespace with the package.

#### See Also

-   [Create and Register Your Namespace for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "Create and Register Your Namespace for Second-Generation Managed Packages - HTML (New Window)")

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")

-   [Avoid Namespace Collisions in Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_collisions.htm "Avoid Namespace Collisions in Second-Generation Managed Packages - HTML (New Window)")
