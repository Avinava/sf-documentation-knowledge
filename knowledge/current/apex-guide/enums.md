---
title: "Enums"
domain: apex-guide
topic: enums
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.745Z
estimatedTokens: 1282
keywords: [Enums, abstract, data, values, take, exactly, finite, set, identifiers, specify., typically, used, define, possible, don’t, otherwise, numerical, order., Typical, examples]
---

# Enums

> An enum is an abstract data type with values that each take on exactly one of a
        finite set of identifiers that you specify. Enums are typically used to define a set of
        possible values that don’t otherwise have a numerical order. Typical examples include
        the suit of a card, or a particular season of the year.

# Enums

An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Enums are typically used to define a set of possible values that don’t otherwise have a numerical order. Typical examples include the suit of a card, or a particular season of the year.

Although each value corresponds to a distinct integer value, the enum hides this implementation. Hiding the implementation prevents any possible misuse of the values to perform arithmetic and so on. After you create an enum, variables, method arguments, and return types can be declared of that type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Unlike Java, the enum type itself has no constructor syntax.

To define an enum, use the enum keyword in your declaration and use curly braces to demarcate the list of possible values. For example, the following code creates an enum called Season:

```

```

By creating the enum Season, you have also created a new data type called Season. You can use this new data type as you would any other data type. For example:

```

```

You can also define a class as an enum. When you create an enum class, do not use the class keyword in the definition.

```

```

You can use an enum in any place you can use another data type name. If you define a variable whose type is an enum, any object you assign to it must be an instance of that enum class.

Any webservice method can use enum types as part of their signature. In this case, the associated WSDL file includes definitions for the enum and its values, which the API client can use.

Apex provides the following system-defined enums:

-   System.StatusCode

    This enum corresponds to the API error code that is exposed in the WSDL document for all API operations. For example:

    ```

    ```

    The full list of status codes is available in the WSDL file for your organization. For more information about accessing the WSDL file for your organization, see Downloading Salesforce WSDLs and Client Authentication Certificates in Salesforce Help.

-   System.XmlTag:

    This enum returns a list of XML tags used for parsing the result XML from a webservice method. For more information, see [XmlStreamReader Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm).

-   System.ApplicationReadWriteMode: This enum indicates if an organization is in 5 Minute Upgrade read-only mode during Salesforce upgrades and downtimes. For more information, see [System.getApplicationReadWriteMode()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_getApplicationReadWriteMode).
-   System.LoggingLevel:

    This enum is used with the system.debug method, to specify the log level for all debug calls. For more information, see [System Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm).

-   System.RoundingMode:

    This enum is used by methods that perform mathematical operations to specify the rounding behavior for the operation. Typical examples are the Decimal divide method and the Double round method. For more information, see [Rounding Mode](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_decimal.htm).

-   System.SoapType:

    This enum is returned by the field describe result getSoapType method. For more information, see [SOAPType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Schema_SOAPType.htm).

-   System.DisplayType:

    This enum is returned by the field describe result getType method. For more information, see [DisplayType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Schema_DisplayType.htm).

-   System.JSONToken:

    This enum is used for parsing JSON content. For more information, see [JsonToken Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_System_JsonToken.htm).

-   ApexPages.Severity:

    This enum specifies the severity of a Visualforce message. For more information, see [ApexPages.Severity Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_pages_message.htm).

-   Dom.XmlNodeType:

    This enum specifies the node type in a DOM document.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

System-defined enums cannot be used in Web service methods.

All enum values, including system enums, have common methods associated with them. For more information, see [Enum Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm).

You cannot add user-defined methods to enum values.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm "Collections")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm "Variables")

## Code Examples

```apex
public enum Season {WINTER, SPRING, SUMMER, FALL}
```

```apex
Season southernHemisphereSeason = Season.WINTER;

public Season getSouthernHemisphereSeason(Season northernHemisphereSeason) {

    if (northernHemisphereSeason == Season.SUMMER) return southernHemisphereSeason;
     //...
}
```

```apex
public enum MyEnumClass { X, Y }
```

```
StatusCode.CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY
StatusCode.INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm)
