---
title: "Connect to Open CTI"
domain: api-cti
topic: connect-to-open-cti
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.675Z
estimatedTokens: 378
keywords: [Connect, Open, CTI, portion, any, JavaScript, code, uses, toolkit, different, depending, whether, embedding, Visualforce, developed]
---

# Connect to Open CTI

> The first portion of any JavaScript code that uses the Open CTI must make the toolkit
  available to the JavaScript code. The syntax for this is different depending on whether you are
  embedding JavaScript in a Visualforce page or a page developed using any web technologies and
  served from a third-party domain.

# Connect to Open CTI

The first portion of any JavaScript code that uses the Open CTI must make the toolkit available to the JavaScript code. The syntax for this is different depending on whether you are embedding JavaScript in a Visualforce page or a page developed using any web technologies and served from a third-party domain.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_cti)

#### Tip

The version of Open CTI is in the URL.

## For Visualforce Pages

For Visualforce pages or any source other than a custom onclick JavaScript button, specify a <script\> tag that points to the Open CTI JavaScript library file.

In Salesforce Classic:

```

```

In Lightning Experience:

```

```

For Visualforce, we recommend using a relative path to include interaction.js or opencti\_min.js.

## For a Third-Party Domain

For third-party domains, specify an absolute URL to interaction.js or opencti\_min.js to use the toolkit.

In Salesforce Classic:

```

```

In Lightning Experience:

```

```

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

-   [*Salesforce Help*: My Domain URL Formats](https://help.salesforce.com/s/articleView?language=en_US&id=sf.domain_name_app_url_changes.htm)

## Code Examples

```
<apex:page>
          <script src="/support/api/66.0/interaction.js" type="text/javascript"></script>
     ...
</apex:page>
```

```
<apex:page>
          <script src="/support/api/66.0/lightning/opencti_min.js" type="text/javascript"></script>
     ...
</apex:page>
```

```
<script src="https://MyDomainName--PackageName.vf.force.com/support/api/66.0/interaction.js" type="text/javascript"></script>
```

```
<script src="https://MyDomainName--PackageName.vf.force.com/support/api/66.0/lightning/opencti_min.js" type="text/javascript"></script>
```

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
