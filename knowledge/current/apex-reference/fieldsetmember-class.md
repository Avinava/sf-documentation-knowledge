---
title: "FieldSetMember Class"
domain: apex-reference
topic: fieldsetmember-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.834Z
estimatedTokens: 962
namespace: Schema
keywords: [FieldSetMember, Contains, accessing, metadata, field, set, member, fields., Usage, getDBRequired, getFieldPath, Example, getLabel, getRequired, getType, getSObjectField]
---

# FieldSetMember Class

> Contains methods for accessing the metadata
            for field set member fields.

**Namespace:** `Schema`

# FieldSetMember Class

Contains methods for accessing the metadata for field set member fields.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

Use the methods in the Schema.FieldSetMember class to get details about fields contained within a field set, such as the field label, type, a dynamic SOQL-ready field path, and so on. The following example shows how to get a collection of field set member describe result objects for a specific field set on an sObject:

```

```

If you know the name of the field set in advance, you can access its fields more directly using an explicit reference to the field set:

```

```

#### See Also

-   [FieldSet Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_methods_system_fieldsets_describe "Contains methods for discovering and retrieving the details of field sets created on sObjects.")


## FieldSetMember Methods

The following are methods for FieldSetMember. All are instance methods.

-   **[getDBRequired()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getDBRequired)**
    Returns true if the field is required by the field’s definition in its sObject, otherwise, false.
-   **[getFieldPath()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getFieldPath)**
    Returns a field path string in a format ready to be used in a dynamic SOQL query.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getLabel)**
    Returns the text label that’s displayed next to the field in the Salesforce user interface.
-   **[getRequired()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getRequired)**
    Returns true if the field is required by the field set, otherwise, false.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getType)**
    Returns the field’s Apex data type.
-   **[getSObjectField()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_Schema_FieldSetMember_getSObjectField)**
    Returns the token for this field.

### getDBRequired()

Returns true if the field is required by the field’s definition in its sObject, otherwise, false.

#### Signature

public Boolean getDBRequired()

#### Return Value

Type: Boolean

### getFieldPath()

Returns a field path string in a format ready to be used in a dynamic SOQL query.

#### Signature

public String getFieldPath()

#### Return Value

Type: String

#### Example

See [Displaying a Field Set on a Visualforce Page](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#FieldSetsDescribeExample) for an example of how to use this method.

### getLabel()

Returns the text label that’s displayed next to the field in the Salesforce user interface.

#### Signature

public String getLabel()

#### Return Value

Type: String

### getRequired()

Returns true if the field is required by the field set, otherwise, false.

#### Signature

public Boolean getRequired()

#### Return Value

Type: Boolean

### getType()

Returns the field’s Apex data type.

#### Signature

public Schema.DisplayType getType()

#### Return Value

Type: Schema.DisplayType

### getSObjectField()

Returns the token for this field.

#### Signature

public Schema.sObjectField getSObjectField()

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

## Code Examples

```apex
List<Schema.FieldSetMember> fields = 
    Schema.SObjectType.Account.fieldSets.getMap().get('field_set_name').getFields();
```

```apex
List<Schema.FieldSetMember> fields = 
    Schema.SObjectType.Account.fieldSets.field_set_name.getFields();
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- FieldSet Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm)
- getDBRequired() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- getFieldPath() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- getRequired() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- getSObjectField() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm)
- Displaying a Field Set on a Visualforce
     Page (atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm)
- Schema.SObjectField (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm)
