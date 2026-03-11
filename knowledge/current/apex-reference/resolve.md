---
title: "resolve()"
domain: apex-reference
topic: resolve
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.651Z
keywords: [resolve, Returns, resolution, object, which, indicates, how, strategy, resolved., whether, default, logic, extension, provider, executed., Signature, Return, Value]
---

# resolve()

> Returns a resolution object, which indicates how the resolution strategy was resolved.
    The resolution indicates whether default logic, extension provider logic, or no logic is
    executed.

### resolve()

Returns a resolution object, which indicates how the resolution strategy was resolved. The resolution indicates whether default logic, extension provider logic, or no logic is executed.

#### Signature

public CommerceExtension.Resolution resolve()

#### Return Value

Type: [CommerceExtension.Resolution](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_class_CommerceExtension_Resolution "Resolution of a resolution strategy, which conditionally invokes default domain logic, logic provided by an extension provider, or no logic.")

Resolution object that indicates how the resolution strategy was resolved.