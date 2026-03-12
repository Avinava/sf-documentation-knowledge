---
title: "Export Content from Your LWR Site for Translation"
domain: exp-cloud-lwr
topic: export-content-from-your-lwr-site-for-translation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.772Z
estimatedTokens: 1090
keywords: [Export, Content, LWR, Site, Translation, add, language, send, localization, team, vendor]
---

# Export Content from Your LWR Site for Translation

> After you add a language to your site, you can export the site content to send it to
  your localization team or vendor for translation.

# Export Content from Your LWR Site for Translation

After you add a language to your site, you can export the site content to send it to your localization team or vendor for translation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

If you exported your site content before Summer ’22, export it again to ensure that you and your translator are working with the most recent version of the .xlf format. You can’t upload older versions of the .xlf format to your site.

LWR site content exports in an .xlf file, the standard format that’s compatible with third-party translation software. Content in your site’s original default language is contained within the <source> tags. Translated content goes within the <target> tags. This excerpt from an .xlf file shows content in English (US), the default site language, along with its French translation.

```

```

1.  In the Settings panel in Experience Builder, select **Languages**.
2.  In the Languages panel, click **Export Content**.

    The exported file doesn’t include CMS content or the items in your site’s navigation menu. Translate the CMS content in your CMS Workspace in the Digital Experiences app. Use Translation Workbench to translate the items in the site’s navigation menu.

3.  In the Export site content window, select the language that you want to export. Optionally, enter a name for the .zip file, such as the name of the language that you’re exporting.

    You can export more than one language at a time. All languages export in one .zip file, but within the .zip file each language is in its own .xlf file.

4.  Click **Export**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

    #### Note

    After you export your site content for translation, avoid updating the text in your default language because the translation is based on the earlier (pre-updated) version of the content.


The .xlf file includes the translatable component property values—the properties that are defined as translatable=“true” in the component’s js-meta.xml file. However, the file excludes empty String values, even if they’re marked as translatable, because those properties contain no text to translate.

If you use the HTML Editor component or add SEO head tags to your site, the .xlf file also includes their text, which is in HTML. The exported file includes the HTML tags because these tags sometimes include attributes that need translation, such as placeholder text. For example, an email field where site visitors can enter their email address can look like this in the .xlf file:

```

```

Translators must be familiar enough with HTML tags to know what to translate and what to leave alone. In this case, the only part to translate is Enter your email address.

#### See Also

-   [Add a Language to Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm "To offer your site in multiple languages, first add each language to the site from the Settings panel in Experience Builder. You can offer your site in up to 40 languages, including your default site language. Each language that you add appears in the language selector in Experience Builder for easy navigation between different translations of your site. To make the translations available to your site visitors, add the Language Selector component to your site.")

-   [Import Translated Content to Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_import_content.htm "After you add a language to your site, you can enter translations for that language directly into the component property editor panels in Experience Builder. Alternatively, to upload an entire site translation at once, export the site content for translation, then import the translated content in an .xlf file.")

-   [*Salesforce Help*: Work with Translated Content in the Salesforce CMS](https://help.salesforce.com/s/articleView?id=xcloud.cms_translation_content.htm&type=5&language=en_US "Salesforce Help: Work with Translated Content in the Salesforce
    CMS - HTML (New Window)")

-   [*Salesforce Help*: Translation Workbench](https://help.salesforce.com/s/articleView?id=platform.workbench.htm&type=5&language=en_US "Salesforce Help: Translation Workbench - HTML (New Window)")

## Code Examples

```
<segment id="title">
     <source>Subscribe to our newsletter!</source>
     <target>Inscrivez-vous à notre newsletter!</target>
    </segment>
 <segment id="headline">
     <source>We'll send you our latest news.</source>
     <target>On vous apporte nos dernières nouvelles.</target>
    </segment>
 <segment id="description">
     <source>No need to search. Get all our news every week in your mailbox.</source>
     <target>Plus besoin de chercher. Recevez toute notre actu chaque semaine dans votre boîte mail.</target>
    </segment>
```

```
&amp;lt;input type=”email” value=”” placeholder=”Enter your email address” name=”contact[email]” id=”Email-footer” class=”newsletter-form-group__input”&amp;gt;
```

## Related Topics

- Add a Language to Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm)
- Import Translated Content to Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_import_content.htm)
