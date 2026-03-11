---
title: "execute(parameters)"
domain: apex-reference
topic: executeparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.439Z
keywords: [execute, parameters, Executes, DataWeave, script, loaded, createScript, method, returns, output., Signature, Parameters, Return, Value]
---

# execute(parameters)

> Executes the DataWeave script that is loaded using the
            createScript() method and returns the script output.

### execute(parameters)

Executes the DataWeave script that is loaded using the createScript() method and returns the script output.

#### Signature

public execute(Map<String,Object\> parameters)

#### Parameters

parameters

Type: Map<String,Object>

Input to the DataWeave script. The keys correspond to the input directive names defined in the DataWeave header.

See [Input Directive](https://docs.mulesoft.com/dataweave/1.2/dataweave-language-introduction#input-directive) and [DataWeave Header](https://docs.mulesoft.com/dataweave/1.2/dataweave-language-introduction#dataweave-header).

#### Return Value

Type: [DataWeave.Result](atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm#apex_class_dataweave_Result "Contains methods to retrieve data that was transformed using Script class methods.")

The DataWeave.Result object contains the script output.