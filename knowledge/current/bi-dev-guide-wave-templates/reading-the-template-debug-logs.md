---
title: "Reading the Template Debug Logs"
domain: bi-dev-guide-wave-templates
topic: reading-the-template-debug-logs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.608Z
estimatedTokens: 1054
keywords: [Reading, Template, Debug, Logs, Analytics, Templated, App, Poller, log, multiple, lines, generated, different, events]
---

# Reading the Template Debug Logs

> Each Analytics Templated App Poller log contains
  multiple log lines generated from different log events.

# Reading the Template Debug Logs

Each Analytics Templated App Poller log contains multiple log lines generated from different log events.

Multiple logs are written out during the templated app lifecycle of create, reset, or upgrade, usually 3–4 separate logs containing different details from the processing. Each log is a Analytics Templated App Poller log.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Each log entry has a 2-MB limit controlled by org limits and is truncated when the limit is exceeded.

The Analytics Templated App Poller log includes these details.

| Log Level | Apex Log Event | Details | Example Log Line |
| --- | --- | --- | --- |
| Info | WAVE_APP_LIFECYCLE | The app action, app lifecycle phase, app id, and app name. | 14:04:00.399 (51399277642)​\|WAVE_APP_LIFECYCLE​\|CREATE​\|CREATE_UPDATE_DASHBOARDS​\|00lRM000000gP2LYAU​\|Sales Analytics Test |
| Error | TEMPLATE_PROCESSING_ERROR | Displays any template processing errors. | 13:06:42.63 (2341994782)​\|TEMPLATE_PROCESSING_ERROR​\|CREATE​\|Application Sales Analytics Test (00lRM000000gP2LYAU) failed |
| Fine | APP_CONTAINER_INITIATED | The template values and variables. | 14:01:55.50 (15050452403)​\|APP_CONTAINER_INITIATED​\|{"User":{"Id":"005xx00000xxxxx”,”UserName”:”admin@na44stmfa.com","FirstName":"Admin","LastName":"User"},"Org":{"Id":"00DRM000000xxxx”,”Name”:”STMFA”,”Namespace":""},"Apps":{},"App":{"Dashboards":{},"Lenses":{},"Datasets":{},"Images":{},"StoredQueries":{}},"Variables":{"autoconfig":"false","DefaultsVisible":true,…}} |
| Fine | TEMPLATED_ASSET | The app asset status, which is created, updated, or deleted. | 14:03:24.627 (15627342211)​\|TEMPLATED_ASSET​\|Successfully created/updated dashboard [Executive Overview(Exec_Overview_Pipeline_Performance1)]... |
| Fine | TRANSFORMATION_SUMMARY | The template asset name and type being transformed to an app asset. | 14:03:25.684 (16692521613)​\|TRANSFORMATION_SUMMARY​\|ASSET_CREATE_UPDATE​\|Transforming template with name [Account_Summary] and type [dashboardTemplate] |
| Fine | RULES_EXECUTION_SUMMARY | The rule name, appliesTo types, actions, and any conditions. | 14:03:15.266 (7081461905)​\|RULES_EXECUTION_SUMMARY​\|ASSET_CREATE_UPDATE, Processing action [Action {action='delete', path='$.workflowDefinition..[?(@.name=='HasRevenueSchedule')]', value='null', description='delete node from workflow'}] |
| Fine | ASSET_DIFF_SUMMARY | The summary of differences for an asset on an app reset or upgrade. | 15:09:24.682 (9748463760)​\|ASSET_DIFF_SUMMARY​\|Action: UPDATE, Reason: DIFFERENCES_DETECTED, Asset ID: 0FKRM0000000boU4AQ, Label: Trending, Type: dashboard, Template: Trending (Sales_Rep_Pipeline_Changes) |
| Fine | JSON_DIFF_SUMMARY | The summary of differences for JSON on an app reset or upgrade. | 15:09:21.493 (6865203874)​\|JSON_DIFF_SUMMARY​\|ASSET_DIFF​\|Found [106] differences between existing dashboard and new dashboard [0FKRM0000000boN4AQ] [Summary of Account] |
| Finer | RULES_EXECUTION_DETAIL | The rule results for each action of a rule. | 14:03:35.872 (26905199214)​\|RULES_EXECUTION_DETAIL​\|ASSET_CREATE_UPDATE, set, $['state']['gridLayouts'][0]['pages'][0]['widgets'][33]['column'], 20 |
| Finest | JSON_DIFF_DETAIL | The detailed difference for JSON on an app upgrade or reset. | 15:09:24.682 (9729246304)​\|JSON_DIFF_DETAIL​\|ASSET_DIFF​\|Action {action='set', path='$.Extract_Account.parameters.fields[8].name', value='BillingPostalCode', description='Change 11: 'String values are not equal: new [BillingPostalCode] old [BillingCountry]''} |

Setting the Wave category log level to Finest includes all the log events in the log file.

## Example

A sample Analytics Templated App Poller log file: ![Sample templated app debug log file](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_debug_log_detail.png&folder=bi_dev_guide_wave_templates)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

The templated app debug log files are also visible via the Salesforce Dev Console after the debug trace flags are created.
