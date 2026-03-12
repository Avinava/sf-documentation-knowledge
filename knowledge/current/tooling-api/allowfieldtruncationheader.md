---
title: "AllowFieldTruncationHeader"
domain: tooling-api
topic: allowfieldtruncationheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.622Z
estimatedTokens: 493
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

convertLead(), create(), merge(), process(), undelete(), update(), and upsert()

Apex: executeanonymous()

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
