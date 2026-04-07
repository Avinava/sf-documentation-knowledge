---
title: "Define a Router"
domain: mobile-sdk
topic: define-a-router
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.830Z
estimatedTokens: 294
keywords: [Define, Router, Backbone, navigation, paths, among, views, routers]
---

> A Backbone router defines navigation paths among views.
To learn more about routers, see What is a router?

# Define a Router

A Backbone router defines navigation paths among views. To learn more about routers, see [What is a router?](http://backbonetutorials.com/what-is-a-router/ "HTML (New Window)")

1.  In the final <script> block, define the application router by extending Backbone.StackRouter.

    ```

    ```

    For the remainder of this procedure, add all code in the extend({}) block.

2.  Because the app supports a search list page and a user page, add a route for each page inside a routes object. Also add a route for the main container page ("").

    ```

    ```

3.  Define an initialize() function that creates the search results collection and the search page and user page views.

    ```

    ```

4.  Define the list() function for handling the only item in this route. Call slidePage() to show the search results page right away—when data arrives, the list redraws itself.

    ```

    ```

5.  Define a viewUser() function that fetches and displays details for a specific user.

    ```

    ```

6.  After saving the file, run the cordova prepare command.
7.  Run the application.

## Example

You’ve finished! Here’s the entire application:

```

```

## Code Examples

```
app.Router = Backbone.StackRouter.extend({

});
```

```
routes: {
    "": "list",
    "list": "list",
    "users/:id": "viewUser"
},
```

```
initialize: function() {
    Backbone.Router.prototype.initialize.call(this);

    // Collection behind search screen
    app.searchResults = new app.models.UserCollection();

    app.searchPage = new app.views.SearchPage(
        {model: app.searchResults});
    app.userPage = new app.views.UserPage();
},
```

```
list: function() {
   app.searchResults.fetch();
   this.slidePage(app.searchPage);
},
```

```
viewUser: function(id) {
    var that = this;
    var user = new app.models.User({Id: id});
    user.fetch({
        success: function() {
            app.userPage.model = user;
            that.slidePage(app.userPage);
        }
    });
}
```
