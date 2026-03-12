---
title: "Best Practices for Improving Visualforce Performance"
domain: pages
topic: best-practices-for-improving-visualforce-performance
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.890Z
estimatedTokens: 1573
keywords: [Best, Practices, Improving, Visualforce, Performance, strategies, improve, pages]
---

# Best Practices for Improving Visualforce Performance

> Learn strategies to improve the performance of
    Visualforce
    pages.

# Best Practices for Improving Visualforce Performance

Learn strategies to improve the performance of Visualforce pages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

-   **[Investigate Performance Issues](atlas.en-us.pages.meta/pages/pages_best_practices_perf_investigate.htm)**
    Visualforce is designed to provide developers with the ability to match the functionality, behavior, and performance of standard Salesforce pages. If your users experience delays, unexpected behavior, or other issues specifically around Visualforce, first investigate the possible sources of the problem.
-   **[Follow Visualforce Design Guidelines](atlas.en-us.pages.meta/pages/pages_best_practices_perf_design.htm)**
    To optimize Visualforce page performance, design task-centric pages, use standard objects and declarative features, and flatten component hierarchies.
-   **[Control Data Size](atlas.en-us.pages.meta/pages/pages_best_practices_perf_data_size.htm)**
    Visualforce pages have a 15-MB standard response limit, and smaller pages load faster than larger pages. To minimize load times, limit the amount of data that each page displays.
-   **[Cache Frequently Accessed Data](atlas.en-us.pages.meta/pages/pages_best_practices_perf_cache.htm)**
    Cache any data that is frequently accessed, such as icon graphics, and cache global data in custom settings.
-   **[Lazy Load Page Components](atlas.en-us.pages.meta/pages/pages_best_practices_perf_lazy_load.htm)**
    To reduce or delay expensive calculations, use lazy loading. With lazy loading, a page loads its essential components first and delays the other features until the user performs an action that requires the information. This technique gives users faster access to essential features and makes a large page appear more responsive, even though the entire page takes the same total time to load.
-   **[Handle Multiple Concurrent Requests](atlas.en-us.pages.meta/pages/pages_best_practices_perf_concurrent.htm)**
    Concurrent requests are long-running tasks that can block other pending tasks. To reduce delays, move code to asynchronous code blocks when possible and make sure action methods that use the <apex:actionPoller> component are lightweight.
-   **[Write Efficient Apex and SOQL](atlas.en-us.pages.meta/pages/pages_best_practices_perf_apex_soql_.htm)**
    To improve the overall performance of a Visualforce page, write efficient Apex and SOQL.
-   **[Write Efficient Getter Methods](atlas.en-us.pages.meta/pages/pages_best_practices_perf_getters.htm)**
    Visualforce requests evaluate expressions, action attributes, and other method calls. A request such as a form submission can call the getter methods in a class multiple times. With more efficient getter methods, you can prevent unnecessary lookups of the same record.
-   **[Optimize Lists and Tables](atlas.en-us.pages.meta/pages/pages_best_practices_perf_lists_tables.htm)**
    To improve the performance of Visualforce pages with lists and tables, limit the amount of data displayed per page and reduce the number of editable fields per table. You can also implement pagination or replace an <apex:pageBlockTable> component with a static HTML table.
-   **[Optimize the View State](atlas.en-us.pages.meta/pages/pages_best_practices_perf_view_state.htm)**
    To maintain a Visualforce page’s view state, Lightning Platform stores the state of components, field values, and the controller as an encrypted string in a hidden form element. The view state has a limit of 170 KB. A large view state requires longer processing times for each request, including serialization and deserialization time, and encryption and decryption time. If you reduce the view state size, then your page can load faster and stall less often.
-   **[Optimize HTML](atlas.en-us.pages.meta/pages/pages_best_practices_perf_html.htm)**
    On the server side where Visualforce validates HTML, optimized HTML improves processing efficiency. On the client side, optimized HTML makes a Visualforce page more responsive in the user’s browser.
-   **[Optimize CSS](atlas.en-us.pages.meta/pages/pages_best_practices_perf_css.htm)**
    To ensure efficient delivery to the client, optimize the CSS in a Visualforce page. Optimized CSS also improves caching and reduces load times.
-   **[Optimize JavaScript](atlas.en-us.pages.meta/pages/pages_best_practices_perf_javascript.htm)**
    To ensure efficient delivery to the client, optimize the JavaScript in Visualforce pages Optimized JavaScript also improves caching and reduces load times.
-   **[Optimize Images](atlas.en-us.pages.meta/pages/pages_best_practices_perf_images.htm)**
    Images are frequently the largest components of a web page, so they significantly affect a Visualforce page’s performance.
-   **[Prevent Fields from Dropping Off the Page](atlas.en-us.pages.meta/pages/pages_best_practices_perf_prevent_fields.htm)**
    Visualforce pages with many fields, especially those with large text area fields or with master-detail relationships to other entities, can fail to display every field requested. Data can be dropped because of batch limits and limits on the size of data returned. To prevent fields from dropping off the page, reduce the number of fields displayed. Alternatively, create a controller extension that can query child records and display the results in related lists.
-   **[Use the immediate Attribute Carefully](atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)**
    Visualforce components with the immediate attribute set to true execute an action without processing any validation rules for the associated fields on the page. This attribute should only be used if the component executes an action that navigates away from the page after completion.
-   **[Visualforce Performance Case Study](atlas.en-us.pages.meta/pages/pages_best_practices_perf_case_study.htm)**
    To understand how Visualforce performance optimizations work together, examine ways to reduce the load time of a page with a large data grid and a complex object hierarchy.

## Related Topics

- Investigate Performance Issues (atlas.en-us.pages.meta/pages/pages_best_practices_perf_investigate.htm)
- Follow Visualforce Design Guidelines (atlas.en-us.pages.meta/pages/pages_best_practices_perf_design.htm)
- Control Data Size (atlas.en-us.pages.meta/pages/pages_best_practices_perf_data_size.htm)
- Cache Frequently Accessed Data (atlas.en-us.pages.meta/pages/pages_best_practices_perf_cache.htm)
- Lazy Load Page Components (atlas.en-us.pages.meta/pages/pages_best_practices_perf_lazy_load.htm)
- Handle Multiple Concurrent Requests (atlas.en-us.pages.meta/pages/pages_best_practices_perf_concurrent.htm)
- Write Efficient Apex and SOQL (atlas.en-us.pages.meta/pages/pages_best_practices_perf_apex_soql_.htm)
- Write Efficient Getter Methods (atlas.en-us.pages.meta/pages/pages_best_practices_perf_getters.htm)
- Optimize Lists and Tables (atlas.en-us.pages.meta/pages/pages_best_practices_perf_lists_tables.htm)
- Optimize the View State (atlas.en-us.pages.meta/pages/pages_best_practices_perf_view_state.htm)
