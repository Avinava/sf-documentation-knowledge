---
title: "Populating a Soup"
domain: mobile-sdk
topic: populating-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.742Z
estimatedTokens: 512
keywords: [Populating, Soup, add, Salesforce, records, offline, access, REST, API, conjunction, SmartStore, APIs, Hybrid, Apps, iOS]
---

# Populating a Soup

> To add Salesforce records to a
        soup for offline access, use the REST API in conjunction with SmartStore APIs.

# Populating a Soup

To add Salesforce records to a soup for offline access, use the REST API in conjunction with SmartStore APIs.

When you register a soup, you create an empty named structure in memory that’s waiting for data. You typically initialize the soup with data from a Salesforce organization. To obtain the Salesforce data, you use Mobile SDK’s standard REST request mechanism. When a successful REST response arrives, you extract the data from the response object and then upsert it into your soup.

## Hybrid Apps

Hybrid apps use SmartStore functions defined in the force.js library. In this example, the click handler for the Fetch Contacts button calls force.query() to send a simple SOQL query ("SELECT Name, Id FROM Contact") to Salesforce. This call designates onSuccessSfdcContacts(response) as the callback function that receives the REST response. The onSuccessSfdcContacts(response) function iterates through the returned records in response and populates UI controls with Salesforce values. Finally, it upserts all records from the response into the sample soup.

```

```

## iOS Native Apps

iOS native apps use the SFRestAPI protocol for REST API interaction. The following code creates and sends a REST request for the SOQL query SELECT Name, Id, OwnerId FROM Account. If the request is successful, Salesforce sends the REST response to the requestForQuery:send:delegate: delegate method. The response is parsed, and each returned record is upserted into the SmartStore soup.

```

```

## Android Native Apps

For REST API interaction, Android native apps typically use the RestClient.sendAsync() method with an anonymous inline definition of the AsyncRequestCallback interface. The following code creates and sends a REST request for the SOQL query SELECT Name, Id, OwnerId FROM Account. If the request is successful, Salesforce sends the REST response to the provided AsyncRequestCallback.onSuccess() callback method. The response is parsed, and each returned record is upserted into the SmartStore soup.

```

```

## Code Examples

```
force.query("SELECT Name,Id FROM Contact", 
    onSuccessSfdcContacts, onErrorSfdc); var sfSmartstore = function() {
    return cordova.require("com.salesforce.plugin.smartstore");};
function onSuccessSfdcContacts(response) {
    logToConsole()("onSuccessSfdcContacts: received " + 
        response.totalSize + “ contacts");
    var entries = [];
    
    response.records.forEach(function(contact, i) {
           entries.push(contact);
    });
    
    if (entries.length > 0) {
        sfSmartstore().upsertSoupEntries(CONTACTS_SOUP_NAME,
            entries,
            function(items) {
                var statusTxt = "upserted: " + items.length + 
                    " contacts";
                logToConsole()(statusTxt);
            }, 
         onErrorUpsert);
    }
}

function onErrorSfdc(param) {
    logToConsole()("onErrorSfdc: " + param);
}function onErrorUpsert(param) {
    logToConsole()("onErrorUpsert: " + param);
}
```

```
- (void)requestAccounts
{
    SFRestRequest *request = [[SFRestAPI sharedInstance] 
        requestForQuery:@"SELECT Name, Id, OwnerId FROM Account"];
    [[SFRestAPI sharedInstance] send:request delegate:self];
}

//SFRestAPI protocol for successful response
- (void)request:(SFRestRequest *)request didLoadResponse:(id)dataResponse
{
    NSArray *records = dataResponse[@"records"];
    if (nil != records) {
        for (int i = 0; i < records.count; i++) {
            [self.store upsertEntries:@[records[i]] 
                               toSoup:kAccountSoupName];
        }
    }
}
```

```apex
private void sendRequest(String soql, final String obj) 
throws UnsupportedEncodingException {
    final RestRequest restRequest = 
        RestRequest.getRequestForQuery(
            getString(R.string.api_version), 
            "SELECT Name, Id, OwnerId FROM Account", "Account");
    client.sendAsync(restRequest, new AsyncRequestCallback() {
        @Override
        public void onSuccess(RestRequest request, 
            RestResponse result) {
            // Consume before going back to main thread
            // Not required if you don't do main (UI) thread tasks here
            result.consumeQuietly();
            runOnUiThread(new Runnable() {
                @Override
                public void run() {            
                    // Network component doesn’t report app layer status.
                    // Use the Mobile SDK RestResponse.isSuccess() method to check  
                    // whether the REST request itself succeeded.
                    if (result.isSuccess()) {
                        try {
                            final JSONArray records = 
                                result.asJSONObject().getJSONArray("records");
                            insertAccounts(records);
                        } catch (Exception e) {
                            onError(e);
                        } finally {
                            Toast.makeText(MainActivity.this, 
                                "Records ready for offline access.",
                                Toast.LENGTH_SHORT).show();
                        }
                    }
                }
            });   
        }
        
        @Override
        public void onError(Exception e) {
            // You might want to log the error 
            // or show it to the user
        }
    });
}	

/**
 * Inserts accounts into the accounts soup.
 *
 * @param accounts Accounts.
 */
public void insertAccounts(JSONArray accounts) {
    try {
        if (accounts != null) {
            for (int i = 0; i < accounts.length(); i++) {
                if (accounts[i] != null) {
                    try {
                        smartStore.upsert(
                            ACCOUNTS_SOUP, accounts[i]);
                    } catch (JSONException exc) {
                        Log.e(TAG, 
                            "Error occurred while attempting "
                            + "to insert account. Please verify "
                            + "validity of JSON data set.");
                    }
                }
            }
        }
    } catch (JSONException e) {
        Log.e(TAG, "Error occurred while attempting to "
            + "insert accounts. Please verify validity "
            + "of JSON data set.");
    }
}
```
