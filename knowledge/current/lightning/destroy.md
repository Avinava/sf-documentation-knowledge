---
title: "destroy()"
domain: lightning
topic: destroy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.663Z
estimatedTokens: 109
keywords: [destroy, Destroys, component, cleans, memory, declared, markup, longer, framework, automatically, frees, dynamically, JavaScript, isn't, added]
---

# destroy()

> Destroys the component and cleans up memory. After a component that
   is declared in markup is no longer in use, the framework automatically destroys it and frees up
   its memory. If you create a component dynamically in JavaScript and that component isn't added to
   a facet (v.body or another attribute of type Aura.Component[]), you have to destroy it manually using destroy() to avoid memory leaks.

# destroy()

Destroys the component and cleans up memory. After a component that is declared in markup is no longer in use, the framework automatically destroys it and frees up its memory. If you create a component dynamically in JavaScript and that component isn't added to a facet (v.body or another attribute of type Aura.Component\[\]), you have to destroy it manually using destroy() to avoid memory leaks.

## Signature

destroy()
