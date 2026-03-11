---
title: "MatchResult Methods"
domain: apex-reference
topic: matchresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.748Z
keywords: [MatchResult, Methods, Returns, entity, type, matching, rule., getEntityType, Signature, Return, Value, getErrors, getMatchEngine, getMatchRecords, getRule, getSize, isSuccess]
---

# MatchResult Methods

> Returns the entity type of the matching rule.

## MatchResult Methods

The following are methods for MatchResult.

-   **[getEntityType()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getEntityType)**  
    Returns the entity type of the matching rule.
-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getErrors)**  
    Returns errors that occurred during matching for the matching rule.
-   **[getMatchEngine()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchEngine)**  
    Returns the match engine for the matching rule.
-   **[getMatchRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchRecords)**  
    Returns information about the duplicates for the matching rule.
-   **[getRule()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getRule)**  
    Returns the developer name of the matching rule.
-   **[getSize()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getSize)**  
    Returns the number of duplicates detected by the matching rule.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_isSuccess)**  
    Returns false if there’s an error with the matching rule, and true if the matching rule successfully ran.

### getEntityType()

Returns the entity type of the matching rule.

#### Signature

public String getEntityType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getErrors()

Returns errors that occurred during matching for the matching rule.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: List<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### getMatchEngine()

Returns the match engine for the matching rule.

#### Signature

public String getMatchEngine()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMatchRecords()

Returns information about the duplicates for the matching rule.

#### Signature

public List<Datacloud.MatchRecord> getMatchRecords()

#### Return Value

Type: List<[Datacloud.MatchRecord](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_class_Datacloud_MatchRecord "Represents a duplicate record detected by a matching rule.")\>

### getRule()

Returns the developer name of the matching rule.

#### Signature

public String getRule()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSize()

Returns the number of duplicates detected by the matching rule.

#### Signature

public Integer getSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isSuccess()

Returns false if there’s an error with the matching rule, and true if the matching rule successfully ran.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")