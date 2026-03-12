---
title: "retrieve()"
domain: metadata-api
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.504Z
estimatedTokens: 2403
keywords: [retrieve, call, retrieves, XML, file, representations, components, organization., Syntax, Usage, Note, Permissions, Arguments, Response, Sample, Code—Java]
---

# retrieve()

> The retrieve() call retrieves XML file
        representations of components in an organization.

# retrieve()

The retrieve() call retrieves XML file representations of components in an organization.

## Syntax

```

```

## Usage

Use this call to retrieve file representations of components in an organization.

Here are the deploy limits. Limits can change without notice.

| Feature | Limit |
| --- | --- |
| Maximum compressed .zip folder size1 | Approximately 39 MB |
| Maximum uncompressed folder size2 | Approximately 600 MB |
| Maximum number of files in AppExchange packages | 35,000 |
| Maximum number of files in packages | 10,000 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can perform a **retrieve()** call for a big object only if its index is defined. If a big object is created in Setup and doesn’t yet have an index defined, you can’t retrieve it.

1 Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB. Base-64 encoding increases the size of the payload by approximately 22%, so your compressed payload can't exceed approximately 39 MB before encoding.

2 When deploying an unzipped project, all files in the project are compressed first. The maximum size of uncompressed components in an uncompressed project is 600 MB or less, depending on the files’ compression ratio. If the files have a high compression ratio, you can migrate a total of approximately 600 MB because the compressed size would be under 39 MB. However, if the components can't be compressed much, like binary static resources, you can migrate less than 600 MB.

