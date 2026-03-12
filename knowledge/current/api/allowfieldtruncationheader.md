---
title: "AllowFieldTruncationHeader"
domain: api
topic: allowfieldtruncationheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.685Z
estimatedTokens: 855
keywords: [AllowFieldTruncationHeader, too, large, operation, fails, strings, truncated, API, Calls, Sample, Code—Java]
---

# AllowFieldTruncationHeader

> Specifies that for some fields, when a string is too
      large, the operation fails. Without the header, strings for these fields are
    truncated.

# AllowFieldTruncationHeader

Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.

The AllowFieldTruncationHeader header affects the following datatypes:

-   anyType, if it represents one of the other datatypes in this list
-   email
-   encryptedstring
-   multipicklist
-   phone
-   picklist
-   string
-   textarea

In API versions previous to 15.0, if a value for one of the listed fields is too large, the value is truncated.

For API version 15.0 and later, if a value is too large, the operation fails and the fault code STRING\_TOO\_LONG is returned. AllowFieldTruncationHeader allows you to specify that the previous behavior, truncation, be used instead of the new behavior in API versions 15.0 and later.

This header has no effect in versions 14.0 and earlier.

## API Calls

[convertLead()](atlas.en-us.api.meta/api/sforce_api_calls_convertlead.htm "Converts a Lead into another object."), [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help."), [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), and [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

Apex: [executeanonymous()](atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm)

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| allowFieldTruncation | boolean | If true, truncate field values that are too long, which is the behavior in API versions 14.0 and earlier.Default is false: no change in behavior. If a string or textarea value is too large, the operation fails and the fault code STRING_TOO_LONG is returned.The following list shows the field types affected by truncation and this header:anyType, if it represents one of the other datatypes in this listemailencryptedstringmultipicklistphonepickliststringtextarea |

## Sample Code—Java

To create an account with a name that is too long for the Name field, use the AllowFieldTruncation header.

This sample:

1.  Creates an Account object with a name that exceeds the field limit of 255 characters.
2.  Sends the create call, which fails because of the name field length.
3.  Sets the AllowFieldTruncationHeader to true and retries the account creation, which succeeds.

```

```

## Code Examples

```apex
public void allowFieldTruncationSample() {
  try {
    Account account = new Account();
    // Construct a string that is 256 characters long.
    // Account.Name's limit is 255 characters.
    String accName = "";
    for (int i = 0; i < 256; i++) {
      accName += "a";
    }
    account.setName(accName);
    // Construct an array of SObjects to hold the accounts.
    SObject[] sObjects = new SObject[1];
    sObjects[0] = account;
    // Attempt to create the account. It will fail in API version 15.0
    // and above because the account name is too long.
    SaveResult[] results = connection.create(sObjects);
    System.out.println("The call failed because: "
       + results[0].getErrors()[0].getMessage());
    // Now set the SOAP header to allow field truncation.
    connection.setAllowFieldTruncationHeader(true);
    // Attempt to create the account now.
    results = connection.create(sObjects);
    System.out.println("The call: " + results[0].isSuccess());
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- convertLead() (atlas.en-us.api.meta/api/sforce_api_calls_convertlead.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- process() (atlas.en-us.api.meta/api/sforce_api_calls_process.htm)
- undelete() (atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
- executeanonymous() (atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm)
