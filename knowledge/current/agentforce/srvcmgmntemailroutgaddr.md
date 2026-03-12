---
title: "SrvcMgmntEmailRoutgAddr"
domain: agentforce
topic: srvcmgmntemailroutgaddr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.254Z
estimatedTokens: 607
keywords: [SrvcMgmntEmailRoutgAddr, relationship, email, address, generated, specific, service, management, operation, incident, API, version, 65.0, later, SOAP]
---

# SrvcMgmntEmailRoutgAddr

> Represents the relationship between an email address and a generated email
         address for a specific type of service management operation, such as an incident. This
      object is available in API version 65.0 and later.

# SrvcMgmntEmailRoutgAddr

Represents the relationship between an email address and a generated email address for a specific type of service management operation, such as an incident. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AssignedDefaultImpactValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for impact assigned to an incident when it is reported by the employee using the email address. |
| AssignedDefaultUrgencyValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for urgency assigned to an incident when it is reported by the employee using the email address. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display name or label of the routing address configuration. |
| EmailAddress | TypeemailPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe email address to which your customers direct their questions. Emails are forwarded from this address. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of the record. |
| ServiceOperationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of service operation for which the routing address is configured.Possible values are:EmailToIncident |
