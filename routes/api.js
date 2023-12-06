// Gada reupload" 😏
// Klo mau colong fitur, jgn asal colong bodoh ntr api lu eror

// Thanks to ( jgn di hapus jamet)
/*
- Loli Killers
- Rynz
- Eka Danuarta
- ZeeoneOfc 
- danzzcoding [database api] 
- Creative Time [ For Template ]
- Dan kalian semua yang memakai script api ini
*/
__path = process.cwd();

require('../settings.js');
var express = require('express');
var axios = require('axios');
var fetch = require('node-fetch');
var request = require('request');
var fs = require('fs');
var router = express.Router();
var creator = global.creator
const {
    limitAdd,
    isLimit,
    cekKey,
    checkLimit
} = require('../MongoDB/function');

const scr = require('@bochilteam/scraper')
const {
    color,
    bgcolor
} = require(__path + '/lib/color.js');
const {
    fetchJson
} = require(__path + '/lib/fetcher.js')
const options = require(__path + '/lib/options.js');
const {
    getBuffer
} = require(__path + '/lib/functions.js');
const oxy = require(__path + '/lib/oxy.js');

router.get('/cekapikey', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    const limit = await checkLimit(apikey);
    res.send({
        status: 200,
        apikey: apikey,
        limit: limit
    });
})
// cecan
router.get('/cecan/china', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/QdncScPQ/1.jpg", "https://i.postimg.cc/zv1CK5Q4/10.jpg", "https://i.postimg.cc/4x3zzW84/11.jpg", "https://i.postimg.cc/pXCfhwJ1/12.jpg", "https://i.postimg.cc/brHQRWcr/13.jpg", "https://i.postimg.cc/zX8wfzKg/14.jpg", "https://i.postimg.cc/QM91zHGR/15.jpg", "https://i.postimg.cc/43DVRsXn/16.jpg", "https://i.postimg.cc/nrkDmmBQ/17.jpg", "https://i.postimg.cc/CLhDgvpC/18.jpg", "https://i.postimg.cc/fT8dTxMG/19.jpg", "https://i.postimg.cc/RFwfMy0d/2.jpg", "https://i.postimg.cc/nrZmM2jJ/20.jpg", "https://i.postimg.cc/dVDy7L1L/21.jpg", "https://i.postimg.cc/kMF8z0zX/22.jpg", "https://i.postimg.cc/VkTbXmr4/23.jpg", "https://i.postimg.cc/3wv0BV2h/24.jpg", "https://i.postimg.cc/V6PrHgFC/25.jpg", "https://i.postimg.cc/MT0MkBsr/26.jpg", "https://i.postimg.cc/RhM3v0yC/27.jpg", "https://i.postimg.cc/D0BS0T3r/28.jpg", "https://i.postimg.cc/VsRrDj0J/29.jpg", "https://i.postimg.cc/TY3ySpnC/3.jpg", "https://i.postimg.cc/NfCywB4Y/30.jpg", "https://i.postimg.cc/3RZRfTRs/31.jpg", "https://i.postimg.cc/HnZLH9b3/4.jpg", "https://i.postimg.cc/rFsmj7LH/5.jpg", "https://i.postimg.cc/4N03Swfx/6.jpg", "https://i.postimg.cc/66YqdtFR/7.jpg", "https://i.postimg.cc/rwtpXWsC/8.jpg", "https://i.postimg.cc/wB8j6vsK/9.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/vietnam', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/QdncScPQ/1.jpg", "https://i.postimg.cc/zv1CK5Q4/10.jpg", "https://i.postimg.cc/4x3zzW84/11.jpg", "https://i.postimg.cc/pXCfhwJ1/12.jpg", "https://i.postimg.cc/brHQRWcr/13.jpg", "https://i.postimg.cc/zX8wfzKg/14.jpg", "https://i.postimg.cc/QM91zHGR/15.jpg", "https://i.postimg.cc/43DVRsXn/16.jpg", "https://i.postimg.cc/nrkDmmBQ/17.jpg", "https://i.postimg.cc/CLhDgvpC/18.jpg", "https://i.postimg.cc/fT8dTxMG/19.jpg", "https://i.postimg.cc/RFwfMy0d/2.jpg", "https://i.postimg.cc/nrZmM2jJ/20.jpg", "https://i.postimg.cc/dVDy7L1L/21.jpg", "https://i.postimg.cc/kMF8z0zX/22.jpg", "https://i.postimg.cc/VkTbXmr4/23.jpg", "https://i.postimg.cc/3wv0BV2h/24.jpg", "https://i.postimg.cc/V6PrHgFC/25.jpg", "https://i.postimg.cc/MT0MkBsr/26.jpg", "https://i.postimg.cc/RhM3v0yC/27.jpg", "https://i.postimg.cc/D0BS0T3r/28.jpg", "https://i.postimg.cc/VsRrDj0J/29.jpg", "https://i.postimg.cc/TY3ySpnC/3.jpg", "https://i.postimg.cc/NfCywB4Y/30.jpg", "https://i.postimg.cc/3RZRfTRs/31.jpg", "https://i.postimg.cc/HnZLH9b3/4.jpg", "https://i.postimg.cc/rFsmj7LH/5.jpg", "https://i.postimg.cc/4N03Swfx/6.jpg", "https://i.postimg.cc/66YqdtFR/7.jpg", "https://i.postimg.cc/rwtpXWsC/8.jpg", "https://i.postimg.cc/wB8j6vsK/9.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/thailand', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/PJtYFxrk/1.jpg", "https://i.postimg.cc/445zHzB4/10.jpg", "https://i.postimg.cc/RFTnfB1p/11.jpg", "https://i.postimg.cc/RZ3fY29q/12.jpg", "https://i.postimg.cc/jd3PZtpG/13.jpg", "https://i.postimg.cc/65qG7F8z/14.jpg", "https://i.postimg.cc/T3WL0mqD/15.jpg", "https://i.postimg.cc/6q54fmYW/16.jpg", "https://i.postimg.cc/rmgKs9cv/17.jpg", "https://i.postimg.cc/j2Ld50M7/18.jpg", "https://i.postimg.cc/YC12jxzb/19.jpg", "https://i.postimg.cc/MHMqw0G0/2.jpg", "https://i.postimg.cc/63Hpt5fK/20.jpg", "https://i.postimg.cc/zBLGDYtR/21.jpg", "https://i.postimg.cc/jdnSYTwV/3.jpg", "https://i.postimg.cc/HWykfH8q/4.jpg", "https://i.postimg.cc/fycZkzxk/5.jpg", "https://i.postimg.cc/MK0KpDDt/6.jpg", "https://i.postimg.cc/5NJbTzVz/7.jpg", "https://i.postimg.cc/QtWjGkCQ/8.jpg", "https://i.postimg.cc/C5TSFBnW/9.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/indonesia', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/sgYy39Yy/1.jpg", "https://i.postimg.cc/k5wmbJYp/10.jpg", "https://i.postimg.cc/XJJ0KRT7/11.jpg", "https://i.postimg.cc/PfCCT9Pj/12.jpg", "https://i.postimg.cc/GpbRt8KD/13.jpg", "https://i.postimg.cc/gkRr6hVt/14.jpg", "https://i.postimg.cc/rsRX3SVB/15.jpg", "https://i.postimg.cc/52S0sMkw/16.jpg", "https://i.postimg.cc/tTY4RnR5/17.jpg", "https://i.postimg.cc/4d7XRCw2/18.jpg", "https://i.postimg.cc/k55nwRSm/19.jpg", "https://i.postimg.cc/QCcsVp2p/2.jpg", "https://i.postimg.cc/zGz5XH0g/20.jpg", "https://i.postimg.cc/y8LKJ6br/21.jpg", "https://i.postimg.cc/WbjcXJRH/22.jpg", "https://i.postimg.cc/m2wfq2B2/23.jpg", "https://i.postimg.cc/MGghRnbt/24.jpg", "https://i.postimg.cc/1t6bKyvS/25.jpg", "https://i.postimg.cc/fyNp21P9/26.jpg", "https://i.postimg.cc/J05g9Pwd/27.jpg", "https://i.postimg.cc/m2TKQfCx/28.jpg", "https://i.postimg.cc/MKtN5Pmn/29.jpg", "https://i.postimg.cc/PxGRJBTR/3.jpg", "https://i.postimg.cc/cHQ5nXJ4/30.jpg", "https://i.postimg.cc/bY9BYCMm/31.jpg", "https://i.postimg.cc/QdH4bXMz/32.jpg", "https://i.postimg.cc/Rhgd78x9/33.jpg", "https://i.postimg.cc/sD2wjV52/34.jpg", "https://i.postimg.cc/pXV1mQMR/35.jpg", "https://i.postimg.cc/sfmTCBQ8/36.jpg", "https://i.postimg.cc/ZRcxmgR3/37.jpg", "https://i.postimg.cc/mkgNgwzn/38.jpg", "https://i.postimg.cc/pXyJNsth/4.jpg", "https://i.postimg.cc/13q0X4Xy/5.jpg", "https://i.postimg.cc/DZBLHXjP/7.jpg", "https://i.postimg.cc/RhYfVzz3/8.jpg", "https://i.postimg.cc/TYZmzG9F/9.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/korea', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg", "https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg", "https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg", "https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg", "https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg", "https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg", "https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg", "https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg", "https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg", "https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg", "https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg", "https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg", "https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg", "https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg", "https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg", "https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg", "https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg", "https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg", "https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/japan', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg", "https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg", "https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg", "https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg", "https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg", "https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg", "https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg", "https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg", "https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg", "https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg", "https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg", "https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg", "https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg", "https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg", "https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg", "https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg", "https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg", "https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/cecan/malaysia', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = ["https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg", "https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg", "https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg", "https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg", "https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg", "https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg", "https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg", "https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg", "https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg", "https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg", "https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg", "https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg", "https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg", "https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg", "https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg", "https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg", "https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg", "https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg", "https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg", "https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg", "https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg", "https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})

//downloader
router.get('/download/facebook', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    const result = await scr.savefrom(url)
    res.json({
            result
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/download/instagram', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter username"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });

    let iglu = await scr.instagramdl(url).catch(async _ => await scr.instagramdlv2(url)).catch(async _ => await scr.instagramdlv3(url)).catch(async _ => await scr.instagramdlv4(url))
    var result = iglu;
    res.json({
            result
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/download/pinterest', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.q
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter q"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    scr.pinterest(url)
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/download/tiktok', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    let ttlu = await scr.tiktokdl(url).catch(async _ => await scr.tiktokdlv2(url))
    var result = ttlu;
    res.json({
            result
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/download/ytmp3', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    const {
        id,
        thumbnail,
        audio: _audio,
        title
    } = await scr.youtubedlv2(url)
    try {
        for (let i in _audio) {
            audio = _audio[i]
            let kin = await audio.download()
            res.json({
                id: id,
                thumbnail: thumbnail,
                title: title,
                size: audio.fileSize,
                download: kin
            })
        }
    } catch {
        console.log(e);
        res.json(loghandler.error)
    }
    limitAdd(apikey);
})

router.get('/download/ytmp4', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    const {
        id,
        thumbnail,
        video: _video,
        title
    } = await scr.youtubedlv2(url)
    try {
        for (let i in _video) {
            video = _video[i]
            let kin = await video.download()
            res.json({
                id: id,
                thumbnail: thumbnail,
                title: title,
                size: video.fileSize,
                download: kin
            })
        }
    } catch {
        console.log(e);
        res.json(loghandler.error)
    }
    limitAdd(apikey);
})
// news
router.get('/news/cnn', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/news/cnbc', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/news/republika', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/news/tempo', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                author: creator,
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/news/antara', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                author: creator,
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/news/kumparan', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                author: creator,
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

//photooxy
router.get('/photooxy/flaming', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    oxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text])
        .then((data) => {
            res.set({
                'Content-Type': 'image/png'
            })
            res.send(data)
        })
        .catch((err) => {
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/photooxy/shadow-sky', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    oxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
        .then((data) => {
            res.set({
                'Content-Type': 'image/png'
            })
            res.send(data)
        })
        .catch((err) => {
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/photooxy/metallic', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    oxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text])
        .then((data) => {
            res.set({
                'Content-Type': 'image/png'
            })
            res.send(data)
        })
        .catch((err) => {
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/photooxy/naruto', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    oxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
        .then((data) => {
            res.set({
                'Content-Type': 'image/png'
            })
            res.send(data)
        })
        .catch((err) => {
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/photooxy/pubg-mobile', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    var text2 = req.query.text2
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text || !text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text & text2"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    oxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text, text2])
        .then((data) => {
            res.set({
                'Content-Type': 'image/png'
            })
            res.send(data)
        })
        .catch((err) => {
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

// search api
router.get('/search/google-image', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter query"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    scr.googleImage(text).then(data => {
            var data = data;
            res.json({
                status: 200,
                data,
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/search/wallpaper', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter query"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    scr.wallpaper(text)
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/search/pinterest', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter query"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    scr.pinterest(text)
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = [
    "https://media.discordapp.net/attachments/530635618003451904/683209653261303808/yande.re_613351_sample_ass_azur_lane_cameltoe_damao_yu_feet_pantsu_stockings_taihou_azur_lane_thighh.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209648664215585/yande.re_612976_sample_4min_ass_azur_lane_cameltoe_dido_azur_lane_erect_nipples_maid_no_bra_pantsu_s.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209646592360448/yande.re_612245_sample_animal_ears_ass_chita_ketchup_dress_nekomimi_pantsu_skirt_lift_tail_thighhigh.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209641865510953/yande.re_609551_sample_ass_breasts_censored_cosplay_cum_dress_kagami_masara_kkkk12103_nipples_no_bra.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683076919494836254/021bcgzcnqj41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683049635052257371/uhuw5wk9koj41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682664131551166516/sample_2a3583974d06d7cdb2879b3704483e49afca1e04.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376635600863297/I6KHKiN_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376627853852729/czUyMXO_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376348500623390/xivk9in35hh41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682011009254424656/o86kietucri41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/681926896254058761/1rf2m.png",
    "https://media.discordapp.net/attachments/530635618003451904/681790372628004874/ec32416771771cea8a46f077c62fe174.png",
    "https://media.discordapp.net/attachments/530635618003451904/681718857714368585/NV0K3vI_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/681501982216814617/w14gz2qk8vi41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680513877083160606/se17yezz5ci41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680164098704670787/a50311b.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680058123117002762/z1zzuncdhyh41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679872747211587584/9cb04e3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679408491005214750/K0aqful_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679408490799955973/SVF1RCC_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678945529714966528/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678944005433720835/4cwyar9q9ch41.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731683771711519/7a720f4.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731683494756352/427c8bd.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678731683104555039/a21043d.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731682257436682/7e5de87.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/674661587642220554/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/674531741607788544/3bad222.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/670305766011306014/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/669517376601194506/147263102711.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668921119612600320/8c59c403a79d7a93c43dde5420ee2f32-1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668534985493315593/71265348_p0_master1200.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668492258626109450/tfb6JtD.png",
    "https://media.discordapp.net/attachments/530635618003451904/668074277848875025/75054880_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/667324677143789571/51828042_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/666773669393203204/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666773668940087324/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666677930122018816/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666442962393235476/8b3edf6.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666063929889390592/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665995519398772747/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665989868773441558/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665966830917255229/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665656877966819363/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665555056480878592/77179757_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664651543630446602/Ass_Hentai_2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664651508843020337/Ass_Hentai_4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487800885297/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487335186453/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487335186452/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664504965666045964/63621044_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664495931634352128/78472811_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664470296979570688/78414823_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/662609030912540682/IMG_20200103_115007.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/660970365584932869/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/659410834728026122/bb84ff3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/658968417923235842/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/657016709387124747/509a7f2.png",
    "https://media.discordapp.net/attachments/530635618003451904/656535440756834337/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656245127186087949/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656245126162808865/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656242667180785704/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656014775070883850/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655967462113673226/9673dff.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655960073234808852/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655614002189303839/image4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655614001006247943/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459338437001236/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459337699065856/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459337271115776/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334662763446272/image8.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334662037700608/image6.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334661458755584/image4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334660947312650/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334660410310667/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/654371061193768996/7701640.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651117615397339181/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651107236386701315/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651103042778955780/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/650210253048381481/Anime-Musashi-28Kantai-Collection29-Kantai-Collection-Damao-YU-5583661.png",
    "https://media.discordapp.net/attachments/530635618003451904/645976442668187659/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/645976353878966278/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/644296052991721502/3ed2192.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643475925073264640/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643475746387394570/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643415157304983574/oGNHa20g.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641680793017778177/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641680709198807042/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641679582327734272/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641163798648061972/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641153902733164574/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641149253854429194/image0.png",
    "https://media.discordapp.net/attachments/530635618003451904/641146964981055500/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641146910295588905/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641146900942422017/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/640706885242191872/54f4c1f.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639759248938631188/thicc-test-1524027_01DRJN1D71Z2V661MCAZHG9815.640x0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639267405431832576/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639260355465445387/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639246684098134037/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639101408892813332/ab481d843e8c8970d89e6aef990a48796202596d.png",
    "https://media.discordapp.net/attachments/530635618003451904/638470198764109837/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638430850064842762/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638429542205358081/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638429508327702528/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638182368858996776/3c2583.png",
    "https://media.discordapp.net/attachments/530635618003451904/638103647015927809/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638103575129620530/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/637878174000087045/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/637295053307641886/image0.jpg",
    "https://konachan.com/sample/1155676c3d40044e9e68cc8c5a8a70e1/Konachan.com%20-%20316708%20sample.jpg",
    "https://konachan.com/sample/d7b1e0f18c3dd52e5698f09ff088255c/Konachan.com%20-%20316687%20sample.jpg",
    "https://konachan.com/sample/5cd6c58baa80681607bd5ae43071f6d2/Konachan.com%20-%20316669%20sample.jpg",
    "https://konachan.com/sample/09fbd31d111262526f98cdd691bc14e1/Konachan.com%20-%20316638%20sample.jpg",
    "https://konachan.com/sample/52730995ccd5136bb6c8524ab7363396/Konachan.com%20-%20316634%20sample.jpg",
    "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg",
    "https://konachan.com/sample/f42af31763ede31e6ed3a5e2b40436e9/Konachan.com%20-%20316632%20sample.jpg",
    "https://konachan.com/sample/b069dbe72d0b4c459ff4ba4aa754f213/Konachan.com%20-%20316618%20sample.jpg",
    "https://konachan.com/sample/0f76bc626106913a8082450826a63a94/Konachan.com%20-%20316609%20sample.jpg",
    "https://konachan.com/sample/3a01a6e8a99193e777cfe76663707f67/Konachan.com%20-%20316606%20sample.jpg",
    "https://konachan.com/sample/143c3a759456379a818b87c4deb22b44/Konachan.com%20-%20316604%20sample.jpg",
    "https://konachan.com/image/acd0838908ceb16928c02c52819f3c1a/Konachan.com%20-%20316588%20anthropomorphism%20anus%20ass%20ayanami_%28azur_lane%29%20azur_lane%20brown_eyes%20cropped%20dark%20gray_hair%20ponytail%20pussy%20rodriguez_%28kamwing%29%20skirt%20uncensored.jpg",
    "https://konachan.com/sample/2c98a66d2999c0b3e3febc2fadb73263/Konachan.com%20-%20316587%20sample.jpg",
    "https://konachan.com/jpeg/07f957a15776d3a2b62f66fd26035e35/Konachan.com%20-%20316583%20anthropomorphism%20ass%20brown_hair%20etsunami_kumita%20gun%20headband%20kantai_collection%20long_hair%20mechagirl%20panties%20transparent%20underwear%20weapon%20wink.jpg",
    "https://konachan.com/sample/a5dd5a7a56b957a0491d4c518d4a3b1a/Konachan.com%20-%20316544%20sample.jpg",
    "https://konachan.com/sample/efc2db82a388ecaed8e3214ec2fcf065/Konachan.com%20-%20316542%20sample.jpg",
    "https://konachan.com/sample/96a183940796ce317b45ed57d786a13a/Konachan.com%20-%20316533%20sample.jpg",
    "https://konachan.com/sample/497b4caea912c0868a6de407a65c641c/Konachan.com%20-%20316520%20sample.jpg",
    "https://konachan.com/sample/b2067db7f9abf73c0e16e13dce67d0d4/Konachan.com%20-%20316504%20sample.jpg",
    "https://konachan.com/sample/9e6e9ca1debb5e67f9d6274b53d66532/Konachan.com%20-%20316458%20sample.jpg",
    "https://konachan.com/sample/79580dfece36d208c76d55fe22ca21ec/Konachan.com%20-%20316451%20sample.jpg",
    "https://konachan.com/sample/a8c586e7b3f863f618e0d2e40a6737ca/Konachan.com%20-%20316426%20sample.jpg",
    "https://konachan.com/sample/daa405a61c6a932bdc277eef0408ebc9/Konachan.com%20-%20316419%20sample.jpg",
    "https://konachan.com/sample/d040e4bd54a8c20081f4688608e7f39e/Konachan.com%20-%20316393%20sample.jpg",
    "https://konachan.com/jpeg/a5d86d85f88ff5bdf94c92977cf1c7db/Konachan.com%20-%20316371%202girls%20aliasing%20ass%20azur_lane%20blue_eyes%20blush%20brown_hair%20clouds%20dress%20gloves%20gray_hair%20long_hair%20no_bra%20nopan%20rei_kun%20signed%20skirt_lift%20sky%20watermark.jpg",
    "https://konachan.com/sample/9ba81775f516614ad9def6417be655cb/Konachan.com%20-%20316369%20sample.jpg",
    "https://konachan.com/sample/08b6ee4c4c1e20199440c12548455b8f/Konachan.com%20-%20316332%20sample.jpg",
    "https://konachan.com/sample/f3f6ea463f111501fc8cc2b9b51e5c46/Konachan.com%20-%20316327%20sample.jpg",
    "https://konachan.com/sample/2897b42d557af1972c6dba4e48c3d3a0/Konachan.com%20-%20316311%20sample.jpg",
    "https://konachan.com/sample/d3c7f65c3ba1deda7c12d02982661994/Konachan.com%20-%20316300%20sample.jpg",
    "https://konachan.com/sample/8024a9645ca1f617e47a5517a9877be4/Konachan.com%20-%20316199%20sample.jpg",
    "https://konachan.com/sample/737a707688c52fdfdd74797e76d67ee2/Konachan.com%20-%20316192%20sample.jpg",
    "https://konachan.com/sample/ceb60e71af03f2a43958ef254619c537/Konachan.com%20-%20316191%20sample.jpg",
    "https://konachan.com/sample/99c4d8b8972dc3c2bf9c7ea2788a8fdc/Konachan.com%20-%20316189%20sample.jpg",
    "https://konachan.com/jpeg/60c4f47203e1b09a085058c7fb12c9b6/Konachan.com%20-%20316185%20ass%20blush%20braids%20kanojo_okarishimasu%20miazi%20panties%20purple_eyes%20red_hair%20sakurasawa_sumi%20school_uniform%20skirt%20thighhighs%20underwear%20waifu2x.jpg",
    "https://konachan.com/jpeg/a0863dacd6d8ad422e50aeb423d80111/Konachan.com%20-%20316184%20anus%20ass%20blush%20braids%20censored%20kanojo_okarishimasu%20miazi%20nopan%20purple_eyes%20pussy%20red_hair%20sakurasawa_sumi%20school_uniform%20skirt%20thighhighs%20waifu2x%20wet.jpg",
    "https://konachan.com/sample/47d6969795731490979501abb28176b2/Konachan.com%20-%20316173%20sample.jpg",
    "https://konachan.com/sample/09db6cfe17cb284dd18a06b2ede6632e/Konachan.com%20-%20316126%20sample.jpg",
    "https://konachan.com/sample/9300481457d1856a38433de5716d9c89/Konachan.com%20-%20316108%20sample.jpg",
    "https://konachan.com/sample/0bba0d6536375fe5565b7ac51ed7db88/Konachan.com%20-%20316089%20sample.jpg",
    "https://konachan.com/sample/dcaf0a2ad0b79ff1717a18359ec44996/Konachan.com%20-%20316088%20sample.jpg",
    "https://konachan.com/sample/24dd2b888c41ee50381c826de335705b/Konachan.com%20-%20316011%20sample.jpg",
    "https://konachan.com/sample/139b396b35f3dfcd24ee77952170b1b5/Konachan.com%20-%20316002%20sample.jpg",
    "https://konachan.com/sample/d274dae687e5755fa73dfe709de90b47/Konachan.com%20-%20316017%20sample.jpg",
    "https://konachan.com/sample/6b56f616636dee37b9cd7a3f4286bb9c/Konachan.com%20-%20316447%20sample.jpg",
    "https://konachan.com/sample/96f609d7d44c728efc56981706925b31/Konachan.com%20-%20315247%20sample.jpg",
    "https://konachan.com/sample/f9fa53d9c84cb91e888ffebbaadb60dd/Konachan.com%20-%20314894%20sample.jpg",
    "https://konachan.com/sample/6e240863e0243abfe6bb8d959464fa7c/Konachan.com%20-%20314481%20sample.jpg",
    "https://konachan.com/sample/72faaad5c52e32d951f30c92954bee2e/Konachan.com%20-%20314326%20sample.jpg",
    "https://konachan.com/sample/d85db565ce195e5fbc3fcc4045f80fe0/Konachan.com%20-%20313418%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952689529126943/59355205_p2_-_Collection_Vol_1.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989028895621151/Hentai_nation_1.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989034469195777/Hentai_nation_1.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989081248268345/Hentai_nation_3.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989204455948298/Hentai_nation_11.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989363567788063/Hentai_nation_12.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989367719624764/Hentai_nation_4.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989378264629268/Hentai_nation_5.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989382194167888/Hentai_nation_8.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989384530657300/Hentai_nation_9.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989386887725086/Hentai_nation_10.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989398380118056/Hentai_nation_8.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000750528397312/496-iKzmSR7QPV4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016314759413850/1648-AYOTgvqxtLw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016668159803422/1694-22uvMW0T09I.jpg",
    "https://cdn.discordapp.com/attachments/707201738255368194/771373670655852575/RJ290927_img_smp1.png",
    "https://cdn.discordapp.com/attachments/707201738255368194/771377721699074048/947c1173cccc094affd65ba4d1c817b5.png",
    "https://i.imgur.com/1JJpaxX.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/nsfw/ahegao', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = [ "https://cdn.discordapp.com/attachments/770948564947304448/770950434180956160/004-7FVbFKsy0Z0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950436122525716/3d763900d18610184bdf6cc30102150f.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950437880856586/3ec23da409a88cbf4bc7daaaf9f50a3d.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770950439759380520/3f5a759d1dc69dd4ba188ec91c13bf15.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374076270215168/mogami_yoshiaki_sengoku_collection_drawn_by_r44__sample-8869386742f18651f27b9844edbf8487.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374106959544328/0d8f82d2190ab34a58dfdf70379d48bd.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374111305629696/0a35ad05c6d3d2dcce8ee41eafc1c1da.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374110911234088/00ceb0c2-a234-4489-aaf3-fd92d702dec4.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374114480455750/0a748ce5-fa8d-4893-ac86-21100d4d8111.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374115902717952/0a823293ae6d73a5a551ed96d395c085.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374115902717952/0a823293ae6d73a5a551ed96d395c085.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374197708554250/01737-B-z634ccruw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374561265713192/435-RqgSoMmr39U.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374616014225458/446-tm6e2RNhOTM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374643557695509/443-K2Hxy9c9FA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374649732104212/444-BpA5g5jM_hQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374712139415622/431-372ilODZtDw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374715062452224/00432-I0z-TRhK0dA.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374715691860008/432-99ejYgB_8EI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374719425445918/00433-D5MhVncwM40.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374725652938812/434-O2p1kFgcJXM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374729382723594/435-RqgSoMmr39U.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374735849816074/436-WNx39AwbeQ4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374742380609636/437-7jsAQbZCDMQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374854036783124/429-FiCsrief79Q.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374855333085194/418-WVRNSuH_xb0.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374859187257424/419-PE_QlfkmVUQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374863348662282/420-VAmqHHHKDo.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374867966590996/421-Rwe6_Vfq3DM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374871719837746/422_BIuU9h5cfI.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374878115889152/423-JIgerUfCsa4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374906642399252/423-U9pYBn6WlKQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374914166587392/424-Pj94NODjZoE.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374917651267624/424-qdfkiW-FP8.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374927751807016/425-FqG0DXNCF_I.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374935717052476/426-5x4J4OuuFDQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374940171665446/426-drQcdvVsNnQ.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374948978524161/427-YLirbUpKQeY.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771374956008833045/428-AAiKa5S2XDM.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/nsfw/bdsm', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = [
    "https://media.discordapp.net/attachments/531827668002275328/682642520060330037/fdbiq6ovshj41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/682430717652893754/62brFYV_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/682747340041224248/4Gg9Cp2_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/682403179966759034/TmOtKZi_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/682217495519690759/3j4PMzx_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/682097348377444353/6dr1sjocd6j41.png",
    "https://media.discordapp.net/attachments/531827668002275328/681944451509256256/s5olejpbogi41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681880153022136427/lw6pzke4m2j41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681855096870797342/ijj5qvoyc2j41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681855083830706188/boe5obvha2j41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681855060774617121/yda6zvj7a2j41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681633595336425528/1rah2.png",
    "https://media.discordapp.net/attachments/531827668002275328/681617579437326337/wqecde5s0xi41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681223233403486208/fCNMdAp_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/681072466344411293/6ACB9EE.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680816567189110803/yTj4mnP_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680487709894115333/ZrnsiEE_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680187310377009192/m9dfn0cte4h41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680187145519890496/3B0Qg2t_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680187145209905189/ohbefszcy4i41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680164120334565408/2270b80.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680058208118636562/zlqc3z4b80i41.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/680051413883289726/f68c85c.png",
    "https://media.discordapp.net/attachments/531827668002275328/680051413312864299/6ae2e79.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/679341436411445256/IUHUn9u_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/678711958500802560/484738f.png",
    "https://media.discordapp.net/attachments/531827668002275328/678711958048079882/346a200.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/678711957800484884/ddfe48b.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/678711957028864052/a1dc7ca.png",
    "https://media.discordapp.net/attachments/531827668002275328/677683354623148033/DevilHS-775781-MR.png",
    "https://media.discordapp.net/attachments/531827668002275328/677362365116841984/erzzz151lkg41.png",
    "https://media.discordapp.net/attachments/531827668002275328/677028522652467231/image1.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028522501341194/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028518609027102/image9.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028518248579103/image8.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028518021955604/image7.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028517564645376/image6.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028517325701139/image5.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028516713463808/image3.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028516285513738/image2.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028516092706816/image1.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/677028515836723220/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/676127612002631694/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/674469521481793536/lj2edPZ5AD0lLyKJu4JVuBBBOk6ly_EHuFxNx7xqWkQ.png",
    "https://media.discordapp.net/attachments/531827668002275328/674469495309336578/Ff8oAs5Q1lab8g9AwvYRsN3WE980M1638KJTiicbbqo.png",
    "https://media.discordapp.net/attachments/531827668002275328/674469461415297034/89eKMcnoEkORlVzG8KqIoZvo4xBOsa8TzSeLcLJqpxk.png",
    "https://media.discordapp.net/attachments/531827668002275328/674469432143380480/VAlo--OJwESYsuYyetifb6G7feKSvRecA7HbuOPuGKI.png",
    "https://media.discordapp.net/attachments/531827668002275328/674469228925157376/ym2eoh217i841.png",
    "https://media.discordapp.net/attachments/531827668002275328/674469195538235402/9a913fhf42a31.png",
    "https://media.discordapp.net/attachments/531827668002275328/673780241491165216/vwah47yqt4o31.png",
    "https://media.discordapp.net/attachments/531827668002275328/673775654524944424/h9mg9nb8ele41.png",
    "https://media.discordapp.net/attachments/531827668002275328/673766182691799090/FFZUenqIv9lJLYphG-syZyKyCEMH2kLzMH3hCeWgMFo.png",
    "https://media.discordapp.net/attachments/531827668002275328/673765900410945564/NZ28NeaHY6LQQmysatMVVLVESpOySnUtZORluTLASp4.png",
    "https://media.discordapp.net/attachments/531827668002275328/673764708507189261/xt8ov8wtzv931.png",
    "https://media.discordapp.net/attachments/531827668002275328/673764414343741440/vfeIOOfhUUQcZ9VA9wzVA0cdbP9UhpAVPr6qrE5X70I.png",
    "https://media.discordapp.net/attachments/531827668002275328/673764386048835604/frx8fgaPRWMth55XpBgX0AW7R4dpp0HS9b_UQ7vdyZA.png",
    "https://media.discordapp.net/attachments/531827668002275328/673760648634826783/bu8mcku29rn31.png",
    "https://media.discordapp.net/attachments/531827668002275328/673757970676449300/Qi9XysPW-OP-y8RYKOyzl9Nl0vPUh8vHH_ssyag6fr4.png",
    "https://media.discordapp.net/attachments/531827668002275328/670981689438240778/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/669512612366516234/dark_elementalist_lux_elementalist_lux_and_luxanna_crownguard_league_of_legends_drawn_by_kumiko_shib.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/666766388911931420/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/666260491626086403/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/666063880287420434/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665947713916895232/blagectzq1641.png",
    "https://media.discordapp.net/attachments/531827668002275328/665721393601577012/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665637982757191680/image3.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665637981511614477/image1.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665637981511614475/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665621659537113098/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/665608395654692864/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/664182605884686349/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/664162725005361162/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/660748893964730369/5b6fe4e2cba55c5700100546781dd46d.png",
    "https://media.discordapp.net/attachments/531827668002275328/660679829032534036/IMG_20191223_114520.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/660679680797442049/77933007_p0_master1200.png",
    "https://media.discordapp.net/attachments/531827668002275328/660154664418803748/lPe9gOi.png",
    "https://media.discordapp.net/attachments/531827668002275328/660154664418803722/cc5nzdcx0r641.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/660154435464462380/JiJjLGu.png",
    "https://media.discordapp.net/attachments/531827668002275328/660154357853192192/QY6Tinq.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/660096044037832715/80693261_1899427176856409_1937826288324575232_o.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/659482294230319140/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/658075033393954860/image3.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/658075032488116247/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/657016648254881816/7eea07a.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/656896372330725396/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/655454798136475659/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/651118987773476889/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/648392695881924609/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/648392667612577792/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/648392530982862870/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/648392239470477333/image1.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/648392239470477332/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/644958744945360906/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/644717099402657792/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/643475499301077002/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/641680857106743305/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/641136647047610408/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/640395541133393920/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/639262742175416330/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/636157286112559104/himaJYw.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/683361680012345511/vuu6i60p4wj41.png",
    "https://media.discordapp.net/attachments/531827668002275328/683517408434192416/KQ3VjfG_d.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/632998232452104202/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/632338880300843019/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/631301661557522434/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/630448178491293747/image0.png",
    "https://media.discordapp.net/attachments/531827668002275328/630448111336161300/image0.png",
    "https://media.discordapp.net/attachments/531827668002275328/630448109461438474/image0.png",
    "https://media.discordapp.net/attachments/531827668002275328/630448101211242516/image0.png",
    "https://media.discordapp.net/attachments/531827668002275328/630448093711564800/image0.png",
    "https://media.discordapp.net/attachments/531827668002275328/630446043980496906/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/630446037819064328/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/630043978040999936/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/630037129334095873/image0.jpg",
    "https://media.discordapp.net/attachments/531827668002275328/630037117044523029/image0.jpg",
    "https://konachan.com/sample/a616f14280c1c3e4c026fad4d6c32c55/Konachan.com%20-%20316710%20sample.jpg",
    "https://konachan.com/jpeg/3dfcf485e33fc56b503325ef23a78037/Konachan.com%20-%20316568%20aqua_eyes%20blonde_hair%20bondage%20braids%20cameltoe%20fang%20fate_grand_order%20fate_%28series%29%20flat_chest%20long_hair%20scarlettear33%20swimsuit%20tentacles.jpg",
    "https://konachan.com/sample/fd3336855eff4096c07b0ed3445d54e1/Konachan.com%20-%20316455%20sample.jpg",
    "https://konachan.com/sample/6b56f616636dee37b9cd7a3f4286bb9c/Konachan.com%20-%20316447%20sample.jpg",
    "https://konachan.com/sample/6d50fa9d193d2b7be8ea12f362b80c84/Konachan.com%20-%20315883%20sample.jpg",
    "https://konachan.com/sample/a92c3ad312ecc4fccf7f583e4849c1ae/Konachan.com%20-%20315884%20sample.jpg",
    "https://konachan.com/sample/346b73a9a6249b76b4d902c1e10e8f3a/Konachan.com%20-%20315828%20sample.jpg",
    "https://konachan.com/sample/647c499d8b46970042625601133a0d18/Konachan.com%20-%20315321%20sample.jpg",
    "https://konachan.com/sample/362725c208ad806b49e63f40561caeac/Konachan.com%20-%20315320%20sample.jpg",
    "https://konachan.com/sample/7e331d148a2b345d8891d4b2a9c5d7a0/Konachan.com%20-%20315248%20sample.jpg",
    "https://konachan.com/sample/96f609d7d44c728efc56981706925b31/Konachan.com%20-%20315247%20sample.jpg",
    "https://konachan.com/jpeg/0918ba4a839a54019d9134c9a53c387b/Konachan.com%20-%20315198%20anthropomorphism%20ass%20azur_lane%20bondage%20long_hair%20panties%20pantyhose%20red_hair%20see_through%20skirt%20skirt_lift%20twintails%20underwear%20yoshiheihe.jpg",
    "https://konachan.com/sample/f9fa53d9c84cb91e888ffebbaadb60dd/Konachan.com%20-%20314894%20sample.jpg",
    "https://konachan.com/sample/a5493092fa07fd55606e05b4bf98748a/Konachan.com%20-%20314756%20sample.jpg",
    "https://konachan.com/sample/bc2d55af82a86072330a918499be8788/Konachan.com%20-%20314542%20sample.jpg",
    "https://konachan.com/sample/6e240863e0243abfe6bb8d959464fa7c/Konachan.com%20-%20314481%20sample.jpg",
    "https://konachan.com/sample/72faaad5c52e32d951f30c92954bee2e/Konachan.com%20-%20314326%20sample.jpg",
    "https://konachan.com/sample/a2441778a6bafd4251936727b3bd4df3/Konachan.com%20-%20314069%20sample.jpg",
    "https://konachan.com/sample/266e384f3d043ab4a5e37c108a5a2bfd/Konachan.com%20-%20314065%20sample.jpg",
    "https://konachan.com/sample/caff5e7274a8141e95822913af15d9da/Konachan.com%20-%20314032%20sample.jpg",
    "https://konachan.com/sample/851c56b73b204a704410a44605d069aa/Konachan.com%20-%20313782%20sample.jpg",
    "https://konachan.com/jpeg/163ed4cbe0e542484733e18a953683ea/Konachan.com%20-%20313778%20aliasing%20arknights%20black_hair%20blush%20bodhi_wushushenghua%20bondage%20breasts%20chain%20cleavage%20eunectes_%28arknights%29%20flowers%20garter%20goggles%20tail.jpg",
    "https://konachan.com/sample/e94bc73cafb5d81656f0f54051a3676f/Konachan.com%20-%20313642%20sample.jpg",
    "https://konachan.com/sample/0fe74ca43f2ccdb1d2406f5dfcde1a1a/Konachan.com%20-%20313640%20sample.jpg",
    "https://konachan.com/sample/bef9b55682a955d13d373f3e6f179dcd/Konachan.com%20-%20313498%20sample.jpg",
    "https://konachan.com/sample/01db1ae10738b66923954534a30ffb52/Konachan.com%20-%20313423%20sample.jpg",
    "https://konachan.com/sample/d85db565ce195e5fbc3fcc4045f80fe0/Konachan.com%20-%20313418%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001917278912543/573-16reT2pK3sc.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771017155272507412/1758-DcgdH3kfJTY.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771017302874390558/1814-5G-g9PY315s.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})
router.get('/nsfw/cuckold', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    var data = [
    "https://external-preview.redd.it/u5s6LYlHNzp1vGMkBpp_lpF31vn74g1aLd0cT3n69nk.jpg?width=640&height=905&crop=smart&auto=webp&s=330c2b07c7d20e0d29c8d633bd448df84372ef12",
    "https://i.redd.it/svlfk6pjpoa51.jpg",
    "https://preview.redd.it/px4ags2vura51.jpg?width=640&crop=smart&auto=webp&s=a7f572e4381d42825eb8982af147e36b32086a20",
    "https://preview.redd.it/eqisu83qxja51.jpg?width=640&crop=smart&auto=webp&s=54bbd433d0f3206555845a13ad7aa8a29d6eb31a",
    "https://external-preview.redd.it/8DyA_Dx4zSEL6V-7RQYO4OhjbQtvY3Ag4rlXysx_H1E.jpg?width=640&crop=smart&auto=webp&s=b15c632b0cdd50788a99c1a5fc645ce102739a9a",
    "https://preview.redd.it/oic475rmc5a51.jpg?width=640&crop=smart&auto=webp&s=bbec12eccfdd7b6733e87044b228f4ddcf8fa745",
    "https://preview.redd.it/lylstsbca0a51.jpg?width=640&crop=smart&auto=webp&s=476314691a2e8ad0d617864478ef3f391e03db4c",
    "https://preview.redd.it/hfzd4v5w90a51.jpg?width=640&crop=smart&auto=webp&s=ccbc7ccb7843d860a3e263564da4e0099418475b",
    "https://preview.redd.it/gxa5cgl2a0a51.jpg?width=640&crop=smart&auto=webp&s=d78c2096228f5fdca2ca8ee2bbfc5a43a8b7673e",
    "https://preview.redd.it/9fz5s4txe0a51.jpg?width=640&crop=smart&auto=webp&s=23e34c4b45ab6e010b45a710bb341cd7803756d5",
    "https://preview.redd.it/6verfsj2h0a51.jpg?width=640&crop=smart&auto=webp&s=e8dde94d1609b874ecb7b934342f9221f4240a7b",
    "https://preview.redd.it/qspm0fj1b0a51.jpg?width=640&crop=smart&auto=webp&s=2517d1a807c43b4e977f62dc1fbe84fa5582b378",
    "https://preview.redd.it/p7eh0n7ab0a51.jpg?width=640&crop=smart&auto=webp&s=aa441c66c7f581dce98dd74f8edc2a3f47e192ae",
    "https://preview.redd.it/qspu4gtte0a51.jpg?width=640&crop=smart&auto=webp&s=9a1e9fa1eabb8de0f7a7ca3c45e523dfc1015306",
    "https://preview.redd.it/r4brq4hgb0a51.jpg?width=640&crop=smart&auto=webp&s=49aef26c9c3cac03dbd409a33bb24f0493a67e49",
    "https://preview.redd.it/vhuh8ecqis951.jpg?width=640&crop=smart&auto=webp&s=037f5b6f2103c7addb9e7d2025800425cdd65eb0",
    "https://preview.redd.it/lq60bcd84r951.jpg?width=640&crop=smart&auto=webp&s=3c5927bcc794cd9b5c27aa06eb1bbab684e534f1",
    "https://preview.redd.it/9rfpyf8lpi951.jpg?width=640&crop=smart&auto=webp&s=a45ebf4afa922b805cf07ff277750a682ba06cc3",
    "https://i.imgur.com/jpUzn2Sl.jpg",
    "https://external-preview.redd.it/zzqHXDvEB1wxlcw_DLCYHv5t1cyy2vpPbPLGKVLL2IA.png?width=640&crop=smart&auto=webp&s=8a0189ab1532711f83fcddda72c38ab482d11574",
    "https://preview.redd.it/5ngzle9v27951.jpg?width=640&crop=smart&auto=webp&s=06aad00ee95e08a7d2f42741a23738283df2a6bf",
    "https://preview.redd.it/q2w7pdc5g2951.jpg?width=640&crop=smart&auto=webp&s=d007ad44577522f0a9a8a6b6f8e68e4d1c3d04a9",
    "https://preview.redd.it/u7ih65blu4951.jpg?width=640&crop=smart&auto=webp&s=fd8635757a72267ee7b1f43ad583c8c4f20aa881",
    "https://preview.redd.it/a09x6t5yau851.jpg?width=640&crop=smart&auto=webp&s=b4a936c682a95b3d1167d6f081f2e413fbbeeced",
    "https://preview.redd.it/0zbwmjgbos851.png?width=640&crop=smart&auto=webp&s=843927c6c0f025979b47e2a5b80c3dc3a8277df3",
    "https://external-preview.redd.it/_SBnRvsn9RsgCLA4q73UEVEIYsiU0XWMY9Wj-_gyLcQ.jpg?width=640&crop=smart&auto=webp&s=1150a801109486e3833e1f638b089b147bbee0c6",
    "https://external-preview.redd.it/TwzyTcr-UF2G7fEztN4wuyLxP9uWWcuPplg2f3MoaIQ.jpg?auto=webp&s=762b5a72e78a48c45dc1656ab380e900d8c4d8ce",
    "https://external-preview.redd.it/jLACDnpzKi2QlnP6YfJVmCgF_Q3q0RQeSzwtzHvt-x4.jpg?auto=webp&s=01b972577454e0badd9751d158c923c26faff538",
    "https://external-preview.redd.it/5IBtfs4HZFIyb6j2W4f43ECE7Qy3SC7-NxAMHqrTb2A.jpg?width=640&crop=smart&auto=webp&s=08d46297adfb28307fe67e95d42b074769caf1bc",
    "https://external-preview.redd.it/W62_5OFBWxqMTsFCSVWtFF95fzSPCQAAyvUglnP0wlU.jpg?width=640&crop=smart&auto=webp&s=bb3bb7fc8524c2a3104ebdc453e9c887b2884fad",
    "https://i.imgur.com/e1pkoFbl.jpg",
    "https://media.discordapp.net/attachments/683356351090786329/754001647390425199/xj96381n0tl51.png",
    "https://preview.redd.it/m05giq0gexk51.jpg?width=640&crop=smart&auto=webp&s=f99d6724880a60b6ca501c7bbab976fa60e00f79",
    "https://preview.redd.it/lis0v6iinek51.jpg?width=640&crop=smart&auto=webp&s=44c024e27567e76225933b233f2dee50531b63d2",
    "https://preview.redd.it/9ha5i3pvh4k51.jpg?width=640&crop=smart&auto=webp&s=8f7d8185e9dd210b28827ae7842de95231fcf612",
    "https://preview.redd.it/j5zwdq59k4k51.jpg?width=960&crop=smart&auto=webp&s=4b4d92bf5e8012c78e6f8ce898fd2fc0ed339729",
    "https://preview.redd.it/id5t6c19wuj51.jpg?width=640&crop=smart&auto=webp&s=3cff2a823fd2879ce27cf89aa8873228c8808fb2",
    "https://preview.redd.it/zf4z5nwl7gj51.jpg?width=640&crop=smart&auto=webp&s=80b6cdef314e06025ba3940c917eb15121e8b35d",
    "https://preview.redd.it/7pusux01edj51.jpg?width=640&crop=smart&auto=webp&s=cba0bb7c7e0fdb41bc3ff0d900b4480df5d625c1",
    "https://preview.redd.it/5swx9a64c9j51.jpg?width=640&crop=smart&auto=webp&s=7880a1b6fe3c728e456418f88d33c652c48b75ee",
    "https://preview.redd.it/zglkxq4fd0j51.jpg?width=640&crop=smart&auto=webp&s=32a2e988c45831642c9378a3cc2fa4bd3a876d95",
    "https://preview.redd.it/a8d135n7fsi51.jpg?width=640&crop=smart&auto=webp&s=be8cd33df8be54b3c8480c674d4ccfbfe18810c1",
    "https://preview.redd.it/qz368x2wcoi51.jpg?width=640&crop=smart&auto=webp&s=f8af6cada5dcc398ba2fa9b75dd73e5eb9865025",
    "https://img2.gelbooru.com/samples/bf/ad/sample_bfaddd4539b94f78aca053caa49a9e62.jpg",
    "https://konachan.com/sample/e6970436ee2b650d3fcde3cb4210e6f2/Konachan.com%20-%20317290%20sample.jpg",
    "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
    "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg"]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    limitAdd(apikey);
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/wirid', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/ayatkursi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/doaharian', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatshalat', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/kisahnabi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatsubuh', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatzuhur', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatmagrib', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatisya', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/islam/niatashar', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

//game
router.get('/game/tebakgambar', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    scr.tebakgambar()
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

// other
router.get('/other/github-stalk', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.username
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter username"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                author: creator,
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/other/hilih', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter kata"
    })
    fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/other/kodepos', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kota
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter kota"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/other/covid-world', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter kata"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})
router.get('/other/kbbi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter kata"
    })
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first! https://${req.hostname}/users/signup`,
        result: "error"
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit has been exhausted, reset every 12 PM'
    });
    fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            console.log(e);
            res.json(loghandler.error)
        })
    limitAdd(apikey);
})

module.exports = router
