---
title: "Import Translated Content to Your LWR Site"
domain: exp-cloud-lwr
topic: import-translated-content-to-your-lwr-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.776Z
estimatedTokens: 970
keywords: [Import, Translated, Content, LWR, Site, add, language, enter, translations, directly, component, editor, panels, Experience, Builder]
---

# Import Translated Content to Your LWR Site

> After you add a language to your site, you can enter translations for that language
  directly into the component property editor panels in Experience Builder. Alternatively, to upload
  an entire site translation at once, export the site content for translation, then import the
  translated content in an .xlf file.

# Import Translated Content to Your LWR Site

After you add a language to your site, you can enter translations for that language directly into the component property editor panels in Experience Builder. Alternatively, to upload an entire site translation at once, export the site content for translation, then import the translated content in an .xlf file.

In Experience Builder, you can import translated content to your LWR site only in an .xlf file. Each file can contain only one translation, and you can import only one .xlf file at a time. File uploads of greater than 1 MB can take a few minutes. In that case, we send you an email when the import is complete.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

If you exported your site content before Summer ’22, export it again to ensure that you and your translator are working with the most recent version of the .xlf format. You can’t upload older versions of the .xlf format to your site.

Importing a site translation overwrites your existing content in that language, but it doesn’t overwrite your default language content or content in other languages.

Avoid updating your site, including adding or removing components, while the site is being translated because the translation is based on the earlier (pre-updated) version of the site.

1.  In the Settings panel in Experience Builder, select **Languages**.
2.  In the Languages panel, click **Upload File** and navigate to the translation file, or drag the file to the **Drop File** field.
3.  To view the translated content in Experience Builder, select that language from the language selector.

    ![Language selector icon and menu in Experience Builder](/docs/resources/img/en-us/260.0?doc_id=images%2Fmultilingual_lwr_builder_language_selector_french.png&folder=exp_cloud_lwr)


The file that you exported for translation didn’t include any CMS content that’s on your site or any items in your site’s navigation menu. Translate the CMS content in your CMS Workspace in the Digital Experiences app. Use Translation Workbench to translate the items in the site’s navigation menu.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

You can also import a translation programmatically using ExperienceBundle. See [ExperienceBundle](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_experiencebundle.htm "HTML (New Window)") in the Metadata API Developer Guide.

#### See Also

-   [Add a Language to Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm "To offer your site in multiple languages, first add each language to the site from the Settings panel in Experience Builder. You can offer your site in up to 40 languages, including your default site language. Each language that you add appears in the language selector in Experience Builder for easy navigation between different translations of your site. To make the translations available to your site visitors, add the Language Selector component to your site.")

-   [Export Content from Your LWR Site for Translation](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm "After you add a language to your site, you can export the site content to send it to your localization team or vendor for translation.")

-   [*Salesforce Help*: Work with Translated Content in the Salesforce CMS](https://help.salesforce.com/s/articleView?id=xcloud.cms_translation_content.htm&type=5&language=en_US "Salesforce Help: Work with Translated Content in the Salesforce
    CMS - HTML (New Window)")

-   [*Salesforce Help*: Translation Workbench](https://help.salesforce.com/s/articleView?id=platform.workbench.htm&type=5&language=en_US "Salesforce Help: Translation Workbench - HTML (New Window)")

## Related Topics

- Add a Language to Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm)
- Export Content from Your LWR Site for Translation (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm)
