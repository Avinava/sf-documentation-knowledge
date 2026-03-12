---
title: "How  sforce.one Handles API Versions Handles API
            Versions"
domain: pages
topic: how-sforceone-handles-api-versions-handles-api-versions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.481Z
estimatedTokens: 1311
keywords: [How, sforce.one, Handles, API, Versions, frequently, improved, new, releases, maintain, backward, compatibility, version-specific, behavior, specific]
---

# How  sforce.one Handles API Versions Handles API
            Versions

> The sforce.one object is frequently improved
        in new releases. To maintain backward compatibility, sforce.one provides version-specific behavior, and you can use a specific
        version of sforce.one in your apps.

# How sforce.one Handles API Versions Handles API Versions

The sforce.one object is frequently improved in new releases. To maintain backward compatibility, sforce.one provides version-specific behavior, and you can use a specific version of sforce.one in your apps.

By default, sforce.one uses the same version as the API version of the requested Visualforce page. For example, if a Visualforce page has an API version of 30.0, JavaScript on that page that uses sforce.one by default uses the API version 30.0 of sforce.one.

This means that when a Visualforce page is updated to a new API version, the page automatically uses the updated version of sforce.one. In the preceding example, if that Visualforce page is updated to API version 31.0, app functionality that uses sforce.one uses the API version 31.0 of sforce.one.

If updated behavior in a new API version of sforce.one causes compatibility problems with the page’s features, you have three options for correcting the problem.

-   Revert the Visualforce page’s API version to the prior version. This action requires no code changes.
-   Update the code for the page’s features to fix the problem. This solution is best, but it might require some debugging, and it will definitely require code changes.
-   Use a specific version of sforce.one. This solution often requires minimal code changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

sforce.one was added in Winter ’14 (API version 29.0) and wasn’t versioned until Summer ’14 (API version 31.0). All versions of sforce.one earlier than version 31.0 are identical to version 31.0. You can specify a version of sforce.one for any version that’s valid for Visualforce, that is, from version 15.0 to the current API version.

## Using a Specific Version of sforce.one

To use a specific version of sforce.one, use the sforce.one.getVersion() function and provide it with the API version and a callback function that needs to use a specific version of sforce.one. The appropriate versions of sforce.one are automatically loaded by this call.

The signature for sforce.one.getVersion() is:

```

```

versionString is the API version that your application requires. It’s always two digits, a period, and one digit, such as “30.0”. Calls with invalid version strings fail silently.

callbackFunction is a JavaScript function that uses a specific version of sforce.one. sforce.one.getVersion() operates asynchronously, and your callback function is called when it finishes loading the requested version of sforce.one. Your callback function receives a single parameter, an sforce.one object for the specified API version. Use the object passed in instead of the global sforce.one to make calls to sforce.one that conform to the API version that your app requires.

## Examples of Using a Specific Version of sforce.one

The next examples all add a Create Account function to the following input button:

```

```

**Defaulting to the Visualforce Page’s API Version**

App code that should use the default version of sforce.one—the version that corresponds to the Visualforce Page’s API version—doesn’t need to ask for a version. Using that version happens automatically, and the code is straightforward.

```

```

App functionality is created in a MyApp object, and then an event handling function calls the app function when that event, a button click, occurs. Separating application functionality from application event handling is a best practice, and it sets you up for using version-specific versions of sforce.one.

**Using a Specific sforce.one API Version (Simple)**

To use a specific version of sforce.one, get and save a reference to a versioned instance of the object. Then use this object to make sforce.one calls. The simplest way is to save it in the MyApp object. In the next sample, references to the versioned instance of sforce.one are in bold.

```

```

In the preceding example, the event-handling function is expanded from the first example to include the creation of a version-specific instance of sforce.one. If your app needs to mix multiple versions, you can create multiple MyApp instances with appropriate versions and names. More than one or two, though, are cumbersome to manage. We recommend the next approach instead.

**Using a Specific sforce.one API Version (Best)**

A better way to organize your app code is to create version-specific instances of sforce.one in an app initialization block of code so you can keep the event handling separate.

```

```

In this sample the app initialization is separated only by white space and comments, but you can separate it into functions for better encapsulation.

**Using a Specific sforce.one API Version (Synchronous)**

You can trigger a synchronous mode for sforce.one by manually including the specific version of sforce.one’s JavaScript on your page. The format for the URL to the library is:/sforce/one/sforceOneVersion/api.js. Here’s an example:

```

```

Although some situations require synchronous mode, the asynchronous version is preferred. If you forget to manually include the correct versions of the sforce.one library, your code will contain bugs that are difficult to diagnose.

## Code Examples

```
sforce.one.getVersion(versionString, callbackFunction);
```

```
<input type="button" value="Create Account" onclick="btnCreateAccount()" id="btnCreateAcct"/>
```

```
<script>
    function MyApp() {
        this.createAccount = function() {
            sforce.one.navigateToURL("/001/e");
        };
    } 

    var app = new MyApp();

    function btnCreateAccount() {
        app.createAccount();
    }
</script>
```

```
<script>
    function MyApp(sfone) {
        this.createAccount = function() {
            sfone.navigateToURL("/001/e");
        };
    } 
        
    var app30 = null;

    function btnCreateAccount() {
        // Create our app object if not already defined
        if(!app30) {
            // Create app object with versioned sforce.one
            sforce.one.getVersion("30.0", function(sfoneV30) {
                app30 = new MyApp(sfoneV30);
                app30.createAccount();
            });
            return;
        }
        app30.createAccount();        
    }
</script>
```

```
<script>
    function MyApp(sfone) {
        this.createAccount = function() {
            sfone.navigateToURL("/001/e");
        };
    } 
        
    var app30 = null;

    // Initialize app: get versioned API, wire up clicks
    sforce.one.getVersion("30.0", function(sfoneV30) {
        // Create app object with versioned sforce.one
        app30 = new MyApp(sfoneV30);

        // Wire up button event
        var btn = document.getElementById("btnCreateAcct");
        btn.onclick = btnCreateAccount;
    });

    // Events handling functions
    // Can't be fired until app is defined
    function btnCreateAccount() {
        app30.createAccount();
    }
</script>
```
