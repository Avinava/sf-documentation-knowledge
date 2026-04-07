---
title: "Add the User View"
domain: mobile-sdk
topic: add-the-user-view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.487Z
estimatedTokens: 197
keywords: [Add, User, View, Finally, simple, displays, selected, customer’s, second, app, customer, navigates, tapping, item, Users]
---

# Add the User View

> Finally, you add a simple page view that displays a selected customer’s details. This
                view is the second page in this app. The customer navigates to it by tapping an item
                in the Users list view. The user-page template
                defines a Back button that returns

# Add the User View

Finally, you add a simple page view that displays a selected customer’s details. This view is the second page in this app. The customer navigates to it by tapping an item in the Users list view. The user-page template defines a **Back** button that returns the customer to the search list.

1.  Immediately after the UserListItemView view definition, create the view for a customer’s details. Extend Backbone.View again. For the remainder of this procedure, add all code in the extend({}) block.

    ```

    ```

2.  Specify the template to be instantiated.

    ```

    ```

3.  Implement a render() function. This function re-reads the model and converts it first to JSON and then to HTML.

    ```

    ```


## Example

Here’s the complete extension.

```

```

## Code Examples

```
app.views.UserPage = Backbone.View.extend({
    
});
```

```
app.views.UserPage = Backbone.View.extend({
    template: _.template($("#user-page").html()),
});
```

```
app.views.UserPage = Backbone.View.extend({
    template: _.template($("#user-page").html()),

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
```

```
app.views.UserPage = Backbone.View.extend({
    template: _.template($("#user-page").html()),
    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
```
