# Domain Reference

Comprehensive list of all **129 documentation domains** available in the SF Documentation Knowledge system, organized by service category. Use domain IDs with `SF_ACTIVE_DOMAINS` or `sf_set_active_domains` to restrict tools to specific areas.

_Use `sf_suggest_domains("your topic")` to find relevant domains automatically._

---

## Agentforce

| Domain ID    | Name       | Files | Description                                                 |
| ------------ | ---------- | ----- | ----------------------------------------------------------- |
| `agentforce` | Agentforce | 72    | AI agents, actions, topics, prompt templates, agent builder |

## Analytics & BI

| Domain ID                                          | Name                                       | Files | Description                                                |
| -------------------------------------------------- | ------------------------------------------ | ----- | ---------------------------------------------------------- |
| `api-analytics`                                    | Salesforce Reports and Dashboards REST API | 82    | Reports and Dashboards REST API for programmatic access    |
| `bi-dev-guide-cli-reference`                       | Analytics Plugin CLI Command Reference     | 29    | CLI commands for Salesforce DX Analytics plugins           |
| `bi-dev-guide-ext-data`                            | Analytics External Data API                | 13    | External Data API for uploading CSV files to CRM Analytics |
| `bi-dev-guide-json`                                | Analytics Dashboard JSON                   | 30    | Dashboard JSON properties reference                        |
| `bi-dev-guide-lwc-in-db`                           | LWC in CRM Analytics Dashboards            | 13    | Custom Lightning Web Components in CRM Analytics           |
| `bi-dev-guide-rest`                                | CRM Analytics REST API                     | 519   | Queries, datasets, lenses, and dashboards via REST         |
| `bi-dev-guide-rest-sdd`                            | Einstein Discovery REST API                | 312   | Einstein Discovery predictions and models                  |
| `bi-dev-guide-saql`                                | Analytics SAQL                             | 171   | Salesforce Analytics Query Language (SAQL) reference       |
| `bi-dev-guide-sdk`                                 | Analytics SDK                              | 17    | CRM Analytics LWC and Assets for Lightning experience      |
| `bi-dev-guide-sql`                                 | SQL for Analytics                          | 107   | CRM Analytics version of the SQL query language            |
| `bi-dev-guide-wave-templates`                      | Analytics Templates                        | 94    | Create CRM Analytics Templates from source apps            |
| `bi-dev-guide-xmd`                                 | Analytics Extended Metadata (XMD)          | 20    | Customize formatting of data in CRM Analytics              |
| `salesforce-dashboard-samples`                     | Sample CRM Dashboards                      | 10    | Sample dashboards highlighting Salesforce features         |
| `salesforce-reports-enhanced-reports-tab-tipsheet` | Using the Reports Tab                      | 1     | Reports tab organization and management                    |

## Apex

| Domain ID        | Name                 | Files | Description                                                      |
| ---------------- | -------------------- | ----- | ---------------------------------------------------------------- |
| `apex-guide`     | Apex Developer Guide | 542   | Apex language guide -- syntax, triggers, testing, best practices |
| `apex-reference` | Apex Reference       | 4620  | Apex class library reference -- all system classes and methods   |

## API

| Domain ID        | Name                      | Files | Description                                                 |
| ---------------- | ------------------------- | ----- | ----------------------------------------------------------- |
| `api`            | SOAP API Developer Guide  | 199   | Server-side integration using SOAP API                      |
| `api-action`     | Actions Developer Guide   | 60    | Action API for APEX, SOAP, and REST quick actions           |
| `api-asynch`     | Bulk API 2.0 and Bulk API | 120   | Bulk data loading and large dataset queries                 |
| `api-placeorder` | Place Order REST API      | 17    | Order and contract data access via REST                     |
| `api-streaming`  | Streaming API             | 85    | Secure, scalable push notifications via streaming           |
| `rest-api`       | REST API                  | 308   | Salesforce REST API -- resources, methods, composite, batch |
| `soql-sosl`      | SOQL and SOSL Reference   | 85    | Query and search reference for SOQL and SOSL                |
| `uiapi`          | User Interface API        | 265   | Build native mobile and custom web UIs                      |

