---
title: "Formula Evaluation in Apex"
domain: apex-guide
topic: formula-evaluation-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.459Z
estimatedTokens: 653
keywords: [Formula, Evaluation, Apex, evaluation, helps, avoid, unnecessary, DML, statements, recalculate, formula, field, values, evaluate, dynamic, expressions., Dynamic, formulas, support, SObjects]
---

# Formula Evaluation in Apex

> Formula evaluation in Apex helps avoid unnecessary DML statements to recalculate
        formula field values and evaluate dynamic formula expressions. Dynamic formulas in Apex
        support SObjects and Apex objects as context objects. The context type that corresponds to
        the Apex class used in the FormulaBuilder.withType()
        method must be a global, user-defined Apex class. Any fields, properties, or methods that
        the formula references must also be global.

# Formula Evaluation in Apex

Formula evaluation in Apex helps avoid unnecessary DML statements to recalculate formula field values and evaluate dynamic formula expressions. Dynamic formulas in Apex support SObjects and Apex objects as context objects. The context type that corresponds to the Apex class used in the FormulaBuilder.withType() method must be a global, user-defined Apex class. Any fields, properties, or methods that the formula references must also be global.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If formula fields on the input SObjects require a round-trip request to the database, use the [Formula.recalculateFormulas()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_recalculateFormulas) method.

Formulas in Apex support these features.

-   Reference Apex types in formula fields. The values contained in individual components of such Apex types are accessed and evaluated by the formula. [Address](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_system_Address.htm#topic-title), [Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_system_Location.htm#topic-title), [URL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_url.htm#topic-title), and [UUID](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_UUID.htm#apex_class_System_UUID) System types are supported.
-   Reference standard lookups and custom lookups in formula fields.
-   Access polymorphic relationship fields.
-   Access the return value from the toString() method in formula fields.

Formula evaluation in Apex is bound by the [formula field character limit](https://help.salesforce.com/s/articleView?id=platform.formula_field_limits.htm&type=5&language=en_US), but not the compile size limit. A formula can contain up to 3,900 characters including spaces, return characters, and comments.

Formula functions that are available to use in Apex are ones that can be used in validation rules. For details, see [Formula Operators and Functions by Context](https://help.salesforce.com/s/articleView?id=platform.customize_functions.htm&type=5&language=en_US).

#### See Also

-   [*Apex Reference Guide:* FormulaEval Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_formulaeval.htm "Apex Reference Guide: FormulaEval Namespace - HTML (New Window)")
