---
title: "Create a Mobile Sync Model
        and a Collection"
domain: mobile-sdk
topic: create-a-mobile-sync-model-and-a-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.446Z
estimatedTokens: 291
keywords: [Mobile, Sync, Model, Collection]
---

# Create a Mobile Sync Model
        and a Collection

# Create a Mobile Sync Model and a Collection

Now that we’ve configured the HTML infrastructure, let’s get started using Mobile Sync by extending two of its primary objects:

-   Force.SObject
-   Force.SObjectCollection

These objects extend Backbone.Model, so they support the Backbone.Model.extend() function. To extend an object using this function, pass it a JavaScript object containing your custom properties and functions.

1.  In the <body> tag, create a <script> object.
2.  In the <script> tag, create a model object for the Salesforce user sObject. Extend Force.SObject, and specify the sObject type and the fields we are targeting.

    ```

    ```

3.  Immediately after setting the User object, create a UserCollection object to hold user search results. Extend Force.SObjectCollection, and specify your new model (app.models.User) as the model for items in the collection.

    ```

    ```

4.  In this collection, implement a function named setCriteria that takes a search key and builds a SOQL query using it. You also need a getter to return the key at a later point.

    ```

    ```


## Example

Here’s the complete model code.

```

```

## Code Examples

```
app.models.User = Force.SObject.extend({
    sobjectType: "User",
    fieldlist: ["Id", "FirstName", "LastName", 
        "SmallPhotoUrl", "Title", "Email", 
        "MobilePhone","City"]
})
```

```
app.models.UserCollection = Force.SObjectCollection.extend({
    model: app.models.User,
    fieldlist: ["Id", "FirstName", "LastName", 
        "SmallPhotoUrl", "Title"],

});
```

```
<script>
    // The Models
    // ==========
    // The User Model
    app.models.User = Force.SObject.extend({
        sobjectType: "User",
        fieldlist: ["Id", "FirstName", 
            "LastName", "SmallPhotoUrl", 
            "Title", "Email", 
            "MobilePhone","City"]
    });

    // The UserCollection Model
    app.models.UserCollection = Force.SObjectCollection.extend({
        model: app.models.User
        fieldlist: ["Id", "FirstName", "LastName", 
            "SmallPhotoUrl", "Title"],

        getCriteria: function() {
            return this.key;
        },

        setCriteria: function(key) {
            this.key = key;
            this.config = {type:"soql", query:"SELECT " 
                + this.fieldlist.join(",")  
                + " FROM User"
                + " WHERE Name like '" + key + "%'"
                + " ORDER BY Name "
                + " LIMIT 25 "
            };
        }
    });
</script>
```

```
<script>
    // The Models

    // The User Model
    app.models.User = Force.SObject.extend({
        sobjectType: "User",
        fieldlist: ["Id", "FirstName", "LastName", 
            "SmallPhotoUrl", "Title", "Email", 
            "MobilePhone","City"]
    });

    // The UserCollection Model
    app.models.UserCollection = Force.SObjectCollection.extend({
        model: app.models.User
        fieldlist: ["Id", "FirstName", "LastName", 
            "SmallPhotoUrl", "Title"],

        getCriteria: function() {
            return this.key;
        },

        setCriteria: function(key) {
            this.key = key;
            this.config = {
                type:"soql", 
                query:"SELECT " + this.fieldlist.join(",")  
                + " FROM User"
                + " WHERE Name like '" + key + "%'"
                + " ORDER BY Name "
                + " LIMIT 25 "
             };
        }
    });
</script>
```
