---
title: "Loading Test Data"
domain: apex-guide
topic: loading-test-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.626Z
keywords: [Loading, Test, Data, Test.loadData, Example]
---

# Loading Test Data

# Loading Test Data

Using the Test.loadData method, you can populate data in your test methods without having to write many lines of code.

Follow these steps:

1.  Add the data in a .csv file.
2.  Create a static resource for this file.
3.  Call Test.loadData within your test method and passing it the sObject type token and the static resource name.

For example, for Account records and a static resource name of myResource, make the following call:

```

```

The Test.loadData method returns a list of sObjects that correspond to each record inserted.

You must create the static resource prior to calling this method. The static resource is a comma-delimited file ending with a .csv extension. The file contains field names and values for the test records. The first line of the file must contain the field names and subsequent lines are the field values. To learn more about static resources, see “Defining Static Resources” in the Salesforce online help.

Once you create a static resource for your .csv file, the static resource will be assigned a MIME type. Supported MIME types are:

-   text/csv
-   application/vnd.ms-excel
-   application/octet-stream
-   text/plain

## Test.loadData Example

The following are steps for creating a sample .csv file and a static resource, and calling Test.loadData to insert the test records.

1.  Create a .csv file that has the data for the test records. This sample .csv file has three account records. You can use this sample content to create your .csv file.
    
    ```
    
    ```
    
2.  Create a static resource for the .csv file:
    1.  From Setup, enter Static Resources in the Quick Find box, then select **Static Resources**.
    2.  Click **New**.
    3.  Name your static resource testAccounts.
    4.  Choose the file you created.
    5.  Click **Save**.
3.  Call Test.loadData in a test method to populate the test accounts.
    
    ```
    
    ```