---
title: "Insert, Update, or Delete Data Using Data Loader"
domain: dataLoader
topic: insert-update-or-delete-data-using-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.222Z
estimatedTokens: 1299
keywords: [Insert, Data, Loader, wizards, add, modify, records, upsert, wizard, combines, inserting, updating, record, file, matches]
---

# Insert, Update, or Delete Data Using Data Loader

> Use the Data Loader wizards to add, modify, or delete records. The upsert wizard
    combines inserting and updating a record. If a record in your file matches an existing record,
    the existing record is updated with the values in your file. If no match is found, a new record
    is created. When you hard-delete records, the deleted records are not stored in the Recycle Bin
    and are eligible for deletion. For more information, see Configure Data Loader.

# Insert, Update, or Delete Data Using Data Loader

Use the Data Loader wizards to add, modify, or delete records. The upsert wizard combines inserting and updating a record. If a record in your file matches an existing record, the existing record is updated with the values in your file. If no match is found, a new record is created. When you hard-delete records, the deleted records are not stored in the Recycle Bin and are eligible for deletion. For more information, see Configure Data Loader.


| User Permissions Needed |
| --- |
| To insert records: | Create on the record |
| To update records: | Edit on the record |
| To upsert records: | Create or Edit on the record |
| To delete records: | Delete on the record |
| To hard delete records: | Delete on the record |
| To mass delete records: | Modify All Data |

1.  To start Data Loader, double click the Data Loader icon on your Desktop or in your Applications folder.
2.  Click **Insert**, **Update**, **Upsert**, **Delete**, or **Hard Delete**. These commands are also listed in the File menu.
3.  Enter your Salesforce username and password. To log in, click **Log in**. When you are logged in, click **Next**. (Until you log out or close the program, you are not asked to log in again.)

    If your organization restricts IP addresses, logins from untrusted IPs are blocked until they’re activated. Salesforce automatically sends you an activation email that you can use to log in. The email contains a security token that you add to the end of your password. For example, if your password is mypassword, and your security token is XXXXXXXXXX, you must enter mypasswordXXXXXXXXXX to log in.

4.  Choose an object. For example, if you are inserting Account records, select **Account**. If your object name does not display in the default list, select **Show all objects** to see a complete list of the objects that you can access. The objects are listed by localized label name, with the developer name noted in parentheses.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

    #### Note

    Data Loader deletes records based on the IDs in the CSV file, not the object selected.

5.  To select your CSV file, click **Browse**. For example, if you are inserting Account records, you could specify a CSV file called insertaccounts.csv containing a Name column for the names of the new accounts.
6.  Click **Next**. After the object and CSV file are initialized, click **OK**.
7.  If you are performing an upsert, your CSV file must contain a column of ID values for matching against existing records. The column is either an external ID (a custom field with the External ID attribute) or ID (the Salesforce record ID).
    1.  From the dropdown list, select which field to use for matching. If the object has no external ID fields, ID is used. Click **Next** to continue.
    2.  If your file includes the external IDs of an object that has a relationship to your chosen object, enable that external ID for record matching by selecting its name from the dropdown list. If you make no selection, you can use the related object’s ID field for matching by mapping it in the next step. Click **Next** to continue.
8.  Define how the columns in your CSV file map to Salesforce fields. To select an existing field mapping, click **Choose an Existing Map**. To create or modify a map, click **Create or Edit a Map**. Click **Next**.
9.  For each operation, the Data Loader generates two unique CSV log files. One file name starts with “success,” and the other starts with “error.” Click **Browse** to specify a directory for these files.
10.  To complete the operation, click **Finish**, and then click **Yes** to confirm. As the operation proceeds, a progress information window reports the status of the data movement.
11.  To view your success or error files, click **View Successes** or **View Errors**. To close the wizard, click **OK** .

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

#### Tip

-   If you are updating or deleting large amounts of data, review [Perform Mass Updates](atlas.en-us.dataLoader.meta/dataLoader/performing_mass_updates.htm "Use data Loader to update a large number of records at one time.") and [Perform Mass Deletes](atlas.en-us.dataLoader.meta/dataLoader/performing_mass_deletes.htm "Use Data Loader to delete a large number of records at one time. The total number of records you can delete depends on which API you've configured Data Loader to use.") for tips and best practices.
-   There is a 5\-minute limit to process 100 records when the Bulk API is enabled. If it takes longer than 10 minutes to process a file, the Bulk API places the remainder of the file back in the queue for later processing. If the Bulk API continues to exceed the 10-minute limit on subsequent attempts, the file is placed back in the queue and reprocessed up to 10 times before the operation is permanently marked as failed. Even if the processing fails, some records could have completed successfully, so check the results. If you get a timeout error when loading a file, split your file into smaller files and try again.

## Related Topics

- Perform Mass Updates (atlas.en-us.dataLoader.meta/dataLoader/performing_mass_updates.htm)
- Perform Mass Deletes (atlas.en-us.dataLoader.meta/dataLoader/performing_mass_deletes.htm)
