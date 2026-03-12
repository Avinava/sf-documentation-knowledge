---
title: "MessageRule Class"
domain: revenue-cloud
topic: messagerule-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.786Z
estimatedTokens: 863
keywords: [MessageRule, Represents, message, rule, evaluated, during, product, configuration., Message, rules, display, informational, warning, error, messages, users, based, configuration, conditions., stiId]
---

# MessageRule Class

> Represents a message rule that is evaluated during product configuration. Message rules display informational, warning, or error messages to users based on configuration conditions.

# MessageRule Class

Represents a message rule that is evaluated during product configuration. Message rules display informational, warning, or error messages to users based on configuration conditions.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[MessageRule Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_constructors)**
    Learn more about the constructor that's available with the MessageRule class.
-   **[MessageRule Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_properties)**
    Contains properties to store message rule details from configuration rule evaluation.

## MessageRule Constructor

Learn more about the constructor that's available with the MessageRule class.

The MessageRule class includes this constructor.

-   **[MessageRule(stiId, severity, messages)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_ctor)**
    Constructor to create a MessageRule instance with the specified STI ID, severity, and messages.

### MessageRule(stiId, severity, messages)

Constructor to create a MessageRule instance with the specified STI ID, severity, and messages.

#### Signature

public MessageRule(String stiId, String severity, List<String> messages)

#### Parameters

stiId

Type: String

The ID of the Sales Transaction Item (STI) associated with this message rule.

severity

Type: String

The severity level of the message (for example, Error, Warning, or Info).

messages

Type: List<String>

List of message strings to display to the user.

## MessageRule Properties

Contains properties to store message rule details from configuration rule evaluation.

The MessageRule class includes these properties.

-   **[messages](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_messages)**
    Get the list of messages.
-   **[severity](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_severity)**
    Get the severity value.
-   **[stiId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_runtime_industries_cpq_MessageRule_stiId)**
    Get the ID of the sti.

### messages

Get the list of messages.

#### Signature

public List<String> messages {get; set;}

#### Property Value

Type: List<String>

### severity

Get the severity value.

#### Signature

public String severity {get; set;}

#### Property Value

Type: String

### stiId

Get the ID of the sti.

#### Signature

public String stiId {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- MessageRule Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
- MessageRule Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
- MessageRule(stiId, severity, messages) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
- messages (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
- severity (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
- stiId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
