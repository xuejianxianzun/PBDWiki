After clicking the `Start crawl` button, the downloader displays the `Stop Crawling` button, which you can click to stop the crawling process.

When stopping, if the downloader has already crawled some works, it will retain them and prepare to start downloading.

**Note:**

When clicking the `Stop Crawling` button, if the downloader has not yet generated crawl results, it will simply stop crawling and will not prepare to start downloading.

This is because the downloader's crawling is usually divided into two stages:
1. The downloader first retrieves the list of work IDs. In this stage, the downloader only saves the work IDs and does not have detailed data. So if you click the `Stop Crawling` button in this stage, there are no crawl results in the downloader, and thus it cannot start downloading.
2. After the downloader retrieves the list of work IDs, it retrieves detailed data for each work and generates crawl results. The top log will display "Starting to retrieve work information". If you click the `Stop Crawling` button in this stage, the downloader will retain the crawl results (if any) and prepare to start downloading.
