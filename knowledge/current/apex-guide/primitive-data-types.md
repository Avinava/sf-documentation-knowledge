---
title: "Primitive Data Types"
domain: apex-guide
topic: primitive-data-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.857Z
estimatedTokens: 2316
keywords: [Primitive, Data, Types, Apex, uses, same, primitive, data, types, SOAP, API, except, higher-precision, Decimal, certain, cases., Versioned, Behavior, Changes]
---

# Primitive Data Types

> Apex uses the same primitive data types as SOAP API, except for higher-precision
        Decimal type in certain cases.

# Primitive Data Types

Apex uses the same primitive data types as SOAP API, except for higher-precision Decimal type in certain cases.

All Apex variables, whether they’re class member variables or method variables, are initialized to null. Make sure that you initialize your variables to appropriate values before using them. For example, initialize a Boolean variable to false.

Apex primitive data types include:

| Data Type | Description |
| --- | --- |
| Blob | A collection of binary data stored as a single object. You can convert this data type to String or from String using the toString and valueOf methods, respectively. Blobs can be accepted as Web service arguments, stored in a document (the body of a document is a Blob), or sent as attachments. For more information, see Crypto Class. Salesforce supports Blob manipulation only with Apex class methods that are supplied by Salesforce. |
| Boolean | A value that can only be assigned true, false, or null. For example:Boolean isWinner = true; |
| Date | A value that indicates a particular day. Unlike Datetime values, Date values contain no information about time. Always create date values with a system static method.You can add or subtract an Integer value from a Date value, returning a Date value. Addition and subtraction of Integer values are the only arithmetic functions that work with Date values. You can’t perform arithmetic functions that include two or more Date values. Instead, use the Date methods.Use the String.valueOf() method to obtain the date without an appended timestamp. Using an implicit string conversion with a Date value results in the date with the timestamp appended. |
| Datetime | A value that indicates a particular day and time, such as a timestamp. Always create datetime values with a system static method.You can add or subtract an Integer or Double value from a Datetime value, returning a Date value. Addition and subtraction of Integer and Double values are the only arithmetic functions that work with Datetime values. You can’t perform arithmetic functions that include two or more Datetime values. Instead, use the Datetime methods. |
| Decimal | A number that includes a decimal point. Decimal is an arbitrary precision number. Currency fields are automatically assigned the type Decimal.If you don’t explicitly set the number of decimal places for a Decimal, the item from which the Decimal is created determines the Decimal’s scale. Scale is a count of decimal places. Use the setScale method to set a Decimal’s scale.If the Decimal is created as part of a query, the scale is based on the scale of the field returned from the query.If the Decimal is created from a String, the scale is the number of characters after the decimal point of the String.If the Decimal is created from a non-decimal number, the number is first converted to a String. The scale is then set using the number of characters after the decimal point.NoteTwo Decimal objects that are numerically equivalent but differ in scale (such as 1.1 and 1.10) generally don’t have the same hashcode. Use caution when such Decimal objects are used in Sets or as Map keys. |
| Double | A 64-bit number that includes a decimal point. Doubles have a minimum value of -263 and a maximum value of 263-1. For example:Double pi = 3.14159; Double e = 2.7182818284D;Scientific notation (e) for Doubles isn’t supported. |
| ID | Any valid 18-character Lightning Platform record identifier. For example:ID id='00300000003T2PGAA0';If you set ID to a 15-character value, Apex converts the value to its 18-character representation. All invalid ID values are rejected with a runtime exception. |
| Integer | A 32-bit number that doesn’t include a decimal point. Integers have a minimum value of -2,147,483,648 and a maximum value of 2,147,483,647. For example:Integer i = 1; |
| Long | A 64-bit number that doesn’t include a decimal point. Longs have a minimum value of -263 and a maximum value of 263-1. Use this data type when you need a range of values wider than the range provided by Integer. For example:Long l = 2147483648L; |
| Object | Any data type that is supported in Apex. Apex supports primitive data types (such as Integer), user-defined custom classes, the sObject generic type, or an sObject specific type (such as Account). All Apex data types inherit from Object.You can cast an object that represents a more specific data type to its underlying data type. For example:Object obj = 10; // Cast the object to an integer. Integer i = (Integer)obj; System.assertEquals(10, i);The next example shows how to cast an object to a user-defined type—a custom Apex class named MyApexClass that is predefined in your organization.Object obj = new MyApexClass(); // Cast the object to the MyApexClass custom type. MyApexClass mc = (MyApexClass)obj; // Access a method on the user-defined class. mc.someClassMethod(); |
| String | Any set of characters surrounded by single quotes. For example,String s = 'The quick brown fox jumped over the lazy dog.';String size: The limit on the number of characters is governed by the heap size limit.Empty Strings and Trailing Whitespace: sObject String field values follow the same rules as in SOAP API: they can never be empty (only null), and they can never include leading and trailing whitespace. These conventions are necessary for database storage.Conversely, Strings in Apex can be null or empty and can include leading and trailing whitespace, which can be used to construct a message.The Solution sObject field SolutionNote operates as a special type of String. If you have HTML Solutions enabled, any HTML tags used in this field are verified before the object is created or updated. If invalid HTML is entered, an error is thrown. Any JavaScript used in this field is removed before the object is created or updated. In the following example, when the Solution displays on a detail page, the SolutionNote field has H1 HTML formatting applied to it:trigger t on Solution (before insert) {              Trigger.new[0].SolutionNote ='<h1>hello</h1>';  } In the following example, when the Solution displays on a detail page, the SolutionNote field only contains HelloGoodbye:trigger t2 on Solution (before insert) { Trigger.new[0].SolutionNote =     '<javascript>Hello</javascript>Goodbye'; }For more information, see “HTML Solutions Overview” in Salesforce Help.EscapeSequences: All Strings in Apex use the same escape sequences as SOQL strings: \b (backspace), \t (tab), (line feed), \f (form feed), \r (carriage return), \" (double quote), \' (single quote), and \\ (backslash).Comparison Operators: Unlike Java, Apex Strings support using the comparison operators ==, !=, <, <=, >, and >=. Because Apex uses SOQL comparison semantics, results for Strings are collated according to the context user’s locale and aren’t case-sensitive. For more information, see Expression Operators.String Methods: As in Java, Strings can be manipulated with several standard methods. For more information, see String Class.Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field. |
| Time | A value that indicates a particular time. Always create time values with a system static method. See Time Class. |

