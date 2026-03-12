---
title: "ExternalDataSource"
domain: knowledge-dev
topic: externaldatasource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.611Z
estimatedTokens: 3129
keywords: [ExternalDataSource, metadata, associated, external, data, source, sources, manage, connection, integration, content, stored, outside, Salesforce, org]
---

# ExternalDataSource

> Represents the metadata associated with an external
      data source. Create external data sources to manage connection details for integration with
      data and content that are stored outside your Salesforce org.

# ExternalDataSource

Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme are migrated to the new framework.

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExternalDataSource components are stored in the dataSources directory of the corresponding package directory. ExternalDataSource components have the suffix .dataSource, and the prefix is the name of the external data source.

## Version

ExternalDataSource components are available in API version 28.0 and later.

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users can access this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| authProvider | string | The authentication provider represented by the AuthProvider component. |
| certificate | string | If you specify a certificate, your Salesforce org supplies it when establishing each two-way SSL connection with the external system. The certificate is used for digital signatures, which verify that requests are coming from your Salesforce org.TipFor best performance, verify that your remote HTTPS encrypted sites have OCSP (Online Certificate Status Protocol) stapling turned on. |
| customConfiguration | string | A string of configuration parameters that are specific to the external data source’s type.customConfiguration for Salesforce Connect—Cross-Org AdaptercustomConfiguration for Salesforce Connect—OData 2.0 or 4.0 AdaptercustomConfiguration for Salesforce Connect—Custom Adapter |
| customHttpHeaders | CustomHttpHeaders[] | Represents custom HTTP headers used with OData 2.0 or OData 4.0 connectors. Available in API version 43.0 or later. |
| endpoint | string | The URL of the external system, or if that URL is defined in a named credential, the named credential URL. Corresponds to the URL in the user interface.A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My_Named_Credential/some_path.You can append a query string to a named credential URL. Use a question mark (?) as the separator between the named credential URL and the query string. For example: callout:My_Named_Credential/some_path?format=json. |
| externalDataSrcDescriptors | ExternalDataSrcDescriptors[] | Represents schema descriptors for an external data source used with the Salesforce Connect adapter for Amazon DynamoDB (available in API version 55.0 or later) or Amazon Athena (available in API version 56.0 or later). |
| isWritable | boolean | Allows the Lightning Platform and users in this org to create, update, and delete records for external objects associated with the external data source. The external object data is stored outside the org. By default, external objects are read-only. Corresponds to Writable External Objects in the user interface.Available in API version 35.0 and later. However, with the cross-org adapter for Salesforce Connect, you can set this field to true only in API version 39.0 and later. |
| label | string | A name for the external data source. The label is displayed in the Salesforce user interface, such as in list views.Examples include Acme Team Marketing Site or Acme SharePoint. |
| namedCredential | string | Represents the definition of the referenced named credential for an external data source of the type Amazon DynamoDB or Amazon Athena. |
| oauthRefreshToken | string | The OAuth refresh token. Used to obtain a new access token for an end user when a token expires. |
| oauthScope | string | Specifies the scope of permissions to request for the access token. Corresponds to the Scope in the user interface. |
| oauthToken | string | The access token issued by the external system. |
| password | string | The password your org uses to access the external system. Make sure that the credentials you use have adequate privileges to access the external system, perform searches, return data, and return information about the external system’s metadata. |
| principalType | External​PrincipalType​ (enumeration of type string) | Determines whether you're using one set or multiple sets of credentials to access the external system. Corresponds to Identity Type in the user interface. The valid values are:AnonymousPerUserNamedUser |
| protocol | Authentication​Protocol​ (enumeration of type string) | The authentication protocol that’s required to access the external system. The valid values are:NoAuthenticationOauthPasswordFor cloud-based Files Connect external systems, select Oauth 2.0. For on-premises systems, select Password Authentication.For Simple URL data sources, select No Authentication. |
| repository | string | Used for SharePoint Online. If metadata isn't accessible, use this field to create tables and default table fields. |
| type | ExternalDataSourceType (enumeration of type string) | Required. For Salesforce Connect, specifies the adapter that connects to the external system. The valid values are:AmazonAthena—Amazon AthenaAmazonDynamoDB—Amazon DynamoDBOData—OData 2.0 adapterOData4—OData 4.0 adapterSfdcOrg—cross-org adapterApexClassId—DataSource.Provider class that defines the custom adapter created via the Apex Connector FrameworkFor Files Connect, specifies the data source type. The valid values are:ContentHubSharepoint—SharePoint 2010 or 2013ContentHubSharepointOffice365—SharePoint OnlineContentHubSharepointOneDrive—OneDrive for BusinessContentHubGDrive—Google DriveContenHubIsotope—IsotopeIf Chatter is enabled, you can also specify SimpleURL to access data hosted on a web server that doesn’t require authentication.outgoingemail—A data source used for sending an email through a quick action.For Digital Lending Configurator, the valid value is:AFPPAttribute—The data source name for the Application Form Product Proposal Attribute virtual object.For the federated search external data source type, the valid value is:OpenSearchFor Transaction Management in Revenue Cloud, the valid values are:ASPAttribute—The data source name for the Asset State Period Attribute virtual object. Available in API version 63.0 and later.OIAttribute—The data source name for the Order Item Attribute virtual object. Available in API version 63.0 and later.QLIAttribute—The data source name for the Quote Line Item Attribute virtual object. Available in API version 63.0 and later.For SalesAgreement in Manufacturing Cloud, the valid values are:SAPAttribute—The data source name for the SalesAgreement Product Attribute virtual object. Available in API version 60.0 and later.These values are reserved for internal use:AssetAttributeClaimAttributeDSClaimItemAttributeDSCryptoTrEnvChgLogSnpCtrtGrpPlnAttrCtrtGrpPlnGrpClsAttrFAAttributeFLAttributeIAItemProdtAttrIdentityInsPolicyAttributeIPAAttributeIPCAttributeIPCvrBnftAttributeIPPAttributeSdbOvenPODataSourceWrapper |
| username | string | The user name that your org uses to access the external system. Make sure that the credentials you use have adequate privileges to access the external system, perform searches, return data, and return information about the external system’s metadata. |
| version | string | Reserved for future use. |

