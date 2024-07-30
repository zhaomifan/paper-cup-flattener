/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
$('#submit').on('click', function () {
  console.log('dsdsd')
  var h = parseFloat($('#h').val())
  var d1 = parseFloat($('#d1').val())
  var d2 = parseFloat($('#d2').val())
  console.log(Math.pow((d1 - d2) / 2, 2))
  var l = Math.sqrt(Math.pow((d1 - d2) / 2, 2) + Math.pow(h, 2))
  var xita = (Math.PI * (d1 - d2)) / l
  var fai = (xita / Math.PI) * 180
  var r1 = (Math.PI * d1) / xita
  var r2 = r1 - l
  console.log(r1, r2, fai)
  $('#r1').val(fixTail(r1))
  $('#r2').val(fixTail(r2))
  $('#l').val(fixTail(l))
  $('#xita').val(fixTail(xita))
  $('#fai').val(fixTail(fai) + '°')
})

function fixTail (num) {
  return Math.round(num * 100) / 100
}
