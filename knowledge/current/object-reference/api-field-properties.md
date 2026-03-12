---
title: "API Field Properties"
domain: object-reference
topic: api-field-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.133Z
estimatedTokens: 439
keywords: [API, objects, represent, analogous, columns, database]
---

# API Field Properties

> Fields on objects represent the details of each object and are analogous to columns in a
      database table. Each field on each object has one or more of the following properties:

# API Field Properties

Fields on objects represent the details of each object and are analogous to columns in a database table. Each field on each object has one or more of the following properties:

| Property | Description |
| --- | --- |
| Aggregatable | Can be used by one of the SOQL aggregate functions. |
| Autonumber | The API creates an autonumber. |
| Create | Value for the field can be specified during create using the API. |
| Defaulted on create | If no other value is specified when created, a default value is supplied. |
| Delete | Value for the field can be deleted using the API. |
| Filter | Can be used as filter criteria in a SOQL query FROM or WHERE clause. |
| Group | Can be included in the GROUP BY clause of a SOQL query (true) or not (false). Available in API version 18.0 and later. |
| idLookup | Can be used to specify a record in an upsert call. The Id field of each object has this property and some Name fields. There are exceptions, so check for the property in any object you wish to upsert. |
| Namepointing | Indicates whether the field's value is the Name of the parent of this object (true) or not (false). Used for objects whose parents can be more than one type of object. For example, a task can have an account or a contact as a parent. |
| Nillable | The field can contain a null value. |
| Query | The field can be queried with SOQL using the API. |
| Restricted picklist | A picklist whose values are restricted to those values defined by a Salesforce admin. Users can’t load unapproved values through the API. |
| Retrieve | Value of the field can be retrieved using the API. |
| Sort | Indicates whether a query can sort on this field (true) or not (false). |
| Update | Can be updated using the API. |
