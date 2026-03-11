---
title: "Retrieve S3 Connector Metadata with Salesforce CLI"
domain: data-cloud
topic: retrieve-s3-connector-metadata-with-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.556Z
keywords: [Retrieve, Connector, Metadata, Salesforce, CLI]
---

# Retrieve S3 Connector Metadata with Salesforce CLI

# Retrieve S3 Connector Metadata with Salesforce CLI

You can retrieve the metadata of an S3 Connector by using Salesforce CLI.

Complete the prerequisite of [Defining the Metadata of S3 Connector](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm "Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.")

1.  Authorize your org so Salesforce CLI can access it by logging into the org. This command redirects you to the default browser.
    
    ```
    
    ```
    
    CLI login is a one-time task. The login details are saved so that a username or alias can get used for future logins.
    
2.  Retrieve the S3 connector metadata by using this command. The file referenced in the command must be the name of the unpackage.xml created in [Defining the Metadata of S3 Connector](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm "Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.") step.
    
    ```
    
    ```
    
    ```
    
    ```
    
    The file retrieved has the name unpackage.zip. Rename the file recognizably to use in later steps.
    

Proceed to [Update the S3 access key and secret key attributes](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm "Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.").