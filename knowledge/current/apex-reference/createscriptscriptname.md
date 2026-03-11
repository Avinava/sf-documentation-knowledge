---
title: "createScript(scriptName)"
domain: apex-reference
topic: createscriptscriptname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.439Z
keywords: [createScript, scriptName, Loads, DataWeave, 2.0, script, .dwl, metadata, file, deployed, org., then, run, Script.execute, method., Signature, Parameters, Return, Value]
---

# createScript(scriptName)

> Loads a DataWeave 2.0 script from the .dwl metadata file that is
        deployed in an org. The script can then be run using the Script.execute
        method.

### createScript(scriptName)

Loads a DataWeave 2.0 script from the .dwl metadata file that is deployed in an org. The script can then be run using the Script.execute method.

#### Signature

public static createScript(String scriptName)

#### Parameters

scriptName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the deployed metadata .dwl script (not including the file extension).

#### Return Value

Type: [DataWeave.Script](#apex_class_dataweave_Script "Contains the createScript() method to load DataWeave scripts and the execute() method to obtain script output in a DataWeave.Result object.")

DataWeave script that is used as a parameter in the Script.execute() method.