---
title: "Label Class"
domain: apex-reference
topic: label-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.261Z
estimatedTokens: 1744
namespace: True
keywords: [Label, Provides, retrieve, custom, label, check, translation, exists, specific, language, namespace., names, dynamically, resolved, run, time, overriding, user’s, current, requested]
---

# Label Class

> Provides methods to retrieve a custom label or to check if translation exists for a
    label in a specific language and namespace. Label names are dynamically resolved at run time,
    overriding the user’s current language if a translation exists for the requested language. You
    can’t access labels that are protected in a different namespace.

**Namespace:** `True`

# Label Class

Provides methods to retrieve a custom label or to check if translation exists for a label in a specific language and namespace. Label names are dynamically resolved at run time, overriding the user’s current language if a translation exists for the requested language. You can’t access labels that are protected in a different namespace.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Custom labels enable developers to create multilingual applications by automatically presenting information (for example, help text or error messages) in a user’s native language. Custom labels have a limit of 1000 characters and can be accessed from Apex classes, Visualforce pages, Lightning pages, or Lightning components. For more information on custom labels, see [Custom Labels](https://help.salesforce.com/s/articleView?id=platform.cl_about.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.The label values can be translated into any language Salesforce supports. For supported languages, see [Supported Languages](https://help.salesforce.com/s/articleView?id=xcloud.faq_getstart_what_languages_does.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

-   To define custom labels, from Setup, in the Quick Find box, enter Custom Labels, and then select **Custom Labels**.
-   To assign translated values, turn on Translation Workbench and add translation mappings.
-   To retrieve the label for a default language setting or for a language and namespace, use System.Label.get(namespace, label, language).
-   To check if translation exists for a label and language in a namespace, use Label.translationExists(namespace, label, language).

In Apex code, you can refer to or instantiate a Label like this:

System.Label.myLabelName

For information on passing in labels into Aura components, see [Getting Labels in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/labels_apex.htm "HTML (New Window)") in the Lightning Aura Components Developer Guide.

## Examples

This example returns True if an English label called MyLabel exists in the MyNamespace namespace.

boolean exists = Label.translationExists('MyNamespace', 'MyLabel', 'en')

This example retrieves the custom label translation text for MyLabel in French.

String value = Label.get('MyNamespace', 'MyLabel', 'fr')

-   **[Label Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm#apex_System_Label_methods)**


## Label Methods

The following are methods for Label.

-   **[get(namespace, label)](atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm#apex_System_Label_get)**
    Retrieve a custom label for the specified namespace and a default language setting.
-   **[get(namespace, label, language)](atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm#unique_1649821998)**
    Retrieve a custom label for the specified namespace and language.
-   **[translationExists(namespace, label, language)](atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm#apex_System_Label_translationExists)**
    Check if translation exists for a label and language in a namespace.

### get(namespace, label)

Retrieve a custom label for the specified namespace and a default language setting.

#### Signature

public static String get(String namespace, String label)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the namespace name is null, it defaults to the package namespace. If the namespace name is an empty string, it implies the org namespace.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label name cannot be null or an empty string.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### get(namespace, label, language)

Retrieve a custom label for the specified namespace and language.

#### Signature

public static String get(String namespace, String label, String language)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the namespace name is null, it defaults to the package namespace. If the namespace name is an empty string, it implies the org namespace.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label name cannot be null or an empty string.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

This parameter must be a valid language ISO code. See the Platform-Only Languages section in [Supported Languages](https://help.salesforce.com/s/articleView?id=xcloud.faq_getstart_what_languages_does.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### translationExists(namespace, label, language)

Check if translation exists for a label and language in a namespace.

#### Signature

public static Boolean translationExists(string namespace, string label, string language)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the namespace name is null, it defaults to the package namespace. If the namespace name is an empty string, it implies the org namespace.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label name cannot be null or an empty string.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

This parameter must be a valid language ISO code. See the Platform-Only Languages section in [Supported Languages](https://help.salesforce.com/s/articleView?id=xcloud.faq_getstart_what_languages_does.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Label Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm)
- get(namespace, label) (atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm)
- get(namespace, label, language) (atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm)
- translationExists(namespace, label, language) (atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
