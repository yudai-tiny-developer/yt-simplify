export const storage = [
    'prev_enabled',
    'play_enabled',
    'next_enabled',
    'volume_enabled',
    'time_enabled',
    'chapter_enabled',

    'autonav_enabled',
    'subtitles_enabled',
    'settings_enabled',
    'miniplayer_enabled',
    'pip_enabled',
    'size_enabled',
    'remote_enabled',
    'fullscreen_enabled',
    'tooltip_enabled',
    'youtube_enabled',

    'fullscreen_grid_enabled',

    'search_voice_enabled',
    'create_enabled',
    'notifications_enabled',
    'account_enabled',

    'sidebar_home_shorts_section_enabled',
    'sidebar_home_enabled',
    'sidebar_shorts_enabled',

    'sidebar_subscriptions_section_enabled',
    'sidebar_subscriptions_enabled',
    'sidebar_subscriptions_channels_enabled',

    'sidebar_library_section_enabled',
    'sidebar_library_enabled',
    'sidebar_history_enabled',
    'sidebar_playlists_enabled',
    'sidebar_watch_later_enabled',
    'sidebar_liked_videos_enabled',
    'sidebar_your_videos_enabled',
    'sidebar_downloads_enabled',

    'sidebar_explore_section_enabled',
    'sidebar_music_enabled',
    'sidebar_movies_enabled',
    'sidebar_live_enabled',
    'sidebar_gaming_enabled',
    'sidebar_news_enabled',
    'sidebar_sports_enabled',
    'sidebar_courses_enabled',

    'sidebar_more_from_youtube_section_enabled',
    'sidebar_youtube_premium_enabled',
    'sidebar_youtube_music_enabled',
    'sidebar_youtube_kids_enabled',

    'sidebar_report_history_enabled',

    'sidebar_about_enabled',
];

export const default_prev_enabled = false;
export const default_play_enabled = true;
export const default_next_enabled = false;
export const default_volume_enabled = true;
export const default_time_enabled = true;
export const default_chapter_enabled = true;

export const default_autonav_enabled = false;
export const default_subtitles_enabled = false;
export const default_settings_enabled = true;
export const default_miniplayer_enabled = false;
export const default_pip_enabled = false;
export const default_size_enabled = false;
export const default_remote_enabled = false;
export const default_fullscreen_enabled = true;
export const default_tooltip_enabled = false;
export const default_youtube_enabled = false;

export const default_fullscreen_grid_enabled = false;

export const default_search_voice_enabled = true;
export const default_create_enabled = true;
export const default_notifications_enabled = true;
export const default_account_enabled = true;

export const default_sidebar_home_shorts_section_enabled = true;
export const default_sidebar_home_enabled = true;
export const default_sidebar_shorts_enabled = true;

export const default_sidebar_subscriptions_section_enabled = true;
export const default_sidebar_subscriptions_enabled = true;
export const default_sidebar_subscriptions_channels_enabled = true;

export const default_sidebar_library_section_enabled = true;
export const default_sidebar_library_enabled = true;
export const default_sidebar_history_enabled = true;
export const default_sidebar_playlists_enabled = true;
export const default_sidebar_watch_later_enabled = true;
export const default_sidebar_liked_videos_enabled = true;
export const default_sidebar_your_videos_enabled = true;
export const default_sidebar_downloads_enabled = true;

export const default_sidebar_explore_section_enabled = true;
export const default_sidebar_music_enabled = true;
export const default_sidebar_movies_enabled = true;
export const default_sidebar_live_enabled = true;
export const default_sidebar_gaming_enabled = true;
export const default_sidebar_news_enabled = true;
export const default_sidebar_sports_enabled = true;
export const default_sidebar_courses_enabled = true;

export const default_sidebar_more_from_youtube_section_enabled = true;
export const default_sidebar_youtube_premium_enabled = true;
export const default_sidebar_youtube_music_enabled = true;
export const default_sidebar_youtube_kids_enabled = true;

export const default_sidebar_report_history_enabled = true;

export const default_sidebar_about_enabled = true;