In API version 31.0 and later, the process of making a retrieve() call has been simplified. You no longer have to call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") after a retrieve() call to obtain the status of the retrieve operation. Instead, make calls to [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") only. If the retrieve operation is in progress, call [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the retrieve operation is completed. The [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call is still supported in versions API version 30.0 or earlier, but isn’t available in API version 31.0 and later.

For API version 31.0 or later, retrieve packaged or unpackaged components by using the following steps.

1.  Issue a retrieve() call to start the asynchronous retrieval. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. Note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field, and use it for the next step.
2.  Issue a [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") call, and pass in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object from the first step. Check the value of the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field of the returned [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."). If it’s true, the call is completed, and you proceed to the next step. Otherwise, repeat this step to call [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field is true.
3.  Retrieve the zip file ([zipFile](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveResult_zipFile)) field and other desired fields from [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."), which the final call to [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") returned in the previous step.

For API version 30.0 or earlier, retrieve packaged or unpackaged components by using the following steps.

1.  Issue a retrieve() call to start the asynchronous retrieval. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. If the call is completed, the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. Most often, the call isn’t completed quickly enough to be noted in the result. If it’s completed, note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field returned, and skip the next step.
2.  If the call isn’t completed, issue a [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call in a loop using the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field of the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object, returned by the retrieve() call in the previous step. Check the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object returned until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. The time taken to complete a retrieve() call depends on the size of the zip file being deployed, so use a longer wait time between iterations as the size of the zip file increases.
3.  Issue a [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") call to obtain the results of the retrieve() call, using the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value returned in the first step.

For examples of manifest files, see [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.").

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| retrieveRequest | RetrieveRequest | Encapsulates options for determining which packages or files are retrieved. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")

## Sample Code—Java

This sample shows how to retrieve components into a zip file. See the [deploy() sample code](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#sample_java_deploy) for details on how to deploy a zip file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This sample requires API version 34.0 or later.

```

```

## Code Examples

```
AsyncResult = metadatabinding.retrieve(RetrieveRequest)
```

```apex
package com.doc.samples;

import java.io.*;
import java.util.*;
import java.nio.ByteBuffer;
import java.nio.channels.*;
import java.rmi.RemoteException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.sforce.soap.metadata.AsyncResult;
import com.sforce.soap.metadata.MetadataConnection;
import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.soap.metadata.RetrieveMessage;
import com.sforce.soap.metadata.RetrieveRequest;
import com.sforce.soap.metadata.RetrieveResult;
import com.sforce.soap.metadata.RetrieveStatus;
import com.sforce.soap.enterprise.LoginResult;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;
import com.sforce.soap.metadata.PackageTypeMembers;

public class RetrieveSample {

    // Binding for the metadata WSDL used for making metadata API calls
    private MetadataConnection metadataConnection;
    
    static BufferedReader rdr = new BufferedReader(new InputStreamReader(System.in));

    // one second in milliseconds
    private static final long ONE_SECOND = 1000;
    // maximum number of attempts to retrieve the results
    private static final int MAX_NUM_POLL_REQUESTS = 50; 

    // manifest file that controls which components get retrieved
    private static final String MANIFEST_FILE = "package.xml"; 

    private static final double API_VERSION = 31.0; 

    public static void main(String[] args) throws Exception {
        final String USERNAME = "user@company.com";
        // This is only a sample. Hard coding passwords in source files is a bad practice.
        final String PASSWORD = "password"; 
        final String URL = "https://login.salesforce.com/services/Soap/c/31.0";
        
        RetrieveSample sample = new RetrieveSample(USERNAME, PASSWORD, URL);
        sample.retrieveZip();
    }
    
    public RetrieveSample(String username, String password, String loginUrl) 
            throws ConnectionException {
        createMetadataConnection(username, password, loginUrl);
    }

    
    private void retrieveZip() throws RemoteException, Exception
    {
        RetrieveRequest retrieveRequest = new RetrieveRequest();
        // The version in package.xml overrides the version in RetrieveRequest
        retrieveRequest.setApiVersion(API_VERSION);
        setUnpackaged(retrieveRequest);

        // Start the retrieve operation
        AsyncResult asyncResult = metadataConnection.retrieve(retrieveRequest);
        String asyncResultId = asyncResult.getId();
        
        // Wait for the retrieve to complete
        int poll = 0;
        long waitTimeMilliSecs = ONE_SECOND;
        RetrieveResult result = null;
        do {
            Thread.sleep(waitTimeMilliSecs);
            // Double the wait time for the next iteration
            waitTimeMilliSecs *= 2;
            if (poll++ > MAX_NUM_POLL_REQUESTS) {
                throw new Exception("Request timed out.  If this is a large set " +
                "of metadata components, check that the time allowed " +
                "by MAX_NUM_POLL_REQUESTS is sufficient.");
            }
            result = metadataConnection.checkRetrieveStatus(
                    asyncResultId, true);
            System.out.println("Retrieve Status: " + result.getStatus());
        } while (!result.isDone());

        if (result.getStatus() == RetrieveStatus.Failed) {
            throw new Exception(result.getErrorStatusCode() + " msg: " +
                    result.getErrorMessage());
        } else if (result.getStatus() == RetrieveStatus.Succeeded) {      
            // Print out any warning messages
            StringBuilder buf = new StringBuilder();
            if (result.getMessages() != null) {
                for (RetrieveMessage rm : result.getMessages()) {
                    buf.append(rm.getFileName() + " - " + rm.getProblem());
                }
            }
            if (buf.length() > 0) {
                System.out.println("Retrieve warnings:
" + buf);
            }
    
            // Write the zip to the file system
            System.out.println("Writing results to zip file");
            ByteArrayInputStream bais = new ByteArrayInputStream(result.getZipFile());
            File resultsFile = new File("retrieveResults.zip");
            FileOutputStream os = new FileOutputStream(resultsFile);
            try {
                ReadableByteChannel src = Channels.newChannel(bais);
                FileChannel dest = os.getChannel();
                copy(src, dest);
                
                System.out.println("Results written to " + resultsFile.getAbsolutePath());
            } finally {
                os.close();
            }
        }
    }
    
    /**
     * Helper method to copy from a readable channel to a writable channel,
     * using an in-memory buffer.
     */
    private void copy(ReadableByteChannel src, WritableByteChannel dest)
        throws IOException
    {
        // Use an in-memory byte buffer
        ByteBuffer buffer = ByteBuffer.allocate(8092);
        while (src.read(buffer) != -1) {
            buffer.flip();
            while(buffer.hasRemaining()) {
                dest.write(buffer);
            }
            buffer.clear();
        }
    }
    
    private void setUnpackaged(RetrieveRequest request) throws Exception
    {
        // Edit the path, if necessary, if your package.xml file is located elsewhere
        File unpackedManifest = new File(MANIFEST_FILE);
        System.out.println("Manifest file: " + unpackedManifest.getAbsolutePath());
        
        if (!unpackedManifest.exists() || !unpackedManifest.isFile())
            throw new Exception("Should provide a valid retrieve manifest " +
                    "for unpackaged content. " +
                    "Looking for " + unpackedManifest.getAbsolutePath());

        // Note that we populate the _package object by parsing a manifest file here.
        // You could populate the _package based on any source for your
        // particular application.
        com.sforce.soap.metadata.Package p = parsePackage(unpackedManifest);
        request.setUnpackaged(p);
    }

    private com.sforce.soap.metadata.Package parsePackage(File file) throws Exception {
        try {
            InputStream is = new FileInputStream(file);
            List<PackageTypeMembers> pd = new ArrayList<PackageTypeMembers>();
            DocumentBuilder db =
                DocumentBuilderFactory.newInstance().newDocumentBuilder();
            Element d = db.parse(is).getDocumentElement();
            for (Node c = d.getFirstChild(); c != null; c = c.getNextSibling()) {
                if (c instanceof Element) {
                    Element ce = (Element)c;
                    //
                    NodeList namee = ce.getElementsByTagName("name");
                    if (namee.getLength() == 0) {
                        // not
                        continue;
                    }
                    String name = namee.item(0).getTextContent();
                    NodeList m = ce.getElementsByTagName("members");
                    List<String> members = new ArrayList<String>();
                    for (int i = 0; i < m.getLength(); i++) {
                        Node mm = m.item(i);
                        members.add(mm.getTextContent());
                    }
                    PackageTypeMembers pdi = new PackageTypeMembers();
                    pdi.setName(name);
                    pdi.setMembers(members.toArray(new String[members.size()]));
                    pd.add(pdi);
                }
            }
            com.sforce.soap.metadata.Package r = new com.sforce.soap.metadata.Package();
            r.setTypes(pd.toArray(new PackageTypeMembers[pd.size()]));
            r.setVersion(API_VERSION + "");
            return r;
        } catch (ParserConfigurationException pce) {
            throw new Exception("Cannot create XML parser", pce);
        } catch (IOException ioe) {
            throw new Exception(ioe);
        } catch (SAXException se) {
            throw new Exception(se);
        }
    }
    
 
    private void createMetadataConnection(final String username,
            final String password, final String loginUrl)
            throws ConnectionException {

        final ConnectorConfig loginConfig = new ConnectorConfig();
        loginConfig.setAuthEndpoint(loginUrl);
        loginConfig.setServiceEndpoint(loginUrl);
        loginConfig.setManualLogin(true);
        LoginResult loginResult = (new EnterpriseConnection(loginConfig)).login(
                username, password);

        final ConnectorConfig metadataConfig = new ConnectorConfig();
        metadataConfig.setServiceEndpoint(loginResult.getMetadataServerUrl());
        metadataConfig.setSessionId(loginResult.getSessionId());
        this.metadataConnection = new MetadataConnection(metadataConfig);
    }
    
    //The sample client application retrieves the user's login credentials.
    // Helper function for retrieving user input from the console
    String getUserInput(String prompt) {
        System.out.print(prompt);
        try {
            return rdr.readLine();
        }
        catch (IOException ex) {
            return null;
        }
    }

}
```

## Related Topics

- RetrieveRequest (atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- checkRetrieveStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- RetrieveResult (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- zipFile (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- Sample package.xml Manifest Files (atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
