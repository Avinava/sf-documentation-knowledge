---
title: "destroy()"
domain: lightning
topic: destroy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:05.377Z
estimatedTokens: 109
keywords: [destroy, Destroys, cleans, memory, declared, markup, longer, framework, automatically, frees, dynamically, JavaScript, isn't, added, facet, v.body, another, attribute, Aura.Component, manually, avoid, leaks]
---

> Destroys the component and cleans up memory. After a component that
   is declared in markup is no longer in use, the framework automatically destroys it and frees up
   its memory. If you create a component dynamically in JavaScript and that component isn't added to
   a facet (v.body or another attribute of type Aura.Component[]), you have to destroy it manually using destroy() to avoid memory leaks.

# destroy()

Destroys the component and cleans up memory. After a component that is declared in markup is no longer in use, the framework automatically destroys it and frees up its memory. If you create a component dynamically in JavaScript and that component isn't added to a facet (v.body or another attribute of type Aura.Component\[\]), you have to destroy it manually using destroy() to avoid memory leaks.

## Signature

destroy()
