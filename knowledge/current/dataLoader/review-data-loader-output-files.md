---
title: "Review Data Loader Output Files"
domain: dataLoader
topic: review-data-loader-output-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.345Z
estimatedTokens: 420
keywords: [Review, Data, Loader, Output, Files, import, export, generates, two, CSV, contain, results, operation, file, begins]
---

# Review Data Loader Output Files

> After an import or export, Data Loader generates two CSV output files that contain
        the results of the operation. One file name begins with success, and the other starts with error.
        Both files have the extension .csv. Use the Data Loader
        CSV file viewer to open the files. Specify the folder containing success and error CSV files in the
            Finish step of an operation.

# Review Data Loader Output Files

After an import or export, Data Loader generates two CSV output files that contain the results of the operation. One file name begins with success, and the other starts with error. Both files have the extension .csv. Use the Data Loader CSV file viewer to open the files. Specify the folder containing success and error CSV files in the Finish step of an operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

Export operations don’t generate a success file by default. To generate a success file when exporting data, check **Generate status files for exports** in the Advanced Settings dialog.

1.  Choose **View** | **View CSV**.
2.  Specify the number of rows to view. Each row in the CSV file corresponds to one Salesforce record. The default is 1,000.
3.  To view a specific CSV file, click **Open CSV**. To view the last success file, click **Open Success**. To view the last error file, click **Open Error**.
4.  To open the file in an external program, such as Excel, click **Open in External Program**.

    The success file contains the successfully loaded records, including a column with the newly generated record IDs. The error file contains the rejected records, with a column that describes why the load failed. If the object you’re exporting has a column named “success” or “error”, your output file columns could display incorrect information. To avoid this problem, rename the columns.

5.  To return to the CSV Chooser window, click **Close**. To exit the window, click **OK**. To generate success files when exporting data, select Generate status files for exports.
