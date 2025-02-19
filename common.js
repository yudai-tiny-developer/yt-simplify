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
    'size_enabled',
    'fullscreen_enabled',
    'tooltip_enabled',
    'youtube_enabled',
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
export const default_size_enabled = false;
export const default_fullscreen_enabled = true;
export const default_tooltip_enabled = false;
export const default_youtube_enabled = false;

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
    size: chrome.i18n.getMessage('size'),
    fullscreen: chrome.i18n.getMessage('fullscreen'),
    tooltip: chrome.i18n.getMessage('tooltip'),
    youtube: chrome.i18n.getMessage('youtube'),
};

export function value(value, defaultValue) {
    return value === undefined ? defaultValue : value;
}

export function isLiveChat(url) {
    return url.startsWith('https://www.youtube.com/live_chat?')
        || url.startsWith('https://www.youtube.com/live_chat_replay?')
        ;
}