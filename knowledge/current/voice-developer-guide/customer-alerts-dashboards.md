---
title: "Customer Alerts Dashboards"
domain: voice-developer-guide
topic: customer-alerts-dashboards
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.495Z
estimatedTokens: 479
keywords: [Customer, Alerts, Dashboards, Salesforce, two, CloudWatch, custom, monitor, potential, issues, contact, center, Service, Cloud, Voice]
---

# Customer Alerts Dashboards

> Salesforce provides two CloudWatch custom dashboards to monitor potential issues with
    your contact center.

# Customer Alerts Dashboards

Salesforce provides two CloudWatch custom dashboards to monitor potential issues with your contact center.

You can fine-tune these dashboards as necessary for your Voice implementation. To learn how to customize dashboards, see [Using Amazon CloudWatch dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) in the Amazon CloudWatch User Guide.

## Service Cloud Voice Connect Dashboard

The Service Cloud Voice Connect Dashboard shows general activity associated with your Amazon Connect implementation.

![CloudWatch connect dashboard](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_cloudwatch_dashboard_connect.png&folder=voice_developer_guide)

To learn what each of the metrics means, see [Monitoring your instance using CloudWatch](https://docs.aws.amazon.com/connect/latest/adminguide/monitoring-cloudwatch.html) in the Amazon Connection Administrative Guide.

## Service Cloud Voice Lambda Dashboard

The Service Cloud Voice Lambda Dashboard shows issues associated with the Lambda functions in your Amazon Connect instance.

![CloudWatch Lambda dashboard](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_cloudwatch_dashboard_lambda.png&folder=voice_developer_guide)

This dashboard tracks invocations, concurrent executions, and errors associated with each Lambda function.

#### See Also

-   [*Amazon CloudWatch User Guide:* Using Amazon CloudWatch dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html "Amazon CloudWatch User Guide: Using Amazon CloudWatch dashboards - HTML (New Window)")

-   [*Amazon Connect Administrator's Guide:* Monitoring your instance using CloudWatch](https://docs.aws.amazon.com/connect/latest/adminguide/monitoring-cloudwatch.html "Amazon Connect Administrator's Guide: Monitoring your instance using CloudWatch - HTML (New Window)")
