---
title: "RemoteProxy"
domain: tooling-api
topic: remoteproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.785Z
estimatedTokens: 977
keywords: [RemoteProxy, remote, site, settings, access, external, Salesforce, accessing, sites, Visualforce, pages, Apex, callouts, JavaScript, codes]
---

# RemoteProxy

> Represents a set of remote site settings that allows you to
            access an external site from Salesforce. Use RemoteProxy
            when accessing external sites called by Visualforce pages, Apex callouts,
            or JavaScript codes using XmlHttpRequest in an s-control or custom button. To be
            accessible, an external site must have its settings defined with RemoteProxy or
            registered in the Remote Site Settings page. Available in Tooling API version 37.0 and
        later.

# RemoteProxy

Represents a set of remote site settings that allows you to access an external site from Salesforce. Use RemoteProxy when accessing external sites called by Visualforce pages, Apex callouts, or JavaScript codes using XmlHttpRequest in an s-control or custom button. To be accessible, an external site must have its settings defined with RemoteProxy or registered in the Remote Site Settings page. Available in Tooling API version 37.0 and later.

## Supported SOAP Calls

create(), query(), retrieve() update()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description explaining what this remote site setting is used for. |
| EndpointUrl | TypestringPropertiesFilter, Group, SortDescriptionRequired. The URL of the remote site. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the remote site identifier for API access. The name can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the remote site setting is active (true) or not (false). |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionMetadata that defines the remote site setting.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix of up to 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is set only for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ProtocolMismatch | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether code within Salesforce can access the remote site regardless of whether the user's connection is over HTTP or HTTPS (true) or not (false). When true, code within Salesforce can pass data between HTTPS and HTTP sessions.WarningOnly set to true if you understand the security implications.NoteThis field corresponds to the disableProtocolSecurity field in the Metadata API type. |
| SiteName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The name of the remote site. |