export const label = {
    prev: chrome.i18n.getMessage('prev'),
    play: chrome.i18n.getMessage('play'),
    next: chrome.i18n.getMessage('next'),
    volume: chrome.i18n.getMessage('volume'),
    time: chrome.i18n.getMessage('time'),
    chapter: chrome.i18n.getMessage('chapter'),

    autonav: chrome.i18n.getMessage('autonav'),
    subtitles: chrome.i18n.getMessage('subtitles'),
    settings: chrome.i18n.getMessage('settings'),
    miniplayer: chrome.i18n.getMessage('miniplayer'),
    pip: chrome.i18n.getMessage('pip'),
    size: chrome.i18n.getMessage('size'),
    remote: chrome.i18n.getMessage('remote'),
    fullscreen: chrome.i18n.getMessage('fullscreen'),
    tooltip: chrome.i18n.getMessage('tooltip'),
    youtube: chrome.i18n.getMessage('youtube'),

    fullscreen_grid: chrome.i18n.getMessage('fullscreen_grid'),

    search_voice: chrome.i18n.getMessage('search_voice'),
    create: chrome.i18n.getMessage('create'),
    notifications: chrome.i18n.getMessage('notifications'),
    account: chrome.i18n.getMessage('account'),

    sidebar_home_shorts_section: chrome.i18n.getMessage('sidebar_home_shorts_section'),
    sidebar_home: chrome.i18n.getMessage('sidebar_home'),
    sidebar_shorts: chrome.i18n.getMessage('sidebar_shorts'),

    sidebar_subscriptions_section: chrome.i18n.getMessage('sidebar_subscriptions_section'),
    sidebar_subscriptions: chrome.i18n.getMessage('sidebar_subscriptions'),
    sidebar_subscriptions_channels: chrome.i18n.getMessage('sidebar_subscriptions_channels'),

    sidebar_library_section: chrome.i18n.getMessage('sidebar_library_section'),
    sidebar_library: chrome.i18n.getMessage('sidebar_library'),
    sidebar_history: chrome.i18n.getMessage('sidebar_history'),
    sidebar_playlists: chrome.i18n.getMessage('sidebar_playlists'),
    sidebar_watch_later: chrome.i18n.getMessage('sidebar_watch_later'),
    sidebar_liked_videos: chrome.i18n.getMessage('sidebar_liked_videos'),
    sidebar_your_videos: chrome.i18n.getMessage('sidebar_your_videos'),
    sidebar_downloads: chrome.i18n.getMessage('sidebar_downloads'),

    sidebar_explore_section: chrome.i18n.getMessage('sidebar_explore_section'),
    sidebar_music: chrome.i18n.getMessage('sidebar_music'),
    sidebar_movies: chrome.i18n.getMessage('sidebar_movies'),
    sidebar_live: chrome.i18n.getMessage('sidebar_live'),
    sidebar_gaming: chrome.i18n.getMessage('sidebar_gaming'),
    sidebar_news: chrome.i18n.getMessage('sidebar_news'),
    sidebar_sports: chrome.i18n.getMessage('sidebar_sports'),
    sidebar_courses: chrome.i18n.getMessage('sidebar_courses'),

    sidebar_more_from_youtube_section: chrome.i18n.getMessage('sidebar_more_from_youtube_section'),
    sidebar_youtube_premium: chrome.i18n.getMessage('sidebar_youtube_premium'),
    sidebar_youtube_music: chrome.i18n.getMessage('sidebar_youtube_music'),
    sidebar_youtube_kids: chrome.i18n.getMessage('sidebar_youtube_kids'),

    sidebar_report_history: chrome.i18n.getMessage('sidebar_report_history'),

    sidebar_about: chrome.i18n.getMessage('sidebar_about'),
};

export function value(value, defaultValue) {
    return value === undefined ? defaultValue : value;
}

export function isLiveChat(url) {
    return url.startsWith('https://www.youtube.com/live_chat?')
        || url.startsWith('https://www.youtube.com/live_chat_replay?')
        ;
}