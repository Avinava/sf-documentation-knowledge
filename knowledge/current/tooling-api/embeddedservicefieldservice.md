---
title: "EmbeddedServiceFieldService"
domain: tooling-api
topic: embeddedservicefieldservice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.700Z
keywords: [EmbeddedServiceFieldService, Supported, Calls, REST, HTTP, Methods, Fields]
---

# EmbeddedServiceFieldService

# EmbeddedServiceFieldService

Represents a setup node for creating an embedded Appointment Management (beta) deployment. Available in Tooling API version 43.0 and later.

## Supported Calls

create(), delete() describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, POST, PATCH, DELETE

## Fields

| Field | Details |
| --- | --- |
| AppointmentBookingFlowName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the appointment booking flow for this Embedded Service deployment. |
| CancelApptBookingFlowName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the appointment cancellation flow for this embedded Appointment Management (beta) deployment. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique name for the embedded Appointment Management configuration setup node.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EmbeddedServiceConfigId | TypeEmbeddedServiceConfigPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID for the embedded Appointment Management (beta) deployment. |
| Enabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether Field Service is enabled for this Embedded Service deployment (true) or not (false). |
| FieldServiceConfirmCardImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the confirmation card in embedded Appointment Management (beta). |
| FieldServiceHomeImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the home screen in embedded Appointment Management (beta). |
| FieldServiceLogoImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the logo used for the home screen in embedded Appointment Management (beta). |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used for this Embedded Service deployment. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguages supported in the Embedded Service deployment.Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the Embedded Service deployment. |
| Metadata | Typemns:EmbeddedServiceFieldServicePropertiesCreate, Nillable, UpdateDescriptionThe embedded Appointment Management (beta) metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ModifyApptBookingFlowName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the appointment modification flow for this embedded Appointment Management (beta) deployment. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ShouldShowExistingAppointment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether to display a button on the home screen for customers to access their existing appointments (true) or not (false) for embedded Appointment Management (beta). |
| ShouldShowNewAppointment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether to display a button on the home screen for customers to create a new appointment (true) or not (false) for embedded Appointment Management (beta). |