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
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.autonav));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'autonav_enabled', data.autonav_enabled, common.default_autonav_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.subtitles));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'subtitles_enabled', data.subtitles_enabled, common.default_subtitles_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.settings));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'settings_enabled', data.settings_enabled, common.default_settings_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.miniplayer));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'miniplayer_enabled', data.miniplayer_enabled, common.default_miniplayer_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.pip));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'pip_enabled', data.pip_enabled, common.default_pip_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.size));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'size_enabled', data.size_enabled, common.default_size_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.remote));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'remote_enabled', data.remote_enabled, common.default_remote_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.fullscreen));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'fullscreen_enabled', data.fullscreen_enabled, common.default_fullscreen_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.tooltip));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'tooltip_enabled', data.tooltip_enabled, common.default_tooltip_enabled, common.value));
        container2.appendChild(row);
    } {
        const row = settings.createRow(row_class);
        row.appendChild(settings.createLabel(cell_class, common.label.youtube));
        row.appendChild(settings.createToggle(cell_class, toggle_class, label_class, 'youtube_enabled', data.youtube_enabled, common.default_youtube_enabled, common.value));
        container2.appendChild(row);
    }

    settings.registerResetButton(reset_button, progress_div, progress_class, done_class, toggle_class, input_class, progress);
}