---
title: "Template Folder Structure"
domain: bi-dev-guide-wave-templates
topic: template-folder-structure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.548Z
estimatedTokens: 1348
keywords: [Template, Folder, Structure, Decompressing, exported, file]
---

# Template Folder Structure

> Decompressing the exported template file exposes the following folder
        structure.

# Template Folder Structure

Decompressing the exported template file exposes the following folder structure.

-   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)*<TemplateName>*

    (top directory)

    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)template-info.json

        Don’t change the name of this file; processing depends on it.

    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)variables.json
    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)ui.json
    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)template-to-app-rules.json

        We recommend this naming convention as the best way to manage your rules files.

    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)app-to-template-rules.json

        We recommend this naming convention as the best way to manage your rules files.

    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)releaseNotes.html
    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)dashboards

        Subdirectory containing one or more dashboard JSON files corresponding to each dashboard in the source app. If the source app has no dashboards, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)lenses

        Subdirectory containing one or more lens JSON files corresponding to each lens in the source app. If the source app has no lenses, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)dataflows

        Subdirectory containing the dataflow JSON files corresponding to each dataflow in the source app. If the source app has no dataflows, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)recipes

        Subdirectory containing the recipe JSON files corresponding to each recipe in the source app. If the source app has no recipes, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)external\_files

        Subdirectory containing one or more CSV dataset and related JSON files, such as schema and user XMD files, corresponding to each dataset in the source app. If the source app has no CSV datasets, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)dataset\_files

        Subdirectory containing [User XMD](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_intro.htm) files for SFDC datasets. If the source app has no SFDC datasets with User XMD defined, this subdirectory doesn’t exist.

    -   ![This image depics a folder icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_folder_icon2.png&folder=bi_dev_guide_wave_templates)images

        Subdirectory containing one or more image files. If the source app has no images, this subdirectory doesn’t exist.

    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)folder.json
    -   ![This image depics a file icon.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_file_icon2.png&folder=bi_dev_guide_wave_templates)auto-install.json

        Optional file to create the app with an auto-install request. You must create this file, It is not generated at template creation. The template must be installed as a managed package for app creation.
