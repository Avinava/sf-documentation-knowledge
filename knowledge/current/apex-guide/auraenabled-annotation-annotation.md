---
title: "AuraEnabled Annotation Annotation"
domain: apex-guide
topic: auraenabled-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.417Z
estimatedTokens: 356
keywords: [AuraEnabled, Annotation, @AuraEnabled, annotation, enables, client-side, server-side, access, Apex, controller, method., Providing, makes, Lightning, components, both, web, Aura, Only, Versioned]
---

# AuraEnabled Annotation Annotation

> The @AuraEnabled
                annotation enables client-side and server-side access to an Apex controller method.
                Providing this annotation makes your methods available to your Lightning components
                (both Lightning web components and Aura components). Only methods w

# AuraEnabled Annotation Annotation

The @AuraEnabled annotation enables client-side and server-side access to an Apex controller method. Providing this annotation makes your methods available to your Lightning components (both Lightning web components and Aura components). Only methods with this annotation are exposed.

In API version 44.0 and later, you can improve runtime performance by caching method results on the client by using the annotation @AuraEnabled(cacheable=true). You can cache method results only for methods that retrieve data but don’t modify it. Using this annotation eliminates the need to call setStorable() in JavaScript code on every action that calls the Apex method.

In API version 55.0 and later, you can use the annotation @AuraEnabled(cacheable=true scope='global') to enable Apex methods to be cached in a global cache.

For more information, see [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ "HTML (New Window)") and [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc "HTML (New Window)").

## Versioned Behavior Changes

In API version 55.0 and later, overloads aren’t allowed on methods annotated with @AuraEnabled.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm "Deprecated Annotation Annotation")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm)
