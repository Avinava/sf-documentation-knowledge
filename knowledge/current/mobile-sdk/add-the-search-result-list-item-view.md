---
title: "Add the Search Result List Item View"
domain: mobile-sdk
topic: add-the-search-result-list-item-view
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.817Z
estimatedTokens: 334
keywords: [Add, Search, Result, Item, View]
---

# Add the Search Result List Item View

To define the search result list item view, you design and implement the view of a single row in a list. Each list item displays the following user fields:

-   SmallPhotoUrl
-   FirstName
-   LastName
-   Title

1.  Immediately after the UserListView view definition, create the view for the search result list item. Once again, extend Backbone.View and indicate that this view is a list item by defining the tagName member. For the remainder of this procedure, add all code in the extend({}) block.

    ```

    ```

2.  Add an <li> tag.

    ```

    ```

3.  Load the template by calling \_.template() with the raw content of the user-list-item script.

    ```

    ```

4.  Add a render() function. The template() function, from underscore.js, takes JSON data and returns HTML crafted from the associated template. In this case, the function extracts the customer’s data from JSON and returns HTML that conforms to the user-list-item template. During the conversion to HTML, the template() function replaces free variables in the template with corresponding properties from the JSON data.

    ```

    ```

5.  Add a close() method to be called from the list view that does necessary cleanup and stops memory leaks.

    ```

    ```


## Example

Here’s the complete extension.

```

```

## Code Examples

```
app.views.UserListItemView = Backbone.View.extend({
    
});
```

```
app.views.UserListItemView = Backbone.View.extend({
    tagName: "li",
});
```

```
template: _.template($("#user-list-item").html()),
```

```
render: function(eventName) {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
},
```

```
close: function() {
    this.remove();
    this.off();
}
```
