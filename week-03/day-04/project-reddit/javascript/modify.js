'use strict';

var thePage = document.querySelector('.main');
var submit = document.querySelector('.create');
var url = document.getElementById('url').value;
var title;
var options;
var baseUrl = 'https://time-radish.glitch.me';
var putUrl = function() { return `/posts/${id}`; }
var id;
console.log(thePage);
var xhr = new XMLHttpRequest();

function redirectToThePage() {
    thePage.addEventListener('click', function() {
        var temp = window.location.pathname.split('/');
        var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/index.html';
        window.location.pathname = thePagePathName;
    })
}

function redirectToSumit() {
    submit.addEventListener('click', function() {
        var temp = window.location.pathname.split('/');
        var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/addPost.html';
        window.location.pathname = thePagePathName;
    })
}

window.addEventListener('load', function() {
    console.log('hello');
    redirectToThePage();
    redirectToSumit();
});

function modify() {
    url = document.getElementById('url').value;
    title = document.getElementById('title').value;
    url !== undefined ? url = url : url = '';
    console.log('url', url);
    console.log('title', title);
    id = window.location.search.split('=')[1];
    console.log('id', id);
    if (title == null || title == undefined || title == '') {
        alert('title can not be emptyl!');
    } else {
        var postObj = {
            "title": title,
            "href": url
        };
        var option = JSON.stringify(postObj);
        console.log('submitObj', postObj);
        messageRequester(baseUrl + putUrl(), 'PUT', logResponse, option);
    }
}

function logResponse() {
    var data = JSON.parse(xhr.response);
    console.log('logResponse', data);
    var temp = window.location.pathname.split('/');
    var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/index.html';
    window.location.pathname = thePagePathName;
}

// function setHeader() {
//     xhr.setRequestHeader('Username', 'Kristof4');
// }

function messageRequester(url, method, doFuntion, option, setHeader) {
    console.log(url);
    xhr.onreadystatechange = function() {
        console.log('state', xhr.readyState);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log('status', xhr.status);
            if (xhr.status == 200) {
                if (doFuntion !== undefined) {
                    doFuntion();
                }
            } else {
                console.log('error', xhr.statusText);
            }
        }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (setHeader !== undefined) {
        setHeader();
    }
    xhr.send(option);
}