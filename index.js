$(function () {
    $(window).scroll(function () {
        $('.wrap1_main_font').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).addClass('view');
            }
        });
    });
});

// ページ内遷移の処理
$('a[href^="#"]').click(function () {
    var speed = 500;
    // クリックされたaタグの値取得
    var href = $(this).attr("href");

    // 三項演算子で条件分岐
    // hrefが#か空文字の場合はhtmlを、それ以外はhrefを代入
    var target = $(href == "#" || href == "" ? "html" : href);

    // ヘッダーの高さを取得
    var headerHeight = $("header").height();
    // ヘッダーの高さを引く
    var position = target.offset().top - headerHeight - 40;

    // animateメソッドでスムーススクロールを行う
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
});

// ページが読み込まれるときに走る処理(別ページからidが付いている位置へ遷移する場合の処理)
$(window).on("load", function () {
    var id = location.hash;   // クリックされたaタグのid部分を取得
    var speed = 500;
    var headerHight = $("header").height();
    // ページが読み込まれたときidに値が入っていれば、遷移位置の設定を行う
    if ("" != id) {
        var position = $(id).offset().top - headerHight - 40;
        $("html").animate({ scrollTop: position }, speed);
    }
});