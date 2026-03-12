---
title: "Collator Class"
domain: apex-reference
topic: collator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.090Z
estimatedTokens: 867
namespace: System
keywords: [Collator, Contains, get, locale-specific, instances, used, comparisons, sorting., getInstance, obtain, instance, given, locale, pass, Comparator, list.sort, method., Usage, Example, compare]
---

# Collator Class

> Contains methods to get locale-specific instances that can be used for comparisons
        and sorting. Use the getInstance() method to obtain the
        Collator instance for a given locale and pass the Collator as the Comparator parameter to
        the list.sort() method.

**Namespace:** `System`

# Collator Class

Contains methods to get locale-specific instances that can be used for comparisons and sorting. Use the getInstance() method to obtain the Collator instance for a given locale and pass the Collator as the Comparator parameter to the list.sort() method.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Because locale-sensitive sorting can produce different results depending on the user running the code, avoid using it in triggers or in code that expects a particular sort order.

## Example

This example performs a default list sort and then uses Collator to sort based on the user locale.

@IsTest static void userLocaleSort() { string userLocale = 'fr\_FR'; User u = new User(Alias = 'standt', Email='standarduser@testorg.com', EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en\_US', LocaleSidKey=userLocale, TimeZoneSidKey='America/Los\_Angeles', ProfileId = \[SELECT Id FROM Profile WHERE Name='Standard User'\].Id, UserName='standarduser' + DateTime.now().getTime() + '@testorg.com'); System.runAs(u) { List<String> shoppingList = new List<String> { 'épaule désosé Agneau', 'Juice', 'à la mélasse Galette 5 kg', 'Bread', 'Grocery' }; // Default sort shoppingList.sort(); Assert.areEqual('Bread', shoppingList\[0\]); // Sort based on user Locale Collator myCollator = Collator.getInstance(); shoppingList.sort(myCollator); Assert.areEqual('à la mélasse Galette 5 kg', shoppingList\[0\]); Assert.areEqual('Bread', shoppingList\[1\]); Assert.areEqual('épaule désosé Agneau', shoppingList\[2\]); Assert.areEqual('Grocery', shoppingList\[3\]); Assert.areEqual('Juice', shoppingList\[4\]); } }

-   **[Collator Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm#apex_System_Collator_methods)**


## Collator Methods

The following are methods for Collator.

-   **[compare(source, target)](atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm#apex_System_Collator_compare)**
    Perform string comparisons for a given locale.
-   **[getInstance()](atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm#apex_System_Collator_getInstance)**
    Gets the Collator instance for the current user’s locale.

### compare(source, target)

Perform string comparisons for a given locale.

#### Signature

public Integer compare(String source, String target)

#### Parameters

source

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

target

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getInstance()

Gets the Collator instance for the current user’s locale.

#### Signature

public static System.Collator getInstance()

#### Return Value

Type: [Collator Class](#apex_class_System_Collator "Contains methods to get locale-specific instances that can be used for comparisons and sorting. Use the getInstance() method to obtain the Collator instance for a given locale and pass the Collator as the Comparator parameter to the list.sort() method.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Collator Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm)
- compare(source, target) (atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm)
- getInstance() (atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
