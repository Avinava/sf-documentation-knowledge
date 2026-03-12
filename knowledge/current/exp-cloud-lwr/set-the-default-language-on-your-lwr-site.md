---
title: "Set the Default Language on Your LWR Site"
domain: exp-cloud-lwr
topic: set-the-default-language-on-your-lwr-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.779Z
estimatedTokens: 931
keywords: [Language, LWR, Site, English, want, change, different, soon, possible, avoid, losing, content]
---

# Set the Default Language on Your LWR Site

> When you create an LWR site, the default site language is English (US). If you want to
  change it to a different default language, update the default language as soon as possible after
  you create the site to avoid losing content.

# Set the Default Language on Your LWR Site

When you create an LWR site, the default site language is English (US). If you want to change it to a different default language, update the default language as soon as possible after you create the site to avoid losing content.

When you change the default site language, you remove all content in your original default language. If there’s translated content on your site in the new default language, you remove that, too. So it’s best to minimize the amount of content that you add to your site in either language until after you update the default language.

1.  In the Settings panel in Experience Builder, select **Languages**.
2.  If you haven’t added your intended new default language to the site, add it now.
3.  From the actions menu for your intended new default site language, select **Set as default site language**. On enhanced LWR sites, if a site language is disabled in your Salesforce org, you can’t select that language as your default site language.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

    #### Note

    If you plan to add Salesforce CMS content to your site, it’s important that the site and the CMS workspace have the same default language so that the content appears properly. If the default languages are different, translate the content in your CMS workspace into your default site language, then add the translated content to your site.

    ![Actions menu for a language on the Site Languages list on the Languages panel, highlighting Set as default site language](/docs/resources/img/en-us/260.0?doc_id=images%2Fmultilingual_lwr_set_default_language.png&folder=exp_cloud_lwr)

4.  In the confirmation window, click **Change**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

If you did add content to your site in either language, and you want to preserve that content, export the translation before you change the default site language. The resulting .xlf file contains the content in both languages. The text in your original default language appears within the <source> tags in the file. The text in your intended new default language appears within the <target> tags in the file.

![xlf file showing default language (English) within the source tags and intended new default language (French) within the target tags](/docs/resources/img/en-us/260.0?doc_id=images%2Fmultilingual_lwr_xlf_file.png&folder=exp_cloud_lwr)

You can’t import this file back to your site, but you can paste the text back into each relevant field in the component property editor panels in Experience Builder.

#### See Also

-   [Add a Language to Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm "To offer your site in multiple languages, first add each language to the site from the Settings panel in Experience Builder. You can offer your site in up to 40 languages, including your default site language. Each language that you add appears in the language selector in Experience Builder for easy navigation between different translations of your site. To make the translations available to your site visitors, add the Language Selector component to your site.")

-   [Export Content from Your LWR Site for Translation](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm "After you add a language to your site, you can export the site content to send it to your localization team or vendor for translation.")

-   [*Salesforce Help*: Translating Salesforce CMS Content](https://help.salesforce.com/s/articleView?id=xcloud.cms_translations_overview.htm&type=5&language=en_US)

## Related Topics

- Add a Language to Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_add_language.htm)
- Export Content from Your LWR Site for Translation (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm)
