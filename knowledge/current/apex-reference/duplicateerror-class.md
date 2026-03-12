---
title: "DuplicateError Class"
domain: apex-reference
topic: duplicateerror-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.101Z
estimatedTokens: 1103
namespace: Database
keywords: [DuplicateError, Contains, information, error, occurred, attempt, made, save, duplicate, record., organization, set, rules, which, part, Duplicate, Management, feature., Example, getDuplicateResult]
---

# DuplicateError Class

> Contains information about an error that occurred when an attempt was
      made to save a duplicate record. Use if your organization has set up duplicate rules, which
      are part of the Duplicate Management feature.

**Namespace:** `Database`

# DuplicateError Class

Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Example

When you try to save a record that’s identified as a duplicate record by a duplicate rule, you’ll receive a duplicate error. If the duplicate rule contains the Allow action, an attempt will be made to bypass the error.

```

```

-   **[DuplicateError Methods](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_methods)**


#### See Also

-   [SaveResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

-   [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.")

-   [Error Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")


## DuplicateError Methods

The following are methods for DuplicateError.

-   **[getDuplicateResult()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getDuplicateResult)**
    Returns the details of a duplicate rule and duplicate records found by the duplicate rule.
-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getFields)**
    Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.
-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getMessage)**
    Returns the error message text.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_Database_DuplicateError_getStatusCode)**
    Returns a code that characterizes the error.

### getDuplicateResult()

Returns the details of a duplicate rule and duplicate records found by the duplicate rule.

#### Signature

public Datacloud.DuplicateResult getDuplicateResult()

#### Return Value

Type: [Datacloud.DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.")

#### Example

This example shows the code used to get the possible duplicates and related match information after saving a new contact. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```

### getFields()

Returns an array of one or more field names. Identifies which fields in the object, if any, affected the error condition.

#### Signature

public List<String\> getFields()

#### Return Value

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getMessage()

Returns the error message text.

#### Signature

public String getMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Returns a code that characterizes the error.

#### Signature

public StatusCode getStatusCode()

#### Return Value

Type: [StatusCode](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_enums.htm)

## Code Examples

```apex
// Try to save a duplicate account
Account duplicateAccount = new Account(Name='Acme',  BillingCity='San Francisco');
Database.SaveResult sr = Database.insert(duplicateAccount, false);
if (!sr.isSuccess()) {
	
	// Insertion failed due to duplicate detected
	for(Database.Error duplicateError : sr.getErrors()){
		Datacloud.DuplicateResult duplicateResult = 
                  ((Database.DuplicateError)duplicateError).getDuplicateResult();
		System.debug('Duplicate records have been detected by ' + 
                  duplicateResult.getDuplicateRule());
		System.debug(duplicateResult.getErrorMessage());
	}

	// If the duplicate rule is an alert rule, we can try to bypass it
	Database.DMLOptions dml = new Database.DMLOptions(); 
	dml.DuplicateRuleHeader.AllowSave = true;
	Database.SaveResult sr2 = Database.insert(duplicateAccount, dml);
	if (sr2.isSuccess()) {
		System.debug('Duplicate account has been inserted in Salesforce!');
	}
}
```

```
Datacloud.DuplicateResult duplicateResult = 
                            duplicateError.getDuplicateResult();
```

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- DuplicateError Methods (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- SaveResult Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
- DuplicateResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
- Error Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- getDuplicateResult() (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- getFields() (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- getMessage() (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- getStatusCode() (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- Datacloud.DuplicateResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
