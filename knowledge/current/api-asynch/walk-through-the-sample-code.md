---
title: "Walk Through the Sample Code"
domain: api-asynch
topic: walk-through-the-sample-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.177Z
estimatedTokens: 1144
keywords: [Walk, Sample, Code, client, build, applications, Bulk, API, application, steps, part, included, end, main, Login]
---

# Walk Through the Sample Code

> After you set up your client, you can build client applications that use the Bulk
        API. Use the sample to create a client application. Each section steps through part of the
        code. The complete sample is included at the end.

# Walk Through the Sample Code

After you set up your client, you can build client applications that use the Bulk API. Use the sample to create a client application. Each section steps through part of the code. The complete sample is included at the end.

This code sets up the packages and classes in the WSC toolkit and the code generated from the partner WSDL:

```

```

## Set Up the main() Method

This code sets up the main() method for the class. It calls the runSample() method, which encompasses the processing logic for the sample. We look at the methods called in runSample() in subsequent sections.

```

```

## Login and Configure BulkConnection

This code logs in using a partner connection (PartnerConnection) and then reuses the session to create a Bulk API connection (BulkConnection).

```

```

This BulkConnection instance is the base for using the Bulk API. The instance can be reused for the rest of the application lifespan.

## Create a Job

After creating the connection, create a job. Data is always processed in the context of a job. The job specifies the details about the data being processed: which operation is being executed (insert, update, upsert, or delete) and the object type. This code creates a new insert job on the Account object.

```

```

When a job is created, it’s in the Open state. In this state, new batches can be added to the job. When a job is Closed, batches can no longer be added.

## Add Batches to the Job

Data is processed in a series of batch requests. Each request is an HTTP POST containing the data set in XML format in the body. Your client application determines how many batches are used to process the whole data set as long as the batch size and total number of batches per day are within the limits specified in [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.").

The processing of each batch comes with an overhead. Make batch sizes large enough to minimize the overhead processing cost, and small enough to be handled and transferred easily. Batch sizes between 1,000 and 10,000 records are considered reasonable.

This code splits a CSV file into smaller batch files and uploads them to Salesforce.

```

```

When the server receives a batch, it’s immediately queued for processing. Errors in formatting aren’t reported when sending the batch. These errors are reported in the result data when the batch is processed.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_asynch)

#### Tip

To import binary attachments, use the following methods. Specify the CSV, XML, or JSON content for the batch in the batchContent parameter, or include request.txt in the attached files and pass null to the batchContent parameter. These methods are contained within the com.async.BulkConnection class:

-   createBatchFromDir()
-   createBatchWithFileAttachments()
-   createBatchWithInputStreamAttachments()
-   createBatchFromZipStream()

## Close the Job

After all batches are added to a job, close the job. Closing the job ensures that processing of all batches can finish.

```

```

## Check Status on Batches

Batches are processed in the background. The size of the data set determines how long processing takes. During processing, you can retrieve and check the status of all batches, and you can see when processing is complete.

```

```

A batch is done when it's either failed or completed. This code loops infinitely until all the batches for the job have either failed or completed.

## Get Results For a Job

You can retrieve the results of each batch when all batches are processed. Retrieve results whether the batch succeeded or failed, or even if the job was aborted, because only the result sets indicate the status of individual records. To properly pair a result with its corresponding record, the code must not lose track of how the batches correspond to the original data set. So keep the original list of batches from when they were created and use this list to retrieve results, as shown in this example:

```

```

This code retrieves the results for each record and reports whether the operation succeeded or failed. If an error occurred for a record, the code prints out the error.

## Complete Quick Start Sample

Now that you're more familiar with jobs and batches, you can copy and paste the entire quick start sample and use it:

```

```

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_set_up_client.htm "Set Up Your Client Application")

## Code Examples

```
import java.io.*;
import java.util.*;

import com.sforce.async.*;
import com.sforce.soap.partner.PartnerConnection;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;
```

```apex
public static void main(String[] args)
      throws AsyncApiException, ConnectionException, IOException {
        BulkExample example = new BulkExample();
        // Replace arguments below with your credentials and test file name
        // The first parameter indicates that we are loading Account records
        example.runSample("Account", "myUser@myOrg.com", "myPassword", "mySampleData.csv");
    }

    /**
     * Creates a Bulk API job and uploads batches for a CSV file.
     */
    public void runSample(String sobjectType, String userName,
              String password, String sampleFileName)
            throws AsyncApiException, ConnectionException, IOException {
        BulkConnection connection = getBulkConnection(userName, password);
        JobInfo job = createJob(sobjectType, connection);
        List<BatchInfo> batchInfoList = createBatchesFromCSVFile(connection, job,
            sampleFileName);
        closeJob(connection, job.getId());
        awaitCompletion(connection, job, batchInfoList);
        checkResults(connection, job, batchInfoList);
    }
```

