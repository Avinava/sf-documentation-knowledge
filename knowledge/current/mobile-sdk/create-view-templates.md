---
title: "Create View Templates"
domain: mobile-sdk
topic: create-view-templates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.856Z
estimatedTokens: 399
keywords: [View, Templates, let, describe, HTML, layout, container, define, inline, template, <script>, tag, “text, template”, JavaScript, code, apply, design, instantiates, new, runtime]
---

> Templates let you describe an HTML layout within a container HTML page. To define an inline
        template in your HTML page, you use a <script> tag
        of type “text/template”. JavaScript code can apply your template to the page
        design when it instantiates a new HTML page at runtime.

# Create View Templates

Templates let you describe an HTML layout within a container HTML page. To define an inline template in your HTML page, you use a <script> tag of type “text/template”. JavaScript code can apply your template to the page design when it instantiates a new HTML page at runtime.

The search-page template is simple. It includes a header, a search field, and a list to hold the search results. At runtime, the search page instantiates the user-list-item template to render the results list. When a customer clicks a list item, the list instantiates the user-page template to show user details.

1.  Add a template script block with an ID set to “search-page”. Place the block within the <body> block after the “content” <div> tag.

    ```

    ```

2.  In the new <script> block, define the search page HTML template using Ratchet styles.

    ```

    ```

3.  Add a second script block for a user list template.

    ```

    ```

4.  Define the user list template. Notice that this template contains references to the SmallPhotoUrl, FirstName, LastName, and Title fields from the Salesforce user record. References that use the <%= *varname* %> format are called “free variables” in Ratchet apps.

    ```

    ```

5.  Add a third script block for a user details template.

    ```

    ```

6.  Add the template body. Notice that this template contains references to the SmallPhotoUrl, FirstName, LastName, and Title fields from the Salesforce user record. References that use the <%= *varname* %> format in Ratchet apps are called “free variables”.

    ```

    ```

## Code Examples

```
<script id="search-page" type="text/template">
</script>
```

```
<script id="search-page" type="text/template">
  <header class="bar-title">
    <h1 class="title">Users</h1>
  </header>

  <div class="bar-standard bar-header-secondary">
    <input type="search" class="search-key" 
        placeholder="Search"/>
  </div>

  <div class="content">
    <ul class="list"></ul>
  </div>
</script>
```

```
<script id="user-list-item" type="text/template">
</script>
```

```
<script id="user-list-item" type="text/template">
  <a href="#users/<%= Id %>" class="pad-right">
    <img src="<%= SmallPhotoUrl %>" class="small-img" />
    <div class="details-short">
      <b><%= FirstName %> <%= LastName %></b><br/>
      Title<%= Title %>
    </div>
  </a>
</script>
```

```
<script id="user-page" type="text/template">
</script>
```