In addition, two non-standard primitive data types can’t be used as variable or method types, but do appear in system static methods:

-   AnyType. The valueOf static method converts an sObject field of type AnyType to a standard primitive. AnyType is used within the Lightning Platform database exclusively for sObject fields in field history tracking tables.
-   Currency. The Currency.newInstance static method creates a literal of type Currency. This method is for use solely within SOQL and SOSL WHERE clauses to filter against sObject currency fields. You can’t instantiate Currency in any other type of Apex.

For more information on the AnyType data type, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm "html (New Window)") in the Object Reference for Salesforce.

## Versioned Behavior Changes

In API version 16 (Summer ’09) and later, Apex uses the higher-precision Decimal data type in certain types such as currency.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm "Data Types")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm "Collections")

#### See Also

-   [Expression Operators](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm "Expressions can be joined to one another with operators to create compound expressions.")

-   [Class Methods](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm "Learn how to define Apex methods. Understand the differences between passing method arguments by value and passing method arguments by reference.")

-   [*Object Reference for the Salesforce Platform*: Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/primitive_data_types.htm "Object Reference for the Salesforce Platform: Primitive
    Data Types - HTML (New Window)")

## Code Examples

```
Double pi = 3.14159;
Double e = 2.7182818284D;
```

```apex
Object obj = 10;
// Cast the object to an integer.
Integer i = (Integer)obj;
System.assertEquals(10, i);
```

```
Object obj = new MyApexClass();
// Cast the object to the MyApexClass custom type.
MyApexClass mc = (MyApexClass)obj;
// Access a method on the user-defined class.
mc.someClassMethod();
```

```
trigger t on Solution (before insert) { 
            Trigger.new[0].SolutionNote ='<h1>hello</h1>'; 
}
```

```
trigger t2 on Solution (before insert) {
Trigger.new[0].SolutionNote =
    '<javascript>Hello</javascript>Goodbye';
}
```

## Related Topics

- heap size limit (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm)
- Expression Operators (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm)
- Class Methods (atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm)
