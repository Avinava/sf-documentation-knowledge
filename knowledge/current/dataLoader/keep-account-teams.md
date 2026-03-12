---
title: "Keep Account Teams"
domain: dataLoader
topic: keep-account-teams
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.284Z
estimatedTokens: 405
keywords: [Keep, Account, Teams, Configure, Data, Loader, mass, updating, Owners]
---

# Keep Account Teams

> Configure Data Loader to keep Account Teams when mass updating Account
  Owners.

# Keep Account Teams

Configure Data Loader to keep Account Teams when mass updating Account Owners.

To keep Account Teams intact when mass-updating account owners

1.  Use Data Loader version 56.0.3 or later.
2.  Close Data Loader. It's important to make the following changes only with Data Loader closed.
3.  Open the config.properties file.

    The config.properties file is in the configs default configuration directory, which is installed in these locations.

    -   macOS: /Users/{userName}/dataloader/version/configs
    -   Windows: C:\\Users\\{userName}\\dataloader\\version\\configs
4.  In the config.properties file, set the property sfdc.useBulkApi=false
5.  In the config.properties file, set the property process.keepAccountTeam=true
6.  Save and close the config.properties file.
7.  To start Data Loader, double-click the Data Loader icon on your Desktop or in your Applications folder.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

To keep Account Teams intact, the uploaded .csv file must have the same value for all Current Account owner records. Likewise, the New Account Owner records must all have the same value. Otherwise, the operation fails and the Account Owners are not updated. For example, if the current Account owner of all records is "John Doe" and the new Account owner of all records is "Jane Smith" in a csv file, the operation succeeds if there are no other issues. However, if all records have "John Doe" as the current Account owner and the new Account owner of all but one record is "Jane Smith", the operation fails.
