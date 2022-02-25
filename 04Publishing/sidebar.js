/* JS코드 작성 */
/* null값을 해소하는 방법
1. window온로드(페이지에서 1개만 사용가능)
2. <script src="sidebar/js">를 아래쪽에 삽입하기
*/
window.onload = function() {

    var menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", onSideNav);  //(이벤트의 종류, 실행시킬 함수)
    
}
function onSideNav() {
    var side = document.querySelector(".side");

    if(side.style.width == "200px") {
        side.style.width = "0px";
    } else {
        side.style.width = "200px";
    }
    
}


