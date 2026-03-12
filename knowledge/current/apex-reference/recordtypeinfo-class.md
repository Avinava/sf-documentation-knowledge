---
title: "RecordTypeInfo Class"
domain: apex-reference
topic: recordtypeinfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.407Z
estimatedTokens: 1272
namespace: Schema
keywords: [RecordTypeInfo, developer, record, Usage, getDeveloperName, getName, getRecordTypeId, isActive, isAvailable, isDefaultRecordTypeMapping, isMaster]
---

# RecordTypeInfo Class

> Returns the developer name for this record type.

**Namespace:** `Schema`

# RecordTypeInfo Class

Contains methods for accessing record type information for an sObject with associated record types.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

A RecordTypeInfo object is returned from the sObject describe result using the getRecordTypeInfos method. For example:

```

```

In addition to the getRecordTypeInfos method, you can use the getRecordTypeInfosById and the getRecordTypeInfosByName methods. These methods return maps that associate RecordTypeInfo with record IDs and record labels, respectively.

## Example

The following example assumes at least one record type has been created for the Account object:

```

```

## RecordTypeInfo Methods

The following are methods for RecordTypeInfo. All are instance methods.

-   **[getDeveloperName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_getDeveloperName)**
    Returns the developer name for this record type.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_getName)**
    Returns the UI label of this record type. The label can be translated into any language that Salesforce supports.
-   **[getRecordTypeId()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_getRecordTypeId)**
    Returns the ID of this record type.
-   **[isActive()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_isActive)**
    Returns true if this record type is active, false otherwise.
-   **[isAvailable()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_isAvailable)**
    Returns true if this record type is available to the current user, false otherwise. Use this method to display a list of available record types to the user when he or she is creating a new record.
-   **[isDefaultRecordTypeMapping()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_isDefaultRecordTypeMapping)**
    Returns true if this is the default record type for the user, false otherwise.
-   **[isMaster()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_Schema_RecordTypeInfo_isMaster)**
    Returns true if this is the master record type and false otherwise. The master record type is the default record type that’s used when a record has no custom record type associated with it.

### getDeveloperName()

Returns the developer name for this record type.

#### Signature

public String getDeveloperName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the UI label of this record type. The label can be translated into any language that Salesforce supports.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecordTypeId()

Returns the ID of this record type.

#### Signature

public ID getRecordTypeId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isActive()

Returns true if this record type is active, false otherwise.

#### Signature

public Boolean isActive()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isAvailable()

Returns true if this record type is available to the current user, false otherwise. Use this method to display a list of available record types to the user when he or she is creating a new record.

#### Signature

public Boolean isAvailable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDefaultRecordTypeMapping()

Returns true if this is the default record type for the user, false otherwise.

#### Signature

public Boolean isDefaultRecordTypeMapping()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isMaster()

Returns true if this is the master record type and false otherwise. The master record type is the default record type that’s used when a record has no custom record type associated with it.

#### Signature

public Boolean isMaster()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
Schema.DescribeSObjectResult R = Account.SObjectType.getDescribe();
List<Schema.RecordTypeInfo> RT = R.getRecordTypeInfos();
```

```apex
RecordType rt = [SELECT Id,Name FROM RecordType WHERE SobjectType='Account' LIMIT 1];
Schema.DescribeSObjectResult d = Schema.SObjectType.Account; 
Map<Id,Schema.RecordTypeInfo> rtMapById = d.getRecordTypeInfosById();
Schema.RecordTypeInfo rtById =  rtMapById.get(rt.id);
Map<String,Schema.RecordTypeInfo> rtMapByName = d.getRecordTypeInfosByName();
Schema.RecordTypeInfo rtByName =  rtMapByName.get(rt.name);
System.assertEquals(rtById,rtByName);
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getDeveloperName() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- getRecordTypeId() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- isActive() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- isAvailable() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- isDefaultRecordTypeMapping() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- isMaster() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
