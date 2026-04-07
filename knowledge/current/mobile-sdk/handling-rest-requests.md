---
title: "Handling REST Requests"
domain: mobile-sdk
topic: handling-rest-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.507Z
estimatedTokens: 656
keywords: [Handling, REST, Requests, runtime, Mobile, SDK, creates, singleton, instance, RestClient, obtain, RestRequest, send, Salesforce, server]
---

> At runtime, Mobile SDK creates a singleton instance of RestClient. You use this instance to obtain a
                    RestRequest object and to send that object
                to the Salesforce server.

# Handling REST Requests

At runtime, Mobile SDK creates a singleton instance of RestClient. You use this instance to obtain a RestRequest object and to send that object to the Salesforce server.

Although you can use RestRequest objects for many CRUD operations, let’s look at the most common use case: SOQL queries. Most other types of requests use the same flow with different input values. By default, SOQL query requests return up to 2,000 records per batch. In Mobile SDK 9.1 and later, you can specify a batchSize argument to customize the maximum batch size. This argument accepts any integer value between 200 and 2,000. Specifying a batch size does not guarantee that the returned batch is the requested size.

To create and send a SOQL REST request to the Salesforce server:

1.  To create a request object, call the RestClient factory method that takes a SOQL query.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

2.  Send your new REST request object using the REST client instance.

    Swift

    Option 1

    Use the RestClient shared Combine publisher. For example, using the following request:

    ```

    ```

    Pass the request to the RestClient.shared.publisher. In case you’ve never encountered call chaining, the following code comments describe what happens in a typical publisher sequence. This code is from the fetchContactsForAccount method of the Swift template app’s ContactsForAccountModel class.

    ```

    ```

    Contact and ContactResponse are structs that represent, respectively, a Contact record, and the formatted REST response to the SOQL query. Both objects are declared “Decodable”.

    ```

    ```

    Do you see the beauty of using the RestClient publisher? You can send the request and handle the response in a single block of logic.

    Option 2

    Pass the request object to the send(request:\_:) method. Typically, Swift apps handle the asynchronous response in the trailing closure, as shown here.

    ```

    ```

    In the following alternate example, the calling object implements the RestClientDelegate protocol to handle responses. It therefore calls the send(request:delegate:) overload and passes itself as the delegate.

    ```

    ```

    Objective-C

    Pass the request object to the send: parameter of the send:delegate: method. Typically in Objective-C apps, the calling object handles the asynchronous response in its own implementation of the SFRestDelegate protocol, as shown here.

    ```

    ```

    See [Handling REST Responses](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm).

## Code Examples

```
let request = 
    = RestClient.shared.request(forQuery: "SELECT Name FROM Contact LIMIT 10", apiVersion: SFRestDefaultAPIVersion, batchSize: 500)
```

```
SFRestRequest *request = [[SFRestAPI sharedInstance]        
    requestForQuery:@"SELECT Name FROM Contact LIMIT 10"];
```

```
let request = RestClient.shared.request(forQuery: "SELECT id, firstName, 
    lastName, phone, email, mailingStreet, mailingCity, mailingState, 
    mailingPostalCode FROM Contact WHERE AccountID = '\(acct.id)'", 
    apiVersion: nil, batchSize: 500)
```

```
// Use the RestClient publisher to send the request and return the raw REST response
contactsCancellable = RestClient.shared.publisher(for: request) 
    // Receive the raw REST response object
    .receive(on: RunLoop.main) 

    // Try to convert the raw REST response to Data
    // Throw an error in the event of failure
    .tryMap({ (response) -> Data in  
        // Return the response as a Data byte buffer
        response.asData() 
    })

    // Decode the Data object as JSON to produce an array 
    // of Contacts formatted as a ContactResponse object
    .decode(type: ContactResponse.self, decoder: JSONDecoder()) 

    // Map the JSON array of Contacts
    .map({ (record) -> [Contact] in 
        // Copy the Contact array to the records 
        // member of ContactResponse
        record.records 
    })

    // If tryMap failed, check for errors on the most recent 
    // object in the chain
    .catch( { error in
        Just([])
    })

    // Store the array of contacts in the model’s published contacts
    // property for use by ContactsForAccountListView
    .assign(to: \.contacts, on:self)
```

```
struct Contact :  Identifiable, Decodable  {
    let id: UUID = UUID()
    let Id: String
    let FirstName: String?
    let LastName: String?
    let PhoneNumber: String?
    let Email: String?
    let MailingStreet: String?
    let MailingCity: String?
    let MailingState: String?
    let MailingPostalCode: String?
}

struct ContactResponse: Decodable {
    var totalSize: Int
    var done: Bool
    var records: [Contact]
}
```

## Related Topics

- Handling REST Responses (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm)
