---
title: "ObjectDefinition"
domain: mc-apis
topic: objectdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.800Z
estimatedTokens: 417
keywords: [ObjectDefinition, stores, metadata, results, Describe, call's, ObjectDefinitionRequest]
---

# ObjectDefinition

> The ObjectDefinition object stores metadata about an object. This object contains the results of a Describe call's ObjectDefinitionRequest.

# ObjectDefinition

The ObjectDefinition object stores metadata about an object. This object contains the results of a Describe call's ObjectDefinitionRequest.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ChildObjects | ObjectDefinition[] | Identifies child objects within a Marketing Cloud for Microsoft Dynamics CRM installation. |
| ExtendedProperties | PropertyDefinition[] | Extended property information about an object as defined by a client. |
| IsCreatable | xsd:boolean | Indicates if the property can be set on a Create call. A value of true indicates it can be created. (PropertyDefinition) Indicates whether object can be created. A value of true indicates it can be created. (ObjectDefinition) Indicates whether the field can be created. A value of true indicates it can be created. (DataExtensionField) |
| IsObjectCollection | xsd:boolean | Reserved for future use. |
| IsPropertyCollection | xsd:string | Reserved for future use. |
| IsQueryable | xsd:boolean | Indicates whether the property can be queried. |
| IsReference | xsd:boolean | Reserved for future use. |
| IsRetrievable | xsd:boolean | Indicates if object data can be retrieved. |
| IsUpdatable | xsd:boolean | Indicates whether object can be updated. |
| Name | xsd:string | Name of the object or property. |
| ObjectType | xsd:string | Specifies whether the object is a List, Subscriber, Email, or other type of object. |
| Properties | PropertyDefinition[] | Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method. |
| ReferencedType | xsd:string | Reserved for future use. |
