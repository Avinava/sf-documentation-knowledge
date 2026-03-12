---
title: "Math Class"
domain: apex-reference
topic: math-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.959Z
estimatedTokens: 12683
namespace: System
keywords: [Math, mathematical, constant, base, natural, logarithms, abs, decimalValue, doubleValue, integerValue, longValue, acos, decimalAngle, doubleAngle, asin]
---

# Math Class

> Returns the mathematical constant e, which is the base of
   natural logarithms.

**Namespace:** `System`

# Math Class

Contains methods for mathematical operations.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Math Fields

The following are fields for Math.

-   **[E](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_e)**
    Returns the mathematical constant *e*, which is the base of natural logarithms.
-   **[PI](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_pi)**
    Returns the mathematical constant *pi*, which is the ratio of the circumference of a circle to its diameter.

### E

Returns the mathematical constant *e*, which is the base of natural logarithms.

#### Signature

public static final Double E

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### PI

Returns the mathematical constant *pi*, which is the ratio of the circumference of a circle to its diameter.

#### Signature

public static final Double PI

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

## Math Methods

The following are methods for Math. All methods are static.

-   **[abs(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_abs)**
    Returns the absolute value of the specified Decimal.
-   **[abs(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_abs_2)**
    Returns the absolute value of the specified Double.
-   **[abs(integerValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_abs_3)**
    Returns the absolute value of the specified Integer.
-   **[abs(longValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_abs_4)**
    Returns the absolute value of the specified Long.
-   **[acos(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_acos)**
    Returns the arc cosine of an angle, in the range of 0.0 through *pi*.
-   **[acos(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_acos_2)**
    Returns the arc cosine of an angle, in the range of 0.0 through *pi*.
-   **[asin(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_asin)**
    Returns the arc sine of an angle, in the range of -*pi*/2 through *pi*/2.
-   **[asin(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_asin_2)**
    Returns the arc sine of an angle, in the range of -*pi*/2 through *pi*/2.
-   **[atan(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_atan)**
    Returns the arc tangent of an angle, in the range of -*pi*/2 through *pi*/2.
-   **[atan(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_atan_2)**
    Returns the arc tangent of an angle, in the range of -*pi*/2 through *pi*/2.
-   **[atan2(xCoordinate, yCoordinate)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_atan2)**
    Converts rectangular coordinates (xCoordinate and yCoordinate) to polar (r and theta). This method computes the phase theta by computing an arc tangent of xCoordinate/yCoordinate in the range of -*pi* to *pi*.
-   **[atan2(xCoordinate, yCoordinate)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_atan2_2)**
    Converts rectangular coordinates (xCoordinate and yCoordinate) to polar (r and theta). This method computes the phase theta by computing an arc tangent of xCoordinate/yCoordinate in the range of -*pi* to *pi*.
-   **[cbrt(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cbrt)**
    Returns the cube root of the specified Decimal. The cube root of a negative value is the negative of the cube root of that value's magnitude.
-   **[cbrt(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cbrt_2)**
    Returns the cube root of the specified Double. The cube root of a negative value is the negative of the cube root of that value's magnitude.
-   **[ceil(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_ceil)**
    Returns the smallest (closest to negative infinity) Decimal that is not less than the argument and is equal to a mathematical integer.
-   **[ceil(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_ceil_2)**
    Returns the smallest (closest to negative infinity) Double that is not less than the argument and is equal to a mathematical integer.
-   **[cos(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cos)**
    Returns the trigonometric cosine of the angle specified by decimalAngle.
-   **[cos(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cos_2)**
    Returns the trigonometric cosine of the angle specified by doubleAngle.
-   **[cosh(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cosh)**
    Returns the hyperbolic cosine of decimalAngle. The hyperbolic cosine of d is defined to be (*e*x + *e*\-x)/2 where *e* is Euler's number.
-   **[cosh(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_cosh_2)**
    Returns the hyperbolic cosine of doubleAngle. The hyperbolic cosine of d is defined to be (*e*x + *e*\-x)/2 where *e* is Euler's number.
-   **[exp(exponentDecimal)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_exp)**
    Returns Euler's number *e* raised to the power of the specified Decimal.
-   **[exp(exponentDouble)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_exp_2)**
    Returns Euler's number *e* raised to the power of the specified Double.
-   **[floor(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_floor)**
    Returns the largest (closest to positive infinity) Decimal that is not greater than the argument and is equal to a mathematical integer.
-   **[floor(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_floor_2)**
    Returns the largest (closest to positive infinity) Double that is not greater than the argument and is equal to a mathematical integer.
-   **[log(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_log)**
    Returns the natural logarithm (base *e*) of the specified Decimal.
-   **[log(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_log_2)**
    Returns the natural logarithm (base *e*) of the specified Double.
-   **[log10(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_log10)**
    Returns the logarithm (base *10*) of the specified Decimal.
-   **[log10(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_log10_2)**
    Returns the logarithm (base *10*) of the specified Double.
-   **[max(decimalValue1, decimalValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_max)**
    Returns the larger of the two specified Decimals.
-   **[max(doubleValue1, doubleValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_max_2)**
    Returns the larger of the two specified Doubles.
-   **[max(integerValue1, integerValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_max_3)**
    Returns the larger of the two specified Integers.
-   **[max(longValue1, longValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_max_4)**
    Returns the larger of the two specified Longs.
-   **[min(decimalValue1, decimalValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_min)**
    Returns the smaller of the two specified Decimals.
-   **[min(doubleValue1, doubleValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_min_2)**
    Returns the smaller of the two specified Doubles.
-   **[min(integerValue1, integerValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_min_3)**
    Returns the smaller of the two specified Integers.
-   **[min(longValue1, longValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_min_4)**
    Returns the smaller of the two specified Longs.
-   **[mod(integerValue1, integerValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_mod)**
    Returns the remainder of integerValue1 divided by integerValue2.
-   **[mod(longValue1, longValue2)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_mod_2)**
    Returns the remainder of longValue1 divided by longValue2.
-   **[pow(doubleValue, exponent)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_pow)**
    Returns the value of the first Double raised to the power of exponent.
-   **[random()](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_random)**
    Returns a positive Double that is greater than or equal to 0.0 and less than 1.0.
-   **[rint(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_rint)**
    Returns the value that is closest in value to decimalValue and is equal to a mathematical integer.
-   **[rint(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_rint_2)**
    Returns the value that is closest in value to doubleValue and is equal to a mathematical integer.
-   **[round(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_round)**
    Do not use. This method is deprecated as of the Winter '08 release. Instead, use Math.roundToLong. Returns the closest Integer to the specified Double. If the result is less than -2,147,483,648 or greater than 2,147,483,647, Apex generates an error.
-   **[round(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_round_2)**
    Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor. If the result is less than -2,147,483,648 or greater than 2,147,483,647, Apex generates an error.
-   **[roundToLong(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_roundToLong)**
    Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor.
-   **[roundToLong(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_roundToLong_2)**
    Returns the closest Long to the specified Double.
-   **[signum(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_signum)**
    Returns the signum function of the specified Decimal, which is 0 if decimalValue is 0, 1.0 if decimalValue is greater than 0, -1.0 if decimalValue is less than 0.
-   **[signum(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_signum_2)**
    Returns the signum function of the specified Double, which is 0 if doubleValue is 0, 1.0 if doubleValue is greater than 0, -1.0 if doubleValue is less than 0.
-   **[sin(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sin)**
    Returns the trigonometric sine of the angle specified by decimalAngle.
-   **[sin(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sin_2)**
    Returns the trigonometric sine of the angle specified by doubleAngle.
-   **[sinh(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sinh)**
    Returns the hyperbolic sine of decimalAngle. The hyperbolic sine of decimalAngle is defined to be (*e*x - *e*\-x)/2 where *e* is Euler's number.
-   **[sinh(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sinh_2)**
    Returns the hyperbolic sine of doubleAngle. The hyperbolic sine of doubleAngle is defined to be (*e*x - *e*\-x)/2 where *e* is Euler's number.
-   **[sqrt(decimalValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sqrt)**
    Returns the correctly rounded positive square root of decimalValue.
-   **[sqrt(doubleValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_sqrt_2)**
    Returns the correctly rounded positive square root of doubleValue.
-   **[tan(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_tan)**
    Returns the trigonometric tangent of the angle specified by decimalAngle.
-   **[tan(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_tan_2)**
    Returns the trigonometric tangent of the angle specified by doubleAngle.
-   **[tanh(decimalAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_tanh)**
    Returns the hyperbolic tangent of decimalAngle. The hyperbolic tangent of decimalAngle is defined to be (*e*x - *e*\-x)/(*e*x + *e*\-x) where *e* is Euler's number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.
-   **[tanh(doubleAngle)](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_System_Math_tanh_2)**
    Returns the hyperbolic tangent of doubleAngle. The hyperbolic tangent of doubleAngle is defined to be (*e*x - *e*\-x)/(*e*x + *e*\-x) where *e* is Euler's number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.

### abs(decimalValue)

Returns the absolute value of the specified Decimal.

#### Signature

public static Decimal abs(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### abs(doubleValue)

Returns the absolute value of the specified Double.

#### Signature

public static Double abs(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### abs(integerValue)

Returns the absolute value of the specified Integer.

#### Signature

public static Integer abs(Integer integerValue)

#### Parameters

integerValue

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### abs(longValue)

Returns the absolute value of the specified Long.

#### Signature

public static Long abs(Long longValue)

#### Parameters

longValue

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### acos(decimalAngle)

Returns the arc cosine of an angle, in the range of 0.0 through *pi*.

#### Signature

public static Decimal acos(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### acos(doubleAngle)

Returns the arc cosine of an angle, in the range of 0.0 through *pi*.

#### Signature

public static Double acos(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### asin(decimalAngle)

Returns the arc sine of an angle, in the range of -*pi*/2 through *pi*/2.

#### Signature

public static Decimal asin(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### asin(doubleAngle)

Returns the arc sine of an angle, in the range of -*pi*/2 through *pi*/2.

#### Signature

public static Double asin(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### atan(decimalAngle)

Returns the arc tangent of an angle, in the range of -*pi*/2 through *pi*/2.

#### Signature

public static Decimal atan(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### atan(doubleAngle)

Returns the arc tangent of an angle, in the range of -*pi*/2 through *pi*/2.

#### Signature

public static Double atan(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### atan2(xCoordinate, yCoordinate)

Converts rectangular coordinates (xCoordinate and yCoordinate) to polar (r and theta). This method computes the phase theta by computing an arc tangent of xCoordinate/yCoordinate in the range of -*pi* to *pi*.

#### Signature

public static Decimal atan2(Decimal xCoordinate, Decimal yCoordinate)

#### Parameters

xCoordinate

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

yCoordinate

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### atan2(xCoordinate, yCoordinate)

Converts rectangular coordinates (xCoordinate and yCoordinate) to polar (r and theta). This method computes the phase theta by computing an arc tangent of xCoordinate/yCoordinate in the range of -*pi* to *pi*.

#### Signature

public static Double atan2(Double xCoordinate, Double yCoordinate)

#### Parameters

xCoordinate

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

yCoordinate

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### cbrt(decimalValue)

Returns the cube root of the specified Decimal. The cube root of a negative value is the negative of the cube root of that value's magnitude.

#### Signature

public static Decimal cbrt(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### cbrt(doubleValue)

Returns the cube root of the specified Double. The cube root of a negative value is the negative of the cube root of that value's magnitude.

#### Signature

public static Double cbrt(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### ceil(decimalValue)

Returns the smallest (closest to negative infinity) Decimal that is not less than the argument and is equal to a mathematical integer.

#### Signature

public static Decimal ceil(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### ceil(doubleValue)

Returns the smallest (closest to negative infinity) Double that is not less than the argument and is equal to a mathematical integer.

#### Signature

public static Double ceil(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### cos(decimalAngle)

Returns the trigonometric cosine of the angle specified by decimalAngle.

#### Signature

public static Decimal cos(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### cos(doubleAngle)

Returns the trigonometric cosine of the angle specified by doubleAngle.

#### Signature

public static Double cos(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### cosh(decimalAngle)

Returns the hyperbolic cosine of decimalAngle. The hyperbolic cosine of d is defined to be (*e*x + *e*\-x)/2 where *e* is Euler's number.

#### Signature

public static Decimal cosh(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### cosh(doubleAngle)

Returns the hyperbolic cosine of doubleAngle. The hyperbolic cosine of d is defined to be (*e*x + *e*\-x)/2 where *e* is Euler's number.

#### Signature

public static Double cosh(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### exp(exponentDecimal)

Returns Euler's number *e* raised to the power of the specified Decimal.

#### Signature

public static Decimal exp(Decimal exponentDecimal)

#### Parameters

exponentDecimal

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### exp(exponentDouble)

Returns Euler's number *e* raised to the power of the specified Double.

#### Signature

public static Double exp(Double exponentDouble)

#### Parameters

exponentDouble

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### floor(decimalValue)

Returns the largest (closest to positive infinity) Decimal that is not greater than the argument and is equal to a mathematical integer.

#### Signature

public static Decimal floor(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### floor(doubleValue)

Returns the largest (closest to positive infinity) Double that is not greater than the argument and is equal to a mathematical integer.

#### Signature

public static Double floor(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### log(decimalValue)

Returns the natural logarithm (base *e*) of the specified Decimal.

#### Signature

public static Decimal log(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### log(doubleValue)

Returns the natural logarithm (base *e*) of the specified Double.

#### Signature

public static Double log(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### log10(decimalValue)

Returns the logarithm (base *10*) of the specified Decimal.

#### Signature

public static Decimal log10(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### log10(doubleValue)

Returns the logarithm (base *10*) of the specified Double.

#### Signature

public static Double log10(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### max(decimalValue1, decimalValue2)

Returns the larger of the two specified Decimals.

#### Signature

public static Decimal max(Decimal decimalValue1, Decimal decimalValue2)

#### Parameters

decimalValue1

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

decimalValue2

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### max(doubleValue1, doubleValue2)

Returns the larger of the two specified Doubles.

#### Signature

public static Double max(Double doubleValue1, Double doubleValue2)

#### Parameters

doubleValue1

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

doubleValue2

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### max(integerValue1, integerValue2)

Returns the larger of the two specified Integers.

#### Signature

public static Integer max(Integer integerValue1, Integer integerValue2)

#### Parameters

integerValue1

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

integerValue2

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### max(longValue1, longValue2)

Returns the larger of the two specified Longs.

#### Signature

public static Long max(Long longValue1, Long longValue2)

#### Parameters

longValue1

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

longValue2

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### min(decimalValue1, decimalValue2)

Returns the smaller of the two specified Decimals.

#### Signature

public static Decimal min(Decimal decimalValue1, Decimal decimalValue2)

#### Parameters

decimalValue1

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

decimalValue2

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Example

```

```

### min(doubleValue1, doubleValue2)

Returns the smaller of the two specified Doubles.

#### Signature

public static Double min(Double doubleValue1, Double doubleValue2)

#### Parameters

doubleValue1

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

doubleValue2

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### min(integerValue1, integerValue2)

Returns the smaller of the two specified Integers.

#### Signature

public static Integer min(Integer integerValue1, Integer integerValue2)

#### Parameters

integerValue1

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

integerValue2

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### min(longValue1, longValue2)

Returns the smaller of the two specified Longs.

#### Signature

public static Long min(Long longValue1, Long longValue2)

#### Parameters

longValue1

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

longValue2

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### mod(integerValue1, integerValue2)

Returns the remainder of integerValue1 divided by integerValue2.

#### Signature

public static Integer mod(Integer integerValue1, Integer integerValue2)

#### Parameters

integerValue1

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

integerValue2

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### mod(longValue1, longValue2)

Returns the remainder of longValue1 divided by longValue2.

#### Signature

public static Long mod(Long longValue1, Long longValue2)

#### Parameters

longValue1

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

longValue2

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### pow(doubleValue, exponent)

Returns the value of the first Double raised to the power of exponent.

#### Signature

public static Double pow(Double doubleValue, Double exponent)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

exponent

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### random()

Returns a positive Double that is greater than or equal to 0.0 and less than 1.0.

#### Signature

public static Double random()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### rint(decimalValue)

Returns the value that is closest in value to decimalValue and is equal to a mathematical integer.

#### Signature

public static Decimal rint(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### rint(doubleValue)

Returns the value that is closest in value to doubleValue and is equal to a mathematical integer.

#### Signature

public static Double rint(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### round(doubleValue)

Do not use. This method is deprecated as of the Winter '08 release. Instead, use Math.roundToLong. Returns the closest Integer to the specified Double. If the result is less than -2,147,483,648 or greater than 2,147,483,647, Apex generates an error.

#### Signature

public static Integer round(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### round(decimalValue)

Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor. If the result is less than -2,147,483,648 or greater than 2,147,483,647, Apex generates an error.

#### Signature

public static Integer round(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Note that this rounding mode statistically minimizes cumulative error when applied repeatedly over a sequence of calculations.

#### Example

```

```

### roundToLong(decimalValue)

Returns the rounded approximation of this Decimal. The number is rounded to zero decimal places using half-even rounding mode, that is, it rounds towards the “nearest neighbor” unless both neighbors are equidistant, in which case, this mode rounds towards the even neighbor.

#### Signature

public static Long roundToLong(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Usage

Note that this rounding mode statistically minimizes cumulative error when applied repeatedly over a sequence of calculations.

#### Example

```

```

### roundToLong(doubleValue)

Returns the closest Long to the specified Double.

#### Signature

public static Long roundToLong(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### signum(decimalValue)

Returns the signum function of the specified Decimal, which is 0 if decimalValue is 0, 1.0 if decimalValue is greater than 0, -1.0 if decimalValue is less than 0.

#### Signature

public static Decimal signum(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### signum(doubleValue)

Returns the signum function of the specified Double, which is 0 if doubleValue is 0, 1.0 if doubleValue is greater than 0, -1.0 if doubleValue is less than 0.

#### Signature

public static Double signum(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### sin(decimalAngle)

Returns the trigonometric sine of the angle specified by decimalAngle.

#### Signature

public static Decimal sin(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### sin(doubleAngle)

Returns the trigonometric sine of the angle specified by doubleAngle.

#### Signature

public static Double sin(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### sinh(decimalAngle)

Returns the hyperbolic sine of decimalAngle. The hyperbolic sine of decimalAngle is defined to be (*e*x - *e*\-x)/2 where *e* is Euler's number.

#### Signature

public static Decimal sinh(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### sinh(doubleAngle)

Returns the hyperbolic sine of doubleAngle. The hyperbolic sine of doubleAngle is defined to be (*e*x - *e*\-x)/2 where *e* is Euler's number.

#### Signature

public static Double sinh(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### sqrt(decimalValue)

Returns the correctly rounded positive square root of decimalValue.

#### Signature

public static Decimal sqrt(Decimal decimalValue)

#### Parameters

decimalValue

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### sqrt(doubleValue)

Returns the correctly rounded positive square root of doubleValue.

#### Signature

public static Double sqrt(Double doubleValue)

#### Parameters

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### tan(decimalAngle)

Returns the trigonometric tangent of the angle specified by decimalAngle.

#### Signature

public static Decimal tan(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### tan(doubleAngle)

Returns the trigonometric tangent of the angle specified by doubleAngle.

#### Signature

public static Double tan(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### tanh(decimalAngle)

Returns the hyperbolic tangent of decimalAngle. The hyperbolic tangent of decimalAngle is defined to be (*e*x - *e*\-x)/(*e*x + *e*\-x) where *e* is Euler's number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.

#### Signature

public static Decimal tanh(Decimal decimalAngle)

#### Parameters

decimalAngle

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### tanh(doubleAngle)

Returns the hyperbolic tangent of doubleAngle. The hyperbolic tangent of doubleAngle is defined to be (*e*x - *e*\-x)/(*e*x + *e*\-x) where *e* is Euler's number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.

#### Signature

public static Double tanh(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

## Code Examples

```
Integer i = -42;
Integer i2 = math.abs(i);
system.assertEquals(i2, 42);
```

```
Decimal larger = math.max(12.3, 156.6);
system.assertEquals(larger, 156.6);
```

```
Decimal smaller = math.min(12.3, 156.6);
system.assertEquals(smaller, 12.3);
```

```
Integer remainder = math.mod(12, 2);
system.assertEquals(remainder, 0);

Integer remainder2 = math.mod(8, 3);
system.assertEquals(remainder2, 2);
```

```apex
Decimal d1 = 4.5;
Integer i1 = Math.round(d1);
System.assertEquals(4, i1);

Decimal d2 = 5.5;
Integer i2 = Math.round(d2);
System.assertEquals(6, i2);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- abs(decimalValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- abs(doubleValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- abs(integerValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- abs(longValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- acos(decimalAngle) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- acos(doubleAngle) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- asin(decimalAngle) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
- asin(doubleAngle) (atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm)
