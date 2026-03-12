---
title: "SrvcMgmtObjCollabAppCnfg"
domain: agentforce
topic: srvcmgmtobjcollabappcnfg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.261Z
estimatedTokens: 708
keywords: [SrvcMgmtObjCollabAppCnfg, configuration, specific, service, management, collaboration, apps, whether, swarming, enabled, record, layout, that's, app, API]
---

# SrvcMgmtObjCollabAppCnfg

> Represents the configuration for a specific service management object and the
         types of collaboration apps supported for that object, such as whether swarming is enabled
         or not, the record type and page layout of the object that's supported for a specific app
         within the collaboration app, and more. This object is available in API version 65.0
      and later.

# SrvcMgmtObjCollabAppCnfg

Represents the configuration for a specific service management object and the types of collaboration apps supported for that object, such as whether swarming is enabled or not, the record type and page layout of the object that's supported for a specific app within the collaboration app, and more. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Fields

| Field | Details |
| --- | --- |
| CollabApplication | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the tool used as a channel of communication and collaboration to manage records where the configuration applies.Possible values are:Teams |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the configuration is active (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the record. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe UI label of the record. |
| RefObjRecPageLayoutId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the record page layout for the reference object that's related to the target application for the collaboration tool.This field is a relationship field.Relationship NameRefObjRecPageLayoutRefers ToLayout |
| RefObjRecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the record type for the reference object that's related to the target application for the collaboration tool.This field is a relationship field.Relationship NameRefObjRecordTypeRefers ToRecordType |
| ReferenceObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe reference object related to a collaboration tool configuration.Possible values are:CaseChangeRequestIncidentKnowledgeProblemRelease |
| TargetApplication | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the target application for a specific collaboration tool where the configuration applies. |
