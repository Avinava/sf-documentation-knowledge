---
title: "EmailTemplate"
domain: tooling-api
topic: emailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.651Z
keywords: [EmailTemplate, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# EmailTemplate

# EmailTemplate

Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe API version if this is a Visualforce email template. Every Visualforce email template has an API version specified at creation. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe email template description. This can be useful to describe the reason for creating the template or its intended use. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the template identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeEmailTemplateMetadataPropertiesCreate, Nillable, UpdateDescriptionEmail template metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe email template name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this template from any others. For example, if this template is being using by a flow, use the NamespacePrefix to uniquely identify the templates in multiple flow instances. |
| RelatedEntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionWhen UIType is 2 (Lightning Experience) or 3 (Lightning ExperienceSample), RelatedEntityType indicates which entities this template can be used with. Valid values are the entity API name: "Account" for account, "Contact" for contact, "Opportunity" for opportunity, "Lead" for lead, and so on. The value can be any entity the user has read access to (including custom entities) but not virtual entities, setup entities, or platform entities.No restrictions exist at the schema level. |
| Subject | TypestringPropertiesGroup, Nillable, SortDescriptionThe email subject.The limit is 1,000 characters for Lightning email templates and 230 characters for Classic email templates. |
| UIType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates the user interface where this template is usable. Valid values are: 1 (Salesforce Classic), 2 (Lightning Experience), and 3 (Lightning Experience Sample). |