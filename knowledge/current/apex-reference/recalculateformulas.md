---
title: "recalculateFormulas()"
domain: apex-reference
topic: recalculateformulas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.668Z
keywords: [recalculateFormulas, Deprecated, API, version, 57.0., method, System.Formula, class, instead., Signature, Return, Value, Usage, See]
---

# recalculateFormulas()

> Deprecated as of API version 57.0. Use the recalculateFormulas() method in the System.Formula class instead.

### recalculateFormulas()

**Deprecated as of API version 57.0. Use the recalculateFormulas() method in the System.Formula class instead.**

#### Signature

public Void recalculateFormulas()

#### Return Value

Type: Void

#### Usage

This method doesn’t recalculate cross-object formulas. If you call this method on objects that have both cross-object and non-cross-object formula fields, only the non-cross-object formula fields are recalculated.

Each recalculateFormulas call counts against the SOQL query limits. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

#### See Also

-   [recalculateFormulas(sobjects)](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_recalculateFormulas "Updates (recalculates) all formula fields on the input SObjects.")
    
-   [What Is a Cross-Object Formula?](https://help.salesforce.com/HTViewHelpDoc?id=customize_cross_object.htm&language=en_US "What Is a Cross-Object Formula? - HTML (New Window)")