---
title: "Edit the Application HTML File"
domain: mobile-sdk
topic: edit-the-application-html-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.430Z
estimatedTokens: 242
keywords: [Edit, Application, HTML, File, app’s, basic, structure, define, empty, references, links, code, infrastructure]
---

# Edit the Application HTML File

> To create your app’s basic structure, define an
empty HTML page that contains references, links, and code infrastructure.

# Edit the Application HTML File

To create your app’s basic structure, define an empty HTML page that contains references, links, and code infrastructure.

1.  From the www folder, open UserSearch.html in your code editor and delete all its contents.
2.  Delete the contents and add the following basic structure:

    ```

    ```

3.  In the <head> element:
    1.  Specify that the page title is “Users”.

        ```

        ```

    2.  Turn off scaling to make the page look like an app rather than a web page.

        ```

        ```

    3.  Provide a mobile “look” by adding links to the styles.css and ratchet.css files.

        ```

        ```

4.  Now let’s start adding content to the body. In the <body> block, add an empty div tag, with ID set to “content”, to contain the app’s generated UI.

    ```

    ```

5.  Include the necessary JavaScript files.

    ```

    ```


## Example

Here’s the complete application to this point.

```

```

## Code Examples

```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

```
<title>Users</title>
```

```
<meta name="viewport" content="width=device-width, initial-scale=1.0,
    maximum-scale=1.0, user-scalable=no;" />
```

```
<link rel="stylesheet" href="css/styles.css"/>
<link rel="stylesheet" href="css/ratchet.css"/>
```

```
<body>
<div id="content"></div>
```
