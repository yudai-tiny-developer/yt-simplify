(() => {
    const targets = [
        { name: "prev", selector: 'div#movie_player a.ytp-prev-button:not(:empty)' },
        { name: "play", selector: 'div#movie_player button.ytp-play-button:not(:empty)' },
        { name: "next", selector: 'div#movie_player a.ytp-next-button:not(:empty)' },
        { name: "volume", selector: 'div#movie_player span.ytp-volume-area:not(:empty)' },
        { name: "time", selector: 'div#movie_player div.ytp-time-display:not(.ytp-live):not(:empty)' },
        { name: "chapter", selector: 'div#movie_player div.ytp-chapter-container:not(:has([disabled])):not(:empty)' },
        { name: "autonav", selector: 'div#movie_player button[data-tooltip-target-id="ytp-autonav-toggle-button"]:not(:empty)' },
        { name: "subtitles", selector: 'div#movie_player button.ytp-subtitles-button:not(:empty)' },
        { name: "settings", selector: 'div#movie_player button.ytp-settings-button:not(:empty)' },
        { name: "pip", selector: 'div#movie_player button.ytp-pip-button:not(:empty)' },
        { name: "size", selector: 'div#movie_player button.ytp-size-button:not(:empty)' },
        { name: "remote", selector: 'div#movie_player button.ytp-remote-button:not([aria-expanded="false"]):not(:empty)' },
        { name: "fullscreen", selector: 'div#movie_player button.ytp-fullscreen-button:not(:empty)' },
        { name: "tooltip", selector: 'div#movie_player div.ytp-tooltip:not(.ytp-preview):not(:empty)' },
        { name: "youtube", selector: 'div#movie_player a.ytp-youtube-button:not(:empty)' },
        { name: "fullscreen-grid", selector: 'div#movie_player.html5-video-player.ytp-fullscreen.ytp-grid-scrollable>div.ytp-fullscreen-grid' },
        { name: "search-voice", selector: 'ytd-masthead#masthead div#voice-search-button' },
        { name: "create", selector: 'ytd-masthead#masthead>div#container>div#end>div#buttons>ytd-button-renderer' },
        { name: "notifications", selector: 'ytd-masthead#masthead ytd-notification-topbar-button-renderer' },
        { name: "account", selector: 'ytd-masthead#masthead ytd-topbar-menu-button-renderer' },
        { name: "sidebar-home-shorts-section", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/"])' },
        { name: "sidebar-home", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/"])' },
        { name: "sidebar-shorts", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/"]) ytd-guide-entry-renderer:has(a#endpoint:not([href="/"]))' },
        { name: "sidebar-subscriptions-section", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/feed/subscriptions"])' },
        { name: "sidebar-subscriptions", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/subscriptions"])' },
        { name: "sidebar-subscriptions-channels", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="/@"]), tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/feed/subscriptions"]) ytd-guide-entry-renderer:has(a#endpoint[href^="/channel/"]), tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="/c/"]), tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="/user/"]), tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/feed/subscriptions"]) ytd-guide-entry-renderer:not(:has(a#endpoint[href="/feed/subscriptions"])):has(tp-yt-paper-item)' },
        { name: "sidebar-library-section", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/feed/you"])' },
        { name: "sidebar-library", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/you"])' },
        { name: "sidebar-history", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/history"])' },
        { name: "sidebar-playlists", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/playlists"])' },
        { name: "sidebar-watch-later", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/playlist?list=WL"])' },
        { name: "sidebar-liked-videos", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/playlist?list=LL"])' },
        { name: "sidebar-your-videos", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="https://studio.youtube.com/channel/"])' },
        { name: "sidebar-downloads", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/downloads"])' },
        { name: "sidebar-explore-section", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href^="/feed/storefront"])' },
        { name: "sidebar-music", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"])' },
        { name: "sidebar-movies", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="/feed/storefront"])' },
        { name: "sidebar-live", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/channel/UC4R8DWoMoI7CAwX8_LjQHig"])' },
        { name: "sidebar-gaming", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/gaming"])' },
        { name: "sidebar-news", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/channel/UCYfdidRxbB8Qhf0Nx7ioOYw"])' },
        { name: "sidebar-sports", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"])' },
        { name: "sidebar-courses", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/feed/courses_destination"])' },
        { name: "sidebar-more-from-youtube-section", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href="/premium"])' },
        { name: "sidebar-youtube-premium", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="/premium"])' },
        { name: "sidebar-youtube-music", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href="https://music.youtube.com/"])' },
        { name: "sidebar-youtube-kids", selector: 'tp-yt-app-drawer ytd-guide-entry-renderer:has(a#endpoint[href^="https://www.youtubekids.com/"])' },
        { name: "sidebar-report-history", selector: 'tp-yt-app-drawer ytd-guide-section-renderer:has(a#endpoint[href^="/reporthistory"])' },
        { name: "sidebar-about", selector: 'tp-yt-app-drawer #footer' }
    ];

    function logStyles(el, name) {
        const cs = getComputedStyle(el);
        return {
            name,
            display: cs.display,
            visibility: cs.visibility,
            pointerEvents: cs.pointerEvents
        };
    }

    function run() {
        const results = [];

        targets.forEach(({ name, selector }) => {
            const elements = document.querySelectorAll(selector);
            if (elements.length === 0) {
                results.push({ name, status: "NOT_FOUND" });
                return;
            }

            elements.forEach((el, i) => {
                results.push({
                    ...logStyles(el, `${name}[${i}]`)
                });
            });
        });

        console.table(results);
        return results;
    }
    run();
})();