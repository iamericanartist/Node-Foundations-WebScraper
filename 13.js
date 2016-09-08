#!/usr/bin/env node

'use strict';

/////////////////// EXECUTE with "./13.js (site to look at)" ///////////////////
////// ran "chmod +x 13.js" from TERMINAL to allow execution capabilities //////
///////////////////////  npm install request (for "GET") ///////////////////////
///////////////////////  npm install cheerio (for "LOAD") //////////////////////
/////////////////////  npm install http (for "createServer") ///////////////////

const [,, ...args] = process.argv
const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

const server = createServer()

// CLI takes arg http://reddit.com or whatever site you're looking at
get(args[0], (err, _, body) => {
    const $ = load(body)
    const siteTitle = $('title')
  // console.log(siteTitle)
  process.stdout.write(`${siteTitle[0].children[0].data}\n`)
  process.exit(0)
})

server.listen(8080)
