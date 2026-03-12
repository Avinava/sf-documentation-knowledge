---
title: "Deploy the Package Metadata to the Packaging Org"
domain: pkg1-dev
topic: deploy-the-package-metadata-to-the-packaging-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.692Z
estimatedTokens: 672
keywords: [Deploy, Package, Metadata, Packaging, Org, convert, source]
---

# Deploy the Package Metadata to the Packaging Org

> Before you deploy the package metadata into your packaging org, you convert from source
        format to metadata format.

# Deploy the Package Metadata to the Packaging Org

Before you deploy the package metadata into your packaging org, you convert from source format to metadata format.

It’s likely that you have some files that you don’t want to convert to metadata format. Create a .forceignore file to indicate which files to ignore.

1.  Convert from source format to the metadata format.

    sf project convert source --output-dir mdapi\_output\_dir --package-name managed\_pkg\_name

    Create the output directory in the root of your project, not in the package directory. If the output directory doesn’t exist, it’s created. Be sure to include the \--package-name so that the converted metadata is added to the managed package in your packaging org.

2.  Review the contents of the output directory.

    ls -lR mdapi\_output\_dir

3.  Authenticate the packaging org, if needed. This example specifies the org with an alias called MyPackagingOrgAlias, which helps you refer to the org more easily in subsequent commands.

    sf org login web --alias MyPackagingOrgAlias

    You can also authenticate with an OAuth client ID: sf org login web --client-id oauth\_client\_id

4.  Deploy the package metadata back to the packaging org.

    sf project deploy start --metadata-dir mdapi\_output\_dir --target-org me@example.com

    The \--target-org is the username. Instead of the username, you can use \-u MyPackagingOrgAlias to refer to your previously defined org alias. You can use other options, like \--wait to specify the number of minutes to wait. Use the \--metadata-dir parameter to provide the path to a zip file that contains your metadata. Don’t run tests at the same time as you deploy the metadata. You can run tests during the package upload process.

    A message displays the job ID for the deployment.

5.  Check the status of the deployment.

    When you run sf project deploy report, the job ID and target username are stored, so you don’t have to specify these required parameters to check the status. These stored values are overwritten when you run sf project deploy start again.

    If you want to check the status of a different deploy operation, specify the job ID on the command line, which overrides the stored job ID.


#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

-   [How to Exclude Source When Syncing or Converting](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "How to Exclude Source When Syncing or Converting - HTML (New Window)")
