---
title: "DuplicateResult Methods"
domain: apex-reference
topic: duplicateresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.715Z
keywords: [DuplicateResult, Methods, Returns, developer, name, executed, duplicate, rule, returned, records., getDuplicateRule, Signature, Return, Value, getErrorMessage, Example, getMatchResults, isAllowSave]
---

# DuplicateResult Methods

> Returns the developer name of the executed duplicate rule that
      returned duplicate records.

## DuplicateResult Methods

The following are methods for DuplicateResult.

-   **[getDuplicateRule()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getDuplicateRule)**  
    Returns the developer name of the executed duplicate rule that returned duplicate records.
-   **[getErrorMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getErrorMessage)**  
    Returns the error message configured by the administrator to warn users they may be creating duplicate records. This message is associated with a duplicate rule.
-   **[getMatchResults()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_getMatchResults)**  
    Returns the duplicate records and match information.
-   **[isAllowSave()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_Datacloud_DuplicateResult_isAllowSave)**  
    Indicates whether the duplicate rule will allow a record that’s identified as a duplicate to be saved. Set to true if duplicate rule should allow save; otherwise, false.

### getDuplicateRule()

Returns the developer name of the executed duplicate rule that returned duplicate records.

#### Signature

public String getDuplicateRule()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getErrorMessage()

Returns the error message configured by the administrator to warn users they may be creating duplicate records. This message is associated with a duplicate rule.

#### Signature

public String getErrorMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

This example shows the code used to display the error message when duplicates are found while saving a new contact. This code is part of a custom application that lets users add a contact. When a contact is saved, an alert displays if there are duplicate records. Review [DuplicateResult Class](#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```

### getMatchResults()

Returns the duplicate records and match information.

#### Signature

public List<Datacloud.MatchResult> getMatchResults()

#### Return Value

Type: List<Datacloud.MatchResult>

#### Example

This example shows the code used to return duplicate record and match information and assign it to the matchResults variable. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```

### isAllowSave()

Indicates whether the duplicate rule will allow a record that’s identified as a duplicate to be saved. Set to true if duplicate rule should allow save; otherwise, false.

#### Signature

public Boolean isAllowSave()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")