## CLI & DevOps

| Domain ID            | Name                                      | Files | Description                                                          |
| -------------------- | ----------------------------------------- | ----- | -------------------------------------------------------------------- |
| `cli-commands`       | SF CLI Commands                           | 221   | Salesforce CLI (sf) command reference -- all commands across plugins |
| `comm-cli-reference` | Commerce Plug-In CLI Commands             | 10    | CLI commands for Commerce Cloud applications                         |
| `devops-center-dev`  | DevOps Center Developer Guide             | 39    | DevOps Center object model and relationships                         |
| `pkg1-dev`           | First-Generation Managed Packaging (1GP)  | 142   | Legacy managed package development                                   |
| `pkg2-dev`           | Second-Generation Managed Packaging (2GP) | 190   | Preferred managed package development approach                       |
| `packagingGuide`     | ISVforce Guide                            | 356   | AppExchange solution planning, building, and selling                 |
| `sfdx-dev`           | Salesforce DX Developer Guide             | 180   | Salesforce DX app development and management                         |
| `sfdx-setup`         | Salesforce CLI Setup Guide                | 42    | CLI installation and configuration                                   |

## Data Cloud

| Domain ID    | Name       | Files | Description                                  |
| ------------ | ---------- | ----- | -------------------------------------------- |
| `data-cloud` | Data Cloud | 400   | Data models, connectors, identity resolution |

## Experience Cloud

| Domain ID         | Name                             | Files | Description                                   |
| ----------------- | -------------------------------- | ----- | --------------------------------------------- |
| `communities-dev` | Experience Cloud Developer Guide | 66    | Custom Aura components and theme layouts      |
| `exp-cloud-lwr`   | LWR Sites for Experience Cloud   | 74    | Fast-loading, scalable Experience Cloud sites |

## Industries

| Domain ID                                   | Name                                       | Files | Description                                          |
| ------------------------------------------- | ------------------------------------------ | ----- | ---------------------------------------------------- |
| `automotive-cloud`                          | Automotive Cloud Developer Guide           | 139   | Automotive industry APIs and resources               |
| `cgcloud-rtr-dev-guide`                     | Consumer Goods Real Time Reporting         | 14    | Consumer Goods Cloud CSV export configuration        |
| `comms-developer-guide`                     | Revenue Cloud for Communications           | 87    | Communications industry APIs and resources           |
| `edu-cloud-dev-guide`                       | Education Cloud Developer Guide            | 308   | Education industry tools and developer resources     |
| `eu-developer-guide`                        | Energy and Utilities Cloud Developer Guide | 74    | Energy and utilities industry APIs                   |
| `financial-services-cloud-object-reference` | Financial Services Cloud Developer Guide   | 527   | Financial Services Cloud API and extensions          |
| `health-cloud-object-reference`             | Health Cloud Developer Guide               | 833   | Health Cloud console and API configuration           |
| `insurance-developer-guide`                 | Insurance Developer Guide                  | 616   | Insurance industry developer resources               |
| `life-sciences-dev-guide`                   | Life Sciences Cloud Developer Guide        | 714   | Life Sciences Cloud operations automation            |
| `loyalty`                                   | Loyalty Management Developer Guide         | 526   | Personalized loyalty program APIs                    |
| `media-developer-guide`                     | Media Cloud Developer Guide                | 179   | Media industry APIs and resources                    |
| `mfg-api-devguide`                          | Manufacturing Cloud Developer Guide        | 187   | Manufacturing business negotiation and planning APIs |
| `netzero-cloud-dev-guide`                   | Net Zero Cloud Developer Guide             | 265   | Sustainability management APIs                       |
| `nonprofit-cloud`                           | Nonprofit Cloud Developer Guide            | 304   | Nonprofit configuration and extension APIs           |
| `nonprofit-cloud-for-grantmaking-dev-guide` | Grantmaking Developer Guide                | 40    | Grantmaking configuration and extension APIs         |
| `psc-api`                                   | Public Sector Solutions Developer Guide    | 1003  | Public service unification APIs                      |
| `retail-api`                                | Consumer Goods Cloud Developer Guide       | 524   | Consumer goods industry APIs                         |

