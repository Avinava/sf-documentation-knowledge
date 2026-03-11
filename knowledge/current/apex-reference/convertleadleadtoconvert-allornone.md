---
title: "convertLead(leadToConvert,
    allOrNone)"
domain: apex-reference
topic: convertleadleadtoconvert-allornone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.169Z
keywords: [convertLead, leadToConvert, allOrNone, Converts, lead, account, contact, well, optionally, opportunity., Signature, Parameters, Return, Value, Usage]
---

# convertLead(leadToConvert,
    allOrNone)

> Converts a lead into an account and contact, as well as (optionally) an
  opportunity.

### convertLead(leadToConvert, allOrNone)

Converts a lead into an account and contact, as well as (optionally) an opportunity.

#### Signature

public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Boolean allOrNone)

#### Parameters

leadToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.