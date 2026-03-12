---
title: "Schema Namespace"
domain: apex-reference
topic: schema-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.649Z
estimatedTokens: 1259
namespace: Schema
keywords: [Schema, classes, metadata]
---

# Schema Namespace

> The Schema namespace
provides classes and methods for schema metadata information.

**Namespace:** `Schema`

# Schema Namespace

The Schema namespace provides classes and methods for schema metadata information.

The following are the classes in the Schema namespace.

-   **[ChildRelationship Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_class_Schema_ChildRelationship)**
    Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.
-   **[DataCategory Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_class_Schema_DataCategory)**
    Represents the categories within a category group.
-   **[DataCategoryGroupSobjectTypePair Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_class_Schema_DataCategoryGroupSobjectTypePair)**
    Specifies a category group and an associated object.
-   **[DescribeColorResult Class](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_class_schema_describecolorresult)**
    Contains color metadata information for a tab.
-   **[Describe​DataCategoryGroupResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_class_Schema_DescribeDataCategoryGroupResult)**
    Contains the list of the category groups associated with KnowledgeArticleVersion and Question.
-   **[Describe​DataCategoryGroupStructureResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_class_Schema_DescribeDataCategoryGroupStructureResult)**
    Contains the category groups and categories associated with KnowledgeArticleVersion and Question.
-   **[DescribeFieldResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_methods_system_fields_describe)**
    Contains methods for describing sObject fields.
-   **[DescribeIconResult Class](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_class_schema_describeiconresult)**
    Contains icon metadata information for a tab.
-   **[DescribeSObjectResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe)**
    Contains methods for describing SObjects. None of the methods take an argument.
-   **[DescribeTabResult Class](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_class_schema_describetabresult)**
    Contains tab metadata information for a tab in a standard or custom app available in the Salesforce user interface.
-   **[DescribeTabSetResult Class](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabsetresult.htm#apex_class_schema_describetabsetresult)**
    Contains metadata information about a Salesforce Classic standard or custom app available in the Salesforce user interface.
-   **[DisplayType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_DisplayType.htm)**
    A Schema.DisplayType enum value is returned by the field describe result's getType method.
-   **[FieldDescribeOptions Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_FieldDescribeOptions.htm)**
    A Schema.FieldDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.
-   **[FieldSet Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_fieldsets_describe.htm#apex_methods_system_fieldsets_describe)**
    Contains methods for discovering and retrieving the details of field sets created on sObjects.
-   **[FieldSetMember Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_FieldSetMember.htm#apex_class_Schema_FieldSetMember)**
    Contains methods for accessing the metadata for field set member fields.
-   **[PicklistEntry Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_class_Schema_PicklistEntry)**
    Represents a picklist entry.
-   **[RecordTypeInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_RecordTypeInfo.htm#apex_class_Schema_RecordTypeInfo)**
    Contains methods for accessing record type information for an sObject with associated record types.
-   **[SOAPType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SOAPType.htm)**
    A Schema.SOAPType enum value is returned by the field describe result getSoapType method.
-   **[SObjectDescribeOptions Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Schema_SObjectDescribeOptions.htm)**
    A Schema.SObjectDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.
-   **[SObjectField Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField)**
    A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.
-   **[SObjectType Class](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType)**
    A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.

## Related Topics

- ChildRelationship Class (atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm)
- DataCategory Class (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm)
- DataCategoryGroupSobjectTypePair Class (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm)
- DescribeColorResult Class (atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm)
- Describe​DataCategoryGroupResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- Describe​DataCategoryGroupStructureResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm)
- DescribeFieldResult Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm)
- DescribeIconResult Class (atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm)
- DescribeSObjectResult Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm)
- DescribeTabResult Class (atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm)
