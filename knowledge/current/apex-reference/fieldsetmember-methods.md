---
title: "FieldSetMember Methods"
domain: apex-reference
topic: fieldsetmember-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.231Z
keywords: [FieldSetMember, Methods, Returns, true, field, required, field’s, definition, its, sObject, otherwise, false., getDBRequired, Signature, Return, Value, getFieldPath, Example, getLabel, getRequired]
---

# FieldSetMember Methods

> Returns true if the field is required by the
  field’s definition in its sObject, otherwise, false.

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