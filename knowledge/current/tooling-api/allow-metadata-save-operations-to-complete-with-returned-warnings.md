---
title: "Allow Metadata Save Operations to Complete with Returned
  Warnings"
domain: tooling-api
topic: allow-metadata-save-operations-to-complete-with-returned-warnings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.236Z
estimatedTokens: 209
keywords: [Allow, Metadata, Save, Operations, Warnings, operation, generates, behavior, Tooling, API, fail, returning, objects, WSDLs, indicate]
---

# Allow Metadata Save Operations to Complete with Returned
  Warnings

> When a metadata save operation generates warnings, the default behavior of Tooling API
  is to fail the operation without returning the warnings. For objects in both the Tooling API and
  Metadata API WSDLs, you can indicate that you want error-free save operations to complete
  successfully, returning any warnings.

# Allow Metadata Save Operations to Complete with Returned Warnings

When a metadata save operation generates warnings, the default behavior of Tooling API is to fail the operation without returning the warnings. For objects in both the Tooling API and Metadata API WSDLs, you can indicate that you want error-free save operations to complete successfully, returning any warnings.

To indicate that you want error-free save operations to complete successfully, returning any generated warnings, specify the header ignoreSaveWarnings in your HTTP request.

There is also a SOAP header in Tooling API for saving metadata even if warnings are returned. See [MetadataWarningsHeader](atlas.en-us.api_tooling.meta/api_tooling/api_tooling_soap_header_metadatawarningsheader.htm "Allows you to save metadata even if warnings are returned.").

## Related Topics

- MetadataWarningsHeader (atlas.en-us.api_tooling.meta/api_tooling/api_tooling_soap_header_metadatawarningsheader.htm)
