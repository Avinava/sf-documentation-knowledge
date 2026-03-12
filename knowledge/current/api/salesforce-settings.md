---
title: "Salesforce Settings"
domain: api
topic: salesforce-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.771Z
estimatedTokens: 605
keywords: [Salesforce, Settings, processing, place, database, Setting, correctly, help, process, quickly, possible]
---

# Salesforce Settings

> Most processing takes place in the database. Setting these parameters correctly will help the
      database process as quickly as possible:

# Salesforce Settings

Most processing takes place in the database. Setting these parameters correctly will help the database process as quickly as possible:

-   **Enable or Disable the Most Recently Used (MRU) functionality.** Records marked as most recently used (MRU) are listed in the “Recent Items” section of the sidebar in the Salesforce user interface. Check that you are not enabling it for calls where it is not needed.

    In API version 7.0 and above, MRU functionality is disabled by default. To enable the MRU functionality, create this header and set the [updateMru](atlas.en-us.api.meta/api/sforce_api_header_mruheader.htm#updatemru) to true. The following sample shows how to use MRU functionality:

    ```

    ```


-   **Log in as a user with the “Modify All Data” permission to avoid sharing rules.** If the client application logs in as a user who has access to data via a sharing rule, then the API must issue an extra query to check access. To avoid this, log in as a user with the “Modify All Data” permission. In general, fewer sharing rules quickens load speeds, as there are fewer operations that have to be performed when setting properties such as ownership.

    Alternatively, you can set organization-wide defaults for some objects as public read/write for the duration of the load. For more information, see “Set Your Internal Organization-Wide Sharing Defaults” in the Salesforce online help.

-   **Avoid workflow or assignment rules.** Anything that causes a post-operation action slows down the load. You can temporarily disable automatic rules if the loaded objects are exempt from them.
-   **Avoid triggering cascading updates.** For example, if you update the owner of an account, the contacts and opportunities associated with that account may also require updates. Instead of updating a single object, the client application must access multiple objects, which slows down the load.

The Lightning Platform Data Loader is a good reference for data loading. It disables the MRU, uses HTTP/1.1 persistent connections, and applies GZIP compression on the request and response. If you are performing a data load, or are looking at a place to start when writing your own Java integration, the Lightning Platform Data Loader can serve as a fast and reliable solution. For more information about the Lightning Platform Data Loader, see: Data Loader in the Salesforce online help.

## Code Examples

```apex
public void mruHeaderSample() {
  connection.setMruHeader(true);
  Account account = new Account();
  account.setName("This will be in the MRU");
  try {
    SaveResult[] sr = connection.create(new SObject[]{account});
    System.out.println("ID of account added to MRU: " + 
      sr[0].getId());
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- updateMru (atlas.en-us.api.meta/api/sforce_api_header_mruheader.htm)
