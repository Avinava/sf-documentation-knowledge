---
title: "ServiceOpPriorityConfig"
domain: agentforce
topic: serviceoppriorityconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.599Z
estimatedTokens: 544
keywords: [ServiceOpPriorityConfig, Represents, configuration, determines, priority, service, operation, such, incident, problem, change, request, based, impact, urgency., API, version, 65.0, later., Supported]
---

# ServiceOpPriorityConfig

> Represents the configuration that determines the priority of a service
         operation, such as an incident, problem, or a change request based on impact and
         urgency. This object is available in API version 65.0 and later.

# ServiceOpPriorityConfig

Represents the configuration that determines the priority of a service operation, such as an incident, problem, or a change request based on impact and urgency. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Impact | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe impact of the service operation that affects the priority determination. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of the record. |
| Priority | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority of the service operation that's determined based on the urgency and impact. |
| ReferenceObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe service operation, such as an incident, problem, or change request for which the priority is configured.Possible values are:ChangeRequest—Change RequestIncidentProblem |
| Urgency | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe urgency of the service operation that affects the priority determination. |
