---
title: "DescribeMetadataResult"
domain: metadata-api
topic: describemetadataresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.898Z
keywords: [DescribeMetadataResult, DescribeMetadataObject]
---

# DescribeMetadataResult

# DescribeMetadataResult

Contains information about the organization that is useful for developers working with declarative metadata.

The [describeMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_describe.htm "This call retrieves the metadata that describes your organization. This information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types.") call returns a DescribeMetadataResult object.

Each DescribeMetadataResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| metadataObjects | DescribeMetadataObject[] | One or more metadata components and their attributes. |
| organizationNamespace | string | The namespace of the organization. Specify only for Developer Edition organizations that can contain a managed package. The managed package has a namespace specified when it is created. |
| partialSaveAllowed | boolean | Indicates whether rollbackOnError is allowed (true) or not (false).This value is always :false in production organizations.the opposite of testRequired. |
| testRequired | boolean | Indicates whether tests are required (true) or not (false).This value is always the opposite of partialSaveAllowed. |

## DescribeMetadataObject

This object is returned as part of the DescribeMetadataResult. Each DescribeMetadataObject has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| childXmlNames | string[] | List of child sub-components for this component. |
| directoryName | string | The name of the directory in the .zip file that contains this component. |
| inFolder | boolean | Indicates whether the component is in a folder (true) or not (false). For example, documents, email templates and reports are stored in folders. |
| metaFile | boolean | Indicates whether the component requires an accompanying metadata file. For example, documents, classes, and s-controls are components that require an additional metadata file. |
| suffix | string | The file suffix for this component. |
| xmlName | string | The name of the root element in the metadata file for this component. This name also appears in the Packages > types > name field in the manifest file package.xml. |