## Lightning Web Components

| Domain ID   | Name                                      | Files | Description                                                        |
| ----------- | ----------------------------------------- | ----- | ------------------------------------------------------------------ |
| `lightning` | Lightning Aura Components Developer Guide | 491   | Aura components for mobile and Lightning experience                |
| `lwc`       | Lightning Web Components                  | 1     | LWC developer guide -- components, lifecycle, wire service, events |

## OmniStudio

| Domain ID    | Name       | Files | Description                                                 |
| ------------ | ---------- | ----- | ----------------------------------------------------------- |
| `omnistudio` | OmniStudio | 1296  | OmniScripts, FlexCards, DataRaptors, Integration Procedures |

## Platform (Core)

| Domain ID                                          | Name                                             | Files | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------ | ----- | ------------------------------------------------------------- |
| `ajax`                                             | AJAX Toolkit Developer Guide                     | 31    | Execute API calls and access API objects                      |
| `appExchangeInstallGuide`                          | Application Installation Guide                   | 8     | AppExchange package installation and rollout                  |
| `asl-dev-guide`                                    | Accounting Subledger Developer Guide             | 12    | Accounting Subledger configuration and tools                  |
| `bigobjects`                                       | Big Objects Implementation Guide                 | 10    | Big objects creation, population, and querying                |
| `caf-dev-guide`                                    | Custom Address Fields Developer Guide            | 10    | Custom address field creation and management                  |
| `change-data-capture`                              | Change Data Capture Developer Guide              | 79    | Near-real-time Salesforce record change notifications         |
| `chatterapi`                                       | Connect REST API Developer Guide                 | 2465  | Mobile, intranet, and third-party integration with Salesforce |
| `daas`                                             | Ant Migration Tool Guide                         | 30    | Metadata migration between development and production orgs    |
| `dataLoader`                                       | Data Loader Guide                                | 49    | Bulk data import and export client application                |
| `draes`                                            | Designing Record Access for Enterprise Scale     | 13    | Record access control performance optimization                |
| `federated-search`                                 | Federated Search Developer Guide                 | 7     | External information store search integration                 |
| `field-history-retention`                          | Field Audit Trail Implementation Guide           | 8     | Archived field history data retention policies                |
| `formula-date-time-tipsheet`                       | Using Date and Date/Time in Formulas             | 2     | Date conversions and calculations in formulas                 |
| `fundamentals`                                     | Lightning Platform Fundamentals                  | 1     | Lightning Platform native functionality overview              |
| `headless-identity`                                | Headless Identity Implementation Guide           | 44    | Headless identity implementation                              |
| `integration-patterns-and-practices`               | Integration Patterns and Practices               | 17    | Lightning Platform integration strategies                     |
| `maps-developer-guide`                             | Salesforce Maps Apex Developer Guide             | 17    | Salesforce Maps Apex developer reference                      |
| `mc-apis`                                          | Marketing Cloud API                              | 809   | Marketing Cloud API developer documentation                   |
| `mc-app-development`                               | Marketing Cloud Package Development              | 45    | Marketing Cloud package management                            |
| `mc-getting-started`                               | Get Started, Marketing Cloud Developers          | 3     | Marketing Cloud developer onboarding                          |
| `mc-programmatic-content`                          | Programmatic Marketing Content                   | 381   | Marketing Cloud programmatic content development              |
| `mc-sdks`                                          | Marketing Cloud SDKs                             | 57    | Marketing Cloud SDK developer documentation                   |
| `metadata-api`                                     | Metadata API                                     | 688   | Metadata deployment, retrieval, and metadata types            |
| `mobile-offline`                                   | Mobile and Offline Developer Guide               | 174   | Lightning web components for mobile and offline               |
| `mobile-sdk`                                       | Mobile SDK Development Guide                     | 409   | Native, React Native, and hybrid mobile app development       |
| `object-reference`                                 | Object Reference for the Salesforce Platform     | 1777  | Standard object reference for platform interfacing            |
| `pages`                                            | Visualforce Developer Guide                      | 609   | Custom UI and app development with Visualforce                |
| `platform-connect`                                 | Canvas Developer Guide                           | 124   | Third-party application integration via Canvas                |
| `platform-encryption-rest-api-guide`               | Platform Encryption REST API                     | 1     | Encryption tenant secret management via REST                  |
| `platform-events`                                  | Platform Events Developer Guide                  | 219   | Business process connection via platform events               |
| `pushImplGuide`                                    | Mobile Notifications Implementation Guide        | 51    | Mobile push notification implementation                       |
| `restriction-rules`                                | Restriction Rules Developer Guide                | 19    | Data access restriction for security                          |
| `salesforce-app-limits-cheatsheet`                 | Developer Limits and Allocations Quick Reference | 11    | Critical Lightning Platform development limits                |
| `salesforce-developer-environment-dotnet-tipsheet` | Setting Up .NET Developer Environment            | 7     | .NET development environment configuration                    |
| `salesforce-developer-environment-tipsheet`        | Setting Up Java Developer Environment            | 11    | Java development environment configuration                    |
| `salesforce-guided-engagement`                     | Lightning Flow for Service Developer Guide       | 24    | Record page and action association for guided processes       |
| `salesforce-large-data-volumes-bp`                 | Best Practices for Large Data Volumes            | 32    | Large data volume performance optimization                    |
| `salesforce-record-access-under-the-hood`          | Record-Level Access: Under the Hood              | 10    | Data access levels and table-level implementation             |
| `salesforce-recipes-api`                           | Data Prep Recipe REST API                        | 296   | Data Prep recipe retrieval, update, and scheduling            |
| `salesforce-scheduler-developer-guide`             | Salesforce Scheduler Developer Guide             | 205   | Appointment scheduling web application APIs                   |
| `scoping-rules`                                    | Scoping Rules Developer Guide                    | 19    | User record visibility scoping rules                          |
| `secure-coding-guide`                              | Secure Coding Guide                              | 19    | Security best practices for Salesforce development            |
| `securityImplGuide`                                | Salesforce Security Guide                        | 163   | Organizational security policy implementation                 |
| `sfFieldRef`                                       | Salesforce Field Reference Guide                 | 4817  | Standard field details quick reference                        |
| `tooling-api`                                      | Tooling API                                      | 338   | Code coverage, debug logs, and custom fields                  |
| `usefulFormulaFields`                              | Examples of Advanced Formula Fields              | 21    | Advanced formula field examples for various apps              |
| `usefulValidationRules`                            | Examples of Validation Rules                     | 13    | Validation rule examples for various apps                     |

