---
title: "Implementing DataWeave in Apex"
domain: apex-guide
topic: implementing-dataweave-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.203Z
keywords: [Implementing, DataWeave, Apex, Namespace, Supporting, Information, Versioned, Behavior, Changes, See]
---

# Implementing DataWeave in Apex

# Implementing DataWeave in Apex

Create DataWeave scripts as metadata and invoke them directly from Apex. Use class methods and exceptions in the DataWeave namespace to load and execute the scripts.

## DataWeave Namespace

The DataWeave namespace provides classes and methods to support the invocation of DataWeave scripts from Apex. The Script class contains the createScript() method to load DataWeave scripts from .dwl metadata files that have been deployed to an org. The resulting script can then be run with a payload using the execute() method to obtain script output in a DataWeave.Result object. The Result class contains methods to retrieve script output using Script class methods. For more information on these classes and methods, see [DataWeave Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_DataWeave.htm "HTML (New Window)").

For every DataWeave script, an inner class of type DataWeaveScriptResource.ScriptName is generated. The inner class extends the DataWeave.Script class. You can use the generated DataWeaveScriptResource.ScriptName class instead of using the actual script name via the createScript() method. DataWeave scripts that are currently being referenced via this inner class can't be deleted. To make the generated DataWeaveScriptResource class global, set the isGlobal field in the DataWeaveResource metadata object.

<?xml version="1.0" encoding="UTF-8"?> <DataWeaveResource xmlns="http://soap.sforce.com/2006/04/metadata"> <apiVersion>58.0</apiVersion> <isGlobal>true</isGlobal> </DataWeaveResource>

The catchable System.DataWeaveScriptException exception is available for error handling. Runtime script exceptions that occur within DataWeave are exposed to Apex with this exception type.

DataWeave scripts support logging using the log(string, value) function. Log messages that originate from DataWeave are reflected in Apex debug logs as DATAWEAVE\_USER\_DEBUG events, under the Apex Code log category at the DEBUG log level.

## Supporting Information

These tools support the development of DataWeave scripts.

-   [DataWeave Interactive Learning](https://sfdc.co/dwlangfun "HTML (New Window)") is an online interactive playground that you can use to test your DataWeave scripts.
-   [DataWeave 2.0 VSCode marketplace extension](https://marketplace.visualstudio.com/items?itemName=MuleSoftInc.dataweave "HTML (New Window)") adds code highlighting and other feature support for editing DataWeave scripts.

## Versioned Behavior Changes

These versions of DataWeave script syntax are supported in Apex.

-   API version 61.0 and earlier: [DataWeave 2.5](https://docs.mulesoft.com/dataweave/2.5/)
-   API version 62.0: [DataWeave 2.8](https://docs.mulesoft.com/dataweave/2.8/)
-   API version 63.0 and later: [DataWeave 2.9](https://docs.mulesoft.com/dataweave/2.9/)

#### See Also

-   [Limitations of DataWeave in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/DataWeaveInApex_limitations.htm "Limitations of DataWeave in Apex - HTML (New Window)")