---
title: "DMLOptions.DuplicateRuleHeader Class"
domain: apex-reference
topic: dmloptionsduplicateruleheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.619Z
estimatedTokens: 1062
namespace: Database
keywords: [DMLOptions.DuplicateRuleHeader, Determines, options, duplicate, rules, detect, records, part, Management, feature, allowSave, runAsCurrentUser, Usage]
---

# DMLOptions.DuplicateRuleHeader Class

> Determines options for using duplicate rules to detect duplicate
      records. Duplicate rules are part of the Duplicate Management feature.

**Namespace:** `Database`

# DMLOptions.DuplicateRuleHeader Class

Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Example

The following example shows how to save an account record that’s been identified as a duplicate. To learn how to iterate through duplicate errors, see [DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError "Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.")

```

```

-   **[DMLOptions.DuplicateRuleHeader Properties](atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm#apex_Database_DMLOptions_DuplicateRuleHeader_properties)**


## DMLOptions.DuplicateRuleHeader Properties

The following are properties for DMLOptions.DuplicateRuleHeader.

-   **[allowSave](atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm#apex_Database_DMLOptions_DuplicateRuleHeader_AllowSave)**
    For a duplicate rule, when the Alert option is enabled, bypass alerts and save duplicate records by setting this property to true. Prevent duplicate records from being saved by setting this property to false.
-   **[runAsCurrentUser](atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm#apex_Database_DMLOptions_DuplicateRuleHeader_runAsCurrentUser)**
    Make sure that sharing rules for the current user are enforced when duplicate rules run by setting this property to true. Use the sharing rules specified in the class for the request by setting this property to false. If no sharing rules are specified, Apex code runs in system context and sharing rules for the current user are not enforced.

### allowSave

For a duplicate rule, when the Alert option is enabled, bypass alerts and save duplicate records by setting this property to true. Prevent duplicate records from being saved by setting this property to false.

#### Signature

public Boolean allowSave {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

This example shows how to save an account record that’s been identified as a duplicate. dml.DuplicateRuleHeader.allowSave = true means the user should be allowed to save the duplicate. To learn how to iterate through duplicate errors, see [DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError "Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.").

```

```

### runAsCurrentUser

Make sure that sharing rules for the current user are enforced when duplicate rules run by setting this property to true. Use the sharing rules specified in the class for the request by setting this property to false. If no sharing rules are specified, Apex code runs in system context and sharing rules for the current user are not enforced.

#### Signature

public Boolean runAsCurrentUser {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If specified as true, duplicate rules run for the current user, which ensures users can’t view duplicate records that aren’t available to them.

Use runAsCurrentUser = true to detect duplicates when converting leads to contacts. Typically, lead conversion Apex code runs in a system context and does not enforce sharing rules for the current user.

#### Example

This example shows how to set options so that duplicate rules run for the current user when saving a new account.

```

```

## Code Examples

```apex
Database.DMLOptions dml = new Database.DMLOptions(); 
dml.DuplicateRuleHeader.allowSave = true;
dml.DuplicateRuleHeader.runAsCurrentUser = true;
Account duplicateAccount = new Account(Name='dupe');
Database.SaveResult sr = Database.insert(duplicateAccount, dml);
if (sr.isSuccess()) {
	System.debug('Duplicate account has been inserted in Salesforce!');
}
```

```apex
Database.DMLOptions dml = new Database.DMLOptions(); 
dml.DuplicateRuleHeader.allowSave = true;
dml.DuplicateRuleHeader.runAsCurrentUser = true;
Account duplicateAccount = new Account(Name='dupe');
Database.SaveResult sr = Database.insert(duplicateAccount, dml);
if (sr.isSuccess()) {
	System.debug('Duplicate account has been inserted in Salesforce!');
}
```

```apex
Database.DMLOptions dml = new Database.DMLOptions(); 
dml.DuplicateRuleHeader.allowSave = true;
dml.DuplicateRuleHeader.runAsCurrentUser = true;
Account duplicateAccount = new Account(Name='dupe');
Database.SaveResult sr = Database.insert(duplicateAccount, dml);
if (sr.isSuccess()) {
	System.debug('Duplicate account has been inserted in Salesforce!');
}
```

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- DuplicateError Class (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- DMLOptions.DuplicateRuleHeader Properties (atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm)
- allowSave (atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm)
- runAsCurrentUser (atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
