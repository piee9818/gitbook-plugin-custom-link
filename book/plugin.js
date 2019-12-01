require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['edit-link'];
        var newBase = conf.new.base;
        var newLabel = conf.new.label;
        var lang = gitbook.state.innerLanguage;
        if (lang) {
            // label can be a unique string for multi-languages site
            if (typeof label === 'object') label = label[lang];

            lang = lang + '/';
        }

        // Add slash at the end if not present
        if (newBase.slice(-1) != "/") {
            newBase = newBase + "/";
        }
        
        gitbook.toolbar.createButton({
            icon: 'fa fa-file',
            text: newLabel,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                var idx=filepath.lastIndexOf("/");
                window.open(newBase + "/" + filepath.substring(0,idx+1));
            }
        });
    });

});
