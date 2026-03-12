---
title: "Connect to the Toolkit"
domain: service-cloud
topic: connect-to-the-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:55.293Z
estimatedTokens: 335
keywords: [Connect, Toolkit, portion, any, JavaScript, code, uses, Salesforce, Console, Integration, different, depending, whether, embedding, Visualforce]
---

# Connect to the Toolkit

> The first portion of any JavaScript code that uses the Salesforce Console Integration
    Toolkit must make the toolkit available to the JavaScript code. The syntax for this is different
    depending on whether you are embedding JavaScript in a Visualforce
    page or
    in a
    third-party domain.

# Connect to the Toolkit

The first portion of any JavaScript code that uses the Salesforce Console Integration Toolkit must make the toolkit available to the JavaScript code. The syntax for this is different depending on whether you are embedding JavaScript in a Visualforce page or in a third-party domain.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Due to third-party cookie restrictions in modern web browsers, Visualforce pages can’t load in Salesforce Classic console apps when third-party cookies are disabled. See [Visualforce Limitations in Salesforce Classic When Third-Party Cookies are Blocked](https://help.salesforce.com/s/articleView?id=003786014&type=1&language=en_US "HTML (New Window)").

The version of the Salesforce Console Integration Toolkit is in the URL.

-   For Visualforce pages or any source other than a custom onclick JavaScript button, specify a <script\> tag that points to the toolkit file.

    ```

    ```

    For Visualforce, a relative path is sufficient to include integration.js, and is recommended.

-   For a third-party domain, insert this <script\> tag.

    ```

    ```


#### See Also

-   [*Salesforce Help*: My Domain URL Formats](https://help.salesforce.com/s/articleView?language=en_US&id=sf.domain_name_app_url_changes.htm)

## Code Examples

```
<apex:page>
          <script src="/support/console/66.0/integration.js" type="text/javascript"></script>
     ...
</apex:page>
```

```
<script src="https://MyDomainName--PackageName.vf.force.com/support/console/66.0/integration.js" type="text/javascript"></script>
```
