var $j = jQuery.noConflict();
var a = '&nbsp;';
$j(window).scroll(function () {

    var oTop = $j('.facts-figures').offset().top - screen.height + 500;
    if (a == '&nbsp;' && $j(window).scrollTop() > oTop) {

        $j('.counter').each(function () {
            var $this = $j(this),
                countTo = $this.attr('data-count');

            $j({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });



        });

        a = 1;
    }

});

//////////