## CustomHttpHeaders

Represents a custom HTTP header used with OData 2.0 or OData 4.0 connectors. Available in API version 43.0 or later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A text description of the header field’s purpose. |
| headerFieldName | string | Required. Name of the header field. The name must contain at least one alphanumeric character or underscore. It can also include these characters: ! # $ % & ' * + - . ^ _ ` \| ~. |
| headerFieldValue | string | Required. A formula that resolves to the value for the header. The values in the formula must evaluate to a string. If the formula resolves to null and an empty string, the header isn’t sent. |
| isActive | boolean | Indicates whether the custom HTTP header is available to use (true) or unavailable (false). |

## customConfiguration for Salesforce Connect—Cross-Org Adapter

This sample JSON-encoded configuration string defines parameters that apply when the external data source’s type is set to SfdcOrg.

```

```

The parameters correspond to these fields in the user interface:

-   apiVersion—API Version
-   environment—Connect to
-   searchEnabled—Enable Search
-   timeout—Connection Timeout

## customConfiguration for Salesforce Connect—OData 2.0 or 4.0 Adapter

This JSON-encoded configuration string defines parameters that apply when the external data source’s type is set to OData or OData4.

```

```

The parameters correspond to these fields in the user interface.

-   compatibility—Special Compatibility
-   csrfTokenEnabled—Cross-Site Request Forgery (CSRF) Protection
-   csrfTokenName—Anti-CSRF Token Name
-   format—Format
-   inlineCountEnabled—Request Row Counts
-   noIdMapping—High Data Volume
-   pagination—Server Driven Pagination
-   requestCompression—Compress Requests
-   searchEnabled—Enable Search
-   searchFunc—Custom Query Option for Salesforce Search
-   timeout—Connection Timeout

Declarative Metadata Sample Definition: OData 2.0 or 4.0

The following is the definition of an external data source for Salesforce Connect—OData 2.0 or 4.0 adapter.

```

```

## customConfiguration for Salesforce Connect—Custom Adapter

This sample JSON-encoded configuration string defines the parameter that applies when the external data source’s type is set to the ID of a DataSource.Provider class.

```

```

