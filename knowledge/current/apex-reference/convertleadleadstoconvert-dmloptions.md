---
title: "convertLead(leadsToConvert, dmlOptions)"
domain: apex-reference
topic: convertleadleadstoconvert-dmloptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.169Z
keywords: [convertLead, leadsToConvert, dmlOptions, Converts, list, LeadConvert, objects, accounts, contacts, well, optionally, opportunities., Signature, Parameters, Return, Value, Usage]
---

# convertLead(leadsToConvert, dmlOptions)

> Converts a list of LeadConvert objects into accounts and contacts, as well as
    (optionally) opportunities.

### convertLead(leadsToConvert, dmlOptions)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static List<Database.LeadConvertResult> convertLead(List<Database.LeadConvert> leadsToConvert, Database.DMLOptions dmlOptions)

#### Parameters

leadsToConvert

Type: List<[Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: List<[Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\>

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.