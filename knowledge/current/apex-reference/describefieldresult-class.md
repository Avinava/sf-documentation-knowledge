---
title: "DescribeFieldResult Class"
domain: apex-reference
topic: describefieldresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.760Z
estimatedTokens: 9488
namespace: Schema
keywords: [DescribeFieldResult, custom, parent, standard, whose, matched, against, child, external, object's, indirect, lookup, relationship, match, determine]
---

# DescribeFieldResult Class

> Returns the name of the custom field on the parent standard or
      custom object whose values are matched against the values of the child external object's
      indirect lookup relationship field. The match is done to determine which records are related
      to each other.

**Namespace:** `Schema`

# DescribeFieldResult Class

Contains methods for describing sObject fields.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

Instances of field describe results on the same DescribeFieldResult aren’t guaranteed to be equal because the state and behavior of a describe object is determined by various factors including the API version used. To compare describe results, call the getSObjectField() method on the field describe results and use the equality operator (\==) to compare the [SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.") values.

## Example

The following is an example of how to instantiate a field describe result object:

```

```

## DescribeFieldResult Methods

The following are methods for DescribeFieldResult. All are instance methods.

-   **[getByteLength()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getByteLength)**
    For variable-length fields (including binary fields), returns the maximum size of the field, in bytes.
-   **[getCalculatedFormula()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getCalculatedFormula)**
    Returns the formula specified for this field.
-   **[getController()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getController)**
    Returns the token of the controlling field.
-   **[getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getDefaultValue)**
    Returns the default value for this field.
-   **[getDefaultValueFormula()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getDefaultValueFormula)**
    Returns the default formula value that is specified for this formula field.
-   **[getDigits()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getDigits)**
    Returns the maximum number of digits specified for the field. This method is only valid with Integer fields.
-   **[getInlineHelpText()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getInlineHelpText)**
    Returns the content of the field-level help.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getLabel)**
    Returns the text label that is displayed next to the field in the Salesforce user interface. This label can be localized.
-   **[getLength()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getLength)**
    Returns the maximum size of the field for the DescribeFieldResult object in Unicode characters (not bytes).
-   **[getLocalName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getLocalName)**
    Returns the name of the field, similar to the getName method. However, if the field is part of the current namespace, the namespace portion of the name is omitted.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getName)**
    Returns the field name used in Apex.
-   **[getPicklistValues()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getPicklistValues)**
    Returns a list of active PicklistEntry objects. A runtime error is returned if the field isn’t a picklist. Only active picklist values are returned.
-   **[getPrecision()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getPrecision)**
    For fields of type Double, returns the maximum number of digits that can be stored, including all numbers to the left and to the right of the decimal point (but excluding the decimal point character).
-   **[getReferenceTargetField()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getReferenceTargetField)**
    Returns the name of the custom field on the parent standard or custom object whose values are matched against the values of the child external object's indirect lookup relationship field. The match is done to determine which records are related to each other.
-   **[getReferenceTo()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getReferenceTo)**
    Returns a list of Schema.sObjectType objects for the parent objects of this field. If the isNamePointing method returns true, there is more than one entry in the list, otherwise there is only one.
-   **[getRelationshipName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getRelationshipName)**
    Returns the name of the child-to-parent relationship.
-   **[getRelationshipOrder()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getRelationshipOrder)**
    Returns 0 if the field is the primary relationship field or 1 if the field is the secondary relationship field.
-   **[getScale()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getScale)**
    For fields of type Double, returns the number of digits to the right of the decimal point.
-   **[getSOAPType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getSOAPType)**
    Returns one of the SoapType enum values, depending on the type of field.
-   **[getSObjectField()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getSObjectField)**
    Returns the token for this field.
-   **[getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getSObjectType)**
    Returns the Salesforce object type from which this field originates.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_getType)**
    Returns one of the DisplayType enum values, depending on the type of field.
-   **[isAccessible()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isAccessible)**
    Returns true if the current user can see this field, false otherwise.
-   **[isAiPredictionField() (Beta)](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isAiPredictionField)**
    Returns true if the current field is enabled to display Einstein prediction data, false otherwise.
-   **[isAutoNumber()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isAutoNumber)**
    Returns true if the field is an Auto Number field, false otherwise.
-   **[isCalculated()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isCalculated)**
    Returns true if the field is a custom formula field, false otherwise. Note that custom formula fields are always read-only.
-   **[isCascadeDelete()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isCascadeDelete)**
    Returns true if the child object is deleted when the parent object is deleted, false otherwise.
-   **[isCaseSensitive()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isCaseSensitive)**
    Returns true if the field is case sensitive, false otherwise.
-   **[isCreateable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isCreateable)**
    Returns true if the field can be created by the current user, false otherwise.
-   **[isCustom()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isCustom)**
    Returns true if the field is a custom field, false if it is a standard field, such as Name.
