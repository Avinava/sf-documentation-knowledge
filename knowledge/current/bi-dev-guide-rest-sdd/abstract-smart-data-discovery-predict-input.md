---
title: "Abstract Smart Data Discovery Predict Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-predict-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.536Z
estimatedTokens: 468
keywords: [Abstract, Smart, Discovery, Predict, base, Einstein]
---

> The base predict input for Einstein Discovery.

# Abstract Smart Data Discovery Predict Input

The base predict input for Einstein Discovery.

Properties

Inherited by [Smart​Data​Discovery​Predict​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm "The predict input for Einstein Discovery."), [Smart​Data​Discovery​Predict​Raw​Data​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm "The predict raw data input for Einstein Discovery."), [Smart​Data​Discovery​Predict​Record​Overrides​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm "The predict record overrides input for Einstein Discovery."), and [Smart​Data​Discovery​Predict​Record​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm "The predict record input for Einstein Discovery.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | Asset Reference Input | The model for the predict | Required | 48.0 |
| prediction​Definition | String | The prediction definition ID for the predict. | Required | 44.0 |
| settings | Smart Data Discover Predict Settings Input | The settings to control the predict output. | Optional | 46.0 |
| type | Smart​Data​Discovery​Predict​Type​Enum | The predict type. Valid values are:Raw​Data (Represent rows within a two-dimensional array of row values)Record​Overrides (Represent records using Salesforce record Ids. Optionally override or append individual records with an array of row values)Records (Represent rows using Salesforce record Ids associated with the subscribedEntity of the prediction definition) | Required | 44.0 |

## Related Topics

- Smart​Data​Discovery​Predict​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm)
- Smart​Data​Discovery​Predict​Raw​Data​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm)
- Smart​Data​Discovery​Predict​Record​Overrides​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm)
- Smart​Data​Discovery​Predict​Record​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm)
- Asset Reference Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)
- Smart Data Discover Predict Settings Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_settings_input.htm)
