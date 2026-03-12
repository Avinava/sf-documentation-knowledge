---
title: "Step Four: Create the Configuration File"
domain: dataLoader
topic: step-four-create-the-configuration-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.156Z
estimatedTokens: 911
keywords: [Step, Four, Configuration, File, process-conf.xml, Data, Loader, requires, process, <bean>, refers, insert, upsert, export, Therefore]
---

# Step Four: Create the Configuration File

> The process-conf.xml file contains the information that Data Loader
        requires to process the data. Each <bean> in the
        process-conf.xml file refers to a single process such as an
        insert, upsert, or export. Therefore, this file can contain multiple processes.

# Step Four: Create the Configuration File

The process-conf.xml file contains the information that Data Loader requires to process the data. Each <bean\> in the process-conf.xml file refers to a single process such as an insert, upsert, or export. Therefore, this file can contain multiple processes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

In this step, you edit the file to insert accounts into Salesforce.

1.  Make a copy of the process-conf.xml file from the \\samples\\conf directory. Be sure to maintain a copy of the original because it contains examples of other types of Data Loader processing such as upserts and exports.
2.  Open the file in a text editor, and replace the contents with the following XML.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

    #### Note

    Remove sfdc.password if you're using OAuth for login authentication.

    ```

    ```

3.  Modify the following parameters in the process-conf.xml file. For more information about the process configuration parameters, see [Data Loader Process Configuration Parameters](atlas.en-us.dataLoader.meta/dataLoader/loader_params.htm "When running Data Loader from the command line, you can specify configuration parameters in the process-conf.xml file. In some cases, the parameter is also represented in the UI at Settings > Settings.").

    -   sfdc.endpoint—Enter the URL of the Salesforce instance for your organization; for example, https://yourInstance.salesforce.com/.
    -   sfdc.username—Enter the username Data Loader uses to log in.
    -   sfdc.password—Enter the encrypted password value that you created in step 2.
    -   process.mappingFile—Enter the path and file name of the mapping file.
    -   dataAccess.Name—Enter the path and file name of the data file that contains the accounts that you want to import.
    -   sfdc.debugMessages—Currently set to false. Set it to true for troubleshooting. If set to true, debug messages are captured in the file specified by sfdc.debugMessagesFile.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

        #### Note

        Debug messages can contain sensitive information such as session id.

    -   sfdc.debugMessagesFile—Enter the path and file name of the command-line log file.
    -   process.outputSuccess—Enter the path and file name of the success log file.
    -   process.outputError—Enter the path and file name of the error log file.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=dataLoader)

    #### Warning

    Use caution when using different XML editors to edit the process-conf.xml file. Some editors add XML tags to the beginning and end of the file, which causes the import to fail.

4.  To perform operations in a sandbox org, set the following parameters.
    -   sfdc.oauth.environment—Enter the value Sandbox.
    -   sfdc.endpoint.Sandbox—Enter the value test.salesforce.com.

#### See Also

-   [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.")

-   [Step Five: Import the Data](atlas.en-us.dataLoader.meta/dataLoader/command_line_import_data.htm "Now that all the pieces are in place, you can run Data Loader from the command line and insert some new accounts.")

## Code Examples

```
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">
                        <beans>
                        <bean id="accountInsert"
                        class="com.salesforce.dataloader.process.ProcessRunner"
                        scope="prototype">
                        <description>accountInsert job gets the account record from the CSV file 
                        and inserts it into Salesforce.</description>
                        <property name="name" value="accountInsert"/>
                        <property name="configOverrideMap">
                        <map>
                        <entry key="sfdc.debugMessages" value="false"/>
                        <entry key="sfdc.debugMessagesFile" 
                        value="C:\DLTest\Log\accountInsertSoapTrace.log"/>
                        <entry key="sfdc.endpoint" value="https://servername.salesforce.com"/>
                        <entry key="sfdc.username" value="admin@Org.org"/>
                        <!--Password below has been encrypted using key file, 
                        therefore, it will not work without the key setting: 
                        process.encryptionKeyFile.
                        The password is not a valid encrypted value, 
                        please generate the real value using the encrypt.bat utility -->
                        <entry key="sfdc.password" value="e8a68b73992a7a54"/>
                        <entry key="process.encryptionKeyFile" 
                        value="c:\Users\{user}\.dataloader\dataLoader.key"/>
                        <entry key="sfdc.timeoutSecs" value="600"/>
                        <entry key="sfdc.loadBatchSize" value="200"/>
                        <entry key="sfdc.entity" value="Account"/>
                        <entry key="process.operation" value="insert"/>
                        <entry key="process.mappingFile" 
                        value="C:\DLTest\Command Line\Config\accountInsertMap.sdl"/>
                        <entry key="dataAccess.name" 
                        value="C:\DLTest\In\insertAccounts.csv"/>
                        <entry key="process.outputSuccess" 
                        value="c:\DLTest\Log\accountInsert_success.csv"/>
                        <entry key="process.outputError" 
                        value="c:\DLTest\Log\accountInsert_error.csv"/>
                        <entry key="dataAccess.type" value="csvRead"/>
                        <entry key="process.initialLastRunDate" 
                        value="2005-12-01T00:00:00.000-0800"/>
                        </map>
                        </property>
                        </bean>
                        </beans>
```

## Related Topics

- Data
                        Loader Process Configuration Parameters (atlas.en-us.dataLoader.meta/dataLoader/loader_params.htm)
- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
- Step Five: Import the Data (atlas.en-us.dataLoader.meta/dataLoader/command_line_import_data.htm)
