---
title: "Step Two: Create the Encrypted Password"
domain: dataLoader
topic: step-two-create-the-encrypted-password
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.160Z
estimatedTokens: 421
keywords: [Step, Two, Encrypted, Password, key, file, generated, previous, Skip, you're, OAuth, login, authentication]
---

# Step Two: Create the Encrypted Password

> Create the encrypted password using the key file that you generated in the previous
    step. Skip this step if you're using OAuth for login authentication.

# Step Two: Create the Encrypted Password

Create the encrypted password using the key file that you generated in the previous step. Skip this step if you're using OAuth for login authentication.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

1.  In the same command prompt window, enter the following command.

    encrypt.bat –e <password\><Salesforce\_Security\_Token\> <key file path\>

    Replace <password\> with the password that you use to log in to Salesforce in Data Loader combined with your org's [security token](https://help.salesforce.com/s/articleView?id=xcloud.user_security_token.htm&type=5&language=en_US) (no space in between). Replace <key file path\> with the file path you created in the previous step.

    For example, if your Data Loader password is myP4sswordsRock and your org's security token is 00DE0X0A0M0PeLE!AQcAQH0dMHEXAM, then the command is:

    ```

    ```

2.  Copy the generated encrypted password string. You use this value in a later step.

#### See Also

-   [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.")

-   [Step Three: Create the Field Mapping File](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_mapping_file.htm "In this step, you create a mapping file with an .sdl file extension. In each line of the mapping file, pair a data source with its destination.")

## Code Examples

```
encrypt.bat -e myP4sswordsRock00DE0X0A0M0PeLE!AQcAQH0dMHEXAM C:\Users\jjang\.dataloader\dataLoader.key
```

## Related Topics

- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
- Step Three: Create the Field Mapping File (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_mapping_file.htm)
