---
title: "Force.RemoteObjectCollection Class"
domain: mobile-sdk
topic: forceremoteobjectcollection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.077Z
estimatedTokens: 593
keywords: [Force.RemoteObjectCollection, support, collections, fetched, objects, Mobile, Sync, introduces, abstract, serves, layer, abstraction, Force.SObjectCollection, Backbone.Collection, Instead]
---

# Force.RemoteObjectCollection Class

> To support collections of fetched objects, Mobile Sync
            introduces the Force.RemoteObjectCollection
            abstract class. This class serves as a layer of abstraction between Force.SObjectCollection and Backbone.Collection.
            Instead of directly subclassing Backbone.Collect

# Force.RemoteObjectCollection Class

To support collections of fetched objects, Mobile Sync introduces the Force.RemoteObjectCollection abstract class. This class serves as a layer of abstraction between Force.SObjectCollection and Backbone.Collection. Instead of directly subclassing Backbone.Collection, Force.SObjectCollection now subclasses Force.RemoteObjectCollection, which in turn subclasses Backbone.Collection. Force.RemoteObjectCollection does everything Force.SObjectCollection formerly did except communicate with the server.

## Implementing Custom Endpoints with fetchRemoteObjectFromServer()

The RemoteObject.fetchRemoteObjectFromServer() prototype method handles server interactions. This method uses the REST API to run SOQL/SOSL and MRU queries. If you want to use arbitrary server end points, create a subclass of Force.RemoteObjectCollection and implement fetchRemoteObjectFromServer(). This method is called when you call fetch() on an object of your subclass, if the object is currently configured to fetch from the server.

When the app.models.FileCollection.fetchRemoteObjectsFromServer() function returns, it promises an object containing valuable information and useful functions that use metadata from the response. This object includes:

-   totalSize: The number of files in the returned collection

-   records: The collection of returned files

-   hasMore: A function that returns a boolean value that indicates whether you can retrieve another page of results

-   getMore: A function that retrieves the next page of results (if hasMore() returns true)

-   closeCursor: A function that indicates that you’re finished iterating through the collection


These functions leverage information contained in the server response, including Files.length and nextPageUrl.

## Example

The HybridFileExplorer sample application also demonstrates how to use Force.RemoteObjectCollection. This example calls the Connect REST API to iterate over a list of files. It supports three REST operations: ownedFilesList, filesInUsersGroups, and filesSharedWithUser.

You can write functions such as hasMore() and getMore(), shown in this example, to navigate through pages of results. However, since apps don’t call fetchRemoteObjectsFromServer() directly, you capture the returned promise object when you call fetch() on your collection object.

```

```

## Code Examples

```
app.models.FileCollection = Force.RemoteObjectCollection.extend({
    model: app.models.File,

    setCriteria: function(key) {
        this.config = {type:key};
    },

    fetchRemoteObjectsFromServer: function(config) {
        var fetchPromise;
        switch(config.type) {
            case "ownedFilesList": fetchPromise = 
                Force.forceJsClient.ownedFilesList("me", 0); 
                break;
            case "filesInUsersGroups": fetchPromise = 
                Force.forceJsClient.
                    filesInUsersGroups("me", 0); 
                break;
            case "filesSharedWithUser": fetchPromise = 
                Force.forceJsClient.
                    filesSharedWithUser("me", 0); 
                break;
        };

        return fetchPromise
            .then(function(resp) { 
                var nextPageUrl = resp.nextPageUrl;
                return {
                    totalSize: resp.files.length,
                    records: resp.files,
                    hasMore: function() { 
                        return nextPageUrl != null; },
                    getMore: function() {
                        var that = this;
                        if (!nextPageUrl) 
                            return null;
                        return 
                            forceJsClient.queryMore(nextPageUrl)
                            .then(function(resp) {
                                nextPageUrl = resp.nextPageUrl;
                                that.records.
                                    pushObjects(resp.files);
                                return resp.files;
                        });
                    },
                    closeCursor: function() {
                        return $.when(function() { 
                                        nextPageUrl = null; 
                                      });
                    }
                };
            });
    }
});
```
