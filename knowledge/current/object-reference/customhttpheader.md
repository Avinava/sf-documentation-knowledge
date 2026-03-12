---
title: "CustomHttpHeader"
domain: object-reference
topic: customhttpheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.694Z
estimatedTokens: 438
keywords: [CustomHttpHeader, custom, HTTP, context, Salesforce, region, org, role, person, viewing, external, API, version, 43.0, later]
---

# CustomHttpHeader

> Represents a custom HTTP header that provides context information from
      Salesforce such as region, org details, or the role of the person viewing the external object.
     This object is available in API version 43.0 and later.

# CustomHttpHeader

Represents a custom HTTP header that provides context information from Salesforce such as region, org details, or the role of the person viewing the external object. This object is available in API version 43.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA text description of the header field’s purpose. |
| HeaderFieldName | TypestringPropertiesFilter, Group, SortDescriptionName of the header field. The name must contain at least one alphanumeric character or underscore. It can also include: ! # $ % & ' * + - . ^ _ ` \| ~ |
| HeaderFieldValue | TypestringPropertiesFilter, SortDescriptionA formula that resolves to the value for the header. The values in the formula must evaluate to a string. If the formula resolves to null and an empty string, the header isn’t sent. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the custom HTTP header is available to use. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the entity that the custom HTTP header is related to.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToExternalDataSource, NamedCredential |

## Usage

For each OData external data source, define up 10 HTTP headers to request data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

HTTP headers aren’t supported on named credentials.
