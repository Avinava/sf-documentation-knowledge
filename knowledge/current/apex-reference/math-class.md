---
title: "Math Class"
domain: apex-reference
topic: math-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.529Z
keywords: [Math, Class, Returns, hyperbolic, tangent, doubleAngle., doubleAngle, defined, e-x, where, Euler's, number., words, equivalent, sinh, cosinh, absolute, value, exact, tanh]
---

# Math Class

> Returns the hyperbolic tangent of doubleAngle. The hyperbolic tangent
  of doubleAngle is defined to be (ex -
   e-x)/(ex + e-x) where e is Euler's
  number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.

### tanh(doubleAngle)

Returns the hyperbolic tangent of doubleAngle. The hyperbolic tangent of doubleAngle is defined to be (*e*x - *e*\-x)/(*e*x + *e*\-x) where *e* is Euler's number. In other words, it is equivalent to sinh(x)/cosinh(x). The absolute value of the exact tanh is always less than 1.

#### Signature

public static Double tanh(Double doubleAngle)

#### Parameters

doubleAngle

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")