The noIdMapping parameter corresponds to the High Data Volume field in the user interface.

## ExternalDataSrcDescriptors for Salesforce Connect Adapter for Amazon DynamoDB and for Amazon Athena

Represents schema descriptors for an external data source used with the Salesforce Connect adapter. The schema descriptors are for Amazon DynamoDB (available in API version 55.0 or later) or Amazon Athena (available in API version 56.0 or later).

| Field Name | Field Type | Description |
| --- | --- | --- |
| customObject | string | If set, the external object associated with the descriptor. |
| descriptor | string | Required. The descriptor document that contains the metadata information. |
| descriptorVersion | string | If the external system supports schema versioning for the data source, the optional descriptor document version tracks the external system's schema version. Several descriptors with different document versions can be active. |
| developerName | string | Required. The unique name of the child-level setup entity. |
| externalDataSource | string | Required. The name of the external data source associated with the descriptor. |
| subtype | ExternalDataSrcDescSubtype (enumeration of type string) | Required. The subtype of the descriptor.Values are:SchemaTableMetadata— Used to cache information about the external system.SchemaTableQualifiers— Used to customize the data retrieval query to the external system. |
| systemVersion | int | Required. The version that defines the descriptor format and provides compatibility with descriptor formats between Salesforce releases. |
| type | ExternalDataSrcDescType (enumeration of type string) | Required. The type of the descriptor.Valid value:Schema |

Declarative Metadata Sample Definition: Amazon DynamoDB

The following is an example of an external data source for the Salesforce Connect adapter for Amazon DynamoDB that uses ExternalDataSrcDescriptor component.

```

```

Declarative Metadata Sample Definition: Amazon Athena

The following is an example of an external data source for the Salesforce Connect adapter for Amazon Athena that uses ExternalDataSrcDescriptor component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
{"apiVersion":"32.0","environment":"CUSTOM",
"searchEnabled":"true","timeout":"120"}
```

```
{"inlineCountEnabled":"true","csrfTokenName":"X-CSRF-Token",
"requestCompression":"false","pagination":"CLIENT",
"noIdMapping":"false","format":"ATOM",
"searchFunc":"","compatibility":"DEFAULT",
"csrfTokenEnabled":"true","timeout":"120",
"searchEnabled":"true"}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalDataSource xmlns="http://soap.sforce.com/2006/04/metadata">
    <authProvider>FacebookAuth</authProvider>
    <customConfiguration>{"compatibility":"DEFAULT",
    "noIdMapping":"false","inlineCountEnabled":"true",
    "searchEnabled":"true","format":"ATOM",
    "requestCompression":"false","pagination":"SERVER",
    "timeout":"120"}</customConfiguration>
    <customHttpHeaders>
        <headerFieldName>X-User</headerFieldName>
        <headerFieldValue>$User.Username</headerFieldValue>
    </customHttpHeaders>
    <endpoint>http://myappname.herokuapp.com/DataHub.svc</endpoint>   
    <label>DataHub</label>
    <principalType>NamedUser</principalType>
    <protocol>Oauth</protocol>
    <type>OData</type>
</ExternalDataSource>
```

```
{"noIdMapping":"false"}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalDataSource xmlns="http://soap.sforce.com/2006/04/metadata">
    <customConfiguration>{"timeout":"120"}</customConfiguration>
    <externalDataSrcDescriptors>
        <fullName>MyQualifierName</fullName>
        <customObject>MyExternalObject__x</customObject>
        <descriptor>
        {
          "tableName": "MyDynamoDBTable",
          "columns": {
            "MyField": {"presence": "exists"}
          }
        }
        </descriptor>
        <developerName>MyQualifierName</developerName>
        <externalDataSource>MyDataSource</externalDataSource>
        <subtype>SchemaTableQualifiers</subtype>
        <systemVersion>0</systemVersion>
        <type>Schema</type>
    </externalDataSrcDescriptors>
    <isWritable>true</isWritable>
    <label>MyDataSource</label>
    <namedCredential>MyNamedCredential</namedCredential>
    <principalType>Anonymous</principalType>
    <protocol>NoAuthentication</protocol>
    <type>AmazonDynamoDb</type>
</ExternalDataSource>
```
