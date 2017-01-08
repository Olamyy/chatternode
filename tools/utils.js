/**
 * Created by lekanterragon on 1/6/17.
 */

let utils = module.exports;
utils.fs = require('fs');
//utils.math = require('math');
Regex = require('regex');


utils.cleanWhiteSpace = function(text){
    return text.replace('\n', ' ').replace('\r', ' ').replace('\t', ' ');
};

utils.import_file = function(path){
    fs.stat(path, function(err, stat){
        if(err == null) {
            return path
        } else if(err.code == 'ENOENT') {
            // file does not exist
            throw new Error("Error: ", path, 'does not exist');
        } else {
            console.log('Error: ', err.code);
        }
    })
};



utils.handle_input = function(prompt, callback) {
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(prompt, function (x) {
        rl.close();
        callback(x);
    });
};


utils.isNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};


utils.parse_dateTime = function (text, datetime) {
     datetime = Date.now();
};

utils._years = ['years', 'year', 'yrs', 'yr'];

utils._days = ['days', 'day'];

utils._minute = ['minute', 'minutes', 'mins'];

utils._hour = ['hrs', 'hours', 'hour'];

utils._week = ['weeks', 'week', 'wks'];

utils._month = ['month', 'months'];

//Regex

utils._day_names = 'monday|tuesday|wednesday|thursday|friday|saturday|sunday';

utils._month_names_long = (
    'january|february|march|april|may|june|july|august|september|october|november|december'
);

utils._month_names = utils._month_names_long + '|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec';

utils._day_nearest_names = 'today|yesterday|tomorrow|tonight|tonite';

utils._numbers = "(^a(?=\s)|one|two|three|four|five|six|seven|eight|nine|ten| \
                    eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen| \
                    eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty| \
                    ninety|hundred|thousand)";

utils._re_dmy = '(' + "|" + (utils._day_names + utils._minute + utils._years + utils._week + utils._month) + ')';

utils._re_duration = '(before|after|earlier|later|ago|from\snow)';

utils._re_year = '(19|20)\d{2}|^(19|20)\d{2}';

utils._re_timeframe = 'this|coming|next|following|previous|last|end\sof\sthe';

utils._re_ordinal = 'st|nd|rd|th|first|second|third|fourth|fourth|' + utils._re_timeframe;

utils._re_time = new Regex('(?P<hour>\d{1,2})(\:(?P<minute>\d{1,2})|(?P<convention>am|pm))');

utils._re_separator = ("of|at|on");
//
//console.log(utils._re_time.test("abb")
//);