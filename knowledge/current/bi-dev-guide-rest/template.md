---
title: "Template"
domain: bi-dev-guide-rest
topic: template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:11.242Z
estimatedTokens: 641
keywords: [Template, Analytics]
---

# Template

> An Analytics template.

# Template

An Analytics template.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Icon | String | The icon that best represents the Analytics application. | Small, 36.0 | 36.0–41.0 |
| asset​Version | Double | The asset version (API version) of all the dashboards and lenses. | Big, 37.0 | 37.0 |
| configuration​Url | String | The URL to the configuration of the template. | Small, 36.0 | 36.0 |
| created​By | Wave​User | The user that created the template. | Small, 52.0 | 52.0 |
| created​Date | Date | The date and time the template was created. | Small, 52.0 | 52.0 |
| custom​Attributes | Template​Custom​Attributes | The custom attribute definitions of the template. | Big, 44.0 | 44.0 |
| description | String | The description of the template. | Big, 36.0 | 36.0 |
| folder​Source | Asset​Reference | The folder source of the template | Medium, 39.0 | 39.0 |
| icons | Template​Icons | The icons configured for the template. | Small, 41.0 | 41.0 |
| id | String | The ID or fully qualified API name of the template. | Small, 36.0 | 36.0 |
| label | String | The localized name of the application template. | Small, 36.0 | 36.0 |
| last​Modified​By | Wave​User | The user that last updated the template. | Small, 52.0 | 52.0 |
| last​Modified​Date | Date | The last date and time the template was modified. | Small, 52.0 | 52.0 |
| name | String | The local API name of the template. | Medium, 36.0 | 36.0 |
| namespace | String | The namespace of the template provider. | Medium, 36.0 | 36.0 |
| release​Info | Template​Release | The release information for the template | Medium, 37.0 | 37.0 |
| tags | String[] | A list of tag definitions for the template. | Big, 44.0 | 44.0 |
| template​Icon | String | The icon that best represents the Analytics application template. | Small, 36.0 | 36.0–41.0 |
| template​Type | Connect​Wave​Template​Type​Enum | The type of template. Valid values are:AppDashboardDataEmbeddedLens | Small, 36.0 | 36.0 |
| url | String | The URL to the detail of the template. | Small, 36.0 | 36.0 |
| videos | Video​Info | The videos associated with the template. | Big, 46.0 | 46.0 |

#### See Also

-   [Templates List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm "Returns a list of Analytics templates, or creates a template.")

-   [Template Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm "Returns, deletes, or updates an Analytics template.")

## Related Topics

- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Template​Custom​Attributes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_custom_attributes.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Template​Icons (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_icons.htm)
- Template​Release (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_release.htm)
- Video​Info (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_video_info.htm)
- Templates List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm)
- Template Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm)
