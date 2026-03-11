---
title: "Deploy Metadata with REST API in Salesforce CLI"
domain: metadata-api
topic: deploy-metadata-with-rest-api-in-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.421Z
keywords: [Deploy, Metadata, REST, API, Salesforce, CLI, Note]
---

# Deploy Metadata with REST API in Salesforce CLI

# Deploy Metadata with REST API in Salesforce CLI

By default, the Salesforce CLI project deploy start command uses the Metadata SOAP API to deploy source to your org. You can use the Metadata REST API instead by setting a CLI configuration value or environment variable. Compared with SOAP API, REST API offers faster deployment.

  
| User Permissions Needed |
| --- |
| To work with Metadata API from Salesforce CLI: | Modify Metadata Through Metadata API FunctionsOrModify All Data |

Use the org-metadata-rest-deploy Salesforce CLI runtime configuration variable or SF\_ORG\_METADATA\_REST\_DEPLOY environment variable to set REST API as the default. For more information, see the Salesforce DX Setup Guide.

This example uses the configuration value to set the default for your current project:

```

```

To set the default globally for all your projects, use the \--global flag:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Only commands that deploy source, such as **project deploy start**, support REST API. Commands that retrieve source, such as **project retrieve start**, always use SOAP API.

Here are the deploy limits. Limits can change without notice.

| Feature | Limit |
| --- | --- |
| Maximum compressed .zip folder size1(SOAP API) | Approximately 39 MB |
| Maximum uncompressed folder size2(SOAP API) | Approximately 600 MB |
| Maximum number of files in AppExchange packages (REST and SOAP API) | 35,000 |
| Maximum number of files in packages (REST and SOAP API) | 10,000 |

1 Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB. Base-64 encoding increases the size of the payload by approximately 22%, so your compressed payload can't exceed approximately 39 MB before encoding.

2 When deploying an unzipped project, all files in the project are compressed first. The maximum size of uncompressed components in an uncompressed project is 600 MB or less, depending on the files’ compression ratio. If the files have a high compression ratio, you can migrate a total of approximately 600 MB because the compressed size would be under 39 MB. However, if the components can't be compressed much, like binary static resources, you can migrate less than 600 MB.