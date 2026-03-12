---
title: "CustomHttpHeader"
domain: tooling-api
topic: customhttpheader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.016Z
estimatedTokens: 383
keywords: [CustomHttpHeader, Represents, custom, HTTP, header, used, OData, 2.0, 4.0, external, data, sources., Custom, headers, provide, context, information, Salesforce, such, region]
---

# CustomHttpHeader

> Represents a custom HTTP header used with OData 2.0 or OData 4.0 external data
      sources. Custom HTTP headers provide context information from Salesforce such as region, org
      details, or the role of the person viewing the external object. This object is available
    in API version 51.0 and later.

# CustomHttpHeader

Represents a custom HTTP header used with OData 2.0 or OData 4.0 external data sources. Custom HTTP headers provide context information from Salesforce such as region, org details, or the role of the person viewing the external object. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA text description of the header field’s purpose. |
| HeaderFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the header field. The name must contain at least one alphanumeric character or underscore. It can also include: ! # $ % & ' * + - . ^ _ ` \| ~ |
| HeaderFieldValue | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionA formula that resolves to the value for the header. The values in the formula must evaluate to a string. If the formula resolves to null and an empty string, the header isn’t sent. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the custom HTTP header is available to use (true) or unavailable (false). |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the entity to which this custom HTTP header is related. |
