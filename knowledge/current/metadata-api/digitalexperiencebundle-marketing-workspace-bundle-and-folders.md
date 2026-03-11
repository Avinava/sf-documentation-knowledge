---
title: "DigitalExperienceBundle: Marketing Workspace Bundle and Folders"
domain: metadata-api
topic: digitalexperiencebundle-marketing-workspace-bundle-and-folders
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.930Z
keywords: [DigitalExperienceBundle, Marketing, Workspace, Bundle, Folders, sfdc, _cms, _brand, Folder, _brandSettings, _email, Note, _form, _image, _landingPage, _languageSettings]
---

# DigitalExperienceBundle: Marketing Workspace Bundle and Folders

# DigitalExperienceBundle: Marketing Workspace Bundle and Folders

DigitalExperienceBundle uses the marketing workspace type to organize content items used in marketing campaigns in a content-focused, text-based code structure.

For Marketing Cloud, the marketing folder contains one or more workspace folders, each representing an individual marketing workspace. Each workspace folder contains a collection of related content items, such as landing pages, forms, and emails, and their associated images and branding.

The folder for each marketing workspace includes content type folders, content item subfolders, and associated data that's contained in content.json and \_meta.json files.

![Marketing workspace type folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2FDigitalExperienceBundle_marketing.png&folder=api_meta)

The following content type folders represent the content types that are supported in a marketing workspace. For example, forms for a marketing workspace are stored under a content type folder called sfdc\_cms\_\_form.

-   [sfdc\_cms\_\_brand Folder](#brand_folder)
-   [sfdc\_cms\_\_brandSettings Folder](#brandSettings_folder)
-   [sfdc\_cms\_\_email Folder](#email_folder)
-   [sfdc\_cms\_\_form Folder](#form_folder)
-   [sfdc\_cms\_\_image Folder](#image_folder)
-   [sfdc\_cms\_\_landingPage Folder](#landingpage_folder)
-   [sfdc\_cms\_\_languageSettings Folder](#language_folder)

## sfdc\_cms\_\_brand Folder

This content type folder contains one content subfolder per brand. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_brandSettings Folder

This content type folder contains one content subfolder called brandSettings. The brandSettings content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_email Folder

This content type folder contains one content subfolder per email. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In marketing workspaces, the default data graph, personalization recommenders, personalization points, and decisions aren't included in the bundle. If the workspace includes emails with personalized content that’s based on these objects, then:

-   Any merge field or repeater that uses the default data graph or a personalization recommender from the source org is broken in the target org.
-   Any dynamic content variations of email components are removed and only the default variations appear in the email.

<apiName>/content.json

```

```

## sfdc\_cms\_\_form Folder

This content type folder contains one content subfolder per form. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_image Folder

This content type folder contains one content subfolder per image. Each content subfolder contains two or more JSON files and a \_media subfolder that contains the image file.

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_landingPage Folder

This content type folder contains one content subfolder per landing page. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_languageSettings Folder

This content type folder contains one content subfolder called languages. The languages content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```