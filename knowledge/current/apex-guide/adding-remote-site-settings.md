---
title: "Adding Remote Site Settings"
domain: apex-guide
topic: adding-remote-site-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.341Z
estimatedTokens: 335
keywords: [Adding, Remote, Site, Settings, Before, any, Apex, callout, call, external, site, must, registered, page, fails., Salesforce, prevents, calls, unauthorized, network]
---

# Adding Remote Site Settings

> Before any Apex callout can call an external site, that site
        must be registered in the Remote Site Settings page, or the callout fails. Salesforce
      prevents calls to unauthorized network addresses.

# Adding Remote Site Settings

Before any Apex callout can call an external site, that site must be registered in the Remote Site Settings page, or the callout fails. Salesforce prevents calls to unauthorized network addresses.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If the callout specifies a named credential as the endpoint, you don’t need to configure remote site settings. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. To set up named credentials, see “Define a Named Credential” in the Salesforce Help.

To add a remote site setting:

1.  From Setup, enter Remote Site Settings in the Quick Find box, then select **Remote Site Settings**.
2.  Click **New Remote Site**.
3.  Enter a descriptive term for the Remote Site Name.
4.  Enter the URL for the remote site.
5.  Optionally, enter a description of the site.
6.  Click **Save**.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

For best performance, verify that your remote HTTPS encrypted sites have OCSP (Online Certificate Status Protocol) stapling turned on.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Named Credentials as Callout Endpoints")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
