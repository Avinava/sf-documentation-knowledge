---
title: "Child Relationship"
domain: uiapi
topic: child-relationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.764Z
estimatedTokens: 410
keywords: [Child, Relationship, parent, Relationships, connections, records, display, data, record's, detail]
---

# Child Relationship

> The child relationship on a parent object. Relationships are
      connections between records. Use relationships to display data about related object records on
      a record's detail page.

# Child Relationship

The child relationship on a parent object. Relationships are connections between records. Use relationships to display data about related object records on a record's detail page.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childObjectApiName | String | The API name of the child object. | Medium, 41.0 | 41.0 |
| fieldName | String | The field on the child object that contains the reference to the parent object.Instead of defining relationships through primary keys and foreign keys, the Salesforce database uses reference fields. A reference field stores the ID of the related parent record. | Medium, 41.0 | 41.0 |
| junctionIdListNames | String[] | The names of the JunctionIdList fields associated with an object. Each ID is a polymorphic key, which is an ID that can refer to more than one type of object. | Medium, 41.0 | 41.0 |
| junctionReferenceTo | String[] | A collection of object names that the polymorphic keys in the junctionIdListNames property can reference.You can query these object names. | Medium, 41.0 | 41.0 |
| relationshipName | String | The name of the relationship.A name for the child relationship that is unique to the parent. The name is the plural form of the child object name. For example, Account has child relationships to Assets, Cases, and Contacts, among other objects. Account has a relationshipName for each object: Assets, Cases, and Contacts. | Medium, 41.0 | 41.0 |

#### See Also

-   [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm "The metadata for an object.")

## Related Topics

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
