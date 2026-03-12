---
title: "Examples of DataWeave in Apex"
domain: apex-guide
topic: examples-of-dataweave-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T05:14:32.140Z
estimatedTokens: 479
keywords: [Examples, DataWeave, Apex, Here, code, samples, demonstrate, Apex., Note]
---

# Examples of DataWeave in Apex

> Here are code samples that demonstrate DataWeave in Apex.

# Examples of DataWeave in Apex

Here are code samples that demonstrate DataWeave in Apex.

To use DataWeave in Apex, follow these instructions with associated examples.

-   Create a DataWeave script source file.

    For example: csvToContacts.dwl.

    %dw 2.0 input records application/csv output application/apex --- records map(record) -> {  FirstName: record.first\_name,  LastName: record.last\_name,  Email: record.email } as Object {class: "Contact"}

-   Create the associated metadata file.

    For example: csvToContacts.dwl-meta.xml.

    <?xml version="1.0" encoding="UTF-8"?> <DataWeaveResource xmlns="http://soap.sforce.com/2006/04/metadata">     <apiVersion>58.0</apiVersion> <isGlobal>false</isGlobal> </DataWeaveResource>

-   Push the source to the scratch org using Salesforce CLI version v7.151.9 or higher. See [Salesforce CLI Release Notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71511-may-19-2022 "HTML (New Window)").
-   Invoke the DataWeave script from Apex and check the results from anonymous Apex.

    This example invokes the csvToContacts.dwl script.

    // CSV data for Contacts String inputCsv = 'first\_name,last\_name,email Codey,"The Bear",codey@salesforce.com';  DataWeave.Script dwscript = new DataWeaveScriptResource.csvToContacts(); DataWeave.Result dwresult = dwscript.execute(new Map<String, Object>{'records' => inputCsv}); List<Contact> results = (List<Contact>)dwresult.getValue(); Assert.areEqual(1, results.size()); Contact codeyContact = results\[0\]; Assert.areEqual('Codey',codeyContact.FirstName); Assert.areEqual('The Bear',codeyContact.LastName);


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Extensive code samples that demonstrate the DataWeave in Apex feature are available on [Developerforce](https://github.com/developerforce/DataWeaveInApex "HTML (New Window)").
