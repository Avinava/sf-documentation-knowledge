---
title: "Static Functions"
domain: bi-dev-guide-wave-templates
topic: static-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.564Z
estimatedTokens: 516
keywords: [Functions, specialized, template, rules, Function, math, pow, min, max>, round, sfdc, _fma, checkInteger, checkBoolean, checkDate]
---

# Static Functions

> Static functions have specialized use in template rules.

# Static Functions

Static functions have specialized use in template rules.

## Function Name: math:pow

Parameters: Double a, Double b

Returns: Double

Recursive: Not supported

Description: Returns the value of the first argument raised to the power of the second argument.

## Function Name: math:min

Parameters: Double a, Double b

\>Returns: Double

Recursive: Not supported

Description: Returns the smaller of the two values.

## Function Name: math:max>

Parameters: Double a, Double b

Returns: Double

Recursive: Not supported

Description: Returns the greater of the two values.

## Function Name: math:round

Parameters: Double x, Int scale

Returns: Double

Recursive: Not supported

Description: Rounds the given value to the specified number of decimal places.

## Function Name: math:round

Parameters: Double x, Int scale

Returns: Double

Recursive: Not supported

Description: Rounds the given value to the specified number of decimal places.

## Function Name: sfdc\_fma:checkInteger

Parameters: String apiName

Returns: Int

Recursive: Not supported

Description: Returns the integer value of the LMO to subscriber FMA value for checkPackageIntegerValue.  See [FeatureManagement Class.](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_System_FeatureManagement.htm)

## Function Name: sfdc\_fma:checkBoolean

Parameters: String apiName

Returns: Boolean

Recursive: Not supported

Description: Returns the boolean value of the LMO to subscriber FMA value for checkPackageBooleanValue.  See [FeatureManagement Class.](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_System_FeatureManagement.htm)

## Function Name: sfdc\_fma:checkDate

Parameters: String apiName

Returns: Date

Recursive: Not supported

Description: Returns the date value of the LMO to subscriber FMA value for checkPackageDateValue.  See [FeatureManagement Class.](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_System_FeatureManagement.htm)
