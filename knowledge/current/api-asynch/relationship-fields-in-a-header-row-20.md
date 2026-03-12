---
title: "Relationship Fields in a Header Row (2.0)"
domain: api-asynch
topic: relationship-fields-in-a-header-row-20
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.589Z
estimatedTokens: 1197
namespace: ObjectType
keywords: [Relationship, Row, 2.0, objects, Salesforce, Account, parent, Contact, add, CSV, file, representing, column, you're, processing]
---

# Relationship Fields in a Header Row (2.0)

> Many objects in Salesforce are related to other objects. For example, Account is a parent
  of Contact. You can add a reference to a related object in a CSV file by representing the
  relationship in a column header. When you're processing records in the Bulk API, you use RelationshipName.IndexedFieldName syntax in a CSV
  column header to describe the relationship between an object and its parent, where
   RelationshipName is the relationship name of the field and
   IndexedFieldName is the indexed field name that uniquely identifies the parent
  record. Use the describeSObjects() call in the API to get
   the relationshipName property value for a field.

**Namespace:** `ObjectType`

# Relationship Fields in a Header Row (2.0)

Many objects in Salesforce are related to other objects. For example, Account is a parent of Contact. You can add a reference to a related object in a CSV file by representing the relationship in a column header. When you're processing records in the Bulk API, you use RelationshipName.IndexedFieldName syntax in a CSV column header to describe the relationship between an object and its parent, where RelationshipName is the relationship name of the field and IndexedFieldName is the indexed field name that uniquely identifies the parent record. Use the describeSObjects() call in the API to get the relationshipName property value for a field.

Some objects also have relationships to themselves. For example, the ReportsTo field for a contact is a reference to another contact. If you're inserting a contact, you could use a ReportsTo.Email column header to indicate that you're using a contact's Email field to uniquely identify the ReportsTo field for a contact. The ReportsTo portion of the column header is the relationshipName property value for the ReportsTo field. The following CSV file uses a relationship:

```

```

Note the following when referencing relationships in CSV header rows:

-   You can use a child-to-parent relationship, but you can't use a parent-to-child relationship.
-   You can use a child-to-parent relationship, but you can't extend it to use a child-to-parent-grandparent relationship.
-   You can only use indexed fields on the parent object. A custom field is indexed if its External ID field is selected. A standard field is indexed if its idLookup property is set to true. See the Field Properties column in the field table for each [standard object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)").

## Relationship Fields for Custom Objects

Custom objects use custom fields to track relationships between objects. Use the relationship name, which ends in \_\_r (underscore-underscore-r), to represent a relationship between two custom objects. You can add a reference to a related object by representing the relationship in a column header.

If the child object has a custom field with an API Name of Mother\_Of\_Child\_\_c that points to a parent custom object and the parent object has a field with an API Name of External\_ID\_\_c, use the column header Mother\_Of\_Child\_\_r.External\_ID\_\_c to indicate that you're using the parent object's External ID field to uniquely identify the Mother Of Child field. To use a relationship name in a column header, replace the \_\_c in the child object's custom field with \_\_r. For more information about relationships, see Understanding Relationship Names in the Salesforce SOQL and SOSL Reference Guide at [www.salesforce.com/us/developer/docs/soql\_sosl/index.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

The following CSV file uses a relationship:

```

```

## Relationships for Polymorphic Fields

A polymorphic field can refer to more than one type of object as a parent. For example, either a contact or a lead can be the parent of a task. In other words, the WhoId field of a task can contain the ID of either a contact or a lead. Because a polymorphic field is more flexible, the syntax for the column header has an extra element to define the type of the parent object. The syntax is:

ObjectType:RelationshipName.IndexedFieldName.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_asynch)

#### Important

Starting with version 57.0 of the API, for ObjectType use apiName, which should include namespace, if any, and should include \_\_c if the object is a custom object.

The following sample includes two reference fields:

1.  The WhoId field is polymorphic and has a relationshipName of Who. It refers to a lead and the indexed Email field uniquely identifies the parent record.
2.  The OwnerId field is not polymorphic and has a relationshipName of Owner. It refers to a user and the indexed Id field uniquely identifies the parent record.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_asynch)

#### Warning

The ObjectType: portion of a field column header is only required for a polymorphic field. You get an error if you omit this syntax for a polymorphic field. You also get an error if you include this syntax for a field that is not polymorphic.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
FirstName,LastName,ReportsTo.Email
Tom,Jones,buyer@salesforcesample.com
```

```
Name,Mother_Of_Child__r.External_ID__c
CustomObject1,123456
```

```
Subject,Priority,Status,Lead:Who.Email,Owner.Id
Test Bulk API polymorphic reference field,Normal,Not Started,lead@salesforcesample.com,005D0000001AXYz
```
