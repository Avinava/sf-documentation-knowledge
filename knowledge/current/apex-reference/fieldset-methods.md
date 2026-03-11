---
title: "FieldSet Methods"
domain: apex-reference
topic: fieldset-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.354Z
keywords: [FieldSet, Methods, Returns, field, set’s, description., getDescription, Signature, Return, Value, Usage, getFields, getLabel, getName, getNamespace, getSObjectType]
---

# FieldSet Methods

> Returns the field set’s description.

## FieldSet Methods

The following are methods for FieldSet. All are instance methods.

-   **[getDescription()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getDescription)**  
    Returns the field set’s description.
-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getFields)**  
    Returns a list of Schema.FieldSetMember objects for the fields making up the field set.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getLabel)**  
    Returns the translation of the text label that is displayed next to the field in the Salesforce user interface.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getName)**  
    Returns the field set’s name.
-   **[getNamespace()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getNamespace)**  
    Returns the field set’s namespace.
-   **[getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_Schema_FieldSet_getSObjectType)**  
    Returns the Schema.sObjectType of the sObject containing the field set definition.

### getDescription()

Returns the field set’s description.

#### Signature

public String getDescription()

#### Return Value

Type: String

#### Usage

Description is a required field for a field set, intended to describe the context and content of the field set. It’s often intended for administrators who might be configuring a field set defined in a managed package, rather than for end users.

### getFields()

Returns a list of Schema.FieldSetMember objects for the fields making up the field set.

#### Signature

public List<FieldSetMember> getFields()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.FieldSetMember](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_class_Schema_FieldSetMember "Contains methods for accessing the metadata for field set member fields.")\>

### getLabel()

Returns the translation of the text label that is displayed next to the field in the Salesforce user interface.

#### Signature

public String getLabel()

#### Return Value

Type: String

### getName()

Returns the field set’s name.

#### Signature

public String getName()

#### Return Value

Type: String

### getNamespace()

Returns the field set’s namespace.

#### Signature

public String getNamespace()

#### Return Value

Type: String

#### Usage

The returned namespace is an empty string if your organization hasn’t set a namespace, and the field set is defined in your organization. Otherwise, it’s the namespace of your organization, or the namespace of the managed package containing the field set.

### getSObjectType()

Returns the Schema.sObjectType of the sObject containing the field set definition.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: Schema.SObjectType