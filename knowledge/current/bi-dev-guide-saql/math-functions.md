---
title: "Math Functions"
domain: bi-dev-guide-saql
topic: math-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.426Z
estimatedTokens: 1749
keywords: [Math, Functions, perform, numeric, operations, SAQL, query]
---

# Math Functions

> To perform numeric operations in a SAQL query, use math
        functions.

# Math Functions

To perform numeric operations in a SAQL query, use math functions.

You can use SAQL math functions in foreach statements and in the filter by clause after a foreach statement.

You can't use math functions in a group by clause or in an order by clause. You also can't use math functions in the filter by clause before a foreach statement.

-   **[abs(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_abs.htm)**
    Returns the absolute number of n as a numeric value. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.
-   **[acos(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_acos.htm)**
    Returns the arccosine value of radians value n. n can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, acos() returns null. This function can only be used in a foreach statement.
-   **[asin(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_asin.htm)**
    Returns the arcsine value of radians value n. n can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, asin() returns null.This function can only be used in a foreach statement.
-   **[atan(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_atan.htm)**
    Returns the arctangent value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, atan() returns null. This function can only be used in a foreach statement.
-   **[ceil(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_ceil.htm)**
    Returns the nearest integer of equal or greater value to n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.
-   **[cos(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_cos.htm)**
    Returns the cosine value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, cos() returns null. This function can only be used in a foreach statement.
-   **[degrees(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_degrees.htm)**
    Returns the degrees value of a radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, degrees() returns null. This function can only be used in a foreach statement.
-   **[exp(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_exp.htm)**
    Returns the value of Euler's number e raised to the power of n, where e = 2.71828183… The smallest value for n that doesn’t result in 0 is 3e-324. n can be any real numeric value in the range of -1e308 <= n <= 700. This function can only be used in a foreach statement.
-   **[floor(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_floor.htm)**
    Returns the nearest integer of equal or lesser value to n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.
-   **[log(m, n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_log.htm)**
    Returns the natural logarithm (base m) of a number n. The values m and n can be any positive, non-zero numeric value in the range 0 < m, n <= 1e308 and m ≠ 1. The smallest value for m or n that will not produce 0 is log(10, 0.3e-323). This function can only be used in a foreach statement.
-   **[pi()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_pi.htm)**
    Returns the value of π, where π=3.14139265. This function can only be used in a foreach statement.
-   **[power(m, n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_power.htm)**
    Returns m raised to the nth power. m, n can be any numeric value in the range of -1e308 <= m, n <= 1e308. Returns null if m = 0 and n < 0. This function can only be used in a foreach statement.
-   **[radians(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_radians.htm)**
    Returns the radians value of a degrees value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null. This function can only be used in a foreach statement.
-   **[round(n\[, m\])](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_round.htm)**
    Returns the value of n rounded to m decimal places. m can be negative, in which case the function returns n rounded to -m places to the left of the decimal point. If m is omitted, it returns n rounded to the nearest integer. For tie-breaking, it follows round half way from zero convention. n can be any real numeric value in the range of -1e308 <= n <= 1e308. m can be an integer value between -15 and 15, inclusive. This function can only be used in a foreach statement.
-   **[sign(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_sign.htm)**
    Returns 1 if the numeric value, n is positive. It returns -1 if the n is negative, and 0 if n is 0. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sign() returns null. This function can only be used in a foreach statement.
-   **[sin(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_sin.htm)**
    Returns the sine value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sin() returns null. This function can only be used in a foreach statement.
-   **[sqrt(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_sqrt.htm)**
    Returns the square root of a number n. The value n can be any non-negative numeric value in the range of 0 <= n <= 1e308. This function can only be used in a foreach statement.
-   **[tan(n)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_tan.htm)**
    Returns the tangent value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, tan() returns null. This function can only be used in a foreach statement.
-   **[trunc(n\[, m\])](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_trunc.htm)**
    Returns the value of the numeric expression n truncated to m decimal places. m can be negative, in which case the function returns n truncated to -m places to the left of the decimal point. If m is omitted, it returns n truncated to the integer place. n can be any real numeric value in the range of -1e308 <= n <= 1e308. m can be an integer value between -15 and 15 inclusive. This function can only be used in a foreach statement.

## Related Topics

- abs(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_abs.htm)
- acos(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_acos.htm)
- asin(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_asin.htm)
- atan(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_atan.htm)
- ceil(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_ceil.htm)
- cos(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_cos.htm)
- degrees(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_degrees.htm)
- exp(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_exp.htm)
- floor(n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_floor.htm)
- log(m, n) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_math_log.htm)
