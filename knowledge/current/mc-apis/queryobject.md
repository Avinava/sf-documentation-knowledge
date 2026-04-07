---
title: "QueryObject"
domain: mc-apis
topic: queryobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.207Z
estimatedTokens: 111
keywords: [QueryObject]
---

# QueryObject

# QueryObject

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Objects | QueryObject[] | Specifies one or more object to create. |
| ObjectType | xsd:string | Specifies whether the object is a List, Subscriber, Email, or other type of object. |
| Properties | xsd:ArrayOfString | Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method. |
