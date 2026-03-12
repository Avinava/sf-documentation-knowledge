---
title: "Export Data from Salesforce"
domain: dataLoader
topic: export-data-from-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.215Z
estimatedTokens: 988
keywords: [Export, Data, Salesforce, Extract, Loader]
---

# Export Data from Salesforce

> Extract data from a Salesforce object using Data Loader.

# Export Data from Salesforce

Extract data from a Salesforce object using Data Loader.


| User Permissions Needed |
| --- |
| To export records: | Read on the records |
| To export all records: | Read on the records |

1.  To start Data Loader, double click the Data Loader icon on your Desktop or in your Applications folder.
2.  Click **Export**. If you want to also export archived activity records and [soft-deleted](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_techniques_deleting_data.htm) records, click **Export All** instead.
3.  Enter your Salesforce username and password, and click **Log in**.
4.  When you’re logged in, click **Next**. (You are not asked to log in again until you log out or close the program.)

    If your organization restricts IP addresses, logins from untrusted IPs are blocked until they’re activated. Salesforce automatically sends you an activation email that you can use to log in. The email contains a security token that you add to the end of your password. For example, if your password is mypassword, and your security token is XXXXXXXXXX, you must enter mypasswordXXXXXXXXXX to log in.

5.  Choose an object. For example, select the Account object. If your object name isn’t listed, select **Show all objects** to see all the objects that you can access. The objects are listed by localized label name, with the developer name in parentheses. For object descriptions, see the Salesforce Object Reference.
6.  Select the CSV file to export the data to. You can choose an existing file or create a file.

    If you select an existing file, the export replaces its contents. To confirm the action, click **Yes**, or choose another file by clicking **No**.

7.  Click **Next**.
8.  Create a SOQL query for the data export. For example, select **Id** and **Name** in the query fields, and click **Finish**. As you follow the next steps, the CSV viewer displays all the Account names and their IDs. SOQL is the Salesforce Object Query Language. Similar to the SELECT command in SQL, with SOQL, you can specify the source object, a list of fields to retrieve, and conditions for selecting rows in the source object.

    -   Choose the fields you want to export.
    -   Optionally, select conditions to filter your dataset. If you do not select any conditions, all the data to which you have read access is returned.
    -   Review the generated query and edit if necessary.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

    #### Tip

    You can use a SOQL relationship query to include fields from a related object. For example:

    ```

    ```

    Or:

    ```

    ```

    When using relationship queries in the Data Loader, the fully specified field names are case-sensitive. For example, using ACCOUNT.NAME instead of Account.Name does not work.

    Data Loader doesn’t support nested queries or querying child objects. For example, queries similar to the following return an error:

    ```

    ```

    Also, Data Loader doesn’t support queries that use polymorphic relationships. For example, the following query results in an error:

    ```

    ```

9.  Click **Finish**, then click **Yes** to confirm.

    A progress information window reports the status of the operation. After the operation completes, a confirmation window summarizes your results.

10.  To view the CSV file. click **View Extraction**, or to close, click **OK**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

-   Data Loader currently does not support exporting attachments. As a workaround, use the weekly export feature in the online application to export attachments.
-   If you select compound fields for export in the Data Loader, they cause error messages. To export values, use individual field components.

## Code Examples

```
Select Name, Pricebook2Id, Pricebook2.Name, Product2Id, Product2.ProductCode FROM PricebookEntry WHERE IsActive = true
```

```
Select Id, LastName, Account.Name FROM Contact
```

```
SELECT Amount, Id, Name, (SELECT Quantity, ListPrice,
PriceBookEntry.UnitPrice, PricebookEntry.Name,
PricebookEntry.product2.Family FROM OpportunityLineItems)
FROM Opportunity
```

```
SELECT Id, Owner.Name, Owner.Type, Owner.Id, Subject FROM Case
```
