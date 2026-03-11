---
title: "ExternalDataSource"
domain: tooling-api
topic: externaldatasource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.878Z
keywords: [ExternalDataSource, Supported, SOAP, API, Calls, REST, Methods, Fields, Custom, Configuration, Salesforce, Connect, Cross-Org, Adapter, OData, 2.0, 4.0]
---

# ExternalDataSource

# ExternalDataSource

Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CertificateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf you specify a certificate, your Salesforce org supplies it when establishing each two-way SSL connection with the external system. The certificate is used for digital signatures, which verify that requests are coming from your Salesforce org.NoteFor best performance, verify that your remote HTTPS encrypted sites have OCSP (Online Certificate Status Protocol) stapling turned on. |
| CustomConfiguration | TypetextareaPropertiesNillableDescriptionA string of configuration parameters that are specific to the external data source’s type.Custom Configuration for the Salesforce Connect Cross-Org AdapterCustom Configuration for the Salesforce Connect OData 2.0 or 4.0 AdapterCustom Configuration for the Salesforce Connect Custom Adapter |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the external data source used in the API.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record by using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Endpoint | TypetextareaPropertiesNillableDescriptionThe URL of the external system, or if that URL is defined in a named credential, the named credential URL. Corresponds to URL in the user interface.A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My_Named_Credential/some_path.You can append a query string to a named credential URL. Use a question mark (?) as the separator between the named credential URL and the query string. For example: callout:My_Named_Credential/some_path?format=json. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated type in Tooling API. The full name can include a namespace prefix. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsWritable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionLets the Lightning Platform and users in this org create, update, and delete records for external objects associated with the external data source. The external object data is stored outside the org. By default, external objects are read only. Corresponds to Writable External Objects in the user interface. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the external data source. The value for this field is the language value of the org. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionA user-friendly name for the external data source. The label is displayed in the Salesforce user interface, such as in list views.Examples include Acme Team Marketing Site, or Acme SharePoint. |
| Metadata | TypeExternalDataSourcePropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated type and related fields in Tooling API. |
| NamedCredentialId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce ID of the referenced named credential for an external data source. Required for Salesforce Connect adapters for Amazon DynamoDB, Amazon Athena, GraphQL, and OData 4.01. For connecting to other external data sources, the field must be null.This is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the external data source. An external data source can be in an extension namespace different than the object. |
| OauthRefreshToken | TypetextareaPropertiesNillableDescriptionThe OAuth refresh token. Used to obtain a new access token for an end user when a token expires. |
| OauthScope | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the scope of permissions to request for the access token. |
| OauthToken | TypetextareaPropertiesNillableDescriptionThe access token issued by the external system. |
| Password | TypetextareaPropertiesNillableDescriptionThe password to be used by your org to access the external system. Ensure that the credentials you use have adequate privileges to access the external system, perform searches, return data, and return information about the external system’s metadata. |
| PrincipalType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDetermines whether you're using one set or multiple sets of credentials to access the external system. Possible values are:AnonymousPerUserNamedUser |
| Protocol | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe authentication protocol that’s required to access the external system. Possible values are:AwsSv4BasicCustomJwtJwtExchangeNoAuthenticationOauthPassword |
| Repository | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUsed for SharePoint Online. If metadata isn’t accessible, use this field to create tables and default table fields. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionFor Salesforce Connect, specifies the adapter that connects to the external system. The valid values are:AmazonAthena—Amazon AthenaAmazonDynamoDB—Amazon DynamoDBGraphQl—GraphQLOData—OData 2.0 adapterOData4—OData 4.0 adapterOData401—OData 4.01 adapterSfdcOrg—cross-org adapterApexClassId—DataSource.Provider class that defines the custom adapter created via the Apex Connector FrameworkFor Files Connect, specifies the data source type. The valid values are:ContentHubSharepoint—SharePoint 2010 or 2013ContentHubSharepointOffice365—SharePoint OnlineContentHubSharepointOneDrive—OneDrive for BusinessContentHubGDrive—Google DriveContenHubIsotope—IsotopeIf Chatter is enabled, you can also specify SimpleURL to access data hosted on a web server that doesn’t require authentication.outgoingemail—A data source used for sending an email through a quick action.For Digital Lending Configurator, the valid value is:AFPPAttribute—The data source name for the Application Form Product Proposal Attribute virtual object.For the federated search external data source type, the valid value is:OpenSearchFor Transaction Management in Revenue Cloud, the valid values are:ASPAttribute—The data source name for the Asset State Period Attribute virtual object. Available in API version 63.0 and later.OIAttribute—The data source name for the Order Item Attribute virtual object. Available in API version 63.0 and later.QLIAttribute—The data source name for the Quote Line Item Attribute virtual object. Available in API version 63.0 and later.For SalesAgreement in Manufacturing Cloud, the valid values are:SAPAttribute—The data source name for the SalesAgreement Product Attribute virtual object. Available in API version 60.0 and later.These values are reserved for internal use:AssetAttributeClaimAttributeDSClaimItemAttributeDSCryptoTrEnvChgLogSnpCtrtGrpPlnAttrCtrtGrpPlnGrpClsAttrFAAttributeFLAttributeIAItemProdtAttrIdentityInsPolicyAttributeIPAAttributeIPCAttributeIPCvrBnftAttributeIPPAttributeSdbOvenPODataSourceWrapper |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username to be used by your org to access the external system. Ensure that the credentials you use have adequate privileges to access the external system, perform searches, return data, and return information about the external system’s metadata. |
| Version | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |

## Custom Configuration for the Salesforce Connect Cross-Org Adapter

The following sample JSON-encoded configuration string defines parameters that apply when the external data source’s type is set to SfdcOrg.

```

```

The parameters correspond to these fields in the user interface:

-   apiVersion—API Version
-   environment—Connect to
-   searchEnabled—Enable Search
-   timeout—Connection Timeout

## Custom Configuration for the Salesforce Connect OData 2.0 or 4.0 Adapter

The following JSON-encoded configuration string defines parameters that apply when the external data source’s type is set to OData or OData4.

```

```

The parameters correspond to these fields in the user interface.

-   compatibility—Special Compatibility
-   csrfTokenEnabled—CSRF Protection
-   csrfTokenName—Anti-CSRF Token Name
-   format—Format
-   inlineCountEnabled—Request Row Counts
-   noIdMapping—High Data Volume
-   pagination—Server Driven Pagination
-   requestCompression—Compress Requests
-   searchEnabled—Enable Search
-   searchFunc—Custom Query Option for Salesforce Search
-   timeout—Connection Timeout

## Custom Configuration for the Salesforce Connect Custom Adapter

The following sample JSON-encoded configuration string defines the parameter that applies when the external data source’s type is set to the ID of a DataSource.Provider class.

```

```

The noIdMapping parameter corresponds to the High Data Volume field in the user interface.