---
title: "Math Functions"
domain: bi-dev-guide-sql
topic: math-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.185Z
estimatedTokens: 1438
keywords: [Math, Functions, SQL, CRM, Analytics, supports]
---

# Math Functions

> SQL for CRM Analytics supports the following math functions.

# Math Functions

SQL for CRM Analytics supports the following math functions.

-   **[abs(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_abs.htm)**
    Returns the absolute number of n as a numeric value. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308.
-   **[acos(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_acos.htm)**
    Returns the arccosine value of radians value n. n can be any real number in the range of -1 <= n <= 1. If null is passed as an argument, acos() returns null.
-   **[asin(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_asin.htm)**
    Returns the arcsine value of radians value n. n can be any real number in the range of -1 <= n <= 1. If null is passed as an argument, sin() returns null.
-   **[atan(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_atan.htm)**
    Returns the arctan value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, atan() returns null.
-   **[ceil(n), ceiling(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_ceil.htm)**
    Returns the nearest integer of equal or greater value to n. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308.
-   **[cos(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_cos.htm)**
    Returns the cosine value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, cos() returns null.
-   **[degrees(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_degrees.htm)**
    Returns the degrees value of n radians. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null.
-   **[exp(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_exp.htm)**
    Returns the value of Euler's number e raised to the power of n, where e = 2.71828183… The smallest value for n that does not result in 0 is 3e-324. n can be any real numeric value in the range of -1.797e308 <= n <= 700.
-   **[floor(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_floor.htm)**
    Returns the nearest integer of equal or lesser value to n. n can be any real numeric value in the range of -1.797e308<= n <= 1.797e308.
-   **[ln(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_ln.htm)**
    Returns the base e (Euler's number) logarithm of a number n. The value n can be any positive, non-zero numeric value in the range 0 < n <= 1.797e308.
-   **[log(m,n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_log.htm)**
    Returns the natural logarithm (base m) of a number n. The values m and n can be any positive, non-zero numeric value in the range 0 < m, n <= 1.797e308 and m ≠ 1.
-   **[log10(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_log10.htm)**
    Returns the base 10 logarithm of a number n. The value n can be any positive, non-zero numeric value in the range 0 < n <= 1.797e308.
-   **[pi()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_pi.htm)**
    Returns the value of constant π, where π=3.14159.
-   **[power(m,n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_power.htm)**
    Returns m raised to the nth power. m, n can be any numeric value in the range of -1.797e308 <= m, n <= 1.797e308. Returns null if m = 0 and n < 0.
-   **[radians(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_radians.htm)**
    Returns the radians value of n degrees. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null.
-   **[round(n\[,m\])](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_round.htm)**
    Returns the value of n rounded to m decimal places. m can be negative, in which case the function returns n rounded to -m places to the left of the decimal point. If m is omitted, it returns n rounded to the nearest integer. For tie-breaking, it follows round half way from zero convention. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308. m can be an integer value between -15 and 15, inclusive.
-   **[sign(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_sign.htm)**
    Returns 1 if the numeric value, n is positive. It returns -1 if the n is negative, and 0 if n is 0. n can be any real number in the range of -1e308 <= n <= 1e308.
-   **[sin(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_sin.htm)**
    Returns the sine value of radians value n. ncan be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sin() returns null.
-   **[sqrt(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_sqrt.htm)**
    Returns the square root of a number n. The value n can be any non-negative numeric value in the range of 0 <= n <= 1.797e308.
-   **[tan(n)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_tan.htm)**
    Returns the tan value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, tan() returns null.
-   **[trunc(n\[,m\])](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_trunc.htm)**
    Returns the value of the numeric expression n truncated to m decimal places. m can be negative, in which case the function returns n truncated to -m places to the left of the decimal point. If m is omitted, it returns n truncated to the integer place. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308. m can be an integer value between -15 and 15 inclusive.

## Related Topics

- abs(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_abs.htm)
- acos(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_acos.htm)
- asin(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_asin.htm)
- atan(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_atan.htm)
- ceil(n), ceiling(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_ceil.htm)
- cos(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_cos.htm)
- degrees(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_degrees.htm)
- exp(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_exp.htm)
- floor(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_floor.htm)
- ln(n) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_math_ln.htm)
