---
title: "RetrieveRequest"
domain: metadata-api
topic: retrieverequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.509Z
estimatedTokens: 510
keywords: [RetrieveRequest, specified, retrieve, call, encapsulates, options, determining, which, packages, files, retrieved.]
---

# RetrieveRequest

> The RetrieveRequest parameter specified on a 
  retrieve() call encapsulates options for determining which packages or files are 
  retrieved.

# RetrieveRequest

The RetrieveRequest parameter specified on a retrieve() call encapsulates options for determining which packages or files are retrieved.

The RetrieveRequest object consists of the following properties:

| Name | Type | Description |
| --- | --- | --- |
| apiVersion | double | Required. The API version for the retrieve request. The API version determines the fields retrieved for each metadata type. For example, an icon field was added to the CustomTab for API version 14.0. If you retrieve components for version 13.0 or earlier, the components don't include the icon field.In API version 31.0 and later, the API version that’s specified in package.xml is used for the retrieve() call and overrides the version in the apiVersion field. If the version isn't specified in package.xml, the version in this field is used. |
| packageNames | string[] | A list of package names to be retrieved. If you're retrieving only unpackaged components, don't specify a name here. You can retrieve packaged and unpackaged components in the same retrieve.This field is for reference only, don't use it to retrieve packaged metadata for development. |
| rootTypesWithDependencies | string[] | A list of component types to retrieve dependencies for. Currently, the only allowed value for this parameter is Bot.Use this parameter if any requested metadata components are of type Bot.Make up to 25 retrieve requests using this parameter per day. A single retrieve request using this parameter can request dependencies for up to 100 components.This field is available in API version 64.0 and later. |
| singlePackage | boolean | Specifies whether only a single package is being retrieved (true) or not (false). If false, then more than one package is being retrieved. |
| specificFiles | string[] | A list of file names to be retrieved. If a value is specified for this property, packageNames must be set to null and singlePackage must be set to true. |
| unpackaged | Package | A list of components to retrieve that aren't in a package. |

## Related Topics

- CustomTab (atlas.en-us.api_meta.meta/api_meta/meta_tab.htm)
- Package (atlas.en-us.api_meta.meta/api_meta/meta_package.htm)
