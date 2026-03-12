---
title: "AllOrNoneHeader"
domain: tooling-api
topic: allornoneheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:43.617Z
estimatedTokens: 424
keywords: [AllOrNoneHeader, call, roll, back, changes, unless, records, processed, successfully, API, Calls, Sample, Code—Java]
---

# AllOrNoneHeader

> Allows a call to roll back all changes unless all records
      are processed successfully.

# AllOrNoneHeader

Allows a call to roll back all changes unless all records are processed successfully.

Without the AllOrNoneHeader header, records without errors are committed, while records with errors are marked as failed in the call results. This header is available in API version 20.0 and later.

Even if the header is enabled, it's still necessary to inspect the success field in the call result for each record to identify records with errors. Each success field contains true or false indicating whether the call was processed successfully.

If there is an error associated with at least one record, the errors field in the call result for the record gives more information on the error. If other records in the same call have no errors, their errors fields indicate that they were rolled back due to other errors.

## API Calls

create(), delete(), undelete(), update(), upsert()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| allOrNone | boolean | If true, any failed records in a call cause all changes for the call to be rolled back. Record changes aren't committed unless all records are processed successfully.The default is false. Some records can be processed successfully while others are marked as failed in the call results. |

## Sample Code—Java

This sample shows how to use the AllOrNoneHeader. It attempts to create two contacts. The second contact doesn’t have all required fields set and causes a failure on creation. Next, the sample sets the allOrNone field to true, and then attempts to create the contacts. Creating one of the contacts results in an error, so the entire transaction is rolled back and no contacts are created.

```

```

## Code Examples

```apex
public void allOrNoneHeaderSample() {
    try {
      // Create the first contact.
      SObject[] sObjects = new SObject[2];
      Contact contact1 = new Contact();
      contact1.setFirstName("Robin");
      contact1.setLastName("Van Persie");
  
      // Create the second contact. This contact doesn't 
      // have a value for the required
      // LastName field so the create will fail.
      Contact contact2 = new Contact();
      contact2.setFirstName("Ashley");
      sObjects[0] = contact1;
      sObjects[1] = contact2;
      
      // Set the SOAP header to roll back the create unless
      // all contacts are successfully created.
      connection.setAllOrNoneHeader(true);
      // Attempt to create the two contacts.
      SaveResult[] sr = connection.create(sObjects);
      for (int i = 0; i < sr.length; i++) { 
        if (sr[i].isSuccess()) {
          System.out.println("Successfully created contact with id: " + 
            sr[i].getId() + ".");
        }
        else {
          // Note the error messages as the operation was rolled back 
          // due to the all or none header.
          System.out.println("Error creating contact: " + 
            sr[i].getErrors()[0].getMessage());
          System.out.println("Error status code: " + 
            sr[i].getErrors()[0].getStatusCode());
        }
      }
    } catch (ConnectionException ce) {
      ce.printStackTrace();
    }
  }
}
```
