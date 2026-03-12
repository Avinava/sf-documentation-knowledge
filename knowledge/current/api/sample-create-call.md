---
title: "Sample create Call"
domain: api
topic: sample-create-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.776Z
estimatedTokens: 224
keywords: [Sample, Call, Java, examples, show, how, partner, WSDL, creates, contact, record, several, iterates, results, checks]
---

# Sample create Call

> The following Java and C# examples show how to use the create() call for
            the partner WSDL. Each example creates a contact record with several fields. It iterates
            through the results of the create call and checks whether the operation was successful
            or not. If the 

# Sample create Call

The following Java and C# examples show how to use the [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.") call for the partner WSDL. Each example creates a contact record with several fields. It iterates through the results of the create call and checks whether the operation was successful or not. If the create operation was successful, it writes the ID of the contact created to the console. Otherwise, it iterates through the errors and writes details of each error to the console. In this case, the output of the example is the ID of the new contact.

To execute the sample method, you can use the corresponding Java or C# template class provided in [Examples Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner_examples.htm).

## Java Example

```

```

## C# Example

```

```

## Code Examples

```apex
public String createSample() {
    String result = null;
    try {
        // Create a new sObject of type Contact
           // and fill out its fields.
        SObject contact = new SObject();
        contact.setType("Contact");
        contact.setField("FirstName", "Otto");
        contact.setField("LastName", "Jespersen");
        contact.setField("Salutation", "Professor");
        contact.setField("Phone", "(999) 555-1234");
        contact.setField("Title", "Philologist");
    
        // Add this sObject to an array 
        SObject[] contacts = new SObject[1];
        contacts[0] = contact;
        // Make a create call and pass it the array of sObjects
        SaveResult[] results = partnerConnection.create(contacts);
    
        // Iterate through the results list
        // and write the ID of the new sObject
        // or the errors if the object creation failed.
        // In this case, we only have one result
        // since we created one contact.
        for (int j = 0; j < results.length; j++) {
            if (results[j].isSuccess()) {
                result = results[j].getId();
                System.out.println(
                    "
A contact was created with an ID of: " + result
                );
             } else {
                // There were errors during the create call,
                // go through the errors array and write
                // them to the console
                for (int i = 0; i < results[j].getErrors().length; i++) {
                    Error err = results[j].getErrors()[i];
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
    return result;
}
```

```apex
public void createSample()
{
    try
    {
        // Create a new sObject of type Contact
        // and fill out its fields.
        sObject contact = new sforce.sObject();
        System.Xml.XmlElement[] contactFields = new System.Xml.XmlElement[6];

        // Create the contact's fields
        System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
        contactFields[0] = doc.CreateElement("FirstName");
        contactFields[0].InnerText = "Otto";
        contactFields[1] = doc.CreateElement("LastName");
        contactFields[1].InnerText = "Jespersen";
        contactFields[2] = doc.CreateElement("Salutation");
        contactFields[2].InnerText = "Professor";
        contactFields[3] = doc.CreateElement("Phone");
        contactFields[3].InnerText = "(999) 555-1234";
        contactFields[4] = doc.CreateElement("Title");
        contactFields[4].InnerText = "Philologist";

        contact.type = "Contact";
        contact.Any = contactFields;

        // Add this sObject to an array
        sObject[] contactList = new sObject[1];
        contactList[0] = contact;

        // Make a create call and pass it the array of sObjects 
        SaveResult[] results = binding.create(contactList);
        // Iterate through the results list
        // and write the ID of the new sObject
        // or the errors if the object creation failed.
        // In this case, we only have one result
        // since we created one contact.
        for (int j = 0; j < results.Length; j++)
        {
            if (results[j].success)
            {
                Console.Write("
A contact was created with an ID of: "
                                + results[j].id);
            }
            else
            {
                // There were errors during the create call,
                // go through the errors array and write
                // them to the console
                for (int i = 0; i < results[j].errors.Length; i++)
                {
                    Error err = results[j].errors[i];
                    Console.WriteLine("Errors were found on item " + j.ToString());
                    Console.WriteLine("Error code is: " + err.statusCode.ToString());
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

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- Examples Using the Partner
                WSDL (atlas.en-us.api.meta/api/sforce_api_partner_examples.htm)
