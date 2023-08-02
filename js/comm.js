//준비 이벤트
//html 코드를 다 읽고 나서 실행해줘
// $(document).ready(function () {});
//축약형
$(function () {
    //modal
    //.lst-bbs li:first-child 를 클릭했을때
    $(".lst-bbs li:first-child").click(function (e) {
        //a태그의 링크값없애기
        e.preventDefault();
        $("#modal").css("display", "flex");
        // $("#modal").show(); <- show는 인라인 블럭요소이기때문에 플렉스가 안먹음, 포지션으로 위치 재조절해줘야함!
    });

    $(".modal-box .btn-close").on("click", function () {
        // $("#modal").css("display", "none");
        $("#modal").hide();
    });
});
