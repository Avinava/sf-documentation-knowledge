---
title: "RetrieveResult"
domain: metadata-api
topic: retrieveresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.519Z
estimatedTokens: 1124
keywords: [RetrieveResult, retrieve, call, array, objects., FileProperties, RetrieveMessage]
---

# RetrieveResult

> The retrieve() call returns an array of
  RetrieveResult objects.

# RetrieveResult

The retrieve() call returns an array of RetrieveResult objects.

A RetrieveResult object has these fields.

| Name | Type | Description |
| --- | --- | --- |
| done | boolean | Required. Indicates whether the retrieve() call is completed (true) or not (false). This field is available in API version 31.0 and later. |
| errorMessage | string | If an error occurs during the retrieve() call, this field contains a descriptive message about this error. This field is available in API version 31.0 and later. |
| errorStatusCode | StatusCode | If an error occurs during the retrieve() call, this field contains the status code for this error. This field is available in API version 31.0 and later.For a description of each StatusCode value, see StatusCode in the SOAP API Developer Guide. |
| fileProperties | FileProperties[] | Contains information about the properties of each component in the .zip file, and the manifest file package.xml. One object per component is returned. |
| id | ID | ID of the component being retrieved. |
| messages | RetrieveMessage[] | Contains information about the success or failure of the retrieve() call. |
| status | RetrieveStatus (enumeration of type string) | The status of the retrieve() call. Valid values are:PendingInProgressSucceededFailedThis field is available in API version 31.0 and later. |
| success | boolean | Indicates whether the retrieve() call was successful (true) or not (false). This field is available in API version 31.0 and later. |
| zipFile | base64Binary | The zip file returned by the retrieve request. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. |

## FileProperties

This component contains information about the properties of each component in the .zip file, and the manifest file package.xml. One object per component is returned. This component doesn’t contain information about any associated metadata files in the .zip file, only the component files and manifest file. FileProperties contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| createdById | string | Required. ID of the user who created the file. |
| createdByName | string | Required. Name of the user who created the file. |
| createdDate | dateTime | Required. Date and time when the file was created. |
| fileName | string | Required. Name of the file. |
| fullName | string | Required. The file developer name used as a unique identifier for API access. The value is based on the fileName but the characters allowed are more restrictive. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| id | string | Required. ID of the file. |
| lastModifiedById | string | Required. ID of the user who last modified the file. |
| lastModifiedByName | string | Required. Name of the user who last modified the file. |
| lastModifiedDate | dateTime | Required. Date and time that the file was last modified. |
| manageableState | ManageableState (enumeration of type string) | Indicates the manageable state of the specified component if it’s contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| namespacePrefix | string | If any, the namespace prefix of the component. |
| type | string | Required. The metadata type, such as CustomObject, CustomField, or ApexClass. |

## RetrieveMessage

[RetrieveResult](#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects.") returns this object, which contains information about the success or failure of the [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#meta_retrieve "The retrieve() call retrieves XML file representations of components in an organization.") call. One object per problem is returned:

| Name | Type | Description |
| --- | --- | --- |
| fileName | string | The name of the file in the retrieved .zip file where a problem occurred. |
| problem | string | A description of the problem that occurred. |

#### See Also

-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")

## Related Topics

- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
