---
title: "List Custom Setting Methods"
domain: apex-reference
topic: list-custom-setting-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.955Z
keywords: [List, Custom, Setting, Methods, Returns, map, data, sets, defined, custom, setting., getAll, Signature, Return, Value, Usage, Note, getInstance, dataSetName, Parameters]
---

# List Custom Setting Methods

> Returns a map of the data sets defined for the custom setting.

## List Custom Setting Methods

The following are instance methods for list custom settings.

-   **[getAll()](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_ListCustomSetting_getAll)**  
    Returns a map of the data sets defined for the custom setting.
-   **[getInstance(dataSetName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_ListCustomSetting_getInstance)**  
    Returns the custom setting data set record for the specified data set name. This method returns the exact same object as getValues(dataSetName).
-   **[getValues(dataSetName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_ListCustomSetting_getValues)**  
    Returns the custom setting data set record for the specified data set name. This method returns the exact same object as getInstance(dataSetName).

### getAll()

Returns a map of the data sets defined for the custom setting.

#### Signature

public Map<String, CustomSetting\_\_c> getAll()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [CustomSetting\_\_c](#apex_methods_system_custom_settings "Custom settings are similar to custom objects and enable application developers to create custom sets of data, as well as create and associate custom data for an organization, profile, or specific user. All custom settings data is exposed in the application cache, which enables efficient access without the cost of repeated queries to the database. This data is then available for formula fields, validation rules, flows, Apex, and the SOAP API.")\>

#### Usage

If no data set is defined, this method returns an empty map.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using Salesforce API version 20.0 or earlier, the data set names, which are the keys in the returned map, are converted to lower case. For Apex saved using Salesforce API version 21.0 and later, the case of the data set names in the returned map keys is not changed and the original case is preserved.

### getInstance(dataSetName)

Returns the custom setting data set record for the specified data set name. This method returns the exact same object as getValues(dataSetName).

#### Signature

public CustomSetting\_\_c getInstance(String dataSetName)

#### Parameters

dataSetName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no data is defined for the specified data set, this method returns null.

### getValues(dataSetName)

Returns the custom setting data set record for the specified data set name. This method returns the exact same object as getInstance(dataSetName).

#### Signature

public CustomSetting\_\_c getValues(String dataSetName)

#### Parameters

dataSetName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no data is defined for the specified data set, this method returns null.