---
title: "ChildRelationship Class"
domain: apex-reference
topic: childrelationship-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.800Z
estimatedTokens: 1049
namespace: Schema
keywords: [ChildRelationship, Contains, accessing, child, relationship, well, sObject, parent, sObject., Example, getChildSObject, getField, getRelationshipName, isCascadeDelete, isDeprecatedAndHidden, isRestrictedDelete]
---

# ChildRelationship Class

> Contains methods for accessing the child relationship as
well as the child sObject for a parent sObject.

**Namespace:** `Schema`

# ChildRelationship Class

Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Example

A ChildRelationship object is returned from the sObject describe result using the getChildRelationship method. For example:

```

```

## ChildRelationship Methods

The following are methods for ChildRelationship. All are instance methods.

-   **[getChildSObject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getChildSObject)**
    Returns the token of the child sObject on which there is a foreign key back to the parent sObject.
-   **[getField()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getField)**
    Returns the token of the field that has a foreign key back to the parent sObject.
-   **[getRelationshipName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_getRelationshipName)**
    Returns the name of the relationship.
-   **[isCascadeDelete()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isCascadeDelete)**
    Returns true if the child object is deleted when the parent object is deleted, false otherwise.
-   **[isDeprecatedAndHidden()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isDeprecatedAndHidden)**
    Reserved for future use.
-   **[isRestrictedDelete()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_Schema_ChildRelationship_isRestrictedDelete)**
    Returns true if the parent object can't be deleted because it is referenced by a child object, false otherwise.

### getChildSObject()

Returns the token of the child sObject on which there is a foreign key back to the parent sObject.

#### Signature

public Schema.SObjectType getChildSObject()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

### getField()

Returns the token of the field that has a foreign key back to the parent sObject.

#### Signature

public Schema.SObjectField getField()

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

### getRelationshipName()

Returns the name of the relationship.

#### Signature

public String getRelationshipName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isCascadeDelete()

Returns true if the child object is deleted when the parent object is deleted, false otherwise.

#### Signature

public Boolean isCascadeDelete()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDeprecatedAndHidden()

Reserved for future use.

#### Signature

public Boolean isDeprecatedAndHidden()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRestrictedDelete()

Returns true if the parent object can't be deleted because it is referenced by a child object, false otherwise.

#### Signature

public Boolean isRestrictedDelete()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
Schema.DescribeSObjectResult R = Account.SObjectType.getDescribe();
List<Schema.ChildRelationship> C = R.getChildRelationships();
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getChildSObject() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- getField() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- getRelationshipName() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- isCascadeDelete() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- isDeprecatedAndHidden() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- isRestrictedDelete() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- Schema.SObjectType (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
- Schema.SObjectField (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