```apex
/**
     * Create the BulkConnection used to call Bulk API operations.
     */
    private BulkConnection getBulkConnection(String userName, String password)
          throws ConnectionException, AsyncApiException {
        ConnectorConfig partnerConfig = new ConnectorConfig();
        partnerConfig.setUsername(userName);
        partnerConfig.setPassword(password);
        partnerConfig.setAuthEndpoint("https://login.salesforce.com/services/Soap/u/66.0");
        // Creating the connection automatically handles login and stores
        // the session in partnerConfig
        new PartnerConnection(partnerConfig);
        // When PartnerConnection is instantiated, a login is implicitly
        // executed and, if successful,
        // a valid session is stored in the ConnectorConfig instance.
        // Use this key to initialize a BulkConnection:
        ConnectorConfig config = new ConnectorConfig();
        config.setSessionId(partnerConfig.getSessionId());
        // The endpoint for the Bulk API service is the same as for the normal
        // SOAP uri until the /Soap/ part. From here it's '/async/versionNumber'
        String soapEndpoint = partnerConfig.getServiceEndpoint();
        String apiVersion = "66.0";
        String restEndpoint = soapEndpoint.substring(0, soapEndpoint.indexOf("Soap/"))
            + "async/" + apiVersion;
        config.setRestEndpoint(restEndpoint);
        // This should only be false when doing debugging.
        config.setCompression(true);
        // Set this to true to see HTTP requests and responses on stdout
        config.setTraceMessage(false);
        BulkConnection connection = new BulkConnection(config);
        return connection;
    }
```

```apex
/**
     * Create a new job using the Bulk API.
     * 
     * @param sobjectType
     *            The object type being loaded, such as "Account"
     * @param connection
     *            BulkConnection used to create the new job.
     * @return The JobInfo for the new job.
     * @throws AsyncApiException
     */
    private JobInfo createJob(String sobjectType, BulkConnection connection)
          throws AsyncApiException {
        JobInfo job = new JobInfo();
        job.setObject(sobjectType);
        job.setOperation(OperationEnum.insert);
        job.setContentType(ContentType.CSV);
        job = connection.createJob(job);
        System.out.println(job);
        return job;
    }
```

```apex
/**
     * Create and upload batches using a CSV file.
     * The file into the appropriate size batch files.
     * 
     * @param connection
     *            Connection to use for creating batches
     * @param jobInfo
     *            Job associated with new batches
     * @param csvFileName
     *            The source file for batch data
     */
    private List<BatchInfo> createBatchesFromCSVFile(BulkConnection connection,
          JobInfo jobInfo, String csvFileName)
            throws IOException, AsyncApiException {
        List<BatchInfo> batchInfos = new ArrayList<BatchInfo>();
        BufferedReader rdr = new BufferedReader(
            new InputStreamReader(new FileInputStream(csvFileName))
        );
        // read the CSV header row
        byte[] headerBytes = (rdr.readLine() + "
").getBytes("UTF-8");
        int headerBytesLength = headerBytes.length;
        File tmpFile = File.createTempFile("bulkAPIInsert", ".csv");

        // Split the CSV file into multiple batches
        try {
            FileOutputStream tmpOut = new FileOutputStream(tmpFile);
            int maxBytesPerBatch = 10000000; // 10 million bytes per batch
            int maxRowsPerBatch = 10000; // 10 thousand rows per batch
            int currentBytes = 0;
            int currentLines = 0;
            String nextLine;
            while ((nextLine = rdr.readLine()) != null) {
                byte[] bytes = (nextLine + "
").getBytes("UTF-8");
                // Create a new batch when our batch size limit is reached
                if (currentBytes + bytes.length > maxBytesPerBatch
                  || currentLines > maxRowsPerBatch) {
                    createBatch(tmpOut, tmpFile, batchInfos, connection, jobInfo);
                    currentBytes = 0;
                    currentLines = 0;
                }
                if (currentBytes == 0) {
                    tmpOut = new FileOutputStream(tmpFile);
                    tmpOut.write(headerBytes);
                    currentBytes = headerBytesLength;
                    currentLines = 1;
                }
                tmpOut.write(bytes);
                currentBytes += bytes.length;
                currentLines++;
            }
            // Finished processing all rows
            // Create a final batch for any remaining data
            if (currentLines > 1) {
                createBatch(tmpOut, tmpFile, batchInfos, connection, jobInfo);
            }
        } finally {
            tmpFile.delete();
        }
        return batchInfos;
    }

    /**
     * Create a batch by uploading the contents of the file.
     * This closes the output stream.
     * 
     * @param tmpOut
     *            The output stream used to write the CSV data for a single batch.
     * @param tmpFile
     *            The file associated with the above stream.
     * @param batchInfos
     *            The batch info for the newly created batch is added to this list.
     * @param connection
     *            The BulkConnection used to create the new batch.
     * @param jobInfo
     *            The JobInfo associated with the new batch.
     */
    private void createBatch(FileOutputStream tmpOut, File tmpFile,
      List<BatchInfo> batchInfos, BulkConnection connection, JobInfo jobInfo)
              throws IOException, AsyncApiException {
        tmpOut.flush();
        tmpOut.close();
        FileInputStream tmpInputStream = new FileInputStream(tmpFile);
        try {
            BatchInfo batchInfo =
              connection.createBatchFromStream(jobInfo, tmpInputStream);
            System.out.println(batchInfo);
            batchInfos.add(batchInfo);

        } finally {
            tmpInputStream.close();
        }
    }
```

## Related Topics

- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_set_up_client.htm)
