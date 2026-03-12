---
title: "MessageDefinitionInputParameter Class"
domain: apex-reference
topic: messagedefinitioninputparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.285Z
estimatedTokens: 2041
namespace: RichMessaging
keywords: [MessageDefinitionInputParameter, messaging, component, provide, payloads, translated, structured, content, rich, messages, booleanValue, booleanValues, dateTimeValue, dateTimeValues, dateValue]
---

# MessageDefinitionInputParameter Class

> Represents a messaging component parameter value. This class is used to provide
    parameter payloads that can be translated to structured content payloads in rich content
    messages.

**Namespace:** `RichMessaging`

# MessageDefinitionInputParameter Class

Represents a messaging component parameter value. This class is used to provide parameter payloads that can be translated to structured content payloads in rich content messages.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[MessageDefinitionInputParameter Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_properties)**


## MessageDefinitionInputParameter Properties

The following are properties for MessageDefinitionInputParameter.

-   **[booleanValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_booleanValue)**
    A boolean input parameter.
-   **[booleanValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_booleanValues)**
    A list of boolean parameters.
-   **[dateTimeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_dateTimeValue)**
    A datetime input parameter.
-   **[dateTimeValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_dateTimeValues)**
    A list of datetime input parameters.
-   **[dateValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_dateValue)**
    A date input parameter.
-   **[dateValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_dateValues)**
    A list of date input parameters.
-   **[name](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_name)**
    A name input parameter.
-   **[numberValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_numberValue)**
    A number input parameter.
-   **[numberValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_numberValues)**
    A list of number input parameters.
-   **[recordIdValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_recordIdValue)**
    A record ID input parameter.
-   **[recordIdValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_recordIdValues)**
    A list of record ID input parameters.
-   **[textValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_textValue)**
    A text input parameter.
-   **[textValues](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_RichMessaging_MessageDefinitionInputParameter_textValues)**
    A list of text input parameters.

### booleanValue

A boolean input parameter.

#### Signature

public Boolean booleanValue {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### booleanValues

A list of boolean parameters.

#### Signature

public List<Boolean> booleanValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")\>

### dateTimeValue

A datetime input parameter.

#### Signature

public Datetime dateTimeValue {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### dateTimeValues

A list of datetime input parameters.

#### Signature

public List<Datetime> dateTimeValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")\>

### dateValue

A date input parameter.

#### Signature

public Date dateValue {get; set;}

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### dateValues

A list of date input parameters.

#### Signature

public List<Date> dateValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")\>

### name

A name input parameter.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### numberValue

A number input parameter.

#### Signature

public Double numberValue {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### numberValues

A list of number input parameters.

#### Signature

public List<Double> numberValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")\>

### recordIdValue

A record ID input parameter.

#### Signature

public String recordIdValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### recordIdValues

A list of record ID input parameters.

#### Signature

public List<String> recordIdValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### textValue

A text input parameter.

#### Signature

public String textValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### textValues

A list of text input parameters.

#### Signature

public List<String> textValues {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- MessageDefinitionInputParameter Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- booleanValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- booleanValues (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- dateTimeValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- dateTimeValues (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- dateValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- dateValues (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- name (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- numberValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
