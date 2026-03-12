---
title: "DomainProvision"
domain: tooling-api
topic: domainprovision
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.335Z
estimatedTokens: 587
keywords: [DomainProvision, provisioned, changes, custom, domains, API, version, 50.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# DomainProvision

> Represents provisioned changes to custom domains. This object is
      available in API version 50.0 and later.

# DomainProvision

Represents provisioned changes to custom domains. This object is available in API version 50.0 and later.

Custom domains are domains that you own, such at https://www.example.com, that serve your site content. When you save a change to a custom domain, Salesforce provisions the updated domain and a corresponding DomainProvision record is created. The latest DomainProvision record for a [Domain](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_domain.htm) represents the current state of the domain.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Special Access Rules

Only users with the Salesforce Integration user permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| CnameTarget | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the canonical name (CNAME) of the external host or server for this domain. If you use a non-Salesforce provider, such as your own external server or CDN provider, to serve your domain, this field points to the CNAME of the external provider. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRepresents whether the provisioning for this domain is processing or complete (true) or not (false). When you activate a provisioned domain, this field is set to false.The default value is false. |
| ProvisionEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the provisioning process was finished. |
| ProvisionFinalizeDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the provisioning process was canceled or when the provisioned domain was activated. |
| ProvisionStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents when the provisioning process started. |
| TargetCdnCertificate | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the domain is served on the Salesforce Content Delivery Network (CDN), represents the certificate that serves this domain.If your domain uses another domain configuration option, this field is null. |
| TargetDomainName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the domain name, such as www.example.com. |
