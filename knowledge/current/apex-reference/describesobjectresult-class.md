---
title: "DescribeSObjectResult Class"
domain: apex-reference
topic: describesobjectresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.158Z
estimatedTokens: 11235
namespace: Schema
keywords: [DescribeSObjectResult, associated, History, Share, Usage, accessible, associateentitytype, associateparententity, childrelationships, createable, custom, customsetting, datatranslationenabled, defaultimplementation, deletable]
---

# DescribeSObjectResult Class

> The type of associated object. For example, History or Share.

**Namespace:** `Schema`

# DescribeSObjectResult Class

Contains methods for describing SObjects. None of the methods take an argument.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

Instances of describe results on the same DescribeSObjectResult aren’t guaranteed to be equal because the state and behavior of a describe object is determined by various factors including the API version used. To compare describe results, call the getSObjectType() method on the SObject describe results and use the equality operator (\==) to compare the [SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.") values.

## DescribeSObjectResult Properties

The following are properties for DescribeSObjectResult.

### accessible

Indicates whether the current user has access to the SObject.

#### Signature

public Boolean accessible {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### associateentitytype

The type of associated object. For example, History or Share.

#### Signature

public String associateentitytype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### associateparententity

The parent object of an associated object.

#### Signature

public String associateparententity {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### childrelationships

A list of child relationships, which is the name of the sObject that has a foreign key to the sObject being described.

#### Signature

public List<Schema.ChildRelationship> childrelationships {get; set;}

#### Property Value

Type: List<[Schema.ChildRelationship](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_class_Schema_ChildRelationship "Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.")\>

### createable

Indicates whether the SObject can be created by the current user.

#### Signature

public Boolean createable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### custom

Indicates whether the SObject is a custom object.

#### Signature

public Boolean custom {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### customsetting

Indicates whether the SObject is a custom setting.

#### Signature

public Boolean customsetting {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### datatranslationenabled

Indicates whether data translation is enabled for the SObject. This property is available in API version 49.0 and later.

#### Signature

public Boolean datatranslationenabled {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### defaultimplementation

Reserved for future use.

#### Signature

public String defaultimplementation {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### deletable

Indicates whether the SObject can be deleted by the current user.

#### Signature

public Boolean deletable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### deprecatedandhidden

Reserved for future use.

#### Signature

public Boolean deprecatedandhidden {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### feedenabled

Indicates whether Chatter feeds are enabled for the SObject.

#### Signature

public Boolean feedenabled {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### fields

A list of fields associated with the SObject.

#### Signature

public Schema.SObjectTypeFields fields {get; set;}

#### Property Value

Type: Schema.SObjectTypeFields

Follow fields with the getMap method.

#### Example

This sample code shows how to use fields. To get a custom field, specify the custom field name.

```

```

### fieldSets

Represents field sets, which is a grouping of the SObject fields.

#### Signature

public Schema.SObjectTypeFieldSets fieldsets {get; set;}

#### Property Value

Type: Schema.SObjectTypeFieldSets

Follow fieldSets with a field set name or with the getMap method.

#### Example

This sample code shows how to use fieldSet.

```

```

### hassubtypes

Reserved for future use.

#### Signature

public Boolean hassubtypes {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### implementedby

Reserved for future use.

#### Signature

public String implementedby {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### implementsinterfaces

Reserved for future use.

#### Signature

public String implementsinterfaces {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isinterface

Reserved for future use.

#### Signature

public Boolean isinterface {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### keyprefix

The three-character prefix code in the SObject ID.

#### Signature

public String keyprefix {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### label

The SObject's label, which may or may not match the object name. For example, an organization representing a medical vertical might rename Account to Patient. Tabs and fields can be renamed in the Salesforce user interface.

#### Signature

public String label {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelplural

The SObject's plural label, which may or may not match the object name. For example, Accounts.

#### Signature

public String labelplural {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### localname

The name of the SObject. If the object is part of the current namespace, the namespace portion of the name is omitted.

#### Signature

public String localname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### mergeable

Indicates whether the SObject can be merged with other objects of its type by the current user. This is set to true for leads, contacts, and accounts.

#### Signature

public Boolean mergeable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### mruenabled

Indicates whether Most Recently Used (MRU) list functionality is enabled for the SObject.

#### Signature

public Boolean mruenabled {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### name

The name field of the SObject.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### queryable

Indicates whether the SObject can be queried by the current user.

#### Signature

public Boolean queryable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### recordtypeinfos

A list of the record types supported by the SObject.

#### Signature

public List<Schema.RecordTypeInfo> recordtypeinfos {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### recordtypeinfosbydevelopername

A map that matches developer names to their associated record type.

#### Signature

public Map<String,Schema.RecordTypeInfo> recordtypeinfosbydevelopername {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### recordtypeinfosbyid

A map that matches record IDs to their associated record types.

#### Signature

public Map<Id,Schema.RecordTypeInfo> recordtypeinfosbyid {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### recordtypeinfosbyname

A map that matches record labels to their associated record type.

#### Signature

public Map<String,Schema.RecordTypeInfo> recordtypeinfosbyname {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### searchable

Indicates whether the SObject can be searched by the current user.

#### Signature

public Boolean searchable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### sobjectdescribeoption

The effective describe option used by the system for the SObject.

#### Signature

public Schema.SObjectDescribeOptions sobjectdescribeoption {get; set;}

#### Property Value

Type: [SObjectDescribeOptions Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SObjectDescribeOptions.htm "A Schema.SObjectDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.")

### sobjecttype

The Schema.SObjectType object for the SObject.

#### Signature

public Schema.SObjectType sobjecttype {get; set;}

#### Property Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

### undeletable

Indicates whether the SObject can be undeleted by the current user.

#### Signature

public Boolean undeletable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### updateable

Indicates whether the SObject can be updated by the current user.

#### Signature

public Boolean updateable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## DescribeSObjectResult Methods

The following are methods for DescribeSObjectResult. All are instance methods.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_equals)**
    Compares the SObject to the specified object and returns true if both are equal. Otherwise, returns false.
-   **[getAssociateEntityType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getAssociateEntityType)**
    Returns additional metadata for an associated object of a specified parent but only if it's a specific associated object type. Used in combination with the getAssociateParentEntity() method to get the parent object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.
-   **[getAssociateParentEntity()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getAssociateParentEntity)**
    Returns additional metadata for an associated object but only if it's associated to a specific parent object. Used in combination with the getAssociateEntityType() method to get the type of associated object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.
-   **[getChildRelationships()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getChildRelationships)**
    Returns a list of child relationships, which are the names of the sObjects that have a foreign key to the sObject being described.
-   **[getDataTranslationEnabled()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getDataTranslationEnabled)**
    Returns true if data translation is enabled for the SObject. Otherwise, returns false.
-   **[getDefaultImplementation()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getDefaultImplementation)**
    Reserved for future use.
-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getFields)**
    Returns the fields that make up the SObject being described.
-   **[getFieldSets()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getFieldSets)**
    Returns field sets, which is a grouping of the SObject fields.
-   **[getHasSubtypes()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getHasSubtypes)**
    Reserved for future use.
-   **[getImplementedBy()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getImplementedBy)**
    Reserved for future use.
-   **[getImplementsInterfaces()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getImplementsInterfaces)**
    Reserved for future use.
-   **[getIsInterface()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getIsInterface)**
    Reserved for future use.
-   **[getKeyPrefix()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getKeyPrefix)**
    Returns the three-character prefix code for the object. Record IDs are prefixed with three-character codes that specify the type of the object (for example, accounts have a prefix of 001 and opportunities have a prefix of 006).
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getLabel)**
    Returns the object's label, which may or may not match the object name.
-   **[getLabelPlural()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getLabelPlural)**
    Returns the object's plural label, which may or may not match the object name.
-   **[getLocalName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getLocalName)**
    Returns the name of the object, similar to the getName method. However, if the object is part of the current namespace, the namespace portion of the name is omitted.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getName)**
    Returns the name of the object.
-   **[getRecordTypeInfos()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getRecordTypeInfos)**
    Returns a list of the record types supported by this object. The current user is not required to have access to a record type to see it in this list.
-   **[getRecordTypeInfosByDeveloperName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getRecordTypeInfosByDeveloperName)**
    Returns a map that matches developer names to their associated record type. The current user is not required to have access to a record type to see it in this map.
-   **[getRecordTypeInfosById()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getRecordTypeInfosByID)**
    Returns a map that matches record IDs to their associated record types. The current user is not required to have access to a record type to see it in this map.
-   **[getRecordTypeInfosByName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getRecordTypeInfosByName)**
    Returns a map that matches record labels to their associated record type. The current user is not required to have access to a record type to see it in this map.
-   **[getSObjectDescribeOption()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getSObjectDescribeOption)**
    Returns the effective describe option used by the system for the SObject.
-   **[getSobjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_getSobjectType)**
    Returns the Schema.SObjectType object for the sObject. You can use this to create a similar sObject.
-   **[getHasSubtypes()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#unique_399572061)**
    Reserved for future use.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_hashCode)**
    Returns the hash code for the SObject.
-   **[isAccessible()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isAccessible)**
    Returns true if the current user can see this object, false otherwise.
-   **[isCreateable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isCreateable)**
    Returns true if the object can be created by the current user, false otherwise.
-   **[isCustom()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isCustom)**
    Returns true if the object is a custom object, false if it is a standard object.
-   **[isCustomSetting()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isCustomSetting)**
    Returns true if the object is a custom setting, false otherwise.
-   **[isDeletable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isDeletable)**
    Returns true if the object can be deleted by the current user, false otherwise.
-   **[isDeprecatedAndHidden()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isDeprecatedAndHidden)**
    Reserved for future use.
-   **[isFeedEnabled()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isFeedEnabled)**
    Returns true if Chatter feeds are enabled for the object, false otherwise. This method is only available for Apex classes and triggers saved using SalesforceAPI version 19.0 and later.
-   **[isMergeable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isMergeable)**
    Returns true if the object can be merged with other objects of its type by the current user, false otherwise. true is returned for leads, contacts, and accounts.
-   **[isMruEnabled()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isMruEnabled)**
    Returns true if Most Recently Used (MRU) list functionality is enabled for the object, false otherwise.
-   **[isQueryable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isQueryable)**
    Returns true if the object can be queried by the current user, false otherwise
-   **[isSearchable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isSearchable)**
    Returns true if the object can be searched by the current user, false otherwise.
-   **[isUndeletable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isUndeletable)**
    Returns true if the object can be undeleted by the current user, false otherwise.
-   **[isUpdateable()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_isUpdateable)**
    Returns true if the object can be updated by the current user, false otherwise.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Schema_DescribeSObjectResult_toString)**
    Returns a string that represents the SObject.

### equals(obj)

Compares the SObject to the specified object and returns true if both are equal. Otherwise, returns false.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

The object with which to compare.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getAssociateEntityType()

Returns additional metadata for an associated object of a specified parent but only if it's a specific associated object type. Used in combination with the getAssociateParentEntity() method to get the parent object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.

#### Signature

public String associateentitytype {get; set;}

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [DescribeSObjectResult Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Scheme_DescribeSObjectResult_properties)


### getAssociateParentEntity()

Returns additional metadata for an associated object but only if it's associated to a specific parent object. Used in combination with the getAssociateEntityType() method to get the type of associated object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.

#### Signature

public String getAssociateParentEntity()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [DescribeSObjectResult Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Scheme_DescribeSObjectResult_properties)


### getChildRelationships()

Returns a list of child relationships, which are the names of the sObjects that have a foreign key to the sObject being described.

#### Signature

public Schema.ChildRelationship getChildRelationships()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.ChildRelationship](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_class_Schema_ChildRelationship "Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.")\>

#### Example

For example, the Account object includes Contacts and Opportunities as child relationships.

### getDataTranslationEnabled()

Returns true if data translation is enabled for the SObject. Otherwise, returns false.

#### Signature

public Boolean getDataTranslationEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getDefaultImplementation()

Reserved for future use.

#### Signature

public String getDefaultImplementation()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFields()

Returns the fields that make up the SObject being described.

#### Signature

public Schema.SObjectTypeFields getFields()

#### Return Value

Type: Schema.SObjectTypeFields

The return value is a special data type. Call the getMap() method to get a map of Strings and SObjectFields.

#### Usage

When you describe SObjects and their fields from within an Apex class, custom fields of new field types are returned regardless of the API version that the class is saved in. If a field type, such as the geolocation field type, is available only in a recent API version, components of a geolocation field are returned even if the class is saved in an earlier API version.

#### See Also

-   [*Apex Developer Guide*: Using Field Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Apex Developer Guide: Using Field Tokens - HTML (New Window)")

-   [*Apex Developer Guide*: Describing sObjects Using Schema Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Apex Developer Guide: Describing sObjects Using Schema Method - HTML (New Window)")

-   [*Apex Developer Guide*: Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm "Apex Developer Guide: Understanding Apex Describe Information - HTML (New Window)")


### getFieldSets()

Returns field sets, which is a grouping of the SObject fields.

#### Signature

public Schema.SObjectTypeFieldSets getFieldSets()

#### Return Value

Type: Schema.SObjectTypeFieldSets

The return value is a special data type. Call the getMap() method to get a map of Strings and SObjectFieldSets.

#### See Also

-   [*Apex Developer Guide*: Using Field Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Apex Developer Guide: Using Field Tokens - HTML (New Window)")

-   [*Apex Developer Guide*: Describing sObjects Using Schema Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Apex Developer Guide: Describing sObjects Using Schema Method - HTML (New Window)")

-   [*Apex Developer Guide*: Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm "Apex Developer Guide: Understanding Apex Describe Information - HTML (New Window)")


### getHasSubtypes()

Reserved for future use.

#### Signature

To check if Person Accounts are enabled for the current org, use this code snippet: Schema.SObjectType.Account.fields.getMap().containsKey( 'isPersonAccount' );

public Boolean getHasSubtypes()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getImplementedBy()

Reserved for future use.

#### Signature

public String getImplementedBy()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getImplementsInterfaces()

Reserved for future use.

#### Signature

public String getImplementsInterfaces()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getIsInterface()

Reserved for future use.

#### Signature

public Boolean getIsInterface()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getKeyPrefix()

Returns the three-character prefix code for the object. Record IDs are prefixed with three-character codes that specify the type of the object (for example, accounts have a prefix of 001 and opportunities have a prefix of 006).

#### Signature

public String getKeyPrefix()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The DescribeSobjectResult object returns a value for objects that have a stable prefix. For object types that do not have a stable or predictable prefix, this field is blank. Client applications that rely on these codes can use this way of determining object type to ensure forward compatibility.

### getLabel()

Returns the object's label, which may or may not match the object name.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The object's label might not always match the object name. For example, an organization in the medical industry might change the label for Account to Patient. This label is then used in the Salesforce user interface. See the Salesforce online help for more information.

### getLabelPlural()

Returns the object's plural label, which may or may not match the object name.

#### Signature

public String getLabelPlural()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The object's plural label might not always match the object name. For example, an organization in the medical industry might change the plural label for Account to Patients. This label is then used in the Salesforce user interface. See the Salesforce online help for more information.

### getLocalName()

Returns the name of the object, similar to the getName method. However, if the object is part of the current namespace, the namespace portion of the name is omitted.

#### Signature

public String getLocalName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the name of the object.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecordTypeInfos()

Returns a list of the record types supported by this object. The current user is not required to have access to a record type to see it in this list.

#### Signature

public List<Schema.RecordTypeInfo> getRecordTypeInfos()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### getRecordTypeInfosByDeveloperName()

Returns a map that matches developer names to their associated record type. The current user is not required to have access to a record type to see it in this map.

#### Signature

public Map<String, Schema.RecordTypeInfo> getRecordTypeInfosByDeveloperName()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### getRecordTypeInfosById()

Returns a map that matches record IDs to their associated record types. The current user is not required to have access to a record type to see it in this map.

#### Signature

public Schema.RecordTypeInfo getRecordTypeInfosById()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### getRecordTypeInfosByName()

Returns a map that matches record labels to their associated record type. The current user is not required to have access to a record type to see it in this map.

#### Signature

public Schema.RecordTypeInfo getRecordTypeInfosByName()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [Schema.RecordTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo "Contains methods for accessing record type information for an sObject with associated record types.")\>

### getSObjectDescribeOption()

Returns the effective describe option used by the system for the SObject.

#### Signature

public Schema.SObjectDescribeOptions getSObjectDescribeOption()

#### Return Value

Type: [Schema.SObjectDescribeOptions](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SObjectDescribeOptions.htm "A Schema.SObjectDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.")

Valid values are:

-   SObjectDescribeOptions.FULL: Indicates eager-load all elements of the describe, including child relationships, up-front at the time of method invocation.
-   SObjectDescribeOptions.DEFERRED: Indicates lazy-load child relationships. This means that all child relationships will not be loaded at the time of first invocation of the method.

### getSobjectType()

Returns the Schema.SObjectType object for the sObject. You can use this to create a similar sObject.

#### Signature

public Schema.SObjectType getSobjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

### getHasSubtypes()

Reserved for future use.

#### Signature

To check if Person Accounts are enabled for the current org, use this code snippet: Schema.SObjectType.Account.fields.getMap().containsKey( 'isPersonAccount' );

public Boolean getHasSubtypes()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Returns the hash code for the SObject.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isAccessible()

Returns true if the current user can see this object, false otherwise.

#### Signature

public Boolean isAccessible()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Versioned Behavior Changes

In API version 54.0 and later, for custom settings and custom metadata type objects, DescribeSObjectResult.isAccessible() returns false if the user doesn’t have permissions to access the queried objects. In API version 53.0 and earlier, the method returns true even if the user doesn't have the required permissions.

### isCreateable()

Returns true if the object can be created by the current user, false otherwise.

#### Signature

public Boolean isCreateable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCustom()

Returns true if the object is a custom object, false if it is a standard object.

#### Signature

public Boolean isCustom()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCustomSetting()

Returns true if the object is a custom setting, false otherwise.

#### Signature

public Boolean isCustomSetting()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDeletable()

Returns true if the object can be deleted by the current user, false otherwise.

#### Signature

public Boolean isDeletable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDeprecatedAndHidden()

Reserved for future use.

#### Signature

public Boolean isDeprecatedAndHidden()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isFeedEnabled()

Returns true if Chatter feeds are enabled for the object, false otherwise. This method is only available for Apex classes and triggers saved using SalesforceAPI version 19.0 and later.

#### Signature

public Boolean isFeedEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isMergeable()

Returns true if the object can be merged with other objects of its type by the current user, false otherwise. true is returned for leads, contacts, and accounts.

#### Signature

public Boolean isMergeable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isMruEnabled()

Returns true if Most Recently Used (MRU) list functionality is enabled for the object, false otherwise.

#### Signature

public Boolean isMruEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isQueryable()

Returns true if the object can be queried by the current user, false otherwise

#### Signature

public Boolean isQueryable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isSearchable()

Returns true if the object can be searched by the current user, false otherwise.

#### Signature

public Boolean isSearchable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUndeletable()

Returns true if the object can be undeleted by the current user, false otherwise.

#### Signature

public Boolean isUndeletable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUpdateable()

Returns true if the object can be updated by the current user, false otherwise.

#### Signature

public Boolean isUpdateable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### toString()

Returns a string that represents the SObject.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
Schema.DescribeFieldResult dfr = Schema.SObjectType.Account.fields.Name;
```

```apex
Schema.DescribeSObjectResult d = 
  Account.sObjectType.getDescribe();
Map<String, Schema.FieldSet> FsMap = 
  d.fieldSets.getMap();
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- SObjectType (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Schema.ChildRelationship (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Schema.RecordTypeInfo (atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- SObjectDescribeOptions Enum (atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SObjectDescribeOptions.htm)
- Schema.SObjectType (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
