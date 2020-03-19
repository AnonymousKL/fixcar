function toTop() {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
}
document.addEventListener("DOMContentLoaded",function(){


},false)

// quytrinh
function r2() {
  document.getElementById('aaa').style.display = "none"
  document.getElementById('aaa').innerHTML = 'Sau khi chủ đầu tư duyệt báo giá, LYN Design sẽ trình bày ý tưởng và phương án sơ bộ, phương án có thể được điều chỉnh cho phù hợp với nhu cầu sử dụng và ngân sách dự trù để chủ đầu tư duyệt.'
  document.getElementById('aaa').style.display = "block"
  document.getElementById('r1').style.background = "#fab702"
  document.getElementById('r1').style.border = "none"
  document.getElementById('r3').style.background = "#fab702"
  document.getElementById('r3').style.border = "none"
  document.getElementById('r2').style.background = "none"
  document.getElementById('r2').style.background = "none"
  document.getElementById('r2').style.border = "1px solid white"


}
function r3() {
  document.getElementById('aaa').style.display = "none"
  document.getElementById('aaa').innerHTML = 'Sau khi chủ đầu tư duyệt báo giá, LYN Design sẽ trình bày ý tưởng và phương án sơ bộ, phương án có thể được điều chỉnh cho phù hợp với nhu cầu sử dụng.'
  document.getElementById('aaa').style.display = "block"
  document.getElementById('r3').style.background = "none"
  document.getElementById('r3').style.background = "none"
  document.getElementById('r3').style.border = "1px solid white"
  document.getElementById('r2').style.background = "#fab702"
  document.getElementById('r2').style.border = "none"
  document.getElementById('r1').style.background = "#fab702"
  document.getElementById('r1').style.border = "none"

}
function r1() {
  document.getElementById('aaa').style.display = "none"
  var ul = document.getElementById('aaa')
  ul.innerHTML = 
 'Gặp chủ đầu tư để trao đổi thông tin, hiểu rõ và thống nhất được yêu cầu của chủ đầu tư.'
  + '<br>Chủ đầu tư cung cấp giấy tờ, bản vẽ liên quan.</br>'
  + 'Tư vấn gói dịch vụ thiết kế, thi công, sản xuất phù hợp với ngân sách của chủ đầu tư.'
  + '<br>Tiến hành khảo sát.</br>'
  + 'Sau khi biết rõ yêu cầu của chủ đầu tư và khảo sát hiện trạng, LYN Design sẽ báo giá chi phí thiết kế, thi công, sản xuất.'
  document.getElementById('aaa').style.display = "block"
  document.getElementById('r2').style.background = "#fab702"
  document.getElementById('r2').style.border = "none"
  document.getElementById('r3').style.background = "#fab702"
  document.getElementById('r3').style.border = "none"
  document.getElementById('r1').style.background = "none"
  document.getElementById('r1').style.border = "1px solid white"
}