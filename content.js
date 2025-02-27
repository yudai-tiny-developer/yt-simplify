import(chrome.runtime.getURL('common.js')).then(common => {
    if (!common.isLiveChat(location.href)) {
        main(common);
    }
});

function main(common) {
    function loadSettings() {
        chrome.storage.local.get(common.storage, data => {
            document.documentElement.style.setProperty(`--yt-simplify-prev-display`, common.value(data.prev_enabled, common.default_prev_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-prev-visibility`, common.value(data.prev_enabled, common.default_prev_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-prev-pointer-events`, common.value(data.prev_enabled, common.default_prev_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-play-display`, common.value(data.play_enabled, common.default_play_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-play-visibility`, common.value(data.play_enabled, common.default_play_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-play-pointer-events`, common.value(data.play_enabled, common.default_play_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-next-display`, common.value(data.next_enabled, common.default_next_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-next-visibility`, common.value(data.next_enabled, common.default_next_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-next-pointer-events`, common.value(data.next_enabled, common.default_next_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-volume-display`, common.value(data.volume_enabled, common.default_volume_enabled) ? 'flex' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-volume-visibility`, common.value(data.volume_enabled, common.default_volume_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-volume-pointer-events`, common.value(data.volume_enabled, common.default_volume_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-time-display`, common.value(data.time_enabled, common.default_time_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-time-visibility`, common.value(data.time_enabled, common.default_time_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-time-pointer-events`, common.value(data.time_enabled, common.default_time_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-chapter-display`, common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-chapter-visibility`, common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-chapter-pointer-events`, common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-autonav-display`, common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-autonav-visibility`, common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-autonav-pointer-events`, common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-subtitles-display`, common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-subtitles-visibility`, common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-subtitles-pointer-events`, common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-settings-display`, common.value(data.settings_enabled, common.default_settings_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-settings-visibility`, common.value(data.settings_enabled, common.default_settings_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-settings-pointer-events`, common.value(data.settings_enabled, common.default_settings_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-miniplayer-display`, common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-miniplayer-visibility`, common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-miniplayer-pointer-events`, common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-size-display`, common.value(data.size_enabled, common.default_size_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-size-visibility`, common.value(data.size_enabled, common.default_size_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-size-pointer-events`, common.value(data.size_enabled, common.default_size_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-remote-display`, common.value(data.remote_enabled, common.default_remote_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-remote-visibility`, common.value(data.remote_enabled, common.default_remote_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-remote-pointer-events`, common.value(data.remote_enabled, common.default_remote_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-fullscreen-display`, common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-fullscreen-visibility`, common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-fullscreen-pointer-events`, common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-tooltip-display`, common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-tooltip-visibility`, common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-tooltip-pointer-events`, common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty(`--yt-simplify-youtube-display`, common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'inline-block' : 'none');
            document.documentElement.style.setProperty(`--yt-simplify-youtube-visibility`, common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty(`--yt-simplify-youtube-pointer-events`, common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'unset' : 'none');
        });
    }

    chrome.storage.onChanged.addListener(loadSettings);

    loadSettings();
}