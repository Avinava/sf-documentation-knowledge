---
title: "Deploy S3 Connector Metadata with Salesforce CLI"
domain: data-cloud
topic: deploy-s3-connector-metadata-with-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.671Z
estimatedTokens: 348
keywords: [Deploy, Connector, Metadata, Salesforce, CLI, deploy, metadata, package.]
---

# Deploy S3 Connector Metadata with Salesforce CLI

> Use Salesforce CLI to deploy the metadata package.

# Deploy S3 Connector Metadata with Salesforce CLI

Use Salesforce CLI to deploy the metadata package.

Complete the prerequisite of [Creating the S3 Connectors Package for Deployment](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm "Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.")

1.  Use this command to deploy the S3 connector package.

    ![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

    #### Note

    When deploying to a production instance of Salesforce the testing level must be declared by adding [\--test-level](https://developer.salesforce.com/docs/atlas.en-us.252.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified). In most cases, the test level is RunLocalTests. This option runs the fewest tests.

    ```

    ```

    ```

    ```


Proceed to [Verify the Metadata Deployment](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm "Use the Metadata API to rotate the S3 credentials and enable access to AWS. To update the S3 credentials you must retrieve the metadata of S3 connectors, modify the S3 credentials, and deploy the metadata.").

## Code Examples

```
sf project deploy start --verbose --single-package --target-org <Username from Login> --wait 1 --metadata-dir s3Connectors.zip
```

```
Deploying <version specified in manifest> metadata to <org> using the v59.0 SOAP API.
Deploy ID: 0Af8D00000r5EhGSAU
Status: Succeeded | ████████████████████████████████████████ | 3/3 Components (Errors:0) | 0/0 Tests (Errors:0)

Deployed Source
=================================================================================================================================
| State    Name                                Type            Path 
| ───────  ─────────────────────────────────   ──────────────  ───────────────────────────────────────────────────────────────────   
|          package.xml 
| Created  Contact_Contact_Point_Addr_DTX_01   DataConnectorS3 s3DataConnectors/Contact_Contact_Point_Addr_DTX_01.s3DataConnector
| Created  Contact_Contact_Point_Email_DTX_01  DataConnectorS3 s3DataConnectors/Contact_Contact_Point_Email_DTX_01.s3DataConnector
| Created  Contact_Contact_Point_Phone_DTX_01  DataConnectorS3 s3DataConnectors/Contact_Contact_Point_Phone_DTX_01.s3DataConnector
```

## Related Topics

- Creating the S3 Connectors
    Package for Deployment (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm)
- Verify the Metadata
     Deployment (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_rotate_s3_credentials.htm)
