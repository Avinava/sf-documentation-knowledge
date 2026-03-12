---
title: "Rules of Conversion"
domain: apex-guide
topic: rules-of-conversion
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.862Z
estimatedTokens: 1174
keywords: [Rules, Conversion, general, Apex, requires, explicitly, convert, data, another., example, variable, cannot, implicitly, converted, String., must, string.format, method., However, few]
---

# Rules of Conversion

> In general, Apex requires you to explicitly convert one data type to another. For
        example, a variable of the Integer data type cannot be implicitly converted to a String. You
        must use the string.format method. However, a few
        data types can be implicitly converted, without using a method.

# Rules of Conversion

In general, Apex requires you to explicitly convert one data type to another. For example, a variable of the Integer data type cannot be implicitly converted to a String. You must use the string.format method. However, a few data types can be implicitly converted, without using a method.

Numbers form a hierarchy of types. Variables of lower numeric types can always be assigned to higher types without explicit conversion. The following is the hierarchy for numbers, from lowest to highest:

1.  Integer
2.  Long
3.  Double
4.  Decimal

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Once a value has been passed from a number of a lower type to a number of a higher type, the value is converted to the higher type of number.

Note that the hierarchy and implicit conversion is unlike the Java hierarchy of numbers, where the base interface number is used and implicit object conversion is never allowed.

In addition to numbers, other data types can be implicitly converted. The following rules apply:

-   IDs can always be assigned to Strings.
-   Strings can be assigned to IDs. However, at runtime, the value is checked to ensure that it is a legitimate ID. If it is not, a runtime exception is thrown.
-   The instanceOf keyword can always be used to test whether a string is an ID.

## Additional Considerations for Data Types

Data Types of Numeric Values

Numeric values represent Integer values unless they are appended with L for a Long or with .0 for a Double or Decimal. For example, the expression Long d = 123; declares a Long variable named d and assigns it to an Integer numeric value (123), which is implicitly converted to a Long. The Integer value on the right hand side is within the range for Integers and the assignment succeeds. However, if the numeric value on the right hand side exceeds the maximum value for an Integer, you get a compilation error. In this case, the solution is to append L to the numeric value so that it represents a Long value which has a wider range, as shown in this example: Long d = 2147483648L;.

Overflow and Underflow of Data Type Values

Arithmetic computations that produce values larger than the maximum value of the current type are said to overflow and values lower than the minimum value of the current type are said to be underflow. Apex doesn’t throw an exception for overflow and underflow of data type values. For example, Integer i = 2147483647 + 1; yields a value of –2147483648 because 2147483647 is the maximum value for an Integer, so adding one to it wraps the value around to the minimum negative value for Integers: –2147483648. Similarly, subtracting one from the minimum integer -2,147,483,648 wraps the value around to the maximum value for Integers: 2,147,483,647.

If arithmetic computations generate results larger than the maximum value for the current type, the end result will be incorrect because the computed values that are larger than the maximum will overflow. For example, the expression Long MillsPerYear = 365 \* 24 \* 60 \* 60 \* 1000; results in an incorrect result because the products of Integers on the right hand side are larger than the maximum Integer value and they overflow. As a result, the final product isn't the expected one. You can avoid this by ensuring that the type of numeric values or variables you are using in arithmetic operations are large enough to hold the results. In this example, append L to numeric values to make them Long so the intermediate products will be Long as well and no overflow occurs. The following example shows how to correctly compute the amount of milliseconds in a year by multiplying Long numeric values.

```

```

Loss of Fractions in Divisions

When dividing numeric Integer or Long values, the fractional portion of the result, if any, is removed before performing any implicit conversions to a Double or Decimal. For example, Double d = 5/3; returns 1.0 because the actual result (1.666...) is an Integer and is rounded to 1 before being implicitly converted to a Double. To preserve the fractional value, ensure that you are using Double or Decimal numeric values in the division. For example, Double d = 5.0/3.0; returns 1.6666666666666667 because 5.0 and 3.0 represent Double values, which results in the quotient being a Double as well and no fractional value is lost.

Conversion of Date to Datetime

Apex supports both implicit and explicit casting of Date values to Datetime, with the time component being zeroed out in the resulting Datetime value.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_assignment_statements.htm "Assignment Statements")

## Code Examples

```apex
Long MillsPerYear = 365L * 24L * 60L * 60L * 1000L;
Long ExpectedValue = 31536000000L;
System.assertEquals(MillsPerYear, ExpectedValue);
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_assignment_statements.htm)