-   **[isDefaultedOnCreate()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isDefaultedOnCreate)**
    Returns true if the field receives a default value when created, false otherwise.
-   **[isDependentPicklist()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isDependentPicklist)**
    Returns true if the picklist is a dependent picklist, false otherwise.
-   **[isDeprecatedAndHidden()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isDeprecatedAndHidden)**
    Reserved for future use.
-   **[isEncrypted()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#isencrypted)**
    Returns true if the field is encrypted with Shield Platform Encryption, false otherwise.
-   **[isExternalID()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isExternalID)**
    Returns true if the field is used as an external ID, false otherwise.
-   **[isFilterable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isFilterable)**
    Returns true if the field can be used as part of the filter criteria of a WHERE statement, false otherwise.
-   **[isFormulaTreatNullNumberAsZero()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isFormulaTreatNullNumberAsZero)**
    Returns true if null is treated as zero in a formula field, false otherwise.
-   **[isGroupable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isGroupable)**
    Returns true if the field can be included in the GROUP BY clause of a SOQL query, false otherwise. This method is only available for Apex classes and triggers saved using API version 18.0 and higher.
-   **[isHtmlFormatted()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isHtmlFormatted)**
    Returns true if the field has been formatted for HTML and should be encoded for display in HTML, false otherwise. One example of a field that returns true for this method is a hyperlink custom formula field. Another example is a custom formula field that has an IMAGE text function.
-   **[isIdLookup()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isIdLookup)**
    Returns true if the field can be used to specify a record in an upsert method, false otherwise.
-   **[isNameField()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isNameField)**
    Returns true if the field is a name field, false otherwise.
-   **[isNamePointing()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isNamePointing)**
    Returns true if the field can have multiple types of objects as parents. For example, a task can have both the Contact/Lead ID (WhoId) field and the Opportunity/Account ID (WhatId) field return true for this method. because either of those objects can be the parent of a particular task record. This method returns false otherwise.
-   **[isNillable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isNillable)**
    Returns true if the field is nillable, false otherwise. A nillable field can have empty content. A non-nillable field must have a value for the object to be created or saved.
-   **[isPermissionable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isPermissionable)**
    Returns true if field permissions can be specified for the field, false otherwise.
-   **[isRestrictedDelete()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isRestrictedDelete)**
    Returns true if the parent object can't be deleted because it is referenced by a child object, false otherwise.
-   **[isRestrictedPicklist()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isRestrictedPicklist)**
    Returns true if the field is a restricted picklist, false otherwise
-   **[isSearchPrefilterable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isSearchPrefilterable)**
    Returns true if a foreign key can be included in prefiltering when used in a SOSL WHERE clause, false otherwise.
-   **[isSortable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isSortable)**
    Returns true if a query can sort on the field, false otherwise
-   **[isUnique()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isUnique)**
    Returns true if the value for the field must be unique, false otherwise
-   **[isUpdateable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isUpdateable)**
    Returns true if the field can be edited by the current user, or child records in a master-detail relationship field on a custom object can be reparented to different parent records; false otherwise.
-   **[isWriteRequiresMasterRead()](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_Schema_DescribeFieldResult_isWriteRequiresMasterRead)**
    Returns true if writing to the detail object requires read sharing instead of read/write sharing of the parent.

### getByteLength()

For variable-length fields (including binary fields), returns the maximum size of the field, in bytes.

#### Signature

public Integer getByteLength()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getCalculatedFormula()

Returns the formula specified for this field.

#### Signature

public String getCalculatedFormula()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getController()

Returns the token of the controlling field.

#### Signature

public Schema.sObjectField getController()

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

### getDefaultValue()

Returns the default value for this field.

#### Signature

public Object getDefaultValue()

#### Return Value

Type: Object

### getDefaultValueFormula()

Returns the default formula value that is specified for this formula field.

#### Signature

public String getDefaultValueFormula()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDigits()

Returns the maximum number of digits specified for the field. This method is only valid with Integer fields.

#### Signature

public Integer getDigits()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getInlineHelpText()

Returns the content of the field-level help.

#### Signature

public String getInlineHelpText()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information, see “Define Field-Level Help” in the Salesforce online help.

### getLabel()

Returns the text label that is displayed next to the field in the Salesforce user interface. This label can be localized.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For the Type field on standard objects, getLabel returns a label different from the default label. It returns a label of the form *Object* Type, where *Object* is the standard object label. For example, for the Type field on Account, getLabel returns Account Type instead of the default label Type. If the Type label is renamed, getLabel returns the new label. You can check or change the labels of all standard object fields from Setup by entering Rename Tabs and Labels in the Quick Find box, then selecting **Rename Tabs and Labels**.

### getLength()

Returns the maximum size of the field for the DescribeFieldResult object in Unicode characters (not bytes).

#### Signature

public Integer getLength()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getLocalName()

Returns the name of the field, similar to the getName method. However, if the field is part of the current namespace, the namespace portion of the name is omitted.

#### Signature

public String getLocalName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the field name used in Apex.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPicklistValues()

Returns a list of active PicklistEntry objects. A runtime error is returned if the field isn’t a picklist. Only active picklist values are returned.

#### Signature

public List<Schema.PicklistEntry> getPicklistValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.PicklistEntry](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_class_Schema_PicklistEntry "Represents a picklist entry.")\>

