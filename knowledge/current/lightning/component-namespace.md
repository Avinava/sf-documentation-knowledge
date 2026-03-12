---
title: "Component Namespace"
domain: lightning
topic: component-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.325Z
estimatedTokens: 321
namespace: Every
keywords: [Component, Every, part, group, components, together, organization, prefix, access, Otherwise, Namespaces, Code, Samples]
---

# Component Namespace

> Every component is part of a namespace, which is used to group related components
    together. If your organization has a namespace prefix set, use that namespace to access your
    components. Otherwise, use the default namespace to access your components.

**Namespace:** `Every`

# Component Namespace

Every component is part of a namespace, which is used to group related components together. If your organization has a namespace prefix set, use that namespace to access your components. Otherwise, use the default namespace to access your components.

Another component or application can reference a component by adding <myNamespace:myComponent> in its markup. For example, the helloWorld component is in the docsample namespace. Another component can reference it by adding <docsample:helloWorld /> in its markup.

Lightning components that Salesforce provides are grouped into several namespaces, such as aura, lightning, and force. Components from third-party managed packages have namespaces from the providing organizations.

In your organization, you can choose to set a namespace prefix. If you do, that namespace is used for all of your Lightning components. A namespace prefix is required if you plan to offer managed packages on the AppExchange.

If you haven’t set a namespace prefix for your organization, use the default namespace c when referencing components that you’ve created.

## Namespaces in Code Samples

The code samples throughout this guide use the default c namespace. Replace c with your namespace if you’ve set a namespace prefix.
