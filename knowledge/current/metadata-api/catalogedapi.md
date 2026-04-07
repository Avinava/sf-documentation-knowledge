---
title: "CatalogedApi"
domain: metadata-api
topic: catalogedapi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:23.372Z
estimatedTokens: 713
keywords: [CatalogedApi, CatalogedApiInstance, API, brought, Catalog, Salesforce, external, source, Parent, File, Suffix, Directory, Location, Declarative, Metadata, Sample, Definition]
---

> Represents an API brought into API Catalog for Salesforce from an
			external source.

# CatalogedApi

Represents an API brought into API Catalog for Salesforce from an external source.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CatalogedApi components have the suffix .catalogedApi and are stored in the catalogedApis folder.

## Version

CatalogedApi components are available in API version 65.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description defined when the API is cataloged. |
| descriptor | string | The content of the API schema in JSON format. |
| externalSourceIdentifier | string | The ID of the API in the external source that it's imported from. |
| instances | CatalogedApiInstance[] | Reference to the cataloged API that this instance is specific to. |
| label | string | Required. The API name as it appears in API Catalog. |
| providerType | ExternalServiceRegistrationProviderType (enumeration of type string) | Required. Indicates the source of the API specification registered with API Catalog.API Catalog supports the value Anypoint for deployment and supports other values for enumeration. See information about the values in the registrationProviderType field. |
| type | APIType (enumeration of type string) | Required. Specifies the API type. If not specified, the API type is derived based on the descriptor content. Nillable.Values are:GraphQLgRPCREST |

## CatalogedApiInstance

Represents a MuleSoft API instance brought into API Catalog for Salesforce from Anypoint Platform.

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessStatus | APIInstanceAccessStatus (enumeration of type string) | Required. The access status for the API instance.Values are:ApprovedDeletedNoStatusNotAccessiblePendingRejectedRevoked |
| apiInstanceDescriptor | string | The content of the API schema in JSON format. |
| approvalType | APIInstanceApprovalType (enumeration of type string) | Required. The approval type for access in Anypoint Platform.Values are:AutoApprovalManualApprovalNoApproval |
| endpointType | APIInstanceEndpointType (enumeration of type string) | The endpoint type to invoke the instance. Available in API version 66.0 and later.Values are:CalloutDiscovery |
| label | string | Required. The instance name as it appears in API Catalog. |
| serviceRegistration | string | Required. The service registration in external services related to this API instance. |
| uri | string | Required. The uniform resource identifier (URI) for the instance. |

## Declarative Metadata Sample Definition

This XML is an example of a CatalogedApi component.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CatalogedApi xmlns="http://soap.sforce.com/2006/04/metadata">
    <externalSourceIdentifier>urn:ms:03ff2c74-d0ea-4eba-a536-36dfd2d0fdbb:api-project::petstore-engineering</externalSourceIdentifier>
    <instances>
        <accessStatus>NoStatus</accessStatus>
        <apiInstanceDescriptor>{&quot;@type&quot;:&quot;anypointAPIInstanceDescriptor&quot;,&quot;environmentType&quot;:&quot;SANDBOX&quot;,&quot;environmentName&quot;:&quot;Sandbox&quot;,&quot;environmentId&quot;:&quot;79305d19-1d89-413f-88ec-d7a8dbd1e29d&quot;,&quot;instanceId&quot;:&quot;4051358&quot;,&quot;authenticationMethod&quot;:&quot;NO_AUTH&quot;,&quot;componentType&quot;:&quot;apiInstance&quot;,&quot;instanceOrigin&quot;:&quot;MANUAL&quot;}</apiInstanceDescriptor>
        <approvalType>NoApproval</approvalType>
        <label>petstore-engineering</label>
        <serviceRegistration>PetstoreEngineeringv109C60C7C</serviceRegistration>
        <uri>https://google.com</uri>
    </instances>
    <label>petstore-engineering</label>
    <providerType>Anypoint</providerType>
    <type>REST</type>
</CatalogedApi>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
