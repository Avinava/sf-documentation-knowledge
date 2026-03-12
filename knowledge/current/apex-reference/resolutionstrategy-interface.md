---
title: "ResolutionStrategy Interface"
domain: apex-reference
topic: resolutionstrategy-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.928Z
estimatedTokens: 557
namespace: CommerceExtension
keywords: [ResolutionStrategy, resolution, strategy, Usage, resolve, Implementation]
---

# ResolutionStrategy Interface

> Interface for a resolution strategy.

**Namespace:** `CommerceExtension`

# ResolutionStrategy Interface

Interface for a resolution strategy.

## Namespace

[CommerceExtension](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm "Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.")

## Usage

When you implement this interface, you can register your apex class just like an extension provider class. Your class can then conditionally decide how to handle each extension invocation. You can delegate to a specific extension provider, you can execute default domain logic, or you can execute no logic at all.

-   **[ResolutionStrategy Methods](atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm#apex_CommerceExtension_ResolutionStrategy_methods)**

-   **[ResolutionStrategy Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm#apex_interface_CommerceExtension_ResolutionStrategy_Example)**


## ResolutionStrategy Methods

The following are methods for ResolutionStrategy.

-   **[resolve()](atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm#apex_CommerceExtension_ResolutionStrategy_resolve)**
    Returns a resolution object, which indicates how the resolution strategy was resolved. The resolution indicates whether default logic, extension provider logic, or no logic is executed.

### resolve()

Returns a resolution object, which indicates how the resolution strategy was resolved. The resolution indicates whether default logic, extension provider logic, or no logic is executed.

#### Signature

public CommerceExtension.Resolution resolve()

#### Return Value

Type: [CommerceExtension.Resolution](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_class_CommerceExtension_Resolution "Resolution of a resolution strategy, which conditionally invokes default domain logic, logic provided by an extension provider, or no logic.")

Resolution object that indicates how the resolution strategy was resolved.

## ResolutionStrategy Example Implementation

This is an example implementation of the CommerceExtension.ResolutionStrategy interface.

```

```

## Code Examples

```apex
// This sample is for the situation when different tax behaviors need to be 
// implemented for different locales.
//
// These tax behaviors can be -
// 1. ResolutionState - EXECUTE_DEFAULT (the default Salesforce Internal Tax Api).
// 2. ResolutionState - EXECUTE_REGISTERED (extended or overridden implementations 
//    via the extension point from the default Salesforce Internal Tax Api)
// 3. ResolutionState - OFF (In this case, the default Salesforce Internal Tax Api 
//    will return an empty response).
//
// An Extension Provider is a custom apex class which extends or overrides the 
// default Salesforce Internal Tax Api.
//
// An Extension Resolver is a custom apex class which selects different resolution 
// states (EXECUTE_DEFAULT, EXECUTE_REGISTERED and OFF) for different locales 
// to execute respective implementations (Extension Providers or the Default 
// Salesforce Internal Tax Api).

// Your custom apex extension providers and the resolver must be registered with 
// the tax extension point and then the resolver must be registered and mapped to 
// the web store via appropriate setup.
//
// You can have as many Extension Providers registered as per your use case and 
// select them in your resolver for different locales.
//
// Please follow the corresponding salesforce documentation on how to use locales.
// For more information related to that, please see the corresponding documentation.

// This must implement the commercestoretax.TaxService class in order to be 
// processed by the tax service flow. It must also implement the 
// CommerceExtension.ResolutionStrategy in order to work as a extension resolver 
// and get the different locales and resolutions.
//
public class TaxServiceExtensionResolverSample 
    extends commercestoretax.TaxService 
    implements CommerceExtension.ResolutionStrategy {

    public CommerceExtension.Resolution resolve() {
        // The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_us' will be selected for execution for en_US locale
        if (CommerceExtension.ExtensionInfo.getLocaleString() == 'en_US') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_us');
        }
        // The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_canada' will be selected for execution for en_CA locale
        if (CommerceExtension.ExtensionInfo.getLocaleString() == 'en_CA') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_canada');
        }
        // The default Salesforce Internal Tax Api will return an empty response for German locale
        if (CommerceExtension.ExtensionInfo.getLocaleString() == 'de') {
            return new CommerceExtension.Resolution(
                CommerceExtension.ResolutionStates.OFF
            );
        }
        // The default Salesforce Internal Tax Api will be selected for execution for 
        // all other locales than US, Canada and Germany
        return new CommerceExtension.Resolution();
    }
}
```

## Related Topics

- CommerceExtension (atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)
- ResolutionStrategy Methods (atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm)
- ResolutionStrategy Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm)
- resolve() (atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm)
- CommerceExtension.Resolution (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