## Revenue Cloud

| Domain ID       | Name                                          | Files | Description                                                     |
| --------------- | --------------------------------------------- | ----- | --------------------------------------------------------------- |
| `revenue-cloud` | Revenue Cloud / Agentforce Revenue Management | 1323  | Product catalog, pricing, billing, Dynamic Revenue Orchestrator |

## Sales

| Domain ID                                  | Name                                | Files | Description                             |
| ------------------------------------------ | ----------------------------------- | ----- | --------------------------------------- |
| `blng-dev`                                 | Salesforce Billing Developer Guide  | 142   | Salesforce Billing development guides   |
| `channel-revenue-management-dev-guide`     | Channel Revenue Management          | 131   | Channel revenue programmatic management |
| `clm-developer-guide`                      | Salesforce Contracts                | 169   | Contract lifecycle management APIs      |
| `cpq-dev-api`                              | Salesforce CPQ Developer Guide      | 79    | Salesforce CPQ API and plugins          |
| `cpq-plugins`                              | Salesforce CPQ Plugins              | 42    | CPQ plugin definitions and usage        |
| `esm-developer-guide`                      | Enterprise Sales Management         | 51    | Enterprise sales APIs and resources     |
| `referral-marketing`                       | Referral Marketing Developer Guide  | 92    | Customer referral program APIs          |
| `salesforce-feedback-management-dev-guide` | Feedback Management Developer Guide | 98    | Customer survey and feedback APIs       |