### getPrecision()

For fields of type Double, returns the maximum number of digits that can be stored, including all numbers to the left and to the right of the decimal point (but excluding the decimal point character).

#### Signature

public Integer getPrecision()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getReferenceTargetField()

Returns the name of the custom field on the parent standard or custom object whose values are matched against the values of the child external object's indirect lookup relationship field. The match is done to determine which records are related to each other.

#### Signature

public String getReferenceTargetField()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For information about indirect lookup relationships, see “Indirect Lookup Relationship Fields on External Objects” in the Salesforce Help.

### getReferenceTo()

Returns a list of Schema.sObjectType objects for the parent objects of this field. If the isNamePointing method returns true, there is more than one entry in the list, otherwise there is only one.

#### Signature

public List <Schema.sObjectType> getReferenceTo()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.sObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")\>

#### Versioned Behavior Changes

In API version 51.0 and later, the getReferenceTo() method returns referenced objects that aren’t accessible to the context user. If the context user has access to an object’s field that references another object, irrespective of the context user’s access to the cross-referenced object, the method returns references. In API version 50.0 and earlier, if the context user doesn’t have access to the cross-referenced object, the method returns an empty list.

### getRelationshipName()

Returns the name of the child-to-parent relationship.

#### Signature

public String getRelationshipName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information about relationships and relationship names, see [Understanding Relationship Names](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm "HTML (New Window)") in the SOQL and SOSL Reference.

### getRelationshipOrder()

Returns 0 if the field is the primary relationship field or 1 if the field is the secondary relationship field.

#### Signature

public Integer getRelationshipOrder()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information about primary and secondary relationships, see [Considerations for Object Relationships](https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&language=en_US "HTML (New Window)"). For more information about relationships and relationship names, see [Understanding Relationship Names](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm "HTML (New Window)") in the SOQL and SOSL Reference.

### getScale()

For fields of type Double, returns the number of digits to the right of the decimal point.

#### Signature

public Integer getScale()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getSOAPType()

Returns one of the SoapType enum values, depending on the type of field.

#### Signature

public Schema.SOAPType getSOAPType()

#### Return Value

Type: [Schema.SOAPType](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SOAPType.htm "A Schema.SOAPType enum value is returned by the field describe result getSoapType method.")

### getSObjectField()

Returns the token for this field.

#### Signature

public Schema.sObjectField getSObjectField()

#### Return Value

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

### getSObjectType()

Returns the Salesforce object type from which this field originates.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Example

Schema.DescribeFieldResult f = Account.Industry.getDescribe(); Schema.sObjectType sourceType = f.getSObjectType(); Assert.areEqual(Account.sObjectType, sourceType);

### getType()

Returns one of the DisplayType enum values, depending on the type of field.

#### Signature

public Schema.DisplayType getType()

#### Return Value

Type: [Schema.DisplayType](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_DisplayType.htm "A Schema.DisplayType enum value is returned by the field describe result's getType method.")

### isAccessible()

Returns true if the current user can see this field, false otherwise.

#### Signature

public Boolean isAccessible()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isAiPredictionField() (Beta)

Returns true if the current field is enabled to display Einstein prediction data, false otherwise.

#### Signature

public Boolean isAiPredictionField()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Custom number fields can be set to display Einstein prediction values. If you are participating in the Einstein Prediction Builder Beta program, use Einstein Prediction Builder to set up the value to display. Use this method to find out if a field is enabled to display an Einstein prediction value.

### isAutoNumber()

Returns true if the field is an Auto Number field, false otherwise.

#### Signature

public Boolean isAutoNumber()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Analogous to a SQL IDENTITY type, Auto Number fields are read-only, non-createable text fields with a maximum length of 30 characters. Auto Number fields are used to provide a unique ID that is independent of the internal object ID (such as a purchase order number or invoice number). Auto Number fields are configured entirely in the Salesforce user interface.

### isCalculated()

Returns true if the field is a custom formula field, false otherwise. Note that custom formula fields are always read-only.

#### Signature

public Boolean isCalculated()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCascadeDelete()

Returns true if the child object is deleted when the parent object is deleted, false otherwise.

#### Signature

public Boolean isCascadeDelete()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCaseSensitive()

