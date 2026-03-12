---
title: "Upload Files to Amazon S3"
domain: psc-api
topic: upload-files-to-amazon-s3
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:32.510Z
estimatedTokens: 487
keywords: [Upload, Files, Amazon, explains, how, custom, Lightning, Web, Component, LWC, uploads, directly, Salesforce, bucket, Prerequisites]
---

# Upload Files to Amazon S3

> This section explains how to create a custom Lightning Web Component (LWC) that uploads
  the files directly from Salesforce to an Amazon S3 bucket.

# Upload Files to Amazon S3

This section explains how to create a custom Lightning Web Component (LWC) that uploads the files directly from Salesforce to an Amazon S3 bucket.

## Prerequisites

Set up an external data source for Amazon S3 bucket in Salesforce org. See[S3 External Data Source Setup Guide](https://help.salesforce.com/s/articleView?id=ind.psc_external_file_storage_amazons3.htm&type=5&language=en_US).

## Overview

The Bring Your Own Blob (BYOB) architecture offloads the storage and processing of files from Salesforce servers to Amazon S3 servers. By using a client-side LWC approach, files are uploaded directly from the browser to Amazon S3.

## How It Works

The upload process includes three primary stages:

-   Initialize Upload: Retrieve Amazon S3 upload parameters and signed URLs from Salesforce.
-   File Upload Process: Transfer the file content directly from the browser to Amazon S3.
-   Complete Upload: Notify Salesforce to create a ContentDocument record that links to the S3 file.

-   **[Initialize the Upload](atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_initialize_upload.htm)**
    When a user selects a file, the LWC first retrieves the S3 upload parameters using the Salesforce Connect API.
-   **[Upload File Content to Amazon S3](atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_upload_file_content_to_amazon_s3.htm)**
    Use the code snippet below to create an LWC component to upload the file and add it to a Lightning page.
-   **[Complete the Upload](atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_complete_upload.htm)**
    Once all content is transferred to S3, the LWC invokes the complete upload API in Salesforce.
-   **[Error Handling and Best Practices](atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_error_handling.htm)**
    If a user cancels the upload or an error occurs during the process, the LWC should call the abort file upload API to clean up any partially uploaded data in S3.

## Related Topics

- Initialize the Upload (atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_initialize_upload.htm)
- Upload File Content to Amazon S3 (atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_upload_file_content_to_amazon_s3.htm)
- Complete the Upload (atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_complete_upload.htm)
- Error Handling and Best Practices (atlas.en-us.psc_api.meta/psc_api/psc_custom_lwc_error_handling.htm)
