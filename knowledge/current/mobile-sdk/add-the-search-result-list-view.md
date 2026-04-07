---
title: "Add the Search Result List View"
domain: mobile-sdk
topic: add-the-search-result-list-view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.457Z
estimatedTokens: 278
keywords: [Add, Search, Result, View, doesn’t, template, simply, container, item, views, tracks, listItemViews, member, underlying, collection]
---

# Add the Search Result List View

> The view for the search result list doesn’t need a template. It is simply a container for
                list item views. It tracks these views in the listItemViews member. If the underlying collection changes, it
                re-renders itself.

# Add the Search Result List View

The view for the search result list doesn’t need a template. It is simply a container for list item views. It tracks these views in the listItemViews member. If the underlying collection changes, it re-renders itself.

1.  In the <script> block that contains the SearchPage view, extend Backbone.View to show a list of search view results. Add an array for list item views and an initialize() function.

    ```

    ```

    For the remainder of this procedure, add all code to the extend({}) block.

2.  Create the render() function. This function cleans up any existing list item views by calling close() on each one.

    ```

    ```

3.  Still in the render() function, create a set of list item views for the records in the underlying collection. Each of these views is just an entry in the list. You define app.views.UserListItemView later.

    ```

    ```

4.  Still in the render() function, append each list item view to the root DOM element and then return the rendered UserListView object.

    ```

    ```


## Example

Here’s the complete extension:

```

```

## Code Examples

```
app.views.UserListView = Backbone.View.extend({
    listItemViews: [],
    initialize: function() {
        this.model.bind("reset", this.render, this);
    },
```

```
render: function(eventName) {
    _.each(this.listItemViews, 
           function(itemView) { itemView.close(); });
```

```
this.listItemViews = _.map(this.model.models, function(model) { return new 
    app.views.UserListItemView({model: model}); });
```

```
$(this.el).append(_.map(this.listItemViews, function(itemView) {
    return itemView.render().el;} ));
    return this;
}
```

```
app.views.UserListView = Backbone.View.extend({
    
    listItemViews: [],
    
    initialize: function() {
        this.model.bind("reset", this.render, this);
    },
    render: function(eventName) {
        _.each(this.listItemViews, function(itemView) {
            itemView.close(); });
        this.listItemViews = _.map(this.model.models, 
            function(model) {
                return new app.views.UserListItemView(
                    {model: model}); });
        $(this.el).append(_.map(this.listItemViews, 
            function(itemView) { 
                return itemView.render().el;
            } ));
        return this;
    } 
});
```
