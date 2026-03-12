---
title: "Relationship Fields in Records"
domain: api-asynch
topic: relationship-fields-in-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.466Z
estimatedTokens: 1104
keywords: [Relationship, Records, objects, relationships, themselves, ReportsTo, contact, another, Custom, Polymorphic]
---

# Relationship Fields in Records

> Some objects also have relationships to themselves. For example, the
      ReportsTo field for a contact is a reference to another
    contact.

# Relationship Fields in Records

Some objects also have relationships to themselves. For example, the ReportsTo field for a contact is a reference to another contact.

To add a reference to a related object for a field in a JSON or XML record, use the following syntax to represent the relationship. The RelationshipName is the relationship name of the field, and IndexedFieldName is the indexed field name that identifies the parent record.

JSON:

```

```

XML:

```

```

Use the describeSObjects() call in the API to get the relationshipName property value for a field. Use an indexed field to uniquely identify the parent record for the relationship. A standard field is indexed if its idLookup property is set to true.

These samples include a contact record that includes the ReportsTo field, which is a reference to another contact. ReportsTo is the relationshipName property value for the ReportsTo field. In this case, the parent object for the ReportsTo field is also a contact, so we use the Email field to identify the parent record. The idLookup property value for the Email field is true. To see if there is a idLookup property for a field, go to the Field Properties column in the field table for each [standard object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)").

JSON:

```

```

XML:

```

```

When using relationships in JSON or XML records:

-   You can use a child-to-parent relationship, but you can't use a parent-to-child relationship.
-   You can use a child-to-parent relationship, but you can't extend it to use a child-to-parent-grandparent relationship.

## Relationship Fields for Custom Objects

Custom objects use custom fields to track relationships between objects. Use the relationship name, which ends in \_\_r (underscore-underscore-r), to represent a relationship between two custom objects. You can add a reference to a related object by using an indexed field. A custom field is indexed if its External ID field is selected.

For example, let’s say a child object has a custom field with an API Name of Mother\_Of\_Child\_\_c that points to a parent custom object. Let’s assume that the parent object has a field with an API Name of External\_ID\_\_c. You can use the Mother\_Of\_Child\_\_r relationshipName property to indicate that you’re referencing a relationship to the parent object. Use the parent object’s External ID field as a unique identifier for the Mother Of Child field. To use a relationship name, replace the \_\_c in the child object’s custom field with \_\_r. For more information about relationships, see Understanding Relationship Names in the Salesforce SOQL and SOSL Reference Guide at [www.salesforce.com/us/developer/docs/soql\_sosl/index.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

The following JSON and XML files show usage of the relationship.

JSON:

```

```

XML:

```

```

## Relationships for Polymorphic Fields

A polymorphic field can refer to more than one type of object as a parent. For example, either a contact or a lead can be the parent of a task. In other words, the WhoId field of a task can contain the ID of either a contact or a lead. Since a polymorphic field is more flexible, the syntax for the relationship field has an extra element to define the type of the parent object. The following JSON and XML samples show the syntax, where RelationshipName is the relationship name of the field, ObjectTypeName is the object type of the parent record, and IndexedFieldName is the indexed field name that uniquely identifies the parent record.

JSON:

```

```

XML:

```

```

These samples include two reference fields.

1.  The WhoId field is polymorphic and has a relationshipName of Who. It refers to a lead and the indexed Email field uniquely identifies the parent record.
2.  The OwnerId field is not polymorphic and has a relationshipName of Owner. It refers to a user and the indexed Id field uniquely identifies the parent record.

JSON:

```

```

XML:

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_asynch)

#### Warning

The type element is required only for a polymorphic field. If you omit this element for a polymorphic field or include it for a non-polymorphic field, you get an error.

## Code Examples

```
"RelationshipName" : { "IndexedFieldName" : "rwilliams@salesforcesample.com" }
```

```
<RelationshipName>
    <sObject>
        <IndexedFieldName>rwilliams@salesforcesample.com</IndexedFieldName>
    </sObject>
</RelationshipName>
```

```
[{
  "FirstName" : "Ray",
  "LastName" : "Riordan",
  "ReportsTo" : { "Email" : "rwilliams@salesforcesample.com" }
}]
```

```
<?xml version="1.0" encoding="UTF-8"?>
<sObjects xmlns="http://www.force.com/2009/06/asyncapi/dataload">
   <sObject>
      <FirstName>Ray</FirstName>
      <LastName>Riordan</LastName>
      <ReportsTo>
        <sObject>
          <Email>rwilliams@salesforcesample.com</Email>
        </sObject>
      </ReportsTo>
   </sObject>
</sObjects>
```

```
[{
  "Name" : "CustomObject1",
  "Mother_Of_Child__r" : { "External_ID__c" : "123456" }
}]
```
