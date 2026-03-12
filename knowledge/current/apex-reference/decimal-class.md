---
title: "Decimal Class"
domain: apex-reference
topic: decimal-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.706Z
estimatedTokens: 5736
namespace: System
keywords: [Decimal, primitive, data, Usage, Rounding, Mode, abs, divide, divisor, scale, roundingMode, doubleValue, intValue, longValue, pow]
---

# Decimal Class

> Contains methods for the Decimal primitive data type.

**Namespace:** `System`

# Decimal Class

Contains methods for the Decimal primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Two Decimal objects that are numerically equivalent but differ in scale (such as 1.1 and 1.10) generally do not have the same hashcode. Use caution when such Decimal objects are used in Sets or as Map keys.

For more information on Decimal, see [Decimal Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

-   **[Rounding Mode](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_decimal_rounding_mode)**
    Rounding mode specifies the rounding behavior for numerical operations capable of discarding precision.
-   **[Decimal Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_methods)**


## Rounding Mode

Rounding mode specifies the rounding behavior for numerical operations capable of discarding precision.

Each rounding mode indicates how the least significant returned digit of a rounded result is to be calculated. The following are the valid values for roundingMode.

| Name | Description |
| --- | --- |
| CEILING | Rounds towards positive infinity. That is, if the result is positive, this mode behaves the same as the UP rounding mode; if the result is negative, it behaves the same as the DOWN rounding mode. Note that this rounding mode never decreases the calculated value. For example:Input number 5.5: CEILING round mode result: 6Input number 1.1: CEILING round mode result: 2Input number -1.1: CEILING round mode result: -1Input number -2.7: CEILING round mode result: -2Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{6, 2, -1, -2}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.CEILING)); } |
| DOWN | Rounds towards zero. This rounding mode always discards any fractions (decimal points) prior to executing. Note that this rounding mode never increases the magnitude of the calculated value. For example:Input number 5.5: DOWN round mode result: 5Input number 1.1: DOWN round mode result: 1Input number -1.1: DOWN round mode result: -1Input number -2.7: DOWN round mode result: -2Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{5, 1, -1, -2}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.DOWN)); } |
| FLOOR | Rounds towards negative infinity. That is, if the result is positive, this mode behaves the same as theDOWN rounding mode; if negative, this mode behaves the same as the UP rounding mode. Note that this rounding mode never increases the calculated value. For example:Input number 5.5: FLOOR round mode result: 5Input number 1.1: FLOOR round mode result: 1Input number -1.1: FLOOR round mode result: -2Input number -2.7: FLOOR round mode result: -3Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{5, 1, -2, -3}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.FLOOR)); } |
| HALF_DOWN | Rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case this mode rounds down. This rounding mode behaves the same as the UP rounding mode if the discarded fraction (decimal point) is > 0.5; otherwise, it behaves the same as DOWN rounding mode. For example:Input number 5.5: HALF_DOWN round mode result: 5Input number 1.1: HALF_DOWN round mode result: 1Input number -1.1: HALF_DOWN round mode result: -1Input number -2.7: HALF_DOWN round mode result: -3Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{5, 1, -1, -3}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.HALF_DOWN)); } |
| HALF_EVEN | Rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor. This rounding mode behaves the same as the HALF_UP rounding mode if the digit to the left of the discarded fraction (decimal point) is odd. It behaves the same as the HALF_DOWN rounding method if it is even. For example:Input number 5.5: HALF_EVEN round mode result: 6Input number 1.1: HALF_EVEN round mode result: 1Input number -1.1: HALF_EVEN round mode result: -1Input number -2.7: HALF_EVEN round mode result: -3Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{6, 1, -1, -3}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.HALF_EVEN)); } Note that this rounding mode statistically minimizes cumulative error when applied repeatedly over a sequence of calculations. |
| HALF_UP | Rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds up. This rounding method behaves the same as the UP rounding method if the discarded fraction (decimal point) is >= 0.5; otherwise, this rounding method behaves the same as the DOWN rounding method. For example:Input number 5.5: HALF_UP round mode result: 6Input number 1.1: HALF_UP round mode result: 1Input number -1.1: HALF_UP round mode result: -1Input number -2.7: HALF_UP round mode result: -3Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{6, 1, -1, -3}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.HALF_UP)); } |
| UNNECESSARY | Asserts that the requested operation has an exact result, which means that no rounding is necessary. If this rounding mode is specified on an operation that yields an inexact result, a MathException is thrown. For example:Input number 5.5: UNNECESSARY round mode result: MathExceptionInput number 1.1: UNNECESSARY round mode result: MathExceptionInput number 1.0: UNNECESSARY round mode result: 1Input number -1.0: UNNECESSARY round mode result: -1Input number -2.2: UNNECESSARY round mode result: MathExceptionDecimal example1 = 5.5; Decimal example2 = 1.0; system.assertEquals(1,     example2.round(System.RoundingMode.UNNECESSARY)); try{     example1.round(System.RoundingMode.UNNECESSARY); } catch(Exception E) {     system.assertEquals('System.MathException', E.getTypeName()); } |
| UP | Rounds away from zero. This rounding mode always truncates any fractions (decimal points) prior to executing. Note that this rounding mode never decreases the magnitude of the calculated value. For example:Input number 5.5: UP round mode result: 6Input number 1.1: UP round mode result: 2Input number -1.1: UP round mode result: -2Input number -2.7: UP round mode result: -3Decimal[] example = new Decimal[]{5.5, 1.1, -1.1, -2.7}; Long[] expected = new Long[]{6, 2, -2, -3}; for(integer x = 0; x < example.size(); x++){     System.assertEquals(expected[x],         example[x].round(System.RoundingMode.UP)); } |

