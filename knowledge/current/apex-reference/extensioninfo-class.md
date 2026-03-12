---
title: "ExtensionInfo Class"
domain: apex-reference
topic: extensioninfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.374Z
estimatedTokens: 859
namespace: CommerceExtension
keywords: [ExtensionInfo, expose, extension-related, context, getClientApiVersion, getCustomParameterField, fieldName, getLocaleString, isCustomParametersAvailable]
---

# ExtensionInfo Class

> Contains static methods to expose extension-related context information.

**Namespace:** `CommerceExtension`

# ExtensionInfo Class

Contains static methods to expose extension-related context information.

## Namespace

[CommerceExtension](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm "Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.")

## Example

```

```

-   **[ExtensionInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_methods)**


## ExtensionInfo Methods

The following are methods for ExtensionInfo.

-   **[getClientApiVersion()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getClientApiVersion)**
    Returns the version number of the Client API for the extension context.
-   **[getCustomParameterField(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getCustomParameterField)**
    Returns a custom parameter field value, if available, for the extension context.
-   **[getLocaleString()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_getLocaleString)**
    Returns the locale for the extension context.
-   **[isCustomParametersAvailable()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_CommerceExtension_ExtensionInfo_isCustomParametersAvailable)**
    Indicates whether custom parameters are available for the extension context.

### getClientApiVersion()

Returns the version number of the Client API for the extension context.

#### Signature

public static Double getClientApiVersion()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Version number of the Client API for the extension context.

### getCustomParameterField(fieldName)

Returns a custom parameter field value, if available, for the extension context.

#### Signature

public static String getCustomParameterField(String fieldName)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom parameter field name.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom parameter field value for the extension context.

### getLocaleString()

Returns the locale for the extension context.

#### Signature

public static String getLocaleString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Locale for the extension context.

### isCustomParametersAvailable()

Indicates whether custom parameters are available for the extension context.

#### Signature

public static Boolean isCustomParametersAvailable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Value indicating if custom parameters are available in the extension context (true) or not (false).

## Code Examples

```
// The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_us' will be selected for execution for en_US locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_US') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_us');
        }
        // The Sample Extension Provider registered with developer name as 
        // 'tax_extension_provider_for_canada' will be selected for execution for en_CA locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'en_CA') {
            return new CommerceExtension.Resolution('tax_extension_provider_for_canada');
        }
        // The default Salesforce Internal Tax Api will return an empty response for German locale
        if(CommerceExtension.ExtensionInfo.getLocaleString() == 'de') {
            return new CommerceExtension.Resolution(CommerceExtension.ResolutionStates.OFF);
        }
```

## Related Topics

- CommerceExtension (atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)
- ExtensionInfo Methods (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm)
- getClientApiVersion() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm)
- getCustomParameterField(fieldName) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm)
- getLocaleString() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm)
- isCustomParametersAvailable() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
