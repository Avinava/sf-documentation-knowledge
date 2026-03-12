---
title: "Step One: Create the Encryption Key File"
domain: dataLoader
topic: step-one-create-the-encryption-key-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.164Z
estimatedTokens: 622
keywords: [Step, Encryption, Key, File, Data, Loader, command, line, there's, user, Therefore, provide, enter, text, named]
---

# Step One: Create the Encryption Key File

> When you use Data Loader from the command line, there's no user interface. Therefore,
    you provide the information that you enter in the user interface in a text file named
      process-conf.xml. For example, you add the username and password that
    Data Loader uses to log in to Salesforce.

# Step One: Create the Encryption Key File

When you use Data Loader from the command line, there's no user interface. Therefore, you provide the information that you enter in the user interface in a text file named process-conf.xml. For example, you add the username and password that Data Loader uses to log in to Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The password must be encrypted before you add it to the process-conf.xml file, and creating the key is the first step in that process.

1.  Open a command prompt window by selecting **Start** | **All Programs** | **Accessories** | **Command Prompt**. Alternatively, you can click **Start** | **Run**, enter cmd in the **Open** field, and click **OK**.
2.  In the command window, enter cd\\ to navigate to the root directory of the drive where Data Loader is installed.
3.  Navigate to the Data Loader \\bin directory by entering this command. Replace the file path with the path from your system.

    C:\\Users\\{userName}\\dataloader\\version\\bin

4.  Create an encryption key file by entering the following command. Replace \[path to key file\] with the key file path.

    encrypt.bat —k \[path to key file\]

    For example:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

    #### Note

    To see a list of command-line options for encrypt.bat, enter encrypt.bat on the command line.

5.  Note the key file path. In this example, the path is C:\\Users\\{userName}\\.dataloader\\dataLoader.key.

The encryption utility encrypts passwords but not data. HTTPS with TLS 1.0 or later encrypts data transmitted by the Apex Data Loader.

#### See Also

-   [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.")

-   [Step Two: Create the Encrypted Password](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_enc_password.htm "Create the encrypted password using the key file that you generated in the previous step. Skip this step if you're using OAuth for login authentication.")

## Code Examples

```
C:\Users\jjang\Dataloader\v45\bin>encrypt.bat -k
  Keyfile "C:\Users\jjang\.dataloader\dataloader.key" was created!
  C:\Users\jjang\Dataloader\v45\bin>
```

## Related Topics

- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
- Step Two: Create the Encrypted Password (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_enc_password.htm)
