---
title: "setSelected(selectedRecords)"
domain: apex-reference
topic: setselectedselectedrecords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.297Z
keywords: [setSelected, selectedRecords, Set, selected, records, specified, argument., Signature, Parameters, Return, Value, Usage, Example, See]
---

# setSelected(selectedRecords)

> Set the selected records to the records specified in the
      selectedRecords argument.

### setSelected(selectedRecords)

Set the selected records to the records specified in the selectedRecords argument.

#### Signature

public Void setSelected(sObject\[\] selectedRecords)

#### Parameters

selectedRecords

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### Return Value

Type: Void

#### Usage

Use the setSelected() method in your Apex controller or controller extension to manually set the records displayed on a Visualforce page. The setSelected() method overwrites any previously selected records with the records specified in the selectedRecords argument.

#### Example

AccountNamePage shows a table of account names. MyControllerExtension’s constructor contains a SOQL query that returns a list of accounts. This list is passed into setSelected() so that the account records in the list are selected and displayed in the table.

```

```

#### See Also

-   [*Visualforce Developer Guide*: Accessing Data with List Controllers](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_access_data.htm "Visualforce Developer Guide: Accessing Data with List
    Controllers - HTML (New Window)")