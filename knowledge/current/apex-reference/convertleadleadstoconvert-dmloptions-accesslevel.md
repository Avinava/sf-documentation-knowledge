---
title: "convertLead(leadsToConvert, dmlOptions,
    accessLevel)"
domain: apex-reference
topic: convertleadleadstoconvert-dmloptions-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.169Z
keywords: [convertLead, leadsToConvert, dmlOptions, accessLevel, Converts, list, LeadConvert, objects, accounts, contacts, well, optionally, opportunities., Signature, Parameters, Return, Value, Usage]
---

# convertLead(leadsToConvert, dmlOptions,
    accessLevel)

> Converts a list of LeadConvert objects into accounts and contacts, as well as
    (optionally) opportunities.

### convertLead(leadsToConvert, dmlOptions, accessLevel)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static List<Database.LeadConvertResult> convertLead(List<Database.LeadConvert> leadsToConvert, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

leadsToConvert

Type: List<[Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\>

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.