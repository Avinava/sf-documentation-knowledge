---
title: "Development Platforms"
domain: metadata-api
topic: development-platforms
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.785Z
estimatedTokens: 364
keywords: [Development, Platforms, Metadata, API, supports, both, file-based, CRUD-based, development., File-Based, CRUD-Based]
---

# Development Platforms

> Metadata API supports both file-based and CRUD-based development.

# Development Platforms

Metadata API supports both file-based and CRUD-based development.

## File-Based Development

The declarative or file-based asynchronous Metadata API [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") operations deploy or retrieve a .zip file that holds components in a set of folders, and a manifest file named package.xml. For more information, see [Deploying and Retrieving Metadata](atlas.en-us.api_meta.meta/api_meta/file_based.htm). The easiest way to access the file-based functionality is to use the Salesforce Extensions for Visual Studio Code or Salesforce CLI.

## CRUD-Based Development

The [CRUD Metadata API calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.") act upon the metadata components in a manner similar to the way synchronous API calls in the enterprise WSDL act upon objects. For more information about the enterprise WSDL, see the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)").

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- Deploying and Retrieving
          Metadata (atlas.en-us.api_meta.meta/api_meta/file_based.htm)
- CRUD Metadata API calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
