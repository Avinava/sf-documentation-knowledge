---
title: "Work with Data"
domain: sfdx-dev
topic: work-with-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.677Z
estimatedTokens: 1162
keywords: [Work, Data, Development, environments, scratch, orgs, developer, sandboxes, stock, testing]
---

# Work with Data

> Development environments, such as scratch orgs and developer sandboxes, need a set of
                stock data for testing.

# Work with Data

Development environments, such as scratch orgs and developer sandboxes, need a set of stock data for testing.

Sometimes, the stock data in a development environment doesn’t meet your development needs. Apex tests generally create their own data. Therefore, if Apex tests are the only tests you’re running in a scratch org, you probably don’t need to worry about data for the time being. However, other tests, such as UI, API, or user acceptance tests, do need baseline data. Scale and performance testing often requires a very large set of data. Make sure that you use consistent datasets when you run tests of each type.

Scratch orgs come with the same set of data as the edition on which they’re based. For example, Developer Edition orgs typically include 10–15 records for key standard objects, such as Account, Contact, and Lead. These records come in handy when you’re testing something like a new Apex trigger, flow, or Lightning web component.

The following sections describe the Salesforce CLI commands you can use to populate your orgs and provide basic usage examples. The commands you use depend on your current stage of development.

-   **[Work With Small Datasets](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_tree.htm)**
    Use the data export|import tree commands to move small sets of data between orgs, such as fewer than 3,000 records. These commands use JSON files to describe Salesforce records and the relationships between them. Developers can use these commands to quickly and easily create small sets of representative data in a scratch org when developing or testing their code.
-   **[Work With Large Datasets](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_bulk.htm)**
    When you’re ready to do more real-world testing, you often need large sets of data, such as millions of records. In this case, you use the various data bulk CLI commands to move the data around, typically between sandboxes. These commands are also useful when automating data extractions and data loads in production orgs.
-   **[Work With Individual Records](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_records.htm)**
    Everyone’s process is unique, and you don’t always need the same data as your teammates. When you want to create, modify, or delete individual records quickly, use the data record commands, such as data create record. With these commands you specify field values directly at the command line, so you don’t need any CSV or JSON data files. These commands work with both standard and custom Salesforce objects, and Tooling API objects.
-   **[Run a SOQL or SOSL Query](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_query.htm)**
    It’s often useful to run a CLI command to quickly query a Salesforce object or search for specific terms across many objects. For example, maybe you want to see all the Account records for the energy industry, or search for contact or lead names that begin with the letters JO. Salesforce provides two robust search languages for just these use cases: SOQL and SOSL.
-   **[Upload a File to Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_upload.htm)**
    Use the data create file CLI command to upload a local file to your org. The file is uploaded to the ContentDocument standard object; when the command finishes it outputs the new record ID. In the Salesforce UI, the uploaded file is available from the Files tab. The command always creates a new file in the org; you can’t update an existing file. If you create a file with the name of an existing file, a new duplicate record is created.

#### See Also

-   [*Salesforce DX Developer Guide*: Supported Scratch Org Editions and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_editions_and_allocations.htm "Salesforce DX Developer Guide: Supported Scratch Org Editions and Allocations - HTML (New Window)")

-   [*Salesforce Help*: Sandbox Licenses and Storage Limits by Type](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_environments.htm&type=5&language=en_US "Salesforce Help: Sandbox Licenses and Storage Limits by Type - HTML (New Window)")

-   [*Salesforce Help*: Scalability](https://help.salesforce.com/s/articleView?id=xcloud.scalability_overview.htm&type=5&language=en_US "Salesforce Help: Scalability - HTML (New Window)")

-   [*Salesforce Help*: Secure Your Sandbox Data with Salesforce Data Mask](https://help.salesforce.com/s/articleView?id=platform.data_mask_overview.htm&type=5&language=en_US "Salesforce Help: Secure Your Sandbox Data with Salesforce Data Mask - HTML (New Window)")

## Related Topics

- Work With Small Datasets (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_tree.htm)
- Work With Large Datasets (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_bulk.htm)
- Work With Individual Records (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_records.htm)
- Run a SOQL or SOSL Query (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_query.htm)
- Upload a File to Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_data_upload.htm)
