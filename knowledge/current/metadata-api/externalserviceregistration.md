---
title: "ExternalServiceRegistration"
domain: metadata-api
topic: externalserviceregistration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:39.283Z
estimatedTokens: 2054
keywords: [ExternalServiceRegistration, external, service, configuration, org, File, Suffix, Directory, Location, Version, ExternalServiceOperation, Declarative, Metadata, Sample, Definition]
---

# ExternalServiceRegistration

> Represents the external service
      configuration for an org.

# ExternalServiceRegistration

Represents the external service configuration for an org.

## File Suffix and Directory Location

ExternalServiceRegistration components have the suffix .externalServiceRegistration and are stored in the externalServiceRegistrations folder.

## Version

ExternalServiceRegistration components are available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| catalogedApiVersion | string | A version of an API synced from an external source and managed for consumption in Salesforce by using API Catalog. |
| description | string | The external service description defined when the service is created. |
| label | string | Required. The service name as it appears on the External Services wizard. |
| namedCredential | string | The reference by name to be used for the service. |
| namedCredentialReferenceId | reference | The reference by ID to be used for the named credential. When used, supersedes namedCredential. Available in API version 57.0 and later. |
| operations | ExternalServiceOperation[] | Items defined for this operation. |
| registrationProvider | string | A reference to the registration provider.If the registrationProviderType is ExternalConnector, this field contains the external connector name.If the registrationProviderType is Heroku, this field contains the HerokuAppLink ID.For any other registrationProviderType value, this field is blank and reserved for future use. |
| registrationProviderAsset | string | A polymorphic foreign key field that contains the name of the asset related to the external service registration.For an external service registration created for a named query, this field contains the named query API name.For an external service registration created for an Apex class that has methods exposed as REST resources or methods that are Aura-enabled, this field contains the Apex class name.Available in API version 66.0 and later. |
| registrationProviderType | ExternalServiceRegistrationProviderType (enumeration of type string) | Indicates the source of the API specification registered with the External Services wizard. Valid values include:AgentActionOutputs—Reserved for internal use.AgentToAgent—The API specification represents the external service schemas that enable communication between AI agents. Available in API version 66.0 and later.Anypoint—The API specification is managed in the MuleSoft Anypoint Platform. Available in API version 63.0 and later.ApexRest—The API specification was created from an Apex REST class. Available in API version 63.0 and later.AuraEnabled—The API specification was created from an Apex class that has AuraEnabled methods. Available in API version 65.0 and later.ContextDef—The API specification used to create dynamic Apex classes for the related context definition structure. Available in API version 66.0 and later.Custom—The API specification was manually configured.CustomExternalConnector—The API specification represents a custom partner-created version of an external connection. Available in API version 66.0 and later.DocumentProcessing—Reserved for internal use.ExternalConnector—The API specification represents an external connection.Heroku—The API specification represents a Heroku app.MuleSoft—The API specification was selected from MuleSoft. Use Anypoint for MuleSoft for Agentforce: API Catalog MuleSoft sources.NamedQuery—The API specification represents a named query REST endpoint. Available in API version 64.0 and later.SchemaInferred—The API specification was provided during the HTTP Callout configuration process. Available in API version 57.0 and later.Standard—The API specification was defined when an external service was created. |
| schema | string | The content of the OpenAPI 2.0.x or OpenAPI 3.0.x schema in JSON or YAML format. Nillable. |
| schemaAbsoluteUrl | string | The full, absolute URL to the schema. Populated when a user selects Absolute URL during registration. |
| schemaType | string | The schema format. OpenAPI for Open API 2.0.x or Open API 3.0.x. If not specified, schema type is derived based on the schema content. Nillable. |
| schemaUploadFileExtension | string | The file’s extension. Populated when a user selects Upload from local during registration. |
| schemaUploadFileName | string | The file’s name without the file extension. Populated when a user selects Upload from local during registration. |
| schemaUrl | string | The path must begin with "/" and be relative to the named credential endpoint. |
| serviceBinding | string | Used to map non-supported media types for this external service registration to supported media types. Nillable. Available in API version 53.0 and later. |
| serviceName | string | The name of the cataloged API service that this external service registration belongs to. Available in API version 63.0 and later. This field was removed in API version 65.0. |
| status | string | Required. Indicates service registration status. Valid values include:complete—The API spec is valid and the registration is ready to use.incomplete—The service registration hasn’t completed. |
| systemVersion | int | The internal version of External Services that is used to register the API specification. Available in API version 55.0 and later. The system versions are independent of API versions.1—Retired legacy External Services.2—External Services with limitations on object and operation name length.3—External Services automatically derives developer names fitting within 80 characters.4—Removed the default character set when making a callout to an external service. To specify a character set, include it in the OpenAPI specification, for example: contentType: application/xml; charset=utf-8.5—Introduced asynchronous callouts with callbacks from Apex.6—Added support for OpenAPI Specification (OAS) discriminator mapping.7—Added support for property names that begin with a number.For input parameters on invocable actions, encodes the keyword connection as reconnection.8—Current version.This field is read-only. You can’t upgrade an external service to a newer system version. To take advantage of functionality in a newer system version, you must create an external service using the same OpenAPI spec and then replace any references to the old external service. See Register an External Service in Salesforce Help. |

## ExternalServiceOperation

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the operation is active (true), or inactive (false). |
| name | string | Required. The operation’s name. |

## Declarative Metadata Sample Definition

The following is an example of an ExternalServiceRegistration component that references an external credit service.

```

```

## serviceBinding

The following JSON-encoded string defines the mapping of a non-supported media type to a supported media type for external service request and response body serialization.

```

```

The non-supported media type application/x-acme-json is mapped to the supported media type application/json for this External Services registration. The External Services runtime considers the non-supported media type for request and response header processing. It serializes the request and response content by the mapped supported media type.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Salesforce Help*: Media Type Mapping in External Service Registrations](https://help.salesforce.com/s/articleView?id=platform.external_services_mime_type_mapping.htm&type=5&language=en_US "Salesforce Help: Media Type Mapping in External
    Service Registrations - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalServiceRegistration xmlns="http://soap.sforce.com/2006/04/metadata">
  <label>BankService</label>
  <namedCredential>Bank</namedCredential>
  <schema>{
  "swagger": "2.0",
  "basePath": "/",
  "info": {
    "version": "1.0",
    "title": "External Service for demo bank",
    "description": "### External Service for demo bank",
    "x-vcap-service-name": "DemoBankRestServices"
  },
  ...
  "paths": {
  "/accounts/{accountName}": {
      ...
    }
  },
  "definitions": {
    "accountDetails": {
      ...
    },
    "errorModel": {
      ...
    }
  }
}</schema>
  <schemaType>OpenApi</schemaType>
  <schemaUrl>/accounts/schema</schemaUrl>
  <status>Complete</status>
</ExternalServiceRegistration>
```

```
{"compatibleMediaTypes":{
    "application/x-acme-json":"application/json"
}}
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
