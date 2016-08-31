# Web Scraper
## Node Foundations / Exercise 13 / Web Scraper


![Web Scraper](webScraperScrn.jpg?raw=true "Web Scraper Screenshot")
***


Write a program that performs accepts a http link as command line argument.
The program should visit the page, grab the title, and print it to the
console.

Use the core Node.js standard `http` module for making a request and the
[Cheerio](https://cheerio.js.org/) module for working with the HTML.

Expected:

```bash
$ ./13.js https://google.com
Google
```

```bash
$ ./13.js http://cnn.com
CNN - Breaking News, Latest News and Videos
```

```bash
$ ./13.js http://reddit.com
reddit: the front page of the internet
```

Bonus:
-   Handle 301 redirects


***
[Original Exercise Link](https://github.com/nashville-software-school/node-milestones/blob/master/01-foundations/exercises/13-web-scraper.md)