## Decimal Methods

The following are methods for Decimal.

-   **[abs()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_abs)**
    Returns the absolute value of the Decimal.
-   **[divide(divisor, scale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_divide)**
    Divides this Decimal by the specified divisor, and sets the scale, that is, the number of decimal places, of the result using the specified scale.
-   **[divide(divisor, scale, roundingMode)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_divide_2)**
    Divides this Decimal by the specified divisor, sets the scale, that is, the number of decimal places, of the result using the specified scale, and if necessary, rounds the value using the rounding mode.
-   **[doubleValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_doubleValue)**
    Returns the Double value of this Decimal.
-   **[format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_format)**
    Returns the String value of this Decimal using the locale of the context user.
-   **[intValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_intValue)**
    Returns the Integer value of this Decimal.
-   **[longValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_longValue)**
    Returns the Long value of this Decimal.
-   **[pow(exponent)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_pow)**
    Returns the value of this decimal raised to the power of the specified exponent.
-   **[precision()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_precision)**
    Returns the total number of digits for the Decimal.
-   **[round()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_round)**
    Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor.
-   **[round(roundingMode)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_round_2)**
    Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using the rounding mode specified by the rounding mode.
-   **[scale()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_scale)**
    Returns the scale of the Decimal, that is, the number of decimal places.
-   **[setScale(scale)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_setScale)**
    Returns the Decimal scaled to the specified number of decimal places, using half-even rounding, if necessary. Half-even rounding mode rounds toward the “nearest neighbor.” If both neighbors are equidistant, the number is rounded toward the even neighbor.
-   **[setScale(scale, roundingMode)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_setScale_2)**
    Returns the Decimal scaled to the specified number of decimal places, using the specified rounding mode, if necessary.
-   **[stripTrailingZeros()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_stripTrailingZeros)**
    Returns the Decimal with any trailing zeros removed.
-   **[toPlainString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_toPlainString)**
    Returns the String value of this Decimal, without using scientific notation.
-   **[valueOf(doubleToDecimal)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_valueOf)**
    Returns a Decimal that contains the value of the specified Double.
-   **[valueOf(longToDecimal)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_valueOf_2)**
    Returns a Decimal that contains the value of the specified Long.
-   **[valueOf(stringToDecimal)](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_System_Decimal_valueOf_3)**
    Returns a Decimal that contains the value of the specified String. As in Java, the string is interpreted as representing a signed Decimal.

### abs()

Returns the absolute value of the Decimal.

#### Signature

public Decimal abs()

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### divide(divisor, scale)

Divides this Decimal by the specified divisor, and sets the scale, that is, the number of decimal places, of the result using the specified scale.

#### Signature

public Decimal divide(Decimal divisor, Integer scale)

#### Parameters

divisor

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

scale

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### divide(divisor, scale, roundingMode)

Divides this Decimal by the specified divisor, sets the scale, that is, the number of decimal places, of the result using the specified scale, and if necessary, rounds the value using the rounding mode.

#### Signature

public Decimal divide(Decimal divisor, Integer scale, System.RoundingMode roundingMode)

#### Parameters

divisor

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

scale

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

roundingMode

Type: [System.RoundingMode](#apex_decimal_rounding_mode "Rounding mode specifies the rounding behavior for numerical operations capable of discarding precision.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### doubleValue()

Returns the Double value of this Decimal.

#### Signature

public Double doubleValue()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Example

```

```

### format()

Returns the String value of this Decimal using the locale of the context user.

#### Signature

public String format()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Scientific notation will be used if an exponent is needed.

#### Example

```

```

### intValue()

Returns the Integer value of this Decimal.

#### Signature

public Integer intValue()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### longValue()

Returns the Long value of this Decimal.

#### Signature

public Long longValue()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```

```

### pow(exponent)

Returns the value of this decimal raised to the power of the specified exponent.

#### Signature

public Decimal pow(Integer exponent)

#### Parameters

exponent

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The value of exponent must be between 0 and 32,767.

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Usage

If you use MyDecimal.pow(0), 1 is returned.

The Math.pow method does accept negative values.

#### Example

```

```

### precision()

Returns the total number of digits for the Decimal.

#### Signature

public Integer precision()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

For example, if the Decimal value was 123.45, precision returns 5. If the Decimal value is 123.123, precision returns 6.

```

```

### round()

Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor.

#### Signature

public Long round()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Usage

Note that this rounding mode statistically minimizes cumulative error when applied repeatedly over a sequence of calculations.

#### Example

```

```

### round(roundingMode)

Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using the rounding mode specified by the rounding mode.

#### Signature

public Long round(System.RoundingMode roundingMode)

#### Parameters

roundingMode

Type: [System.RoundingMode](#apex_decimal_rounding_mode "Rounding mode specifies the rounding behavior for numerical operations capable of discarding precision.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### scale()

Returns the scale of the Decimal, that is, the number of decimal places.

#### Signature

public Integer scale()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### setScale(scale)

Returns the Decimal scaled to the specified number of decimal places, using half-even rounding, if necessary. Half-even rounding mode rounds toward the “nearest neighbor.” If both neighbors are equidistant, the number is rounded toward the even neighbor.

#### Signature

public Decimal setScale(Integer scale)

#### Parameters

scale

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The value of scale must be between –33 and 33. If the value of scale is negative, your unscaled value is multiplied by 10 to the power of the negation of scale. For example, after this operation, the value of d is 4\*10^3.

```

```

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Usage

If you do not explicitly set the scale for a Decimal, the item from which the Decimal is created determines the scale.

-   If the Decimal is created as part of a query, the scale is based on the scale of the field returned from the query.
-   If the Decimal is created from a String, the scale is the number of characters after the decimal point of the String.
-   If the Decimal is created from a non-decimal number, the number is first converted to a String. The scale is then set using the number of characters after the decimal point.

#### Example

```

```

### setScale(scale, roundingMode)

Returns the Decimal scaled to the specified number of decimal places, using the specified rounding mode, if necessary.

#### Signature

public Decimal setScale(Integer scale, System.RoundingMode roundingMode)

#### Parameters

scale

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The value of scale must be between –33 and 33. If the value of scale is negative, your unscaled value is multiplied by 10 to the power of the negation of scale. For example, after this operation, the value of d is 4\*10^3.

```

```

roundingMode

Type: [System.RoundingMode](#apex_decimal_rounding_mode "Rounding mode specifies the rounding behavior for numerical operations capable of discarding precision.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Usage

If you do not explicitly set the scale for a Decimal, the item from which the Decimal is created determines the scale.

-   If the Decimal is created as part of a query, the scale is based on the scale of the field returned from the query.
-   If the Decimal is created from a String, the scale is the number of characters after the decimal point of the String.
-   If the Decimal is created from a non-decimal number, the number is first converted to a String. The scale is then set using the number of characters after the decimal point.

### stripTrailingZeros()

Returns the Decimal with any trailing zeros removed.

#### Signature

public Decimal stripTrailingZeros()

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### toPlainString()

Returns the String value of this Decimal, without using scientific notation.

#### Signature

public String toPlainString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(doubleToDecimal)

Returns a Decimal that contains the value of the specified Double.

#### Signature

public static Decimal valueOf(Double doubleToDecimal)

#### Parameters

doubleToDecimal

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### valueOf(longToDecimal)

Returns a Decimal that contains the value of the specified Long.

#### Signature

public static Decimal valueOf(Long longToDecimal)

#### Parameters

longToDecimal

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### valueOf(stringToDecimal)

Returns a Decimal that contains the value of the specified String. As in Java, the string is interpreted as representing a signed Decimal.

#### Signature

public static Decimal valueOf(String stringToDecimal)

#### Parameters

stringToDecimal

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Decimal](#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

## Code Examples

```apex
Decimal example1 = 5.5;
Decimal example2 = 1.0;
system.assertEquals(1,
    example2.round(System.RoundingMode.UNNECESSARY));
try{
    example1.round(System.RoundingMode.UNNECESSARY);
} catch(Exception E) {
    system.assertEquals('System.MathException', E.getTypeName());
}
```

```apex
Decimal myDecimal = -6.02214129;
System.assertEquals(6.02214129, myDecimal.abs());
```

```apex
Decimal decimalNumber = 19;
Decimal result = decimalNumber.divide(100, 3);
System.assertEquals(0.190, result);
```

```apex
Decimal myDecimal = 12.4567;
Decimal divDec = myDecimal.divide(7, 2, System.RoundingMode.UP);
System.assertEquals(divDec, 1.78);
```

```apex
Decimal myDecimal = 6.62606957;
Double value = myDecimal.doubleValue();
System.assertEquals(6.62606957, value);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Rounding Mode (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- Decimal Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- abs() (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- divide(divisor, scale) (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- divide(divisor, scale, roundingMode) (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- doubleValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- format() (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- intValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- longValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
