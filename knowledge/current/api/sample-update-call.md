---
title: "Sample update() Call"
domain: api
topic: sample-update-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.794Z
estimatedTokens: 333
keywords: [Sample, Call, Java, examples, show, how, Partner, WSDL]
---

# Sample update() Call

> These Java and C# examples show how to use the update() call for the Partner WSDL.

# Sample update() Call

These Java and C# examples show how to use the update() call for the Partner WSDL.

Each example takes the ID of the contact to [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data.") as an argument. It creates two sObject records of type Contact—one to hold the valid passed in ID and the other has an invalid ID. Next, it sets a new phone number for the valid contact and null for the last name of the invalid contact. It then makes the update call and iterates through the results. For a successful update operation, it writes the ID of the contact that got updated. For a failed update operation, it writes the details of all returned errors to the console. In this case, the output is the ID of the contact that was successfully updated and an error for the invalid contact update.

To execute the sample method, you can use the corresponding Java or C# template class provided in [Examples Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner_examples.htm).

## Java Example

```

```

For more information about setFieldsToNull (or its equivalent in client tools other than WSC), see [fieldsToNull](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421117).

## C# Example

```

```

## Code Examples

```apex
public void updateSample(String id) {
  try {
      // Create an sObject of type contact
      SObject updateContact = new SObject();
      updateContact.setType("Contact");
      
      // Set the ID of the contact to update
      updateContact.setId(id);
      // Set the Phone field with a new value
      updateContact.setField("Phone", "(415) 555-1212");

      // Create another contact that will cause an error
      // because it has an invalid ID.
      SObject errorContact = new SObject();
      errorContact.setType("Contact");
      // Set an invalid ID on purpose
      errorContact.setId("SLFKJLFKJ");      
      // Set the value of LastName to null
      errorContact.setFieldsToNull(new String[] {"LastName"});

      // Make the update call by passing an array containing
      // the two objects. 
      SaveResult[] saveResults = partnerConnection.update(
         new SObject[] {updateContact, errorContact}
      );
      // Iterate through the results and write the ID of 
      // the updated contacts to the console, in this case one contact.
      // If the result is not successful, write the errors
      // to the console. In this case, one item failed to update.
      for (int j = 0; j < saveResults.length; j++) {
          System.out.println("
Item: " + j);
          if (saveResults[j].isSuccess()) {
              System.out.println("Contact with an ID of " +
                      saveResults[j].getId() + " was updated.");
          }
          else {                        
            // There were errors during the update call,
            // go through the errors array and write
            // them to the console.
            for (int i = 0; i < saveResults[j].getErrors().length; i++) {
              Error err = saveResults[j].getErrors()[i];
              System.out.println("Errors were found on item " + j);
              System.out.println("Error code: " + 
                  err.getStatusCode().toString());
              System.out.println("Error message: " + err.getMessage());
            }
          }      
      }      
  } catch (ConnectionException ce) {
      ce.printStackTrace();
  }
}
```

```apex
public void updateSample(String id) {
    try
    {
        // Create an sObject of type contact
        sObject updateContact = new sObject();
        updateContact.type = "Contact";
      
        // Set the ID of the contact to update
        updateContact.Id = id;
        // Set the Phone field to a new value.
        // The Phone field needs to be created as an XML element.
        System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
        System.Xml.XmlElement phoneField = doc.CreateElement("Phone");
        phoneField.InnerText = "(415) 555-1212";  
            
        // Add the Phone field to the contact
        updateContact.Any = new System.Xml.XmlElement[] {phoneField};

        // Create another contact that will cause an error
        // because it has an invalid ID.
        sObject errorContact = new sObject();
        errorContact.type = "Contact";
        // Set an invalid ID on purpose
        errorContact.Id = "SLFKJLFKJ";
        // Set the value of LastName to null
        errorContact.fieldsToNull = new String[] { "LastName" };

        // Make the update call by passing an array containing
        // the two objects.             
        SaveResult[] saveResults = binding.update(
            new sObject[] {updateContact, errorContact});
        // Iterate through the results and write the ID of 
        // the updated contacts to the console, in this case one contact.
        // If the result is not successful, write the errors
        // to the console. In this case, one item failed to update.
        for (int j = 0; j < saveResults.Length; j++) {
            Console.WriteLine("
Item: " + j);
            if (saveResults[j].success) 
            {
                Console.WriteLine("Contact with an ID of " +
                saveResults[j].id + " was updated.");
            }
            else 
            {                        
                // There were errors during the update call,
                // go through the errors array and write
                // them to the console.
                for (int i = 0; i < saveResults[j].errors.Length; i++) {
                    Error err = saveResults[j].errors[i];
                    Console.WriteLine("Errors were found on item " + j.ToString());
                    Console.WriteLine("Error code: " + 
                        err.statusCode.ToString());
                    Console.WriteLine("Error message: " + err.message);
                }
            }      
        }
    }
    catch (SoapException e)
    {
        Console.WriteLine("An unexpected error has occurred: " + e.Message +
            " Stack trace: " + e.StackTrace);
    }
}
```

## Related Topics

- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- Examples Using the Partner
                WSDL (atlas.en-us.api.meta/api/sforce_api_partner_examples.htm)
- fieldsToNull (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