## Service Cloud

| Domain ID                               | Name                                       | Files | Description                                             |
| --------------------------------------- | ------------------------------------------ | ----- | ------------------------------------------------------- |
| `api-cti`                               | Open CTI Developer Guide                   | 78    | Computer-telephony integration via JavaScript API       |
| `case-feed-dev`                         | Publisher and Quick Action Developer Guide | 24    | Case feed customization with LWC, Visualforce, and Apex |
| `field-service`                         | Field Service                              | 247   | Work orders, scheduling, mobile, territories            |
| `knowledge-dev`                         | Salesforce Knowledge Developer Guide       | 106   | Knowledge base via SOAP, REST, Metadata, SOQL, SOSL     |
| `live-agent-dev`                        | Service Cloud Chat Developer Guide         | 52    | Customized chat windows, buttons, and forms             |
| `live-agent-rest`                       | Chat REST API Developer Guide              | 46    | Chat extension to native mobile apps                    |
| `omni-channel-dev`                      | Omni-Channel Developer Guide               | 20    | Omni-Channel records and console integration            |
| `service-cloud`                         | Service Cloud                              | 344   | Cases, knowledge, omni-channel, entitlements            |
| `service-connector-api-developer-guide` | Service Cloud Connector API Reference      | 91    | Partner telephony and CCaaS integration                 |
| `service-sdk-android`                   | Embedded Service Chat SDK for Android      | 41    | Service Cloud Chat in native Android apps               |
| `service-sdk-ios`                       | Embedded Service Chat SDK for iOS          | 47    | Service Cloud Chat in native iOS apps                   |
| `snapins-web-dev`                       | Embedded Service Chat for Web              | 45    | Embedded Service Chat web deployment customization      |
| `voice-developer-guide`                 | Service Cloud Voice Implementation Guide   | 95    | Service Cloud Voice technical implementation            |
| `voice-pt-developer-guide`              | Voice for Partner Telephony                | 88    | Partner telephony system integration                    |
| `workforce-engagement`                  | Workforce Engagement Developer Guide       | 8     | Workforce Engagement development guide                  |

## Work.com

| Domain ID              | Name                     | Files | Description               |
| ---------------------- | ------------------------ | ----- | ------------------------- |
| `workdotcom-dev-guide` | Work.com Developer Guide | 79    | Custom Work.com solutions |

---

## Usage

### Environment Variable (startup)

```bash
# Restrict to specific domains at startup
SF_ACTIVE_DOMAINS=revenue-cloud,clm-developer-guide,blng-dev
```

### Runtime (via MCP tool)

```
# Suggest domains for your task
sf_suggest_domains("contract lifecycle management")

# Set active domains
sf_set_active_domains(domains: ["revenue-cloud", "clm-developer-guide", "blng-dev"])

# Clear restrictions
sf_set_active_domains(clear: true)
```

### MCP Client Configuration

```json
{
  "mcpServers": {
    "sf-docs": {
      "command": "npx",
      "args": ["-y", "@sfdxy/sf-documentation-knowledge"],
      "env": {
        "SF_ACTIVE_DOMAINS": "revenue-cloud,clm-developer-guide"
      }
    }
  }
}
```
