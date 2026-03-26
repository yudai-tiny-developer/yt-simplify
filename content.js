import(chrome.runtime.getURL('common.js')).then(common => {
    if (!common.isLiveChat(location.href)) {
        main(common);
    }
});

function main(common) {
    function loadSettings() {
        chrome.storage.local.get(common.storage, data => {
            document.documentElement.style.setProperty('--yt-simplify-prev-display', common.value(data.prev_enabled, common.default_prev_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-prev-visibility', common.value(data.prev_enabled, common.default_prev_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-prev-pointer-events', common.value(data.prev_enabled, common.default_prev_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-play-display', common.value(data.play_enabled, common.default_play_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-play-visibility', common.value(data.play_enabled, common.default_play_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-play-pointer-events', common.value(data.play_enabled, common.default_play_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-next-display', common.value(data.next_enabled, common.default_next_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-next-visibility', common.value(data.next_enabled, common.default_next_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-next-pointer-events', common.value(data.next_enabled, common.default_next_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-volume-display', common.value(data.volume_enabled, common.default_volume_enabled) ? 'flex' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-volume-visibility', common.value(data.volume_enabled, common.default_volume_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-volume-pointer-events', common.value(data.volume_enabled, common.default_volume_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-time-display', common.value(data.time_enabled, common.default_time_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-time-visibility', common.value(data.time_enabled, common.default_time_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-time-pointer-events', common.value(data.time_enabled, common.default_time_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-chapter-display', common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-chapter-visibility', common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-chapter-pointer-events', common.value(data.chapter_enabled, common.default_chapter_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-autonav-display', common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-autonav-visibility', common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-autonav-pointer-events', common.value(data.autonav_enabled, common.default_autonav_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-subtitles-display', common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-subtitles-visibility', common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-subtitles-pointer-events', common.value(data.subtitles_enabled, common.default_subtitles_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-settings-display', common.value(data.settings_enabled, common.default_settings_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-settings-visibility', common.value(data.settings_enabled, common.default_settings_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-settings-pointer-events', common.value(data.settings_enabled, common.default_settings_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-miniplayer-display', common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-miniplayer-visibility', common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-miniplayer-pointer-events', common.value(data.miniplayer_enabled, common.default_miniplayer_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-pip-display', common.value(data.pip_enabled, common.default_pip_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-pip-visibility', common.value(data.pip_enabled, common.default_pip_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-pip-pointer-events', common.value(data.pip_enabled, common.default_pip_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-size-display', common.value(data.size_enabled, common.default_size_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-size-visibility', common.value(data.size_enabled, common.default_size_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-size-pointer-events', common.value(data.size_enabled, common.default_size_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-remote-display', common.value(data.remote_enabled, common.default_remote_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-remote-visibility', common.value(data.remote_enabled, common.default_remote_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-remote-pointer-events', common.value(data.remote_enabled, common.default_remote_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-fullscreen-display', common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-fullscreen-visibility', common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-fullscreen-pointer-events', common.value(data.fullscreen_enabled, common.default_fullscreen_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-tooltip-display', common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-tooltip-visibility', common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-tooltip-pointer-events', common.value(data.tooltip_enabled, common.default_tooltip_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-youtube-display', common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-youtube-visibility', common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-youtube-pointer-events', common.value(data.youtube_enabled, common.default_youtube_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-more_videos-display', common.value(data.more_videos_enabled, common.default_more_videos_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-more_videos-visibility', common.value(data.more_videos_enabled, common.default_more_videos_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-more_videos-pointer-events', common.value(data.more_videos_enabled, common.default_more_videos_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-share-display', common.value(data.share_enabled, common.default_share_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-share-visibility', common.value(data.share_enabled, common.default_share_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-share-pointer-events', common.value(data.share_enabled, common.default_share_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-fullscreen-grid-display', common.value(data.fullscreen_grid_enabled, common.default_fullscreen_grid_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-fullscreen-grid-visibility', common.value(data.fullscreen_grid_enabled, common.default_fullscreen_grid_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-fullscreen-grid-pointer-events', common.value(data.fullscreen_grid_enabled, common.default_fullscreen_grid_enabled) ? 'unset' : 'none');
            fullscreen_grid_enabled = data.fullscreen_grid_enabled;

            document.documentElement.style.setProperty('--yt-simplify-search-voice-display', common.value(data.search_voice_enabled, common.default_search_voice_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-search-voice-visibility', common.value(data.search_voice_enabled, common.default_search_voice_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-search-voice-pointer-events', common.value(data.search_voice_enabled, common.default_search_voice_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-create-display', common.value(data.create_enabled, common.default_create_enabled) ? 'flex' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-create-visibility', common.value(data.create_enabled, common.default_create_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-create-pointer-events', common.value(data.create_enabled, common.default_create_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-notifications-display', common.value(data.notifications_enabled, common.default_notifications_enabled) ? 'flex' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-notifications-visibility', common.value(data.notifications_enabled, common.default_notifications_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-notifications-pointer-events', common.value(data.notifications_enabled, common.default_notifications_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-account-display', common.value(data.account_enabled, common.default_account_enabled) ? 'flex' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-account-visibility', common.value(data.account_enabled, common.default_account_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-account-pointer-events', common.value(data.account_enabled, common.default_account_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-shorts-section-display', common.value(data.sidebar_home_shorts_section_enabled, common.default_sidebar_home_shorts_section_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-shorts-section-visibility', common.value(data.sidebar_home_shorts_section_enabled, common.default_sidebar_home_shorts_section_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-shorts-section-pointer-events', common.value(data.sidebar_home_shorts_section_enabled, common.default_sidebar_home_shorts_section_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-display', common.value(data.sidebar_home_enabled, common.default_sidebar_home_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-visibility', common.value(data.sidebar_home_enabled, common.default_sidebar_home_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-home-pointer-events', common.value(data.sidebar_home_enabled, common.default_sidebar_home_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-shorts-display', common.value(data.sidebar_shorts_enabled, common.default_sidebar_shorts_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-shorts-visibility', common.value(data.sidebar_shorts_enabled, common.default_sidebar_shorts_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-shorts-pointer-events', common.value(data.sidebar_shorts_enabled, common.default_sidebar_shorts_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-section-display', common.value(data.sidebar_subscriptions_section_enabled, common.default_sidebar_subscriptions_section_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-section-visibility', common.value(data.sidebar_subscriptions_section_enabled, common.default_sidebar_subscriptions_section_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-section-pointer-events', common.value(data.sidebar_subscriptions_section_enabled, common.default_sidebar_subscriptions_section_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-display', common.value(data.sidebar_subscriptions_enabled, common.default_sidebar_subscriptions_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-visibility', common.value(data.sidebar_subscriptions_enabled, common.default_sidebar_subscriptions_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-pointer-events', common.value(data.sidebar_subscriptions_enabled, common.default_sidebar_subscriptions_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-channels-display', common.value(data.sidebar_subscriptions_channels_enabled, common.default_sidebar_subscriptions_channels_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-channels-visibility', common.value(data.sidebar_subscriptions_channels_enabled, common.default_sidebar_subscriptions_channels_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-subscriptions-channels-pointer-events', common.value(data.sidebar_subscriptions_channels_enabled, common.default_sidebar_subscriptions_channels_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-section-display', common.value(data.sidebar_library_section_enabled, common.default_sidebar_library_section_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-section-visibility', common.value(data.sidebar_library_section_enabled, common.default_sidebar_library_section_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-section-pointer-events', common.value(data.sidebar_library_section_enabled, common.default_sidebar_library_section_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-display', common.value(data.sidebar_library_enabled, common.default_sidebar_library_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-visibility', common.value(data.sidebar_library_enabled, common.default_sidebar_library_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-library-pointer-events', common.value(data.sidebar_library_enabled, common.default_sidebar_library_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-history-display', common.value(data.sidebar_history_enabled, common.default_sidebar_history_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-history-visibility', common.value(data.sidebar_history_enabled, common.default_sidebar_history_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-history-pointer-events', common.value(data.sidebar_history_enabled, common.default_sidebar_history_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-playlists-display', common.value(data.sidebar_playlists_enabled, common.default_sidebar_playlists_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-playlists-visibility', common.value(data.sidebar_playlists_enabled, common.default_sidebar_playlists_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-playlists-pointer-events', common.value(data.sidebar_playlists_enabled, common.default_sidebar_playlists_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-watch-later-display', common.value(data.sidebar_watch_later_enabled, common.default_sidebar_watch_later_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-watch-later-visibility', common.value(data.sidebar_watch_later_enabled, common.default_sidebar_watch_later_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-watch-later-pointer-events', common.value(data.sidebar_watch_later_enabled, common.default_sidebar_watch_later_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-liked-videos-display', common.value(data.sidebar_liked_videos_enabled, common.default_sidebar_liked_videos_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-liked-videos-visibility', common.value(data.sidebar_liked_videos_enabled, common.default_sidebar_liked_videos_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-liked-videos-pointer-events', common.value(data.sidebar_liked_videos_enabled, common.default_sidebar_liked_videos_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-your-videos-display', common.value(data.sidebar_your_videos_enabled, common.default_sidebar_your_videos_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-your-videos-visibility', common.value(data.sidebar_your_videos_enabled, common.default_sidebar_your_videos_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-your-videos-pointer-events', common.value(data.sidebar_your_videos_enabled, common.default_sidebar_your_videos_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-downloads-display', common.value(data.sidebar_downloads_enabled, common.default_sidebar_downloads_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-downloads-visibility', common.value(data.sidebar_downloads_enabled, common.default_sidebar_downloads_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-downloads-pointer-events', common.value(data.sidebar_downloads_enabled, common.default_sidebar_downloads_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-podcasts-display', common.value(data.sidebar_podcasts_enabled, common.default_sidebar_podcasts_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-podcasts-visibility', common.value(data.sidebar_podcasts_enabled, common.default_sidebar_podcasts_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-podcasts-pointer-events', common.value(data.sidebar_podcasts_enabled, common.default_sidebar_podcasts_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-clips-display', common.value(data.sidebar_clips_enabled, common.default_sidebar_clips_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-clips-visibility', common.value(data.sidebar_clips_enabled, common.default_sidebar_clips_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-clips-pointer-events', common.value(data.sidebar_clips_enabled, common.default_sidebar_clips_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-explore-section-display', common.value(data.sidebar_explore_section_enabled, common.default_sidebar_explore_section_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-explore-section-visibility', common.value(data.sidebar_explore_section_enabled, common.default_sidebar_explore_section_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-explore-section-pointer-events', common.value(data.sidebar_explore_section_enabled, common.default_sidebar_explore_section_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-more-from-youtube-section-display', common.value(data.sidebar_more_from_youtube_section_enabled, common.default_sidebar_more_from_youtube_section_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-more-from-youtube-section-visibility', common.value(data.sidebar_more_from_youtube_section_enabled, common.default_sidebar_more_from_youtube_section_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-more-from-youtube-section-pointer-events', common.value(data.sidebar_more_from_youtube_section_enabled, common.default_sidebar_more_from_youtube_section_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-premium-display', common.value(data.sidebar_youtube_premium_enabled, common.default_sidebar_youtube_premium_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-premium-visibility', common.value(data.sidebar_youtube_premium_enabled, common.default_sidebar_youtube_premium_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-premium-pointer-events', common.value(data.sidebar_youtube_premium_enabled, common.default_sidebar_youtube_premium_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-music-display', common.value(data.sidebar_youtube_music_enabled, common.default_sidebar_youtube_music_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-music-visibility', common.value(data.sidebar_youtube_music_enabled, common.default_sidebar_youtube_music_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-music-pointer-events', common.value(data.sidebar_youtube_music_enabled, common.default_sidebar_youtube_music_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-kids-display', common.value(data.sidebar_youtube_kids_enabled, common.default_sidebar_youtube_kids_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-kids-visibility', common.value(data.sidebar_youtube_kids_enabled, common.default_sidebar_youtube_kids_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-youtube-kids-pointer-events', common.value(data.sidebar_youtube_kids_enabled, common.default_sidebar_youtube_kids_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-report-history-display', common.value(data.sidebar_report_history_enabled, common.default_sidebar_report_history_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-report-history-visibility', common.value(data.sidebar_report_history_enabled, common.default_sidebar_report_history_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-report-history-pointer-events', common.value(data.sidebar_report_history_enabled, common.default_sidebar_report_history_enabled) ? 'unset' : 'none');

            document.documentElement.style.setProperty('--yt-simplify-sidebar-about-display', common.value(data.sidebar_about_enabled, common.default_sidebar_about_enabled) ? 'block' : 'none');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-about-visibility', common.value(data.sidebar_about_enabled, common.default_sidebar_about_enabled) ? 'unset' : 'hidden');
            document.documentElement.style.setProperty('--yt-simplify-sidebar-about-pointer-events', common.value(data.sidebar_about_enabled, common.default_sidebar_about_enabled) ? 'unset' : 'none');
        });
    }

    chrome.storage.onChanged.addListener(loadSettings);

    loadSettings();

    let fullscreen_grid_enabled = common.default_fullscreen_grid_enabled;

    setInterval(() => {
        const player = document.getElementById('movie_player');
        if (!player) return;

        const video = player.querySelector('video');
        if (!video) return;

        if (player.classList.contains('ytp-fullscreen')) {
            if (common.value(fullscreen_grid_enabled, common.default_fullscreen_grid_enabled)) {
                if (!player.classList.contains('ytp-full-bleed-player')) {
                    player.style.setProperty('--ytp-grid-scroll-percentage', 0);
                    player.classList.add('ytp-full-bleed-player');
                }
            } else {
                if (player.classList.contains('ytp-full-bleed-player')) {
                    player.style.setProperty('--ytp-grid-scroll-percentage', 0);
                    player.classList.remove('ytp-full-bleed-player');
                }
            }
        }
    }, 500);
}