Returns true if the field is case sensitive, false otherwise.

#### Signature

public Boolean isCaseSensitive()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCreateable()

Returns true if the field can be created by the current user, false otherwise.

#### Signature

public Boolean isCreateable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCustom()

Returns true if the field is a custom field, false if it is a standard field, such as Name.

#### Signature

public Boolean isCustom()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDefaultedOnCreate()

Returns true if the field receives a default value when created, false otherwise.

#### Signature

public Boolean isDefaultedOnCreate()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If this method returns true, Salesforce implicitly assigns a value for this field when the object is created, even if a value for this field is not passed in on the create call. For example, in the Opportunity object, the Probability field has this attribute because its value is derived from the Stage field. Similarly, the Owner has this attribute on most objects because its value is derived from the current user (if the Owner field is not specified).

### isDependentPicklist()

Returns true if the picklist is a dependent picklist, false otherwise.

#### Signature

public Boolean isDependentPicklist()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDeprecatedAndHidden()

Reserved for future use.

#### Signature

public Boolean isDeprecatedAndHidden()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isEncrypted()

Returns true if the field is encrypted with Shield Platform Encryption, false otherwise.

#### Signature

public Boolean isEncrypted()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isExternalID()

Returns true if the field is used as an external ID, false otherwise.

#### Signature

public Boolean isExternalID()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isFilterable()

Returns true if the field can be used as part of the filter criteria of a WHERE statement, false otherwise.

#### Signature

public Boolean isFilterable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isFormulaTreatNullNumberAsZero()

Returns true if null is treated as zero in a formula field, false otherwise.

#### Signature

public Boolean isFormulaTreatNullNumberAsZero()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isGroupable()

Returns true if the field can be included in the GROUP BY clause of a SOQL query, false otherwise. This method is only available for Apex classes and triggers saved using API version 18.0 and higher.

#### Signature

public Boolean isGroupable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isHtmlFormatted()

Returns true if the field has been formatted for HTML and should be encoded for display in HTML, false otherwise. One example of a field that returns true for this method is a hyperlink custom formula field. Another example is a custom formula field that has an IMAGE text function.

#### Signature

public Boolean isHtmlFormatted()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isIdLookup()

Returns true if the field can be used to specify a record in an upsert method, false otherwise.

#### Signature

public Boolean isIdLookup()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isNameField()

Returns true if the field is a name field, false otherwise.

#### Signature

public Boolean isNameField()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This method is used to identify the name field for standard objects (such as AccountName for an Account object) and custom objects. Objects can only have one name field, except where the FirstName and LastName fields are used instead (such as on the Contact object).

If a compound name is present, for example, the Name field on a person account, isNameField is set to true for that record.

### isNamePointing()

Returns true if the field can have multiple types of objects as parents. For example, a task can have both the Contact/Lead ID (WhoId) field and the Opportunity/Account ID (WhatId) field return true for this method. because either of those objects can be the parent of a particular task record. This method returns false otherwise.

#### Signature

public Boolean isNamePointing()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isNillable()

Returns true if the field is nillable, false otherwise. A nillable field can have empty content. A non-nillable field must have a value for the object to be created or saved.

#### Signature

public Boolean isNillable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isPermissionable()

Returns true if field permissions can be specified for the field, false otherwise.

#### Signature

public Boolean isPermissionable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRestrictedDelete()

Returns true if the parent object can't be deleted because it is referenced by a child object, false otherwise.

#### Signature

public Boolean isRestrictedDelete()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRestrictedPicklist()

Returns true if the field is a restricted picklist, false otherwise

#### Signature

public Boolean isRestrictedPicklist()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isSearchPrefilterable()

Returns true if a foreign key can be included in prefiltering when used in a SOSL WHERE clause, false otherwise.

#### Signature

public Boolean isSearchPrefilterable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

*Prefiltering* means to filter by a specific field value before executing the full search query. Prefiltering is supported only in WHERE clauses with the equals (\=) operator.

### isSortable()

Returns true if a query can sort on the field, false otherwise

#### Signature

public Boolean isSortable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUnique()

Returns true if the value for the field must be unique, false otherwise

#### Signature

public Boolean isUnique()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUpdateable()

Returns true if the field can be edited by the current user, or child records in a master-detail relationship field on a custom object can be reparented to different parent records; false otherwise.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

#### Signature

public Boolean isUpdateable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isWriteRequiresMasterRead()

Returns true if writing to the detail object requires read sharing instead of read/write sharing of the parent.

#### Signature

public Boolean isWriteRequiresMasterRead()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```
Schema.DescribeFieldResult dfr = Account.Description.getDescribe();
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- SObjectField (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm)
- getByteLength() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getCalculatedFormula() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getController() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getDefaultValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getDefaultValueFormula() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getDigits() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getInlineHelpText() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
