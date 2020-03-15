$(document).ready(function () {
    function sendEvent (eventName = 'unknown', param = null) {
        // console.log('sendEvent -> ', eventName, param);
        gtag('event', eventName, param);
    }

    function linkEvent (link = '', eventName = 'unknown', param = null) {
        const origin = location.origin;
        let targetLink = link;
        if (targetLink && targetLink.indexOf(origin) > -1) {
            targetLink = targetLink.replace(origin, '');
        }
        sendEvent(eventName, { event_category: '유저 이동', event_label: targetLink });
    }

    const mainArticleLinks = $('a[data-link-name="main"]');
    mainArticleLinks.on('click', function (e) {
        linkEvent(this.href, '메인 아티클 링크 클릭');
    });

    const paginatorLinks = $('a[data-link-name="pagenator"]');
    paginatorLinks.on('click', function (e) {
        linkEvent(this.href, '페이지네이터 링크 클릭');
    });

    const categoryLinks = $('a[data-link-name="category"]');
    categoryLinks.on('click', function (e) {
        linkEvent(this.href, '카테고리 링크 클릭');
    });

    const recentPostLinks = $('a[data-link-name="recent"]');
    recentPostLinks.on('click', function (e) {
        linkEvent(this.href, '최근 글 링크 클릭');
    });

    const archiveLinks = $('a[data-link-name="archive"]');
    archiveLinks.on('click', function (e) {
        linkEvent(this.href, '아카이브 링크 클릭');
    });

    const globalMenuLinks = $('a[data-link-name="navigator"]');
    globalMenuLinks.on('click', function (e) {
        linkEvent(this.href, '메인 헤더 메뉴 클릭');
    });

    const globalMenuLogo = $('a[data-link-name="navigatorLogo"]');
    globalMenuLogo.on('click', function (e) {
        linkEvent(this.href, '메인 헤더 로고 클릭');
    });

    const tocLinks = $('a[data-link-name="toc"]');
    tocLinks.on('click', function (e) {
        linkEvent(this.href, 'TOC 클릭');
    });

    const relatedPostLinks = $('.related-posts a');
    relatedPostLinks.on('click', function () {
        linkEvent(this.href, '관련 포스팅 클릭');
    });
});