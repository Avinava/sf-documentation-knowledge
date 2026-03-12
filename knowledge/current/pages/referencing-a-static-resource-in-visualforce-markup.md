---
title: "Referencing a Static Resource in Visualforce Markup"
domain: pages
topic: referencing-a-static-resource-in-visualforce-markup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.150Z
estimatedTokens: 490
keywords: [Referencing, Resource, Visualforce, Markup]
---

# Referencing a Static Resource in Visualforce Markup

# Referencing a Static Resource in Visualforce Markup

The way you reference a static resource in Visualforce markup depends on whether you want to reference a stand-alone file, or whether you want to reference a file that is contained in an archive (such as a .zip or .jar file):

-   To reference a standalone file, use $Resource.<resource\_name> as a merge field, where <resource\_name> is the name you specified when you uploaded the resource. For example:

    ```

    ```

    or

    ```

    ```

-   To reference a file in an archive, use the URLFOR function. Specify the static resource name that you provided when you uploaded the archive with the first parameter, and the path to the desired file within the archive with the second. For example:

    ```

    ```

    or

    ```

    ```

-   You can use relative paths in files in static resource archives to refer to other content within the archive. For example, in your CSS file, named styles.css, you have the following style:

    ```

    ```

    When you use that CSS in a Visualforce page, you need to make sure the CSS file can find the image. To do that, create an archive (such as a zip file) that includes styles.css and img/testimage.gif. Make sure that the path structure is preserved in the archive. Then upload the archive file as a static resource named “style\_resources”. Then, in your page, add the following component:

    ```

    ```

    Since the static resource contains both the style sheet and the image, the relative path in the style sheet resolves and the image is displayed.
-   Through a custom controller, you can dynamically refer to the contents of a static resource using the <apex:variable\> tag. First, create the custom controller:

    ```

    ```

    Then, refer to the getImageName method in your <apex:variable\> tag:

    ```

    ```

    If the name of the image changes in the zip file, you can just change the returned value in getImageName.

## Code Examples

```
<apex:image url="{!$Resource.TestImage}" width="50" height="50"/>
```

```
<apex:includeScript value="{!$Resource.MyJavascriptFile}"/>
```

```
<apex:image url="{!URLFOR($Resource.TestZip,
                    'images/Bluehills.jpg')}" width="50" height="50"/>
```

```
<apex:includeScript value="{!URLFOR($Resource.LibraryJS, '/base/subdir/file.js')}"/>
```

```
table { background-image: url('img/testimage.gif') }
```
