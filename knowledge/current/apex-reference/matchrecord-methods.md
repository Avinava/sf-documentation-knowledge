---
title: "MatchRecord Methods"
domain: apex-reference
topic: matchrecord-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.743Z
keywords: [MatchRecord, Methods, Returns, information, matched, record., example, matchGrade, represents, quality, data, D&B, fields, getAdditionalInformation, Signature, Return, Value, getFieldDiffs, getMatchConfidence, getRecord]
---

# MatchRecord Methods

> Returns other information about a matched record. For example, a
        matchGrade represents the quality of the data for the D&B
      fields in the matched record.

## MatchRecord Methods

The following are methods for MatchRecord.

-   **[getAdditionalInformation()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_Datacloud_MatchRecord_getAdditionalInformation)**  
    Returns other information about a matched record. For example, a matchGrade represents the quality of the data for the D&B fields in the matched record.
-   **[getFieldDiffs()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_Datacloud_MatchRecord_getFieldDiffs)**  
    Returns all matching rule fields and how each field value compares for the duplicate and its matching record.
-   **[getMatchConfidence()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_Datacloud_MatchRecord_getMatchConfidence)**  
    Returns the ranking of how similar a matched record’s data is to the data in your request. Must be equal to or greater than the value of the minMatchConfidence specified in your request. Returns -1 if unused.
-   **[getRecord()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_Datacloud_MatchRecord_getRecord)**  
    Returns the fields and field values for the duplicate.

### getAdditionalInformation()

Returns other information about a matched record. For example, a matchGrade represents the quality of the data for the D&B fields in the matched record.

#### Signature

public List<Datacloud.AdditionalInformationMap> getAdditionalInformation()

#### Return Value

Type: List<[Datacloud.AdditionalInformationMap](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_AdditionalInformationMap.htm#apex_class_Datacloud_AdditionalInformationMap "Represents other information, if any, about matched records.")\>

### getFieldDiffs()

Returns all matching rule fields and how each field value compares for the duplicate and its matching record.

#### Signature

public List<Datacloud.FieldDiff> getFieldDiffs()

#### Return Value

Type: List<[Datacloud.FieldDiff](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm#apex_class_Datacloud_FieldDiff "Represents the name of a matching rule field and how the values of the field compare for the duplicate and its matching record.")\>

### getMatchConfidence()

Returns the ranking of how similar a matched record’s data is to the data in your request. Must be equal to or greater than the value of the minMatchConfidence specified in your request. Returns -1 if unused.

#### Signature

public Double getMatchConfidence()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getRecord()

Returns the fields and field values for the duplicate.

#### Signature

public SObject getRecord()

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")