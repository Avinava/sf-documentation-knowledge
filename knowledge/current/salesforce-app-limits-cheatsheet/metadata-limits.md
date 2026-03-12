---
title: "Metadata Limits"
domain: salesforce-app-limits-cheatsheet
topic: metadata-limits
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.210Z
estimatedTokens: 341
keywords: [Metadata, Limits, apply, Salesforce, Extensions, Visual, Studio, Code, Ant, Migration, Tool, API]
---

# Metadata Limits

> The following limits apply to the Salesforce Extensions for Visual Studio Code, the Ant
    Migration Tool, and the Metadata API.

# Metadata Limits

The following limits apply to the Salesforce Extensions for Visual Studio Code, the Ant Migration Tool, and the Metadata API.

| Limit | Description |
| --- | --- |
| Retrieving and deploying metadata | You can deploy or retrieve up to 10,000 files at once. The maximum size of the deployed or retrieved .zip file is 39 MB. If the files are uncompressed in an unzipped folder, the size limit is 600 MB or 629,145,600 bytes. The size limit in bytes is calculated as 600 x 1024 x 1024. Note the following:Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB, which is the limit for SOAP messages. Base-64 encoding increases the size of the payload, so your compressed payload can't exceed approximately 39 MB before encoding.You can perform a retrieve() call for a big object only if its index is defined. If a big object is created in Setup and doesn’t yet have an index defined, you can’t retrieve it.Limits can change without notice. |
| Change sets | Inbound and outbound change sets can have up to 10,000 files of metadata. |
| Retrieving metadata types with dependencies | Make up to 25 retrieve requests using the rootTypesWithDependencies parameter per day.A single retrieve request using the rootTypesWithDependencies parameter can request dependencies for up to 100 components. |
