---
title: "Resolution Class"
domain: apex-reference
topic: resolution-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.809Z
estimatedTokens: 897
namespace: CommerceExtension
keywords: [Resolution, resolution, strategy, which, conditionally, invokes, default, domain, logic, provided, extension, provider, logic., Example, resolutionState, providerName, getProviderName, getResolutionState]
---

# Resolution Class

> Resolution of a resolution strategy, which conditionally invokes default domain logic,
    logic provided by an extension provider, or no logic.

**Namespace:** `CommerceExtension`

# Resolution Class

Resolution of a resolution strategy, which conditionally invokes default domain logic, logic provided by an extension provider, or no logic.

## Namespace

[CommerceExtension](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm "Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.")

## Example

```

```

-   **[Resolution Constructors](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_constructors)**

-   **[Resolution Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_methods)**


## Resolution Constructors

The following are constructors for Resolution.

-   **[Resolution(resolutionState)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_ctor)**
    Constructor that takes a CommerceExtension.ResolutionStates object as an argument.
-   **[Resolution(providerName)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_ctor_2)**
    Constructor that takes the name of an extension provider as an argument.
-   **[Resolution()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_ctor_3)**
    Default constructor for the Resolution class.

### Resolution(resolutionState)

Constructor that takes a CommerceExtension.ResolutionStates object as an argument.

#### Signature

public Resolution(CommerceExtension.ResolutionStates resolutionState)

#### Parameters

resolutionState

Type: [CommerceExtension.ResolutionStates](atlas.en-us.apexref.meta/apexref/apex_enum_CommerceExtension_ResolutionStates.htm "Potential resolution states for a resolution strategy.")

Resolution state.

### Resolution(providerName)

Constructor that takes the name of an extension provider as an argument.

#### Signature

public Resolution(String providerName)

#### Parameters

providerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the extension provider.

### Resolution()

Default constructor for the Resolution class.

#### Signature

public Resolution()

## Resolution Methods

The following are methods for Resolution.

-   **[getProviderName()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_getProviderName)**
    Returns the name of an extension provider.
-   **[getResolutionState()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_CommerceExtension_Resolution_getResolutionState)**
    Returns the resolution state of the resolution.

### getProviderName()

Returns the name of an extension provider.

#### Signature

public String getProviderName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of an extension provider.

### getResolutionState()

Returns the resolution state of the resolution.

#### Signature

public CommerceExtension.ResolutionStates getResolutionState()

#### Return Value

Type: [CommerceExtension.ResolutionStates](atlas.en-us.apexref.meta/apexref/apex_enum_CommerceExtension_ResolutionStates.htm "Potential resolution states for a resolution strategy.")

Resolution state of the resolution.

## Code Examples

```apex
public class TaxServiceExtensionResolverSample extends commercestoretax.TaxService implements CommerceExtension.ResolutionStrategy {
    public CommerceExtension.Resolution resolve() {
        // The Sample Extension Provider registered with developer name as 'tax_extension_provider_for_us' will be selected for execution for en_US locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_US') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_us');
        }
        // The Sample Extension Provider registered with developer name as 'tax_extension_provider_for_canada' will be selected for execution for en_CA locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_CA') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_canada');
        }
        // The default Salesforce Internal Tax Api will return an empty response for German locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'de') {
            return new CommerceExtension.Resolution(CommerceExtension.ResolutionStates.OFF);
        }
        // The default Salesforce Internal Tax Api will be selected for execution for all other locales than US, Canada and Germany
        return new CommerceExtension.Resolution();
    }
}
```

## Related Topics

- CommerceExtension (atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)
- Resolution Constructors (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- Resolution Methods (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- Resolution(resolutionState) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- Resolution(providerName) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- Resolution() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- CommerceExtension.ResolutionStates (atlas.en-us.apexref.meta/apexref/apex_enum_CommerceExtension_ResolutionStates.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getProviderName() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
- getResolutionState() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm)
