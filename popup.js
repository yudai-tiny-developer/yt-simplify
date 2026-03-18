import(chrome.runtime.getURL('common.js')).then(common =>
    import(chrome.runtime.getURL('settings.js')).then(settings =>
        import(chrome.runtime.getURL('progress.js')).then(progress =>
            chrome.storage.local.get(common.storage, data =>
                main(common, settings, progress, data)
            )
        )
    )
);

function main(common, settings, progress, data) {
    const row_class = 'row';
    const cell_class = 'cell';
    const toggle_class = 'toggle';
    const label_class = 'switch';
    const input_class = 'rate';
    const progress_class = 'progress';
    const done_class = 'done';

    const container1 = document.querySelector('div#container1');
    const container2 = document.querySelector('div#container2');
    const container3 = document.querySelector('div#container3');
    const container4 = document.querySelector('div#container4');
    const container5 = document.querySelector('div#container5');
    const reset_button = document.querySelector('input#reset');
    const progress_div = document.querySelector('div#reset_progress');

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.prev));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'prev_enabled', data.prev_enabled, common.default_prev_enabled, common.value));
        container1.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.play));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'play_enabled', data.play_enabled, common.default_play_enabled, common.value));
        container1.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.next));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'next_enabled', data.next_enabled, common.default_next_enabled, common.value));
        container1.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.volume));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'volume_enabled', data.volume_enabled, common.default_volume_enabled, common.value));
        container1.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.time));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'time_enabled', data.time_enabled, common.default_time_enabled, common.value));
        container1.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.chapter));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'chapter_enabled', data.chapter_enabled, common.default_chapter_enabled, common.value));
        container1.appendChild(row);
    }

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.fullscreen_grid));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'fullscreen_grid_enabled', data.fullscreen_grid_enabled, common.default_fullscreen_grid_enabled, common.value));
        container2.appendChild(row);
    }

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.autonav));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'autonav_enabled', data.autonav_enabled, common.default_autonav_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.subtitles));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'subtitles_enabled', data.subtitles_enabled, common.default_subtitles_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.settings));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'settings_enabled', data.settings_enabled, common.default_settings_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.pip));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'pip_enabled', data.pip_enabled, common.default_pip_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.size));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'size_enabled', data.size_enabled, common.default_size_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.remote));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'remote_enabled', data.remote_enabled, common.default_remote_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.fullscreen));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'fullscreen_enabled', data.fullscreen_enabled, common.default_fullscreen_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.tooltip));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'tooltip_enabled', data.tooltip_enabled, common.default_tooltip_enabled, common.value));
        container3.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.youtube));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'youtube_enabled', data.youtube_enabled, common.default_youtube_enabled, common.value));
        container3.appendChild(row);
    }

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.search_voice));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'search_voice_enabled', data.search_voice_enabled, common.default_search_voice_enabled, common.value));
        container4.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.create));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'create_enabled', data.create_enabled, common.default_create_enabled, common.value));
        container4.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.notifications));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'notifications_enabled', data.notifications_enabled, common.default_notifications_enabled, common.value));
        container4.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.account));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'account_enabled', data.account_enabled, common.default_account_enabled, common.value));
        container4.appendChild(row);
    }

    // Home & Shorts Section
    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_home_shorts_section));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_home_shorts_section_enabled', data.sidebar_home_shorts_section_enabled, common.default_sidebar_home_shorts_section_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_home));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_home_enabled', data.sidebar_home_enabled, common.default_sidebar_home_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_shorts));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_shorts_enabled', data.sidebar_shorts_enabled, common.default_sidebar_shorts_enabled, common.value));
        container5.appendChild(row);
    }

    // Subscriptions Section
    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_subscriptions_section));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_subscriptions_section_enabled', data.sidebar_subscriptions_section_enabled, common.default_sidebar_subscriptions_section_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_subscriptions));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_subscriptions_enabled', data.sidebar_subscriptions_enabled, common.default_sidebar_subscriptions_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_subscriptions_channels));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_subscriptions_channels_enabled', data.sidebar_subscriptions_channels_enabled, common.default_sidebar_subscriptions_channels_enabled, common.value));
        container5.appendChild(row);
    }

    // Library Section
    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_library_section));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_library_section_enabled', data.sidebar_library_section_enabled, common.default_sidebar_library_section_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_library));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_library_enabled', data.sidebar_library_enabled, common.default_sidebar_library_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_history));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_history_enabled', data.sidebar_history_enabled, common.default_sidebar_history_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_playlists));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_playlists_enabled', data.sidebar_playlists_enabled, common.default_sidebar_playlists_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_watch_later));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_watch_later_enabled', data.sidebar_watch_later_enabled, common.default_sidebar_watch_later_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_liked_videos));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_liked_videos_enabled', data.sidebar_liked_videos_enabled, common.default_sidebar_liked_videos_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_your_videos));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_your_videos_enabled', data.sidebar_your_videos_enabled, common.default_sidebar_your_videos_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_downloads));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_downloads_enabled', data.sidebar_downloads_enabled, common.default_sidebar_downloads_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_podcasts));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_podcasts_enabled', data.sidebar_podcasts_enabled, common.default_sidebar_podcasts_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_clips));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_clips_enabled', data.sidebar_clips_enabled, common.default_sidebar_clips_enabled, common.value));
        container5.appendChild(row);
    }

    // Explore Section
    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_explore_section));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_explore_section_enabled', data.sidebar_explore_section_enabled, common.default_sidebar_explore_section_enabled, common.value));
        container5.appendChild(row);
    }

    // More from YouTube Section
    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_more_from_youtube_section));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_more_from_youtube_section_enabled', data.sidebar_more_from_youtube_section_enabled, common.default_sidebar_more_from_youtube_section_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_youtube_premium));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_youtube_premium_enabled', data.sidebar_youtube_premium_enabled, common.default_sidebar_youtube_premium_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_youtube_music));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_youtube_music_enabled', data.sidebar_youtube_music_enabled, common.default_sidebar_youtube_music_enabled, common.value));
        container5.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_youtube_kids));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_youtube_kids_enabled', data.sidebar_youtube_kids_enabled, common.default_sidebar_youtube_kids_enabled, common.value));
        container5.appendChild(row);
    }

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_report_history));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_report_history_enabled', data.sidebar_report_history_enabled, common.default_sidebar_report_history_enabled, common.value));
        container5.appendChild(row);
    }

    {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.sidebar_about));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'sidebar_about_enabled', data.sidebar_about_enabled, common.default_sidebar_about_enabled, common.value));
        container5.appendChild(row);
    }

    settings.registerResetButton(reset_button, progress_div, progress_class, done_class, toggle_class, input_class, progress);
}