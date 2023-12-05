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
    fetch(encodeURI(`https://raw.githubusercontent.com/YosaArdn/database-api/master/anime/ahegao.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            var result = data[Math.floor(Math.random() * data.length)];
            var requestSettings = {
                url: result.url,
                method: 'GET',
                encoding: null
            };
            request(requestSettings, function (error, response, body) {
                res.set('Content-Type', 'image/jpeg');
                res.send(body);
            });
        })
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
    fetch(encodeURI(`https://raw.githubusercontent.com/YosaArdn/database-api/master/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            var result = data[Math.floor(Math.random() * data.length)];
            var requestSettings = {
                url: result.url,
                method: 'GET',
                encoding: null
            };
            request(requestSettings, function (error, response, body) {
                res.set('Content-Type', 'image/jpeg');
                res.send(body);
            });
        })
    limitAdd(apikey);
})
router.get('/nsfw/blowjob', async (req, res, next) => {
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
    fetch(encodeURI(`https://raw.githubusercontent.com/YosaArdn/database-api/master/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            var result = data[Math.floor(Math.random() * data.length)];
            var requestSettings = {
                url: result.url,
                method: 'GET',
                encoding: null
            };
            request(requestSettings, function (error, response, body) {
                res.set('Content-Type', 'image/jpeg');
                res.send(body);
            });
        })
    limitAdd(apikey);
})
router.get('/nsfw/cuckold', async (req, res, next) => {
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
    fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            var result = data[Math.floor(Math.random() * data.length)];
            var requestSettings = {
                url: result.url,
                method: 'GET',
                encoding: null
            };
            request(requestSettings, function (error, response, body) {
                res.set('Content-Type', 'image/png');
                res.send(body);
            });
        })
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
